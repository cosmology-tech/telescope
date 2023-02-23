import { GenericParseContext } from '../../../../encoding';
import { ProtoService, ProtoServiceMethod } from '@osmonauts/types';
import { arrowFunctionExpression, classDeclaration, classMethod, classProperty, commentBlock, identifier, tsMethodSignature } from '../../../../utils';
import { camel } from '@osmonauts/utils';
import { processRpcComment, returnReponseType, optionalBool } from '../utils/rpc';
import { metadata, bindThis, makeComment, getRpcClassName } from './utils'
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

export const createGrpcWebMsgInterface = (
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

const rpcClassConstructor = (
    context: GenericParseContext,
    methods: string[]
) => {

    let bound = [];
    if (!context.pluginValue('classesUseArrowFunctions')) {
        bound = methods.map(method => bindThis(method));
    }

    return classMethod(
        'constructor',
        t.identifier('constructor'),
        [
            identifier(
                'rpc',
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier('Rpc')
                    )
                )
            )
        ],
        t.blockStatement([
            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.thisExpression(),
                        t.identifier('rpc')
                    ),
                    t.identifier('rpc')
                )
            ),
            /// methods
            ...bound
        ])
    );
};

const rpcClassMethod = (
    context: GenericParseContext,
    name: string,
    msg: string,
    svc: ProtoServiceMethod,
    packageImport: string
) => {

    let partialName = 'DeepPartial';
    let optional = false;

    const requestType = svc.requestType;
    const responseType = svc.responseType;
    const comment = svc.comment ?? svc.name;

    let methodArgs: t.Identifier | t.AssignmentPattern = identifier(
        'request',
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier(partialName),
                t.tsTypeParameterInstantiation(
                    [
                        t.tsTypeReference(
                            t.identifier(requestType)
                        )
                    ]
                )
            )
        )
    );

    const metadataArgs: t.Identifier = metadata

    const fieldNames = Object.keys(svc.fields ?? {})
    const hasParams = fieldNames.length > 0;

    // if no params, then let's default to empty object for cleaner API
    if (!hasParams) {
        methodArgs = t.assignmentPattern(
            methodArgs,
            t.objectExpression([])
        )
    } else if (hasParams && fieldNames.length === 1 && fieldNames.includes('pagination')) {
        // if only argument "required" is pagination
        // also default to empty
        methodArgs = t.assignmentPattern(
            methodArgs,
            t.objectExpression([
                t.objectProperty(
                    t.identifier('pagination'),
                    t.identifier('undefined'),
                    false,
                    false
                )
            ])
        )
    }

    const body = t.blockStatement([
        t.returnStatement(
            t.callExpression(
                t.memberExpression(
                    t.memberExpression(
                        t.thisExpression(),
                        t.identifier('rpc')
                    ),
                    t.identifier('unary')
                ),
                [
                    //No Desc field so we need to modify it
                    t.identifier(requestType.concat('Desc')), 
                    t.callExpression(
                        t.memberExpression(
                            t.identifier(requestType),
                            t.identifier('fromPartial')
                        ),
                        [
                            t.identifier('request')
                        ]
                    ),
                    t.identifier('metadata')
                ]
            )
        )
    ]);

    if (context.pluginValue('classesUseArrowFunctions')) {
        return classProperty(
            t.identifier(name),
            arrowFunctionExpression(
                [methodArgs],
                body,
                returnReponseType(responseType),
                true
            ),
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            makeComment(comment) as t.CommentLine[],
        );
    }

    return classMethod(
        'method',
        t.identifier(name),
        [
            methodArgs,
            metadataArgs
        ],
        body,
        returnReponseType(responseType)
    );
};

export const createGrpcWebMsgClass = (
    context: GenericParseContext,
    service: ProtoService
) => {

    context.addUtil('UnaryMethodDefinitionish');
    context.addUtil('_m0');
    context.addUtil('DeepPartial');
    context.addUtil('grpc');

    const camelRpcMethods = context.pluginValue('rpcClients.camelCase');
    const name = getRpcClassName(service);
    const implementsName = service.name;
    const methodNames = Object.keys(service.methods ?? {})
        .map(key => {
            return camelRpcMethods ? camel(key) : key
        });
    const methods = Object.keys(service.methods ?? {})
        .map(key => {
            const method = service.methods[key];
            const name = camelRpcMethods ? camel(key) : key;
            return rpcClassMethod(
                context,
                name,
                key,
                method,
                context.ref.proto.package + '.' + service.name
            )
        });

    return t.exportNamedDeclaration(
        classDeclaration(
            t.identifier(name),
            null,
            t.classBody([
                classProperty(
                    t.identifier('rpc'),
                    null,
                    t.tsTypeAnnotation(
                        t.tsTypeReference(
                            t.identifier('Rpc')
                        )
                    ),
                    null,
                    false,
                    false,
                    true,
                    'private'
                ),

                // CONSTRUCTOR
                rpcClassConstructor(context, methodNames),

                // METHODS
                ...methods
            ]),
            null,
            [
                t.tsExpressionWithTypeArguments(
                    t.identifier(implementsName)
                )
            ]
        )
    );
};

const rpcMethodDef = (
    svc: ProtoServiceMethod,
) => {

    const requestType = svc.requestType;
    const responseType = svc.responseType;
    const methodName = svc.name;

    return {
        methodName,
        requestType,
        responseType
    }
}

//return array of method Desc
export const getMethodDesc = (context: GenericParseContext, service: ProtoService) => {

    //get all method that need Desc
    const methods = Object.keys(service.methods ?? {})
        .map(key => {
            return rpcMethodDef(
                service.methods[key]
            )
        });
    
    const methodsDesc = [] 

    for (let i = 0; i < methods.length; i++) {
        const methodName = methods[i].methodName
        const requestType = methods[i].requestType
        const responseType = methods[i].responseType
        const methodDesc = t.exportNamedDeclaration(
            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator(
                        t.identifier(service.name + methodName + 'Desc: UnaryMethodDefinitionish'),
                        t.objectExpression(
                            [
                                t.objectProperty(
                                    t.identifier('methodName'),
                                    t.stringLiteral(methodName)
                                ),
                                t.objectProperty(
                                    t.identifier('service'),
                                    t.identifier(service.name + 'Desc')
                                ),
                                t.objectProperty(
                                    t.identifier('requestStream'),
                                    t.booleanLiteral(false)
                                ),
                                t.objectProperty(
                                    t.identifier('reponseStream'),
                                    t.booleanLiteral(false)
                                ),
                                t.objectProperty(
                                    t.identifier('requestType'),
                                    t.tsAsExpression(
                                        t.objectExpression(
                                            [
                                                t.objectMethod(
                                                    'method',
                                                    t.identifier('serializeBinary'),
                                                    [],
                                                    t.blockStatement(
                                                        [
                                                        t.returnStatement(
                                                            t.callExpression(
                                                                t.memberExpression(
                                                                    t.callExpression(
                                                                        t.memberExpression(
                                                                            t.identifier(requestType),
                                                                            t.identifier('encode')
                                                                        ),
                                                                        [
                                                                            t.thisExpression()
                                                                        ]
                                                                    ),
                                                                    t.identifier('finish')
                                                                ),
                                                                []
                                                            )
                                                        )
                                                        ]
                                                    )
                                                )
                                            ]
                                        ),        
                                        t.tsAnyKeyword()                                  
                                    )
                                ),
                                t.objectProperty(
                                    t.identifier('responseType'),
                                    t.tsAsExpression(
                                        t.objectExpression(
                                            [
                                                t.objectMethod(
                                                    'method',
                                                    t.identifier('deserializeBinary'),
                                                    [
                                                        identifier('data', t.tsTypeAnnotation(
                                                            t.tsTypeReference(
                                                                t.identifier('Uint8Array')
                                                            )
                                                        ))
                                                    ],
                                                    t.blockStatement(
                                                        [
                                                        t.returnStatement(
                                                            t.objectExpression(
                                                                [
                                                                t.spreadElement(
                                                                    t.callExpression(
                                                                        t.memberExpression(
                                                                            t.identifier(responseType),
                                                                            t.identifier('decode')
                                                                        ),
                                                                        [t.identifier('data')]
                                                                    )
                                                                ),
                                                                t.objectMethod(
                                                                    'method',
                                                                    t.identifier('toObject'),
                                                                    [],
                                                                    t.blockStatement(
                                                                        [
                                                                            t.returnStatement(
                                                                                t.thisExpression()
                                                                            )
                                                                        ]
                                                                    )
                                                                )
                                                                ]
                                                            )
                                                        )
                                                        ]
                                                    )
                                                )
                                            ]
                                        ),        
                                        t.tsAnyKeyword()                                  
                                    )
                                ),
                            ]
                        )
                    )
                ]
            )
        )
        methodsDesc.push(methodDesc)
    }

    return methodsDesc
}

export const GetDesc = (context: GenericParseContext, service: ProtoService) => {
    const descName = service.name + 'Desc'
    const serviceName = context.ref.proto.package + '.' + service.name

    return t.exportNamedDeclaration(
        t.variableDeclaration(
            'const',
            [
                t.variableDeclarator(
                t.identifier(descName),
                t.objectExpression(
                    [ 
                        t.objectProperty(
                            t.identifier('serviceName'),
                            t.stringLiteral(serviceName)
                        )
                    ]                 
                    )
                )
            ]
        )
    )
}

export const grpcWebRpcInterface = () => {
    return t.exportNamedDeclaration(
        t.tsInterfaceDeclaration(
            t.identifier('Rpc'),
            null,
            [],
            t.tsInterfaceBody(
                [
                    t.tsMethodSignature(
                        t.identifier('unary'),
                        t.tsTypeParameterDeclaration(
                            [
                                t.tsTypeParameter(
                                    t.tsTypeReference(
                                        t.identifier('UnaryMethodDefinitionish')
                                    ),
                                    null,
                                    'T'
                                )
                            ]
                        ),
                        [
                            identifier('methodDesc',
                                t.tsTypeAnnotation(
                                    t.tsTypeReference(
                                        t.identifier('T')
                                    )
                            )),
                            identifier('request',
                                t.tsTypeAnnotation(
                                    t.tsAnyKeyword()
                            )),
                            identifier('metadata',
                                t.tsTypeAnnotation(
                                    t.tSUnionType(
                                        [
                                            t.tsTypeReference(
                                                t.tsQualifiedName(
                                                    t.identifier('grpc'),
                                                    t.identifier('Metadata')
                                                )
                                            ),
                                            t.tsUndefinedKeyword()
                                        ]
                                    )
                                ))
                        ]
                    )
                ]
        )
    ))
}
//you might not want to look at this
export const getGrpcWebImpl = (context: GenericParseContext) => {
    context.addUtil('BrowserHeaders');
    return t.exportNamedDeclaration(
        t.classDeclaration(
            t.identifier('GrpcWebImpl'),
            null,
            t.classBody(
                [
                    t.classProperty(
                        t.identifier('host'),
                        null,
                        t.tsTypeAnnotation(
                            t.tsStringKeyword()
                        )
                    ),
                    t.classProperty(
                        t.identifier('options'),
                        null,
                        t.tsTypeAnnotation(
                            t.tsTypeLiteral(
                                [
                                    t.tsPropertySignature(
                                        t.identifier('transport'),
                                        t.tsTypeAnnotation(
                                            t.tsTypeReference(
                                                t.tsQualifiedName(
                                                    t.identifier('grpc'),
                                                    t.identifier('TransportFactory')
                                                )
                                            )
                                        )
                                    ),
                                    t.tsPropertySignature(
                                        t.identifier('debug'),
                                        t.tsTypeAnnotation(
                                            t.tsBooleanKeyword()
                                        )
                                    ),
                                    t.tsPropertySignature(
                                        t.identifier('metadata'),
                                        t.tsTypeAnnotation(
                                            t.tsTypeReference(
                                                t.tsQualifiedName(
                                                    t.identifier('grpc'),
                                                    t.identifier('Metadata')
                                                )
                                            )
                                        )
                                    )
                                ]
                            )
                        )
                    ),
                    t.classMethod(
                        "constructor",
                        t.identifier('constructor'),
                        [  
                            identifier("host",
                                t.tsTypeAnnotation(
                                    t.tsStringKeyword()
                            )),
                            identifier("options",
                                t.tsTypeAnnotation(
                                    t.tsTypeLiteral(
                                        [
                                            t.tsPropertySignature(
                                                t.identifier('transport'),
                                                t.tsTypeAnnotation(
                                                    t.tsTypeReference(
                                                        t.tsQualifiedName(
                                                            t.identifier('grpc'),
                                                            t.identifier('TransportFactory')
                                                        )
                                                    )
                                                )
                                            ),
                                            t.tsPropertySignature(
                                                t.identifier('debug'),
                                                t.tsTypeAnnotation(
                                                    t.tsBooleanKeyword()
                                                )
                                            ),
                                            t.tsPropertySignature(
                                                t.identifier('metadata'),
                                                t.tsTypeAnnotation(
                                                    t.tsTypeReference(
                                                        t.tsQualifiedName(
                                                            t.identifier('grpc'),
                                                            t.identifier('Metadata')
                                                        )
                                                    )
                                                )
                                            )
                                        ]
                                    )
                                ))
                        ],
                        t.blockStatement(
                            [
                                t.expressionStatement(
                                    t.assignmentExpression(
                                        "=",
                                        t.memberExpression(
                                            t.thisExpression(),
                                            t.identifier('host')
                                        ),
                                        t.identifier('host')
                                    )
                                ),
                                t.expressionStatement(
                                    t.assignmentExpression(
                                        "=",
                                        t.memberExpression(
                                            t.thisExpression(),
                                            t.identifier('options')
                                        ),
                                        t.identifier('options')
                                    )
                                ),
                            ]
                        ),  
                    ),
                    t.classMethod(
                        "method",
                        t.identifier('unary'),
                        [
                            identifier('methodDesc', t.tsTypeAnnotation(t.tsTypeReference(t.identifier('T')))),
                            identifier('_request', t.tsTypeAnnotation(t.tsAnyKeyword())),
                            identifier('metadata', t.tsTypeAnnotation(t.tsUnionType([t.tsTypeReference(t.tsQualifiedName(t.identifier('grpc'), t.identifier('metadata'))), t.tsUndefinedKeyword()])))
                        ],
                        t.blockStatement(
                            [
                                t.variableDeclaration(
                                    "const",
                                    [
                                        t.variableDeclarator(
                                            t.identifier('request'),
                                            t.objectExpression([
                                                t.spreadElement(t.identifier('_request')),
                                                t.spreadElement(t.memberExpression(t.identifier('methodDesc'),t.identifier('requestType')))
                                            ])
                                        )
                                    ]
                                ),
                                t.variableDeclaration(
                                    "const",
                                    [
                                        t.variableDeclarator(
                                            t.identifier('maybeCombinedMetadata'),
                                            t.conditionalExpression(
                                                t.logicalExpression(
                                                    "&&",
                                                    t.identifier('metadata'),
                                                    t.memberExpression(
                                                            t.memberExpression(
                                                            t.thisExpression(),
                                                            t.identifier('options')
                                                        ),
                                                        t.identifier('metadata')
                                                    )
                                                ),
                                                t.newExpression(
                                                    t.identifier('BrowserHeaders'),
                                                    [
                                                        t.objectExpression(
                                                            [
                                                                t.spreadElement(
                                                                    t.optionalMemberExpression(
                                                                        t.optionalMemberExpression(
                                                                            t.memberExpression(
                                                                                t.thisExpression(),
                                                                                t.identifier('metadata'),
                                                                                false
                                                                            ),
                                                                            t.identifier('options'),
                                                                            false,
                                                                            true
                                                                        ),
                                                                        t.identifier('headersMap'),
                                                                        false,
                                                                        false
                                                                    )
                                                                ),
                                                                t.spreadElement(
                                                                    t.optionalMemberExpression(
                                                                        t.identifier('metadata'),
                                                                        t.identifier('headersMap'),
                                                                        false,
                                                                        true
                                                                    )
                                                                )
                                                            ]
                                                        )
                                                    ]
                                                ),
                                                t.logicalExpression(
                                                    "||",
                                                    t.identifier('metadata'),
                                                    t.memberExpression(
                                                        t.memberExpression(
                                                            t.thisExpression(),
                                                            t.identifier('options')
                                                        ),
                                                        t.identifier('metadata')
                                                    )
                                                )
                                            )
                                        )
                                    ]                            
                                ),
                                t.returnStatement(
                                    t.newExpression(
                                        t.identifier('Promise'),
                                        [
                                            t.arrowFunctionExpression(
                                                [
                                                    t.identifier('resolve'),
                                                    t.identifier('reject')
                                                ],
                                                t.blockStatement(
                                                    [
                                                        t.expressionStatement(
                                                            t.callExpression(
                                                                t.memberExpression(
                                                                    t.identifier('grpc'),
                                                                    t.identifier('unary')
                                                                ),
                                                                [
                                                                    t.identifier('methodDesc'),
                                                                    t.objectExpression(
                                                                        [
                                                                            t.objectProperty(
                                                                                t.identifier('request'),
                                                                                t.identifier('request'),
                                                                                false,
                                                                                true
                                                                            ),
                                                                            t.objectProperty(
                                                                                t.identifier('host'),
                                                                                t.memberExpression(
                                                                                    t.thisExpression(),
                                                                                    t.identifier('host')
                                                                                )
                                                                            ),
                                                                            t.objectProperty(
                                                                                t.identifier('metadata'),
                                                                                t.identifier('maybeCombinedMetadata')
                                                                            ),
                                                                            t.objectProperty(
                                                                                t.identifier('transport'),
                                                                                t.memberExpression(
                                                                                    t.memberExpression(
                                                                                        t.thisExpression(),
                                                                                        t.identifier('options')
                                                                                    ),
                                                                                    t.identifier('transport')
                                                                                )
                                                                            ),
                                                                            t.objectProperty(
                                                                                t.identifier('debug'),
                                                                                t.memberExpression(
                                                                                    t.memberExpression(
                                                                                        t.thisExpression(),
                                                                                        t.identifier('options')
                                                                                    ),
                                                                                    t.identifier('debug')
                                                                                )
                                                                            ),
                                                                            t.objectProperty(
                                                                                t.identifier('onEnd'),
                                                                                t.functionExpression(
                                                                                    null,
                                                                                    [
                                                                                        t.identifier('response')
                                                                                    ],
                                                                                    t.blockStatement(
                                                                                        [
                                                                                            t.ifStatement(
                                                                                                t.binaryExpression(
                                                                                                    "===",
                                                                                                    t.memberExpression(
                                                                                                        t.identifier('response'),
                                                                                                        t.identifier('status')
                                                                                                    ),
                                                                                                    t.memberExpression(
                                                                                                        t.memberExpression(
                                                                                                            t.identifier('grpc'),
                                                                                                            t.identifier('Code')                           
                                                                                                        ),
                                                                                                        t.identifier('OK'),
                                                                                                        
                                                                                                    )
                                                                                                ),
                                                                                                t.blockStatement(
                                                                                                    [
                                                                                                        t.expressionStatement(
                                                                                                            t.callExpression(
                                                                                                                t.identifier('resolve'),
                                                                                                                [
                                                                                                                    t.memberExpression(
                                                                                                                        t.identifier('response'),
                                                                                                                        t.identifier('message')
                                                                                                                    )
                                                                                                                ]
                                                                                                            )
                                                                                                        )
                                                                                                    ]
                                                                                                ),
                                                                                                t.blockStatement(
                                                                                                    [
                                                                                                        t.variableDeclaration(
                                                                                                            "const",
                                                                                                            [
                                                                                                                t.variableDeclarator(
                                                                                                                    t.identifier('err'),
                                                                                                                    t.tsAsExpression(
                                                                                                                        t.newExpression(
                                                                                                                            t.identifier('Error'),
                                                                                                                            [
                                                                                                                                t.memberExpression(
                                                                                                                                    t.identifier('response'),
                                                                                                                                    t.identifier('statusMessage')
                                                                                                                                )
                                                                                                                            ]
                                                                                                                        ),
                                                                                                                        t.tsAnyKeyword()
                                                                                                                    )
                                                                                                                )
                                                                                                            ]
                                                                                                                                                 
                                                                                                        ),
                                                                                                        t.expressionStatement(
                                                                                                            t.assignmentExpression(
                                                                                                                "=",
                                                                                                                t.memberExpression(
                                                                                                                    t.identifier('err'),
                                                                                                                    t.identifier('code')
                                                                                                                ),
                                                                                                                t.memberExpression(
                                                                                                                    t.identifier('response'),
                                                                                                                    t.identifier('status')
                                                                                                                )
                                                                                                            )
                                                                                                        ),
                                                                                                        t.expressionStatement(
                                                                                                            t.assignmentExpression(
                                                                                                                "=",
                                                                                                                t.memberExpression(
                                                                                                                    t.identifier('err'),
                                                                                                                    t.identifier('code')
                                                                                                                ),
                                                                                                                t.memberExpression(
                                                                                                                    t.identifier('response'),
                                                                                                                    t.identifier('metadata')
                                                                                                                )
                                                                                                            )
                                                                                                        ), 
                                                                                                        t.expressionStatement(
                                                                                                            t.assignmentExpression(
                                                                                                                "=",
                                                                                                                t.memberExpression(
                                                                                                                    t.identifier('err'),
                                                                                                                    t.identifier('response')
                                                                                                                ),
                                                                                                                t.memberExpression(
                                                                                                                    t.identifier('response'),
                                                                                                                    t.identifier('trailers')
                                                                                                                )
                                                                                                            )
                                                                                                        ), 
                                                                                                        t.expressionStatement(
                                                                                                            t.callExpression(
                                                                                                                t.identifier('reject'),
                                                                                                                [
                                                                                                                    t.identifier('err')
                                                                                                                ]
                                                                                                            )
                                                                                                        )
                                                                                                    ]
                                                                                                )
                                                                                            )
                                                                                        ]
                                                                                    )
                                                                                )
                                                                            )
                                                                        ]
                                                                    )
                                                                ]
                                                            )
                                                        )
                                                    ]
                                                )
                                            )
                                        ]
                                    )
                                )
                            ]
                        )
                    )
                ]
            )
        )
    )
}