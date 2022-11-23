
import * as t from '@babel/types';
import { callExpression, identifier, objectMethod, objectPattern } from '../../utils';
import { ProtoService, ProtoServiceMethod } from '@osmonauts/types';
import { GenericParseContext } from '../../encoding';
import { camel } from '@osmonauts/utils';
import { getRpcClassName } from '../../clients/rpc/class';
import { pascal } from 'case';

const makeUseHookName = (name: string) => {
  return camel('use_' + name);
};

const makeUseHookTypeName = (name: string) => {
  return pascal('Use_' + name + 'Query');
};

const makeHookKeyName = (name: string) => {
  return camel(name + 'Query');
};

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
  // // if no params, then let's default to empty object for cleaner API
  if (!hasParams) {
    optional = true;
  } else if (hasParams && fieldNames.length === 1 && fieldNames.includes('pagination')) {
    // if only argument "required" is pagination
    // also default to empty
    optional = true;
  }

  // const methodArgs: t.Identifier = identifier(
  //     'request',
  //     t.tsTypeAnnotation(
  //         t.tsTypeReference(
  //             t.identifier(requestType)
  //         )
  //     ),
  //     optional
  // );


  context.addUtil('useQuery');

  return t.variableDeclaration('const', [
    t.variableDeclarator(
      t.identifier(makeUseHookName(name)),
      t.arrowFunctionExpression([
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
          t.returnStatement(
            callExpression(
              t.identifier('useQuery'),
              [
                t.arrayExpression([
                  t.stringLiteral(makeHookKeyName(name)),
                  t.identifier('request')
                ]),
                t.arrowFunctionExpression(
                  [],
                  t.blockStatement([
                    t.ifStatement(t.unaryExpression('!', t.identifier('queryService'), true), t.throwStatement(
                      t.newExpression(t.identifier('Error'), [
                        t.stringLiteral('Query Service not initialized')
                      ])
                    )),
                    t.returnStatement(
                      t.callExpression(t.memberExpression(t.identifier('queryService'), t.identifier(name)), [
                        t.identifier('request')
                      ])
                    )
                  ]))
              ],
              t.tsTypeParameterInstantiation([
                t.tsTypeReference(t.identifier(responseType)),
                t.tsTypeReference(t.identifier('Error')),
                t.tsTypeReference(t.identifier('Tdata'))
              ])
            ))
        ]))
    )
  ]);

  // return objectMethod('method', t.identifier(makeUseHookName(name)), [
  //     methodArgs
  // ], t.blockStatement([
  //     // t.returnStatement(
  //     //     t.callExpression(
  //     //         t.memberExpression(
  //     //             t.identifier('queryService'),
  //     //             t.identifier(name)
  //     //         ),
  //     //         [
  //     //             t.identifier('request')
  //     //         ]
  //     //     )
  //     // )
  // ]),
  //     false,
  //     false,
  //     false,
  //     null,
  //     t.tsTypeParameterDeclaration([
  //         t.tsTypeParameter(null, t.tsTypeReference(
  //             t.identifier(responseType)
  //         ), 'TData')
  //     ])
  // );
}

export const createRpcQueryHooks = (
  context: GenericParseContext,
  service: ProtoService
) => {

  context.addUtil('QueryClient');
  context.addUtil('createProtobufRpcClient');
  context.addUtil('ProtobufRpcClient');

  const camelRpcMethods = context.pluginValue('rpcClients.camelCase');
  // const name = service.name + 'ClientImpl';
  // const implementsName = service.name;
  // const methodNames = Object.keys(service.methods ?? {})
  //     .map(key => {
  //         return camelRpcMethods ? camel(key) : key
  //     });
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
      return name;
    });

  return t.exportNamedDeclaration(
    t.variableDeclaration('const', [
      t.variableDeclarator(
        t.identifier('createRpcQueryHooks'),
        t.arrowFunctionExpression([
          identifier('rpc', t.tsTypeAnnotation(
            t.tsUnionType([
              t.tsTypeReference(t.identifier('ProtobufRpcClient')),
              t.tsUndefinedKeyword()
            ])
          ))],

          // body
          t.blockStatement([

            // query service
            t.variableDeclaration('const', [
              t.variableDeclarator(
                t.identifier('queryService'),
                t.callExpression(
                  t.identifier('getQueryService'),
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
                methodNames.map(name => t.objectProperty(
                  t.identifier(makeUseHookName(name)),
                  t.identifier(makeUseHookName(name)),
                  false,
                  true)
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

