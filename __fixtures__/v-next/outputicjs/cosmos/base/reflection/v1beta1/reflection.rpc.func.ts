import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { ListAllInterfacesRequest, ListAllInterfacesResponse, ListImplementationsRequest, ListImplementationsResponse } from "./reflection";
export const createGetListAllInterfaces = (getRpcInstance: RpcResolver) => buildQuery<ListAllInterfacesRequest, ListAllInterfacesResponse>({
  encoder: ListAllInterfacesRequest.encode,
  decoder: ListAllInterfacesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ListAllInterfaces",
  getRpcInstance: getRpcInstance
});
export const useGetListAllInterfaces = buildUseQuery<ListAllInterfacesRequest, ListAllInterfacesResponse>({
  builderQueryFn: createGetListAllInterfaces,
  queryKeyPrefix: "ListAllInterfacesQuery"
});
export const createGetListImplementations = (getRpcInstance: RpcResolver) => buildQuery<ListImplementationsRequest, ListImplementationsResponse>({
  encoder: ListImplementationsRequest.encode,
  decoder: ListImplementationsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ListImplementations",
  getRpcInstance: getRpcInstance
});
export const useGetListImplementations = buildUseQuery<ListImplementationsRequest, ListImplementationsResponse>({
  builderQueryFn: createGetListImplementations,
  queryKeyPrefix: "ListImplementationsQuery"
});