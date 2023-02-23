import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./provider";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryProvidersRequest, QueryProvidersRequestSDKType, QueryProvidersResponse, QueryProvidersResponseSDKType, QueryProviderRequest, QueryProviderRequestSDKType, QueryProviderResponse, QueryProviderResponseSDKType } from "./query";

/** Query defines the gRPC querier service */
export interface Query {
  /** Providers queries providers */
  Providers(request?: DeepPartial<QueryProvidersRequest>, metadata?: grpc.Metadata): Promise<QueryProvidersResponse>;

  /** Provider queries provider details */
  Provider(request: DeepPartial<QueryProviderRequest>, metadata?: grpc.Metadata): Promise<QueryProviderResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.providers = this.providers.bind(this);
    this.provider = this.provider.bind(this);
  }

  providers(request: DeepPartial<QueryProvidersRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryProvidersResponse> {
    return this.rpc.unary(QueryProvidersDesc, QueryProvidersRequest.fromPartial(request), metadata);
  }

  provider(request: DeepPartial<QueryProviderRequest>, metadata?: grpc.Metadata): Promise<QueryProviderResponse> {
    return this.rpc.unary(QueryProviderDesc, QueryProviderRequest.fromPartial(request), metadata);
  }

}