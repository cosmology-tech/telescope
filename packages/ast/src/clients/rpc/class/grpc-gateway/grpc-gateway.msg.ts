import { GenericParseContext } from '../../../../encoding';
import { ProtoService, ProtoServiceMethod } from '@osmonauts/types';
import { arrowFunctionExpression, classDeclaration, classMethod, classProperty, commentBlock, commentLine, identifier, tsMethodSignature } from '../../../../utils';
import { camel } from '@osmonauts/utils';
import { optionalBool, returnReponseType } from '../utils/rpc';
import { initRequest, getInitReqProperties } from './utils';
import { processRpcComment } from '../utils';
import * as t from '@babel/types'

// fetchArgs will be used in method body's return statement expression.
// Contains arguments to fm.fetchReq
const getFetchReqArgs = (
    name: string,
    packageImport: string
) => {
    const fetchArgs = [];
    // first argument of fetchReq
    const argTemplateLiteral = t.templateLiteral(
        [
            t.templateElement(
                {
                    raw: '/' + packageImport + '/' + name,
                    cooked: '/' + packageImport + '/' + name
                },
                true,
            )
        ], // quasis
        [], // empty expressions
    )

    // adds proto path to fetchReq
    fetchArgs.push(argTemplateLiteral);

    // initReqProperties (contains information for initReq parameter in fetchReq) arguments: 
    const initReqProperties = getInitReqProperties()
    
    const fetchArgsInitReqObj = t.objectExpression(
        initReqProperties
    )
    // adds initReq parameter to fetchReq
    fetchArgs.push(fetchArgsInitReqObj)

    return fetchArgs
}

const grpcGatewayMethodDefinition = (
    name: string,
    svc: ProtoServiceMethod,
    packageImport: string,
    leadingComments?: t.CommentBlock[]
) => {
    const requestType = svc.requestType;
    const responseType = svc.responseType;


    const fieldNames = Object.keys(svc.fields ?? {})
    const hasParams = fieldNames.length > 0;

    const optional = optionalBool(hasParams, fieldNames);

    // first parameter in method
    // ex: static Send(request: MsgSend)
    // paramRequest is an object representing everything in brackets here
    const paramRequest = identifier(
        'request',
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier(requestType),
            )
        ),
        optional
    ); 

    // fetchArgs will be used in method body's return statement expression.
    // Contains arguments to fm.fetchReq
    const fetchArgs = getFetchReqArgs(name, packageImport)
    
    // method's body
    const body = t.blockStatement(
        [
            t.returnStatement(
                t.callExpression(
                    t.memberExpression(
                        t.identifier('fm'),
                        t.identifier('fetchReq'),
                    ),
                    fetchArgs,
                )
            )
        ]
    )
    return classMethod(
        'method',
        t.identifier(name),
        [paramRequest, initRequest], // params
        body, 
        returnReponseType(responseType),
        leadingComments,
        false,
        true,   // static 
    )
}

export const createGRPCGatewayMsgClass = (
    context: GenericParseContext,
    service: ProtoService
) => {
    
    // adds import 
    context.addUtil('fm');

    const camelRpcMethods = context.pluginValue('rpcClient.camelCase');
    const keys = Object.keys(service.methods ?? {});
    const methods = keys
        .map((key) => {
            const method = service.methods[key];
            const name = camelRpcMethods ? camel(key) : key;
            const leadingComments = method.comment ? [commentBlock(processRpcComment(method))] : [];
            return grpcGatewayMethodDefinition(
                name,
                method,
                context.ref.proto.package,
                leadingComments
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