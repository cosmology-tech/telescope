import * as fm from "../../../grpc-gateway";
import { QuerySpotPriceRequest, QuerySpotPriceRequestSDKType, QuerySpotPriceResponse, QuerySpotPriceResponseSDKType } from "./query";
export class Query {
  static SpotPrice(request: QuerySpotPriceRequest, initRequest?: fm.InitReq): Promise<QuerySpotPriceResponse> {
    return fm.fetchReq(`/osmosis/gamm/v2/pools/${request["pool_id"]}/prices?${fm.renderURLSearchParams(request, ["pool_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

}