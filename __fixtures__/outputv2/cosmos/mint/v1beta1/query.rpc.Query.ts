import { Params, ParamsSDKType } from "./mint";
import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryInflationRequest, QueryInflationRequestSDKType, QueryInflationResponse, QueryInflationResponseSDKType, QueryAnnualProvisionsRequest, QueryAnnualProvisionsRequestSDKType, QueryAnnualProvisionsResponse, QueryAnnualProvisionsResponseSDKType } from "./query";
export class Query {
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/mint/v1beta1/params?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Inflation(request: QueryInflationRequest, initRequest?: fm.InitReq): Promise<QueryInflationResponse> {
    return fm.fetchReq(`/cosmos/mint/v1beta1/inflation?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static AnnualProvisions(request: QueryAnnualProvisionsRequest, initRequest?: fm.InitReq): Promise<QueryAnnualProvisionsResponse> {
    return fm.fetchReq(`/cosmos/mint/v1beta1/annual_provisions?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}