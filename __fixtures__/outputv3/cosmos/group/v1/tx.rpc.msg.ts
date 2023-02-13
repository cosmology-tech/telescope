import { Member, MemberSDKType, VoteOption, VoteOptionSDKType, ThresholdDecisionPolicy, ThresholdDecisionPolicySDKType, PercentageDecisionPolicy, PercentageDecisionPolicySDKType } from "./types";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as fm from "../../../grpc-gateway";
import { MsgCreateGroup, MsgCreateGroupSDKType, MsgCreateGroupResponse, MsgCreateGroupResponseSDKType, MsgUpdateGroupMembers, MsgUpdateGroupMembersSDKType, MsgUpdateGroupMembersResponse, MsgUpdateGroupMembersResponseSDKType, MsgUpdateGroupAdmin, MsgUpdateGroupAdminSDKType, MsgUpdateGroupAdminResponse, MsgUpdateGroupAdminResponseSDKType, MsgUpdateGroupMetadata, MsgUpdateGroupMetadataSDKType, MsgUpdateGroupMetadataResponse, MsgUpdateGroupMetadataResponseSDKType, MsgCreateGroupPolicy, MsgCreateGroupPolicySDKType, MsgCreateGroupPolicyResponse, MsgCreateGroupPolicyResponseSDKType, MsgCreateGroupWithPolicy, MsgCreateGroupWithPolicySDKType, MsgCreateGroupWithPolicyResponse, MsgCreateGroupWithPolicyResponseSDKType, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyAdminSDKType, MsgUpdateGroupPolicyAdminResponse, MsgUpdateGroupPolicyAdminResponseSDKType, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyDecisionPolicySDKType, MsgUpdateGroupPolicyDecisionPolicyResponse, MsgUpdateGroupPolicyDecisionPolicyResponseSDKType, MsgUpdateGroupPolicyMetadata, MsgUpdateGroupPolicyMetadataSDKType, MsgUpdateGroupPolicyMetadataResponse, MsgUpdateGroupPolicyMetadataResponseSDKType, MsgSubmitProposal, MsgSubmitProposalSDKType, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, MsgWithdrawProposal, MsgWithdrawProposalSDKType, MsgWithdrawProposalResponse, MsgWithdrawProposalResponseSDKType, MsgVote, MsgVoteSDKType, MsgVoteResponse, MsgVoteResponseSDKType, MsgExec, MsgExecSDKType, MsgExecResponse, MsgExecResponseSDKType, MsgLeaveGroup, MsgLeaveGroupSDKType, MsgLeaveGroupResponse, MsgLeaveGroupResponseSDKType } from "./tx";
export class Msg {
  /** CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
  static CreateGroup(request: MsgCreateGroup, initRequest?: fm.InitReq): Promise<MsgCreateGroupResponse> {
    return fm.fetchReq(`/cosmos.group.v1/CreateGroup`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  /** UpdateGroupMembers updates the group members with given group id and admin address. */
  static UpdateGroupMembers(request: MsgUpdateGroupMembers, initRequest?: fm.InitReq): Promise<MsgUpdateGroupMembersResponse> {
    return fm.fetchReq(`/cosmos.group.v1/UpdateGroupMembers`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  /** UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
  static UpdateGroupAdmin(request: MsgUpdateGroupAdmin, initRequest?: fm.InitReq): Promise<MsgUpdateGroupAdminResponse> {
    return fm.fetchReq(`/cosmos.group.v1/UpdateGroupAdmin`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  /** UpdateGroupMetadata updates the group metadata with given group id and admin address. */
  static UpdateGroupMetadata(request: MsgUpdateGroupMetadata, initRequest?: fm.InitReq): Promise<MsgUpdateGroupMetadataResponse> {
    return fm.fetchReq(`/cosmos.group.v1/UpdateGroupMetadata`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  /** CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
  static CreateGroupPolicy(request: MsgCreateGroupPolicy, initRequest?: fm.InitReq): Promise<MsgCreateGroupPolicyResponse> {
    return fm.fetchReq(`/cosmos.group.v1/CreateGroupPolicy`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  /** CreateGroupWithPolicy creates a new group with policy. */
  static CreateGroupWithPolicy(request: MsgCreateGroupWithPolicy, initRequest?: fm.InitReq): Promise<MsgCreateGroupWithPolicyResponse> {
    return fm.fetchReq(`/cosmos.group.v1/CreateGroupWithPolicy`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  /** UpdateGroupPolicyAdmin updates a group policy admin. */
  static UpdateGroupPolicyAdmin(request: MsgUpdateGroupPolicyAdmin, initRequest?: fm.InitReq): Promise<MsgUpdateGroupPolicyAdminResponse> {
    return fm.fetchReq(`/cosmos.group.v1/UpdateGroupPolicyAdmin`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  /** UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
  static UpdateGroupPolicyDecisionPolicy(request: MsgUpdateGroupPolicyDecisionPolicy, initRequest?: fm.InitReq): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse> {
    return fm.fetchReq(`/cosmos.group.v1/UpdateGroupPolicyDecisionPolicy`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  /** UpdateGroupPolicyMetadata updates a group policy metadata. */
  static UpdateGroupPolicyMetadata(request: MsgUpdateGroupPolicyMetadata, initRequest?: fm.InitReq): Promise<MsgUpdateGroupPolicyMetadataResponse> {
    return fm.fetchReq(`/cosmos.group.v1/UpdateGroupPolicyMetadata`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  /** SubmitProposal submits a new proposal. */
  static SubmitProposal(request: MsgSubmitProposal, initRequest?: fm.InitReq): Promise<MsgSubmitProposalResponse> {
    return fm.fetchReq(`/cosmos.group.v1/SubmitProposal`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  /** WithdrawProposal aborts a proposal. */
  static WithdrawProposal(request: MsgWithdrawProposal, initRequest?: fm.InitReq): Promise<MsgWithdrawProposalResponse> {
    return fm.fetchReq(`/cosmos.group.v1/WithdrawProposal`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  /** Vote allows a voter to vote on a proposal. */
  static Vote(request: MsgVote, initRequest?: fm.InitReq): Promise<MsgVoteResponse> {
    return fm.fetchReq(`/cosmos.group.v1/Vote`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  /** Exec executes a proposal. */
  static Exec(request: MsgExec, initRequest?: fm.InitReq): Promise<MsgExecResponse> {
    return fm.fetchReq(`/cosmos.group.v1/Exec`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  /** LeaveGroup allows a group member to leave the group. */
  static LeaveGroup(request: MsgLeaveGroup, initRequest?: fm.InitReq): Promise<MsgLeaveGroupResponse> {
    return fm.fetchReq(`/cosmos.group.v1/LeaveGroup`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}