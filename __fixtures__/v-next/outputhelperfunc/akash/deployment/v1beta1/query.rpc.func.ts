import { DeploymentFilters, DeploymentFiltersSDKType, DeploymentID, DeploymentIDSDKType, Deployment, DeploymentSDKType } from "./deployment";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, GroupIDSDKType, Group, GroupSDKType } from "./group";
import { Account, AccountSDKType } from "../../escrow/v1beta1/types";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryDeploymentsRequest, QueryDeploymentsRequestSDKType, QueryDeploymentsResponse, QueryDeploymentsResponseSDKType, QueryDeploymentRequest, QueryDeploymentRequestSDKType, QueryDeploymentResponse, QueryDeploymentResponseSDKType, QueryGroupRequest, QueryGroupRequestSDKType, QueryGroupResponse, QueryGroupResponseSDKType } from "./query";
export const createGetDeployments = (getRpcInstance: RpcResolver) => buildQuery<QueryDeploymentsRequest, QueryDeploymentsResponse>({
  encode: QueryDeploymentsRequest.encode,
  decode: QueryDeploymentsResponse.decode,
  service: "akash.deployment.v1beta1.Query",
  method: "Deployments",
  getRpcInstance: getRpcInstance
});
export const useGetDeployments = buildUseQuery<QueryDeploymentsRequest, QueryDeploymentsResponse>({
  builderQueryFn: createGetDeployments,
  queryKeyPrefix: "DeploymentsQuery"
});
export const createGetDeployment = (getRpcInstance: RpcResolver) => buildQuery<QueryDeploymentRequest, QueryDeploymentResponse>({
  encode: QueryDeploymentRequest.encode,
  decode: QueryDeploymentResponse.decode,
  service: "akash.deployment.v1beta1.Query",
  method: "Deployment",
  getRpcInstance: getRpcInstance
});
export const useGetDeployment = buildUseQuery<QueryDeploymentRequest, QueryDeploymentResponse>({
  builderQueryFn: createGetDeployment,
  queryKeyPrefix: "DeploymentQuery"
});
export const createGetGroup = (getRpcInstance: RpcResolver) => buildQuery<QueryGroupRequest, QueryGroupResponse>({
  encode: QueryGroupRequest.encode,
  decode: QueryGroupResponse.decode,
  service: "akash.deployment.v1beta1.Query",
  method: "Group",
  getRpcInstance: getRpcInstance
});
export const useGetGroup = buildUseQuery<QueryGroupRequest, QueryGroupResponse>({
  builderQueryFn: createGetGroup,
  queryKeyPrefix: "GroupQuery"
});