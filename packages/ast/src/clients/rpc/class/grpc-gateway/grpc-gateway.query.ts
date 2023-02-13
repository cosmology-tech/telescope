import { GenericParseContext } from '../../../../encoding';
import { ProtoService, ProtoServiceMethod } from '@osmonauts/types';
import { arrowFunctionExpression, classDeclaration, classMethod, classProperty, commentBlock, commentLine, identifier, tsMethodSignature } from '../../../../utils';
import { camel } from '@osmonauts/utils';
import { returnReponseType, optionalBool, processRpcComment } from '../utils/rpc';
import { initRequest } from './utils';

import * as t from '@babel/types'

const staticExpressionsNoUnwrappable = t.callExpression(
    t.memberExpression(
        t.identifier('fm'),
        t.identifier('renderURLSearchParams'),
        false
    ),
    [
        t.objectExpression(
            [
                t.spreadElement(
                    t.identifier('request')
                )
            ]
        ),
        t.arrayExpression(
            []
        )
    ]
)
// {...initReq, method: "GET"}
const staticSecondFetchReqArg = t.objectExpression(
    [
        t.spreadElement(
            t.identifier('initRequest')
        ),
        t.objectProperty(
            t.identifier('method'),
            t.stringLiteral('GET'),
            false,
            false
        )
    ]
)

const getQuasisNoUnwrappable = (
    path: string
) => {
    let quasis: any[] = [];

    // path?
    // ex: /cosmos/bank/v1beta1/supply?
    quasis.push(
        t.templateElement(
            {
                raw: path + '?',
                cooked: path + '?'
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

// get quasis (string expressions) when there is an unwrappable element (quasis.length must === 3)
const getQuasisUnwrappable = (
    leftPath: string,
    rightPath: string,
) => {
    let quasis: any[] = []; 
    
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

const getExpressionsNoUnwrappable = () => {
    return [staticExpressionsNoUnwrappable]
}

// Get expressions for a path with unwrappable.
// Returning array must be of length 2.
// example expressions: ${req["denom"]} AND ${fm.renderURLSearchParams(req, ["denom"])}
const getExpressionsUnwrappable = (
    path: string,
    indexLeft: number,
    indexRight: number
) => {
    let expressions: any[] = [];

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
                t.objectExpression(
                    [
                        t.spreadElement(
                            t.identifier('request')
                        )
                    ]
                ),
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

// Get fm.fetchReq arguments if there is no unwrappable element
// In this case, len of quasis must be 2 and len of expressions must be 1.
const getFetchReqArgsNoUnwrappable = (
    path: string
) => {
    let args: any[] = [];

    const quasis = getQuasisNoUnwrappable(path);
    const expressions = getExpressionsNoUnwrappable();

    args.push(
        t.templateLiteral(
            quasis,
            expressions,
        )
    )

    // {...initReq, method: "GET"}
    args.push(staticSecondFetchReqArg);

    return args;
}

// Get fm.fetchReq arguments if there is an unwrappable element
// In this case, len of quasis must be 3 and len of expressions must be 2.
const getFetchReqArgsUnwrappable = (
    path: string,
    indexLeft: number,
    indexRight: number,
) => {
    let args: any[] = [];

    const leftPath = path.slice(0, indexLeft);
    const rightPath = path.slice(indexRight + 1);

    // first argument
    // ex: `/cosmos/bank/v1beta1/denoms_metadata/${req["denom"]}?${fm.renderURLSearchParams(req, ["denom"])}`
    const quasis = getQuasisUnwrappable(leftPath, rightPath);
    const expressions = getExpressionsUnwrappable(path, indexLeft, indexRight);

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
    context: GenericParseContext,
    svc: ProtoServiceMethod,
) => {

    // getPath ex: 
    // rpc Grants(QueryGrantsRequest) returns (QueryGrantsResponse) {
    //     option (google.api.http).get = "/cosmos/authz/v1beta1/grants";
    // }
    let getPath: string | undefined;

    try {
        getPath = svc.options['(google.api.http).get']
    } catch {} 

    if ((typeof getPath!) === 'undefined') {
        getPath = context.ref.proto.package + '.' + svc.name
    }
    
    let args: any[];

    // check if getPath contains "unwrappable" elements in path
    // ex: "/cosmos/bank/v1beta1/balances/{address}" 
    // {address} here is what I mean by "unwrappable"
    if (getPath!.indexOf('{') > -1) {
        const indexLeft = getPath!.indexOf('{');
        const indexRight = getPath!.indexOf('}');
        args = buildFetchReqArgs(getPath!, true, indexLeft, indexRight);
    } else {
        args = buildFetchReqArgs(getPath!, false)
    }

    return args
}

const buildFetchReqArgs = (
    path: string,
    unwrappable: boolean,
    indexLeft = -1,
    indexRight = -1,
) => {
    let args: any[] = [];

    if (unwrappable) {
        if (indexLeft === -1 || indexRight === -1) {
            throw new Error("indexLeft and indexRight must be provided when path has {unwrappable} element")
        }

        args = getFetchReqArgsUnwrappable(path, indexLeft, indexRight);
    } else {
        args = getFetchReqArgsNoUnwrappable(path);
    }

    return args
}

// function to define a method of grpc-gateway style
const grpcGatewayMethodDefinition = (
    context: GenericParseContext,
    name: string,
    svc: ProtoServiceMethod,
    leadingComments?: t.CommentBlock[]
) => {
    const requestType = svc.requestType;
    const responseType = svc.responseType;

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
        false
    ); 
    
    // fm.fetchReq(fetchArgs are here)
    const fetchArgs = getFetchReqArgs(context, svc);

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
        leadingComments,
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
        .map(key => {
            const method = service.methods[key];
            const name = camelRpcMethods ? camel(key) : key;
            const leadingComments = method.comment ? [commentBlock(processRpcComment(method))] : [];
            return grpcGatewayMethodDefinition(
                context,
                name,
                method,
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