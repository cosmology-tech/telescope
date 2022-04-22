import * as t from '@babel/types';
import { Mutation } from './types';

const tsIdentifier = (name: string, typeAnnotation: t.TSTypeAnnotation) => {
  const el = t.identifier(name);
  el.typeAnnotation = typeAnnotation;
  return el;
}

export const addMsgMethod = ({ methodName, typeUrl, TypeName, methodToCall }) => {
  return t.objectMethod('method', t.identifier(methodName), [
    tsIdentifier('value', t.tsTypeAnnotation(
      t.tsTypeReference(
        t.identifier(TypeName)
      )
    ))
  ], t.blockStatement([
    t.returnStatement(
      t.objectExpression([
        t.objectProperty(
          t.identifier('typeUrl'),
          t.stringLiteral(typeUrl)
        ),
        t.objectProperty(
          t.identifier('value'),
          t.callExpression(
            t.memberExpression(
              t.identifier(TypeName),
              t.identifier(methodToCall)
            ),
            [t.identifier('value')]
          )
        )
      ])
    )]));
};

export const addFromJSONMethod = ({ methodName, typeUrl, TypeName }) => {
  return t.objectMethod('method', t.identifier(methodName), [
    tsIdentifier('value', t.tsTypeAnnotation(
      t.tsTypeReference(
        t.identifier('any')
      )
    ))
  ], t.blockStatement([
    t.returnStatement(
      t.objectExpression([
        t.objectProperty(
          t.identifier('typeUrl'),
          t.stringLiteral(typeUrl)
        ),
        t.objectProperty(
          t.identifier('value'),
          t.callExpression(
            t.memberExpression(
              t.identifier(TypeName),
              t.identifier('fromJSON')
            ),
            [t.identifier('value')]
          )
        )
      ])
    )]));
};

export const addFromPartialMethod = ({ methodName, typeUrl, TypeName }) => {
  return addMsgMethod({ methodName, typeUrl, TypeName, methodToCall: 'fromPartial' });
};

export const addToJSONMethod = ({ methodName, typeUrl, TypeName }) => {
  return addMsgMethod({ methodName, typeUrl, TypeName, methodToCall: 'toJSON' });
};


export const addJsonMethod = ({ methodName, typeUrl, TypeName }) => {
  return t.objectMethod('method', t.identifier(methodName), [
    tsIdentifier('value', t.tsTypeAnnotation(
      t.tsTypeReference(
        t.identifier(TypeName)
      )
    ))
  ], t.blockStatement([
    t.returnStatement(
      t.objectExpression([
        t.objectProperty(
          t.identifier('typeUrl'),
          t.stringLiteral(typeUrl)
        ),
        t.objectProperty(
          t.identifier('value'),
          t.identifier('value'),
          false,
          true
        )
      ])
    )]));
};

export const addEncodedMethod = ({ methodName, typeUrl, TypeName }) => {
  return t.objectMethod('method', t.identifier(methodName), [
    tsIdentifier('value', t.tsTypeAnnotation(
      t.tsTypeReference(
        t.identifier(TypeName)
      )
    ))
  ], t.blockStatement([
    t.returnStatement(
      t.objectExpression([

        t.objectProperty(
          t.identifier('type_url'),
          t.stringLiteral(typeUrl)
        ),

        t.objectProperty(
          t.identifier('value'),
          t.callExpression(
            t.memberExpression(
              t.callExpression(
                t.memberExpression(
                  t.identifier(TypeName),
                  t.identifier('encode')
                ),
                [
                  t.identifier('value')
                ]
              ),
              t.identifier('finish')
            ),
            []
          )
        )
      ])
    )]));
};


export const toObjectWithPartialMethods = (mutations: Mutation[]) => t.exportNamedDeclaration(t.variableDeclaration('const', [
  t.variableDeclarator(t.identifier('messages'), t.objectExpression(
    mutations.map(mutation => addFromPartialMethod(mutation))
  ))]));

export const toObjectWithEncodedMethods = (mutations: Mutation[]) => t.exportNamedDeclaration(t.variableDeclaration('const', [
  t.variableDeclarator(t.identifier('encoded'), t.objectExpression(
    mutations.map(mutation => addEncodedMethod(mutation))
  ))]));

export const toObjectWithJsonMethods = (mutations: Mutation[]) => t.exportNamedDeclaration(t.variableDeclaration('const', [
  t.variableDeclarator(t.identifier('json'), t.objectExpression(
    mutations.map(mutation => addJsonMethod(mutation))
  ))]));

export const toObjectWithToJSONMethods = (mutations: Mutation[]) => t.exportNamedDeclaration(t.variableDeclaration('const', [
  t.variableDeclarator(t.identifier('toJSON'), t.objectExpression(
    mutations.map(mutation => addToJSONMethod(mutation))
  ))]));

export const toObjectWithFromJSONMethods = (mutations: Mutation[]) => t.exportNamedDeclaration(t.variableDeclaration('const', [
  t.variableDeclarator(t.identifier('fromJSON'), t.objectExpression(
    mutations.map(mutation => addFromJSONMethod(mutation))
  ))]));

export const createTypeRegistryObject = (mutation: Mutation) => {
  return t.objectProperty(
    t.stringLiteral(mutation.typeUrl),
    t.identifier(mutation.TypeName)
  );
};

export const createTypeRegistry = (mutations: Mutation[]) => t.exportNamedDeclaration(
  t.variableDeclaration('const', [
    t.variableDeclarator(tsIdentifier(
      'registry',
      t.tsTypeAnnotation(
        t.tsTypeReference(t.identifier('ReadonlyArray'), t.tsTypeParameterInstantiation(
          [
            t.tsTupleType([
              t.tsStringKeyword(),
              t.tsTypeReference(
                t.identifier('GeneratedType')
              )]
            )
          ]
        ))
      )
    ), t.arrayExpression(
      [
        ...mutations.map(mutation => t.arrayExpression(
          [
            t.stringLiteral(mutation.typeUrl),
            t.identifier(mutation.TypeName)
          ]
        ))
      ]
    ))
  ]));

export const createRegistryLoader = () => {
  return t.exportNamedDeclaration(t.variableDeclaration(
    'const',
    [
      t.variableDeclarator(
        t.identifier('load'),
        t.arrowFunctionExpression(
          [
            tsIdentifier('protoRegistry', t.tsTypeAnnotation(
              t.tsTypeReference(
                t.identifier('Registry')
              )
            ))
          ],
          t.blockStatement(
            [
              t.expressionStatement(
                t.callExpression(
                  t.memberExpression(
                    t.callExpression(
                      t.memberExpression(
                        t.identifier(
                          'Object'
                        ),
                        t.identifier('keys')
                      ),
                      [
                        t.identifier('registry')
                      ]
                    ),
                    t.identifier('forEach')
                  ),
                  [
                    t.arrowFunctionExpression(
                      [
                        t.identifier('typeUrl')
                      ],
                      t.blockStatement(
                        [
                          t.expressionStatement(
                            t.callExpression(
                              t.memberExpression(
                                t.identifier(
                                  'protoRegistry'
                                ),
                                t.identifier('register')
                              ),
                              [
                                t.identifier('typeUrl'),
                                t.memberExpression(
                                  t.identifier('registry'),
                                  t.identifier('typeUrl'),
                                  true
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
    ]
  ))
};