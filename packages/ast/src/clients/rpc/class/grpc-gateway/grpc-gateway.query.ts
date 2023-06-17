import { GenericParseContext } from '../../../../encoding';
import { ProtoService, ProtoServiceMethod } from '@osmonauts/types';
import { arrowFunctionExpression, classDeclaration, classMethod, classProperty, commentBlock, commentLine, identifier, tsMethodSignature } from '../../../../utils';
import { camel } from '@osmonauts/utils';
import { returnReponseType, optionalBool, processRpcComment } from '../utils/rpc';
import { headersInit, initRequest, getInitReqProperties } from './utils';
import * as t from '@babel/types'


const getFetchReqArgsService = (
    name: string,
    packageImport: string
) => {
    // this hack around shouldn't exist, contact sdk team to modify the path for broadcastTx
    if (name === 'broadcastTx') {
        name = 'txs'
    }

    const fetchArgs = [];
    // first argument of fetchReq
    const argTemplateLiteral = t.templateLiteral(
        [
            t.templateElement(
                {
                    raw: '/' + packageImport.replace(/\./g, "/") + '/' + name,
                    cooked: '/' + packageImport.replace(/\./g, "/") + '/' + name
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

const grpcGatewayPOSTServiceMethodDefinition = (
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
    // this one is different from the Msg, especially the package name
    const fetchArgs = getFetchReqArgsService(name, packageImport)
    
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

const staticExpressionsNoParams = t.callExpression(
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

const getQuasisNoParams = (
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

// get quasis (string expressions) when there is an Params element
const getQuasisParams = (
    path: string,
    indicesLeft: number[],
    indicesRight: number[]
) => {
    let quasis: any[] = [];
    
    const firstPath = path.slice(0, indicesLeft[0]);
    quasis.push(
        t.templateElement(
            {
                raw: firstPath,
                cooked: firstPath,
            },
            false
        )
    )  
    let tempPath = [];
    let lastPath = '';
    // check if path end with param or quasis, get that quasis if any
    if (indicesRight[indicesRight.length -1] != path.length -1) {
        lastPath = path.slice(indicesRight[indicesRight.length -1] + 1, path.length);
        // console.log(lastPath);  
    }

    // get path in between params
    for (let i = 0; i < indicesLeft.length - 1; i++) {
        tempPath.push(path.slice(indicesRight[i] + 1, indicesLeft[i + 1]))
    }
    
    for (let i = 0; i < tempPath.length; i++) {
        // add left path element to quasis (path before Params element)
        quasis.push(
            t.templateElement(
                {
                    raw: tempPath[i],
                    cooked: tempPath[i],
                },
                false
            )
        )   
    }
    
    
    // add remaining path (if exists) or only '?' sign
    quasis.push(
        t.templateElement(
            {
                raw: lastPath != '' ? lastPath + '?' : '?',
                cooked: lastPath != '' ? lastPath + '?' : '?'
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

const getExpressionsNoParams = () => {
    return [staticExpressionsNoParams]
}

// Get expressions for a path with Params.
// Returning array must be of length 2.
// example expressions: ${req["denom"]} AND ${fm.renderURLSearchParams(req, ["denom"])}
const getExpressionsParams = (
    paramsName: string[]
) => {
    let expressions: any[] = [];
    let arrParams =[];

    for (let i = 0; i < paramsName.length; i++) {
        // ${req["denom"]}
        expressions.push(
            t.memberExpression(
                t.identifier('request'),
                t.stringLiteral(paramsName[i]),
                true,
            )
        )
        
        arrParams.push(
            t.stringLiteral(paramsName[i])
        )
    }

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
                        arrParams
                )
            ]
        )
    )

    return expressions
}

// Get fm.fetchReq arguments if there is no Params element
// In this case, len of quasis must be 2 and len of expressions must be 1.
const getFetchReqArgsNoParams = (
    path: string
) => {
    let args: any[] = [];

    const quasis = getQuasisNoParams(path);
    const expressions = getExpressionsNoParams();

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

// Get fm.fetchReq arguments if there is an Params element
const getFetchReqArgsParams = (
    path: string,
    indicesLeft: number[],
    indicesRight: number[],
) => {
    let args: any[] = [];
    
    // first argument
    // ex: `/cosmos/staking/v1beta1/delegators/${req["delegator_addr"]}/validators/${req["validator_addr"]}? => quasis
    // ${fm.renderURLSearchParams(req, ["delegator_addr", "validator_addr"])}` => expressions
    
    let paramsName = [];
    for (let i = 0; i < indicesLeft.length; i++) {
        paramsName.push(path.slice(indicesLeft[i] + 1, indicesRight[i]));
    }

    const quasis = getQuasisParams(path, indicesLeft, indicesRight);
    const expressions = getExpressionsParams(paramsName);

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

    // check if getPath contains params
    // ex: "/cosmos/bank/v1beta1/balances/{address}" 
    // NOTE: {address} here is param
    // contains params
    if (getPath!.indexOf('{') > -1) {
        // get all indices of '{' and '}' from path.
        const indicesLeft = [...getPath!.matchAll(/{/g)].map(match => match.index);
        const indicesRight = [...getPath!.matchAll(/}/g)].map(match => match.index);
        args = getFetchReqArgsParams(getPath!, indicesLeft, indicesRight);
    } else {
        // contains no params
        args = getFetchReqArgsNoParams(getPath!);
    }

    return args
}

// function to define a method of grpc-gateway fetch request
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

    const camelRpcMethods = context.pluginValue('rpcClients.camelCase');
    const keys = Object.keys(service.methods ?? {});

    //two different ways to generate methods for Query and Service
    let methods;
    //case Query
    if (service.name === "Query") {
        methods = keys
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
    } else {
    //case Service
        methods = keys
        .map(key => {
            const isGet = key.substring(0, 3) === "Get";
            const method = service.methods[key];
            const name = camelRpcMethods ? camel(key) : key;
            const leadingComments = method.comment ? [commentBlock(processRpcComment(method))] : [];
            if (!isGet) {
                //POST METHOD
                return grpcGatewayPOSTServiceMethodDefinition(
                    name,
                    method,
                    context.ref.proto.package,
                    leadingComments
            )}
            else {
                return grpcGatewayMethodDefinition(
                    context,
                    name,
                    method,
                    leadingComments
            )}
        })
    }
    

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

// function to define a method of grpc-gateway style
const grpcGatewayQuerierMethodDefinition = (
    serviceName: string,
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
        'req',
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier(requestType),
            )
        ),
        false
    ); 

    // class method body (only return statement)
    const body = t.blockStatement(
        [
            t.returnStatement(
                t.callExpression(
                    t.memberExpression(
                        t.identifier(serviceName),
                        t.identifier(name),
                        false
                    ),
                    [
                        t.identifier('req'),
                        t.objectExpression(
                            [
                                t.objectProperty(
                                    t.identifier('headers'),
                                    t.identifier('headers'),
                                    false,
                                    true
                                ),
                                t.objectProperty(
                                    t.identifier('pathPrefix'),
                                    t.memberExpression(
                                        t.thisExpression(),
                                        t.identifier('url') 
                                    )
                                )
                            ]
                        )
                    ]
                )
            )
        ]
    )
    return classMethod(
        'method',
        t.identifier(name),
        [paramRequest, headersInit], // params
        body, 
        returnReponseType(responseType),
        leadingComments,
        false,
        false,   // static
        false,
        true     // async
    )
}

export const createGRPCGatewayWrapperClass = (
    context: GenericParseContext,
    service: ProtoService
) => {
    const serviceName = service.name;
    const camelRpcMethods = context.pluginValue('rpcClients.camelCase');
    const keys = Object.keys(service.methods ?? {});
    const methods = keys
        .map(key => {
            const method = service.methods[key];
            const name = camelRpcMethods ? camel(key) : key;
            const leadingComments = method.comment ? [commentBlock(processRpcComment(method))] : [];
            return grpcGatewayQuerierMethodDefinition(
                serviceName,
                context,
                name,
                method,
                leadingComments
            )
        })

    return t.exportNamedDeclaration(
        t.classDeclaration(
            t.identifier('Querier'),
            null,
            t.classBody(
                [
                    classProperty(
                        t.identifier('url'),
                        null,
                        t.tsTypeAnnotation(
                            t.tsStringKeyword()
                        ),
                        [],
                        false,
                        false,
                        true,
                        "private"
                    ),
                    t.classMethod(
                        'constructor',
                        t.identifier('constructor'),
                        [
                            identifier(
                                'url',
                                t.tsTypeAnnotation(
                                    t.tsStringKeyword()
                                )
                            )
                        ],
                        t.blockStatement(
                            [
                                t.expressionStatement(
                                    t.assignmentExpression(
                                        '=',
                                        t.memberExpression(
                                            t.thisExpression(),
                                            t.identifier('url')
                                        ),
                                        t.identifier('url')
                                    )
                                )
                            ]
                        )
                    ),
                    ...methods,
                ]
            ),
            []
        ),
    )
}