import * as t from '@babel/types';
import { GenericParseContext } from '../../encoding';
import { arrowFunctionExpression, identifier, memberExpressionOrIdentifier, objectPattern } from '../../utils';

export const createWebSocketClient = (context: GenericParseContext) => {

    context.addUtil('WebSocket');
  
    return t.exportNamedDeclaration(
        t.variableDeclaration(
            "const",
            [
                t.variableDeclarator(
                    t.identifier("createWebSocketClient"),
                    t.arrowFunctionExpression(
                        [
                            identifier('wsUrl', 
                                t.tsTypeAnnotation(
                                    t.tsStringKeyword()
                                ))
                        ],
                        t.blockStatement(
                            [
                                t.returnStatement(
                                    t.newExpression(
                                        t.identifier('WebSocket'),
                                        [
                                            t.identifier('wsUrl')
                                        ]
                                    )
                                )
                            ]
                        )
                    )
                )
            ]
        )
    );
  };
  