import { PageRequest, PageRequestAmino, PageRequestAminoType, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseAminoType, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderAmino, ProviderAminoType, ProviderSDKType } from "./audit";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAllProvidersAttributesRequest, QueryAllProvidersAttributesRequestAmino, QueryAllProvidersAttributesRequestAminoType, QueryAllProvidersAttributesRequestSDKType, QueryProvidersResponse, QueryProvidersResponseAmino, QueryProvidersResponseAminoType, QueryProvidersResponseSDKType, QueryProviderAttributesRequest, QueryProviderAttributesRequestAmino, QueryProviderAttributesRequestAminoType, QueryProviderAttributesRequestSDKType, QueryProviderAuditorRequest, QueryProviderAuditorRequestAmino, QueryProviderAuditorRequestAminoType, QueryProviderAuditorRequestSDKType, QueryAuditorAttributesRequest, QueryAuditorAttributesRequestAmino, QueryAuditorAttributesRequestAminoType, QueryAuditorAttributesRequestSDKType } from "./query";

/** Query defines the gRPC querier service */
export interface Query {
  /**
   * AllProvidersAttributes queries all providers
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  allProvidersAttributes(request?: QueryAllProvidersAttributesRequest): Promise<QueryProvidersResponse>;

  /**
   * ProviderAttributes queries all provider signed attributes
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  providerAttributes(request: QueryProviderAttributesRequest): Promise<QueryProvidersResponse>;

  /**
   * ProviderAuditorAttributes queries provider signed attributes by specific auditor
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  providerAuditorAttributes(request: QueryProviderAuditorRequest): Promise<QueryProvidersResponse>;

  /**
   * AuditorAttributes queries all providers signed by this auditor
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  auditorAttributes(request: QueryAuditorAttributesRequest): Promise<QueryProvidersResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.allProvidersAttributes = this.allProvidersAttributes.bind(this);
    this.providerAttributes = this.providerAttributes.bind(this);
    this.providerAuditorAttributes = this.providerAuditorAttributes.bind(this);
    this.auditorAttributes = this.auditorAttributes.bind(this);
  }

  allProvidersAttributes(request: QueryAllProvidersAttributesRequest = {
    pagination: undefined
  }): Promise<QueryProvidersResponse> {
    const data = QueryAllProvidersAttributesRequest.encode(request).finish();
    const promise = this.rpc.request("akash.audit.v1beta2.Query", "AllProvidersAttributes", data);
    return promise.then(data => QueryProvidersResponse.decode(new _m0.Reader(data)));
  }

  providerAttributes(request: QueryProviderAttributesRequest): Promise<QueryProvidersResponse> {
    const data = QueryProviderAttributesRequest.encode(request).finish();
    const promise = this.rpc.request("akash.audit.v1beta2.Query", "ProviderAttributes", data);
    return promise.then(data => QueryProvidersResponse.decode(new _m0.Reader(data)));
  }

  providerAuditorAttributes(request: QueryProviderAuditorRequest): Promise<QueryProvidersResponse> {
    const data = QueryProviderAuditorRequest.encode(request).finish();
    const promise = this.rpc.request("akash.audit.v1beta2.Query", "ProviderAuditorAttributes", data);
    return promise.then(data => QueryProvidersResponse.decode(new _m0.Reader(data)));
  }

  auditorAttributes(request: QueryAuditorAttributesRequest): Promise<QueryProvidersResponse> {
    const data = QueryAuditorAttributesRequest.encode(request).finish();
    const promise = this.rpc.request("akash.audit.v1beta2.Query", "AuditorAttributes", data);
    return promise.then(data => QueryProvidersResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    allProvidersAttributes(request?: QueryAllProvidersAttributesRequest): Promise<QueryProvidersResponse> {
      return queryService.allProvidersAttributes(request);
    },

    providerAttributes(request: QueryProviderAttributesRequest): Promise<QueryProvidersResponse> {
      return queryService.providerAttributes(request);
    },

    providerAuditorAttributes(request: QueryProviderAuditorRequest): Promise<QueryProvidersResponse> {
      return queryService.providerAuditorAttributes(request);
    },

    auditorAttributes(request: QueryAuditorAttributesRequest): Promise<QueryProvidersResponse> {
      return queryService.auditorAttributes(request);
    }

  };
};