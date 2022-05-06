import * as t from '@babel/types';
import { ToJSONMethod } from '.';
import { getEnumToJsonName, getFieldsTypeName } from '../types';

export const toJSON = {

    //  message.sender !== undefined && (obj.sender = message.sender);

    string(args: ToJSONMethod) {
        const prop = args.field.name;
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
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(prop)
                    )
                )
            )
        );
    },

    // message.doubleValue !== undefined && (obj.doubleValue = message.doubleValue);

    double(args: ToJSONMethod) {
        const prop = args.field.name;
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
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(prop)
                    )
                )
            )
        );
    },

    // message.int64Value !== undefined && (obj.int64Value = (message.int64Value || undefined).toString());
    int64(args: ToJSONMethod) {
        const prop = args.field.name;
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
                    t.callExpression(
                        t.memberExpression(
                            t.logicalExpression(
                                '||',
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier(prop)
                                ),
                                t.identifier('undefined')
                            ),
                            t.identifier('toString')
                        ),
                        []
                    )
                )
            )
        )
    },

    // message.uint64Value !== undefined && (obj.uint64Value = (message.uint64Value || undefined).toString());
    uint64(args: ToJSONMethod) {
        const prop = args.field.name;
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
                    t.callExpression(
                        t.memberExpression(
                            t.logicalExpression(
                                '||',
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier(prop)
                                ),
                                t.identifier('undefined')
                            ),
                            t.identifier('toString')
                        ),
                        []
                    )
                )
            )
        )
    },


    //   message.disableMacros !== undefined && (obj.disableMacros = message.disableMacros);
    bool(args: ToJSONMethod) {
        const prop = args.field.name;
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
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(prop)
                    )
                )
            )
        );
    },

    // message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    long(args: ToJSONMethod) {
        args.context.addUtil('Long');
        const prop = args.field.name;
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
                        t.identifier(prop),
                        false,
                        false
                    ),
                    t.callExpression(
                        t.memberExpression(
                            t.logicalExpression(
                                '||',
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier(prop)
                                ),
                                t.memberExpression(
                                    t.identifier('Long'),
                                    t.identifier('UZERO')
                                )
                            ),
                            t.identifier('toString')
                        ),
                        []
                    )
                )
            )
        );
    },

    // message.signDoc !== undefined && (obj.signDoc = message.signDoc ? SignDocDirectAux.toJSON(message.signDoc) : undefined);
    type(args: ToJSONMethod) {
        const prop = args.field.name;
        const name = getFieldsTypeName(args.field);

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
                    t.conditionalExpression(
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
                    )
                )
            )
        );
    },

    // message.mode !== undefined && (obj.mode = signModeToJSON(message.mode));
    enum(args: ToJSONMethod) {
        const prop = args.field.name;
        const enumFuncName = getEnumToJsonName(getFieldsTypeName(args.field));

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
                    t.callExpression(
                        t.identifier(enumFuncName),
                        [
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier(prop)
                            )
                        ]
                    )

                )
            )
        );
    },

    // message.queryData !== undefined && (obj.queryData = base64FromBytes(message.queryData !== undefined ? message.queryData : new Uint8Array()));
    bytes(args: ToJSONMethod) {
        args.context.addUtil('base64FromBytes');

        return t.expressionStatement(
            t.logicalExpression(
                '&&',
                t.binaryExpression(
                    '!==',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(args.field.name)
                    ),
                    t.identifier('undefined')
                ),
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(args.field.name),
                        false,
                        false
                    ),
                    t.callExpression(
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
                                t.newExpression(t.identifier('Uint8Array'), []))
                        ]
                    )
                )
            )
        );
    },

    // message.period !== undefined && (obj.period = message.period);

    duration(args: ToJSONMethod) {
        return t.expressionStatement(
            t.logicalExpression(
                '&&',
                t.binaryExpression(
                    '!==',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(args.field.name)
                    ),
                    t.identifier('undefined')
                ),
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(args.field.name)
                    ),
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(args.field.name)
                    )
                )
            )
        );
    },

    // message.periodReset !== undefined && (obj.periodReset = message.periodReset.toISOString());

    timestamp(args: ToJSONMethod) {
        return t.expressionStatement(
            t.logicalExpression(
                '&&',
                t.binaryExpression(
                    '!==',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(args.field.name)
                    ),
                    t.identifier('undefined')
                ),
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(args.field.name)
                    ),
                    t.callExpression(
                        t.memberExpression(
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier(args.field.name)
                            ),
                            t.identifier('toISOString')
                        ),
                        []
                    )
                )
            )
        );
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
                toJSON = a => a;
                break;
            case 'uint32':
            case 'int32':
                toJSON = a => t.callExpression(
                    t.memberExpression(
                        t.identifier('Math'),
                        t.identifier('round')
                    ),
                    [
                        a
                    ]
                )
                break;
            default:
                toJSON = a => t.callExpression(
                    t.memberExpression(
                        t.identifier(valueType),
                        t.identifier('toJSON')
                    ),
                    [
                        a
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
                                                toJSON(t.identifier('v'))
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

    // if (message.overloadId) {
    //     obj.overloadId = message.overloadId.map(e => e);
    // } else {
    //     obj.overloadId = [];
    // }

    string() {
        return t.identifier('e');
    },

    // if (message.codeIds) {
    //     obj.codeIds = message.codeIds.map(e => (e || Long.UZERO).toString());
    // } else {
    //     obj.codeIds = [];
    // }

    uint64() {
        return t.callExpression(
            t.memberExpression(
                t.logicalExpression(
                    '||',
                    t.identifier('e'),
                    t.memberExpression(
                        t.identifier('Long'),
                        t.identifier('ZERO')
                    )
                ),
                t.identifier('toString')
            ),
            []
        )
    },

    int64() {
        return t.callExpression(
            t.memberExpression(
                t.logicalExpression(
                    '||',
                    t.identifier('e'),
                    t.memberExpression(
                        t.identifier('Long'),
                        t.identifier('ZERO')
                    )
                ),
                t.identifier('toString')
            ),
            []
        )
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

    // if (message.tokenInMaxs) {
    //     obj.tokenInMaxs = message.tokenInMaxs.map(e => e ? Coin.toJSON(e) : undefined);
    // } else {
    //     obj.tokenInMaxs = [];
    // }

    type(name: string) {
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

