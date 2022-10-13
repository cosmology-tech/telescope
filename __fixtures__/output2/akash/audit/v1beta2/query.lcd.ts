import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryAllProvidersAttributesRequest, QueryProvidersResponse, QueryProviderAttributesRequest, QueryProviderAuditorRequest, QueryAuditorAttributesRequest } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* AllProvidersAttributes queries all providers
   buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   buf:lint:ignore RPC_RESPONSE_STANDARD_NAME */


  allProvidersAttributes = async (params: QueryAllProvidersAttributesRequest = {
    pagination: undefined
  }): Promise<QueryProvidersResponse> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/audit/v1beta2/audit/attributes/list`;
    return await this.req.get<QueryProvidersResponse>(endpoint, options);
  };
  /* ProviderAttributes queries all provider signed attributes
   buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   buf:lint:ignore RPC_RESPONSE_STANDARD_NAME */

  providerAttributes = async (params: QueryProviderAttributesRequest): Promise<QueryProvidersResponse> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/audit/v1beta2/audit/attributes/${params.owner}/list`;
    return await this.req.get<QueryProvidersResponse>(endpoint, options);
  };
  /* ProviderAuditorAttributes queries provider signed attributes by specific auditor
   buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   buf:lint:ignore RPC_RESPONSE_STANDARD_NAME */

  providerAuditorAttributes = async (params: QueryProviderAuditorRequest): Promise<QueryProvidersResponse> => {
    const endpoint = `akash/audit/v1beta2/audit/attributes/${params.auditor}/${params.owner}`;
    return await this.req.get<QueryProvidersResponse>(endpoint);
  };
  /* AuditorAttributes queries all providers signed by this auditor
   buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   buf:lint:ignore RPC_RESPONSE_STANDARD_NAME */

  auditorAttributes = async (params: QueryAuditorAttributesRequest): Promise<QueryProvidersResponse> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/provider/v1beta2/auditor/${params.auditor}/list`;
    return await this.req.get<QueryProvidersResponse>(endpoint, options);
  };
}