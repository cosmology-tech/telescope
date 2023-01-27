import { FeeToken, FeeTokenSDKType } from "./feetoken";
import * as fm from "../../../grpc-gateway";
import { QueryFeeTokensRequest, QueryFeeTokensRequestSDKType, QueryFeeTokensResponse, QueryFeeTokensResponseSDKType, QueryDenomSpotPriceRequest, QueryDenomSpotPriceRequestSDKType, QueryDenomSpotPriceResponse, QueryDenomSpotPriceResponseSDKType, QueryDenomPoolIdRequest, QueryDenomPoolIdRequestSDKType, QueryDenomPoolIdResponse, QueryDenomPoolIdResponseSDKType, QueryBaseDenomRequest, QueryBaseDenomRequestSDKType, QueryBaseDenomResponse, QueryBaseDenomResponseSDKType } from "./query";
export class Query {
  static FeeTokens(request: QueryFeeTokensRequest, initRequest?: fm.InitReq): Promise<QueryFeeTokensResponse> {
    return fm.fetchReq(`/osmosis/txfees/v1beta1/fee_tokens?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static DenomSpotPrice(request: QueryDenomSpotPriceRequest, initRequest?: fm.InitReq): Promise<QueryDenomSpotPriceResponse> {
    return fm.fetchReq(`/osmosis/txfees/v1beta1/spot_price_by_denom?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static DenomPoolId(request: QueryDenomPoolIdRequest, initRequest?: fm.InitReq): Promise<QueryDenomPoolIdResponse> {
    return fm.fetchReq(`/osmosis/txfees/v1beta1/denom_pool_id/${request["denom"]}?${fm.renderURLSearchParams({ ...request
    }, ["denom"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static BaseDenom(request: QueryBaseDenomRequest, initRequest?: fm.InitReq): Promise<QueryBaseDenomResponse> {
    return fm.fetchReq(`/osmosis/txfees/v1beta1/base_denom?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}