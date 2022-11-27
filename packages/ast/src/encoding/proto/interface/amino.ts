import * as t from '@babel/types';
import { ProtoType, ProtoField } from '@osmonauts/types';
import { identifier, tsPropertySignature, makeCommentBlock } from '../../../utils';
import { ProtoParseContext } from '../../context';

import {
    getFieldOptionality,
    getOneOfs
} from '../types';

import {
    CreateProtoTypeOptions,
    getFieldAminoTypeReference,
    getMessageName,
    getTSAminoType
} from '../../types';

export const createAminoTypeOptionsDefaults: CreateProtoTypeOptions = {
    useOriginalCase: true,
    typeNameSuffix: 'Amino'
};

const getAminoField = (
    context: ProtoParseContext,
    field: ProtoField,
    options: CreateProtoTypeOptions = createAminoTypeOptionsDefaults
) => {
    let ast: any = null;

    ast = getFieldAminoTypeReference(context, field, options);

    if (field.rule === 'repeated') {
        ast = t.tsArrayType(ast);
    }

    if (field.keyType) {
        ast = t.tsUnionType([
            t.tsTypeLiteral([
                t.tsIndexSignature([
                    identifier('key',
                        t.tsTypeAnnotation(
                            getTSAminoType(context, field.keyType)
                        )
                    )
                ],
                    t.tsTypeAnnotation(ast)
                )
            ])
        ]);
    }

    return ast;
};

export const createAminoType = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType,
    options: CreateProtoTypeOptions = createAminoTypeOptionsDefaults
) => {
    const oneOfs = getOneOfs(proto);
    const MsgName = getMessageName(name, options);

    // scalar amino types!
    let declaration: t.ExportNamedDeclaration | undefined;
    if (proto.type === 'Type') {
        switch (proto.name) {
            case 'Duration':
            case 'google.protobuf.Duration':
            case 'Timestamp':
            case 'google.protobuf.Timestamp':
                declaration = t.exportNamedDeclaration(
                    t.tsTypeAliasDeclaration(
                        t.identifier(MsgName),
                        null,
                        t.tsStringKeyword()
                    )
                );
                break;
            default:
        }
    }

    // declaration
    if (!declaration) {
        declaration = t.exportNamedDeclaration(t.tsInterfaceDeclaration(
            t.identifier(MsgName),
            null,
            [],
            t.tsInterfaceBody(
                Object.keys(proto.fields).reduce((m, fieldName) => {
                    const isOneOf = oneOfs.includes(fieldName);
                    const field = proto.fields[fieldName];

                    const orig = field.options?.['(telescope:orig)'] ?? fieldName;
                    const fieldNameWithCase = options.useOriginalCase ? orig : fieldName;

                    const propSig = tsPropertySignature(
                        t.identifier(fieldNameWithCase),
                        t.tsTypeAnnotation(
                            getAminoField(context, field, options)
                        ),
                        getFieldOptionality(context, field, isOneOf)
                    );

                    const comments = [];
                    if (field.comment) {
                        comments.push(
                            makeCommentBlock(field.comment)
                        );
                    }
                    if (field.options?.deprecated) {
                        comments.push(
                            makeCommentBlock('@deprecated')
                        );
                    }
                    if (comments.length) {
                        propSig.leadingComments = comments;
                    }

                    m.push(propSig)
                    return m;
                }, [])
            )
        ));
    }

    const comments = [];

    if (proto.comment) {
        comments.push(makeCommentBlock(proto.comment));
    }

    if (proto.options?.deprecated) {
        comments.push(makeCommentBlock('@deprecated'));
    }

    if (comments.length) {
        declaration.leadingComments = comments;
    }


    return declaration;
};


