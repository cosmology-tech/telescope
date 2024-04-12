import * as t from "@babel/types";
import { ToTextualSigMethod } from "./index";
import { identifier, callExpression, TypeLong } from "../../../utils";
import {
    getDefaultTSTypeFromProtoType,
    getFieldNames,
    getPushTextualSigLine,
    getTextualKeyName,
} from "../../types";

export const MSG_VAR_NAME = "message";
export const ARRAY_VAR_NAME = "results";

const setIfNotUndefinedAndNotNull = (
    prop: string,
    value: t.ExpressionStatement
): t.Statement => {
    return t.ifStatement(
        t.logicalExpression(
            "&&",
            t.binaryExpression(
                "!==",
                t.memberExpression(
                    t.identifier(MSG_VAR_NAME),
                    t.identifier(prop)
                ),
                t.identifier("undefined")
            ),
            t.binaryExpression(
                "!==",
                t.memberExpression(
                    t.identifier(MSG_VAR_NAME),
                    t.identifier(prop)
                ),
                t.nullLiteral()
            )
        ),
        t.blockStatement([value])
    );
};

export const toTextualSig = {
    scalar(args: ToTextualSigMethod, expr?: t.Expression | t.TSType) {
        const { propName, origName } = getFieldNames(args.field);

        return setIfNotUndefinedAndNotNull(
            propName,
            getPushTextualSigLine(
                ARRAY_VAR_NAME,
                t.templateLiteral(
                    [
                        t.templateElement({
                            raw: `${getTextualKeyName(origName)}: `,
                        }),
                        t.templateElement({
                            raw: "",
                        }),
                    ],
                    [
                        expr ??
                            t.memberExpression(
                                t.identifier("message"),
                                t.identifier(propName)
                            ),
                    ]
                ),
                t.identifier("indent")
            )
        );
    },

    //
    string(args: ToTextualSigMethod) {
        return toTextualSig.scalar(args);
    },

    // message.disableMacros = object.disableMacros ?? false;
    bool(args: ToTextualSigMethod) {
        return toTextualSig.scalar(args);
    },

    // message.doubleValue = object.doubleValue ?? 0;

    number(args: ToTextualSigMethod) {
        return toTextualSig.scalar(args);
    },

    int32(args: ToTextualSigMethod) {
        return toTextualSig.number(args);
    },
    uint32(args: ToTextualSigMethod) {
        return toTextualSig.number(args);
    },
    sint32(args: ToTextualSigMethod) {
        return toTextualSig.number(args);
    },
    fixed32(args: ToTextualSigMethod) {
        return toTextualSig.number(args);
    },
    sfixed32(args: ToTextualSigMethod) {
        return toTextualSig.number(args);
    },
    double(args: ToTextualSigMethod) {
        return toTextualSig.number(args);
    },
    float(args: ToTextualSigMethod) {
        return toTextualSig.number(args);
    },

    // OLD: message.myInt64Value = object.myInt64Value !== undefined && object.myInt64Value !== null ? Long.fromValue(object.myInt64Value) : Long.ZERO;
    // NEW: if( object.myInt64Value !== undefined && object.myInt64Value !== null ) { message.myInt64Value = Long.fromValue(object.myInt64Value) }
    long(args: ToTextualSigMethod) {
        return toTextualSig.scalar(args);
    },

    int64(args: ToTextualSigMethod) {
        return toTextualSig.long(args);
    },
    uint64(args: ToTextualSigMethod) {
        return toTextualSig.long(args);
    },
    sint64(args: ToTextualSigMethod) {
        return toTextualSig.long(args);
    },
    fixed64(args: ToTextualSigMethod) {
        return toTextualSig.long(args);
    },
    sfixed64(args: ToTextualSigMethod) {
        return toTextualSig.long(args);
    },

    // message.signDoc = object.signDoc !== undefined && object.signDoc !== null ? SignDocDirectAux.toTextualSig(object.signDoc) : SignDocDirectAux.toTextualSig({});
    type(args: ToTextualSigMethod) {
        const prop = args.field.name;
        let name = args.context.getTypeName(args.field);

        if (
            !args.context.options.aminoEncoding.useLegacyInlineEncoding &&
            args.context.options.interfaces.enabled &&
            args.context.options.interfaces?.useGlobalDecoderRegistry &&
            args.field.type === "google.protobuf.Any" &&
            args.field.options["(cosmos_proto.accepts_interface)"]
        ) {
            name = "GlobalDecoderRegistry";
        }

        return toTextualSig.scalar(args);
    },

    // message.mode = object.mode ?? 0;
    enum(args: ToTextualSigMethod) {
        return toTextualSig.scalar(args);
    },

    // message.queryData = object.queryData ?? new Uint8Array()
    bytes(args: ToTextualSigMethod) {
        return toTextualSig.scalar(args);
    },

    // message.period = object.period ?? undefined;

    duration(args: ToTextualSigMethod) {
        const durationFormat = args.context.pluginValue(
            "prototypes.typingsFormat.duration"
        );
        switch (durationFormat) {
            case "string":
                return toTextualSig.durationString(args);
            case "duration":
            default:
                return toTextualSig.type(args);
        }
    },

    durationString(args: ToTextualSigMethod) {
        return toTextualSig.scalar(args);
    },

    timestamp(args: ToTextualSigMethod) {
        const timestampFormat = args.context.pluginValue(
            "prototypes.typingsFormat.timestamp"
        );
        switch (timestampFormat) {
            case "timestamp":
                return toTextualSig.type(args);
            case "date":
            default:
                return toTextualSig.timestampDate(args);
        }
    },

    // message.periodReset = object.periodReset ?? undefined;

    timestampDate(args: ToTextualSigMethod) {
        return toTextualSig.scalar(args);
    },

    // message.referenceMap = Object.entries(object.referenceMap ?? {}).reduce<{
    //     [key: Long]: Reference;
    //   }>((acc, [key, value]) => {
    //     if (value !== undefined) {
    //       acc[Number(key)] = Reference.toTextualSig(value);
    //     }

    //     return acc;
    //   }, {});

    // message.labels = Object.entries(object.typeMap ?? {}).reduce<{
    //     [key: string]: string;
    // }>((acc, [key, value]) => {
    //     if (value !== undefined) {
    //         acc[key] = String(value);
    //     }

    //     return acc;
    // }, {});

    keyHash(args: ToTextualSigMethod) {
        const prop = args.field.name;
        const keyType = args.field.keyType;
        const valueType = args.field.parsedType.name;

        let toTextualSigWithArgs = null;
        // valueTypeType: string for identifier
        let valueTypeType = valueType;
        switch (valueType) {
            case "string":
                toTextualSigWithArgs = t.callExpression(
                    t.identifier("String"),
                    [t.identifier("value")]
                );
                break;
            case "int32":
            case "uint32":
                valueTypeType = "number";
                toTextualSigWithArgs = t.callExpression(
                    t.identifier("Number"),
                    [t.identifier("value")]
                );
                break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
                TypeLong.addUtil(args.context);

                valueTypeType = TypeLong.getPropType(args.context);
                toTextualSigWithArgs = TypeLong.getFromValueWithArgs(
                    args.context,
                    t.identifier("value")
                );
                break;
            default:
                toTextualSigWithArgs = t.callExpression(
                    t.memberExpression(
                        t.identifier(valueType),
                        t.identifier("toTextualSig")
                    ),
                    [t.identifier("value")]
                );
        }

        let wrapKey = null;
        let keyTypeType = null;
        switch (keyType) {
            case "string":
                wrapKey = (a) => a;
                keyTypeType = t.tsStringKeyword();
                break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
                wrapKey = (a) => t.callExpression(t.identifier("Number"), [a]);

                TypeLong.addUtil(args.context);

                keyTypeType = t.tsTypeReference(
                    TypeLong.getPropIdentifier(args.context)
                );
                break;
            case "int32":
            case "uint32":
                wrapKey = (a) => t.callExpression(t.identifier("Number"), [a]);
                keyTypeType = t.tsNumberKeyword();
                break;
            default:
                throw new Error("keyHash requires new type. Ask maintainers.");
        }

        return t.expressionStatement(
            t.assignmentExpression(
                "=",
                t.memberExpression(t.identifier("message"), t.identifier(prop)),
                callExpression(
                    t.memberExpression(
                        t.callExpression(
                            t.memberExpression(
                                t.identifier("Object"),
                                t.identifier("entries")
                            ),
                            [
                                t.logicalExpression(
                                    "??",
                                    t.memberExpression(
                                        t.identifier("object"),
                                        t.identifier(prop)
                                    ),
                                    t.objectExpression([])
                                ),
                            ]
                        ),
                        t.identifier("reduce")
                    ),
                    [
                        t.arrowFunctionExpression(
                            [
                                t.identifier("acc"),
                                t.arrayPattern([
                                    t.identifier("key"),
                                    t.identifier("value"),
                                ]),
                            ],
                            t.blockStatement([
                                t.ifStatement(
                                    t.binaryExpression(
                                        "!==",
                                        t.identifier("value"),
                                        t.identifier("undefined")
                                    ),
                                    t.blockStatement([
                                        t.expressionStatement(
                                            t.assignmentExpression(
                                                "=",
                                                t.memberExpression(
                                                    t.identifier("acc"),
                                                    wrapKey(
                                                        t.identifier("key")
                                                    ),
                                                    true
                                                ),
                                                toTextualSigWithArgs
                                            )
                                        ),
                                    ])
                                ),
                                t.returnStatement(t.identifier("acc")),
                            ])
                        ),
                        t.objectExpression([]),
                    ],
                    t.tsTypeParameterInstantiation([
                        t.tsTypeLiteral([
                            t.tsIndexSignature(
                                [
                                    identifier(
                                        "key",
                                        t.tsTypeAnnotation(keyTypeType)
                                    ),
                                ],
                                t.tsTypeAnnotation(
                                    t.tsTypeReference(
                                        t.identifier(valueTypeType)
                                    )
                                )
                            ),
                        ]),
                    ])
                )
            )
        );
    },

    // message.codeIds = object.codeIds?.map(e => Long.fromValue(e)) || [];
    array(args: ToTextualSigMethod, expr: t.Expression) {
        const prop = args.field.name;
        return t.expressionStatement(
            t.assignmentExpression(
                "=",
                t.memberExpression(t.identifier("message"), t.identifier(prop)),
                t.logicalExpression(
                    "||",
                    t.optionalCallExpression(
                        t.optionalMemberExpression(
                            t.memberExpression(
                                t.identifier("object"),
                                t.identifier(prop)
                            ),
                            t.identifier("map"),
                            false,
                            true
                        ),
                        [t.arrowFunctionExpression([t.identifier("e")], expr)],
                        false
                    ),
                    t.arrayExpression([])
                )
            )
        );
    },
};

export const arrayTypes = {
    // message.overloadId = object.overloadId?.map(e => e) || [];
    identity() {
        return t.identifier("e");
    },
    string() {
        return arrayTypes.identity();
    },
    bool() {
        return arrayTypes.identity();
    },
    bytes() {
        return arrayTypes.identity();
    },
    double() {
        return arrayTypes.identity();
    },
    float() {
        return arrayTypes.identity();
    },
    int32() {
        return arrayTypes.identity();
    },
    uint32() {
        return arrayTypes.identity();
    },
    sint32() {
        return arrayTypes.identity();
    },
    fixed32() {
        return arrayTypes.identity();
    },
    sfixed32() {
        return arrayTypes.identity();
    },
    enum() {
        return arrayTypes.identity();
    },

    // message.codeIds = object.codeIds?.map(e => Long.fromValue(e)) || [];
    long(args: ToTextualSigMethod) {
        TypeLong.addUtil(args.context);

        return TypeLong.getFromValueWithArgs(args.context, t.identifier("e"));
    },
    int64(args: ToTextualSigMethod) {
        return arrayTypes.long(args);
    },
    uint64(args: ToTextualSigMethod) {
        return arrayTypes.long(args);
    },
    sint64(args: ToTextualSigMethod) {
        return arrayTypes.long(args);
    },
    fixed64(args: ToTextualSigMethod) {
        return arrayTypes.long(args);
    },
    sfixed64(args: ToTextualSigMethod) {
        return arrayTypes.long(args);
    },

    // message.tokenInMaxs = object.tokenInMaxs?.map(e => Coin.toTextualSig(e)) || [];
    type(args: ToTextualSigMethod) {
        let name = args.context.getTypeName(args.field);
        let callee = t.memberExpression(
            t.identifier(name),
            t.identifier("toTextualSig")
        );

        if (
            !args.context.options.aminoEncoding.useLegacyInlineEncoding &&
            args.context.options.interfaces.enabled &&
            args.context.options.interfaces?.useGlobalDecoderRegistry &&
            args.field.type === "google.protobuf.Any" &&
            args.field.options["(cosmos_proto.accepts_interface)"]
        ) {
            name = "GlobalDecoderRegistry";

            callee = t.memberExpression(
                t.identifier(name),
                t.identifier("toTextualSig")
            );

            return t.tsAsExpression(
                t.callExpression(callee, [t.identifier("e")]),
                t.tsAnyKeyword()
            );
        }

        return t.callExpression(callee, [t.identifier("e")]);
    },
};
