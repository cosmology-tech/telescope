import { GenericParseContext } from '../../../../encoding';
import { ProtoService, ProtoServiceMethod } from '@osmonauts/types';
import { arrowFunctionExpression, classDeclaration, classMethod, classProperty, commentBlock, identifier, tsMethodSignature } from '../../../../utils';
import { camel } from '@osmonauts/utils';
import { processRpcComment, returnReponseType, optionalBool } from '../utils/rpc';
import { metadata } from './utils'
import * as t from '@babel/types'

const gRPCWebMethodDefinition = (
    name: string,
    svc: ProtoServiceMethod,
    trailingComments?: t.CommentBlock[],
    leadingComments?: t.CommentBlock[]
) => {

    const requestType = svc.requestType;
    const responseType = svc.responseType;

    const fieldNames = Object.keys(svc.fields ?? {})
    const hasParams = fieldNames.length > 0;

    const optional = optionalBool(hasParams, fieldNames);

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
    );
}

export const createGrpcClientInterface = (
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
                name,
                method,
                trailingComments,
                leadingComments
            )
        });

    const obj = t.exportNamedDeclaration(
        t.tsInterfaceDeclaration(
            t.identifier(service.name),
            null,
            [],
            t.tsInterfaceBody(
                [
                    ...methods
                ]
            )
        )
    );
    if (service.comment) {
        obj.leadingComments = [commentBlock(`* ${service.comment} `)];
    }
    return obj;
};