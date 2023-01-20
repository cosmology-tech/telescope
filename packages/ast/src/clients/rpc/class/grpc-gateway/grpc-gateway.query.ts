import { GenericParseContext } from '../../../../encoding';
import { ProtoService, ProtoServiceMethod } from '@osmonauts/types';
import { arrowFunctionExpression, classDeclaration, classMethod, classProperty, commentBlock, identifier, tsMethodSignature } from '../../../../utils';
import { camel } from '@osmonauts/utils';
import { returnReponseType, optionalBool } from '../utils/rpc';
import { initRequest } from './utils';

import * as t from '@babel/types'

// {...initReq, method: "GET"}
const staticSecondFetchReqArg = t.objectExpression(
    [
        t.spreadElement(
            t.identifier('initReq')
        ),
        t.objectProperty(
            t.identifier('method'),
            t.stringLiteral('GET'),
            false,
            false
        )
    ]
)
const getQuasisUnwrappable = (
    leftPath: string,
    rightPath: string,
) => {
    let quasis = []; 
    
    // add left path element to quasis (path before unwrappable element)
    quasis.push(
        t.templateElement(
            {
                raw: leftPath,
                cooked: leftPath,
            },
            false
        )
    )
    
    // add remaining path (if exists) or only '?' sign
    quasis.push(
        t.templateElement(
            {
                raw: rightPath != '' ? rightPath + '?' : '?',
                cooked: rightPath != '' ? rightPath + '?' : '?'
            },
            false
        )
    )
    
    // add empty tail element
    quasis.push(
        t.templateElement(
            {
                raw: '',
                cooked: ''
            },
            true
        )
    )

    return quasis
}

// Get expressions for a path with unwrappable.
// Returning array must be of length 2.
// example expressions: ${req["denom"]} AND ${fm.renderURLSearchParams(req, ["denom"])}
const getExpressionUnwrappable = (
    path: string,
    indexLeft: number,
    indexRight: number
) => {
    let expressions = [];

    const unwrappable = path.slice(indexLeft + 1, indexRight)

    // ${req["denom"]}
    expressions.push(
        t.memberExpression(
            t.identifier('request'),
            t.stringLiteral(unwrappable),
            true,
        )
    )

    // ${fm.renderURLSearchParams(req, ["denom"])}
    expressions.push(
        t.callExpression(
            t.memberExpression(
                t.identifier('fm'),
                t.identifier('renderURLSearchParams'),
                false
            ),
            [
                t.identifier('request'),
                t.arrayExpression(
                    [
                        t.stringLiteral(unwrappable)
                    ]
                )
            ]
        )
    )

    return expressions
}

// Get fm.fetchReq arguments if there is an unwrappable element
// In this case, len of quasis must be 3 and len of expressions must be 2.
const getFetchReqArgsUnwrappable = (
    path: string,
    indexLeft: number,
    indexRight: number,
) => {
    let args = []; //new Array<any>(2);

    const leftPath = path.slice(0, indexLeft);
    const rightPath = path.slice(indexRight + 1);

    // first argument
    // ex: `/cosmos/bank/v1beta1/denoms_metadata/${req["denom"]}?${fm.renderURLSearchParams(req, ["denom"])}`
    const quasis = getQuasisUnwrappable(leftPath, rightPath);
    const expressions = getExpressionUnwrappable(path, indexLeft, indexRight);

    args.push(
        t.templateLiteral(
            quasis,
            expressions,
        )
    )

    // {...initReq, method: "GET"}
    args.push(staticSecondFetchReqArg);

    return args
}

// fetchArgs will be used in method body's return statement expression.
// Contains arguments to fm.fetchReq
const getFetchReqArgs = (
    svc: ProtoServiceMethod,
) => {

    // getPath ex: 
    // rpc Grants(QueryGrantsRequest) returns (QueryGrantsResponse) {
    //     option (google.api.http).get = "/cosmos/authz/v1beta1/grants";
    // }
    // TODO: check if this option exists, add trigger logic if it does not
    const getPath = svc.options['(google.api.http).get'];

    let args: any[];

    // check if getPath contains "unwrappable" elements in path
    // ex: "/cosmos/bank/v1beta1/balances/{address}" 
    // {address} here is what I mean by "unwrappable"
    const indexLeft = getPath.indexOf('{');
    if (getPath.indexOf('{') > -1) {
        const indexRight = getPath.indexOf('}');
        args = getFetchReqArgsUnwrappable(getPath, indexLeft, indexRight);
    } else {
        args = [];
    }

    return args
}

// function to define a method of grpc-gateway style
const grpcGatewayMethodDefinition = (
    name: string,
    svc: ProtoServiceMethod,
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
    
    // fm.fetchReq(fetchArgs are here)
    const fetchArgs = getFetchReqArgs(svc);

    // class method body (only return statement)
    const body = t.blockStatement(
        [
            t.returnStatement(
                t.callExpression(
                    t.memberExpression(
                        t.identifier('fm'),
                        t.identifier('fetchReq'),
                        false
                    ),
                    fetchArgs
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
                name,
                method,
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