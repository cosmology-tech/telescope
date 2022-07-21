import * as t from '@babel/types';
import { ProtoType, ProtoField } from '@osmonauts/types';
import { identifier, tsPropertySignature, functionDeclaration, commentBlock, renderNameSafely } from '../../utils';
import { ProtoParseContext } from '../context';

import {
    NATIVE_TYPES,
    getBaseCreateTypeFuncName,
    getDefaultTSTypeFromProtoType,
    getTSTypeFromProtoType,
    getFieldOptionality,
    getOneOfs
} from './types';

const getProtoFieldTypeName = (context: ProtoParseContext, field: ProtoField) => {
    let name = context.getTypeName(field)
    return renderNameSafely(name);
};

const getProtoField = (context: ProtoParseContext, field: ProtoField) => {
    let ast: any = null;
    let optional = false;

    if (field.options?.['(gogoproto.nullable)']) {
        optional = true;
    }

    if (NATIVE_TYPES.includes(field.type)) {
        ast = getTSTypeFromProtoType(context, field.type);
    } else {
        ast = t.tsTypeReference(t.identifier(getProtoFieldTypeName(context, field)));
    }

    if (field.rule === 'repeated') {
        ast = t.tsArrayType(ast);
    }

    if (field.keyType) {
        ast = t.tsUnionType([
            t.tsTypeLiteral([
                t.tsIndexSignature([
                    identifier('key',
                        t.tsTypeAnnotation(
                            getTSTypeFromProtoType(context, field.keyType)
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



export const createProtoType = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType
) => {
    const oneOfs = getOneOfs(proto);

    const declaration = t.exportNamedDeclaration(t.tsInterfaceDeclaration(
        t.identifier(name),
        null,
        [],
        t.tsInterfaceBody(
            Object.keys(proto.fields).reduce((m, fieldName) => {
                const isOneOf = oneOfs.includes(fieldName);
                const field = proto.fields[fieldName];
                const propSig = tsPropertySignature(
                    t.identifier(fieldName),
                    t.tsTypeAnnotation(
                        getProtoField(context, field)
                    ),
                    getFieldOptionality(field, isOneOf)
                );

                const comments = [];
                if (field.comment) {
                    comments.push(
                        commentBlock(field.comment)
                    );
                }
                if (field.options?.deprecated) {
                    comments.push(
                        commentBlock('@deprecated')
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

    const comments = [];

    if (proto.comment) {
        comments.push(commentBlock(proto.comment));
    }

    if (proto.options?.deprecated) {
        comments.push(commentBlock('@deprecated'));
    }

    if (comments.length) {
        declaration.leadingComments = comments;
    }


    return declaration;
};


export const createCreateProtoType = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType
) => {
    const oneOfs = getOneOfs(proto);

    const fields = Object.keys(proto.fields).map(key => {
        const isOneOf = oneOfs.includes(key);
        const isOptional = getFieldOptionality(proto.fields[key], isOneOf)
        return {
            name: key,
            ...proto.fields[key],
            isOptional
        };
    })
        .map(field => {
            return t.objectProperty(
                t.identifier(field.name),
                getDefaultTSTypeFromProtoType(context, field, field.isOptional)
            )
        })


    return functionDeclaration(t.identifier(getBaseCreateTypeFuncName(name)),
        [],
        t.blockStatement([
            t.returnStatement(t.objectExpression(
                [
                    ...fields,
                ]
            ))
        ]), false, false, t.tsTypeAnnotation(
            t.tsTypeReference(t.identifier(name))
        ))
};

