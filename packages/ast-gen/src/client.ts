
import * as t from '@babel/types';
import { memberExpressionOrIdentifier } from './utils';

const tsObjectPattern = (
  properties: (t.RestElement | t.ObjectProperty)[],
  typeAnnotation: t.TSTypeAnnotation
) => {
  const obj = t.objectPattern(properties);
  obj.typeAnnotation = typeAnnotation;
  return obj;
}
interface CreateClient {
  name: string;
  packages: string[];
}
export const createClient = ({ name, packages }: CreateClient) => {
  return t.exportNamedDeclaration(
    t.variableDeclaration(
      'const',
      [
        t.variableDeclarator(
          t.identifier(name),
          t.arrowFunctionExpression(
            [
              tsObjectPattern(
                [
                  t.objectProperty(
                    t.identifier('rpcEndpoint'),
                    t.identifier('rpcEndpoint'),
                    false,
                    true
                  ),
                  t.objectProperty(
                    t.identifier('signer'),
                    t.identifier('signer'),
                    false,
                    true
                  )
                ],
                t.tsTypeAnnotation(
                  t.tsTypeLiteral(
                    [
                      t.tsPropertySignature(
                        t.identifier('rpcEndpoint'),
                        t.tsTypeAnnotation(t.tsStringKeyword())
                      ),
                      t.tsPropertySignature(
                        t.identifier('signer'),
                        t.tsTypeAnnotation(t.tsTypeReference(
                          t.identifier('OfflineSigner')
                        ))
                      )
                    ]
                  )
                )
              )
            ],
            t.blockStatement(
              [
                t.variableDeclaration(
                  'const',
                  [
                    t.variableDeclarator(
                      t.identifier('registry'),
                      t.newExpression(
                        t.identifier('Registry'),
                        [
                          t.objectExpression(
                            [
                              t.spreadElement(
                                t.identifier('defaultRegistryTypes')
                              ),
                              ...packages.map(pkg =>
                                t.spreadElement(
                                  memberExpressionOrIdentifier(
                                    'osmosis.gamm.v1beta1'.split('.').reverse()
                                  )
                                )
                              )
                            ]
                          )
                        ]
                      )
                    )
                  ]
                ),
                // amino
                t.variableDeclaration(
                  'const',
                  [
                    t.variableDeclarator(
                      t.identifier('aminoTypes'),
                      t.newExpression(
                        t.identifier('AminoTypes'),
                        [
                          t.objectExpression(
                            [
                              ...packages.map(pkg =>
                                t.spreadElement(
                                  memberExpressionOrIdentifier(
                                    'osmosis.gamm.v1beta1'.split('.').reverse()
                                  )
                                )
                              )
                            ]
                          )
                        ]
                      )
                    )
                  ]
                ),
                // client
                t.variableDeclaration(
                  'const',
                  [
                    t.variableDeclarator(
                      t.identifier('client'),
                      t.awaitExpression(t.callExpression(
                        t.memberExpression(
                          t.identifier('SigningStargateClient'),
                          t.identifier('connectWithSigner')
                        ),
                        [
                          t.identifier('rpcEndpoint'),
                          t.identifier('signer'),
                          t.objectExpression([
                            t.objectProperty(
                              t.identifier('registry'),
                              t.identifier('registry'),
                              false,
                              true
                            ),
                            t.objectProperty(
                              t.identifier('aminoTypes'),
                              t.identifier('aminoTypes'),
                              false,
                              true
                            ),
                          ])

                        ]
                      ))
                    )
                  ]
                ),

                // return 
                t.returnStatement(t.identifier('client'))
              ]
            ),
            true
          )
        )
      ]
    )
  )
};