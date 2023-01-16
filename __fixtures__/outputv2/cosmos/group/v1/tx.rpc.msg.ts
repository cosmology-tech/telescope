import { Member, MemberSDKType, VoteOption, VoteOptionSDKType, ThresholdDecisionPolicy, ThresholdDecisionPolicySDKType, PercentageDecisionPolicy, PercentageDecisionPolicySDKType } from "./types";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { fetchReq } from "../../../grpc-gateway";
import { MsgCreateGroup, MsgCreateGroupSDKType, MsgCreateGroupResponse, MsgCreateGroupResponseSDKType, MsgUpdateGroupMembers, MsgUpdateGroupMembersSDKType, MsgUpdateGroupMembersResponse, MsgUpdateGroupMembersResponseSDKType, MsgUpdateGroupAdmin, MsgUpdateGroupAdminSDKType, MsgUpdateGroupAdminResponse, MsgUpdateGroupAdminResponseSDKType, MsgUpdateGroupMetadata, MsgUpdateGroupMetadataSDKType, MsgUpdateGroupMetadataResponse, MsgUpdateGroupMetadataResponseSDKType, MsgCreateGroupPolicy, MsgCreateGroupPolicySDKType, MsgCreateGroupPolicyResponse, MsgCreateGroupPolicyResponseSDKType, MsgCreateGroupWithPolicy, MsgCreateGroupWithPolicySDKType, MsgCreateGroupWithPolicyResponse, MsgCreateGroupWithPolicyResponseSDKType, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyAdminSDKType, MsgUpdateGroupPolicyAdminResponse, MsgUpdateGroupPolicyAdminResponseSDKType, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyDecisionPolicySDKType, MsgUpdateGroupPolicyDecisionPolicyResponse, MsgUpdateGroupPolicyDecisionPolicyResponseSDKType, MsgUpdateGroupPolicyMetadata, MsgUpdateGroupPolicyMetadataSDKType, MsgUpdateGroupPolicyMetadataResponse, MsgUpdateGroupPolicyMetadataResponseSDKType, MsgSubmitProposal, MsgSubmitProposalSDKType, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, MsgWithdrawProposal, MsgWithdrawProposalSDKType, MsgWithdrawProposalResponse, MsgWithdrawProposalResponseSDKType, MsgVote, MsgVoteSDKType, MsgVoteResponse, MsgVoteResponseSDKType, MsgExec, MsgExecSDKType, MsgExecResponse, MsgExecResponseSDKType, MsgLeaveGroup, MsgLeaveGroupSDKType, MsgLeaveGroupResponse, MsgLeaveGroupResponseSDKType } from "./tx";
export class Msg {
  static CreateGroup(request: MsgCreateGroup, initRequest?: fm.initReq): Promise<MsgCreateGroupResponse> {
    return fm.fetchReq(`/CreateGroup/CreateGroup`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static UpdateGroupMembers(request: MsgUpdateGroupMembers, initRequest?: fm.initReq): Promise<MsgUpdateGroupMembersResponse> {
    return fm.fetchReq(`/UpdateGroupMembers/UpdateGroupMembers`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static UpdateGroupAdmin(request: MsgUpdateGroupAdmin, initRequest?: fm.initReq): Promise<MsgUpdateGroupAdminResponse> {
    return fm.fetchReq(`/UpdateGroupAdmin/UpdateGroupAdmin`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static UpdateGroupMetadata(request: MsgUpdateGroupMetadata, initRequest?: fm.initReq): Promise<MsgUpdateGroupMetadataResponse> {
    return fm.fetchReq(`/UpdateGroupMetadata/UpdateGroupMetadata`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static CreateGroupPolicy(request: MsgCreateGroupPolicy, initRequest?: fm.initReq): Promise<MsgCreateGroupPolicyResponse> {
    return fm.fetchReq(`/CreateGroupPolicy/CreateGroupPolicy`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static CreateGroupWithPolicy(request: MsgCreateGroupWithPolicy, initRequest?: fm.initReq): Promise<MsgCreateGroupWithPolicyResponse> {
    return fm.fetchReq(`/CreateGroupWithPolicy/CreateGroupWithPolicy`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static UpdateGroupPolicyAdmin(request: MsgUpdateGroupPolicyAdmin, initRequest?: fm.initReq): Promise<MsgUpdateGroupPolicyAdminResponse> {
    return fm.fetchReq(`/UpdateGroupPolicyAdmin/UpdateGroupPolicyAdmin`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static UpdateGroupPolicyDecisionPolicy(request: MsgUpdateGroupPolicyDecisionPolicy, initRequest?: fm.initReq): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse> {
    return fm.fetchReq(`/UpdateGroupPolicyDecisionPolicy/UpdateGroupPolicyDecisionPolicy`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static UpdateGroupPolicyMetadata(request: MsgUpdateGroupPolicyMetadata, initRequest?: fm.initReq): Promise<MsgUpdateGroupPolicyMetadataResponse> {
    return fm.fetchReq(`/UpdateGroupPolicyMetadata/UpdateGroupPolicyMetadata`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static SubmitProposal(request: MsgSubmitProposal, initRequest?: fm.initReq): Promise<MsgSubmitProposalResponse> {
    return fm.fetchReq(`/SubmitProposal/SubmitProposal`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static WithdrawProposal(request: MsgWithdrawProposal, initRequest?: fm.initReq): Promise<MsgWithdrawProposalResponse> {
    return fm.fetchReq(`/WithdrawProposal/WithdrawProposal`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static Vote(request: MsgVote, initRequest?: fm.initReq): Promise<MsgVoteResponse> {
    return fm.fetchReq(`/Vote/Vote`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static Exec(request: MsgExec, initRequest?: fm.initReq): Promise<MsgExecResponse> {
    return fm.fetchReq(`/Exec/Exec`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static LeaveGroup(request: MsgLeaveGroup, initRequest?: fm.initReq): Promise<MsgLeaveGroupResponse> {
    return fm.fetchReq(`/LeaveGroup/LeaveGroup`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}