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

