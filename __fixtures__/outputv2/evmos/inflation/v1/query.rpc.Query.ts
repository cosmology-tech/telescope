import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryPeriodRequest, QueryPeriodRequestSDKType, QueryPeriodResponse, QueryPeriodResponseSDKType, QueryEpochMintProvisionRequest, QueryEpochMintProvisionRequestSDKType, QueryEpochMintProvisionResponse, QueryEpochMintProvisionResponseSDKType, QuerySkippedEpochsRequest, QuerySkippedEpochsRequestSDKType, QuerySkippedEpochsResponse, QuerySkippedEpochsResponseSDKType, QueryCirculatingSupplyRequest, QueryCirculatingSupplyRequestSDKType, QueryCirculatingSupplyResponse, QueryCirculatingSupplyResponseSDKType, QueryInflationRateRequest, QueryInflationRateRequestSDKType, QueryInflationRateResponse, QueryInflationRateResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";

/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Period retrieves current period. */
  Period(request?: DeepPartial<QueryPeriodRequest>, metadata?: grpc.Metadata): Promise<QueryPeriodResponse>;

  /** EpochMintProvision retrieves current minting epoch provision value. */
  EpochMintProvision(request?: DeepPartial<QueryEpochMintProvisionRequest>, metadata?: grpc.Metadata): Promise<QueryEpochMintProvisionResponse>;

  /** SkippedEpochs retrieves the total number of skipped epochs. */
  SkippedEpochs(request?: DeepPartial<QuerySkippedEpochsRequest>, metadata?: grpc.Metadata): Promise<QuerySkippedEpochsResponse>;

  /**
   * CirculatingSupply retrieves the total number of tokens that are in
   * circulation (i.e. excluding unvested tokens).
   */
  CirculatingSupply(request?: DeepPartial<QueryCirculatingSupplyRequest>, metadata?: grpc.Metadata): Promise<QueryCirculatingSupplyResponse>;

  /** InflationRate retrieves the inflation rate of the current period. */
  InflationRate(request?: DeepPartial<QueryInflationRateRequest>, metadata?: grpc.Metadata): Promise<QueryInflationRateResponse>;

  /** Params retrieves the total set of minting parameters. */
  Params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.period = this.period.bind(this);
    this.epochMintProvision = this.epochMintProvision.bind(this);
    this.skippedEpochs = this.skippedEpochs.bind(this);
    this.circulatingSupply = this.circulatingSupply.bind(this);
    this.inflationRate = this.inflationRate.bind(this);
    this.params = this.params.bind(this);
  }

  period(request: DeepPartial<QueryPeriodRequest> = {}, metadata?: grpc.Metadata): Promise<QueryPeriodResponse> {
    return this.rpc.unary(QueryPeriodDesc, QueryPeriodRequest.fromPartial(request), metadata);
  }

  epochMintProvision(request: DeepPartial<QueryEpochMintProvisionRequest> = {}, metadata?: grpc.Metadata): Promise<QueryEpochMintProvisionResponse> {
    return this.rpc.unary(QueryEpochMintProvisionDesc, QueryEpochMintProvisionRequest.fromPartial(request), metadata);
  }

  skippedEpochs(request: DeepPartial<QuerySkippedEpochsRequest> = {}, metadata?: grpc.Metadata): Promise<QuerySkippedEpochsResponse> {
    return this.rpc.unary(QuerySkippedEpochsDesc, QuerySkippedEpochsRequest.fromPartial(request), metadata);
  }

  circulatingSupply(request: DeepPartial<QueryCirculatingSupplyRequest> = {}, metadata?: grpc.Metadata): Promise<QueryCirculatingSupplyResponse> {
    return this.rpc.unary(QueryCirculatingSupplyDesc, QueryCirculatingSupplyRequest.fromPartial(request), metadata);
  }

  inflationRate(request: DeepPartial<QueryInflationRateRequest> = {}, metadata?: grpc.Metadata): Promise<QueryInflationRateResponse> {
    return this.rpc.unary(QueryInflationRateDesc, QueryInflationRateRequest.fromPartial(request), metadata);
  }

  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

}