import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsSDKType, Metadata, MetadataSDKType } from "./bank";
import * as fm from "../../../grpc-gateway";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesRequestSDKType, QueryAllBalancesResponse, QueryAllBalancesResponseSDKType, QuerySpendableBalancesRequest, QuerySpendableBalancesRequestSDKType, QuerySpendableBalancesResponse, QuerySpendableBalancesResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyRequestSDKType, QueryTotalSupplyResponse, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfRequestSDKType, QuerySupplyOfResponse, QuerySupplyOfResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDenomMetadataRequest, QueryDenomMetadataRequestSDKType, QueryDenomMetadataResponse, QueryDenomMetadataResponseSDKType, QueryDenomsMetadataRequest, QueryDenomsMetadataRequestSDKType, QueryDenomsMetadataResponse, QueryDenomsMetadataResponseSDKType, QueryDenomOwnersRequest, QueryDenomOwnersRequestSDKType, QueryDenomOwnersResponse, QueryDenomOwnersResponseSDKType } from "./query";
export class Query {
  /** Balance queries the balance of a single coin for a single account. */
  static Balance(request: QueryBalanceRequest, initRequest?: fm.InitReq): Promise<QueryBalanceResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/balances/${request["address"]}/by_denom?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** AllBalances queries the balance of all coins for a single account. */
  static AllBalances(request: QueryAllBalancesRequest, initRequest?: fm.InitReq): Promise<QueryAllBalancesResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/balances/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * SpendableBalances queries the spenable balance of all coins for a single
   * account.
   */
  static SpendableBalances(request: QuerySpendableBalancesRequest, initRequest?: fm.InitReq): Promise<QuerySpendableBalancesResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/spendable_balances/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** TotalSupply queries the total supply of all coins. */
  static TotalSupply(request: QueryTotalSupplyRequest, initRequest?: fm.InitReq): Promise<QueryTotalSupplyResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/supply?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** SupplyOf queries the supply of a single coin. */
  static SupplyOf(request: QuerySupplyOfRequest, initRequest?: fm.InitReq): Promise<QuerySupplyOfResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/supply/by_denom?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Params queries the parameters of x/bank module. */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** DenomsMetadata queries the client metadata of a given coin denomination. */
  static DenomMetadata(request: QueryDenomMetadataRequest, initRequest?: fm.InitReq): Promise<QueryDenomMetadataResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/denoms_metadata/${request["denom"]}?${fm.renderURLSearchParams({
      ...request
    }, ["denom"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * DenomsMetadata queries the client metadata for all registered coin
   * denominations.
   */
  static DenomsMetadata(request: QueryDenomsMetadataRequest, initRequest?: fm.InitReq): Promise<QueryDenomsMetadataResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/denoms_metadata?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * DenomOwners queries for all account addresses that own a particular token
   * denomination.
   */
  static DenomOwners(request: QueryDenomOwnersRequest, initRequest?: fm.InitReq): Promise<QueryDenomOwnersResponse> {
    return fm.fetchReq(`/cosmos/bank/v1beta1/denom_owners/${request["denom"]}?${fm.renderURLSearchParams({
      ...request
    }, ["denom"])}`, {
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
  /** Balance queries the balance of a single coin for a single account. */
  async Balance(req: QueryBalanceRequest, headers?: HeadersInit): Promise<QueryBalanceResponse> {
    return Query.Balance(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** AllBalances queries the balance of all coins for a single account. */
  async AllBalances(req: QueryAllBalancesRequest, headers?: HeadersInit): Promise<QueryAllBalancesResponse> {
    return Query.AllBalances(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * SpendableBalances queries the spenable balance of all coins for a single
   * account.
   */
  async SpendableBalances(req: QuerySpendableBalancesRequest, headers?: HeadersInit): Promise<QuerySpendableBalancesResponse> {
    return Query.SpendableBalances(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** TotalSupply queries the total supply of all coins. */
  async TotalSupply(req: QueryTotalSupplyRequest, headers?: HeadersInit): Promise<QueryTotalSupplyResponse> {
    return Query.TotalSupply(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** SupplyOf queries the supply of a single coin. */
  async SupplyOf(req: QuerySupplyOfRequest, headers?: HeadersInit): Promise<QuerySupplyOfResponse> {
    return Query.SupplyOf(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Params queries the parameters of x/bank module. */
  async Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.Params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** DenomsMetadata queries the client metadata of a given coin denomination. */
  async DenomMetadata(req: QueryDenomMetadataRequest, headers?: HeadersInit): Promise<QueryDenomMetadataResponse> {
    return Query.DenomMetadata(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * DenomsMetadata queries the client metadata for all registered coin
   * denominations.
   */
  async DenomsMetadata(req: QueryDenomsMetadataRequest, headers?: HeadersInit): Promise<QueryDenomsMetadataResponse> {
    return Query.DenomsMetadata(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * DenomOwners queries for all account addresses that own a particular token
   * denomination.
   */
  async DenomOwners(req: QueryDenomOwnersRequest, headers?: HeadersInit): Promise<QueryDenomOwnersResponse> {
    return Query.DenomOwners(req, {
      headers,
      pathPrefix: this.url
    });
  }
}