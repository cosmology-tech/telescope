import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./provider";
import * as fm from "../../../grpc-gateway";
import { QueryProvidersRequest, QueryProvidersRequestSDKType, QueryProvidersResponse, QueryProvidersResponseSDKType, QueryProviderRequest, QueryProviderRequestSDKType, QueryProviderResponse, QueryProviderResponseSDKType } from "./query";
export class Query {
  // Providers queries providers
  static Providers(request: QueryProvidersRequest, initRequest?: fm.InitReq): Promise<QueryProvidersResponse> {
    return fm.fetchReq(`/akash/provider/v1beta2/providers?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  // Provider queries provider details
  static Provider(request: QueryProviderRequest, initRequest?: fm.InitReq): Promise<QueryProviderResponse> {
    return fm.fetchReq(`/akash/provider/v1beta2/providers/${request["owner"]}?${fm.renderURLSearchParams({ ...request
    }, ["owner"])}`, { ...initRequest,
      method: "GET"
    });
  }

}