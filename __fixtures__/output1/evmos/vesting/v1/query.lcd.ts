import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { LCDClient } from "@osmonauts/lcd";
import { QueryBalancesRequest, QueryBalancesResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Retrieves the unvested, vested and locked tokens for a vesting account */
  async balances(params: QueryBalancesRequest): Promise<QueryBalancesResponse> {
    const endpoint = `evmos/vesting/v1/balances/${params.address}`;
    return await this.request<QueryBalancesResponse>(endpoint);
  }

}