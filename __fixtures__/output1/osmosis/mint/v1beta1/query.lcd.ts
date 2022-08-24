import { Params } from "./mint";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryEpochProvisionsRequest, QueryEpochProvisionsResponse } from "./query";
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

  /* Params returns the total set of minting parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `osmosis/mint/v1beta1/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

  /* EpochProvisions current minting epoch provisions value. */
  async epochProvisions(_params: QueryEpochProvisionsRequest = {}): Promise<QueryEpochProvisionsResponse> {
    const endpoint = `osmosis/mint/v1beta1/epoch_provisions`;
    return await this.request<QueryEpochProvisionsResponse>(endpoint);
  }

}