import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as fm from "../../../grpc-gateway";
import { QueryBalancesRequest, QueryBalancesRequestSDKType, QueryBalancesResponse, QueryBalancesResponseSDKType } from "./query";
export class Query {
  /** Retrieves the unvested, vested and locked tokens for a vesting account */
  static Balances(request: QueryBalancesRequest, initRequest?: fm.InitReq): Promise<QueryBalancesResponse> {
    return fm.fetchReq(`/evmos/vesting/v1/balances/${request["address"]}?${fm.renderURLSearchParams({ ...request
    }, ["address"])}`, { ...initRequest,
      method: "GET"
    });
  }

}