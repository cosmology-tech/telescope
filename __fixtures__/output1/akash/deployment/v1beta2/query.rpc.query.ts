import { DeploymentFilters, DeploymentFiltersSDKType, DeploymentID, DeploymentIDSDKType, Deployment, DeploymentSDKType } from "./deployment";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, GroupIDSDKType } from "./groupid";
import { Group, GroupSDKType } from "./group";
import { Account, AccountSDKType } from "../../escrow/v1beta2/types";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryDeploymentsRequest, QueryDeploymentsRequestSDKType, QueryDeploymentsResponse, QueryDeploymentsResponseSDKType, QueryDeploymentRequest, QueryDeploymentRequestSDKType, QueryDeploymentResponse, QueryDeploymentResponseSDKType, QueryGroupRequest, QueryGroupRequestSDKType, QueryGroupResponse, QueryGroupResponseSDKType } from "./query";

/** Query defines the gRPC querier service */
export interface Query {
  /*Deployments queries deployments*/
  deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse>;

  /*Deployment queries deployment details*/
  deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse>;

  /*Group queries group details*/
  group(request: QueryGroupRequest): Promise<QueryGroupResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  /* Deployments queries deployments */
  deployments = async (request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse> => {
    const data = QueryDeploymentsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Query", "Deployments", data);
    return promise.then(data => QueryDeploymentsResponse.decode(new _m0.Reader(data)));
  };

  /* Deployment queries deployment details */
  deployment = async (request: QueryDeploymentRequest): Promise<QueryDeploymentResponse> => {
    const data = QueryDeploymentRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Query", "Deployment", data);
    return promise.then(data => QueryDeploymentResponse.decode(new _m0.Reader(data)));
  };

  /* Group queries group details */
  group = async (request: QueryGroupRequest): Promise<QueryGroupResponse> => {
    const data = QueryGroupRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Query", "Group", data);
    return promise.then(data => QueryGroupResponse.decode(new _m0.Reader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse> {
      return queryService.deployments(request);
    },

    deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse> {
      return queryService.deployment(request);
    },

    group(request: QueryGroupRequest): Promise<QueryGroupResponse> {
      return queryService.group(request);
    }

  };
};