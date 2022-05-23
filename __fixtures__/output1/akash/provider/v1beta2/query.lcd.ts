import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider } from "./provider";
import { LCDClient } from "@osmonauts/lcd";
import { QueryProvidersRequest, QueryProvidersResponse, QueryProviderRequest, QueryProviderResponse } from "./query";
export class QueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Providers queries providers */
  async providers(params: QueryProvidersRequest): Promise<QueryProvidersResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `akash/provider/v1beta2/providers/`;
    return await this.request(endpoint, options);
  }

  /* Provider queries provider details */
  async provider(params: QueryProviderRequest): Promise<QueryProviderResponse> {
    const endpoint = `akash/provider/v1beta2/providers/${params.owner}`;
    return await this.request(endpoint);
  }

}