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
export const TEXTUAL_METHOD_NAME = "toTextualSig";

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
    scalar(
        args: ToTextualSigMethod,
        expr?: t.Expression | t.TSType,
        indentInc?: number
    ) {
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
                                t.identifier(MSG_VAR_NAME),
                                t.identifier(propName)
                            ),
                    ]
                ),
                indentInc
            )
        );
    },

    /**
     * create code for formatted scalar with formatter
     * @param args
     * @param formatter
     * @param isFormatterFromUtilHelper is formatter from util helper. default is true
     * @returns
     */
    formattedScalar(
        args: ToTextualSigMethod,
        formatter: string,
        indentInc?: number,
        expr?: t.Expression,
        isFormatterFromUtilHelper: boolean = true
    ) {
        if (isFormatterFromUtilHelper) {
            args.context.addUtil(formatter);
        }

        const { propName } = getFieldNames(args.field);

        return toTextualSig.scalar(
            args,
            t.callExpression(t.identifier(formatter), [
                expr ??
                    t.memberExpression(
                        t.identifier(MSG_VAR_NAME),
                        t.identifier(propName)
                    ),
            ]),
            indentInc
        );
    },

    // if (message.str !== undefined && message.str !== null) {
    //   results.push({
    //     text: `Str: ${message.str}`,
    //     indent: indent
    //   });
    // }
    string(args: ToTextualSigMethod) {
        const isCosmosSDKDec =
            args.field.options?.["(gogoproto.customtype)"] ==
                "github.com/cosmos/cosmos-sdk/types.Dec" ||
            args.field.options?.["(gogoproto.customtype)"] ==
                "github.com/cosmos/cosmos-sdk/types.Int" ||
            args.field.options?.["(gogoproto.customtype)"] ==
                "cosmossdk.io/math.LegacyDec";

        if (isCosmosSDKDec) {
            return toTextualSig.formattedScalar(
                args,
                "formatNumberWithThousandSeparator",
                1
            );
        } else {
            return toTextualSig.scalar(args, null, 1);
        }
    },

    // if (message.b !== undefined && message.b !== null) {
    //   results.push({
    //     text: `B: ${fromBooleanToString(message.b)}`,
    //     indent: indent
    //   });
    // }
    bool(args: ToTextualSigMethod) {
        return toTextualSig.formattedScalar(args, "fromBooleanToString", 1);
    },

    // if (message.num !== undefined && message.num !== null) {
    //   results.push({
    //     text: `Num: ${formatNumberWithThousandSeparator(message.num)}`,
    //     indent: indent
    //   });
    // }
    number(args: ToTextualSigMethod) {
        return toTextualSig.formattedScalar(
            args,
            "formatNumberWithThousandSeparator",
            1
        );
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

    // if (message.big !== undefined && message.big !== null) {
    //   results.push({
    //     text: `Big: ${formatNumberWithThousandSeparator(message.big)}`,
    //     indent: indent
    //   });
    // }
    long(args: ToTextualSigMethod) {
        return toTextualSig.formattedScalar(
            args,
            "formatNumberWithThousandSeparator",
            1
        );
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

    type(args: ToTextualSigMethod) {
        if (
            !args.context.options.aminoEncoding.useLegacyInlineEncoding &&
            args.context.options.interfaces.enabled &&
            args.context.options.interfaces?.useGlobalDecoderRegistry &&
            args.field.type === "google.protobuf.Any" &&
            args.field.options["(cosmos_proto.accepts_interface)"]
        ) {
            return toTextualSig.anyType(args);
        }

        return toTextualSig.protoType(args);
    },

    anyType(args: ToTextualSigMethod) {
        const { propName } = getFieldNames(args.field);

        return setIfNotUndefinedAndNotNull(
            propName,
            t.expressionStatement(
                t.callExpression(
                    t.memberExpression(
                        t.identifier("GlobalDecoderRegistry"),
                        t.identifier(TEXTUAL_METHOD_NAME)
                    ),
                    [
                        t.memberExpression(
                            t.identifier(MSG_VAR_NAME),
                            t.identifier(propName)
                        ),
                        t.identifier(ARRAY_VAR_NAME),
                        t.conditionalExpression(
                            t.identifier("indent"),
                            t.binaryExpression(
                                "+",
                                t.identifier("indent"),
                                t.numericLiteral(1)
                            ),
                            t.numericLiteral(1)
                        ),
                        t.identifier("expert"),
                        t.identifier("metadata"),
                    ]
                )
            )
        );
    },

    protoType(args: ToTextualSigMethod) {
        const { propName } = getFieldNames(args.field);
        const name = args.context.getTypeName(args.field);

        return setIfNotUndefinedAndNotNull(
            propName,
            t.expressionStatement(
                t.callExpression(
                    t.memberExpression(
                        t.identifier(name),
                        t.identifier(TEXTUAL_METHOD_NAME)
                    ),
                    [
                        t.memberExpression(
                            t.identifier(MSG_VAR_NAME),
                            t.identifier(propName)
                        ),
                        t.identifier(ARRAY_VAR_NAME),
                        t.conditionalExpression(
                            t.identifier("indent"),
                            t.binaryExpression(
                                "+",
                                t.identifier("indent"),
                                t.numericLiteral(1)
                            ),
                            t.numericLiteral(1)
                        ),
                        t.identifier("expert"),
                        t.identifier("metadata"),
                    ]
                )
            )
        );
    },

    // if (message.opt !== undefined && message.opt !== null) {
    //   results.push({
    //     text: `Opt: ${voteOptionToJSON(message.opt)}`,
    //     indent: indent
    //   });
    // }
    enum(args: ToTextualSigMethod) {
        const enumFuncName = args.context.getToEnum(args.field);
        return toTextualSig.formattedScalar(args, enumFuncName, 1, null, false);
    },

    // message.queryData = object.queryData ?? new Uint8Array()
    bytes(args: ToTextualSigMethod) {
        const isCosmosSDKDec =
            args.field.options?.["(gogoproto.customtype)"] ==
                "github.com/cosmos/cosmos-sdk/types.Dec" ||
            args.field.options?.["(gogoproto.customtype)"] ==
                "github.com/cosmos/cosmos-sdk/types.Int" ||
            args.field.options?.["(gogoproto.customtype)"] ==
                "cosmossdk.io/math.LegacyDec";

        if (isCosmosSDKDec) {
            args.context.addUtil("fromUtf8");
            args.context.addUtil("formatNumberWithThousandSeparator");

            const { propName } = getFieldNames(args.field);

            return toTextualSig.scalar(
                args,
                t.callExpression(
                    t.identifier("formatNumberWithThousandSeparator"),
                    [
                        t.callExpression(t.identifier("fromUtf8"), [
                            t.memberExpression(
                                t.identifier(MSG_VAR_NAME),
                                t.identifier(propName)
                            ),
                        ]),
                    ]
                )
            );
        } else {
            return toTextualSig.formattedScalar(args, "toByteTextual", 1);
        }
    },

    duration(args: ToTextualSigMethod) {
        return toTextualSig.formattedScalar(args, "toDurationTextual", 1);
    },

    timestamp(args: ToTextualSigMethod) {
        return toTextualSig.formattedScalar(args, "toTimestampTextual", 1);
    },

    keyHash(args: ToTextualSigMethod) {
        return toTextualSig.scalar(args, null, 1);
    },

    // message.codeIds = object.codeIds?.map(e => Long.fromValue(e)) || [];
    array(args: ToTextualSigMethod, expr: t.Expression) {
        const prop = args.field.name;
        return t.expressionStatement(
            t.assignmentExpression(
                "=",
                t.memberExpression(
                    t.identifier(MSG_VAR_NAME),
                    t.identifier(prop)
                ),
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
