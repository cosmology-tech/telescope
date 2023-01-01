import * as t from '@babel/types';
import { ProtoType, ProtoField, TelescopeLogLevel } from '@osmonauts/types';
import { identifier, tsPropertySignature, functionDeclaration, makeCommentBlock } from '../../../utils';
import { ProtoParseContext } from '../../context';

import {
    getBaseCreateTypeFuncName,
    getFieldOptionality,
    getOneOfs
} from '../types';

import {
    SymbolNames,
    getDefaultTSTypeFromProtoType,
    getFieldTypeReference,
    TelescopeBaseTypes,
    getTSType
} from '../../types';
import { getTypeUrlWithPkgAndName, getTypeUrl } from '../../amino';
import { TraversalSymbol } from '@osmonauts/types';

const getProtoField = (
    context: ProtoParseContext,
    field: ProtoField,
    type: TelescopeBaseTypes = 'Msg'
) => {
    let ast: any = null;

    const fieldRef = getFieldTypeReference(context, field, type);
    ast = fieldRef.ast
    const isTypeCastableAnyType = fieldRef.isTypeCastableAnyType

    if (field.rule === 'repeated') {
        ast = t.tsArrayType(ast);
        if (isTypeCastableAnyType) {
            ast = t.tsUnionType([
                ast,
                t.tsArrayType(
                    t.tsTypeReference(
                        t.identifier('Any')
                    )
                )
            ])
        }
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
    proto: ProtoType,
    type: TelescopeBaseTypes = 'Msg'
) => {
    const oneOfs = getOneOfs(proto);

    // MARKED AS COSMOS SDK specific code
    const optionalityMap = {};

    // if a param is found to be a route parameter, we assume it's required
    // if a param is found to be a query parameter, we assume it's optional
    if (context.pluginValue('prototypes.optionalQueryParams') && context.store.requests[name]) {
        const svc = context.store.requests[name];
        if (svc.info) {
            svc.info.queryParams.map(param => {
                optionalityMap[param] = true;
            })
        }
    }

    // hard-code optionality for pagination
    if (context.pluginValue('prototypes.optionalPageRequests')) {
        if (context.ref.proto.package === 'cosmos.base.query.v1beta1') {
            if (name === 'PageRequest') {
                optionalityMap['key'] = true;
                optionalityMap['offset'] = true;
                optionalityMap['limit'] = true;
                optionalityMap['count_total'] = true;
                optionalityMap['countTotal'] = true;
                optionalityMap['reverse'] = true;
            }
            if (name === 'PageResponse') {
                optionalityMap['next_key'] = true;
                optionalityMap['nextKey'] = true;
            }
        }
    }

    const MsgName = SymbolNames[type](name);

    const fields = [];

    if (
        context.pluginValue('prototypes.addTypeUrlToDecoders') &&
        ((
            context.pluginValue('interfaces.enabled') &&
            proto.options?.['(cosmos_proto.implements_interface)']
        ) ||
            (
                context.ref.proto.package === 'google.protobuf'
                && name === 'Any'
            ))
    ) {
        fields.push(tsPropertySignature(
            t.identifier('$typeUrl'),
            t.tsTypeAnnotation(t.tsStringKeyword()),
            true
        ));
    }

    // if (
    //     context.pluginValue('prototypes.addTypeUrlToDecoders') &&
    //     context.pluginValue('interfaces.enabled') &&
    //     proto.options?.['(cosmos_proto.implements_interface)']
    // ) {
    //     fields.push(tsPropertySignature(
    //         t.identifier('$typeUrl'),
    //         t.tsTypeAnnotation(t.tsStringKeyword()),
    //         true
    //     ));
    // }

    [].push.apply(fields, Object.keys(proto.fields).reduce((m, fieldName) => {
        const isOneOf = oneOfs.includes(fieldName);
        const field = proto.fields[fieldName];

        // optionalityMap is coupled to API requests
        const orig = field.options?.['(telescope:orig)'] ?? fieldName;
        let optional = false;
        if (optionalityMap[orig]) {
            optional = true;
        }

        // let fieldNameWithCase = options.useOriginalCase ? orig : fieldName;
        let fieldNameWithCase = type === 'SDKType' ? orig : fieldName;

        const protoField = getProtoField(context, field, type);

        const propSig = tsPropertySignature(
            t.identifier(fieldNameWithCase),
            t.tsTypeAnnotation(
                protoField
            ),
            optional || getFieldOptionality(context, field, isOneOf)
        );

        const comments = [];
        if (
            field.comment &&
            // no comment for derivative types
            (type === 'Msg')
        ) {
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
    }, []));

    // declaration
    const declaration = t.exportNamedDeclaration(t.tsInterfaceDeclaration(
        t.identifier(MsgName),
        null,
        [],
        t.tsInterfaceBody(
            fields
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

export const createProtoTypeType = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType
) => {
    const ProtoMsgName = SymbolNames.ProtoMsg(name);

    const typeUrl = getTypeUrl(context.ref.proto, proto);
    const typ = typeUrl ? t.tsLiteralType(
        t.stringLiteral(typeUrl)
    ) : t.tsTypeReference(
        t.identifier('string')
    );

    return t.exportNamedDeclaration(t.tsInterfaceDeclaration(
        t.identifier(ProtoMsgName),
        null,
        [],
        t.tsInterfaceBody([
            tsPropertySignature(
                t.identifier(context.options.prototypes.parser.keepCase ? 'type_url' : 'typeUrl'),
                t.tsTypeAnnotation(
                    typ
                ),
                false
            ),
            tsPropertySignature(
                t.identifier('value'),
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier('Uint8Array')
                    )
                ),
                false
            )
        ])));
};

interface FieldInfo {
    isOneOf: boolean,
    field: ProtoField,
    name: string,
    lookupInterface: string,
    isAnyType: boolean,
    symbols: TraversalSymbol[]
}

export const createProtoInterfaceEncodedType = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType
) => {

    const MsgName = SymbolNames.Msg(name);
    const EncodedMsgName = SymbolNames.Encoded(name);

    const oneOfs = getOneOfs(proto);

    const implementsAcceptsAny = context.pluginValue('interfaces.enabled');

    const fieldsWithInfo: FieldInfo[] = Object.keys(proto.fields)
        .reduce((m, fieldName) => {
            const isOneOf = oneOfs.includes(fieldName);
            const field = proto.fields[fieldName];

            const lookupInterface = field.options?.['(cosmos_proto.accepts_interface)'];
            const isAnyType = field.parsedType?.type === 'Type' && field.parsedType?.name === 'Any';

            // MARKED AS NOT DRY (symbols)
            let symbols = null;
            if (implementsAcceptsAny && lookupInterface) {
                symbols = context.store._symbols.filter(s => s.implementsType === lookupInterface && s.ref === context.ref.filename);
                if (!symbols.length && context.options.logLevel >= TelescopeLogLevel.Warn) {
                    console.warn(`[WARN] ${lookupInterface} is accepted but not implemented`);
                }
            }

            const isAnyInterface = isAnyType && lookupInterface && implementsAcceptsAny && symbols;
            if (!isAnyInterface) return m;
            // ONLY INTERFACES!

            return [...m, {
                isOneOf,
                field,
                name: fieldName,
                lookupInterface,
                isAnyType,
                symbols
            }];
        }, []).filter(Boolean);

    if (!fieldsWithInfo.length) return;

    const interfaceFields = fieldsWithInfo.map(fieldInfo => {
        return t.tsLiteralType(
            t.stringLiteral(fieldInfo.name)
        );
    });

    const fields = fieldsWithInfo.map(fieldsInfo => {
        const {
            field,
            isOneOf,
            name: fieldName
        } = fieldsInfo;

        let optional = false;
        const protoField = getProtoField(context, field, 'ProtoMsg');

        const propSig = tsPropertySignature(
            t.identifier(fieldName),
            t.tsTypeAnnotation(
                protoField
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

        return propSig;
    });

    return t.exportNamedDeclaration(t.tsTypeAliasDeclaration(
        t.identifier(EncodedMsgName),
        null,
        t.tsIntersectionType([
            t.tsTypeReference(
                t.identifier('Omit'),
                t.tsTypeParameterInstantiation([
                    t.tsTypeReference(
                        t.identifier(MsgName)
                    ),
                    interfaceFields.length > 1 ? t.tsUnionType([
                        ...interfaceFields
                    ]) : interfaceFields[0]
                ])
            ),
            t.tsTypeLiteral([
                ...fields
            ])
        ])
    ));

};


export const createCreateProtoType = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType
) => {
    const oneOfs = getOneOfs(proto);

    const fields = [];

    if (
        context.pluginValue('prototypes.addTypeUrlToDecoders') &&
        ((
            context.pluginValue('interfaces.enabled') &&
            proto.options?.['(cosmos_proto.implements_interface)']
        ) ||
            (
                context.ref.proto.package === 'google.protobuf'
                && name === 'Any'
            ))
    ) {
        const typeUrl = getTypeUrlWithPkgAndName(context.ref.proto.package, name);
        fields.push(t.objectProperty(
            t.identifier('$typeUrl'),
            t.stringLiteral(typeUrl)
        ));
    }
    // if (
    //     context.pluginValue('prototypes.addTypeUrlToDecoders') &&
    //     context.pluginValue('interfaces.enabled') &&
    //     proto.options?.['(cosmos_proto.implements_interface)']
    // ) {
    //     const typeUrl = getTypeUrlWithPkgAndName(context.ref.proto.package, name);
    //     fields.push(t.objectProperty(
    //         t.identifier('$typeUrl'),
    //         t.stringLiteral(typeUrl)
    //     ));
    // }

    [].push.apply(fields, Object.keys(proto.fields).map(key => {
        const isOneOf = oneOfs.includes(key);
        const isOptional = getFieldOptionality(context, proto.fields[key], isOneOf)
        return {
            name: key,
            ...proto.fields[key],
            isOneOf,
            isOptional
        };
    })
        .map(field => {
            return t.objectProperty(
                t.identifier(field.name),
                getDefaultTSTypeFromProtoType(context, field, field.isOneOf)
            )
        }));


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

