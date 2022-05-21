import { EpochInfo } from "./genesis";
import { LCDClient } from "@osmonauts/lcd";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
export class QueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* EpochInfos provide running epochInfos */
  async epochInfos(params: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse> {
    const endpoint = `osmosis/epochs/v1beta1/epochs/`;
    return await this.request(endpoint);
  }

  /* CurrentEpoch provide current epoch of specified identifier */
  async currentEpoch(params: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.identifier !== "undefined") {
      options.params.identifier = params.identifier;
    }

    const endpoint = `osmosis/epochs/v1beta1/current_epoch/`;
    return await this.request(endpoint, options);
  }

}