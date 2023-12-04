import { Member, MemberSDKType, VoteOption, VoteOptionSDKType } from "./types";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateGroup, MsgCreateGroupSDKType, MsgCreateGroupResponse, MsgCreateGroupResponseSDKType, MsgUpdateGroupMembers, MsgUpdateGroupMembersSDKType, MsgUpdateGroupMembersResponse, MsgUpdateGroupMembersResponseSDKType, MsgUpdateGroupAdmin, MsgUpdateGroupAdminSDKType, MsgUpdateGroupAdminResponse, MsgUpdateGroupAdminResponseSDKType, MsgUpdateGroupMetadata, MsgUpdateGroupMetadataSDKType, MsgUpdateGroupMetadataResponse, MsgUpdateGroupMetadataResponseSDKType, MsgCreateGroupPolicy, MsgCreateGroupPolicySDKType, MsgCreateGroupPolicyResponse, MsgCreateGroupPolicyResponseSDKType, MsgCreateGroupWithPolicy, MsgCreateGroupWithPolicySDKType, MsgCreateGroupWithPolicyResponse, MsgCreateGroupWithPolicyResponseSDKType, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyAdminSDKType, MsgUpdateGroupPolicyAdminResponse, MsgUpdateGroupPolicyAdminResponseSDKType, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyDecisionPolicySDKType, MsgUpdateGroupPolicyDecisionPolicyResponse, MsgUpdateGroupPolicyDecisionPolicyResponseSDKType, MsgUpdateGroupPolicyMetadata, MsgUpdateGroupPolicyMetadataSDKType, MsgUpdateGroupPolicyMetadataResponse, MsgUpdateGroupPolicyMetadataResponseSDKType, MsgSubmitProposal, MsgSubmitProposalSDKType, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, MsgWithdrawProposal, MsgWithdrawProposalSDKType, MsgWithdrawProposalResponse, MsgWithdrawProposalResponseSDKType, MsgVote, MsgVoteSDKType, MsgVoteResponse, MsgVoteResponseSDKType, MsgExec, MsgExecSDKType, MsgExecResponse, MsgExecResponseSDKType, MsgLeaveGroup, MsgLeaveGroupSDKType, MsgLeaveGroupResponse, MsgLeaveGroupResponseSDKType } from "./tx";
/** Msg is the cosmos.group.v1 Msg service. */
export interface Msg {
  /** CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
  createGroup(request: BroadcastTxReq<MsgCreateGroup>): Promise<DeliverTxResponse>;
  /** UpdateGroupMembers updates the group members with given group id and admin address. */
  updateGroupMembers(request: BroadcastTxReq<MsgUpdateGroupMembers>): Promise<DeliverTxResponse>;
  /** UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
  updateGroupAdmin(request: BroadcastTxReq<MsgUpdateGroupAdmin>): Promise<DeliverTxResponse>;
  /** UpdateGroupMetadata updates the group metadata with given group id and admin address. */
  updateGroupMetadata(request: BroadcastTxReq<MsgUpdateGroupMetadata>): Promise<DeliverTxResponse>;
  /** CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
  createGroupPolicy(request: BroadcastTxReq<MsgCreateGroupPolicy>): Promise<DeliverTxResponse>;
  /** CreateGroupWithPolicy creates a new group with policy. */
  createGroupWithPolicy(request: BroadcastTxReq<MsgCreateGroupWithPolicy>): Promise<DeliverTxResponse>;
  /** UpdateGroupPolicyAdmin updates a group policy admin. */
  updateGroupPolicyAdmin(request: BroadcastTxReq<MsgUpdateGroupPolicyAdmin>): Promise<DeliverTxResponse>;
  /** UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
  updateGroupPolicyDecisionPolicy(request: BroadcastTxReq<MsgUpdateGroupPolicyDecisionPolicy>): Promise<DeliverTxResponse>;
  /** UpdateGroupPolicyMetadata updates a group policy metadata. */
  updateGroupPolicyMetadata(request: BroadcastTxReq<MsgUpdateGroupPolicyMetadata>): Promise<DeliverTxResponse>;
  /** SubmitProposal submits a new proposal. */
  submitProposal(request: BroadcastTxReq<MsgSubmitProposal>): Promise<DeliverTxResponse>;
  /** WithdrawProposal aborts a proposal. */
  withdrawProposal(request: BroadcastTxReq<MsgWithdrawProposal>): Promise<DeliverTxResponse>;
  /** Vote allows a voter to vote on a proposal. */
  vote(request: BroadcastTxReq<MsgVote>): Promise<DeliverTxResponse>;
  /** Exec executes a proposal. */
  exec(request: BroadcastTxReq<MsgExec>): Promise<DeliverTxResponse>;
  /** LeaveGroup allows a group member to leave the group. */
  leaveGroup(request: BroadcastTxReq<MsgLeaveGroup>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
  createGroup = async (request: BroadcastTxReq<MsgCreateGroup>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateGroup.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* UpdateGroupMembers updates the group members with given group id and admin address. */
  updateGroupMembers = async (request: BroadcastTxReq<MsgUpdateGroupMembers>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateGroupMembers.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
  updateGroupAdmin = async (request: BroadcastTxReq<MsgUpdateGroupAdmin>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateGroupAdmin.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* UpdateGroupMetadata updates the group metadata with given group id and admin address. */
  updateGroupMetadata = async (request: BroadcastTxReq<MsgUpdateGroupMetadata>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateGroupMetadata.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
  createGroupPolicy = async (request: BroadcastTxReq<MsgCreateGroupPolicy>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateGroupPolicy.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* CreateGroupWithPolicy creates a new group with policy. */
  createGroupWithPolicy = async (request: BroadcastTxReq<MsgCreateGroupWithPolicy>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateGroupWithPolicy.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* UpdateGroupPolicyAdmin updates a group policy admin. */
  updateGroupPolicyAdmin = async (request: BroadcastTxReq<MsgUpdateGroupPolicyAdmin>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateGroupPolicyAdmin.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
  updateGroupPolicyDecisionPolicy = async (request: BroadcastTxReq<MsgUpdateGroupPolicyDecisionPolicy>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateGroupPolicyDecisionPolicy.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* UpdateGroupPolicyMetadata updates a group policy metadata. */
  updateGroupPolicyMetadata = async (request: BroadcastTxReq<MsgUpdateGroupPolicyMetadata>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateGroupPolicyMetadata.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* SubmitProposal submits a new proposal. */
  submitProposal = async (request: BroadcastTxReq<MsgSubmitProposal>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSubmitProposal.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* WithdrawProposal aborts a proposal. */
  withdrawProposal = async (request: BroadcastTxReq<MsgWithdrawProposal>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgWithdrawProposal.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* Vote allows a voter to vote on a proposal. */
  vote = async (request: BroadcastTxReq<MsgVote>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgVote.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* Exec executes a proposal. */
  exec = async (request: BroadcastTxReq<MsgExec>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgExec.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* LeaveGroup allows a group member to leave the group. */
  leaveGroup = async (request: BroadcastTxReq<MsgLeaveGroup>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgLeaveGroup.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};