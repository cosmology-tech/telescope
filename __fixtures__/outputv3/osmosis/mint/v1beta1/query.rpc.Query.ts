import { Params, ParamsSDKType } from "./mint";
import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryEpochProvisionsRequest, QueryEpochProvisionsRequestSDKType, QueryEpochProvisionsResponse, QueryEpochProvisionsResponseSDKType } from "./query";
export class Query {
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/osmosis/mint/v1beta1/params?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static EpochProvisions(request: QueryEpochProvisionsRequest, initRequest?: fm.InitReq): Promise<QueryEpochProvisionsResponse> {
    return fm.fetchReq(`/osmosis/mint/v1beta1/epoch_provisions?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}