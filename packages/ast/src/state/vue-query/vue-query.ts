
import * as t from '@babel/types';
import { arrowFunctionExpression, callExpression, identifier, makeCommentBlock, makeCommentLineWithBlocks, objectMethod, objectPattern, objectProperty, tsPropertySignature, tsTypeParameterDeclaration } from '../../utils';
import { ProtoService, ProtoServiceMethod } from '@cosmology/types';
import { GenericParseContext } from '../../encoding';
import { camel, makeUseHookName, makeUseHookTypeName, makeHookKeyName } from '@cosmology/utils';
import { createClientMap } from './weak-map';

const rpcHookMethod = (
  context: GenericParseContext,
  name: string,
  svc: ProtoServiceMethod
) => {
  const requestType = svc.requestType;
  const responseType = svc.responseType;
  const fieldNames = Object.keys(svc.fields ?? {})
  const hasParams = fieldNames.length > 0;

  let optional = false;
  // if no params, then let's default to empty object for cleaner API
  if (!hasParams) {
    optional = true;
  } else if (hasParams && fieldNames.length === 1 && fieldNames.includes('pagination')) {
    // if only argument "required" is pagination
    // also default to empty
    optional = true;
  }

  // add import
  context.addUtil('useVueQuery');

  return t.variableDeclaration('const', [
    t.variableDeclarator(
      t.identifier(makeUseHookName(name)),
      arrowFunctionExpression([
        objectPattern([
          t.objectProperty(
            t.identifier('request'),
            t.identifier('request'),
            false,
            true
          ),
          t.objectProperty(
            t.identifier('options'),
            t.identifier('options'),
            false,
            true
          )
        ],
          t.tsTypeAnnotation(
            t.tsTypeReference(
              t.identifier(makeUseHookTypeName(name)),
              t.tsTypeParameterInstantiation([
                t.tsTypeReference(
                  t.identifier('TData')
                )
              ])
            )
          )
        )
      ],
        t.blockStatement([
          t.variableDeclaration('const', [
            t.variableDeclarator(
              t.identifier('queryKey'),
              t.arrayExpression([
                t.stringLiteral(makeHookKeyName(name)),
                t.identifier('queryService')
              ])
            )
          ]),
          t.ifStatement(
            t.identifier('request'),
            t.blockStatement([
              t.expressionStatement(
                t.callExpression(
                  t.memberExpression(
                    t.callExpression(
                      t.memberExpression(
                        t.identifier('Object'),
                        t.identifier('values')
                      ),
                      [t.identifier('request')]
                    ),
                    t.identifier('forEach')
                  ),
                  [
                    t.arrowFunctionExpression(
                      [identifier('val', t.tsTypeAnnotation(t.tsAnyKeyword()))],
                      t.blockStatement([
                        t.expressionStatement(
                          t.callExpression(
                            t.memberExpression(t.identifier('queryKey'), t.identifier('push')),
                            [t.identifier('val')]
                          )
                        )
                      ])
                    )
                  ]
                )
              )
            ])
          ),
          t.returnStatement(
            callExpression(
              t.identifier('useQuery'),
              [
                t.objectExpression([
                  t.objectProperty(
                    t.identifier('queryKey'),
                    t.identifier('queryKey'),
                    false,
                    true
                  ),
                  t.objectProperty(
                    t.identifier('queryFn'),
                    t.arrowFunctionExpression(
                      [],
                      t.blockStatement([
                        t.ifStatement(
                          t.unaryExpression('!', t.memberExpression(t.identifier('queryService'), t.identifier('value')), true),
                          t.throwStatement(
                            t.newExpression(
                              t.identifier('Error'),
                              [t.stringLiteral('Query Service not initialized')]
                            )
                          )
                        ),
                        t.variableDeclaration('let', [
                          t.variableDeclarator(
                            t.identifier('params'),
                            t.tsAsExpression(
                              t.objectExpression([]),
                              t.tsAnyKeyword()
                            )
                          )
                        ]),
                        t.ifStatement(
                          t.identifier('request'),
                          t.blockStatement([
                            t.expressionStatement(
                              t.callExpression(
                                t.memberExpression(
                                  t.callExpression(
                                    t.memberExpression(
                                      t.identifier('Object'),
                                      t.identifier('entries')
                                    ),
                                    [t.identifier('request')]
                                  ),
                                  t.identifier('forEach')
                                ),
                                [
                                  t.arrowFunctionExpression(
                                    [
                                      t.arrayPattern([
                                        identifier('key', t.tsTypeAnnotation(t.tsStringKeyword())),
                                        identifier('val', t.tsTypeAnnotation(t.tsAnyKeyword())),
                                      ])
                                    ],
                                    t.blockStatement([
                                      t.expressionStatement(
                                        t.assignmentExpression(
                                          '=',
                                          t.memberExpression(
                                            t.identifier('params'),
                                            t.identifier('key'),
                                            true
                                          ),
                                          t.memberExpression(
                                            t.identifier('val'),
                                            t.identifier('value')
                                          )
                                        )
                                      )
                                    ])
                                  )
                                ]
                              )
                            )
                          ])
                        )
                        ,
                        t.returnStatement(
                          t.callExpression(
                            t.memberExpression(
                              t.memberExpression(t.identifier('queryService'), t.identifier('value')),
                              t.identifier(name)
                            ),
                            [t.identifier('params')]
                          )
                        )
                      ])
                    )
                  ),
                  t.spreadElement(t.identifier('options'))
                ]),
              ],
              t.tsTypeParameterInstantiation([
                t.tsTypeReference(t.identifier(responseType)),
                t.tsTypeReference(t.identifier('Error')),
                t.tsTypeReference(t.identifier('TData'))
              ])
            )
          )
        ]),
        undefined,
        false,
        tsTypeParameterDeclaration([
          t.tsTypeParameter(null, t.tsTypeReference(t.identifier(responseType)), 'TData')
        ])
      )
    )
  ]);

}

export const createRpcVueQueryHooks = (
  context: GenericParseContext,
  service: ProtoService
) => {

  // add imports
  context.addUtil('QueryClient');
  context.addUtil('createProtobufRpcClient');
  context.addUtil('ProtobufRpcClient');
  context.addUtil('ComputedRef')
  context.addUtil('computed')
  context.addUtil('Ref')

  const camelRpcMethods = context.pluginValue('rpcClients.camelCase');
  const methods = Object.keys(service.methods ?? {})
    .map(key => {
      const method = service.methods[key];
      const name = camelRpcMethods ? camel(key) : key;
      return rpcHookMethod(
        context,
        name,
        method
      )
    });

  const methodNames = Object.keys(service.methods ?? {})
    .map(key => {
      const name = camelRpcMethods ? camel(key) : key;
      return {
        name,
        comment: service.methods[key].comment ?? ""
      };
    });

  return t.exportNamedDeclaration(
    t.variableDeclaration('const', [
      t.variableDeclarator(
        t.identifier('createRpcQueryHooks'),
        t.arrowFunctionExpression([
          identifier('rpc', t.tsTypeAnnotation(
            t.tsTypeReference(
              t.identifier('Ref'),
              t.tsTypeParameterInstantiation([
                t.tsUnionType([
                  t.tsTypeReference(t.identifier('ProtobufRpcClient')),
                  t.tsUndefinedKeyword()
                ])
              ])
            )
          ))],

          // body
          t.blockStatement([
            // query service
            t.variableDeclaration('const', [
              t.variableDeclarator(
                t.identifier('queryService'),
                t.callExpression(
                  t.identifier('useQueryService'),
                  [
                    t.identifier('rpc')
                  ]
                )
              )
            ]),


            ...methods,

            // return the methods...
            t.returnStatement(
              t.objectExpression(
                methodNames.map(({ name, comment }) =>
                  objectProperty(
                    t.identifier(makeUseHookName(name)),
                    t.identifier(makeUseHookName(name)),
                    false,
                    true,
                    null,
                    makeCommentLineWithBlocks(comment)
                  )
                )
              )
            )
          ])
          // end body

        )
      )
    ])
  );
};

const rpcVueHookMethodInterface = (
  context: GenericParseContext,
  name: string,
  svc: ProtoServiceMethod
) => {
  const requestType = svc.requestType;
  const responseType = svc.responseType;
  const fieldNames = Object.keys(svc.fields ?? {})
  const hasParams = fieldNames.length > 0;

  let optional = false;
  // if no params, then let's default to empty object for cleaner API
  if (!hasParams) {
    optional = true;
  } else if (hasParams && fieldNames.length === 1 && fieldNames.includes('pagination')) {
    // if only argument "required" is pagination
    // also default to empty
    optional = true;
  }

  // import VueQueryParams in the generated file.
  context.addUtil('VueQueryParams');

  return t.exportNamedDeclaration(t.tsInterfaceDeclaration(
    t.identifier(makeUseHookTypeName(name)),
    t.tsTypeParameterDeclaration([
      t.tsTypeParameter(null, null, 'TData')
    ]),
    [
      t.tsExpressionWithTypeArguments(
        t.identifier('VueQueryParams'),
        t.tsTypeParameterInstantiation([
          t.tsTypeReference(t.identifier(responseType)),
          t.tsTypeReference(t.identifier('TData'))
        ])
      )
    ],
    t.tsInterfaceBody([
      tsPropertySignature(
        t.identifier('request'),
        t.tsTypeAnnotation(
          t.tsTypeReference(
            t.identifier(`Reactive${requestType}`)
          )
        ),
        optional
      )
    ])
  ));
}

/**
 * Create ASTs for all the methods of a proto service.
 * @param {Object=} context - context of generating the file
 * @param {Object=} service - service details
 * @returns {ParseResult} created AST
 */
export const createRpcVueQueryHookInterfaces = (
  context: GenericParseContext,
  service: ProtoService
) => {


  const camelRpcMethods = context.pluginValue('rpcClients.camelCase');

  const methods = Object.keys(service.methods ?? {})
    .map(key => {
      const name = camelRpcMethods ? camel(key) : key;
      const method = service.methods[key];
      return {
        name,
        method
      };
    });

  return methods.map(method => rpcVueHookMethodInterface(context, method.name, method.method));
};


export const createRpcVueQueryHookClientMap = (
  context: GenericParseContext,
  service: ProtoService
) => {
  const name = service.name + 'ClientImpl';

  // get ast based on a template.
  return createClientMap(name);
}