import * as t from '@babel/types';
import { objectPattern } from '../../../utils';
import { GenericParseContext } from '../../../encoding';
import { grpcFuncArguments } from './grpc-web';

// endpoint = endpoint.replace(/\/*$/g, "");
export const grpcGatewayClientScaffold = (): t.Statement[] => {
    return [
        t.expressionStatement(
            t.assignmentExpression(
                "=",
                t.identifier('endpoint'),
                t.callExpression(
                    t.memberExpression(
                        t.identifier('endpoint'),
                        t.identifier('replace')
                    ),
                    [
                        t.regExpLiteral(
                            "\\/*$"
                        ),
                        t.stringLiteral(
                            "\"\""
                        )
                    ]
                )
            )
        )
    ];
};

const grpcGatewayNewAwaitImport = (
    path: string,
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
            t.identifier('Querier'),
            false
        ),
        [
            t.identifier('endpoint')
        ]
    )
}

const grpcGatewayNestedImportObject = (
    obj: object,
    className: string
) => {

    //make className dynamic based on object
    if (typeof obj === 'string') {
        const serviceType = (obj as string).split(".").pop();
        switch (serviceType) {
            case "Query":
                className = 'Query'
            //   console.log("This is a Query RPC.");          
              break;
            case "Service":
              className = 'Service';
            //   console.log("This is a Service RPC.");
              break;
            case "msg":
                className = 'Msg';
            //   console.log("This is a Message RPC.");
              break;
            default:
              console.log("grpc service error!! This should not happend. Undefined service type");
          }
        return grpcGatewayNewAwaitImport(obj);
    }

    const keys = Object.keys(obj);

    return t.objectExpression(keys.map(name => {
        return t.objectProperty(
            t.identifier(name),
            grpcGatewayNestedImportObject(obj[name], className)
        )
    }))
};

export const createScopedGrpcGatewayFactory = (
    context: GenericParseContext,
    obj: object,
    identifier: string
) => {

    return t.exportNamedDeclaration(
        t.variableDeclaration(
            'const',
            [
                t.variableDeclarator(
                    // createGrpcGatewayQueryClient
                    t.identifier(identifier),
                    t.arrowFunctionExpression(
                        grpcFuncArguments(),
                        t.blockStatement(
                            grpcGatewayClientScaffold().concat(
                            t.returnStatement(
                                grpcGatewayNestedImportObject(
                                    obj,
                                    'Query' //doesn't really matter here, remove if not prove useful
                                )
                            ))
                        ),
                        true
                    )
                )
            ]
        )
    )
}

