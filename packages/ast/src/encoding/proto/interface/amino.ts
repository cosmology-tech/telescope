import * as t from '@babel/types';
import { ProtoType, ProtoField, ProtoEnum } from '@osmonauts/types';
import { identifier, tsPropertySignature, makeCommentBlock } from '../../../utils';
import { ProtoParseContext } from '../../context';

import {
    getFieldOptionality,
    getOneOfs
} from '../types';

import {
    SymbolNames,
    getFieldAminoTypeReference,
    getTSAminoType
} from '../../types';
import { getAminoTypeName } from '../../amino';

const getAminoField = (
    context: ProtoParseContext,
    field: ProtoField
) => {
    let ast: any = null;

    ast = getFieldAminoTypeReference(context, field);

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
    proto: ProtoType
) => {
    const oneOfs = getOneOfs(proto);

    const AminoName = SymbolNames.Amino(name);

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
                        t.identifier(AminoName),
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
            t.identifier(AminoName),
            null,
            [],
            t.tsInterfaceBody(
                Object.keys(proto.fields).reduce((m, fieldName) => {
                    const isOneOf = oneOfs.includes(fieldName);
                    const field = proto.fields[fieldName];

                    const orig = field.options?.['(telescope:orig)'] ?? fieldName;

                    // this (useOriginalCase) is always true, right?
                    // let fieldNameWithCase = options.useOriginalCase ? orig : fieldName;
                    let fieldNameWithCase = orig;

                    // should we actually just edit/add comments 
                    // to make this more "native" for any google.protobuf.Any?
                    // let's see...
                    if (
                        name === 'Any' &&
                        context.ref.proto.package === 'google.protobuf' &&
                        // options.type === 'Amino' &&
                        orig === 'type_url'
                    ) {
                        // type_url => type
                        fieldNameWithCase = 'type';
                    }

                    let aminoField = getAminoField(context, field);
                    if (
                        name === 'Any' &&
                        context.ref.proto.package === 'google.protobuf' &&
                        // options.type === 'Amino' &&
                        orig === 'value'
                    ) {
                        aminoField = t.tsAnyKeyword();
                    }

                    const propSig = tsPropertySignature(
                        t.identifier(fieldNameWithCase),
                        t.tsTypeAnnotation(
                            aminoField
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
    proto: ProtoType
) => {
    const AminoName = SymbolNames.Amino(name);
    const AminoTypeName = SymbolNames.AminoMsg(name);

    const aminoName = getAminoTypeName(context, context.ref.proto, proto);
    const typ = aminoName ? t.tsLiteralType(
        t.stringLiteral(aminoName)
    ) : t.tsTypeReference(
        t.identifier('string')
    );

    let typeAnnotation = t.tsTypeAnnotation(
        typ
    );
    if (
        name === 'Any' &&
        context.ref.proto.package === 'google.protobuf'
    ) {
        // replace type with plain string for this one case
        typeAnnotation = t.tsTypeAnnotation(
            t.tsStringKeyword()
        );
    }

    // scalar amino types!
    return t.exportNamedDeclaration(t.tsInterfaceDeclaration(
        t.identifier(AminoTypeName),
        null,
        [],
        t.tsInterfaceBody([
            tsPropertySignature(
                t.identifier('type'),
                typeAnnotation,
                false
            ),
            tsPropertySignature(
                t.identifier('value'),
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier(AminoName)
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
                t.identifier(SymbolNames.Amino(name)),
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
