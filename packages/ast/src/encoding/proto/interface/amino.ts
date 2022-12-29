import * as t from '@babel/types';
import { ProtoType, ProtoField, ProtoEnum } from '@osmonauts/types';
import { identifier, tsPropertySignature, makeCommentBlock } from '../../../utils';
import { ProtoParseContext } from '../../context';

import {
    getFieldOptionality,
    getOneOfs
} from '../types';

import {
    CreateProtoTypeOptions,
    SymbolNames,
    getFieldAminoTypeReference,
    getTSAminoType
} from '../../types';
import { getAminoTypeName } from '../../amino';

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

    const MsgName = SymbolNames.Msg(name, options);

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
                    let fieldNameWithCase = options.useOriginalCase ? orig : fieldName;

                    // should we actually just edit/add comments 
                    // to make this more "native" for any google.protobuf.Any?
                    // let's see...
                    if (
                        name === 'Any' &&
                        context.ref.proto.package === 'google.protobuf' &&
                        options.typeNameSuffix === 'Amino' &&
                        orig === 'type_url'
                    ) {
                        // type_url => type
                        fieldNameWithCase = 'type';
                    }

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

export const createAminoTypeType = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType,
    options: CreateProtoTypeOptions = createAminoTypeOptionsDefaults
) => {
    const MsgName = SymbolNames.Msg(name, options);
    const AminoMsgName = SymbolNames.AminoType(name, options);

    const aminoName = getAminoTypeName(context, context.ref.proto, proto);
    const typ = aminoName ? t.tsLiteralType(
        t.stringLiteral(aminoName)
    ) : t.tsTypeReference(
        t.identifier('string')
    );
    // scalar amino types!
    return t.exportNamedDeclaration(t.tsInterfaceDeclaration(
        t.identifier(AminoMsgName),
        null,
        [],
        t.tsInterfaceBody([
            tsPropertySignature(
                t.identifier('type'),
                t.tsTypeAnnotation(
                    typ
                ),
                false
            ),
            tsPropertySignature(
                t.identifier('value'),
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier(MsgName)
                    )
                ),
                false
            )
        ])));
};



export const createEnumAminoType = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoEnum
) => {
    return t.exportNamedDeclaration(
        t.variableDeclaration('const', [
            t.variableDeclarator(
                t.identifier(name + 'Amino'),
                t.identifier(name)
            )
        ])
    );
    // return createProtoEnum(
    //     context,
    //     name + 'Amino',
    //     proto
    // );
};
