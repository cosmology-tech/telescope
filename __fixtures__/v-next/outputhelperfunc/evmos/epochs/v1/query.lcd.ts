import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo, EpochInfoSDKType } from "./genesis";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryEpochsInfoRequest, QueryEpochsInfoRequestSDKType, QueryEpochsInfoResponse, QueryEpochsInfoResponseSDKType, QueryCurrentEpochRequest, QueryCurrentEpochRequestSDKType, QueryCurrentEpochResponse, QueryCurrentEpochResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* EpochInfos provide running epochInfos */
  epochInfos = async (params: QueryEpochsInfoRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryEpochsInfoResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `evmos/epochs/v1/epochs`;
    return QueryEpochsInfoResponse.fromSDKJSON(await this.req.get<QueryEpochsInfoResponseSDKType>(endpoint, options));
  };
  /* CurrentEpoch provide current epoch of specified identifier */
  currentEpoch = async (params: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.identifier !== "undefined") {
      options.params.identifier = params.identifier;
    }
    const endpoint = `evmos/epochs/v1/current_epoch`;
    return QueryCurrentEpochResponse.fromSDKJSON(await this.req.get<QueryCurrentEpochResponseSDKType>(endpoint, options));
  };
}