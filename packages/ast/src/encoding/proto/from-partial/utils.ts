import * as t from '@babel/types';
import { FromPartialMethod } from './index';
import { identifier, callExpression } from '../../../utils';
import { getFieldsTypeName } from '..';

export const fromPartial = {

    // message.sender = object.sender ?? "";
    string(args: FromPartialMethod) {
        const prop = args.field.name;
        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.logicalExpression(
                    '??',
                    t.memberExpression(
                        t.identifier('object'),
                        t.identifier(prop)
                    ),
                    t.stringLiteral('')
                )
            )
        );
    },

    // message.disableMacros = object.disableMacros ?? false;
    bool(args: FromPartialMethod) {
        const prop = args.field.name;
        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.logicalExpression(
                    '??',
                    t.memberExpression(
                        t.identifier('object'),
                        t.identifier(prop)
                    ),
                    t.booleanLiteral(false)
                )
            )
        );
    },

    // message.doubleValue = object.doubleValue ?? 0;

    number(args: FromPartialMethod) {
        const prop = args.field.name;
        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.logicalExpression(
                    '??',
                    t.memberExpression(
                        t.identifier('object'),
                        t.identifier(prop)
                    ),
                    t.numericLiteral(0)
                )
            )
        );
    },

    int32(args: FromPartialMethod) {
        return fromPartial.number(args);
    },
    uint32(args: FromPartialMethod) {
        return fromPartial.number(args);
    },
    double(args: FromPartialMethod) {
        return fromPartial.number(args);
    },
    float(args: FromPartialMethod) {
        return fromPartial.number(args);
    },


    // message.myInt64Value = object.myInt64Value !== undefined && object.myInt64Value !== null ? Long.fromValue(object.myInt64Value) : Long.ZERO;
    long(args: FromPartialMethod, defaultMethod: 'ZERO' | 'UZERO') {
        const prop = args.field.name;
        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.conditionalExpression(
                    t.logicalExpression(
                        '&&',
                        t.binaryExpression(
                            '!==',
                            t.memberExpression(
                                t.identifier('object'),
                                t.identifier(prop)
                            ),
                            t.identifier('undefined')
                        ),
                        t.binaryExpression(
                            '!==',
                            t.memberExpression(
                                t.identifier('object'),
                                t.identifier(prop)
                            ),
                            t.nullLiteral()
                        )
                    ),
                    t.callExpression(
                        t.memberExpression(
                            t.identifier('Long'),
                            t.identifier('fromValue')
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
                        t.identifier(defaultMethod)
                    )
                )
            )
        );
    },

    int64(args: FromPartialMethod) {
        return fromPartial.long(args, 'ZERO');
    },
    uint64(args: FromPartialMethod) {
        return fromPartial.long(args, 'UZERO');
    },

    // message.signDoc = object.signDoc !== undefined && object.signDoc !== null ? SignDocDirectAux.fromPartial(object.signDoc) : undefined;
    type(args: FromPartialMethod) {
        const prop = args.field.name;
        const name = getFieldsTypeName(args.field);
        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.conditionalExpression(
                    t.logicalExpression(
                        '&&',
                        t.binaryExpression(
                            '!==',
                            t.memberExpression(
                                t.identifier('object'),
                                t.identifier(prop)
                            ),
                            t.identifier('undefined')
                        ),
                        t.binaryExpression(
                            '!==',
                            t.memberExpression(
                                t.identifier('object'),
                                t.identifier(prop)
                            ),
                            t.nullLiteral()
                        )
                    ),
                    t.callExpression(
                        t.memberExpression(
                            t.identifier(name),
                            t.identifier('fromPartial')
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
            )
        );
    },

    // message.mode = object.mode ?? 0;
    enum(args: FromPartialMethod) {
        const prop = args.field.name;
        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.logicalExpression(
                    '??',
                    t.memberExpression(
                        t.identifier('object'),
                        t.identifier(prop)
                    ),
                    t.numericLiteral(0)
                )
            )
        );
    },

    // message.queryData = object.queryData ?? new Uint8Array()
    bytes(args: FromPartialMethod) {
        const prop = args.field.name;
        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.logicalExpression(
                    '??',
                    t.memberExpression(
                        t.identifier('object'),
                        t.identifier(prop)
                    ),
                    t.newExpression(
                        t.identifier('Uint8Array'),
                        []
                    )
                )
            )
        );
    },

    // message.period = object.period ?? undefined;

    duration(args: FromPartialMethod) {
        const prop = args.field.name;
        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.logicalExpression(
                    '??',
                    t.memberExpression(
                        t.identifier('object'),
                        t.identifier(prop)
                    ),
                    t.identifier('undefined')
                )
            )
        );
    },

    // message.periodReset = object.periodReset ?? undefined;

    timestamp(args: FromPartialMethod) {
        const prop = args.field.name;
        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.logicalExpression(
                    '??',
                    t.memberExpression(
                        t.identifier('object'),
                        t.identifier(prop)
                    ),
                    t.identifier('undefined')
                )
            )
        );
    },

    // message.referenceMap = Object.entries(object.referenceMap ?? {}).reduce<{
    //     [key: Long]: Reference;
    //   }>((acc, [key, value]) => {
    //     if (value !== undefined) {
    //       acc[Number(key)] = Reference.fromPartial(value);
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

    keyHash(args: FromPartialMethod) {
        const prop = args.field.name;
        const keyType = args.field.keyType;
        const valueType = args.field.parsedType.name

        let fromPartial = null;
        // valueTypeType: string for identifier
        let valueTypeType = valueType;
        switch (valueType) {
            case 'string':
                fromPartial = t.identifier('String');
                break;
            case 'int32':
            case 'uint32':
                valueTypeType = 'number';
                fromPartial = t.identifier('Number');
                break;
            case 'int64':
            case 'uint64':
                valueTypeType = 'Long';
                fromPartial = t.memberExpression(
                    t.identifier('Long'),
                    t.identifier('fromValue')
                );
                break;
            default:
                fromPartial = t.memberExpression(
                    t.identifier(valueType),
                    t.identifier('fromPartial')
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
            case 'int32':
            case 'uint32':
                wrapKey = (a) => t.callExpression(
                    t.identifier('Number'),
                    [
                        a
                    ]
                );
                keyTypeType = t.tsNumberKeyword()
                break;
            default:
                throw new Error('keyHash requires new type. Ask maintainers.');
        }

        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                callExpression(
                    t.memberExpression(
                        t.callExpression(
                            t.memberExpression(
                                t.identifier('Object'),
                                t.identifier('entries')
                            ),
                            [
                                t.logicalExpression(
                                    '??',
                                    t.memberExpression(
                                        t.identifier('object'),
                                        t.identifier(prop)
                                    ),
                                    t.objectExpression([])
                                )
                            ]
                        ),
                        t.identifier('reduce')
                    ),
                    [
                        t.arrowFunctionExpression(
                            [
                                t.identifier('acc'),
                                t.arrayPattern([
                                    t.identifier('key'),
                                    t.identifier('value')
                                ])

                            ],
                            t.blockStatement([
                                t.ifStatement(
                                    t.binaryExpression(
                                        '!==',
                                        t.identifier('value'),
                                        t.identifier('undefined')
                                    ),
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
                                                    fromPartial,
                                                    [
                                                        t.identifier('value')
                                                    ]
                                                )
                                            )
                                        )
                                    ])
                                ),
                                t.returnStatement(
                                    t.identifier('acc')
                                )
                            ])
                        ),
                        t.objectExpression([]),
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

                )
            )
        )
    },

    // message.codeIds = object.codeIds?.map(e => Long.fromValue(e)) || [];
    array(args: FromPartialMethod, expr: t.Expression) {
        const prop = args.field.name;
        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.logicalExpression(
                    '||',
                    t.optionalCallExpression(
                        t.optionalMemberExpression(
                            t.memberExpression(
                                t.identifier('object'),
                                t.identifier(prop)
                            ),
                            t.identifier('map'),
                            false,
                            true
                        ),
                        [
                            t.arrowFunctionExpression(
                                [
                                    t.identifier('e')
                                ],
                                expr
                            )
                        ],
                        false
                    ),
                    t.arrayExpression([])
                )
            )
        );
    }

};

export const arrayTypes = {
    // message.overloadId = object.overloadId?.map(e => e) || [];
    identity() {
        return t.identifier('e');
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
    enum() {
        return arrayTypes.identity();
    },

    // message.codeIds = object.codeIds?.map(e => Long.fromValue(e)) || [];
    long() {
        return t.callExpression(
            t.memberExpression(
                t.identifier('Long'),
                t.identifier('fromValue')
            ),
            [
                t.identifier('e')
            ]
        );
    },
    int64() {
        return arrayTypes.long();
    },
    uint64() {
        return arrayTypes.long();
    },

    // message.tokenInMaxs = object.tokenInMaxs?.map(e => Coin.fromPartial(e)) || [];
    type(args: FromPartialMethod) {
        const name = getFieldsTypeName(args.field);
        return t.callExpression(
            t.memberExpression(
                t.identifier(name),
                t.identifier('fromPartial')
            ),
            [
                t.identifier('e')
            ]
        );
    }
}
