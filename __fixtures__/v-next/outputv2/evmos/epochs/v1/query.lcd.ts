import { PageRequest } from "../../../cosmos/base/query/v1beta1/pagination";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponseSDKType, QueryCurrentEpochRequest, QueryCurrentEpochResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.epochInfos = this.epochInfos.bind(this);
    this.currentEpoch = this.currentEpoch.bind(this);
  }
  /* EpochInfos provide running epochInfos */
  async epochInfos(params: QueryEpochsInfoRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryEpochsInfoResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `evmos/epochs/v1/epochs`;
    return await this.req.get<QueryEpochsInfoResponseSDKType>(endpoint, options);
  }
  /* CurrentEpoch provide current epoch of specified identifier */
  async currentEpoch(params: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.identifier !== "undefined") {
      options.params.identifier = params.identifier;
    }
    const endpoint = `evmos/epochs/v1/current_epoch`;
    return await this.req.get<QueryCurrentEpochResponseSDKType>(endpoint, options);
  }
}