import * as t from '@babel/types';
import { GenericParseContext } from '../../../encoding';
import { objectPattern } from '../../../utils';

export const rpcFuncArguments = (): t.ObjectPattern[] => {
    return [
        objectPattern(
            [
                t.objectProperty(
                    t.identifier('rpc'),
                    t.identifier('rpc'),
                    false,
                    true
                )
            ],
            t.tsTypeAnnotation(
                t.tsTypeLiteral(
                    [
                        t.tsPropertySignature(
                            t.identifier('rpc'),
                            t.tsTypeAnnotation(
                                t.tsTypeReference(
                                    t.identifier('Rpc')
                                )
                            )
                        )
                    ]
                )
            )
        )
    ];
};

export const rpcClassArguments = (): t.ObjectExpression[] => {
    return [
        t.objectExpression(
            [
                t.objectProperty(
                    t.identifier('rpc'),
                    t.identifier('rpc'),
                    false,
                    true
                )
            ]
        )
    ];
};

export const rpcNewAwaitImport = (
    path: string,
    className: string
) => {
    return t.newExpression(
        t.memberExpression(
            t.awaitExpression(
                t.callExpression(
                    t.import(),
                    [
                        t.stringLiteral(
                            path
                        )
                    ]
                )
            ),
            t.identifier(className),
            false
        ),
        [
            t.identifier('rpc')
        ]
    );
}

export const rpcNewTmAwaitImport = (
    path: string,
    className: string,
    clientName = 'client',
    isNew = false
) => {
    const calleeExpr = t.memberExpression(
      t.awaitExpression(
          t.callExpression(
              t.import(),
              [
                  t.stringLiteral(
                      path
                  )
              ]
          )
      ),
      t.identifier(className),
      false
    );

    const argsExpr = [
      t.identifier(clientName)
    ];

    return isNew ? t.newExpression(calleeExpr, argsExpr) : t.callExpression(calleeExpr, argsExpr);
}

export const rpcRecursiveObjectProps = (
    names: string[],
    leaf?: any
) => {
    const [name, ...rest] = names;

    let baseComponent;
    if (names.length === 1) {
        baseComponent = leaf ? leaf : t.identifier(name)
    } else {
        baseComponent = rpcRecursiveObjectProps(rest, leaf)
    }

    return t.objectExpression([
        t.objectProperty(
            t.identifier(name),
            baseComponent
        )
    ])
};

export const rpcNestedImportObject = (
    obj: object,
    className: string
) => {

    if (typeof obj === 'string') {
        return rpcNewAwaitImport(obj, className);
    }

    const keys = Object.keys(obj);

    return t.objectExpression(keys.map(name => {
        return t.objectProperty(
            t.identifier(name),
            rpcNestedImportObject(obj[name], className)
        )
    }))
};

export const rpcTmNestedImportObject = (
    obj: object,
    className: string,
    clientName?: string,
    isNew?: boolean
) => {

    if (typeof obj === 'string') {
        return rpcNewTmAwaitImport(obj, className, clientName, isNew);
    }

    const keys = Object.keys(obj);

    return t.objectExpression(keys.map(name => {
        return t.objectProperty(
            t.identifier(name),
            rpcTmNestedImportObject(obj[name], className, clientName, isNew)
        )
    }))
};

export const createScopedRpcFactory = (
    obj: object,
    identifier: string,
    className: string
) => {
    return t.exportNamedDeclaration(
        t.variableDeclaration(
            'const',
            [
                t.variableDeclarator(
                    t.identifier(identifier),
                    t.arrowFunctionExpression(
                        rpcFuncArguments(),
                        //
                        rpcNestedImportObject(
                            obj,
                            className
                        ),
                        true
                    )
                )
            ]
        )
    )
}

export const createScopedRpcTmFactory = (
    context: GenericParseContext,
    obj: object,
    identifier: string
) => {
    const extensions = context.pluginValue('rpcClients.extensions');
    let functionParams;
    const returnStatement = t.returnStatement(
      rpcTmNestedImportObject(
          obj,
          extensions ? 'createRpcQueryExtension' : 'createClientImpl',
          extensions ? 'client' : 'rpc',
      )
    );
    let functionStatements;

    if(extensions){
      context.addUtil('Tendermint34Client');
      context.addUtil('HttpEndpoint');
      context.addUtil('QueryClient');

      functionParams = [
        objectPattern(
          [
            t.objectProperty(
              t.identifier("rpcEndpoint"),
              t.identifier("rpcEndpoint"),
              false,
              true
            ),
          ],
          t.tsTypeAnnotation(
            t.tsTypeLiteral([
              t.tsPropertySignature(
                t.identifier("rpcEndpoint"),
                t.tsTypeAnnotation(
                  t.tsUnionType([
                    t.tsStringKeyword(),
                    t.tsTypeReference(t.identifier("HttpEndpoint")),
                  ])
                )
              ),
            ])
          )
        ),
      ];

      functionStatements = [

        t.variableDeclaration('const', [
            t.variableDeclarator(
                t.identifier('tmClient'),
                t.awaitExpression(
                    t.callExpression(
                        t.memberExpression(
                            t.identifier('Tendermint34Client'),
                            t.identifier('connect')
                        ),
                        [
                            t.identifier('rpcEndpoint')
                        ]
                    )
                )
            )
        ]),
        /////
        t.variableDeclaration('const', [
            t.variableDeclarator(
                t.identifier('client'),
                t.newExpression(
                    t.identifier('QueryClient'),
                    [
                        t.identifier('tmClient')
                    ]
                )
            )
        ]),

        returnStatement
      ]
    } else {
      functionParams = rpcFuncArguments();
      functionStatements = [returnStatement]
    }

    return t.exportNamedDeclaration(
        t.variableDeclaration(
            'const',
            [
                t.variableDeclarator(
                    // createRPCQueryClient
                    t.identifier(identifier),
                    t.arrowFunctionExpression(
                        functionParams,
                        t.blockStatement(functionStatements),
                        true
                    )
                )
            ]
        )
    )
}
