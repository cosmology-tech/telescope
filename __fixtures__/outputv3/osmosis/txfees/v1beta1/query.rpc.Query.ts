import { FeeToken, FeeTokenSDKType } from "./feetoken";
import * as fm from "../../../grpc-gateway";
import { QueryFeeTokensRequest, QueryFeeTokensRequestSDKType, QueryFeeTokensResponse, QueryFeeTokensResponseSDKType, QueryDenomSpotPriceRequest, QueryDenomSpotPriceRequestSDKType, QueryDenomSpotPriceResponse, QueryDenomSpotPriceResponseSDKType, QueryDenomPoolIdRequest, QueryDenomPoolIdRequestSDKType, QueryDenomPoolIdResponse, QueryDenomPoolIdResponseSDKType, QueryBaseDenomRequest, QueryBaseDenomRequestSDKType, QueryBaseDenomResponse, QueryBaseDenomResponseSDKType } from "./query";
export class Query {
  // FeeTokens returns a list of all the whitelisted fee tokens and their
 corresponding pools. It does not include the BaseDenom, which has its own
 query endpoint
  static FeeTokens(request: QueryFeeTokensRequest, initRequest?: fm.InitReq): Promise<QueryFeeTokensResponse> {
    return fm.fetchReq(`/osmosis/txfees/v1beta1/fee_tokens?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  // DenomSpotPrice returns all spot prices by each registered token denom.
  static DenomSpotPrice(request: QueryDenomSpotPriceRequest, initRequest?: fm.InitReq): Promise<QueryDenomSpotPriceResponse> {
    return fm.fetchReq(`/osmosis/txfees/v1beta1/spot_price_by_denom?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  // Returns the poolID for a specified denom input.
  static DenomPoolId(request: QueryDenomPoolIdRequest, initRequest?: fm.InitReq): Promise<QueryDenomPoolIdResponse> {
    return fm.fetchReq(`/osmosis/txfees/v1beta1/denom_pool_id/${request["denom"]}?${fm.renderURLSearchParams({ ...request
    }, ["denom"])}`, { ...initRequest,
      method: "GET"
    });
  }

  // Returns a list of all base denom tokens and their corresponding pools.
  static BaseDenom(request: QueryBaseDenomRequest, initRequest?: fm.InitReq): Promise<QueryBaseDenomResponse> {
    return fm.fetchReq(`/osmosis/txfees/v1beta1/base_denom?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}