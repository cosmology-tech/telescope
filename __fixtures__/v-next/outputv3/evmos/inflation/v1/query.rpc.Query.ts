import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import * as fm from "../../../grpc-gateway";
import { QueryPeriodRequest, QueryPeriodRequestSDKType, QueryPeriodResponse, QueryPeriodResponseSDKType, QueryEpochMintProvisionRequest, QueryEpochMintProvisionRequestSDKType, QueryEpochMintProvisionResponse, QueryEpochMintProvisionResponseSDKType, QuerySkippedEpochsRequest, QuerySkippedEpochsRequestSDKType, QuerySkippedEpochsResponse, QuerySkippedEpochsResponseSDKType, QueryCirculatingSupplyRequest, QueryCirculatingSupplyRequestSDKType, QueryCirculatingSupplyResponse, QueryCirculatingSupplyResponseSDKType, QueryInflationRateRequest, QueryInflationRateRequestSDKType, QueryInflationRateResponse, QueryInflationRateResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export class Query {
  /** Period retrieves current period. */
  static Period(request: QueryPeriodRequest, initRequest?: fm.InitReq): Promise<QueryPeriodResponse> {
    return fm.fetchReq(`/evmos/inflation/v1/period?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** EpochMintProvision retrieves current minting epoch provision value. */
  static EpochMintProvision(request: QueryEpochMintProvisionRequest, initRequest?: fm.InitReq): Promise<QueryEpochMintProvisionResponse> {
    return fm.fetchReq(`/evmos/inflation/v1/epoch_mint_provision?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** SkippedEpochs retrieves the total number of skipped epochs. */
  static SkippedEpochs(request: QuerySkippedEpochsRequest, initRequest?: fm.InitReq): Promise<QuerySkippedEpochsResponse> {
    return fm.fetchReq(`/evmos/inflation/v1/skipped_epochs?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * CirculatingSupply retrieves the total number of tokens that are in
   * circulation (i.e. excluding unvested tokens).
   */
  static CirculatingSupply(request: QueryCirculatingSupplyRequest, initRequest?: fm.InitReq): Promise<QueryCirculatingSupplyResponse> {
    return fm.fetchReq(`/evmos/inflation/v1/circulating_supply?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** InflationRate retrieves the inflation rate of the current period. */
  static InflationRate(request: QueryInflationRateRequest, initRequest?: fm.InitReq): Promise<QueryInflationRateResponse> {
    return fm.fetchReq(`/evmos/inflation/v1/inflation_rate?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Params retrieves the total set of minting parameters. */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/evmos/inflation/v1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class Querier {
  url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** Period retrieves current period. */
  async Period(req: QueryPeriodRequest, headers?: HeadersInit): Promise<QueryPeriodResponse> {
    return Query.Period(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** EpochMintProvision retrieves current minting epoch provision value. */
  async EpochMintProvision(req: QueryEpochMintProvisionRequest, headers?: HeadersInit): Promise<QueryEpochMintProvisionResponse> {
    return Query.EpochMintProvision(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** SkippedEpochs retrieves the total number of skipped epochs. */
  async SkippedEpochs(req: QuerySkippedEpochsRequest, headers?: HeadersInit): Promise<QuerySkippedEpochsResponse> {
    return Query.SkippedEpochs(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * CirculatingSupply retrieves the total number of tokens that are in
   * circulation (i.e. excluding unvested tokens).
   */
  async CirculatingSupply(req: QueryCirculatingSupplyRequest, headers?: HeadersInit): Promise<QueryCirculatingSupplyResponse> {
    return Query.CirculatingSupply(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** InflationRate retrieves the inflation rate of the current period. */
  async InflationRate(req: QueryInflationRateRequest, headers?: HeadersInit): Promise<QueryInflationRateResponse> {
    return Query.InflationRate(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Params retrieves the total set of minting parameters. */
  async Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.Params(req, {
      headers,
      pathPrefix: this.url
    });
  }
}