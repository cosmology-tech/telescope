import { Params, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataRequestSDKType, QueryDenomAuthorityMetadataResponse, QueryDenomAuthorityMetadataResponseSDKType, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorRequestSDKType, QueryDenomsFromCreatorResponse, QueryDenomsFromCreatorResponseSDKType } from "./query";

/** Query defines the RPC service */
export interface Query {
  params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
  /*Params returns the total set of minting parameters.*/

  denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponseSDKType>;
  /*null*/

  denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponseSDKType>;
  /*null*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.denomAuthorityMetadata = this.denomAuthorityMetadata.bind(this);
    this.denomsFromCreator = this.denomsFromCreator.bind(this);
  }

  params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponseSDKType> {
    const data = QueryDenomAuthorityMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "DenomAuthorityMetadata", data);
    return promise.then(data => QueryDenomAuthorityMetadataResponse.decode(new _m0.Reader(data)));
  }

  denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponseSDKType> {
    const data = QueryDenomsFromCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "DenomsFromCreator", data);
    return promise.then(data => QueryDenomsFromCreatorResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
      return queryService.params(request);
    },

    denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponseSDKType> {
      return queryService.denomAuthorityMetadata(request);
    },

    denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponseSDKType> {
      return queryService.denomsFromCreator(request);
    }

  };
};