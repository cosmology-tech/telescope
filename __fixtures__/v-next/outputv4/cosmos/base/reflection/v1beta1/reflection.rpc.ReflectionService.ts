import { Rpc } from "../../../../helpers.js";
import { BinaryReader } from "../../../../binary.js";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { ListAllInterfacesRequest, ListAllInterfacesRequestSDKType, ListAllInterfacesResponse, ListAllInterfacesResponseSDKType, ListImplementationsRequest, ListImplementationsRequestSDKType, ListImplementationsResponse, ListImplementationsResponseSDKType } from "./reflection.js";
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
    return promise.then(data => ListAllInterfacesResponse.decode(new BinaryReader(data)));
  }
  listImplementations(request: ListImplementationsRequest): Promise<ListImplementationsResponse> {
    const data = ListImplementationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.reflection.v1beta1.ReflectionService", "ListImplementations", data);
    return promise.then(data => ListImplementationsResponse.decode(new BinaryReader(data)));
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