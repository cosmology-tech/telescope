import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./audit";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryAllProvidersAttributesRequest, QueryAllProvidersAttributesRequestSDKType, QueryProvidersResponse, QueryProvidersResponseSDKType, QueryProviderAttributesRequest, QueryProviderAttributesRequestSDKType, QueryProviderAuditorRequest, QueryProviderAuditorRequestSDKType, QueryAuditorAttributesRequest, QueryAuditorAttributesRequestSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }

  allProvidersAttributes = async (params: QueryAllProvidersAttributesRequest = {
    pagination: undefined
  }): Promise<QueryProvidersResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/audit/v1beta2/audit/attributes/list`;
    return await this.req.get<QueryProvidersResponseSDKType>(endpoint, options);
  };
  providerAttributes = async (params: QueryProviderAttributesRequest): Promise<QueryProvidersResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/audit/v1beta2/audit/attributes/${params.owner}/list`;
    return await this.req.get<QueryProvidersResponseSDKType>(endpoint, options);
  };
  providerAuditorAttributes = async (params: QueryProviderAuditorRequest): Promise<QueryProvidersResponseSDKType> => {
    const endpoint = `akash/audit/v1beta2/audit/attributes/${params.auditor}/${params.owner}`;
    return await this.req.get<QueryProvidersResponseSDKType>(endpoint);
  };
  auditorAttributes = async (params: QueryAuditorAttributesRequest): Promise<QueryProvidersResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/provider/v1beta2/auditor/${params.auditor}/list`;
    return await this.req.get<QueryProvidersResponseSDKType>(endpoint, options);
  };
}