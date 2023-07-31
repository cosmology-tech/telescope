import * as t from '@babel/types';
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
export declare const buildRpcStores: (context: GenericParseContext, service: ProtoService) => t.ExportNamedDeclaration;
