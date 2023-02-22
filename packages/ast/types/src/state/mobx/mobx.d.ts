import * as t from '@babel/types';
import { ProtoService } from '@osmonauts/types';
import { GenericParseContext } from '../../encoding';
/**
 * Entry for building stores.
 * @param {Object=} context - context of generating the file
 * @param {Object=} service - method details
 */
export declare const createMobxQueryStores: (context: GenericParseContext, service: ProtoService) => t.ExportNamedDeclaration;
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
export declare const buildRpcStores: (context: GenericParseContext, service: ProtoService) => t.ExportNamedDeclaration;
