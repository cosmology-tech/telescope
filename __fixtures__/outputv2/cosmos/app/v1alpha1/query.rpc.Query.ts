import { Config, ConfigSDKType } from "./config";
import * as fm from "../../../grpc-gateway";
import { QueryConfigRequest, QueryConfigRequestSDKType, QueryConfigResponse, QueryConfigResponseSDKType } from "./query";
export class Query {
  static Config(request?: QueryConfigRequest, initRequest?: fm.InitReq): Promise<QueryConfigResponse> {
    return fm.fetchReq(`cosmos.app.v1alpha1.Config?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}