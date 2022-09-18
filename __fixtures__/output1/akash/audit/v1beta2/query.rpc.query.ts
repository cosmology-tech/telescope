import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./audit";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryAllProvidersAttributesRequest, QueryAllProvidersAttributesRequestSDKType, QueryProvidersResponse, QueryProvidersResponseSDKType, QueryProviderAttributesRequest, QueryProviderAttributesRequestSDKType, QueryProviderAuditorRequest, QueryProviderAuditorRequestSDKType, QueryAuditorAttributesRequest, QueryAuditorAttributesRequestSDKType } from "./query";

/** Query defines the RPC service */
export interface Query {
  allProvidersAttributes(request: QueryAllProvidersAttributesRequest): Promise<QueryProvidersResponse>;
  /*AllProvidersAttributes queries all providers
  buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
  buf:lint:ignore RPC_RESPONSE_STANDARD_NAME*/

  providerAttributes(request: QueryProviderAttributesRequest): Promise<QueryProvidersResponse>;
  /*ProviderAttributes queries all provider signed attributes
  buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
  buf:lint:ignore RPC_RESPONSE_STANDARD_NAME*/

  providerAuditorAttributes(request: QueryProviderAuditorRequest): Promise<QueryProvidersResponse>;
  /*ProviderAuditorAttributes queries provider signed attributes by specific auditor
  buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
  buf:lint:ignore RPC_RESPONSE_STANDARD_NAME*/

  auditorAttributes(request: QueryAuditorAttributesRequest): Promise<QueryProvidersResponse>;
  /*AuditorAttributes queries all providers signed by this auditor
  buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
  buf:lint:ignore RPC_RESPONSE_STANDARD_NAME*/

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

  allProvidersAttributes(request: QueryAllProvidersAttributesRequest): Promise<QueryProvidersResponse> {
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