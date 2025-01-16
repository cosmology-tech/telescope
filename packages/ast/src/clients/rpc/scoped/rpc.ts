import * as t from "@babel/types";
import { GenericParseContext } from "../../../encoding";
import { objectPattern } from "../../../utils";
import { restoreExtension } from "@cosmology/utils";

export const rpcFuncArguments = (): t.ObjectPattern[] => {
    return [
        objectPattern(
            [
                t.objectProperty(
                    t.identifier("rpc"),
                    t.identifier("rpc"),
                    false,
                    true
                ),
            ],
            t.tsTypeAnnotation(
                t.tsTypeLiteral([
                    t.tsPropertySignature(
                        t.identifier("rpc"),
                        t.tsTypeAnnotation(
                            t.tsTypeReference(t.identifier("Rpc"))
                        )
                    ),
                ])
            )
        ),
    ];
};

export const rpcClassArguments = (): t.ObjectExpression[] => {
    return [
        t.objectExpression([
            t.objectProperty(
                t.identifier("rpc"),
                t.identifier("rpc"),
                false,
                true
            ),
        ]),
    ];
};

export const rpcNewAwaitImport = (path: string, className: string) => {
    return t.newExpression(
        t.memberExpression(
            t.awaitExpression(
                t.callExpression(t.import(), [t.stringLiteral(path)])
            ),
            t.identifier(className),
            false
        ),
        [t.identifier("rpc")]
    );
};

export const rpcNewTmAwaitImport = (
    path: string,
    className: string,
    clientName = "client",
    isNew = false
) => {
    const calleeExpr = t.memberExpression(
        t.awaitExpression(
            t.callExpression(t.import(), [t.stringLiteral(path)])
        ),
        t.identifier(className),
        false
    );

    const argsExpr = [t.identifier(clientName)];

    return isNew
        ? t.newExpression(calleeExpr, argsExpr)
        : t.callExpression(calleeExpr, argsExpr);
};

export const rpcRecursiveObjectProps = (names: string[], leaf?: any) => {
    const [name, ...rest] = names;

    let baseComponent;
    if (names.length === 1) {
        baseComponent = leaf ? leaf : t.identifier(name);
    } else {
        baseComponent = rpcRecursiveObjectProps(rest, leaf);
    }

    return t.objectExpression([
        t.objectProperty(t.identifier(name), baseComponent),
    ]);
};

export const rpcNestedImportObject = (
    obj: object,
    className: string,
    options?: {
        restoreImportExtension?: string;
    }
) => {
    if (typeof obj === "string") {
        const path = restoreExtension(obj, options?.restoreImportExtension);
        return rpcNewAwaitImport(path, className);
    }

    const keys = Object.keys(obj);

    return t.objectExpression(
        keys.map((name) => {
            return t.objectProperty(
                t.identifier(name),
                rpcNestedImportObject(obj[name], className, options)
            );
        })
    );
};

export const rpcTmNestedImportObject = (
    obj: object,
    className: string,
    clientName?: string,
    options?: {
        isNew?: boolean;
        restoreImportExtension?: string;
    }
) => {
    if (typeof obj === "string") {
        const path = restoreExtension(obj, options?.restoreImportExtension);
        return rpcNewTmAwaitImport(path, className, clientName, options?.isNew);
    }

    const keys = Object.keys(obj);

    return t.objectExpression(
        keys.map((name) => {
            return t.objectProperty(
                t.identifier(name),
                rpcTmNestedImportObject(
                    obj[name],
                    className,
                    clientName,
                    options
                )
            );
        })
    );
};

export const createScopedRpcFactory = (
    obj: object,
    identifier: string,
    className: string,
    options?: {
        restoreImportExtension?: string;
    }
) => {
    return t.exportNamedDeclaration(
        t.variableDeclaration("const", [
            t.variableDeclarator(
                t.identifier(identifier),
                t.arrowFunctionExpression(
                    rpcFuncArguments(),
                    //
                    rpcNestedImportObject(obj, className, options),
                    true
                )
            ),
        ])
    );
};

export const createScopedRpcTmFactory = (
    context: GenericParseContext,
    obj: object,
    identifier: string
) => {
    const newClientType = context.pluginValue("rpcClients.useConnectComet");
    const useQueryClientResolver = context.pluginValue(
        "rpcClients.useQueryClientResolver"
    );

    const extensions = context.pluginValue("rpcClients.extensions");
    let functionParams;
    const returnStatement = t.returnStatement(
        rpcTmNestedImportObject(
            obj,
            extensions ? "createRpcQueryExtension" : "createClientImpl",
            extensions ? "client" : "rpc",
            {
                restoreImportExtension: context.options.restoreImportExtension,
            }
        )
    );

    let functionStatements;
    let awaitClientCreation;

    if (extensions) {
        // TODO: remove tendermint34client and options if not needed
        if (newClientType) {
            // use connectComet for dynamic client
            context.addUtil("connectComet");
            awaitClientCreation = t.callExpression(
                t.identifier("connectComet"),
                [t.identifier("rpcEndpoint")]
            );
        } else {
            // use tendermint34 client
            context.addUtil("Tendermint34Client");
            awaitClientCreation = t.callExpression(
                t.memberExpression(
                    t.identifier("Tendermint34Client"),
                    t.identifier("connect")
                ),
                [t.identifier("rpcEndpoint")]
            );
        }

        context.addUtil("HttpEndpoint");
        context.addUtil("QueryClient");
        const rpcEndpointParam = t.identifier("rpcEndpoint");
        rpcEndpointParam.typeAnnotation = t.tsTypeAnnotation(
            t.tsUnionType([
                t.tsStringKeyword(),
                t.tsTypeReference(t.identifier("HttpEndpoint")),
            ])
        );

        functionParams = [
            objectPattern(
                [
                    t.objectProperty(
                        t.identifier("rpcEndpoint"),
                        t.identifier("rpcEndpoint"),
                        false,
                        true
                    ),
                    useQueryClientResolver &&
                        t.objectProperty(
                            t.identifier("queryClientResolver"),
                            t.identifier("queryClientResolver"),
                            false,
                            true
                        ),
                ].filter(Boolean),
                t.tsTypeAnnotation(
                    t.tsTypeLiteral(
                        [
                            t.tsPropertySignature(
                                t.identifier("rpcEndpoint"),
                                t.tsTypeAnnotation(
                                    t.tsUnionType([
                                        t.tsStringKeyword(),
                                        t.tsTypeReference(
                                            t.identifier("HttpEndpoint")
                                        ),
                                    ])
                                )
                            ),
                            useQueryClientResolver &&
                                t.tsPropertySignature(
                                    t.identifier("queryClientResolver"),
                                    t.tsTypeAnnotation(
                                        t.tsFunctionType(
                                            null,
                                            [rpcEndpointParam],
                                            t.tsTypeAnnotation(
                                                t.tsTypeReference(
                                                    t.identifier("Promise"),
                                                    t.tsTypeParameterInstantiation(
                                                        [
                                                            t.tsTypeReference(
                                                                t.identifier(
                                                                    "QueryClient"
                                                                )
                                                            ),
                                                        ]
                                                    )
                                                )
                                            )
                                        )
                                    )
                                ),
                        ].filter(Boolean)
                    )
                )
            ),
        ];

        if (useQueryClientResolver) {
            let createQueryClientName = newClientType
                ? "createConnectCometQueryClient"
                : "createTm34QueryClient";
            context.addUtil(createQueryClientName);

            functionStatements = [
                t.variableDeclaration("let", [
                    t.variableDeclarator(
                        t.identifier("client"),
                        t.conditionalExpression(
                            t.identifier("queryClientResolver"),
                            t.awaitExpression(
                                t.callExpression(
                                    t.identifier("queryClientResolver"),
                                    [t.identifier("rpcEndpoint")]
                                )
                            ),
                            t.awaitExpression(
                                t.callExpression(
                                    t.identifier(createQueryClientName),
                                    [t.identifier("rpcEndpoint")]
                                )
                            )
                        )
                    ),
                ]),
                returnStatement,
            ];
        } else {
            functionStatements = [
                t.variableDeclaration("const", [
                    t.variableDeclarator(
                        t.identifier("tmClient"),
                        t.awaitExpression(awaitClientCreation)
                    ),
                ]),
                /////
                t.variableDeclaration("const", [
                    t.variableDeclarator(
                        t.identifier("client"),
                        t.newExpression(t.identifier("QueryClient"), [
                            t.identifier("tmClient"),
                        ])
                    ),
                ]),

                returnStatement,
            ];
        }
    } else {
        functionParams = rpcFuncArguments();
        functionStatements = [returnStatement];
    }

    return t.exportNamedDeclaration(
        t.variableDeclaration("const", [
            t.variableDeclarator(
                // createRPCQueryClient
                t.identifier(identifier),
                t.arrowFunctionExpression(
                    functionParams,
                    t.blockStatement(functionStatements),
                    true
                )
            ),
        ])
    );
};
