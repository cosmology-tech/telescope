import * as t from '@babel/types';
import { callExpression, identifier } from '../../../utils';

export const fromJSON = {

    // sender: isSet(object.sender) ? String(object.sender) : ""
    string(prop: string) {
        return t.objectProperty(
            t.identifier(prop),
            t.conditionalExpression(
                t.callExpression(
                    t.identifier('isSet'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.callExpression(
                    t.identifier('String'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.stringLiteral('')
            )
        )
    },

    number(prop: string) {
        return t.objectProperty(
            t.identifier(prop),
            t.conditionalExpression(
                t.callExpression(
                    t.identifier('isSet'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.callExpression(
                    t.identifier('Number'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.numericLiteral(0)
            )
        )
    },


    // doubleValue: isSet(object.doubleValue) ? Number(object.doubleValue) : undefined,
    double(prop: string) {
        return t.objectProperty(
            t.identifier(prop),
            t.conditionalExpression(
                t.callExpression(
                    t.identifier('isSet'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.callExpression(
                    t.identifier('Number'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.identifier('undefined')
            )
        )
    },

    // disableMacros: isSet(object.disableMacros) ? Boolean(object.disableMacros) : false
    bool(prop: string) {
        return t.objectProperty(
            t.identifier(prop),
            t.conditionalExpression(
                t.callExpression(
                    t.identifier('isSet'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.callExpression(
                    t.identifier('Boolean'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.booleanLiteral(false)
            )
        )
    },

    // int64Value: isSet(object.int64Value) ? Long.fromString(object.int64Value) : Long.UZERO,
    int64(prop: string) {
        return t.objectProperty(
            t.identifier(prop),
            t.conditionalExpression(
                t.callExpression(
                    t.identifier('isSet'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.callExpression(
                    t.memberExpression(
                        t.identifier('Long'),
                        t.identifier('fromString')
                    ),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.memberExpression(
                    t.identifier('Long'),
                    t.identifier('ZERO')
                )
            )
        );
    },

    // uint64Value: isSet(object.uint64Value) ? Long.fromString(object.uint64Value) : Long.ZERO,
    uint64(prop: string) {
        return t.objectProperty(
            t.identifier(prop),
            t.conditionalExpression(
                t.callExpression(
                    t.identifier('isSet'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.callExpression(
                    t.memberExpression(
                        t.identifier('Long'),
                        t.identifier('fromString')
                    ),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.memberExpression(
                    t.identifier('Long'),
                    t.identifier('UZERO')
                )
            )
        );
    },

    // poolId: isSet(object.poolId) ? Long.fromString(object.poolId) : Long.UZERO
    long(prop: string) {
        return t.objectProperty(
            t.identifier(prop),
            t.conditionalExpression(
                t.callExpression(
                    t.identifier('isSet'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.callExpression(
                    t.memberExpression(
                        t.identifier('Long'),
                        t.identifier('fromString')
                    ),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.memberExpression(
                    t.identifier('Long'),
                    t.identifier('UZERO')
                )
            )
        );
    },

    // signDoc: isSet(object.signDoc) ? SignDocDirectAux.fromJSON(object.signDoc) : undefined,
    type(prop: string, name: string) {
        return t.objectProperty(
            t.identifier(prop),
            t.conditionalExpression(
                t.callExpression(
                    t.identifier('isSet'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.callExpression(
                    t.memberExpression(
                        t.identifier(name),
                        t.identifier('fromJSON')
                    ),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.identifier('undefined')
            )
        );
    },

    // mode: isSet(object.mode) ? signModeFromJSON(object.mode) : 0,
    enum(prop: string, fromJSONFuncName: string) {
        return t.objectProperty(
            t.identifier(prop),
            t.conditionalExpression(
                t.callExpression(
                    t.identifier('isSet'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.callExpression(
                    t.identifier(fromJSONFuncName),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.numericLiteral(0)
            )
        );
    },

    // TODO register import!
    // bytesFromBase64
    // queryData: isSet(object.queryData) ? bytesFromBase64(object.queryData) : new Uint8Array()

    bytes(prop: string) {
        return t.objectProperty(
            t.identifier(prop),
            t.conditionalExpression(
                t.callExpression(
                    t.identifier('isSet'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.callExpression(
                    t.identifier('bytesFromBase64'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.newExpression(
                    t.identifier('Uint8Array'),
                    []
                )
            )
        );
    },

    // period: isSet(object.period) ? String(object.period) : undefined,
    duration(prop: string) {
        return t.objectProperty(
            t.identifier(prop),
            t.conditionalExpression(
                t.callExpression(
                    t.identifier('isSet'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.callExpression(
                    t.identifier('String'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.identifier('undefined')
            )
        );
    },

    // periodReset: isSet(object.periodReset) ? fromJsonTimestamp(object.periodReset) : undefined

    timestamp(prop: string) {
        return t.objectProperty(
            t.identifier(prop),
            t.conditionalExpression(
                t.callExpression(
                    t.identifier('isSet'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.callExpression(
                    t.identifier('fromJsonTimestamp'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                t.identifier('undefined')
            )
        );
    },

    //  labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
    //     [key: string]: string;
    //   }>((acc, [key, value]) => {
    //     acc[key] = String(value);
    //     return acc;
    //   }, {}) : {},

    //   referenceMap: isObject(object.referenceMap) ? Object.entries(object.referenceMap).reduce<{
    //     [key: Long]: Reference;
    //   }>((acc, [key, value]) => {
    //     acc[Number(key)] = Reference.fromJSON(value);
    //     return acc;
    //   }, {}) : {},


    keyHash(prop: string, keyType: string, valueType: string) {
        let fromJSON = null;
        let valueTypeType = valueType;
        switch (valueType) {
            case 'string':
                fromJSON = t.identifier('String');
                break;
            case 'int32':
            case 'uint32':
                // is this right?
                valueTypeType = 'number';
                fromJSON = t.identifier('Number');
                break;
            default:
                fromJSON = t.memberExpression(
                    t.identifier(valueType),
                    t.identifier('fromJSON')
                );
        }

        let wrapKey = null;
        let keyTypeType = null;
        switch (keyType) {
            case 'string':
                wrapKey = (a) => a;
                keyTypeType = t.tsStringKeyword();
                break;
            case 'int64':
            case 'uint64':
                wrapKey = (a) => t.callExpression(
                    t.identifier('Number'),
                    [
                        a
                    ]
                );
                keyTypeType = t.tsTypeReference(t.identifier('Long'));
                break;
            case 'uint32':
            case 'int32':
                wrapKey = (a) => t.callExpression(
                    t.identifier('Number'),
                    [
                        a
                    ]
                );
                keyTypeType = t.tsTypeReference(t.identifier('number'));
                break;
            default:
                throw new Error('keyHash requires new type. Ask maintainers.');
        }

        return t.objectProperty(
            t.identifier(prop),
            t.conditionalExpression(
                t.callExpression(
                    t.identifier('isObject'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        )
                    ]
                ),
                callExpression(
                    t.memberExpression(
                        t.callExpression(
                            t.memberExpression(
                                t.identifier('Object'),
                                t.identifier('entries')
                            ),
                            [
                                t.memberExpression(
                                    t.identifier('object'),
                                    t.identifier(prop)
                                )
                            ]
                        ),
                        t.identifier('reduce')
                    ),
                    [
                        t.arrowFunctionExpression(
                            [
                                t.identifier('acc'),
                                t.arrayPattern(
                                    [
                                        t.identifier('key'),
                                        t.identifier('value')
                                    ]
                                )
                            ],
                            t.blockStatement([
                                t.expressionStatement(
                                    t.assignmentExpression(
                                        '=',
                                        t.memberExpression(
                                            t.identifier('acc'),
                                            wrapKey(t.identifier('key')),
                                            true
                                        ),
                                        t.callExpression(
                                            fromJSON,
                                            [
                                                t.identifier('value')
                                            ]
                                        )
                                    )
                                ),
                                t.returnStatement(
                                    t.identifier('acc')
                                )
                            ])
                        ),
                        t.objectExpression(
                            []
                        )
                    ],
                    t.tsTypeParameterInstantiation(
                        [
                            t.tsTypeLiteral(
                                [
                                    t.tsIndexSignature(
                                        [
                                            identifier('key', t.tsTypeAnnotation(
                                                keyTypeType
                                            ))
                                        ],
                                        t.tsTypeAnnotation(
                                            t.tsTypeReference(
                                                t.identifier(valueTypeType)
                                            )
                                        )
                                    )
                                ]
                            )
                        ]
                    )
                ),
                t.objectExpression([])
            )
        )
    },

    // codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e: any) => Long.fromString(e)) : [],
    array(prop: string, expr: t.Expression) {
        return t.objectProperty(
            t.identifier(prop),
            t.conditionalExpression(
                t.callExpression(
                    t.memberExpression(
                        t.identifier('Array'),
                        t.identifier('isArray')
                    ),
                    [
                        t.optionalMemberExpression(
                            t.identifier('object'),
                            t.identifier(prop),
                            false,
                            true
                        )
                    ]
                ),
                t.callExpression(
                    t.memberExpression(
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        ),
                        t.identifier('map')
                    ),
                    [
                        t.arrowFunctionExpression(
                            [
                                identifier('e', t.tsTypeAnnotation(
                                    t.tsAnyKeyword()
                                ))
                            ],
                            expr,
                            false
                        )
                    ]
                ),
                t.arrayExpression([])
            )
        )
    }
};

export const arrayTypes = {
    // codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e: any) => Long.fromString(e)) : [],
    long() {
        return t.callExpression(
            t.memberExpression(
                t.identifier('Long'),
                t.identifier('fromString')
            ),
            [
                t.identifier('e')
            ]
        );
    },
    number() {
        return t.callExpression(
            t.identifier('Number'),
            [
                t.identifier('e')
            ]
        );
    },
    // tokenInMaxs: Array.isArray(object?.tokenInMaxs) ? object.tokenInMaxs.map((e: any) => Coin.fromJSON(e)) : []
    type(name) {
        return t.callExpression(
            t.memberExpression(
                t.identifier(name),
                t.identifier('fromJSON')
            ),
            [
                t.identifier('e')
            ]
        );
    }
};

