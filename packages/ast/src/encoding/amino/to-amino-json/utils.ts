import * as t from "@babel/types";
import {
    BILLION,
    memberExpressionOrIdentifier,
    shorthandProperty,
    TypeLong,
} from "../../../utils";
import { protoFieldsToArray } from "../utils";
import { ToAminoParseField, toAminoParseField } from "./index";
import { getFieldOptionality, getOneOfs } from "../../proto";
import { ProtoField } from "@cosmology/types";

export const toAmino = {
    defaultType(args: ToAminoParseField, omitEmpty?: boolean) {
        const useOmitEmpty = !!args.context.pluginValue(
            "aminoEncoding.legacy.useOmitEmpty"
        );

        if (
            !(useOmitEmpty && omitEmpty) &&
            args.field.name === args.context.aminoCaseField(args.field) &&
            args.scope.length === 1
        ) {
            return shorthandProperty(args.field.name);
        }

        let valueExpr =
            useOmitEmpty && omitEmpty
                ? this.omitDefaultMemberExpressionOrIdentifier(args, args.scope)
                : memberExpressionOrIdentifier(args.scope);

        return t.objectProperty(
            t.identifier(args.context.aminoCaseField(args.field)),
            valueExpr
        );
    },

    long(args: ToAminoParseField, omitEmpty?: boolean) {
        const useOmitEmpty = !!args.context.pluginValue(
            "aminoEncoding.legacy.useOmitEmpty"
        );
        const useNullHandling = !!args.context.pluginValue(
            "aminoEncoding.legacy.useNullHandling"
        );
        let valueExpr =
            useOmitEmpty && omitEmpty
                ? this.omitDefaultMemberExpressionOrIdentifier(args, args.scope)
                : memberExpressionOrIdentifier(args.scope);

        const callExpression = useNullHandling
            ? t.optionalCallExpression
            : t.callExpression;

        return t.objectProperty(
            t.identifier(args.context.aminoCaseField(args.field)),
            callExpression(
                useNullHandling
                    ? t.optionalMemberExpression(
                          valueExpr,
                          t.identifier("toString"),
                          false,
                          true
                      )
                    : t.memberExpression(valueExpr, t.identifier("toString")),
                [],
                true
            )
        );
    },

    string(args: ToAminoParseField, omitEmpty?: boolean) {
        const useCosmosSDKDec = args.context.pluginValue(
            "aminoEncoding.customTypes.useCosmosSDKDec"
        );

        if (useCosmosSDKDec) {
            const isCosmosSDKDec =
                args.field.options?.["(gogoproto.customtype)"] ==
                    "github.com/cosmos/cosmos-sdk/types.Dec" ||
                args.field.options?.["(gogoproto.customtype)"] ==
                    "cosmossdk.io/math.LegacyDec";

            if (isCosmosSDKDec) {
                args.context.addUtil("padDecimal");
                return t.objectProperty(
                    t.identifier(args.context.aminoCaseField(args.field)),
                    t.callExpression(t.identifier("padDecimal"), [
                        memberExpressionOrIdentifier(args.scope),
                    ])
                );
            }
        }

        if (
            args.field.name === args.context.aminoCaseField(args.field) &&
            args.scope.length === 1
        ) {
            return shorthandProperty(args.field.name);
        }

        return t.objectProperty(
            t.identifier(args.context.aminoCaseField(args.field)),
            memberExpressionOrIdentifier(args.scope)
        );
    },

    stringArray(args: ToAminoParseField) {
        const useCosmosSDKDec = args.context.pluginValue(
            "aminoEncoding.customTypes.useCosmosSDKDec"
        );

        if (useCosmosSDKDec) {
            const isCosmosSDKDec =
                args.field.options?.["(gogoproto.customtype)"] ==
                    "github.com/cosmos/cosmos-sdk/types.Dec" ||
                args.field.options?.["(gogoproto.customtype)"] ==
                    "cosmossdk.io/math.LegacyDec";

            if (isCosmosSDKDec) {
                return toAmino.scalarArray(args, arrayTypes.stringDec);
            }
        }

        if (
            args.field.name === args.context.aminoCaseField(args.field) &&
            args.scope.length === 1
        ) {
            return shorthandProperty(args.field.name);
        }

        return t.objectProperty(
            t.identifier(args.context.aminoCaseField(args.field)),
            memberExpressionOrIdentifier(args.scope)
        );
    },

    rawBytes(args: ToAminoParseField) {
        args.context.addUtil("fromUtf8");
        return t.objectProperty(
            t.identifier(args.context.aminoCaseField(args.field)),
            t.callExpression(
                t.memberExpression(t.identifier("JSON"), t.identifier("parse")),
                [
                    t.callExpression(t.identifier("fromUtf8"), [
                        memberExpressionOrIdentifier(args.scope),
                    ]),
                ]
            )
        );
    },

    wasmByteCode(args: ToAminoParseField) {
        args.context.addUtil("toBase64");
        return t.objectProperty(
            t.identifier(args.context.aminoCaseField(args.field)),
            t.callExpression(t.identifier("toBase64"), [
                memberExpressionOrIdentifier(args.scope),
            ])
        );
    },

    duration(args: ToAminoParseField) {
        const durationFormat = args.context.pluginValue(
            "prototypes.typingsFormat.duration"
        );
        const updatedDuration = args.context.pluginValue(
            "prototypes.typingsFormat.updatedDuration"
        );
        switch (durationFormat) {
            case "duration":
                if (updatedDuration) {
                    return toAmino.durationType(args);
                }
            case "string":
            default:
                return toAmino.durationString(args);
        }
    },

    // (duration * 1_000_000_000).toString(),
    durationString(args: ToAminoParseField) {
        const exp = t.binaryExpression(
            "*",
            memberExpressionOrIdentifier(args.scope),
            BILLION
        );
        exp.extra = { parenthesized: true };
        const value = t.callExpression(
            t.memberExpression(exp, t.identifier("toString")),
            []
        );
        return t.objectProperty(
            t.identifier(args.context.aminoCaseField(args.field)),
            value
        );
    },

    // (duration.seconds.toInt() * 1_000_000_000).toString(),
    // what about nanos?
    durationType(args: ToAminoParseField) {
        const exp = t.binaryExpression(
            "*",
            t.callExpression(
                t.memberExpression(
                    t.memberExpression(
                        memberExpressionOrIdentifier(args.scope),
                        t.identifier("seconds")
                    ),
                    t.identifier("toInt")
                ),
                []
            ),
            BILLION
        );
        exp.extra = { parenthesized: true };
        const value = t.callExpression(
            t.memberExpression(exp, t.identifier("toString")),
            []
        );
        return t.objectProperty(
            t.identifier(args.context.aminoCaseField(args.field)),
            value
        );
    },

    height(args: ToAminoParseField) {
        args.context.addUtil("omitDefault");

        const value = t.objectExpression([
            t.objectProperty(
                t.identifier(args.context.aminoCasingFn("revision_height")),
                t.optionalCallExpression(
                    t.optionalMemberExpression(
                        t.callExpression(t.identifier("omitDefault"), [
                            t.memberExpression(
                                memberExpressionOrIdentifier(args.scope),
                                t.identifier("revisionHeight")
                            ),
                        ]),
                        t.identifier("toString"),
                        false,
                        true
                    ),
                    [],
                    false
                )
            ),
            //
            t.objectProperty(
                t.identifier(args.context.aminoCasingFn("revision_number")),
                t.optionalCallExpression(
                    t.optionalMemberExpression(
                        t.callExpression(t.identifier("omitDefault"), [
                            t.memberExpression(
                                memberExpressionOrIdentifier(args.scope),
                                t.identifier("revisionNumber")
                            ),
                        ]),
                        t.identifier("toString"),
                        false,
                        true
                    ),
                    [],
                    false
                )
            ),
        ]);

        const cond = t.conditionalExpression(
            memberExpressionOrIdentifier(args.scope),
            value,
            t.objectExpression([])
        );

        return t.objectProperty(
            t.identifier(args.context.aminoCaseField(args.field)),
            cond
        );
    },

    coinAmount(args: ToAminoParseField) {
        const longType = TypeLong.getType(args.context);

        switch (longType) {
            case "BigInt":
                return t.memberExpression(
                    memberExpressionOrIdentifier(args.scope),
                    t.identifier("amount")
                );
            case "Long":
            default:
                TypeLong.addUtil(args.context);

                return t.callExpression(
                    t.memberExpression(
                        t.callExpression(TypeLong.getFromValue(args.context), [
                            t.memberExpression(
                                memberExpressionOrIdentifier(args.scope),
                                t.identifier("amount")
                            ),
                        ]),
                        t.identifier("toString")
                    ),
                    []
                );
        }
    },

    coin(args: ToAminoParseField) {
        const value = t.objectExpression([
            t.objectProperty(
                t.identifier("denom"),
                t.memberExpression(
                    memberExpressionOrIdentifier(args.scope),
                    t.identifier("denom")
                )
            ),
            t.objectProperty(t.identifier("amount"), toAmino.coinAmount(args)),
        ]);
        return t.objectProperty(
            t.identifier(args.context.aminoCaseField(args.field)),
            value
        );
    },

    type({
        context,
        field,
        currentProtoPath,
        scope,
        fieldPath,
        nested,
        isOptional,
    }: ToAminoParseField) {
        /// TODO (can this be refactored out? e.g. no recursive calls in this file?)
        /// BEGIN
        const Type = context.getTypeFromCurrentPath(field, currentProtoPath);
        const parentField = field;
        const oneOfs = getOneOfs(Type);
        const properties = protoFieldsToArray(Type).map((field) => {
            const isOneOf = oneOfs.includes(field.name);
            const isOptional = getFieldOptionality(context, field, isOneOf);

            if (parentField.import) currentProtoPath = parentField.import;
            return toAminoParseField({
                context,
                field,
                currentProtoPath,
                scope: [...scope],
                fieldPath: [...fieldPath],
                nested,
                isOptional, // TODO how to handle nested optionality
            });
        });
        /// END
        return t.objectProperty(
            t.identifier(context.aminoCaseField(field)),
            t.objectExpression(properties)
        );
    },

    typeArray({
        context,
        field,
        currentProtoPath,
        scope,
        fieldPath,
        nested,
        isOptional,
    }: ToAminoParseField) {
        //////
        const variable = "el" + nested;
        const f = JSON.parse(JSON.stringify(field)); // clone
        const varProto: ProtoField = {
            ...f,
        };
        varProto.name = variable;
        varProto.options["(telescope:orig)"] = variable;
        varProto.options["(telescope:name)"] = variable;
        varProto.options["(telescope:camel)"] = variable;
        //////

        if (field.parsedType.type !== "Type") {
            throw new Error("Arrays only support types[Type] right now.");
        }

        const Type = context.getTypeFromCurrentPath(field, currentProtoPath);
        const parentField = field;
        const oneOfs = getOneOfs(Type);

        const properties = protoFieldsToArray(Type).map((field) => {
            const isOneOf = oneOfs.includes(field.name);
            const isOptional = getFieldOptionality(context, field, isOneOf);

            if (parentField.import) currentProtoPath = parentField.import;

            return toAminoParseField({
                context,
                field,
                currentProtoPath,
                scope: [variable],
                fieldPath: [varProto],
                nested: nested + 1,
                isOptional, // TODO how to handle nested optionality
            });
        });

        const expr = t.callExpression(
            t.memberExpression(
                memberExpressionOrIdentifier(scope),
                t.identifier("map")
            ),
            [
                t.arrowFunctionExpression(
                    [t.identifier(variable)],
                    t.objectExpression(properties)
                ),
            ]
        );

        return t.objectProperty(
            t.identifier(context.aminoCaseField(field)),
            expr
        );
    },

    scalarArray(
        {
            context,
            field,
            currentProtoPath,
            scope,
            nested,
            isOptional,
        }: ToAminoParseField,
        arrayTypeAstFunc: Function
    ) {
        const variable = "el" + nested;

        const expr = t.callExpression(
            t.memberExpression(
                memberExpressionOrIdentifier(scope),
                t.identifier("map")
            ),
            [
                t.arrowFunctionExpression(
                    [t.identifier(variable)],
                    arrayTypeAstFunc(variable, {
                        context,
                        field,
                        currentProtoPath,
                        scope,
                        nested,
                        isOptional,
                    })
                ),
            ]
        );

        return t.objectProperty(
            t.identifier(context.aminoCaseField(field)),
            expr
        );
    },

    pubkey(args: ToAminoParseField) {
        args.context.addUtil("decodePubkey");

        return t.objectProperty(
            t.identifier(args.field.name),
            t.tsNonNullExpression(
                t.callExpression(t.identifier("decodePubkey"), [
                    t.identifier(args.field.name),
                ])
            )
        );
    },
    omitDefaultMemberExpressionOrIdentifier(args: ToAminoParseField, names) {
        args.context.addUtil("omitDefault");
        return t.callExpression(t.identifier("omitDefault"), [
            memberExpressionOrIdentifier(names),
        ]);
    },
};

export const arrayTypes = {
    long(varname: string) {
        return t.callExpression(
            t.memberExpression(
                memberExpressionOrIdentifier([varname]),
                t.identifier("toString")
            ),
            []
        );
    },

    stringDec(varname: string, args: ToAminoParseField) {
        args.context.addUtil("padDecimal");
        return t.callExpression(t.identifier("padDecimal"), [
            memberExpressionOrIdentifier([varname]),
        ]);
    },
};
