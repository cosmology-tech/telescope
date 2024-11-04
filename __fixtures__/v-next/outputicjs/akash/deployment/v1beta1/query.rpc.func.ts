import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryDeploymentsRequest, QueryDeploymentsResponse, QueryDeploymentRequest, QueryDeploymentResponse, QueryGroupRequest, QueryGroupResponse } from "./query";
export const createGetDeployments = (clientResolver: RpcResolver) => buildQuery<QueryDeploymentsRequest, QueryDeploymentsResponse>({
  encode: QueryDeploymentsRequest.encode,
  decode: QueryDeploymentsResponse.decode,
  service: "akash.deployment.v1beta1.Query",
  method: "Deployments",
  clientResolver
});
export const useGetDeployments = buildUseQuery<QueryDeploymentsRequest, QueryDeploymentsResponse>({
  builderQueryFn: createGetDeployments,
  queryKeyPrefix: "DeploymentsQuery"
});
export const createGetDeployment = (clientResolver: RpcResolver) => buildQuery<QueryDeploymentRequest, QueryDeploymentResponse>({
  encode: QueryDeploymentRequest.encode,
  decode: QueryDeploymentResponse.decode,
  service: "akash.deployment.v1beta1.Query",
  method: "Deployment",
  clientResolver
});
export const useGetDeployment = buildUseQuery<QueryDeploymentRequest, QueryDeploymentResponse>({
  builderQueryFn: createGetDeployment,
  queryKeyPrefix: "DeploymentQuery"
});
export const createGetGroup = (clientResolver: RpcResolver) => buildQuery<QueryGroupRequest, QueryGroupResponse>({
  encode: QueryGroupRequest.encode,
  decode: QueryGroupResponse.decode,
  service: "akash.deployment.v1beta1.Query",
  method: "Group",
  clientResolver
});
export const useGetGroup = buildUseQuery<QueryGroupRequest, QueryGroupResponse>({
  builderQueryFn: createGetGroup,
  queryKeyPrefix: "GroupQuery"
});