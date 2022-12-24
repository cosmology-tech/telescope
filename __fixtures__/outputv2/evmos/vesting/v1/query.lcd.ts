import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { LCDClient } from "@osmonauts/lcd";
import { QueryBalancesRequest, QueryBalancesRequestAmino, QueryBalancesRequestAminoType, QueryBalancesRequestSDKType, QueryBalancesResponse, QueryBalancesResponseAmino, QueryBalancesResponseAminoType, QueryBalancesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.balances = this.balances.bind(this);
  }

  /* Retrieves the unvested, vested and locked tokens for a vesting account */
  async balances(params: QueryBalancesRequest): Promise<QueryBalancesResponseSDKType> {
    const endpoint = `evmos/vesting/v1/balances/${params.address}`;
    return await this.req.get<QueryBalancesResponseSDKType>(endpoint);
  }

}