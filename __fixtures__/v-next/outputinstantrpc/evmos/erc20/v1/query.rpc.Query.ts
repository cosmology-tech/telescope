import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair, TokenPairSDKType } from "./erc20";
import { Params, ParamsSDKType } from "./genesis";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryTokenPairsRequest, QueryTokenPairsRequestSDKType, QueryTokenPairsResponse, QueryTokenPairsResponseSDKType, QueryTokenPairRequest, QueryTokenPairRequestSDKType, QueryTokenPairResponse, QueryTokenPairResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** TokenPairs retrieves registered token pairs */
  tokenPairs(request?: QueryTokenPairsRequest): Promise<QueryTokenPairsResponse>;
  /** TokenPair retrieves a registered token pair */
  tokenPair(request: QueryTokenPairRequest): Promise<QueryTokenPairResponse>;
  /** Params retrieves the erc20 module params */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* TokenPairs retrieves registered token pairs */
  tokenPairs = async (request: QueryTokenPairsRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryTokenPairsResponse> => {
    const data = QueryTokenPairsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.erc20.v1.Query", "TokenPairs", data);
    return promise.then(data => QueryTokenPairsResponse.decode(new BinaryReader(data)));
  };
  /* TokenPair retrieves a registered token pair */
  tokenPair = async (request: QueryTokenPairRequest): Promise<QueryTokenPairResponse> => {
    const data = QueryTokenPairRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.erc20.v1.Query", "TokenPair", data);
    return promise.then(data => QueryTokenPairResponse.decode(new BinaryReader(data)));
  };
  /* Params retrieves the erc20 module params */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.erc20.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
};