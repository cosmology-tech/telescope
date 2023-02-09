import { Params, ParamsSDKType } from "./mint";
import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryEpochProvisionsRequest, QueryEpochProvisionsRequestSDKType, QueryEpochProvisionsResponse, QueryEpochProvisionsResponseSDKType } from "./query";
export class Query {
  // Params returns the total set of minting parameters.
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/osmosis/mint/v1beta1/params?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  // EpochProvisions returns the current minting epoch provisions value.
  static EpochProvisions(request: QueryEpochProvisionsRequest, initRequest?: fm.InitReq): Promise<QueryEpochProvisionsResponse> {
    return fm.fetchReq(`/osmosis/mint/v1beta1/epoch_provisions?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}