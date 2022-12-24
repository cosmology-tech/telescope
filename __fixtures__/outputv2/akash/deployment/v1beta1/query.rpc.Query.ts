import { DeploymentFilters, DeploymentFiltersAmino, DeploymentFiltersAminoType, DeploymentFiltersSDKType, DeploymentID, DeploymentIDAmino, DeploymentIDAminoType, DeploymentIDSDKType, Deployment, DeploymentAmino, DeploymentAminoType, DeploymentSDKType } from "./deployment";
import { PageRequest, PageRequestAmino, PageRequestAminoType, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseAminoType, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, GroupIDAmino, GroupIDAminoType, GroupIDSDKType, Group, GroupAmino, GroupAminoType, GroupSDKType } from "./group";
import { Account, AccountAmino, AccountAminoType, AccountSDKType } from "../../escrow/v1beta1/types";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryDeploymentsRequest, QueryDeploymentsRequestAmino, QueryDeploymentsRequestAminoType, QueryDeploymentsRequestSDKType, QueryDeploymentsResponse, QueryDeploymentsResponseAmino, QueryDeploymentsResponseAminoType, QueryDeploymentsResponseSDKType, QueryDeploymentRequest, QueryDeploymentRequestAmino, QueryDeploymentRequestAminoType, QueryDeploymentRequestSDKType, QueryDeploymentResponse, QueryDeploymentResponseAmino, QueryDeploymentResponseAminoType, QueryDeploymentResponseSDKType, QueryGroupRequest, QueryGroupRequestAmino, QueryGroupRequestAminoType, QueryGroupRequestSDKType, QueryGroupResponse, QueryGroupResponseAmino, QueryGroupResponseAminoType, QueryGroupResponseSDKType } from "./query";

/** Query defines the gRPC querier service */
export interface Query {
  /** Deployments queries deployments */
  deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse>;

  /** Deployment queries deployment details */
  deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse>;

  /** Group queries group details */
  group(request: QueryGroupRequest): Promise<QueryGroupResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.deployments = this.deployments.bind(this);
    this.deployment = this.deployment.bind(this);
    this.group = this.group.bind(this);
  }

  deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse> {
    const data = QueryDeploymentsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Query", "Deployments", data);
    return promise.then(data => QueryDeploymentsResponse.decode(new _m0.Reader(data)));
  }

  deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse> {
    const data = QueryDeploymentRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Query", "Deployment", data);
    return promise.then(data => QueryDeploymentResponse.decode(new _m0.Reader(data)));
  }

  group(request: QueryGroupRequest): Promise<QueryGroupResponse> {
    const data = QueryGroupRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Query", "Group", data);
    return promise.then(data => QueryGroupResponse.decode(new _m0.Reader(data)));
  }

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