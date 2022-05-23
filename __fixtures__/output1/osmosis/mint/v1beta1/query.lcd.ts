import { Params } from "./mint";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryEpochProvisionsRequest, QueryEpochProvisionsResponse } from "./query";
export class QueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Params returns the total set of minting parameters. */
  async params(params: QueryParamsRequest): Promise<QueryParamsResponse> {
    const endpoint = `osmosis/mint/v1beta1/params/`;
    return await this.request(endpoint);
  }

  /* EpochProvisions current minting epoch provisions value. */
  async epochProvisions(params: QueryEpochProvisionsRequest): Promise<QueryEpochProvisionsResponse> {
    const endpoint = `osmosis/mint/v1beta1/epoch_provisions/`;
    return await this.request(endpoint);
  }

}