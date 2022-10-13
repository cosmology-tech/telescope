import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryProvidersRequest, QueryProvidersResponse, QueryProviderRequest, QueryProviderResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Providers queries providers */


  providers = async (params: QueryProvidersRequest = {
    pagination: undefined
  }): Promise<QueryProvidersResponse> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/provider/v1beta2/providers`;
    return await this.req.get<QueryProvidersResponse>(endpoint, options);
  };
  /* Provider queries provider details */

  provider = async (params: QueryProviderRequest): Promise<QueryProviderResponse> => {
    const endpoint = `akash/provider/v1beta2/providers/${params.owner}`;
    return await this.req.get<QueryProviderResponse>(endpoint);
  };
}