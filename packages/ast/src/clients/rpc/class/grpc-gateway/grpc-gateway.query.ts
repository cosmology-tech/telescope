import { GenericParseContext } from '../../../../encoding';
import { ProtoService, ProtoServiceMethod } from '@osmonauts/types';
import { arrowFunctionExpression, classDeclaration, classMethod, classProperty, commentBlock, identifier, tsMethodSignature } from '../../../../utils';
import { camel } from '@osmonauts/utils';
import { returnReponseType, optionalBool } from '../utils/rpc';
import { initRequest } from './utils';

import * as t from '@babel/types'


const buildAndGetPathToProto = (

) => {

}
// fetchArgs will be used in method body's return statement expression.
// Contains arguments to fm.fetchReq
const getFetchReqArgs = (
    name: string,
    packageImport: string,
    svc: ProtoServiceMethod,
) => {

    // getPath ex: 
    // rpc Grants(QueryGrantsRequest) returns (QueryGrantsResponse) {
    //     option (google.api.http).get = "/cosmos/authz/v1beta1/grants";
    // }
    // TODO: check if this option exists, add trigger if it does not
    const getPath = svc.options['(google.api.http).get'];

    // unwrapped is a member expression containing unwrapped string literal obj, if any
    var unwrapped: t.MemberExpression = null;
    var getPathLeft: string = ''
    var getPathRight: string = ''

    // check if getPath contains "unwrappable" elements in path
    // ex: "/cosmos/bank/v1beta1/balances/{address}" 
    // {address} here is what I mean by "unwrappable"
    if (getPath.indexOf('{') > -1) {
        const leftInd = getPath.indexOf('{');
        const rightInd = getPath.indexOf('}');
        const unwrappable = getPath.slice(leftInd, rightInd);

        // path before "unwrappable"
        getPathLeft = getPath.slice(0, leftInd - 1);

        // path after "unwrappable" (if any)
        getPathRight = getPath.slice(rightInd + 1, getPath.length)

        unwrapped = t.memberExpression(
            t.identifier('request'),
            t.stringLiteral(unwrappable),
            true
        )
    }
}

const grpcGatewayMethodDefinition = (
    context: GenericParseContext,
    name: string,
    msg: string,
    svc: ProtoServiceMethod,
    packageImport: string
) => {
    const requestType = svc.requestType;
    const responseType = svc.responseType;

    const fieldNames = Object.keys(svc.fields ?? {})
    const hasParams = fieldNames.length > 0;

    const optional = optionalBool(hasParams, fieldNames);

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
    
    // fm.fetchReq(fetchArgs are here)
    const fetchArgs = getFetchReqArgs(name, packageImport, svc);

    const body = t.blockStatement(
        [
            t.returnStatement(
                t.callExpression(
                    t.memberExpression(
                        t.identifier('fm'),
                        t.identifier('fetchReq'),
                        false
                    ),
                    [] // args
                )
            )
        ]
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
    context.addUtil('fm');

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