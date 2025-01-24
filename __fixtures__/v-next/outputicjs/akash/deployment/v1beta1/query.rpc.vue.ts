import { buildUseVueQuery } from "../../../vue-query";
import { QueryDeploymentsRequest, QueryDeploymentsResponse, QueryDeploymentRequest, QueryDeploymentResponse, QueryGroupRequest, QueryGroupResponse } from "./query";
import { createGetDeployments, createGetDeployment, createGetGroup } from "./query.rpc.func.ts";
export const useGetDeployments = buildUseVueQuery<QueryDeploymentsRequest, QueryDeploymentsResponse>({
  builderQueryFn: createGetDeployments,
  queryKeyPrefix: "DeploymentsQuery"
});
export const useGetDeployment = buildUseVueQuery<QueryDeploymentRequest, QueryDeploymentResponse>({
  builderQueryFn: createGetDeployment,
  queryKeyPrefix: "DeploymentQuery"
});
export const useGetGroup = buildUseVueQuery<QueryGroupRequest, QueryGroupResponse>({
  builderQueryFn: createGetGroup,
  queryKeyPrefix: "GroupQuery"
});