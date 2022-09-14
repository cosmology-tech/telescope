import * as t from '@babel/types';
import { ProtoType, ProtoField } from '@osmonauts/types';
import { identifier, tsPropertySignature, functionDeclaration, makeCommentBlock } from '../../utils';
import { ProtoParseContext } from '../context';

import {
    getBaseCreateTypeFuncName,
    getFieldOptionality,
    getOneOfs
} from './types';

import {
    getDefaultTSTypeFromProtoType,
    getFieldTypeReference,
    getTSType
} from '../types';

const getProtoField = (context: ProtoParseContext, field: ProtoField) => {
    let ast: any = null;

    ast = getFieldTypeReference(context, field);

    if (field.rule === 'repeated') {
        ast = t.tsArrayType(ast);
    }

    if (field.keyType) {
        ast = t.tsUnionType([
            t.tsTypeLiteral([
                t.tsIndexSignature([
                    identifier('key',
                        t.tsTypeAnnotation(
                            getTSType(context, field.keyType)
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

    const optionalityMap = {};
    if (context.store.requests[name]) {
        const svc = context.store.requests[name];
        if (svc.info) {
            // console.log('svc.info', svc.info);
            // const reverseObj = Object.keys(svc.info.paramMap)
            svc.info.queryParams.map(param => {
                optionalityMap[param] = true;
            })
        }
    }

    const declaration = t.exportNamedDeclaration(t.tsInterfaceDeclaration(
        t.identifier(name),
        null,
        [],
        t.tsInterfaceBody(
            Object.keys(proto.fields).reduce((m, fieldName) => {
                const isOneOf = oneOfs.includes(fieldName);
                const field = proto.fields[fieldName];
                const orig = field.options?.['(telescope:orig)'];
                let optional = false;
                if (optionalityMap[orig]) {
                    optional = true;
                }
                const propSig = tsPropertySignature(
                    t.identifier(fieldName),
                    t.tsTypeAnnotation(
                        getProtoField(context, field)
                    ),
                    optional || getFieldOptionality(context, field, isOneOf)
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


export const createCreateProtoType = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType
) => {
    const oneOfs = getOneOfs(proto);

    const fields = Object.keys(proto.fields).map(key => {
        const isOneOf = oneOfs.includes(key);
        const isOptional = getFieldOptionality(context, proto.fields[key], isOneOf)
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

