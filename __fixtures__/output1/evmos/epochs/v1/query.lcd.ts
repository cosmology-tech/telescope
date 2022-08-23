import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo } from "./genesis";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* EpochInfos provide running epochInfos */
  async epochInfos(params: QueryEpochsInfoRequest = {
    pagination: undefined
  }): Promise<QueryEpochsInfoResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `evmos/epochs/v1/epochs`;
    return await this.request<QueryEpochsInfoResponse>(endpoint, options);
  }

  /* CurrentEpoch provide current epoch of specified identifier */
  async currentEpoch(params: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.identifier !== "undefined") {
      options.params.identifier = params.identifier;
    }

    const endpoint = `evmos/epochs/v1/current_epoch`;
    return await this.request<QueryCurrentEpochResponse>(endpoint, options);
  }

}