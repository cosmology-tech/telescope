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
    packageImport: string,
    trailingComments?: t.CommentBlock[],
    leadingComments?: t.CommentBlock[]
) => {
    const requestType = svc.requestType;
    const responseType = svc.responseType;
    const body = t.blockStatement([
        //TO-DO
    ])

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
                t.identifier(requestType)
            )
        ),
        optional
    );

    return tsMethodSignature(
        t.identifier(name),
        null,
        [
            methodArgs
        ],
        returnReponseType(responseType),
        trailingComments,
        leadingComments
    )
}


export const createGrpcQueryInterface = (
    context: GenericParseContext,
    service: ProtoService
) => {

    //adding import for the interface
    context.addUtil('grpc')

    const camelRpcMethods = context.pluginValue('rpcClient.camelCase');
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