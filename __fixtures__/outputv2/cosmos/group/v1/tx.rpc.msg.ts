import { Member, MemberSDKType, VoteOption, VoteOptionSDKType, ThresholdDecisionPolicy, ThresholdDecisionPolicySDKType, PercentageDecisionPolicy, PercentageDecisionPolicySDKType } from "./types";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { MsgCreateGroup, MsgCreateGroupSDKType, MsgCreateGroupResponse, MsgCreateGroupResponseSDKType, MsgUpdateGroupMembers, MsgUpdateGroupMembersSDKType, MsgUpdateGroupMembersResponse, MsgUpdateGroupMembersResponseSDKType, MsgUpdateGroupAdmin, MsgUpdateGroupAdminSDKType, MsgUpdateGroupAdminResponse, MsgUpdateGroupAdminResponseSDKType, MsgUpdateGroupMetadata, MsgUpdateGroupMetadataSDKType, MsgUpdateGroupMetadataResponse, MsgUpdateGroupMetadataResponseSDKType, MsgCreateGroupPolicy, MsgCreateGroupPolicySDKType, MsgCreateGroupPolicyResponse, MsgCreateGroupPolicyResponseSDKType, MsgCreateGroupWithPolicy, MsgCreateGroupWithPolicySDKType, MsgCreateGroupWithPolicyResponse, MsgCreateGroupWithPolicyResponseSDKType, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyAdminSDKType, MsgUpdateGroupPolicyAdminResponse, MsgUpdateGroupPolicyAdminResponseSDKType, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyDecisionPolicySDKType, MsgUpdateGroupPolicyDecisionPolicyResponse, MsgUpdateGroupPolicyDecisionPolicyResponseSDKType, MsgUpdateGroupPolicyMetadata, MsgUpdateGroupPolicyMetadataSDKType, MsgUpdateGroupPolicyMetadataResponse, MsgUpdateGroupPolicyMetadataResponseSDKType, MsgSubmitProposal, MsgSubmitProposalSDKType, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, MsgWithdrawProposal, MsgWithdrawProposalSDKType, MsgWithdrawProposalResponse, MsgWithdrawProposalResponseSDKType, MsgVote, MsgVoteSDKType, MsgVoteResponse, MsgVoteResponseSDKType, MsgExec, MsgExecSDKType, MsgExecResponse, MsgExecResponseSDKType, MsgLeaveGroup, MsgLeaveGroupSDKType, MsgLeaveGroupResponse, MsgLeaveGroupResponseSDKType } from "./tx";

/** Msg is the cosmos.group.v1 Msg service. */
export interface Msg {
  /** CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
  CreateGroup(request: DeepPartial<MsgCreateGroup>, metadata?: grpc.Metadata): Promise<MsgCreateGroupResponse>;

  /** UpdateGroupMembers updates the group members with given group id and admin address. */
  UpdateGroupMembers(request: DeepPartial<MsgUpdateGroupMembers>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupMembersResponse>;

  /** UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
  UpdateGroupAdmin(request: DeepPartial<MsgUpdateGroupAdmin>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupAdminResponse>;

  /** UpdateGroupMetadata updates the group metadata with given group id and admin address. */
  UpdateGroupMetadata(request: DeepPartial<MsgUpdateGroupMetadata>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupMetadataResponse>;

  /** CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
  CreateGroupPolicy(request: DeepPartial<MsgCreateGroupPolicy>, metadata?: grpc.Metadata): Promise<MsgCreateGroupPolicyResponse>;

  /** CreateGroupWithPolicy creates a new group with policy. */
  CreateGroupWithPolicy(request: DeepPartial<MsgCreateGroupWithPolicy>, metadata?: grpc.Metadata): Promise<MsgCreateGroupWithPolicyResponse>;

  /** UpdateGroupPolicyAdmin updates a group policy admin. */
  UpdateGroupPolicyAdmin(request: DeepPartial<MsgUpdateGroupPolicyAdmin>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupPolicyAdminResponse>;

  /** UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
  UpdateGroupPolicyDecisionPolicy(request: DeepPartial<MsgUpdateGroupPolicyDecisionPolicy>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse>;

  /** UpdateGroupPolicyMetadata updates a group policy metadata. */
  UpdateGroupPolicyMetadata(request: DeepPartial<MsgUpdateGroupPolicyMetadata>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupPolicyMetadataResponse>;

  /** SubmitProposal submits a new proposal. */
  SubmitProposal(request: DeepPartial<MsgSubmitProposal>, metadata?: grpc.Metadata): Promise<MsgSubmitProposalResponse>;

  /** WithdrawProposal aborts a proposal. */
  WithdrawProposal(request: DeepPartial<MsgWithdrawProposal>, metadata?: grpc.Metadata): Promise<MsgWithdrawProposalResponse>;

  /** Vote allows a voter to vote on a proposal. */
  Vote(request: DeepPartial<MsgVote>, metadata?: grpc.Metadata): Promise<MsgVoteResponse>;

  /** Exec executes a proposal. */
  Exec(request: DeepPartial<MsgExec>, metadata?: grpc.Metadata): Promise<MsgExecResponse>;

  /** LeaveGroup allows a group member to leave the group. */
  LeaveGroup(request: DeepPartial<MsgLeaveGroup>, metadata?: grpc.Metadata): Promise<MsgLeaveGroupResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createGroup = this.createGroup.bind(this);
    this.updateGroupMembers = this.updateGroupMembers.bind(this);
    this.updateGroupAdmin = this.updateGroupAdmin.bind(this);
    this.updateGroupMetadata = this.updateGroupMetadata.bind(this);
    this.createGroupPolicy = this.createGroupPolicy.bind(this);
    this.createGroupWithPolicy = this.createGroupWithPolicy.bind(this);
    this.updateGroupPolicyAdmin = this.updateGroupPolicyAdmin.bind(this);
    this.updateGroupPolicyDecisionPolicy = this.updateGroupPolicyDecisionPolicy.bind(this);
    this.updateGroupPolicyMetadata = this.updateGroupPolicyMetadata.bind(this);
    this.submitProposal = this.submitProposal.bind(this);
    this.withdrawProposal = this.withdrawProposal.bind(this);
    this.vote = this.vote.bind(this);
    this.exec = this.exec.bind(this);
    this.leaveGroup = this.leaveGroup.bind(this);
  }

  createGroup(request: DeepPartial<MsgCreateGroup>, metadata?: grpc.Metadata): Promise<MsgCreateGroupResponse> {
    return this.rpc.unary(MsgCreateGroup, MsgCreateGroup.fromPartial(request), metadata);
  }

  updateGroupMembers(request: DeepPartial<MsgUpdateGroupMembers>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupMembersResponse> {
    return this.rpc.unary(MsgUpdateGroupMembers, MsgUpdateGroupMembers.fromPartial(request), metadata);
  }

  updateGroupAdmin(request: DeepPartial<MsgUpdateGroupAdmin>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupAdminResponse> {
    return this.rpc.unary(MsgUpdateGroupAdmin, MsgUpdateGroupAdmin.fromPartial(request), metadata);
  }

  updateGroupMetadata(request: DeepPartial<MsgUpdateGroupMetadata>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupMetadataResponse> {
    return this.rpc.unary(MsgUpdateGroupMetadata, MsgUpdateGroupMetadata.fromPartial(request), metadata);
  }

  createGroupPolicy(request: DeepPartial<MsgCreateGroupPolicy>, metadata?: grpc.Metadata): Promise<MsgCreateGroupPolicyResponse> {
    return this.rpc.unary(MsgCreateGroupPolicy, MsgCreateGroupPolicy.fromPartial(request), metadata);
  }

  createGroupWithPolicy(request: DeepPartial<MsgCreateGroupWithPolicy>, metadata?: grpc.Metadata): Promise<MsgCreateGroupWithPolicyResponse> {
    return this.rpc.unary(MsgCreateGroupWithPolicy, MsgCreateGroupWithPolicy.fromPartial(request), metadata);
  }

  updateGroupPolicyAdmin(request: DeepPartial<MsgUpdateGroupPolicyAdmin>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupPolicyAdminResponse> {
    return this.rpc.unary(MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyAdmin.fromPartial(request), metadata);
  }

  updateGroupPolicyDecisionPolicy(request: DeepPartial<MsgUpdateGroupPolicyDecisionPolicy>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse> {
    return this.rpc.unary(MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyDecisionPolicy.fromPartial(request), metadata);
  }

  updateGroupPolicyMetadata(request: DeepPartial<MsgUpdateGroupPolicyMetadata>, metadata?: grpc.Metadata): Promise<MsgUpdateGroupPolicyMetadataResponse> {
    return this.rpc.unary(MsgUpdateGroupPolicyMetadata, MsgUpdateGroupPolicyMetadata.fromPartial(request), metadata);
  }

  submitProposal(request: DeepPartial<MsgSubmitProposal>, metadata?: grpc.Metadata): Promise<MsgSubmitProposalResponse> {
    return this.rpc.unary(MsgSubmitProposal, MsgSubmitProposal.fromPartial(request), metadata);
  }

  withdrawProposal(request: DeepPartial<MsgWithdrawProposal>, metadata?: grpc.Metadata): Promise<MsgWithdrawProposalResponse> {
    return this.rpc.unary(MsgWithdrawProposal, MsgWithdrawProposal.fromPartial(request), metadata);
  }

  vote(request: DeepPartial<MsgVote>, metadata?: grpc.Metadata): Promise<MsgVoteResponse> {
    return this.rpc.unary(MsgVote, MsgVote.fromPartial(request), metadata);
  }

  exec(request: DeepPartial<MsgExec>, metadata?: grpc.Metadata): Promise<MsgExecResponse> {
    return this.rpc.unary(MsgExec, MsgExec.fromPartial(request), metadata);
  }

  leaveGroup(request: DeepPartial<MsgLeaveGroup>, metadata?: grpc.Metadata): Promise<MsgLeaveGroupResponse> {
    return this.rpc.unary(MsgLeaveGroup, MsgLeaveGroup.fromPartial(request), metadata);
  }

}