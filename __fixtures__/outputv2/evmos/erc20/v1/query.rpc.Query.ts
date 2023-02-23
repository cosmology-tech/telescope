import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair, TokenPairSDKType } from "./erc20";
import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryTokenPairsRequest, QueryTokenPairsRequestSDKType, QueryTokenPairsResponse, QueryTokenPairsResponseSDKType, QueryTokenPairRequest, QueryTokenPairRequestSDKType, QueryTokenPairResponse, QueryTokenPairResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** TokenPairs retrieves registered token pairs */
  TokenPairs(request?: DeepPartial<QueryTokenPairsRequest>, metadata?: grpc.Metadata): Promise<QueryTokenPairsResponse>;

  /** TokenPair retrieves a registered token pair */
  TokenPair(request: DeepPartial<QueryTokenPairRequest>, metadata?: grpc.Metadata): Promise<QueryTokenPairResponse>;

  /** Params retrieves the erc20 module params */
  Params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.tokenPairs = this.tokenPairs.bind(this);
    this.tokenPair = this.tokenPair.bind(this);
    this.params = this.params.bind(this);
  }

  tokenPairs(request: DeepPartial<QueryTokenPairsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryTokenPairsResponse> {
    return this.rpc.unary(QueryTokenPairsDesc, QueryTokenPairsRequest.fromPartial(request), metadata);
  }

  tokenPair(request: DeepPartial<QueryTokenPairRequest>, metadata?: grpc.Metadata): Promise<QueryTokenPairResponse> {
    return this.rpc.unary(QueryTokenPairDesc, QueryTokenPairRequest.fromPartial(request), metadata);
  }

  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

}