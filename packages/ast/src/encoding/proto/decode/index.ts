import * as t from '@babel/types';
import { identifier, objectMethod } from '../../../utils';
import { ProtoType, ProtoField, getFieldsTypeName, getBaseCreateTypeFuncName } from '../types';
import { baseTypes, decode } from './utils';

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(`need to implement decode (${field.type} rules[${field.rule}] name[${name}])`);
}

export const decodeMethodFields = (name: string, proto: ProtoType) => {
    return Object.keys(proto.fields ?? {}).map(fieldName => {
        const field = proto.fields[fieldName];
        if (field.rule === 'repeated') {
            switch (field.type) {
                case 'string':
                    return decode.scalarArray(field.id, fieldName, baseTypes.string());
                case 'uint64':
                    return decode.scalarArray(field.id, fieldName, baseTypes.long());
                case 'int32':
                    return decode.scalarArray(field.id, fieldName, baseTypes.int32());
                case 'int64':
                    return needsImplementation(fieldName, field);
                case 'bytes':
                    return needsImplementation(fieldName, field);
                default:
                    switch (field.parsedType.type) {
                        case 'Enum':
                        case 'Type':
                            return decode.typeArray(field.id, fieldName, getFieldsTypeName(field));
                    }
                    return needsImplementation(fieldName, field);
            }

        }


        if (field.keyType) {
            // currently they all look the same for decode()
            return decode.keyHash(field.id, fieldName, name);
        }

        switch (field.type) {
            case 'string':
                return decode.string(field.id, fieldName);
            case 'uint64':
                return decode.long(field.id, fieldName);
            case 'int64':
                return decode.int64(field.id, fieldName);
            case 'double':
                return decode.double(field.id, fieldName);
            case 'bytes':
                return decode.bytes(field.id, fieldName);
            case 'bool':
                return decode.bool(field.id, fieldName);
            case 'google.protobuf.Duration':
            case 'Duration':
                return decode.duration(field.id, fieldName);
            case 'google.protobuf.Timestamp':
            case 'Timestamp':
                return decode.timestamp(field.id, fieldName);
            default:
                switch (field.parsedType.type) {
                    case 'Enum':
                        return decode.enum(field.id, fieldName);
                    case 'Type':
                        return decode.type(field.id, fieldName, getFieldsTypeName(field));
                }
                return needsImplementation(fieldName, field);
        }
    });
};

export const decodeMethod = (name: string, proto: ProtoType) => {
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


                            ...decodeMethodFields(name, proto),

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

