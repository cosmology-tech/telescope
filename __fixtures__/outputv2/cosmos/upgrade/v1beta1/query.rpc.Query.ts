import { Plan, PlanSDKType, ModuleVersion, ModuleVersionSDKType } from "./upgrade";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryCurrentPlanRequest, QueryCurrentPlanRequestSDKType, QueryCurrentPlanResponse, QueryCurrentPlanResponseSDKType, QueryAppliedPlanRequest, QueryAppliedPlanRequestSDKType, QueryAppliedPlanResponse, QueryAppliedPlanResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateRequestSDKType, QueryUpgradedConsensusStateResponse, QueryUpgradedConsensusStateResponseSDKType, QueryModuleVersionsRequest, QueryModuleVersionsRequestSDKType, QueryModuleVersionsResponse, QueryModuleVersionsResponseSDKType, QueryAuthorityRequest, QueryAuthorityRequestSDKType, QueryAuthorityResponse, QueryAuthorityResponseSDKType } from "./query";

/** Query defines the gRPC upgrade querier service. */
export interface Query {
  /** CurrentPlan queries the current upgrade plan. */
  currentPlan(request?: DeepPartial<QueryCurrentPlanRequest>, metadata?: grpc.Metadata): Promise<QueryCurrentPlanResponse>;

  /** AppliedPlan queries a previously applied upgrade plan by its name. */
  appliedPlan(request: DeepPartial<QueryAppliedPlanRequest>, metadata?: grpc.Metadata): Promise<QueryAppliedPlanResponse>;

  /**
   * UpgradedConsensusState queries the consensus state that will serve
   * as a trusted kernel for the next version of this chain. It will only be
   * stored at the last height of this chain.
   * UpgradedConsensusState RPC not supported with legacy querier
   * This rpc is deprecated now that IBC has its own replacement
   * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
   */
  upgradedConsensusState(request: DeepPartial<QueryUpgradedConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradedConsensusStateResponse>;

  /**
   * ModuleVersions queries the list of module versions from state.
   * 
   * Since: cosmos-sdk 0.43
   */
  moduleVersions(request: DeepPartial<QueryModuleVersionsRequest>, metadata?: grpc.Metadata): Promise<QueryModuleVersionsResponse>;

  /** Returns the account with authority to conduct upgrades */
  authority(request?: DeepPartial<QueryAuthorityRequest>, metadata?: grpc.Metadata): Promise<QueryAuthorityResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.currentPlan = this.currentPlan.bind(this);
    this.appliedPlan = this.appliedPlan.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
    this.moduleVersions = this.moduleVersions.bind(this);
    this.authority = this.authority.bind(this);
  }

  currentPlan(request: DeepPartial<QueryCurrentPlanRequest> = {}, metadata?: grpc.Metadata): Promise<QueryCurrentPlanResponse> {
    return this.rpc.unary(QueryCurrentPlanDesc, QueryCurrentPlanRequest.fromPartial(request), metadata);
  }

  appliedPlan(request: DeepPartial<QueryAppliedPlanRequest>, metadata?: grpc.Metadata): Promise<QueryAppliedPlanResponse> {
    return this.rpc.unary(QueryAppliedPlanDesc, QueryAppliedPlanRequest.fromPartial(request), metadata);
  }

  upgradedConsensusState(request: DeepPartial<QueryUpgradedConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradedConsensusStateResponse> {
    return this.rpc.unary(QueryUpgradedConsensusStateDesc, QueryUpgradedConsensusStateRequest.fromPartial(request), metadata);
  }

  moduleVersions(request: DeepPartial<QueryModuleVersionsRequest>, metadata?: grpc.Metadata): Promise<QueryModuleVersionsResponse> {
    return this.rpc.unary(QueryModuleVersionsDesc, QueryModuleVersionsRequest.fromPartial(request), metadata);
  }

  authority(request: DeepPartial<QueryAuthorityRequest> = {}, metadata?: grpc.Metadata): Promise<QueryAuthorityResponse> {
    return this.rpc.unary(QueryAuthorityDesc, QueryAuthorityRequest.fromPartial(request), metadata);
  }

}