import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { ListAllInterfacesRequest, ListAllInterfacesResponse, ListImplementationsRequest, ListImplementationsResponse } from "./reflection";
export const createGetListAllInterfaces = (clientResolver?: RpcResolver) => buildQuery<ListAllInterfacesRequest, ListAllInterfacesResponse>({
  encode: ListAllInterfacesRequest.encode,
  decode: ListAllInterfacesResponse.decode,
  service: "cosmos.base.reflection.v1beta1.ReflectionService",
  method: "ListAllInterfaces",
  clientResolver
});
export const createGetListImplementations = (clientResolver?: RpcResolver) => buildQuery<ListImplementationsRequest, ListImplementationsResponse>({
  encode: ListImplementationsRequest.encode,
  decode: ListImplementationsResponse.decode,
  service: "cosmos.base.reflection.v1beta1.ReflectionService",
  method: "ListImplementations",
  clientResolver
});