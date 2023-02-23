import { DeploymentFilters, DeploymentFiltersSDKType, DeploymentID, DeploymentIDSDKType, Deployment, DeploymentSDKType } from "./deployment";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, GroupIDSDKType } from "./groupid";
import { Group, GroupSDKType } from "./group";
import { Account, AccountSDKType } from "../../escrow/v1beta2/types";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryDeploymentsRequest, QueryDeploymentsRequestSDKType, QueryDeploymentsResponse, QueryDeploymentsResponseSDKType, QueryDeploymentRequest, QueryDeploymentRequestSDKType, QueryDeploymentResponse, QueryDeploymentResponseSDKType, QueryGroupRequest, QueryGroupRequestSDKType, QueryGroupResponse, QueryGroupResponseSDKType } from "./query";

/** Query defines the gRPC querier service */
export interface Query {
  /** Deployments queries deployments */
  Deployments(request: DeepPartial<QueryDeploymentsRequest>, metadata?: grpc.Metadata): Promise<QueryDeploymentsResponse>;

  /** Deployment queries deployment details */
  Deployment(request: DeepPartial<QueryDeploymentRequest>, metadata?: grpc.Metadata): Promise<QueryDeploymentResponse>;

  /** Group queries group details */
  Group(request: DeepPartial<QueryGroupRequest>, metadata?: grpc.Metadata): Promise<QueryGroupResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.deployments = this.deployments.bind(this);
    this.deployment = this.deployment.bind(this);
    this.group = this.group.bind(this);
  }

  deployments(request: DeepPartial<QueryDeploymentsRequest>, metadata?: grpc.Metadata): Promise<QueryDeploymentsResponse> {
    return this.rpc.unary(QueryDeploymentsDesc, QueryDeploymentsRequest.fromPartial(request), metadata);
  }

  deployment(request: DeepPartial<QueryDeploymentRequest>, metadata?: grpc.Metadata): Promise<QueryDeploymentResponse> {
    return this.rpc.unary(QueryDeploymentDesc, QueryDeploymentRequest.fromPartial(request), metadata);
  }

  group(request: DeepPartial<QueryGroupRequest>, metadata?: grpc.Metadata): Promise<QueryGroupResponse> {
    return this.rpc.unary(QueryGroupDesc, QueryGroupRequest.fromPartial(request), metadata);
  }

}