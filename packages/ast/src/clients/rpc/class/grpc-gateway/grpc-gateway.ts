import { GenericParseContext } from '../../../../encoding';
import { ProtoService, ProtoServiceMethod } from '@osmonauts/types';
import { arrowFunctionExpression, classDeclaration, classMethod, classProperty, commentBlock, identifier, tsMethodSignature } from '../../../../utils';
import { camel } from '@osmonauts/utils';
import { processRpcComment, returnReponseType } from '../utils/rpc';

import * as t from '@babel/types'

const grpcGatewayMethodDefinition = (
    context: GenericParseContext,
    name: string,
    msg: string,
    svc: ProtoServiceMethod,
    packageImport: string
) => {
    const requestType = svc.requestType;
    const responseType = svc.responseType;

    const paramRequst = identifier(
        'request',
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier(requestType),
            )
        ),
        false // todo work around optional
    ); 

    const initRequest = identifier(
        'initRequest',
        t.tSTypeAnnotation(
            t.tsTypeReference(
                t.tsQualifiedName(
                    t.identifier('fm'),
                    t.identifier('initReq')
                ),
            )
        ),
        true,
    )
    const body = t.blockStatement([
        t.blockStatement(
            // body and directives are empty in grpc-gateway class initialization
            [],
            [],
        )
    ]);
    return classMethod(
        'method',
        t.identifier(name),
        [paramRequst, initRequest], // params
        body, 
        returnReponseType(responseType),
        [],
        false,
        true,   // static = true
    )
}

export const createGRPCGatewayClass = (
    context: GenericParseContext,
    service: ProtoService
) => {
    
    // adds import 
    context.addUtil('fetchReq');

    const camelRpcMethods = context.pluginValue('rpcClient.camelCase');
    const keys = Object.keys(service.methods ?? {});
    const methods = keys
        .map((key) => {
            const method = service.methods[key];
            const name = camelRpcMethods ? camel(key) : key;
            return grpcGatewayMethodDefinition(
                context,
                name,
                key,
                method,
                context.ref.proto.package + '.' + service.name
            )
        })
    return t.exportNamedDeclaration(
        t.classDeclaration(
            t.identifier(service.name),
            null,
            t.classBody(
                [
                    ...methods,
                ]
            ),
            []
        ),


    )
}