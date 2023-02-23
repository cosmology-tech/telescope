import { GenericParseContext } from "../../../../encoding";
import { ProtoService, ProtoServiceMethod } from "@osmonauts/types";
import { arrowFunctionExpression, classDeclaration, classMethod, classProperty, commentBlock, identifier, tsMethodSignature } from '../../../../utils';
import { camel } from '@osmonauts/utils';
import { processRpcComment, returnReponseType } from '../utils/rpc';
import { metadata, bindThis, makeComment, getRpcClassName } from './utils'
import * as t from '@babel/types'

const gRPCWebMethodDefinition = (
    context: GenericParseContext,
    name: string,
    msg: string,
    svc: ProtoServiceMethod,
    packageImport: string,
    trailingComments?: t.CommentBlock[],
    leadingComments?: t.CommentBlock[]
) => {

    const requestType = svc.requestType;
    const responseType = svc.responseType;

    //interface body is empty so nothing here
    const body = t.blockStatement([])

    let optional = false;

    const fieldNames = Object.keys(svc.fields ?? {})
    const hasParams = fieldNames.length > 0;

    if (!hasParams) {
        optional = true;
    } else if (hasParams && fieldNames.length === 1 && fieldNames.includes('pagination')) {
        // if only argument "required" is pagination
        // also default to empty
        optional = true;
    }

    const methodArgs: t.Identifier = identifier(
        'request',
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier('DeepPartial'),
                t.tsTypeParameterInstantiation(
                    [
                        t.tsTypeReference(
                            t.identifier(requestType)
                        )
                    ]
                )
            )
        ),
        optional
    );

    const metadataArgs: t.Identifier = metadata

    return tsMethodSignature(
        t.identifier(name),
        null,
        [
            methodArgs,
            metadataArgs
        ],
        returnReponseType(responseType),
        trailingComments,
        leadingComments
    )
}

export const createGrpcWebQueryInterface = (
    context: GenericParseContext,
    service: ProtoService
) => {

    const camelRpcMethods = context.pluginValue('rpcClients.camelCase');
    const keys = Object.keys(service.methods ?? {});
    const methods = keys
        .map((key) => {
            const method = service.methods[key];
            const name = camelRpcMethods ? camel(key) : key; 
            const leadingComments = method.comment ? [commentBlock(processRpcComment(method))] : [];
            let trailingComments = [];
            return gRPCWebMethodDefinition(
                context,
                name,
                key,
                method,
                context.ref.proto.package + '.' + service.name,
                trailingComments,
                leadingComments
            )
        })
    const obj = t.exportNamedDeclaration(
        t.tsInterfaceDeclaration(
            t.identifier(service.name),
            null,
            [],
            t.tsInterfaceBody(
                [
                    ...methods,
                ]
            ),
        ),
    )

    if (service.comment) {
        obj.leadingComments = [commentBlock(`* ${service.comment} `)];
    }
    return obj;
}


const rpcClassConstructor = (
    context: GenericParseContext,
    methods: string[]
) => {

    let bound = [];
    if (!context.pluginValue('classesUseArrowFunctions')) {
        bound = methods.map(method => bindThis(method));
    }

    return classMethod(
        'constructor',
        t.identifier('constructor'),
        [
            identifier(
                'rpc',
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier('Rpc')
                    )
                )
            )
        ],
        t.blockStatement([
            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.thisExpression(),
                        t.identifier('rpc')
                    ),
                    t.identifier('rpc')
                )
            ),
            /// methods
            ...bound
        ])
    );
};

const GrpcWebClassMethod = (
    context: GenericParseContext,
    name: string,
    msg: string,
    svc: ProtoServiceMethod,
    packageImport: string
) => {

    let partialName = 'DeepPartial';

    let optional = false;

    const requestType = svc.requestType;
    const responseType = svc.responseType;
    const comment = svc.comment ?? svc.name;

    let methodArgs: t.Identifier | t.AssignmentPattern = identifier(
        'request',
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier(partialName),
                t.tsTypeParameterInstantiation(
                    [
                        t.tsTypeReference(
                            t.identifier(requestType)
                        )
                    ]
                )
            )
        ),
        optional
    );


    const metadataArgs: t.Identifier = metadata

    const fieldNames = Object.keys(svc.fields ?? {})
    const hasParams = fieldNames.length > 0;

    // if no params, then let's default to empty object for cleaner API
    if (!hasParams) {
        methodArgs = t.assignmentPattern(
            methodArgs,
            t.objectExpression([])
        )
    } else if (hasParams && fieldNames.length === 1 && fieldNames.includes('pagination')) {
        // if only argument "required" is pagination
        // also default to empty
        methodArgs = t.assignmentPattern(
            methodArgs,
            t.objectExpression([
                t.objectProperty(
                    t.identifier('pagination'),
                    t.identifier('undefined'),
                    false,
                    false
                )
            ])
        )
    }

    /* 
    return this.rpc.unary(
      QueryParamsDesc,
      QueryParamsRequest.fromPartial(request),
      metadata,
    );
    */
    const body = t.blockStatement([
        t.returnStatement(
            t.callExpression(
                t.memberExpression(
                    t.memberExpression(
                        t.thisExpression(),
                        t.identifier('rpc')
                    ),
                    t.identifier('unary')
                ),
                [
                    //No Desc field so we need to modify it
                    t.identifier(requestType.replace('Request', 'Desc')),
                    t.callExpression(
                        t.memberExpression(
                            t.identifier(requestType),
                            t.identifier('fromPartial')
                        ),
                        [
                            t.identifier('request')
                        ]
                    ),
                    t.identifier('metadata')
                ]
            )
        )
    ]);

    if (context.pluginValue('classesUseArrowFunctions')) {
        return classProperty(
            t.identifier(name),
            arrowFunctionExpression(
                [methodArgs],
                body,
                returnReponseType(responseType),
                true
            ),
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            makeComment(comment) as t.CommentLine[],
        );
    }

    return classMethod(
        'method',
        t.identifier(name),
        [
            methodArgs,
            metadataArgs
        ],
        body,
        returnReponseType(responseType)
    );
};

export const createGrpcWebQueryClass = (
    context: GenericParseContext,
    service: ProtoService
) => {
    //adding import 
    context.addUtil('_m0');
    context.addUtil('grpc');
    context.addUtil('UnaryMethodDefinitionish'); // for other descriptor
    //use type DeepPartial
    context.addUtil('DeepPartial')
    let partialName = 'DeepPartial';

    const camelRpcMethods = context.pluginValue('rpcClients.camelCase');
    const name = getRpcClassName(service);
    const implementsName = service.name;
    const methodNames = Object.keys(service.methods ?? {})
        .map(key => {
            return camelRpcMethods ? camel(key) : key
        });
    const methods = Object.keys(service.methods ?? {})
        .map(key => {
            const method = service.methods[key];
            const name = camelRpcMethods ? camel(key) : key;
            return GrpcWebClassMethod(
                context,
                name,
                key,
                method,
                context.ref.proto.package + '.' + service.name
            )
        });

    return t.exportNamedDeclaration(
        classDeclaration(
            t.identifier(name),
            null,
            t.classBody([
                classProperty(
                    t.identifier('rpc'),
                    null,
                    t.tsTypeAnnotation(
                        t.tsTypeReference(
                            t.identifier('Rpc')
                        )
                    ),
                    null,
                    false,
                    false,
                    true,
                    'private'
                ),

                // CONSTRUCTOR
                rpcClassConstructor(context, methodNames),

                // METHODS
                ...methods
            ]),
            null,
            [
                t.tsExpressionWithTypeArguments(
                    t.identifier(implementsName)
                )
            ]
        )
    );
};
