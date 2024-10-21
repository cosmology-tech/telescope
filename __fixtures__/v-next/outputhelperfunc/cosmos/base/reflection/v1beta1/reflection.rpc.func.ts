import { SigningClientResolver } from "../../../../helpers";
import { ListAllInterfacesRequest, ListAllInterfacesRequestSDKType, ListAllInterfacesResponse, ListAllInterfacesResponseSDKType, ListImplementationsRequest, ListImplementationsRequestSDKType, ListImplementationsResponse, ListImplementationsResponseSDKType } from "./reflection";
export const createGetListAllInterfaces = (getRpcInstance: SigningClientResolver) => buildQuery<ListAllInterfacesRequest, ListAllInterfacesResponse>({
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
export const createGetListImplementations = (getRpcInstance: SigningClientResolver) => buildQuery<ListImplementationsRequest, ListImplementationsResponse>({
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