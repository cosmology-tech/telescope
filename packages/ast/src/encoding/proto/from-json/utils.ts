import * as t from '@babel/types';
import { FromJSONMethod } from './index';
import { callExpression, identifier } from '../../../utils';

export const fromJSON = {

    // sender: isSet(object.sender) ? String(object.sender) : ""
    string(args: FromJSONMethod) {
        const prop = args.field.name;
        args.context.addUtil('isSet');

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

    number(args: FromJSONMethod) {
        const prop = args.field.name;
        args.context.addUtil('isSet');

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

    double(args: FromJSONMethod) {
        return fromJSON.number(args);
    },
    float(args: FromJSONMethod) {
        return fromJSON.number(args);
    },
    int32(args: FromJSONMethod) {
        return fromJSON.number(args);
    },
    uint32(args: FromJSONMethod) {
        return fromJSON.number(args);
    },

    // disableMacros: isSet(object.disableMacros) ? Boolean(object.disableMacros) : false
    bool(args: FromJSONMethod) {
        const prop = args.field.name;
        args.context.addUtil('isSet');

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
    long(args: FromJSONMethod, defaultMethod: 'ZERO' | 'UZERO') {
        const prop = args.field.name;
        args.context.addUtil('isSet');
        args.context.addUtil('Long');

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
                    t.identifier(defaultMethod)
                )
            )
        );
    },

    int64(args: FromJSONMethod) {
        return fromJSON.long(args, 'ZERO');
    },

    // uint64Value: isSet(object.uint64Value) ? Long.fromString(object.uint64Value) : Long.ZERO,
    uint64(args: FromJSONMethod) {
        return fromJSON.long(args, 'UZERO');
    },

    // signDoc: isSet(object.signDoc) ? SignDocDirectAux.fromJSON(object.signDoc) : undefined,
    type(args: FromJSONMethod) {
        const prop = args.field.name;
        const name = args.context.getTypeName(args.field);
        args.context.addUtil('isSet');

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
    enum(args: FromJSONMethod) {
        const prop = args.field.name;
        args.context.addUtil('isSet');
        const fromJSONFuncName = args.context.getFromEnum(args.field);

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

    // queryData: isSet(object.queryData) ? bytesFromBase64(object.queryData) : new Uint8Array()
    bytes(args: FromJSONMethod) {
        const prop = args.field.name;
        args.context.addUtil('isSet');
        args.context.addUtil('bytesFromBase64');

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
    duration(args: FromJSONMethod) {
        const prop = args.field.name;
        args.context.addUtil('isSet');

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

    timestamp(args: FromJSONMethod) {
        const prop = args.field.name;
        args.context.addUtil('isSet');
        args.context.addUtil('fromJsonTimestamp');

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


    keyHash(args: FromJSONMethod) {
        const prop = args.field.name;
        const keyType = args.field.keyType;
        const valueType = args.field.parsedType.name;

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
    array(args: FromJSONMethod, expr: t.Expression) {
        const prop = args.field.name;

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
    string() {
        return t.callExpression(
            t.identifier('String'),
            [
                t.identifier('e')
            ]
        );
    },

    bool() {
        return t.callExpression(
            t.identifier('Boolean'),
            [
                t.identifier('e')
            ]
        );
    },

    // myBytesArray: Array.isArray(object?.myBytesArray) ? object.myBytesArray.map((e: any) => bytesFromBase64(e)) : [],
    bytes(args: FromJSONMethod) {
        args.context.addUtil('bytesFromBase64');
        return t.callExpression(
            t.identifier('bytesFromBase64'),
            [
                t.identifier('e')
            ]
        );
    },
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
    uint64() {
        return arrayTypes.long();
    },
    int64() {
        return arrayTypes.long();
    },
    // myUint32Array: Array.isArray(object?.myUint32Array) ? object.myUint32Array.map((e: any) => Number(e)) : [],
    number() {
        return t.callExpression(
            t.identifier('Number'),
            [
                t.identifier('e')
            ]
        );
    },

    // myDoubleArray: Array.isArray(object?.myDoubleArray) ? object.myDoubleArray.map((e: any) => Number(e)) : [],
    uint32() {
        return arrayTypes.number();
    },
    int32() {
        return arrayTypes.number();
    },
    double() {
        return arrayTypes.number();
    },
    float() {
        return arrayTypes.number();
    },

    // arrayField: Array.isArray(object?.arrayField) ? object.arrayField.map((e: any) => scalarTypeFromJSON(e)) : []
    enum(args: FromJSONMethod) {
        const fromJSONFuncName = args.context.getFromEnum(args.field);
        return t.callExpression(
            t.identifier(fromJSONFuncName),
            [
                t.identifier('e')
            ]
        );
    },

    // tokenInMaxs: Array.isArray(object?.tokenInMaxs) ? object.tokenInMaxs.map((e: any) => Coin.fromJSON(e)) : []
    type(args: FromJSONMethod) {
        const name = args.context.getTypeName(args.field);
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

