import { EpochInfo } from "./genesis";
import { LCDClient } from "@osmonauts/lcd";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
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

  /* EpochInfos provide running epochInfos */
  async epochInfos(_params: QueryEpochsInfoRequest = {}): Promise<QueryEpochsInfoResponse> {
    const endpoint = `osmosis/epochs/v1beta1/epochs`;
    return await this.request<QueryEpochsInfoResponse>(endpoint);
  }

  /* CurrentEpoch provide current epoch of specified identifier */
  async currentEpoch(params: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.identifier !== "undefined") {
      options.params.identifier = params.identifier;
    }

    const endpoint = `osmosis/epochs/v1beta1/current_epoch`;
    return await this.request<QueryCurrentEpochResponse>(endpoint, options);
  }

}