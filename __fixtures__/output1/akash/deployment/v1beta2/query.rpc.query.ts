import { DeploymentFilters, DeploymentFiltersSDKType, DeploymentID, DeploymentIDSDKType, Deployment, DeploymentSDKType } from "./deployment";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, GroupIDSDKType } from "./groupid";
import { Group, GroupSDKType } from "./group";
import { Account, AccountSDKType } from "../../escrow/v1beta2/types";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryDeploymentsRequest, QueryDeploymentsRequestSDKType, QueryDeploymentsResponse, QueryDeploymentsResponseSDKType, QueryDeploymentRequest, QueryDeploymentRequestSDKType, QueryDeploymentResponse, QueryDeploymentResponseSDKType, QueryGroupRequest, QueryGroupRequestSDKType, QueryGroupResponse, QueryGroupResponseSDKType } from "./query";

/** Query defines the RPC service */
export interface Query {
  deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponseSDKType>;
  /*Deployments queries deployments*/

  deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponseSDKType>;
  /*Deployment queries deployment details*/

  group(request: QueryGroupRequest): Promise<QueryGroupResponseSDKType>;
  /*Group queries group details*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.deployments = this.deployments.bind(this);
    this.deployment = this.deployment.bind(this);
    this.group = this.group.bind(this);
  }

  deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponseSDKType> {
    const data = QueryDeploymentsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Query", "Deployments", data);
    return promise.then(data => QueryDeploymentsResponse.decode(new _m0.Reader(data)));
  }

  deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponseSDKType> {
    const data = QueryDeploymentRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Query", "Deployment", data);
    return promise.then(data => QueryDeploymentResponse.decode(new _m0.Reader(data)));
  }

  group(request: QueryGroupRequest): Promise<QueryGroupResponseSDKType> {
    const data = QueryGroupRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Query", "Group", data);
    return promise.then(data => QueryGroupResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponseSDKType> {
      return queryService.deployments(request);
    },

    deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponseSDKType> {
      return queryService.deployment(request);
    },

    group(request: QueryGroupRequest): Promise<QueryGroupResponseSDKType> {
      return queryService.group(request);
    }

  };
};