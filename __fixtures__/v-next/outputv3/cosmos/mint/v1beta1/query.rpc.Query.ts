import { Params, ParamsSDKType } from "./mint";
import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryInflationRequest, QueryInflationRequestSDKType, QueryInflationResponse, QueryInflationResponseSDKType, QueryAnnualProvisionsRequest, QueryAnnualProvisionsRequestSDKType, QueryAnnualProvisionsResponse, QueryAnnualProvisionsResponseSDKType } from "./query";
export class Query {
  /** Params returns the total set of minting parameters. */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/mint/v1beta1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Inflation returns the current minting inflation value. */
  static Inflation(request: QueryInflationRequest, initRequest?: fm.InitReq): Promise<QueryInflationResponse> {
    return fm.fetchReq(`/cosmos/mint/v1beta1/inflation?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** AnnualProvisions current minting annual provisions value. */
  static AnnualProvisions(request: QueryAnnualProvisionsRequest, initRequest?: fm.InitReq): Promise<QueryAnnualProvisionsResponse> {
    return fm.fetchReq(`/cosmos/mint/v1beta1/annual_provisions?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class Querier {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** Params returns the total set of minting parameters. */
  async Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.Params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Inflation returns the current minting inflation value. */
  async Inflation(req: QueryInflationRequest, headers?: HeadersInit): Promise<QueryInflationResponse> {
    return Query.Inflation(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** AnnualProvisions current minting annual provisions value. */
  async AnnualProvisions(req: QueryAnnualProvisionsRequest, headers?: HeadersInit): Promise<QueryAnnualProvisionsResponse> {
    return Query.AnnualProvisions(req, {
      headers,
      pathPrefix: this.url
    });
  }
}