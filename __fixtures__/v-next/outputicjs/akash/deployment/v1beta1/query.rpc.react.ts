import { buildUseQuery } from "../../../react-query";
import { QueryDeploymentsRequest, QueryDeploymentsResponse, QueryDeploymentRequest, QueryDeploymentResponse, QueryGroupRequest, QueryGroupResponse } from "./query";
import { createGetDeployments, createGetDeployment, createGetGroup } from "./query.rpc.func";
export const useGetDeployments = buildUseQuery<QueryDeploymentsRequest, QueryDeploymentsResponse>({
  builderQueryFn: createGetDeployments,
  queryKeyPrefix: "DeploymentsQuery"
});
export const useGetDeployment = buildUseQuery<QueryDeploymentRequest, QueryDeploymentResponse>({
  builderQueryFn: createGetDeployment,
  queryKeyPrefix: "DeploymentQuery"
});
export const useGetGroup = buildUseQuery<QueryGroupRequest, QueryGroupResponse>({
  builderQueryFn: createGetGroup,
  queryKeyPrefix: "GroupQuery"
});