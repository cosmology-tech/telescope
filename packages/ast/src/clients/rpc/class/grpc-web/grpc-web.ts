import { GenericParseContext } from "../../../../encoding";
import { ProtoService, ProtoServiceMethod } from "@osmonauts/types";
import { arrowFunctionExpression, classDeclaration, classMethod, classProperty, commentBlock, identifier, tsMethodSignature } from '../../../../utils';
import { camel } from '@osmonauts/utils';
import { processRpcComment, returnReponseType } from '../utils/rpc';
import * as t from '@babel/types'

const gRPCWebMethodDefinition = (
    context: GenericParseContext,
    name: string,
    msg: string,
    svc: ProtoServiceMethod,
    packageImport: string
) => {
    const requestType = svc.requestType;
    const responseType = svc.responseType;
    const body = t.blockStatement([
        //TO-DO
    ])
    context.addUtil('grpc')
    return classMethod(
        "method",
        t.identifier(name),
        [], // params
        body, 
        returnReponseType(responseType),
        [],
        false,
        true,   // static = true
    )
}


export const createGRPCWebClass = (
    context: GenericParseContext,
    service: ProtoService
) => {
    const camelRpcMethods = context.pluginValue('rpcClient.camelCase');
    const keys = Object.keys(service.methods ?? {});
    const methods = keys
        .map((key) => {
            const method = service.methods[key];
            const name = camelRpcMethods ? camel(key) : key;
            return gRPCWebMethodDefinition(
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