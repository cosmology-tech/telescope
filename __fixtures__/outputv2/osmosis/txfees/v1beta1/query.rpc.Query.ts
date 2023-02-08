import { FeeToken, FeeTokenSDKType } from "./feetoken";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryFeeTokensRequest, QueryFeeTokensRequestSDKType, QueryFeeTokensResponse, QueryFeeTokensResponseSDKType, QueryDenomSpotPriceRequest, QueryDenomSpotPriceRequestSDKType, QueryDenomSpotPriceResponse, QueryDenomSpotPriceResponseSDKType, QueryDenomPoolIdRequest, QueryDenomPoolIdRequestSDKType, QueryDenomPoolIdResponse, QueryDenomPoolIdResponseSDKType, QueryBaseDenomRequest, QueryBaseDenomRequestSDKType, QueryBaseDenomResponse, QueryBaseDenomResponseSDKType } from "./query";
export interface Query {
  /**
   * FeeTokens returns a list of all the whitelisted fee tokens and their
   * corresponding pools. It does not include the BaseDenom, which has its own
   * query endpoint
   */
  FeeTokens(request?: DeepPartial<QueryFeeTokensRequest>, metadata?: grpc.Metadata): Promise<QueryFeeTokensResponse>;

  /** DenomSpotPrice returns all spot prices by each registered token denom. */
  DenomSpotPrice(request: DeepPartial<QueryDenomSpotPriceRequest>, metadata?: grpc.Metadata): Promise<QueryDenomSpotPriceResponse>;

  /** Returns the poolID for a specified denom input. */
  DenomPoolId(request: DeepPartial<QueryDenomPoolIdRequest>, metadata?: grpc.Metadata): Promise<QueryDenomPoolIdResponse>;

  /** Returns a list of all base denom tokens and their corresponding pools. */
  BaseDenom(request?: DeepPartial<QueryBaseDenomRequest>, metadata?: grpc.Metadata): Promise<QueryBaseDenomResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.feeTokens = this.feeTokens.bind(this);
    this.denomSpotPrice = this.denomSpotPrice.bind(this);
    this.denomPoolId = this.denomPoolId.bind(this);
    this.baseDenom = this.baseDenom.bind(this);
  }

  feeTokens(request: DeepPartial<QueryFeeTokensRequest> = {}, metadata?: grpc.Metadata): Promise<QueryFeeTokensResponse> {
    return this.rpc.unary(QueryFeeTokensDesc, QueryFeeTokensRequest.fromPartial(request), metadata);
  }

  denomSpotPrice(request: DeepPartial<QueryDenomSpotPriceRequest>, metadata?: grpc.Metadata): Promise<QueryDenomSpotPriceResponse> {
    return this.rpc.unary(QueryDenomSpotPriceDesc, QueryDenomSpotPriceRequest.fromPartial(request), metadata);
  }

  denomPoolId(request: DeepPartial<QueryDenomPoolIdRequest>, metadata?: grpc.Metadata): Promise<QueryDenomPoolIdResponse> {
    return this.rpc.unary(QueryDenomPoolIdDesc, QueryDenomPoolIdRequest.fromPartial(request), metadata);
  }

  baseDenom(request: DeepPartial<QueryBaseDenomRequest> = {}, metadata?: grpc.Metadata): Promise<QueryBaseDenomResponse> {
    return this.rpc.unary(QueryBaseDenomDesc, QueryBaseDenomRequest.fromPartial(request), metadata);
  }

}