import * as t from '@babel/types';
import { identifier, objectMethod } from '../../../utils';
import { ProtoParseContext } from '../../context';
import { ProtoType, ProtoField, getBaseCreateTypeFuncName } from '../types';
import { baseTypes, decode } from './utils';

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(`need to implement decode (${field.type} rules[${field.rule}] name[${name}])`);
}
export interface DecodeMethod {
    typeName: string;
    context: ProtoParseContext;
    field: ProtoField;
}

export const decodeMethodFields = (context: ProtoParseContext, name: string, proto: ProtoType) => {
    return Object.keys(proto.fields ?? {}).map(fieldName => {
        const field = {
            name: fieldName,
            ...proto.fields[fieldName]
        };

        const args: DecodeMethod = {
            typeName: name,
            context,
            field
        };

        if (field.rule === 'repeated') {
            switch (field.type) {
                case 'string':
                    return decode.scalarArray(args, baseTypes.string(args));
                case 'uint64':
                    return decode.scalarArray(args, baseTypes.long(args));
                case 'int32':
                    return decode.scalarArray(args, baseTypes.int32(args));
                case 'int64':
                    return needsImplementation(fieldName, field);
                case 'bytes':
                    return needsImplementation(fieldName, field);
                default:
                    switch (field.parsedType.type) {
                        case 'Enum':
                        case 'Type':
                            return decode.typeArray(args);
                    }
                    return needsImplementation(fieldName, field);
            }

        }


        if (field.keyType) {
            // currently they all look the same for decode()
            return decode.keyHash(args);
        }

        switch (field.type) {
            case 'string':
                return decode.string(args);
            case 'uint64':
                return decode.long(args);
            case 'int64':
                return decode.int64(args);
            case 'double':
                return decode.double(args);
            case 'bytes':
                return decode.bytes(args);
            case 'bool':
                return decode.bool(args);
            case 'google.protobuf.Duration':
            case 'Duration':
                return decode.duration(args);
            case 'google.protobuf.Timestamp':
            case 'Timestamp':
                return decode.timestamp(args);
            default:
                switch (field.parsedType.type) {
                    case 'Enum':
                        return decode.enum(args);
                    case 'Type':
                        return decode.type(args);
                }
                return needsImplementation(fieldName, field);
        }
    });
};

export const decodeMethod = (context: ProtoParseContext, name: string, proto: ProtoType) => {
    return objectMethod(
        'method',
        t.identifier('decode'),
        [
            identifier('input',
                t.tsTypeAnnotation(
                    t.tsUnionType(
                        [
                            t.tsTypeReference(
                                t.tsQualifiedName(
                                    t.identifier('_m0'),
                                    t.identifier('Reader')
                                ),
                                null
                            ),
                            t.tsTypeReference(
                                t.identifier('Uint8Array')
                            )
                        ]
                    )
                ),
                false
            )
        ],
        t.blockStatement([

            /*
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
            */
            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator(
                        t.identifier('reader'),
                        t.conditionalExpression(
                            t.binaryExpression(
                                'instanceof',
                                t.identifier('input'),
                                t.memberExpression(
                                    t.identifier('_m0'),
                                    t.identifier('Reader')
                                )
                            ),
                            t.identifier('input'),
                            t.newExpression(
                                t.memberExpression(
                                    t.identifier('_m0'),
                                    t.identifier('Reader')
                                ),
                                [
                                    t.identifier('input')
                                ]
                            )
                        )
                    )
                ]
            ),

            /*
    let end = length === undefined ? reader.len : reader.pos + length;
            */

            t.variableDeclaration(
                'let',
                [
                    t.variableDeclarator(
                        t.identifier('end'),
                        t.conditionalExpression(
                            t.binaryExpression('===',
                                t.identifier('length'),
                                t.identifier('undefined')
                            ),
                            t.memberExpression(
                                t.identifier('reader'),
                                t.identifier('len')
                            ),
                            t.binaryExpression(
                                '+',
                                t.memberExpression(
                                    t.identifier('reader'),
                                    t.identifier('pos')
                                ),
                                t.identifier('length')
                            )
                        )
                    )
                ]
            ),

            /*
            
    const message = createBaseMsgJoinPool();

            */

            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator(
                        t.identifier('message'),
                        t.callExpression(
                            t.identifier(getBaseCreateTypeFuncName(name)),
                            []
                        )
                    )
                ]
            ),

            ///////////
            ///////////
            ///////////

            t.whileStatement(
                t.binaryExpression(
                    '<',
                    t.memberExpression(
                        t.identifier('reader'),
                        t.identifier('pos')
                    ),
                    t.identifier('end')
                ),
                t.blockStatement([

                    /// DECODE BODY
                    t.variableDeclaration(
                        'const',
                        [
                            t.variableDeclarator(
                                t.identifier('tag'),
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('reader'),
                                        t.identifier('uint32')
                                    ),
                                    []
                                )
                            )
                        ]
                    ),


                    t.switchStatement(
                        t.binaryExpression(
                            '>>>',
                            t.identifier('tag'),
                            t.numericLiteral(3)
                        ),
                        [


                            ...decodeMethodFields(context, name, proto),

                            /*
                            default:
                                    reader.skipType(tag & 7);
                                    break;
                            */
                            t.switchCase(
                                null,
                                [
                                    t.expressionStatement(
                                        t.callExpression(
                                            t.memberExpression(
                                                t.identifier('reader'),
                                                t.identifier('skipType')
                                            ),
                                            [
                                                t.binaryExpression(
                                                    '&',
                                                    t.identifier('tag'),
                                                    t.numericLiteral(7)
                                                )
                                            ]
                                        )
                                    ),
                                    t.breakStatement()
                                ]
                            )
                        ]
                    )

                ])
            ),

            // RETURN STATEMENT
            t.returnStatement(
                t.identifier('message')
            )

        ]),
        false,
        false,
        false,
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier(name)
            )
        )
    )
};

