
import * as t from '@babel/types';
import { arrowFunctionExpression, callExpression, identifier, makeCommentBlock, makeCommentLineWithBlocks, objectMethod, objectPattern, objectProperty, tsPropertySignature, tsTypeParameterDeclaration } from '../../utils';
import { ProtoService, ProtoServiceMethod } from '@osmonauts/types';
import { GenericParseContext } from '../../encoding';
import { camel } from '@osmonauts/utils';
import { pascal } from 'case';
import { createClientMap } from './weak-map';

const makeUseHookName = (name: string) => {
  return camel('use_' + name);
};

const makeUseHookTypeName = (name: string) => {
  return pascal('Use_' + name + 'Query');
};

const makeHookKeyName = (name: string) => {
  return camel(name + 'Query');
};

/**
 * Create an AST of a specific hook method
 * eg: __fixtures__/output1/akash/audit/v1beta2/query.rpc.Query.ts:
 * const useAllProvidersAttributes = ...
 * @param {Object=} context - context of generating the file
 * @param {string} name - name of the hook
 * @param {Object=} svc - method details
 * @returns {ParseResult} created AST
 */
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

  // add import
  context.addUtil('useQuery');

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
                  ])
                ),
                t.identifier('options')
              ],
              t.tsTypeParameterInstantiation([
                t.tsTypeReference(t.identifier(responseType)),
                t.tsTypeReference(t.identifier('Error')),
                t.tsTypeReference(t.identifier('TData'))
              ])
            ))
        ]),
        null,
        false,
        tsTypeParameterDeclaration([
          t.tsTypeParameter(null, t.tsTypeReference(t.identifier(responseType)), 'TData')
        ])
      )
    )
  ]);

}

/**
 * Create an AST of a specific query interface of react-query
 * eg: __fixtures__/output1/akash/audit/v1beta2/query.rpc.Query.ts:
 * export interface UseAllProvidersAttributesQuery<TData> extends ReactQueryParams...
 * @param {Object=} context - context of generating the file
 * @param {string} name - name of the hook
 * @param {Object=} svc - method details
 * @returns {ParseResult} created AST
 */
const rpcHookMethodInterface = (
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

  // import ReactQueryParams in the generated file.
  context.addUtil('ReactQueryParams');

  return t.exportNamedDeclaration(t.tsInterfaceDeclaration(
    t.identifier(makeUseHookTypeName(name)),
    t.tsTypeParameterDeclaration([
      t.tsTypeParameter(null, null, 'TData')
    ]),
    [
      t.tsExpressionWithTypeArguments(
        t.identifier('ReactQueryParams'),
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
            t.identifier(requestType)
          )
        ),
        optional
      )
    ])
  ));
}

/**
 * Create an ASTs for a function creating hooks
 * eg: __fixtures__/output1/akash/audit/v1beta2/query.rpc.Query.ts
 * export const createRpcQueryHooks = ...
 * @param {Object=} context - context of generating the file
 * @param {Object=} service - service details
 * @returns {ParseResult} created AST
 */
export const createRpcQueryHooks = (
  context: GenericParseContext,
  service: ProtoService
) => {

  // add imports
  context.addUtil('QueryClient');
  context.addUtil('createProtobufRpcClient');
  context.addUtil('ProtobufRpcClient');

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
        comment: service.methods[key].comment
      };
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



/**
 * Create ASTs for all the methods of a proto service.
 * @param {Object=} context - context of generating the file
 * @param {Object=} service - service details
 * @returns {ParseResult} created AST
 */
export const createRpcQueryHookInterfaces = (
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

  return methods.map(method => rpcHookMethodInterface(context, method.name, method.method));
};

/**
 * Create an ASTs for a map of query clients and a function of getting query service.
 * eg: __fixtures__/output1/akash/audit/v1beta2/query.rpc.Query.ts
 * const _queryClients: WeakMap...
 *
 * const getQueryService = (...
 * @param {Object=} context - context of generating the file
 * @param {Object=} service - service details
 * @returns {ParseResult} created AST
 */
export const createRpcQueryHookClientMap = (
  context: GenericParseContext,
  service: ProtoService
) => {
  const name = service.name + 'ClientImpl';

  // get ast based on a template.
  return createClientMap(name);
}

