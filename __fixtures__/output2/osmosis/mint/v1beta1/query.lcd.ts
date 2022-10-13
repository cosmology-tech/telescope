import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryEpochProvisionsRequest, QueryEpochProvisionsResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.epochProvisions = this.epochProvisions.bind(this);
  }
  /* Params returns the total set of minting parameters. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `osmosis/mint/v1beta1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  }
  /* EpochProvisions returns the current minting epoch provisions value. */


  async epochProvisions(_params: QueryEpochProvisionsRequest = {}): Promise<QueryEpochProvisionsResponse> {
    const endpoint = `osmosis/mint/v1beta1/epoch_provisions`;
    return await this.req.get<QueryEpochProvisionsResponse>(endpoint);
  }

}