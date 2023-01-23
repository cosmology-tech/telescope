import { EpochInfo, EpochInfoSDKType } from "./genesis";
import * as fm from "../../grpc-gateway";
import { QueryEpochsInfoRequest, QueryEpochsInfoRequestSDKType, QueryEpochsInfoResponse, QueryEpochsInfoResponseSDKType, QueryCurrentEpochRequest, QueryCurrentEpochRequestSDKType, QueryCurrentEpochResponse, QueryCurrentEpochResponseSDKType } from "./query";
export class Query {
  static EpochInfos(request: QueryEpochsInfoRequest, initRequest?: fm.InitReq): Promise<QueryEpochsInfoResponse> {
    return fm.fetchReq(`/osmosis/epochs/v1beta1/epochs?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static CurrentEpoch(request: QueryCurrentEpochRequest, initRequest?: fm.InitReq): Promise<QueryCurrentEpochResponse> {
    return fm.fetchReq(`/osmosis/epochs/v1beta1/current_epoch?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}