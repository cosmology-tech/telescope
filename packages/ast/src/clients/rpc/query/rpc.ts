import * as t from '@babel/types';
import { classDeclaration, classMethod, classProperty, commentBlock, identifier, tsMethodSignature } from '../../../utils';

const rpcMethod = (
    name: string,
    request: string,
    response: string,
    trailingComments?: t.CommentBlock[],
    leadingComments?: t.CommentBlock[]
) => {
    return tsMethodSignature(
        t.identifier(name),
        null,
        [
            identifier(
                'request',
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier(request)
                    )
                )
            )
        ],
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier('Promise'),
                t.tsTypeParameterInstantiation(
                    [
                        t.tsTypeReference(
                            t.identifier(response)
                        )
                    ]
                )

            )
        ),
        trailingComments, // seemingly not working?
        leadingComments
    );
}

export const createRpcClientInterface = (name: string) => {
    const obj = t.exportNamedDeclaration(
        t.exportNamedDeclaration(
            t.tsInterfaceDeclaration(
                t.identifier(name),
                null,
                [],
                t.tsInterfaceBody(
                    [
                        rpcMethod(
                            'Account',
                            'QueryAccountRequest',
                            'QueryAccountResponse',
                            // [commentBlock('* account returns account details based on address. ')],
                            // [commentBlock('* ACCOUNT returns account details based on address. ')],
                        ),
                        rpcMethod(
                            'Yolo',
                            'QueryAccountRequest',
                            'QueryAccountResponse',
                            // [commentBlock('* account returns account details based on address. ')],
                            // [commentBlock('* ACCOUNT returns account details based on address. ')],
                        )
                    ]
                )
            )
        )
    );

    obj.leadingComments = [commentBlock('* Query defines the RPC querier service. ')];

    return obj;

};

// this.Accounts = this.Accounts.bind(this);
const bindThis = (name: string) => {
    return t.expressionStatement(
        t.assignmentExpression(
            '=',
            t.memberExpression(
                t.thisExpression(),
                t.identifier(name)
            ),
            t.callExpression(
                t.memberExpression(
                    t.memberExpression(
                        t.thisExpression(),
                        t.identifier(name)
                    ),
                    t.identifier('bind')
                ),
                [
                    t.thisExpression()
                ]
            )
        )
    );
};

// const data = QueryAccountsRequest.encode(request).finish();
const encodeData = (name: string) => {
    return t.variableDeclaration(
        'const',
        [
            t.variableDeclarator(
                t.identifier('data'),
                t.callExpression(
                    t.memberExpression(
                        t.callExpression(
                            t.memberExpression(
                                t.identifier(name),
                                t.identifier('encode')
                            ),
                            [
                                t.identifier('request')
                            ]
                        ),
                        t.identifier('finish')
                    ),
                    []
                )
            )
        ]
    )
};

// const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
const promiseRequest = (name: string, packageImportName: string) => {
    return t.variableDeclaration(
        'const',
        [
            t.variableDeclarator(
                t.identifier('promise'),
                t.callExpression(
                    t.memberExpression(
                        t.memberExpression(
                            t.thisExpression(),
                            t.identifier('rpc')
                        ),
                        t.identifier('request')
                    ),
                    [
                        t.stringLiteral(packageImportName),
                        t.stringLiteral(name),
                        t.identifier('data')
                    ]
                )
            )
        ]
    );
};

// return promise.then((data) => QueryAccountsResponse.decode(new _m0.Reader(data)));
const returnPromise = (name: string) => {
    return t.returnStatement(
        t.callExpression(
            t.memberExpression(
                t.identifier('promise'),
                t.identifier('then')
            ),
            [
                t.arrowFunctionExpression(
                    [
                        t.identifier('data')
                    ],
                    t.callExpression(
                        t.memberExpression(
                            t.identifier(name),
                            t.identifier('decode')
                        ),
                        [
                            t.newExpression(
                                t.memberExpression(
                                    t.identifier('_m0'),
                                    t.identifier('Reader')
                                ),
                                [
                                    t.identifier('data')
                                ]
                            )
                        ]
                    )
                )
            ]
        )
    )
};

const rpcClassMethod = (
    name: string,
    request: string,
    response: string,
    packageImport: string
) => {
    return classMethod(
        'method',
        t.identifier(name),
        [
            identifier(
                'request',
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier(request)
                    )
                )
            )
        ],
        t.blockStatement([

            // const data = QueryAccountsRequest.encode(request).finish();
            encodeData(request),

            // const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
            promiseRequest(name, packageImport),

            // return promise.then((data) => QueryAccountsResponse.decode(new _m0.Reader(data)));                        
            returnPromise(response)

        ]),
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier('Promise'),
                t.tsTypeParameterInstantiation(
                    [
                        t.tsTypeReference(
                            t.identifier(response)
                        )
                    ]
                )
            )
        )
    );
};

const rpcClassConstructor = (methods: string[]) => {
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
            ...methods.map(method => bindThis(method))
        ])
    );
};

export const createRpcClientClass = (name: string, implementsClass: string) => {
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

                rpcClassConstructor([
                    'Accounts',
                    'Other'
                ]),

                // METHODS
                rpcClassMethod(
                    'Accounts',
                    'QueryAccountsRequest',
                    'QueryAccountsResponse',
                    'cosmos.auth.v1beta1.Query'
                ),

                rpcClassMethod(
                    'Other',
                    'QueryOtherRequest',
                    'QueryOtherResponse',
                    'cosmos.auth.v1beta1.Query'
                )

            ]),
            null,
            [
                t.tsExpressionWithTypeArguments(
                    t.identifier(implementsClass)
                )
            ]
        )
    );
};


export const createRpcInterface = () => {
    return t.tsInterfaceDeclaration(
        t.identifier('Rpc'),
        null,
        [],
        t.tsInterfaceBody(
            [
                t.tsMethodSignature(
                    t.identifier('request'),
                    null,
                    [
                        identifier('service',
                            t.tsTypeAnnotation(
                                t.tsStringKeyword()
                            )
                        ),
                        identifier('method',
                            t.tsTypeAnnotation(
                                t.tsStringKeyword()
                            )
                        ),
                        identifier('data',
                            t.tsTypeAnnotation(
                                t.tsTypeReference(
                                    t.identifier('Uint8Array')
                                )
                            )
                        )
                    ],
                    t.tsTypeAnnotation(
                        t.tsTypeReference(
                            t.identifier('Promise'),
                            t.tsTypeParameterInstantiation(
                                [
                                    t.tsTypeReference(
                                        t.identifier('Uint8Array')
                                    )
                                ]
                            )
                        )
                    )
                )
            ]
        )
    )
}