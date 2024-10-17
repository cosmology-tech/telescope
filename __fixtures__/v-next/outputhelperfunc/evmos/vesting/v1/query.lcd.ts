import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { LCDClient } from "@cosmology/lcd";
import { QueryBalancesRequest, QueryBalancesRequestSDKType, QueryBalancesResponse, QueryBalancesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Retrieves the unvested, vested and locked tokens for a vesting account */
  balances = async (params: QueryBalancesRequest): Promise<QueryBalancesResponseSDKType> => {
    const endpoint = `evmos/vesting/v1/balances/${params.address}`;
    return QueryBalancesResponse.fromSDKJSON(await this.req.get<QueryBalancesResponseSDKType>(endpoint));
  };
}