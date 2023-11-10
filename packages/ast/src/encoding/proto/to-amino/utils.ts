import * as t from '@babel/types';
import { ProtoType } from '@cosmology/types';
import { BILLION, TypeLong, identifier } from '../../../utils';
import { ProtoParseContext } from '../../context';
import { getFieldNames } from '../../types';
import { getInterfaceToAminoName } from '../implements';
import { ToAminoJSONMethod } from './index';

const notUndefinedSetValue = (sdkName: string, msgName: string, expr: t.Expression) => {
    return t.expressionStatement(
        t.logicalExpression(
            '&&',
            t.binaryExpression(
                '!==',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(msgName)
                ),
                t.identifier('undefined')
            ),
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('obj'),
                    t.identifier(sdkName)
                ),
                expr
            )
        )
    );
}

export const toAminoJSON = {

    scalar(args: ToAminoJSONMethod) {
        const { propName, origName } = getFieldNames(args.field);

        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('obj'),
                    t.identifier(origName)
                ),
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(propName)
                )
            )
        );
    },

    string(args: ToAminoJSONMethod) {
        return toAminoJSON.scalar(args);
    },
    double(args: ToAminoJSONMethod) {
        return toAminoJSON.scalar(args);
    },
    float(args: ToAminoJSONMethod) {
        return toAminoJSON.scalar(args);
    },
    bool(args: ToAminoJSONMethod) {
        return toAminoJSON.scalar(args);
    },

    number(args: ToAminoJSONMethod) {
        return toAminoJSON.scalar(args);
    },

    int32(args: ToAminoJSONMethod) {
        return toAminoJSON.scalar(args);
    },

    uint32(args: ToAminoJSONMethod) {
        return toAminoJSON.scalar(args);
    },

    sint32(args: ToAminoJSONMethod) {
        return toAminoJSON.scalar(args);
    },
    fixed32(args: ToAminoJSONMethod) {
        return toAminoJSON.scalar(args);
    },
    sfixed32(args: ToAminoJSONMethod) {
        return toAminoJSON.scalar(args);
    },

    long(args: ToAminoJSONMethod) {
        const { propName, origName } = getFieldNames(args.field);

        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('obj'),
                    t.identifier(origName)
                ),
                t.conditionalExpression(
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(propName)
                    ),
                    t.callExpression(
                        t.memberExpression(
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier(propName)
                            ),
                            t.identifier('toString')
                        ),
                        []
                    ),
                    t.identifier('undefined')
                )
            )
        );

    },
    int64(args: ToAminoJSONMethod) {
        return toAminoJSON.long(args);
    },
    uint64(args: ToAminoJSONMethod) {
        return toAminoJSON.long(args);
    },
    sint64(args: ToAminoJSONMethod) {
        return toAminoJSON.long(args);
    },
    fixed64(args: ToAminoJSONMethod) {
        return toAminoJSON.long(args);
    },
    sfixed64(args: ToAminoJSONMethod) {
        return toAminoJSON.long(args);
    },

    protoType(args: ToAminoJSONMethod) {
        const { propName, origName } = getFieldNames(args.field);
        const name = args.context.getTypeName(args.field);

        let defaultValue: t.ObjectExpression | t.Identifier = t.identifier('undefined');
        if (args.field.type === 'ibc.core.client.v1.Height') {
            defaultValue = t.objectExpression([])
        }

        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('obj'),
                    t.identifier(origName)
                ),
                t.conditionalExpression(
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(propName)
                    ),
                    t.callExpression(
                        t.memberExpression(
                            t.identifier(name),
                            t.identifier('toAmino')
                        ),
                        [
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier(propName)
                            ),
                            ...(args.context.options.interfaces.enabled ? [
                                t.identifier('useInterfaces')
                            ] : []),
                        ]
                    ),
                    defaultValue
                )
            )
        );
    },

    anyType(args: ToAminoJSONMethod) {
        const { propName, origName } = getFieldNames(args.field);
        // const typeMap = args.context.store.getTypeUrlMap(args.context.ref);
        // console.log(JSON.stringify(typeMap, null, 2));
        // console.log(JSON.stringify(args.field, null, 2));
        const interfaceName = args.field.options['(cosmos_proto.accepts_interface)'];
        const interfaceFnName = getInterfaceToAminoName(interfaceName)

        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('obj'),
                    t.identifier(origName)
                ),
                t.conditionalExpression(
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(propName)
                    ),
                    t.callExpression(
                        t.identifier(interfaceFnName),
                        [
                            t.tsAsExpression(
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier(propName)
                                ),
                                t.tsTypeReference(
                                    t.identifier('Any')
                                )
                            ),
                            ...(args.context.options.interfaces.enabled ? [
                                t.identifier('useInterfaces')
                            ] : []),
                        ]
                    ),
                    t.identifier('undefined')
                )
            )
        );
    },

    type(args: ToAminoJSONMethod) {
        if (
            !args.context.options.aminoEncoding.useLegacyInlineEncoding &&
            args.context.options.interfaces.enabled &&
            args.field.type === 'google.protobuf.Any' &&
            args.field.options['(cosmos_proto.accepts_interface)']

        ) {
            return toAminoJSON.anyType(args);
        }

        return toAminoJSON.protoType(args);
    },

    enum(args: ToAminoJSONMethod) {
        return toAminoJSON.scalar(args);
    },

    bytes(args: ToAminoJSONMethod) {
        return toAminoJSON.scalar(args);
    },

    duration(args: ToAminoJSONMethod) {
        return toAminoJSON.type(args);
    },

    timestamp(args: ToAminoJSONMethod) {
        const timestampFormat = args.context.pluginValue(
            'prototypes.typingsFormat.timestamp'
        );
        switch (timestampFormat) {
            case 'timestamp':
                return toAminoJSON.type(args);
            case 'date':
            default:
                return toAminoJSON.timestampDate(args);
        }
    },

    timestampDate(args: ToAminoJSONMethod) {
        const { propName, origName } = getFieldNames(args.field);
        args.context.addUtil('toTimestamp');

        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('obj'),
                    t.identifier(origName)
                ),
                t.conditionalExpression(
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(propName)
                    ),
                    t.callExpression(
                        t.memberExpression(
                            t.identifier('Timestamp'),
                            t.identifier('toAmino')
                        ),
                        [
                            t.callExpression(
                                t.identifier('toTimestamp'),
                                [
                                    t.memberExpression(
                                        t.identifier('message'),
                                        t.identifier(propName)
                                    )
                                ]
                            )
                        ]
                    ),
                    t.identifier('undefined')
                )
            )
        );
    },

    pubkey(args: ToAminoJSONMethod) {
        args.context.addUtil('decodePubkey');

        const { propName, origName } = getFieldNames(args.field);

        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('obj'),
                    t.identifier(origName)
                ),
                t.conditionalExpression(
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(propName)
                    ),
                    //
                    t.callExpression(
                      t.identifier('decodePubkey'),
                      [
                          t.memberExpression(
                              t.identifier('message'),
                              t.identifier(propName)
                          ),
                      ]
                    ),
                    //
                    t.identifier('undefined')
                )
            )
        );
    },

    rawBytes(args: ToAminoJSONMethod) {
        args.context.addUtil('fromUtf8');

        const { propName, origName } = getFieldNames(args.field);

        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('obj'),
                    t.identifier(origName)
                ),
                t.conditionalExpression(
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(propName)
                    ),
                    //
                    t.callExpression(
                        t.memberExpression(
                            t.identifier('JSON'),
                            t.identifier('parse')
                        ),
                        [
                            t.callExpression(
                                t.identifier('fromUtf8'),
                                [
                                    t.memberExpression(
                                        t.identifier('message'),
                                        t.identifier(propName)
                                    ),
                                ]
                            )
                        ]
                    ),
                    //
                    t.identifier('undefined')
                )
            )
        );
    },

    wasmByteCode(args: ToAminoJSONMethod) {
        args.context.addUtil('toBase64');


        const { propName, origName } = getFieldNames(args.field);

        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('obj'),
                    t.identifier(origName)
                ),
                t.conditionalExpression(
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(propName)
                    ),
                    //
                    t.callExpression(
                        t.identifier('toBase64'),
                        [
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier(propName)
                            ),
                        ]
                    ),
                    //
                    t.identifier('undefined')
                )
            )
        );
    },



    keyHash(args: ToAminoJSONMethod) {

        const { propName, origName } = getFieldNames(args.field);
        const keyType = args.field.keyType;
        const valueType = args.field.parsedType.name;

        let toAminoJSON = null;
        switch (valueType) {
            case 'string':
                toAminoJSON = t.identifier('v')
                break;
            case 'uint32':
            case 'int32':
                toAminoJSON = t.callExpression(
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
                toAminoJSON = t.callExpression(
                    t.memberExpression(
                        t.identifier('v'),
                        t.identifier('toString')
                    ),
                    []
                )
                break;
            default:
                toAminoJSON = t.callExpression(
                    t.memberExpression(
                        t.identifier(valueType),
                        t.identifier('toAmino')
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
                        t.identifier(origName)
                    ),
                    t.objectExpression([])
                )
            ),
            //
            t.ifStatement(
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(propName)
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
                                            t.identifier(propName)
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
                                                        t.identifier(origName)
                                                    ),
                                                    t.identifier('k'),
                                                    true
                                                ),
                                                toAminoJSON
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

    array(args: ToAminoJSONMethod, expr: t.Expression) {
        const { propName, origName } = getFieldNames(args.field);

        return t.ifStatement(
            t.memberExpression(
                t.identifier('message'),
                t.identifier(propName)
            ),
            t.blockStatement([
                t.expressionStatement(
                    t.assignmentExpression(
                        '=',
                        t.memberExpression(
                            t.identifier('obj'),
                            t.identifier(origName)
                        ),
                        t.callExpression(
                            t.memberExpression(
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier(propName)
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
                            t.identifier(origName)
                        ),
                        t.arrayExpression([])
                    )
                )
            ])
        );
    }

};

export const arrayTypes = {
    scalar() {
        return t.identifier('e');
    },
    string() {
        return arrayTypes.scalar();
    },
    double() {
        return arrayTypes.scalar();
    },
    float() {
        return arrayTypes.scalar();
    },
    bool() {
        return arrayTypes.scalar();
    },
    number() {
        return arrayTypes.scalar();
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
    long(args: ToAminoJSONMethod) {
        return TypeLong.getToStringArray(args.context);
    },
    int64(args: ToAminoJSONMethod) {
        return arrayTypes.long(args);
    },
    uint64(args: ToAminoJSONMethod) {
        return arrayTypes.long(args);
    },
    sint64(args: ToAminoJSONMethod) {
        return arrayTypes.long(args);
    },
    fixed64(args: ToAminoJSONMethod) {
        return arrayTypes.long(args);
    },
    sfixed64(args: ToAminoJSONMethod) {
        return arrayTypes.long(args);
    },
    bytes(args: ToAminoJSONMethod) {
        return arrayTypes.scalar();
    },
    enum(args: ToAminoJSONMethod) {
        const enumFuncName = args.context.getToEnum(args.field);
        return t.callExpression(
            t.identifier(enumFuncName),
            [
                t.identifier('e')
            ]
        );
    },
    anyType(args: ToAminoJSONMethod) {
        const { propName, origName } = getFieldNames(args.field);
        // const typeMap = args.context.store.getTypeUrlMap(args.context.ref);
        // console.log(JSON.stringify(typeMap, null, 2));
        // console.log(JSON.stringify(args.field, null, 2));
        const interfaceName = args.field.options['(cosmos_proto.accepts_interface)'];
        const interfaceFnName = getInterfaceToAminoName(interfaceName)
        return t.conditionalExpression(
            t.identifier('e'),
            t.callExpression(
                t.identifier(interfaceFnName),
                [
                    t.tsAsExpression(
                        t.identifier('e'),
                        t.tsTypeReference(
                            t.identifier('Any')
                        )
                    ),
                    ...(args.context.options.interfaces.enabled ? [
                        t.identifier('useInterfaces')
                    ] : []),
                ]
            ),
            t.identifier('undefined')
        );
    },
    protoType(args: ToAminoJSONMethod) {
        const name = args.context.getTypeName(args.field);
        return t.conditionalExpression(
            t.identifier('e'),
            t.callExpression(
                t.memberExpression(
                    t.identifier(name),
                    t.identifier('toAmino')
                ),
                [
                    t.identifier('e'),
                    ...(args.context.options.interfaces.enabled ? [
                        t.identifier('useInterfaces')
                    ] : []),
                ]
            ),
            t.identifier('undefined')
        );
    },
    type(args: ToAminoJSONMethod) {
        if (
            !args.context.options.aminoEncoding.useLegacyInlineEncoding &&
            args.context.options.interfaces.enabled &&
            args.field.type === 'google.protobuf.Any' &&
            args.field.options['(cosmos_proto.accepts_interface)']

        ) {
            return arrayTypes.anyType(args);
        }
        return arrayTypes.protoType(args);
    }
}


export const toAminoMessages = {
    anyType() {
        return [
            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator(
                        identifier('obj', t.tsTypeAnnotation(t.tsAnyKeyword())),
                        t.objectExpression([])
                    )
                ]
            ),
            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier('type')
                    ),
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier('typeUrl')
                    )
                )
            ),
            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier('value')
                    ),
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier('value')
                    )
                )
            ),
            t.returnStatement(
                t.identifier('obj')
            )
        ]
    },
    timestamp(context: ProtoParseContext, name: string, proto: ProtoType) {
        context.addUtil('fromTimestamp');

        return t.returnStatement(
            t.callExpression(
                t.memberExpression(
                    t.callExpression(
                        t.memberExpression(
                            t.callExpression(
                                t.identifier('fromTimestamp'),
                                [t.identifier('message')]
                            ),
                            t.identifier('toISOString')
                        ),
                        []
                    ),
                    t.identifier('replace')
                ),
                [
                    t.regExpLiteral('\\.\\d+Z$'),
                    t.stringLiteral('Z')
                ]
            )
        )
    },
    duration(context: ProtoParseContext, name: string, proto: ProtoType) {
        const longType = TypeLong.getType(context);

        switch (longType) {
            case 'BigInt':
                return t.returnStatement(
                    t.callExpression(
                        t.memberExpression(
                            t.parenthesizedExpression(
                                t.binaryExpression(
                                    '+',
                                    t.binaryExpression(
                                        '*',
                                        t.memberExpression(
                                            t.identifier('message'),
                                            t.identifier('seconds'),
                                        ),
                                        t.callExpression(
                                            t.identifier('BigInt'),
                                            [t.stringLiteral("1000000000")],
                                        ),
                                    ),
                                    t.callExpression(
                                        t.identifier('BigInt'),
                                        [t.memberExpression(
                                            t.identifier('message'),
                                            t.identifier('nanos'),
                                        )],
                                    ),
                                ),
                            ),
                            t.identifier('toString'),
                        ),
                        [],
                    )
                )
            case 'Long':
            default:
                return t.returnStatement(
                    t.callExpression(
                        t.memberExpression(
                            t.binaryExpression(
                                '+',
                                t.binaryExpression(
                                    '*',
                                    t.callExpression(
                                        t.memberExpression(
                                            t.memberExpression(
                                                t.identifier('message'),
                                                t.identifier('seconds')
                                            ),
                                            t.identifier('toInt')
                                        ),
                                        []
                                    ),
                                    BILLION
                                ),
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier('nanos')
                                )
                            ),
                            t.identifier('toString')
                        ),
                        []
                    )
                );
        }

    }
}