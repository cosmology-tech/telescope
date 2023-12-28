import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./provider";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryProvidersRequest, QueryProvidersRequestSDKType, QueryProvidersResponse, QueryProvidersResponseSDKType, QueryProviderRequest, QueryProviderRequestSDKType, QueryProviderResponse, QueryProviderResponseSDKType } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** Providers queries providers */
  providers(request?: QueryProvidersRequest): Promise<QueryProvidersResponse>;
  /** Provider queries provider details */
  provider(request: QueryProviderRequest): Promise<QueryProviderResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Providers queries providers */
  providers = async (request: QueryProvidersRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryProvidersResponse> => {
    const data = QueryProvidersRequest.encode(request).finish();
    const promise = this.rpc.request("akash.provider.v1beta2.Query", "Providers", data);
    return promise.then(data => QueryProvidersResponse.decode(new BinaryReader(data)));
  };
  /* Provider queries provider details */
  provider = async (request: QueryProviderRequest): Promise<QueryProviderResponse> => {
    const data = QueryProviderRequest.encode(request).finish();
    const promise = this.rpc.request("akash.provider.v1beta2.Query", "Provider", data);
    return promise.then(data => QueryProviderResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
};