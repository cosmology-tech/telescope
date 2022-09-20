import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { LCDClient } from "@osmonauts/lcd";
import { QueryBalancesRequest, QueryBalancesRequestSDKType, QueryBalancesResponse, QueryBalancesResponseSDKType } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }

  /* Retrieves the unvested, vested and locked tokens for a vesting account */
  async balances(params: QueryBalancesRequest): Promise<QueryBalancesResponseSDKType> {
    const endpoint = `evmos/vesting/v1/balances/${params.address}`;
    return await this.get<QueryBalancesResponseSDKType>(endpoint);
  }

}