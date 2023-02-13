import { Order, OrderSDKType, Counterparty, CounterpartySDKType } from "../../channel/v1/channel";
import * as fm from "../../../../grpc-gateway";
import { QueryAppVersionRequest, QueryAppVersionRequestSDKType, QueryAppVersionResponse, QueryAppVersionResponseSDKType } from "./query";
export class Query {
  /** AppVersion queries an IBC Port and determines the appropriate application version to be used */
  static AppVersion(request: QueryAppVersionRequest, initRequest?: fm.InitReq): Promise<QueryAppVersionResponse> {
    return fm.fetchReq(`ibc.core.port.v1.AppVersion?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}