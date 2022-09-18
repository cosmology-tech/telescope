import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./provider";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryProvidersRequest, QueryProvidersRequestSDKType, QueryProvidersResponse, QueryProvidersResponseSDKType, QueryProviderRequest, QueryProviderRequestSDKType, QueryProviderResponse, QueryProviderResponseSDKType } from "./query";
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
    return await this.get<QueryProvidersResponseSDKType>(endpoint, options);
  }

  /* Provider queries provider details */
  async provider(params: QueryProviderRequest): Promise<QueryProviderResponse> {
    const endpoint = `akash/provider/v1beta2/providers/${params.owner}`;
    return await this.get<QueryProviderResponseSDKType>(endpoint);
  }

}