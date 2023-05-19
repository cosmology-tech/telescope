import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as fm from "../../../grpc-gateway";
import { QueryBalancesRequest, QueryBalancesRequestSDKType, QueryBalancesResponse, QueryBalancesResponseSDKType } from "./query";
export class Query {
  /** Retrieves the unvested, vested and locked tokens for a vesting account */
  static Balances(request: QueryBalancesRequest, initRequest?: fm.InitReq): Promise<QueryBalancesResponse> {
    return fm.fetchReq(`/evmos/vesting/v1/balances/${request["address"]}?${fm.renderURLSearchParams({
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
  /** Retrieves the unvested, vested and locked tokens for a vesting account */
  async Balances(req: QueryBalancesRequest, headers?: HeadersInit): Promise<QueryBalancesResponse> {
    return Query.Balances(req, {
      headers,
      pathPrefix: this.url
    });
  }
}