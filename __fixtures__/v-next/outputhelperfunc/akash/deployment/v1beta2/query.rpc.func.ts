import { DeploymentFilters, DeploymentFiltersSDKType, DeploymentID, DeploymentIDSDKType, Deployment, DeploymentSDKType } from "./deployment";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, GroupIDSDKType } from "./groupid";
import { Group, GroupSDKType } from "./group";
import { Account, AccountSDKType } from "../../escrow/v1beta2/types";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryDeploymentsRequest, QueryDeploymentsRequestSDKType, QueryDeploymentsResponse, QueryDeploymentsResponseSDKType, QueryDeploymentRequest, QueryDeploymentRequestSDKType, QueryDeploymentResponse, QueryDeploymentResponseSDKType, QueryGroupRequest, QueryGroupRequestSDKType, QueryGroupResponse, QueryGroupResponseSDKType } from "./query";
export const createGetDeployments = (getRpcInstance: RpcResolver) => buildQuery<QueryDeploymentsRequest, QueryDeploymentsResponse>({
  encoder: QueryDeploymentsRequest.encode,
  decoder: QueryDeploymentsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Deployments",
  getRpcInstance: getRpcInstance
});
export const useGetDeployments = buildUseQuery<QueryDeploymentsRequest, QueryDeploymentsResponse>({
  builderQueryFn: createGetDeployments,
  queryKeyPrefix: "DeploymentsQuery"
});
export const createGetDeployment = (getRpcInstance: RpcResolver) => buildQuery<QueryDeploymentRequest, QueryDeploymentResponse>({
  encoder: QueryDeploymentRequest.encode,
  decoder: QueryDeploymentResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Deployment",
  getRpcInstance: getRpcInstance
});
export const useGetDeployment = buildUseQuery<QueryDeploymentRequest, QueryDeploymentResponse>({
  builderQueryFn: createGetDeployment,
  queryKeyPrefix: "DeploymentQuery"
});
export const createGetGroup = (getRpcInstance: RpcResolver) => buildQuery<QueryGroupRequest, QueryGroupResponse>({
  encoder: QueryGroupRequest.encode,
  decoder: QueryGroupResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Group",
  getRpcInstance: getRpcInstance
});
export const useGetGroup = buildUseQuery<QueryGroupRequest, QueryGroupResponse>({
  builderQueryFn: createGetGroup,
  queryKeyPrefix: "GroupQuery"
});