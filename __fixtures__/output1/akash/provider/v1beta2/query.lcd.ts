import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider } from "./provider";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import { QueryProvidersRequest, QueryProvidersResponse, QueryProviderRequest, QueryProviderResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }

  /* Providers queries providers */
  async providers(params: QueryProvidersRequest = {
    pagination: undefined
  }): Promise<QueryProvidersResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/provider/v1beta2/providers`;
    return await this.request<QueryProvidersResponse>(endpoint, options);
  }

  /* Provider queries provider details */
  async provider(params: QueryProviderRequest): Promise<QueryProviderResponse> {
    const endpoint = `akash/provider/v1beta2/providers/${params.owner}`;
    return await this.request<QueryProviderResponse>(endpoint);
  }

}