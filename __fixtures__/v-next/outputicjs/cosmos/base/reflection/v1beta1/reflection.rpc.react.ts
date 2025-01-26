import { buildUseQuery } from "../../../../react-query";
import { ListAllInterfacesRequest, ListAllInterfacesResponse, ListImplementationsRequest, ListImplementationsResponse } from "./reflection";
import { createGetListAllInterfaces, createGetListImplementations } from "./reflection.rpc.func";
export const useGetListAllInterfaces = buildUseQuery<ListAllInterfacesRequest, ListAllInterfacesResponse>({
  builderQueryFn: createGetListAllInterfaces,
  queryKeyPrefix: "ListAllInterfacesQuery"
});
export const useGetListImplementations = buildUseQuery<ListImplementationsRequest, ListImplementationsResponse>({
  builderQueryFn: createGetListImplementations,
  queryKeyPrefix: "ListImplementationsQuery"
});