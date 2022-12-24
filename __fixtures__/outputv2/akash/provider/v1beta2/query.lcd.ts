import { PageRequest, PageRequestAmino, PageRequestAminoType, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseAminoType, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderAmino, ProviderAminoType, ProviderSDKType } from "./provider";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryProvidersRequest, QueryProvidersRequestAmino, QueryProvidersRequestAminoType, QueryProvidersRequestSDKType, QueryProvidersResponse, QueryProvidersResponseAmino, QueryProvidersResponseAminoType, QueryProvidersResponseSDKType, QueryProviderRequest, QueryProviderRequestAmino, QueryProviderRequestAminoType, QueryProviderRequestSDKType, QueryProviderResponse, QueryProviderResponseAmino, QueryProviderResponseAminoType, QueryProviderResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.providers = this.providers.bind(this);
    this.provider = this.provider.bind(this);
  }

  /* Providers queries providers */
  async providers(params: QueryProvidersRequest = {
    pagination: undefined
  }): Promise<QueryProvidersResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/provider/v1beta2/providers`;
    return await this.req.get<QueryProvidersResponseSDKType>(endpoint, options);
  }

  /* Provider queries provider details */
  async provider(params: QueryProviderRequest): Promise<QueryProviderResponseSDKType> {
    const endpoint = `akash/provider/v1beta2/providers/${params.owner}`;
    return await this.req.get<QueryProviderResponseSDKType>(endpoint);
  }

}