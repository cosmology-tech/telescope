import { Action, ActionSDKType, ClaimRecord, ClaimRecordSDKType } from "./claim";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import * as fm from "../../../grpc-gateway";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceRequestSDKType, QueryModuleAccountBalanceResponse, QueryModuleAccountBalanceResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryClaimRecordRequest, QueryClaimRecordRequestSDKType, QueryClaimRecordResponse, QueryClaimRecordResponseSDKType, QueryClaimableForActionRequest, QueryClaimableForActionRequestSDKType, QueryClaimableForActionResponse, QueryClaimableForActionResponseSDKType, QueryTotalClaimableRequest, QueryTotalClaimableRequestSDKType, QueryTotalClaimableResponse, QueryTotalClaimableResponseSDKType } from "./query";
export class Query {
  static ModuleAccountBalance(request: QueryModuleAccountBalanceRequest, initRequest?: fm.InitReq): Promise<QueryModuleAccountBalanceResponse> {
    return fm.fetchReq(`/osmosis/claim/v1beta1/module_account_balance?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/osmosis/claim/v1beta1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static ClaimRecord(request: QueryClaimRecordRequest, initRequest?: fm.InitReq): Promise<QueryClaimRecordResponse> {
    return fm.fetchReq(`/osmosis/claim/v1beta1/claim_record/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static ClaimableForAction(request: QueryClaimableForActionRequest, initRequest?: fm.InitReq): Promise<QueryClaimableForActionResponse> {
    return fm.fetchReq(`/osmosis/claim/v1beta1/claimable_for_action/${request["address"]}/{action}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static TotalClaimable(request: QueryTotalClaimableRequest, initRequest?: fm.InitReq): Promise<QueryTotalClaimableResponse> {
    return fm.fetchReq(`/osmosis/claim/v1beta1/total_claimable/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
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
  async ModuleAccountBalance(req: QueryModuleAccountBalanceRequest, headers?: HeadersInit): Promise<QueryModuleAccountBalanceResponse> {
    return Query.ModuleAccountBalance(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.Params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async ClaimRecord(req: QueryClaimRecordRequest, headers?: HeadersInit): Promise<QueryClaimRecordResponse> {
    return Query.ClaimRecord(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async ClaimableForAction(req: QueryClaimableForActionRequest, headers?: HeadersInit): Promise<QueryClaimableForActionResponse> {
    return Query.ClaimableForAction(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async TotalClaimable(req: QueryTotalClaimableRequest, headers?: HeadersInit): Promise<QueryTotalClaimableResponse> {
    return Query.TotalClaimable(req, {
      headers,
      pathPrefix: this.url
    });
  }
}