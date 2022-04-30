import * as t from '@babel/types';
import { identifier } from '../../../utils';

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

    // int64Value: isSet(object.int64Value) ? Long.fromString(object.int64Value) : undefined,
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
                t.identifier('undefined')
            )
        );
    },

    // uint64Value: isSet(object.uint64Value) ? Long.fromString(object.uint64Value) : undefined,
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
                t.identifier('undefined')
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

