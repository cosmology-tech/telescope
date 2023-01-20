import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ValidatorSigningInfo, ValidatorSigningInfoSDKType } from "./slashing";
import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QuerySigningInfoRequest, QuerySigningInfoRequestSDKType, QuerySigningInfoResponse, QuerySigningInfoResponseSDKType, QuerySigningInfosRequest, QuerySigningInfosRequestSDKType, QuerySigningInfosResponse, QuerySigningInfosResponseSDKType } from "./query";
export class Query {
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/slashing/v1beta1/params?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static SigningInfo(request: QuerySigningInfoRequest, initRequest?: fm.InitReq): Promise<QuerySigningInfoResponse> {
    return fm.fetchReq(`/cosmos/slashing/v1beta1/signing_infos/${request["cons_address"]}?${fm.renderURLSearchParams(request, ["cons_address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static SigningInfos(request: QuerySigningInfosRequest, initRequest?: fm.InitReq): Promise<QuerySigningInfosResponse> {
    return fm.fetchReq(`/cosmos/slashing/v1beta1/signing_infos?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}