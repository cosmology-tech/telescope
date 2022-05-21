import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider } from "./audit";
import { LCDClient } from "@osmonauts/helpers";
import { QueryAllProvidersAttributesRequest, QueryProvidersResponse, QueryProviderAttributesRequest, QueryProviderAuditorRequest, QueryAuditorAttributesRequest } from "./query";
export class QueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* AllProvidersAttributes queries all providers
  buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
  buf:lint:ignore RPC_RESPONSE_STANDARD_NAME */
  async allProvidersAttributes(params: QueryAllProvidersAttributesRequest): Promise<QueryProvidersResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `akash/audit/v1beta2/audit/attributes/list/`;
    return await this.request(endpoint, options);
  }

  /* ProviderAttributes queries all provider signed attributes
  buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
  buf:lint:ignore RPC_RESPONSE_STANDARD_NAME */
  async providerAttributes(params: QueryProviderAttributesRequest): Promise<QueryProvidersResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `akash/audit/v1beta2/audit/attributes/${params.owner}/list`;
    return await this.request(endpoint, options);
  }

  /* ProviderAuditorAttributes queries provider signed attributes by specific auditor
  buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
  buf:lint:ignore RPC_RESPONSE_STANDARD_NAME */
  async providerAuditorAttributes(params: QueryProviderAuditorRequest): Promise<QueryProvidersResponse> {
    const endpoint = `akash/audit/v1beta2/audit/attributes/${params.auditor}/${params.owner}`;
    return await this.request(endpoint);
  }

  /* AuditorAttributes queries all providers signed by this auditor
  buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
  buf:lint:ignore RPC_RESPONSE_STANDARD_NAME */
  async auditorAttributes(params: QueryAuditorAttributesRequest): Promise<QueryProvidersResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `akash/provider/v1beta2/auditor/${params.auditor}/list`;
    return await this.request(endpoint, options);
  }

}