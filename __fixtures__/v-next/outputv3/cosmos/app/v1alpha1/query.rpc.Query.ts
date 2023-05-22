import { Config, ConfigSDKType } from "./config";
import * as fm from "../../../grpc-gateway";
import { QueryConfigRequest, QueryConfigRequestSDKType, QueryConfigResponse, QueryConfigResponseSDKType } from "./query";
export class Query {
  /** Config returns the current app config. */
  static Config(request: QueryConfigRequest, initRequest?: fm.InitReq): Promise<QueryConfigResponse> {
    return fm.fetchReq(`cosmos.app.v1alpha1.Config?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class Querier {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** Config returns the current app config. */
  async Config(req: QueryConfigRequest, headers?: HeadersInit): Promise<QueryConfigResponse> {
    return Query.Config(req, {
      headers,
      pathPrefix: this.url
    });
  }
}