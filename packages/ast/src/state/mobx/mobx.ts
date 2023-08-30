import * as t from '@babel/types';
import {
  identifier,
  makeCommentLineWithBlocks,
  objectProperty,
  classMethod,
  classDeclaration,
  newExpression
} from '../../utils';
import { ProtoService, ProtoServiceMethod } from '@cosmology/types';
import { isRefIncluded } from '@cosmology/utils';
import { GenericParseContext } from '../../encoding';
import { camel } from '@cosmology/utils';
import { pascal } from 'case';

const makeQueryStoreName = (name: string) => {
  return `Query${pascal(name)}Store`;
};

/**
 * Entry for building stores.
 * @param {Object=} context - context of generating the file
 * @param {Object=} service - method details
 */
export const createMobxQueryStores = (
  context: GenericParseContext,
  service: ProtoService
): t.ExportNamedDeclaration => {
  const isIncluded =
    context.pluginValue('mobx.enabled') &&
    isRefIncluded(context.ref, context.pluginValue('mobx.include'));

  if (isIncluded) {
    // before this, make sure:
    // 1. refactor adding getQueryService part into helpers.
    // 2. add new query store class to helpers.
    // build whole ast, don't forget to add utils.
    return buildRpcStores(context, service);
  }

  return null;
};

/**
 * Create an AST to generate creating store functions.
 * eg:
 * export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
 *   const queryService = getQueryService(rpc);
 *
 *   class QueryCertificatesStore {
 *    ...
 *   }
 *
 *   return {
 *     QueryCertificatesStore
 *   };
 * };
 * @param {Object=} context - context of generating the file
 * @param {Object=} service - method details
 * @returns {ParseResult} created AST
 */
export const buildRpcStores = (
  context: GenericParseContext,
  service: ProtoService
) => {
  // add imports
  context.addUtil('ProtobufRpcClient');

  //TODO: add util for getQueryService

  const isCamelRpcMethods = context.pluginValue('rpcClients.camelCase');
  const storeNames = [];
  const stores = Object.keys(service.methods ?? {}).map((key) => {
    const method = service.methods[key];
    const name = isCamelRpcMethods ? camel(key) : key;

    storeNames.push({
      name,
      comment: method.comment
    });

    return buildStore(context, name, method);
  });

  return t.exportNamedDeclaration(
    t.variableDeclaration('const', [
      t.variableDeclarator(
        t.identifier('createRpcQueryMobxStores'),
        t.arrowFunctionExpression(
          [
            identifier(
              'rpc',
              t.tsTypeAnnotation(
                t.tsUnionType([
                  t.tsTypeReference(t.identifier('ProtobufRpcClient')),
                  t.tsUndefinedKeyword()
                ])
              )
            )
          ],

          // body
          t.blockStatement([
            // query service
            t.variableDeclaration('const', [
              t.variableDeclarator(
                t.identifier('queryService'),
                t.callExpression(t.identifier('getQueryService'), [
                  t.identifier('rpc')
                ])
              )
            ]),

            ...stores,

            // return the methods...
            t.returnStatement(
              t.objectExpression(
                storeNames.map(({ name, comment }) => {
                  const id = t.identifier(makeQueryStoreName(name));

                  return objectProperty(
                    id,
                    id,
                    false,
                    true,
                    null,
                    makeCommentLineWithBlocks(comment)
                  );
                })
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
 * Create an AST of inherited store.
 * eg:
 *   class QueryCertificatesStore {
 *     store = new QueryStore<QueryCertificatesRequest, QueryCertificatesResponse>(queryService?.certificates);
 *     certificates(request: QueryCertificatesRequest) {
 *       return this.store.getData(request);
 *     }
 *   }
 * @param {Object=} context - context of generating the file
 * @param {string} name - name of the store
 * @param {Object=} serviceMethod - method details
 * @returns {ParseResult} created AST
 */
const buildStore = (
  context: GenericParseContext,
  name: string,
  serviceMethod: ProtoServiceMethod
) => {
  //add util for QueryStore
  context.addUtil('QueryStore');

  //add util for MobxResponse
  context.addUtil('MobxResponse');

  //add util for makeObservable
  context.addUtil('makeObservable');

  //add util for override
  context.addUtil('override');

  const requestType = serviceMethod.requestType;
  const responseType = serviceMethod.responseType;
  const fieldNames = Object.keys(serviceMethod.fields ?? {});
  const hasParams = fieldNames.length > 0;

  let isOptional = false;
  // // if no params, then let's default to empty object for cleaner API
  if (!hasParams) {
    isOptional = true;
  } else if (
    hasParams &&
    fieldNames.length === 1 &&
    fieldNames.includes('pagination')
  ) {
    // if only argument "required" is pagination
    // also default to empty
    isOptional = true;
  }

  const storeClassName = makeQueryStoreName(name);

  const storeQueryClass = t.classDeclaration(
    t.identifier(storeClassName),
    null,
    t.classBody([
      t.classProperty(
        t.identifier('store'),
        newExpression(
          t.identifier('QueryStore'),
          [
            t.optionalMemberExpression(
              t.identifier('queryService'),
              t.identifier(name),
              false,
              true
            )
          ],
          t.tsTypeParameterInstantiation([
            t.tsTypeReference(t.identifier(requestType)),
            t.tsTypeReference(t.identifier(responseType))
          ])
        )
      ),
      t.classMethod(
        'method',
        t.identifier(name),
        [
          identifier(
            'request',
            t.tsTypeAnnotation(t.tsTypeReference(t.identifier(requestType)))
          )
        ],
        t.blockStatement(
          [
            t.returnStatement(
              t.callExpression(
                t.memberExpression(
                  t.memberExpression(t.thisExpression(), t.identifier('store')),
                  t.identifier('getData')
                ),
                [t.identifier('request')]
              )
            )
          ],
          []
        )
      )
    ])
  );

  return storeQueryClass;
};
