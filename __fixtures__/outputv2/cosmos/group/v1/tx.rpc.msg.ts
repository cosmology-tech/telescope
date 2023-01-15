import { Member, MemberSDKType, VoteOption, VoteOptionSDKType, ThresholdDecisionPolicy, ThresholdDecisionPolicySDKType, PercentageDecisionPolicy, PercentageDecisionPolicySDKType } from "./types";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { fetchReq } from "../../../grpc-gateway";
import { MsgCreateGroup, MsgCreateGroupSDKType, MsgCreateGroupResponse, MsgCreateGroupResponseSDKType, MsgUpdateGroupMembers, MsgUpdateGroupMembersSDKType, MsgUpdateGroupMembersResponse, MsgUpdateGroupMembersResponseSDKType, MsgUpdateGroupAdmin, MsgUpdateGroupAdminSDKType, MsgUpdateGroupAdminResponse, MsgUpdateGroupAdminResponseSDKType, MsgUpdateGroupMetadata, MsgUpdateGroupMetadataSDKType, MsgUpdateGroupMetadataResponse, MsgUpdateGroupMetadataResponseSDKType, MsgCreateGroupPolicy, MsgCreateGroupPolicySDKType, MsgCreateGroupPolicyResponse, MsgCreateGroupPolicyResponseSDKType, MsgCreateGroupWithPolicy, MsgCreateGroupWithPolicySDKType, MsgCreateGroupWithPolicyResponse, MsgCreateGroupWithPolicyResponseSDKType, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyAdminSDKType, MsgUpdateGroupPolicyAdminResponse, MsgUpdateGroupPolicyAdminResponseSDKType, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyDecisionPolicySDKType, MsgUpdateGroupPolicyDecisionPolicyResponse, MsgUpdateGroupPolicyDecisionPolicyResponseSDKType, MsgUpdateGroupPolicyMetadata, MsgUpdateGroupPolicyMetadataSDKType, MsgUpdateGroupPolicyMetadataResponse, MsgUpdateGroupPolicyMetadataResponseSDKType, MsgSubmitProposal, MsgSubmitProposalSDKType, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, MsgWithdrawProposal, MsgWithdrawProposalSDKType, MsgWithdrawProposalResponse, MsgWithdrawProposalResponseSDKType, MsgVote, MsgVoteSDKType, MsgVoteResponse, MsgVoteResponseSDKType, MsgExec, MsgExecSDKType, MsgExecResponse, MsgExecResponseSDKType, MsgLeaveGroup, MsgLeaveGroupSDKType, MsgLeaveGroupResponse, MsgLeaveGroupResponseSDKType } from "./tx";
export class Msg {
  static CreateGroup(request: MsgCreateGroup, initRequest?: fm.initReq): Promise<MsgCreateGroupResponse> {
    return fm.fetchReq(`/cosmos.group.v1.Msg/CreateGroup`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static UpdateGroupMembers(request: MsgUpdateGroupMembers, initRequest?: fm.initReq): Promise<MsgUpdateGroupMembersResponse> {
    return fm.fetchReq(`/cosmos.group.v1.Msg/UpdateGroupMembers`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static UpdateGroupAdmin(request: MsgUpdateGroupAdmin, initRequest?: fm.initReq): Promise<MsgUpdateGroupAdminResponse> {
    return fm.fetchReq(`/cosmos.group.v1.Msg/UpdateGroupAdmin`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static UpdateGroupMetadata(request: MsgUpdateGroupMetadata, initRequest?: fm.initReq): Promise<MsgUpdateGroupMetadataResponse> {
    return fm.fetchReq(`/cosmos.group.v1.Msg/UpdateGroupMetadata`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static CreateGroupPolicy(request: MsgCreateGroupPolicy, initRequest?: fm.initReq): Promise<MsgCreateGroupPolicyResponse> {
    return fm.fetchReq(`/cosmos.group.v1.Msg/CreateGroupPolicy`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static CreateGroupWithPolicy(request: MsgCreateGroupWithPolicy, initRequest?: fm.initReq): Promise<MsgCreateGroupWithPolicyResponse> {
    return fm.fetchReq(`/cosmos.group.v1.Msg/CreateGroupWithPolicy`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static UpdateGroupPolicyAdmin(request: MsgUpdateGroupPolicyAdmin, initRequest?: fm.initReq): Promise<MsgUpdateGroupPolicyAdminResponse> {
    return fm.fetchReq(`/cosmos.group.v1.Msg/UpdateGroupPolicyAdmin`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static UpdateGroupPolicyDecisionPolicy(request: MsgUpdateGroupPolicyDecisionPolicy, initRequest?: fm.initReq): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse> {
    return fm.fetchReq(`/cosmos.group.v1.Msg/UpdateGroupPolicyDecisionPolicy`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static UpdateGroupPolicyMetadata(request: MsgUpdateGroupPolicyMetadata, initRequest?: fm.initReq): Promise<MsgUpdateGroupPolicyMetadataResponse> {
    return fm.fetchReq(`/cosmos.group.v1.Msg/UpdateGroupPolicyMetadata`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static SubmitProposal(request: MsgSubmitProposal, initRequest?: fm.initReq): Promise<MsgSubmitProposalResponse> {
    return fm.fetchReq(`/cosmos.group.v1.Msg/SubmitProposal`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static WithdrawProposal(request: MsgWithdrawProposal, initRequest?: fm.initReq): Promise<MsgWithdrawProposalResponse> {
    return fm.fetchReq(`/cosmos.group.v1.Msg/WithdrawProposal`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static Vote(request: MsgVote, initRequest?: fm.initReq): Promise<MsgVoteResponse> {
    return fm.fetchReq(`/cosmos.group.v1.Msg/Vote`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static Exec(request: MsgExec, initRequest?: fm.initReq): Promise<MsgExecResponse> {
    return fm.fetchReq(`/cosmos.group.v1.Msg/Exec`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static LeaveGroup(request: MsgLeaveGroup, initRequest?: fm.initReq): Promise<MsgLeaveGroupResponse> {
    return fm.fetchReq(`/cosmos.group.v1.Msg/LeaveGroup`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}