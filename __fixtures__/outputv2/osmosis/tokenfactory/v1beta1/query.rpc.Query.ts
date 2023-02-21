import { Params, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataRequestSDKType, QueryDenomAuthorityMetadataResponse, QueryDenomAuthorityMetadataResponseSDKType, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorRequestSDKType, QueryDenomsFromCreatorResponse, QueryDenomsFromCreatorResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Params defines a gRPC query method that returns the tokenfactory module's
   * parameters.
   */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;

  /**
   * DenomAuthorityMetadata defines a gRPC query method for fetching
   * DenomAuthorityMetadata for a particular denom.
   */
  denomAuthorityMetadata(request: DeepPartial<QueryDenomAuthorityMetadataRequest>, metadata?: grpc.Metadata): Promise<QueryDenomAuthorityMetadataResponse>;

  /**
   * DenomsFromCreator defines a gRPC query method for fetching all
   * denominations created by a specific admin/creator.
   */
  denomsFromCreator(request: DeepPartial<QueryDenomsFromCreatorRequest>, metadata?: grpc.Metadata): Promise<QueryDenomsFromCreatorResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.denomAuthorityMetadata = this.denomAuthorityMetadata.bind(this);
    this.denomsFromCreator = this.denomsFromCreator.bind(this);
  }

  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  denomAuthorityMetadata(request: DeepPartial<QueryDenomAuthorityMetadataRequest>, metadata?: grpc.Metadata): Promise<QueryDenomAuthorityMetadataResponse> {
    return this.rpc.unary(QueryDenomAuthorityMetadataDesc, QueryDenomAuthorityMetadataRequest.fromPartial(request), metadata);
  }

  denomsFromCreator(request: DeepPartial<QueryDenomsFromCreatorRequest>, metadata?: grpc.Metadata): Promise<QueryDenomsFromCreatorResponse> {
    return this.rpc.unary(QueryDenomsFromCreatorDesc, QueryDenomsFromCreatorRequest.fromPartial(request), metadata);
  }

}