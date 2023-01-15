import { GenericParseContext } from '../../../../encoding';
import { ProtoService, ProtoServiceMethod } from '@osmonauts/types';
import { arrowFunctionExpression, classDeclaration, classMethod, classProperty, commentBlock, identifier, tsMethodSignature } from '../../../../utils';
import { camel } from '@osmonauts/utils';
import { returnReponseType } from '../utils/rpc';
import { initRequest } from './utils';

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

    // first parameter in method
    // ex: static Send(request: MsgSend)
    // paramRequst is an object representing everything in brackets here
    const paramRequst = identifier(
        'request',
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier(requestType),
            )
        ),
        false // todo: work around optional
    ); 
    
    const body = t.blockStatement(
        [] // todo
    )

    return classMethod(
        'method',
        t.identifier(name),
        [paramRequst, initRequest], // params
        body, 
        returnReponseType(responseType),
        [],
        false,
        true,   // static 
    )
}
export const createGRPCGatewayQueryClass = (
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