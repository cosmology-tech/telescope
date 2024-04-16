import * as t from "@babel/types";
import {
    ENUM_PROTO2_DEFAULT,
    ENUM_PROTO3_DEFAULT,
    ProtoField,
    TelescopeLogLevel,
    TraversalSymbol,
} from "@cosmology/types";
import { getProtoFieldTypeName, TypeLong } from "../utils";
import { GenericParseContext, ProtoParseContext } from "./context";
import {
    getFieldOptionalityForDefaults,
    GOOGLE_TYPES,
    SCALAR_TYPES,
} from "./proto";

export const getFieldNames = (field: ProtoField) => {
    const propName = field.options?.["(telescope:name)"] ?? field.name;
    const origName = field.options?.["(telescope:orig)"] ?? field.name;
    return {
        propName,
        origName,
    };
};

export type TelescopeBaseTypes =
    | "Msg"
    | "SDKType"
    | "Amino"
    | "AminoMsg"
    | "ProtoMsg"
    | "Encoded";

const getSymbolName = (name: string, type: TelescopeBaseTypes = "Msg") => {
    let typeNameSuffix;
    switch (type) {
        case "ProtoMsg":
            typeNameSuffix = "ProtoMsg";
            break;
        case "AminoMsg":
            typeNameSuffix = "AminoMsg";
            break;
        case "Amino":
            typeNameSuffix = "Amino";
            break;
        case "SDKType":
            typeNameSuffix = "SDKType";
            break;
        case "Encoded":
            typeNameSuffix = "Encoded";
            break;
        case "Msg":
        default:
    }
    return [name, typeNameSuffix].filter(Boolean).join("");
};

export const SymbolNames = {
    Msg: (name: string) => getSymbolName(name, "Msg"),

    SDKType: (name: string) => getSymbolName(name, "SDKType"),

    ProtoMsg: (name: string) => getSymbolName(name, "ProtoMsg"),

    AminoMsg: (name: string) => getSymbolName(name, "AminoMsg"),

    Amino: (name: string) => getSymbolName(name, "Amino"),

    Encoded: (name: string) => getSymbolName(name, "Encoded"),
};

export const getFieldTypeReference = (
    context: ProtoParseContext,
    field: ProtoField,
    type: TelescopeBaseTypes = "Msg"
) => {
    let ast: any = null;
    let typ: any = null;

    if (SCALAR_TYPES.includes(field.type)) {
        // return on scalar
        typ = getTSTypeForProto(context, field);
        return {
            ast: typ,
        };
    } else if (GOOGLE_TYPES.includes(field.type)) {
        typ = getTSTypeFromGoogleType(context, field.type, type);
    } else {
        const propName = getProtoFieldTypeName(context, field);
        const MsgName =
            field.parsedType?.type === "Enum"
                ? propName
                : SymbolNames[type](propName);
        typ = t.tsTypeReference(t.identifier(MsgName));
    }

    const implementsAcceptsAny = context.pluginValue("interfaces.enabled");
    const lookupInterface = field.options?.["(cosmos_proto.accepts_interface)"];
    const isAnyType =
        field.parsedType?.type === "Type" && field.parsedType?.name === "Any";
    const isArray = field.rule === "repeated";
    const isBaseType = type === "Msg";
    const isEncodedType = type === "ProtoMsg";
    const isSDKType = type === "SDKType";

    // MARKED AS NOT DRY (symbols)
    let symbols: TraversalSymbol[] = null;
    if (implementsAcceptsAny && lookupInterface) {
        symbols = context.store._symbols.filter(
            (s) =>
                s.implementsType === lookupInterface &&
                s.ref === context.ref.filename
        );
        if (
            !symbols.length &&
            context.options.logLevel >= TelescopeLogLevel.Warn
        ) {
            console.warn(
                `[WARN] ${lookupInterface} is accepted but not implemented`
            );
        }
    }

    if (!isBaseType) {
        if (["ProtoMsg", "SDKType"].includes(type)) {
            symbols?.forEach((s) => {
                context.addImportDerivative({
                    type,
                    symbol: s,
                });
            });
        }
        // main type could be Any

        if (
            ["SDKType"].includes(type) &&
            // no derivatives for Enums!
            field.parsedType.type === "Type"
        ) {
            context.addImportDerivative({
                type,
                symbol: {
                    ref: context.ref.filename,
                    readAs: field.parsedType.name, // maybe not!
                    source: field.import,
                    symbolName: field.parsedType.name,
                    type: "import",
                },
            });
        }
    }

    // cast Any types!
    const isAnyInterface =
        isAnyType && lookupInterface && implementsAcceptsAny && symbols;
    const isTypeCastable = isAnyInterface && isBaseType;
    const isProtoTypeCastable = isAnyInterface && isEncodedType;
    const isSDKTypeCastable = isAnyInterface && isSDKType;

    const isNonArrayNullableType =
        field.parsedType?.type === "Type" &&
        field.rule !== "repeated" &&
        context.pluginValue("prototypes.allowUndefinedTypes");

    if (isTypeCastable) {
        const tp: any[] = symbols.map((a) =>
            t.tsTypeReference(t.identifier(a.readAs))
        );
        tp.push(typ);

        if (context.pluginValue("interfaces.useUnionTypes")) {
            if (!isArray) {
                tp.push(t.tsUndefinedKeyword());
            }
            ast = t.tsUnionType(tp);
        } else {
            // intersections
            if (isArray) {
                ast = t.tsIntersectionType(tp);
            } else {
                ast = t.tsUnionType([
                    t.tsIntersectionType(tp),
                    t.tsUndefinedKeyword(),
                ]);
            }
        }
    } else if (isProtoTypeCastable) {
        const tp: any[] = symbols.map((a) =>
            t.tsTypeReference(t.identifier(SymbolNames.ProtoMsg(a.readAs)))
        );
        symbols.forEach((a) => {
            context.addImportDerivative({
                type: "ProtoMsg",
                symbol: a,
            });
        });

        tp.push(typ);

        if (!isArray) {
            tp.push(t.tsUndefinedKeyword());
        }
        ast = t.tsUnionType(tp);
    } else if (isSDKTypeCastable) {
        const tp: any[] = symbols.map((a) =>
            t.tsTypeReference(t.identifier(SymbolNames.SDKType(a.readAs)))
        );
        symbols.forEach((a) => {
            context.addImportDerivative({
                type: "SDKType",
                symbol: a,
            });
        });

        tp.push(typ);

        if (!isArray) {
            tp.push(t.tsUndefinedKeyword());
        }
        ast = t.tsUnionType(tp);
    } else if (isNonArrayNullableType) {
        // regular types!
        ast = t.tsUnionType([typ, t.tsUndefinedKeyword()]);
    } else {
        ast = typ;
    }

    return { ast, isTypeCastableAnyType: isTypeCastable };
};

export const getFieldAminoTypeReference = (
    context: ProtoParseContext,
    field: ProtoField
) => {
    let ast: any = null;
    let typ: any = null;

    if (SCALAR_TYPES.includes(field.type)) {
        // return on scalar
        typ = getTSTypeForAmino(context, field);
        return typ;
    } else if (GOOGLE_TYPES.includes(field.type)) {
        typ = getTSTypeFromGoogleType(context, field.type, "Amino");
    } else {
        const propName = getProtoFieldTypeName(context, field);
        // enums don't need suffixes, etc.
        const MsgName =
            field.parsedType?.type === "Enum"
                ? propName
                : SymbolNames.Amino(propName);
        typ = t.tsTypeReference(t.identifier(MsgName));
    }

    if (field.parsedType?.type === "Type") {
        context.addImportDerivative({
            type: "Amino",
            symbol: {
                ref: context.ref.filename,
                readAs: field.parsedType.name, // maybe not!
                source: field.import,
                symbolName: field.parsedType.name,
                type: "import",
            },
        });
    }

    if (
        field.parsedType?.type === "Type" &&
        field.rule !== "repeated" &&
        context.pluginValue("prototypes.allowUndefinedTypes")
    ) {
        // NOTE: unfortunately bc of defaults...
        ast = t.tsUnionType([typ, t.tsUndefinedKeyword()]);
    } else {
        ast = typ;
    }

    return ast;
};

export const getTSType = (context: GenericParseContext, type: string) => {
    switch (type) {
        case "string":
            return t.tsStringKeyword();
        case "double":
        case "float":
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32":
            return t.tsNumberKeyword();
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
            TypeLong.addUtil(context);
            return t.tsTypeReference(TypeLong.getPropIdentifier(context));
        case "bytes":
            return t.tsTypeReference(t.identifier("Uint8Array"));
        case "bool":
            return t.tsBooleanKeyword();
        default:
            throw new Error("getTSType() type not found");
    }
};

export const getTSAminoType = (
    context: GenericParseContext,
    type: string,
    options?: any
) => {
    switch (type) {
        case "string":
            return t.tsStringKeyword();
        case "double":
        case "float":
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32":
            return t.tsNumberKeyword();
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
            return t.tsStringKeyword();
        case "bytes":
            // (gogoproto.customname) = "WASMByteCode",
            if (options?.["(gogoproto.customname)"] === "WASMByteCode") {
                return t.tsStringKeyword();
            }
            return t.tsTypeReference(t.identifier("Uint8Array"));
        case "bool":
            return t.tsBooleanKeyword();
        default:
            throw new Error("getTSType() type not found");
    }
};

export const getTSTypeFromGoogleType = (
    context: GenericParseContext,
    type: string,
    options: TelescopeBaseTypes = "Msg"
) => {
    const identifier = (str) => {
        return t.identifier(SymbolNames[options](str));
    };

    switch (type) {
        case "google.protobuf.Timestamp":
            if (options === "Amino" || options === "AminoMsg") {
                return t.tsStringKeyword();
            }

            switch (context.pluginValue("prototypes.typingsFormat.timestamp")) {
                case "timestamp":
                    return t.tsTypeReference(identifier("Timestamp"));
                case "date":
                default:
                    return t.tsTypeReference(t.identifier("Date"));
            }
        case "google.protobuf.Duration":
            switch (context.pluginValue("prototypes.typingsFormat.duration")) {
                case "duration":
                    return t.tsTypeReference(identifier("Duration"));
                case "string":
                default:
                    return t.tsStringKeyword();
            }
        case "google.protobuf.Any":
            return t.tsTypeReference(identifier("Any"));
        default:
            throw new Error("getTSTypeFromGoogleType() type not found");
    }
};

export const getTSTypeForAmino = (
    context: GenericParseContext,
    field: ProtoField
) => {
    switch (field.type) {
        case "bytes":
            if (
                field.options?.["(gogoproto.casttype)"] === "RawContractMessage"
            ) {
                return t.tsAnyKeyword();
            } else {
                return t.tsStringKeyword();
            }
        default:
            return getTSAminoType(context, field.type);
    }
};

export const getTSTypeForProto = (
    context: GenericParseContext,
    field: ProtoField
) => {
    return getTSType(context, field.type);
};

export const getDefaultTSTypeFromProtoType = (
    context: ProtoParseContext,
    field: ProtoField,
    isOneOf: boolean,
    useNullForOptionals: boolean = false
) => {
    const isOptional = getFieldOptionalityForDefaults(context, field, isOneOf);

    const setDefaultCustomTypesToUndefined = context.pluginValue(
        "prototypes.typingsFormat.setDefaultCustomTypesToUndefined"
    );

    if (field.rule === "repeated") {
        return t.arrayExpression([]);
    }

    if (field.keyType) {
        return t.objectExpression([]);
    }

    if (isOptional) {
        return useNullForOptionals
            ? t.nullLiteral()
            : t.identifier("undefined");
    }

    if (field.parsedType?.type === "Enum") {
        const enumDefault = getPreferredEnumDefault(context, field);

        return t.numericLiteral(enumDefault);
    }

    switch (field.type) {
        case "string":
            return t.stringLiteral("");
        case "double":
        case "float":
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32":
            return t.numericLiteral(0);
        case "uint64":
            TypeLong.addUtil(context);
            return TypeLong.getUZero(context);
        case "int64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
            TypeLong.addUtil(context);
            return TypeLong.getZero(context);
        case "bytes":
            return t.newExpression(t.identifier("Uint8Array"), []);
        case "bool":
            return t.booleanLiteral(false);

        // OTHER TYPES
        case "google.protobuf.Timestamp":
            if (setDefaultCustomTypesToUndefined) {
                return t.identifier("undefined");
            } else {
                const timestampType = context.pluginValue(
                    "prototypes.typingsFormat.timestamp"
                );

                switch (timestampType) {
                    case "timestamp":
                        return t.callExpression(
                            t.memberExpression(
                                t.identifier("Timestamp"),
                                t.identifier("fromPartial")
                            ),
                            [t.objectExpression([])]
                        );
                    case "date":
                        return t.newExpression(t.identifier("Date"), []);

                    default:
                        return t.identifier("undefined");
                }
            }

        // TODO: add cases for this later on
        case "google.protobuf.Duration":
            if (setDefaultCustomTypesToUndefined) {
                return t.identifier("undefined");
            } else {
                return getDefaultTSTypeFromProtoTypeDefault(context, field);
            }
        case "google.protobuf.Any":
            if (setDefaultCustomTypesToUndefined) {
                return t.identifier("undefined");
            } else {
                return getDefaultTSTypeFromProtoTypeDefault(context, field);
            }

        case "cosmos.base.v1beta1.Coin":
            if (setDefaultCustomTypesToUndefined) {
                return t.identifier("undefined");
            } else {
                return getDefaultTSTypeFromProtoTypeDefault(context, field);
            }

        case "cosmos.base.v1beta1.Coins":
            return t.arrayExpression([]);
        default:
            if (!field.type) {
                console.warn("Undefined! Can't get field of type:", field);
                return t.identifier("undefined");
            } else {
                return getDefaultTSTypeFromProtoTypeDefault(context, field);
            }
    }
};

export const getDefaultTSTypeFromAminoTypeDefault = (
    context: ProtoParseContext,
    field: ProtoField
) => {
    const typeName = getProtoFieldTypeName(context, field);

    return t.callExpression(
        t.memberExpression(t.identifier(typeName), t.identifier("toAmino")),
        [
            t.callExpression(
                t.memberExpression(
                    t.identifier(getProtoFieldTypeName(context, field)),
                    t.identifier("fromPartial")
                ),
                [t.objectExpression([])]
            ),
        ]
    );
};

function getDefaultTSTypeFromProtoTypeDefault(
    context: ProtoParseContext,
    field: ProtoField
) {
    return t.callExpression(
        t.memberExpression(
            t.identifier(getProtoFieldTypeName(context, field)),
            t.identifier("fromPartial")
        ),
        [t.objectExpression([])]
    );
}

function getPreferredEnumDefault(
    context: ProtoParseContext,
    field: ProtoField
) {
    const autoFixUndefinedEnumDefault = context.pluginValue(
        "prototypes.typingsFormat.autoFixUndefinedEnumDefault"
    );

    if (autoFixUndefinedEnumDefault) {
        const typeName = getProtoFieldTypeName(context, field);
        return context.getDefaultOrExistingSmallestEnumValue(
            getPackage(field),
            typeName
        );
    } else {
        if (context.ref.proto?.syntax === "proto2") {
            return ENUM_PROTO2_DEFAULT;
        } else {
            return ENUM_PROTO3_DEFAULT;
        }
    }
}

function getPackage(field: ProtoField) {
    const pkgs = field.scope?.flat();
    return pkgs ? pkgs[0] : "";
}

export const getPushTextualSigLine = (
    arrayVar: string,
    textExp: t.Expression,
    indentInc?: number
) => {
    const newClass = t.newExpression(t.identifier("TextualSigLine"), [
        textExp,
        t.identifier("indent"),
        t.identifier("expert"),
    ]);

    const pushedObj = indentInc
        ? t.callExpression(
              t.memberExpression(newClass, t.identifier("indentAdd")),
              [t.numericLiteral(indentInc)]
          )
        : newClass;

    return t.expressionStatement(
        t.callExpression(
            t.memberExpression(t.identifier(arrayVar), t.identifier("push")),
            [pushedObj]
        )
    );
};

/**
 * Get the textual key name
 *
 * e.g.:
 * `orig_name` -> `Orig name`
 * `key` -> `Key`
 * @param origName
 * @returns
 */
export const getTextualKeyName = (origName: string) => {
    const splitted = origName.split("_");

    splitted[0] = splitted[0].charAt(0).toUpperCase() + splitted[0].slice(1);

    return splitted.join(" ");
};
