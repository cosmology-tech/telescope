import * as fm from "../../../grpc-gateway";
import { QuerySpotPriceRequest, QuerySpotPriceRequestSDKType, QuerySpotPriceResponse, QuerySpotPriceResponseSDKType } from "./query";
export class Query {
  /**
   * SpotPrice defines a gRPC query handler that returns the spot price given
   * a base denomination and a quote denomination.
   */
  static SpotPrice(request: QuerySpotPriceRequest, initRequest?: fm.InitReq): Promise<QuerySpotPriceResponse> {
    return fm.fetchReq(`/osmosis/gamm/v2/pools/${request["pool_id"]}/prices?${fm.renderURLSearchParams({ ...request
    }, ["pool_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

}