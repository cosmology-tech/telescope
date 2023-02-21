import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./audit";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryAllProvidersAttributesRequest, QueryAllProvidersAttributesRequestSDKType, QueryProvidersResponse, QueryProvidersResponseSDKType, QueryProviderAttributesRequest, QueryProviderAttributesRequestSDKType, QueryProviderAuditorRequest, QueryProviderAuditorRequestSDKType, QueryAuditorAttributesRequest, QueryAuditorAttributesRequestSDKType } from "./query";

/** Query defines the gRPC querier service */
export interface Query {
  /**
   * AllProvidersAttributes queries all providers
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  allProvidersAttributes(request?: DeepPartial<QueryAllProvidersAttributesRequest>, metadata?: grpc.Metadata): Promise<QueryProvidersResponse>;

  /**
   * ProviderAttributes queries all provider signed attributes
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  providerAttributes(request: DeepPartial<QueryProviderAttributesRequest>, metadata?: grpc.Metadata): Promise<QueryProvidersResponse>;

  /**
   * ProviderAuditorAttributes queries provider signed attributes by specific auditor
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  providerAuditorAttributes(request: DeepPartial<QueryProviderAuditorRequest>, metadata?: grpc.Metadata): Promise<QueryProvidersResponse>;

  /**
   * AuditorAttributes queries all providers signed by this auditor
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  auditorAttributes(request: DeepPartial<QueryAuditorAttributesRequest>, metadata?: grpc.Metadata): Promise<QueryProvidersResponse>;
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

  allProvidersAttributes(request: DeepPartial<QueryAllProvidersAttributesRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryProvidersResponse> {
    return this.rpc.unary(QueryAllProvidersAttributesDesc, QueryAllProvidersAttributesRequest.fromPartial(request), metadata);
  }

  providerAttributes(request: DeepPartial<QueryProviderAttributesRequest>, metadata?: grpc.Metadata): Promise<QueryProvidersResponse> {
    return this.rpc.unary(QueryProviderAttributesDesc, QueryProviderAttributesRequest.fromPartial(request), metadata);
  }

  providerAuditorAttributes(request: DeepPartial<QueryProviderAuditorRequest>, metadata?: grpc.Metadata): Promise<QueryProvidersResponse> {
    return this.rpc.unary(QueryProviderAuditorDesc, QueryProviderAuditorRequest.fromPartial(request), metadata);
  }

  auditorAttributes(request: DeepPartial<QueryAuditorAttributesRequest>, metadata?: grpc.Metadata): Promise<QueryProvidersResponse> {
    return this.rpc.unary(QueryAuditorAttributesDesc, QueryAuditorAttributesRequest.fromPartial(request), metadata);
  }

}