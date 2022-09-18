import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryPeriodRequest, QueryPeriodRequestSDKType, QueryPeriodResponse, QueryPeriodResponseSDKType, QueryEpochMintProvisionRequest, QueryEpochMintProvisionRequestSDKType, QueryEpochMintProvisionResponse, QueryEpochMintProvisionResponseSDKType, QuerySkippedEpochsRequest, QuerySkippedEpochsRequestSDKType, QuerySkippedEpochsResponse, QuerySkippedEpochsResponseSDKType, QueryCirculatingSupplyRequest, QueryCirculatingSupplyRequestSDKType, QueryCirculatingSupplyResponse, QueryCirculatingSupplyResponseSDKType, QueryInflationRateRequest, QueryInflationRateRequestSDKType, QueryInflationRateResponse, QueryInflationRateResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";

/** Query defines the RPC service */
export interface Query {
  period(request: QueryPeriodRequest): Promise<QueryPeriodResponseSDKType>;
  /*Period retrieves current period.*/

  epochMintProvision(request: QueryEpochMintProvisionRequest): Promise<QueryEpochMintProvisionResponseSDKType>;
  /*EpochMintProvision retrieves current minting epoch provision value.*/

  skippedEpochs(request: QuerySkippedEpochsRequest): Promise<QuerySkippedEpochsResponseSDKType>;
  /*SkippedEpochs retrieves the total number of skipped epochs.*/

  circulatingSupply(request: QueryCirculatingSupplyRequest): Promise<QueryCirculatingSupplyResponseSDKType>;
  /*CirculatingSupply retrieves the total number of tokens that are in
  circulation (i.e. excluding unvested tokens).*/

  inflationRate(request: QueryInflationRateRequest): Promise<QueryInflationRateResponseSDKType>;
  /*InflationRate retrieves the inflation rate of the current period.*/

  params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
  /*Params retrieves the total set of minting parameters.*/

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

  period(request: QueryPeriodRequest): Promise<QueryPeriodResponseSDKType> {
    const data = QueryPeriodRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.inflation.v1.Query", "Period", data);
    return promise.then(data => QueryPeriodResponse.decode(new _m0.Reader(data)));
  }

  epochMintProvision(request: QueryEpochMintProvisionRequest): Promise<QueryEpochMintProvisionResponseSDKType> {
    const data = QueryEpochMintProvisionRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.inflation.v1.Query", "EpochMintProvision", data);
    return promise.then(data => QueryEpochMintProvisionResponse.decode(new _m0.Reader(data)));
  }

  skippedEpochs(request: QuerySkippedEpochsRequest): Promise<QuerySkippedEpochsResponseSDKType> {
    const data = QuerySkippedEpochsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.inflation.v1.Query", "SkippedEpochs", data);
    return promise.then(data => QuerySkippedEpochsResponse.decode(new _m0.Reader(data)));
  }

  circulatingSupply(request: QueryCirculatingSupplyRequest): Promise<QueryCirculatingSupplyResponseSDKType> {
    const data = QueryCirculatingSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.inflation.v1.Query", "CirculatingSupply", data);
    return promise.then(data => QueryCirculatingSupplyResponse.decode(new _m0.Reader(data)));
  }

  inflationRate(request: QueryInflationRateRequest): Promise<QueryInflationRateResponseSDKType> {
    const data = QueryInflationRateRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.inflation.v1.Query", "InflationRate", data);
    return promise.then(data => QueryInflationRateResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.inflation.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

}