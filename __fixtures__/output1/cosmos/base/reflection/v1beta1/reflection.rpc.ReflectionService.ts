import { Rpc } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { ListAllInterfacesRequest, ListAllInterfacesRequestSDKType, ListAllInterfacesResponse, ListAllInterfacesResponseSDKType, ListImplementationsRequest, ListImplementationsRequestSDKType, ListImplementationsResponse, ListImplementationsResponseSDKType } from "./reflection";

/** ReflectionService defines a service for interface reflection. */
export interface ReflectionService {
  /**
   * ListAllInterfaces lists all the interfaces registered in the interface
   * registry.
   */
  listAllInterfaces(request?: ListAllInterfacesRequest): Promise<ListAllInterfacesResponse>;

  /**
   * ListImplementations list all the concrete types that implement a given
   * interface.
   */
  listImplementations(request: ListImplementationsRequest): Promise<ListImplementationsResponse>;
}
export class ReflectionServiceClientImpl implements ReflectionService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.listAllInterfaces = this.listAllInterfaces.bind(this);
    this.listImplementations = this.listImplementations.bind(this);
  }

  listAllInterfaces(request: ListAllInterfacesRequest = {}): Promise<ListAllInterfacesResponse> {
    const data = ListAllInterfacesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.reflection.v1beta1.ReflectionService", "ListAllInterfaces", data);
    return promise.then(data => ListAllInterfacesResponse.decode(new _m0.Reader(data)));
  }

  listImplementations(request: ListImplementationsRequest): Promise<ListImplementationsResponse> {
    const data = ListImplementationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.reflection.v1beta1.ReflectionService", "ListImplementations", data);
    return promise.then(data => ListImplementationsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ReflectionServiceClientImpl(rpc);
  return {
    listAllInterfaces(request?: ListAllInterfacesRequest): Promise<ListAllInterfacesResponse> {
      return queryService.listAllInterfaces(request);
    },

    listImplementations(request: ListImplementationsRequest): Promise<ListImplementationsResponse> {
      return queryService.listImplementations(request);
    }

  };
};
export interface UseListAllInterfacesQuery<TData> extends ReactQueryParams<ListAllInterfacesResponse, TData> {
  request?: ListAllInterfacesRequest;
}
export interface UseListImplementationsQuery<TData> extends ReactQueryParams<ListImplementationsResponse, TData> {
  request: ListImplementationsRequest;
}

const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();

const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;

  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }

  const queryService = new QueryClientImpl(rpc);

  _queryClients.set(rpc, queryService);

  return queryService;
};

export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);

  const useListAllInterfaces = ({
    request,
    options
  }: UseListAllInterfacesQuery<TData>) => {
    return useQuery<ListAllInterfacesResponse, Error, TData>(["listAllInterfacesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.listAllInterfaces(request);
    }, options);
  };

  const useListImplementations = ({
    request,
    options
  }: UseListImplementationsQuery<TData>) => {
    return useQuery<ListImplementationsResponse, Error, TData>(["listImplementationsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.listImplementations(request);
    }, options);
  };

  return {
    /**
     * ListAllInterfaces lists all the interfaces registered in the interface
     * registry.
     */
    useListAllInterfaces,

    /**
     * ListImplementations list all the concrete types that implement a given
     * interface.
     */
    useListImplementations
  };
};