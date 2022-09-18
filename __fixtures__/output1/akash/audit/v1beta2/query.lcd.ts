import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./audit";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryAllProvidersAttributesRequest, QueryAllProvidersAttributesRequestSDKType, QueryProvidersResponse, QueryProvidersResponseSDKType, QueryProviderAttributesRequest, QueryProviderAttributesRequestSDKType, QueryProviderAuditorRequest, QueryProviderAuditorRequestSDKType, QueryAuditorAttributesRequest, QueryAuditorAttributesRequestSDKType } from "./query";
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

  /* AllProvidersAttributes queries all providers
  buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
  buf:lint:ignore RPC_RESPONSE_STANDARD_NAME */
  async allProvidersAttributes(params: QueryAllProvidersAttributesRequest = {
    pagination: undefined
  }): Promise<QueryProvidersResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/audit/v1beta2/audit/attributes/list`;
    return await this.get<QueryProvidersResponse>(endpoint, options);
  }

  /* ProviderAttributes queries all provider signed attributes
  buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
  buf:lint:ignore RPC_RESPONSE_STANDARD_NAME */
  async providerAttributes(params: QueryProviderAttributesRequest): Promise<QueryProvidersResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/audit/v1beta2/audit/attributes/${params.owner}/list`;
    return await this.get<QueryProvidersResponse>(endpoint, options);
  }

  /* ProviderAuditorAttributes queries provider signed attributes by specific auditor
  buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
  buf:lint:ignore RPC_RESPONSE_STANDARD_NAME */
  async providerAuditorAttributes(params: QueryProviderAuditorRequest): Promise<QueryProvidersResponse> {
    const endpoint = `akash/audit/v1beta2/audit/attributes/${params.auditor}/${params.owner}`;
    return await this.get<QueryProvidersResponse>(endpoint);
  }

  /* AuditorAttributes queries all providers signed by this auditor
  buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
  buf:lint:ignore RPC_RESPONSE_STANDARD_NAME */
  async auditorAttributes(params: QueryAuditorAttributesRequest): Promise<QueryProvidersResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/provider/v1beta2/auditor/${params.auditor}/list`;
    return await this.get<QueryProvidersResponse>(endpoint, options);
  }

}