import * as t from '@babel/types';
import {
  identifier,
  makeCommentLineWithBlocks,
  objectProperty
} from '../../utils';
import { ProtoService, ProtoServiceMethod } from '@osmonauts/types';
import { isRefIncluded } from '@osmonauts/proto-parser';
import { GenericParseContext } from '../../encoding';
import { camel } from '@osmonauts/utils';

/**
 * Entry for building stores.
 * @param {Object=} context - context of generating the file
 * @param {Object=} service - method details
 */
export const build = (context: GenericParseContext, service: ProtoService) => {
  const isIncluding =
    context.pluginValue('mobx.enabled') &&
    isRefIncluded(context.ref, context.pluginValue('mobx.include'));

  if (isIncluding) {
    // before this, make sure:
    // 1. refactor adding getQueryService part into helpers.
    // 2. add new query store class to helpers.
    // build whole ast, don't forget to add utils.
    buildRpcStores(context, service);
  }
};

/**
 * Create an AST to generate creating store functions.
 * eg:
 * export const createRpcStores = (rpc: ProtobufRpcClient | undefined) => {
 *   const queryService = getQueryService(rpc);
 *
 *   class BalanceStoreInherited extends QueryStore<
 *     QueryBalanceRequest,
 *     QueryBalanceResponse
 *   > {
 *     constructor() {
 *       super(queryService?.balance);
 *       makeObservable(this, {
 *         state: override,
 *         request: override,
 *         response: override,
 *         isLoading: override,
 *         isSuccess: override,
 *         refetch: override,
 *         getData: override
 *       });
 *     }
 *
 *     balance(request: QueryBalanceRequest): MobxResponse<QueryBalanceResponse> {
 *       return this.getData(request);
 *     }
 *   }
 *
 *   return {
 *     BalanceStoreInherited
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

  //add util for getQueryService

  //add util for QueryStore

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
        t.identifier('createRpcQueryHooks'),
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
                storeNames.map(({ name, comment }) =>
                  objectProperty(
                    t.identifier(name),
                    t.identifier(name),
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
 * Create an AST of inherited store.
 * eg:
 *   class BalanceStore extends QueryStore<
 *     QueryBalanceRequest,
 *     QueryBalanceResponse
 *   > {
 *     constructor() {
 *       super(queryService?.balance);
 *       makeObservable(this, {
 *         state: override,
 *         request: override,
 *         response: override,
 *         isLoading: override,
 *         isSuccess: override,
 *         refetch: override,
 *         getData: override
 *       });
 *     }
 *
 *     balance(request: QueryBalanceRequest): MobxResponse<QueryBalanceResponse> {
 *       return this.getData(request);
 *     }
 *   }
 * @param {Object=} context - context of generating the file
 * @param {string} name - name of the hook
 * @param {Object=} serviceMethod - method details
 * @returns {ParseResult} created AST
 */
const buildStore = (
  context: GenericParseContext,
  name: string,
  serviceMethod: ProtoServiceMethod
) => {
  return t.variableDeclaration('const', [
    t.variableDeclarator(t.identifier(name), t.stringLiteral('abc'))
  ]);
};
