import { buildUseVueQuery } from "../../../../vue-query";
import { ListAllInterfacesRequest, ListAllInterfacesResponse, ListImplementationsRequest, ListImplementationsResponse } from "./reflection";
import { createGetListAllInterfaces, createGetListImplementations } from "./reflection.rpc.func.ts";
export const useGetListAllInterfaces = buildUseVueQuery<ListAllInterfacesRequest, ListAllInterfacesResponse>({
  builderQueryFn: createGetListAllInterfaces,
  queryKeyPrefix: "ListAllInterfacesQuery"
});
export const useGetListImplementations = buildUseVueQuery<ListImplementationsRequest, ListImplementationsResponse>({
  builderQueryFn: createGetListImplementations,
  queryKeyPrefix: "ListImplementationsQuery"
});