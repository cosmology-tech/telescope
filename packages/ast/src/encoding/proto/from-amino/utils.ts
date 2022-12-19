import * as t from '@babel/types';
import { FromAminoJSONMethod } from './index';
import { BILLION, callExpression, identifier } from '../../../utils';
import { getFieldNames } from '../../types';
import { ProtoParseContext } from '../../context';
import { ProtoType } from '@osmonauts/types';
import { getInterfaceFromAminoName } from '../implements';
import { camel } from '@osmonauts/utils';

const setProp = (
    args: FromAminoJSONMethod,
    callExpr: t.Expression
) => {
    const {
        propName,
        origName
    } = getFieldNames(args.field);

    const prop = t.objectProperty(
        t.identifier(propName),
        callExpr
    );

    if (args.isOptional) {
        return t.objectProperty(
            t.identifier(propName),
            t.conditionalExpression(
                t.optionalMemberExpression(
                    t.identifier('object'),
                    t.identifier(origName),
                    false,
                    true
                ),
                callExpr,
                t.identifier('undefined')
            )
        );
    }
    return prop;
};

export const fromAminoJSON = {

    scalar(args: FromAminoJSONMethod) {
        const {
            propName,
            origName
        } = getFieldNames(args.field);

        return t.objectProperty(
            t.identifier(propName),
            t.optionalMemberExpression(
                t.identifier('object'),
                t.identifier(origName),
                false,
                args.isOptional
            )
        );
    },

    string(args: FromAminoJSONMethod) {
        return fromAminoJSON.scalar(args);
    },
    number(args: FromAminoJSONMethod) {
        return fromAminoJSON.scalar(args);
    },
    double(args: FromAminoJSONMethod) {
        return fromAminoJSON.scalar(args);
    },
    float(args: FromAminoJSONMethod) {
        return fromAminoJSON.scalar(args);
    },
    int32(args: FromAminoJSONMethod) {
        return fromAminoJSON.scalar(args);
    },
    sint32(args: FromAminoJSONMethod) {
        return fromAminoJSON.scalar(args);
    },
    uint32(args: FromAminoJSONMethod) {
        return fromAminoJSON.scalar(args);
    },
    fixed32(args: FromAminoJSONMethod) {
        return fromAminoJSON.scalar(args);
    },
    sfixed32(args: FromAminoJSONMethod) {
        return fromAminoJSON.scalar(args);
    },
    bool(args: FromAminoJSONMethod) {
        return fromAminoJSON.scalar(args);
    },
    long(args: FromAminoJSONMethod) {

        const {
            origName
        } = getFieldNames(args.field);

        args.context.addUtil('Long');

        const callExpr = t.callExpression(
            t.memberExpression(
                t.identifier('Long'),
                t.identifier('fromString')
            ),
            [
                t.memberExpression(
                    t.identifier('object'),
                    t.identifier(origName)
                )
            ]
        );

        return setProp(args, callExpr);
    },
    int64(args: FromAminoJSONMethod) {
        return fromAminoJSON.long(args);
    },
    uint64(args: FromAminoJSONMethod) {
        return fromAminoJSON.long(args);
    },
    sint64(args: FromAminoJSONMethod) {
        return fromAminoJSON.long(args);
    },
    fixed64(args: FromAminoJSONMethod) {
        return fromAminoJSON.long(args);
    },
    sfixed64(args: FromAminoJSONMethod) {
        return fromAminoJSON.long(args);
    },


    rawBytes(args: FromAminoJSONMethod) {
        args.context.addUtil('toUtf8');

        const {
            origName
        } = getFieldNames(args.field);

        const expr = t.callExpression(
            t.identifier('toUtf8'),
            [
                t.callExpression(
                    t.memberExpression(
                        t.identifier('JSON'),
                        t.identifier('stringify')
                    ),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(origName)
                        )
                    ]
                )
            ]
        );

        return setProp(args, expr);
    },

    wasmByteCode(args: FromAminoJSONMethod) {
        args.context.addUtil('fromBase64');

        const {
            origName
        } = getFieldNames(args.field);

        const expr = t.callExpression(
            t.identifier('fromBase64'),
            [
                t.memberExpression(
                    t.identifier('object'),
                    t.identifier(origName)
                )
            ]
        );

        return setProp(args, expr);
    },

    pubkey(args: FromAminoJSONMethod) {
        args.context.addUtil('toBase64');
        args.context.addUtil('encodeBech32Pubkey');

        const {
            origName
        } = getFieldNames(args.field);

        const callExpr = t.callExpression(
            t.identifier('encodeBech32Pubkey'),
            [
                t.objectExpression([
                    t.objectProperty(
                        t.identifier('type'),
                        t.stringLiteral('tendermint/PubKeySecp256k1')
                    ),
                    t.objectProperty(
                        t.identifier('value'),
                        t.callExpression(
                            t.identifier('toBase64'),
                            [
                                t.memberExpression(
                                    t.memberExpression(
                                        t.identifier('object'),
                                        t.identifier(origName)
                                    ),
                                    t.identifier('value')
                                )
                            ]
                        )
                    )
                ]),
                // TODO how to manage this?
                // 1. options.prefix
                // 2. look into prefix and how it's used across chains
                // 3. maybe AminoConverter is a class and has this.prefix!
                t.stringLiteral('cosmos')
            ]
        );

        return setProp(args, callExpr);
    },


    protoType(args: FromAminoJSONMethod) {
        const {
            propName,
            origName
        } = getFieldNames(args.field);
        const name = args.context.getTypeName(args.field);

        return t.objectProperty(
            t.identifier(propName),
            t.conditionalExpression(
                t.optionalMemberExpression(
                    t.identifier('object'),
                    t.identifier(origName),
                    false,
                    true
                ),
                t.callExpression(
                    t.memberExpression(
                        t.identifier(name),
                        t.identifier('fromAmino')
                    ),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(origName)
                        )
                    ]
                ),
                t.identifier('undefined')
            )
        );
    },

    anyType(args: FromAminoJSONMethod) {
        const { propName, origName } = getFieldNames(args.field);
        // const typeMap = args.context.store.getTypeUrlMap(args.context.ref);
        // console.log(JSON.stringify(typeMap, null, 2));
        // console.log(JSON.stringify(args.field, null, 2));
        const interfaceName = args.field.options['(cosmos_proto.accepts_interface)'];
        const interfaceFnName = getInterfaceFromAminoName(interfaceName)

        return t.objectProperty(
            t.identifier(propName),
            t.conditionalExpression(
                t.optionalMemberExpression(
                    t.identifier('object'),
                    t.identifier(origName),
                    false,
                    true
                ),
                t.callExpression(
                    t.identifier(interfaceFnName),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(origName)
                        )
                    ]
                ),
                t.identifier('undefined')
            )
        );
    },

    type(args: FromAminoJSONMethod) {
        if (
            args.context.options.aminoEncoding.useRecursiveV2encoding == true &&
            args.context.options.interfaces.enabled == true &&
            args.field.type === 'google.protobuf.Any' &&
            args.field.options['(cosmos_proto.accepts_interface)']

        ) {
            return fromAminoJSON.anyType(args);
        }
        return fromAminoJSON.protoType(args);

    },
    enum(args: FromAminoJSONMethod) {
        const {
            propName,
            origName
        } = getFieldNames(args.field);

        args.context.addUtil('isSet');
        const fromAminoJSONFuncName = args.context.getFromEnum(args.field);

        return t.objectProperty(
            t.identifier(propName),
            t.conditionalExpression(
                t.callExpression(
                    t.identifier('isSet'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(origName)
                        )
                    ]
                ),
                t.callExpression(
                    t.identifier(fromAminoJSONFuncName),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(origName)
                        )
                    ]
                ),
                args.isOptional ? t.identifier('undefined') : t.numericLiteral(0)
            )
        );
    },

    bytes(args: FromAminoJSONMethod) {
        return fromAminoJSON.scalar(args);
    },

    duration(args: FromAminoJSONMethod) {
        return fromAminoJSON.type(args);
    },

    timestamp(args: FromAminoJSONMethod) {
        return fromAminoJSON.type(args);
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
    //     acc[Number(key)] = Reference.fromAminoJSON(value);
    //     return acc;
    //   }, {}) : {},


    keyHash(args: FromAminoJSONMethod) {
        const {
            propName,
            origName
        } = getFieldNames(args.field);

        const keyType = args.field.keyType;
        const valueType = args.field.parsedType.name;

        args.context.addUtil('isObject');

        let fromAminoJSON = null;
        // valueTypeType: string for identifier
        let valueTypeType = valueType;
        switch (valueType) {
            case 'string':
                fromAminoJSON = t.callExpression(
                    t.identifier('String'),
                    [
                        t.identifier('value')
                    ]
                )

                break;
            case 'int32':
            case 'uint32':
                valueTypeType = 'number';
                fromAminoJSON = t.callExpression(
                    t.identifier('Number'),
                    [
                        t.identifier('value')
                    ]
                );

                break;
            case 'int64':
            case 'uint64':
                valueTypeType = 'Long';
                fromAminoJSON = t.callExpression(
                    t.memberExpression(
                        t.identifier('Long'),
                        t.identifier('fromValue')
                    ),
                    [
                        t.tsAsExpression(
                            t.identifier('value'),
                            t.tsUnionType(
                                [
                                    t.tsTypeReference(
                                        t.identifier('Long')
                                    ),
                                    t.tsStringKeyword()
                                ]
                            )
                        )
                    ]
                )
                break;
            default:
                fromAminoJSON = t.callExpression(
                    t.memberExpression(
                        t.identifier(valueType),
                        t.identifier('fromAmino')
                    ),
                    [
                        t.identifier('value')
                    ]
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
            t.identifier(propName),
            t.conditionalExpression(
                t.callExpression(
                    t.identifier('isObject'),
                    [
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(origName)
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
                                    t.identifier(origName)
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
                                        fromAminoJSON
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
    array(args: FromAminoJSONMethod, expr: t.Expression) {
        const {
            propName,
            origName
        } = getFieldNames(args.field);

        return t.objectProperty(
            t.identifier(propName),
            t.conditionalExpression(
                t.callExpression(
                    t.memberExpression(
                        t.identifier('Array'),
                        t.identifier('isArray')
                    ),
                    [
                        t.optionalMemberExpression(
                            t.identifier('object'),
                            t.identifier(origName),
                            false,
                            true
                        )
                    ]
                ),
                t.callExpression(
                    t.memberExpression(
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(origName)
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
    scalar() {
        return t.identifier('e');
    },

    string() {
        return arrayTypes.scalar();
    },

    bool() {
        return arrayTypes.scalar();
    },

    bytes(args: FromAminoJSONMethod) {
        return arrayTypes.scalar();
    },

    long() {
        return arrayTypes.scalar();
    },
    uint64() {
        return arrayTypes.scalar();
    },
    int64() {
        return arrayTypes.scalar();
    },
    sint64() {
        return arrayTypes.scalar();
    },
    fixed64() {
        return arrayTypes.scalar();
    },
    sfixed64() {
        return arrayTypes.scalar();
    },
    number() {
        return arrayTypes.scalar();
    },

    uint32() {
        return arrayTypes.scalar();
    },
    int32() {
        return arrayTypes.scalar();
    },
    sint32() {
        return arrayTypes.scalar();
    },
    fixed32() {
        return arrayTypes.scalar();
    },
    sfixed32() {
        return arrayTypes.scalar();
    },
    double() {
        return arrayTypes.scalar();
    },
    float() {
        return arrayTypes.scalar();
    },

    enum(args: FromAminoJSONMethod) {
        const fromAminoJSONFuncName = args.context.getFromEnum(args.field);
        return t.callExpression(
            t.identifier(fromAminoJSONFuncName),
            [
                t.identifier('e')
            ]
        );
    },

    // tokenInMaxs: Array.isArray(object?.tokenInMaxs) ? object.tokenInMaxs.map((e: any) => Coin.fromAminoJSON(e)) : []
    anyType(args: FromAminoJSONMethod) {
        const interfaceName = args.field.options['(cosmos_proto.accepts_interface)'];
        const interfaceFnName = getInterfaceFromAminoName(interfaceName)
        return t.callExpression(
            t.identifier(interfaceFnName),
            [
                t.identifier('e')
            ]
        );
    },
    protoType(args: FromAminoJSONMethod) {
        const name = args.context.getTypeName(args.field);
        return t.callExpression(
            t.memberExpression(
                t.identifier(name),
                t.identifier('fromAmino')
            ),
            [
                t.identifier('e')
            ]
        );
    },
    type(args: FromAminoJSONMethod) {

        if (
            args.context.options.aminoEncoding.useRecursiveV2encoding == true &&
            args.context.options.interfaces.enabled == true &&
            args.field.type === 'google.protobuf.Any' &&
            args.field.options['(cosmos_proto.accepts_interface)']

        ) {
            return arrayTypes.anyType(args);
        }
        return arrayTypes.protoType(args);
    }
};


export const fromAminoMessages = {
    height(context: ProtoParseContext, name: string, proto: ProtoType) {
        context.addUtil('Long');

        const keepCase = context.options.prototypes.parser.keepCase;
        const casing = keepCase ? (str) => str : camel;

        const makeField = (fieldName: string) =>
            t.objectProperty(
                t.identifier(casing(fieldName)),
                t.callExpression(
                    t.memberExpression(
                        t.identifier('Long'),
                        t.identifier('fromString')
                    ),
                    [
                        t.logicalExpression(
                            '||',
                            t.memberExpression(
                                t.identifier('object'),
                                t.identifier(fieldName)
                            ),
                            t.stringLiteral('0')
                        ),
                        t.booleanLiteral(true)
                    ]
                )
            );

        return [
            // return
            t.returnStatement(
                t.objectExpression([
                    makeField('revision_number'),
                    makeField('revision_height')
                ])
            )
        ]

    },
    duration(context: ProtoParseContext, name: string, proto: ProtoType) {
        context.addUtil('Long');
        return [
            t.variableDeclaration('const', [
                t.variableDeclarator(
                    t.identifier('value'),
                    t.callExpression(
                        t.identifier('parseInt'),
                        [
                            t.identifier('object')
                        ]
                    )
                )
            ]),
            // return
            t.returnStatement(
                t.objectExpression([

                    // seconds
                    t.objectProperty(
                        t.identifier('seconds'),
                        t.callExpression(
                            t.memberExpression(
                                t.identifier('Long'),
                                t.identifier('fromNumber')
                            ),
                            [
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('Math'),
                                        t.identifier('floor')
                                    ),
                                    [
                                        t.binaryExpression(
                                            '/',
                                            t.identifier('value'),
                                            BILLION
                                        )
                                    ]
                                )
                            ]
                        )
                    ),

                    // nanos
                    t.objectProperty(
                        t.identifier('nanos'),
                        t.binaryExpression(
                            '%',
                            t.identifier('value'),
                            BILLION
                        )
                    )
                ])
            )
        ];
    }
}