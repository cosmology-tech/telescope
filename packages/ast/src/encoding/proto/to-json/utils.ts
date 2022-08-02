import * as t from '@babel/types';
import { getDefaultTSTypeFromProtoType } from '../../types';
import { ToJSONMethod } from './index';

const notUndefinedSetValue = (prop: string, expr: t.Expression) => {
    return t.expressionStatement(
        t.logicalExpression(
            '&&',
            t.binaryExpression(
                '!==',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.identifier('undefined')
            ),
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('obj'),
                    t.identifier(prop)
                ),
                expr
            )
        )
    );
}

export const toJSON = {

    //  message.sender !== undefined && (obj.sender = message.sender);
    identity(args: ToJSONMethod) {
        const prop = args.field.name;
        return notUndefinedSetValue(prop, t.memberExpression(
            t.identifier('message'),
            t.identifier(prop)
        ));
    },

    string(args: ToJSONMethod) {
        return toJSON.identity(args);
    },
    double(args: ToJSONMethod) {
        return toJSON.identity(args);
    },
    float(args: ToJSONMethod) {
        return toJSON.identity(args);
    },
    bool(args: ToJSONMethod) {
        return toJSON.identity(args);
    },

    // message.maxDepth !== undefined && (obj.maxDepth = Math.round(message.maxDepth));
    number(args: ToJSONMethod) {
        const prop = args.field.name;
        return notUndefinedSetValue(
            prop,
            t.callExpression(
                t.memberExpression(
                    t.identifier('Math'),
                    t.identifier('round')
                ),
                [
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(prop)
                    )
                ]
            )
        );
    },
    // message.maxDepth !== undefined && (obj.maxDepth = Math.round(message.maxDepth));
    int32(args: ToJSONMethod) {
        return toJSON.number(args);
    },

    uint32(args: ToJSONMethod) {
        return toJSON.number(args);
    },

    sint32(args: ToJSONMethod) {
        return toJSON.number(args);
    },
    fixed32(args: ToJSONMethod) {
        return toJSON.number(args);
    },
    sfixed32(args: ToJSONMethod) {
        return toJSON.number(args);
    },

    // message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    // message.poolId !== undefined && (obj.poolId = (message.poolId || undefined).toString());
    long(args: ToJSONMethod) {
        args.context.addUtil('Long');
        const prop = args.field.name;
        return notUndefinedSetValue(
            prop,
            t.callExpression(
                t.memberExpression(
                    t.logicalExpression(
                        '||',
                        t.memberExpression(
                            t.identifier('message'),
                            t.identifier(prop)
                        ),
                        getDefaultTSTypeFromProtoType(args.context, args.field, args.isOptional)
                    ),
                    t.identifier('toString')
                ),
                []
            )
        );
    },

    int64(args: ToJSONMethod) {
        return toJSON.long(args);
    },
    uint64(args: ToJSONMethod) {
        return toJSON.long(args);
    },
    sint64(args: ToJSONMethod) {
        return toJSON.long(args);
    },
    fixed64(args: ToJSONMethod) {
        return toJSON.long(args);
    },
    sfixed64(args: ToJSONMethod) {
        return toJSON.long(args);
    },

    // message.signDoc !== undefined && (obj.signDoc = message.signDoc ? SignDocDirectAux.toJSON(message.signDoc) : undefined);
    type(args: ToJSONMethod) {
        const prop = args.field.name;
        const name = args.context.getTypeName(args.field);

        // TODO isn't the nested conditional a waste? (using ts-proto as reference)
        // maybe null is OK?
        return notUndefinedSetValue(prop, t.conditionalExpression(
            t.memberExpression(
                t.identifier('message'),
                t.identifier(prop)
            ),
            t.callExpression(
                t.memberExpression(
                    t.identifier(name),
                    t.identifier('toJSON')
                ),
                [
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(prop)
                    )
                ]
            ),
            t.identifier('undefined')
        ));
    },

    // message.mode !== undefined && (obj.mode = signModeToJSON(message.mode));
    enum(args: ToJSONMethod) {
        const prop = args.field.name;
        const enumFuncName = args.context.getToEnum(args.field);
        return notUndefinedSetValue(prop, t.callExpression(
            t.identifier(enumFuncName),
            [
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                )
            ]
        ));
    },

    // TODO again, another ts-proto reference that does not necessarily make sense
    // message.queryData !== undefined && (obj.queryData = base64FromBytes(message.queryData !== undefined ? message.queryData : new Uint8Array()));
    // message.queryData !== undefined && (obj.queryData = base64FromBytes(message.queryData !== undefined ? message.queryData : undefined));
    bytes(args: ToJSONMethod) {
        args.context.addUtil('base64FromBytes');

        let expr;
        if (args.isOptional) {
            // message.bytesValue !== undefined && (obj.bytesValue = message.bytesValue !== undefined ? base64FromBytes(message.bytesValue) : undefined);

            expr = t.conditionalExpression(
                t.binaryExpression(
                    '!==',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(args.field.name)
                    ),
                    t.identifier('undefined')
                ),
                t.callExpression(
                    t.identifier('base64FromBytes'),
                    [
                        t.memberExpression(
                            t.identifier('message'),
                            t.identifier(args.field.name)
                        )
                    ]
                ),
                t.identifier('undefined')
            );
        } else {
            // message.queryData !== undefined && (obj.queryData = base64FromBytes(message.queryData !== undefined ? message.queryData : new Uint8Array()));
            expr = t.callExpression(
                t.identifier('base64FromBytes'),
                [
                    t.conditionalExpression(
                        t.binaryExpression(
                            '!==',
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier(args.field.name)
                            ),
                            t.identifier('undefined')
                        ),
                        t.memberExpression(
                            t.identifier('message'),
                            t.identifier(args.field.name)
                        ),
                        getDefaultTSTypeFromProtoType(args.context, args.field, args.isOptional)
                    )
                ]
            )
        }
        return notUndefinedSetValue(args.field.name, expr);
    },

    // message.period !== undefined && (obj.period = message.period);

    duration(args: ToJSONMethod) {
        return toJSON.identity(args);
    },

    timestamp(args: ToJSONMethod) {
        const timestampFormat = args.context.pluginValue('typingsFormat.timestamp')
        switch (timestampFormat) {
            case 'timestamp':
                return toJSON.timestampTimestamp(args);
            case 'date':
            default:
                return toJSON.timestampDate(args);
        }
    },

    // message.periodReset !== undefined && (obj.periodReset = fromTimestamp(message.periodReset).toISOString());

    timestampTimestamp(args: ToJSONMethod) {
        args.context.addUtil('fromTimestamp');
        return notUndefinedSetValue(args.field.name, t.callExpression(
            t.memberExpression(
                t.callExpression(
                    t.identifier('fromTimestamp'), [
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(args.field.name)
                    )
                ]),
                t.identifier('toISOString')
            ),
            []
        ));
    },

    // message.periodReset !== undefined && (obj.periodReset = message.periodReset.toISOString());

    timestampDate(args: ToJSONMethod) {
        return notUndefinedSetValue(args.field.name, t.callExpression(
            t.memberExpression(
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(args.field.name)
                ),
                t.identifier('toISOString')
            ),
            []
        ));
    },

    // obj.labels = {};

    //   if (message.labels) {
    //     Object.entries(message.labels).forEach(([k, v]) => {
    //       obj.labels[k] = v;
    //     });
    //   }


    // obj.typeMap = {};

    // if (message.typeMap) {
    //   Object.entries(message.typeMap).forEach(([k, v]) => {
    //     obj.typeMap[k] = Type.toJSON(v);
    //   });
    // }

    keyHash(args: ToJSONMethod) {

        const prop = args.field.name;
        const keyType = args.field.keyType;
        const valueType = args.field.parsedType.name;

        let toJSON = null;
        switch (valueType) {
            case 'string':
                toJSON = t.identifier('v')
                break;
            case 'uint32':
            case 'int32':
                toJSON = t.callExpression(
                    t.memberExpression(
                        t.identifier('Math'),
                        t.identifier('round')
                    ),
                    [
                        t.identifier('v')
                    ]
                )
                break;
            case 'int64':
            case 'uint64':
                toJSON = t.callExpression(
                    t.memberExpression(
                        t.identifier('v'),
                        t.identifier('toString')
                    ),
                    []
                )
                break;
            default:
                toJSON = t.callExpression(
                    t.memberExpression(
                        t.identifier(valueType),
                        t.identifier('toJSON')
                    ),
                    [
                        t.identifier('v')
                    ]
                )
        }


        return [
            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(prop)
                    ),
                    t.objectExpression([])
                )
            ),
            //
            t.ifStatement(
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.blockStatement([
                    t.expressionStatement(
                        t.callExpression(
                            t.memberExpression(
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('Object'),
                                        t.identifier('entries')
                                    ),
                                    [
                                        t.memberExpression(
                                            t.identifier('message'),
                                            t.identifier(prop)
                                        )
                                    ]
                                ),
                                t.identifier('forEach')
                            ),
                            [
                                t.arrowFunctionExpression(
                                    [
                                        t.arrayPattern(
                                            [
                                                t.identifier('k'),
                                                t.identifier('v')
                                            ]
                                        )
                                    ],
                                    t.blockStatement([
                                        t.expressionStatement(
                                            t.assignmentExpression(
                                                '=',
                                                t.memberExpression(
                                                    t.memberExpression(
                                                        t.identifier('obj'),
                                                        t.identifier(prop)
                                                    ),
                                                    t.identifier('k'),
                                                    true
                                                ),
                                                toJSON
                                            )
                                        )
                                    ])
                                )
                            ]
                        )
                    )
                ])
            )
        ]
    },

    // if (message.codeIds) {
    //     obj.codeIds = message.codeIds.map(e => (e || Long.UZERO).toString());
    // } else {
    //     obj.codeIds = [];
    // }

    array(args: ToJSONMethod, expr: t.Expression) {
        const prop = args.field.name;
        return t.ifStatement(
            t.memberExpression(
                t.identifier('message'),
                t.identifier(prop)
            ),
            t.blockStatement([
                t.expressionStatement(
                    t.assignmentExpression(
                        '=',
                        t.memberExpression(
                            t.identifier('obj'),
                            t.identifier(prop)
                        ),
                        t.callExpression(
                            t.memberExpression(
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier(prop)
                                ),
                                t.identifier('map')
                            ),
                            [
                                t.arrowFunctionExpression(
                                    [
                                        t.identifier('e')
                                    ],
                                    expr
                                )
                            ]
                        )
                    )
                )
            ]),
            t.blockStatement([
                t.expressionStatement(
                    t.assignmentExpression(
                        '=',
                        t.memberExpression(
                            t.identifier('obj'),
                            t.identifier(prop)
                        ),
                        t.arrayExpression([])
                    )
                )
            ])
        );
    }

};

export const arrayTypes = {

    identity() {
        return t.identifier('e');
    },


    // if (message.overloadId) {
    //     obj.overloadId = message.overloadId.map(e => e);
    // } else {
    //     obj.overloadId = [];
    // }

    string() {
        return arrayTypes.identity();
    },
    double() {
        return arrayTypes.identity();
    },
    float() {
        return arrayTypes.identity();
    },
    bool() {
        return arrayTypes.identity();
    },

    //   if (message.lineOffsets) {
    //     obj.lineOffsets = message.lineOffsets.map(e => Math.round(e));
    //   } else {
    //     obj.lineOffsets = [];
    //   }

    number() {
        return t.callExpression(
            t.memberExpression(
                t.identifier('Math'),
                t.identifier('round')
            ),
            [
                t.identifier('e')
            ]
        )
    },

    int32() {
        return arrayTypes.number();
    },
    uint32() {
        return arrayTypes.number();
    },
    sint32() {
        return arrayTypes.number();
    },
    fixed32() {
        return arrayTypes.number();
    },
    sfixed32() {
        return arrayTypes.number();
    },


    // if (message.codeIds) {
    //     obj.codeIds = message.codeIds.map(e => (e || Long.UZERO).toString());
    // } else {
    //     obj.codeIds = [];
    // }

    long(args: ToJSONMethod) {
        return t.callExpression(
            t.memberExpression(
                t.logicalExpression(
                    '||',
                    t.identifier('e'),
                    getDefaultTSTypeFromProtoType(args.context, {
                        ...args.field,
                        rule: undefined, // so it's treated as type not an array...
                    }, args.isOptional)
                ),
                t.identifier('toString')
            ),
            []
        )
    },

    int64(args: ToJSONMethod) {
        return arrayTypes.long(args);
    },
    uint64(args: ToJSONMethod) {
        return arrayTypes.long(args);
    },
    sint64(args: ToJSONMethod) {
        return arrayTypes.long(args);
    },
    fixed64(args: ToJSONMethod) {
        return arrayTypes.long(args);
    },
    sfixed64(args: ToJSONMethod) {
        return arrayTypes.long(args);
    },

    //   if (message.myBytesArray) {
    //     obj.myBytesArray = message.myBytesArray.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    //   } else {
    //     obj.myBytesArray = [];
    //   }

    bytes(args: ToJSONMethod) {
        args.context.addUtil('base64FromBytes');
        return t.callExpression(
            t.identifier('base64FromBytes'),
            [
                t.conditionalExpression(
                    t.binaryExpression(
                        '!==',
                        t.identifier('e'),
                        t.identifier('undefined')
                    ),
                    t.identifier('e'),
                    getDefaultTSTypeFromProtoType(args.context, {
                        ...args.field,
                        rule: undefined, // so it's treated as type not an array...
                    }, args.isOptional)
                )
            ]
        );
    },

    enum(args: ToJSONMethod) {
        const enumFuncName = args.context.getToEnum(args.field);
        return t.callExpression(
            t.identifier(enumFuncName),
            [
                t.identifier('e')
            ]
        );
    },

    // if (message.tokenInMaxs) {
    //     obj.tokenInMaxs = message.tokenInMaxs.map(e => e ? Coin.toJSON(e) : undefined);
    // } else {
    //     obj.tokenInMaxs = [];
    // }

    type(args: ToJSONMethod) {
        const name = args.context.getTypeName(args.field);
        return t.conditionalExpression(
            t.identifier('e'),
            t.callExpression(
                t.memberExpression(
                    t.identifier(name),
                    t.identifier('toJSON')
                ),
                [
                    t.identifier('e')
                ]
            ),
            t.identifier('undefined')
        );
    }
}

