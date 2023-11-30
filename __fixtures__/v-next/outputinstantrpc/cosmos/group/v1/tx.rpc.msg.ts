import { Member, MemberSDKType, VoteOption, VoteOptionSDKType } from "./types";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { BroadcastTxRequest, BroadcastTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateGroup, MsgCreateGroupSDKType, MsgCreateGroupResponse, MsgCreateGroupResponseSDKType, MsgUpdateGroupMembers, MsgUpdateGroupMembersSDKType, MsgUpdateGroupMembersResponse, MsgUpdateGroupMembersResponseSDKType, MsgUpdateGroupAdmin, MsgUpdateGroupAdminSDKType, MsgUpdateGroupAdminResponse, MsgUpdateGroupAdminResponseSDKType, MsgUpdateGroupMetadata, MsgUpdateGroupMetadataSDKType, MsgUpdateGroupMetadataResponse, MsgUpdateGroupMetadataResponseSDKType, MsgCreateGroupPolicy, MsgCreateGroupPolicySDKType, MsgCreateGroupPolicyResponse, MsgCreateGroupPolicyResponseSDKType, MsgCreateGroupWithPolicy, MsgCreateGroupWithPolicySDKType, MsgCreateGroupWithPolicyResponse, MsgCreateGroupWithPolicyResponseSDKType, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyAdminSDKType, MsgUpdateGroupPolicyAdminResponse, MsgUpdateGroupPolicyAdminResponseSDKType, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyDecisionPolicySDKType, MsgUpdateGroupPolicyDecisionPolicyResponse, MsgUpdateGroupPolicyDecisionPolicyResponseSDKType, MsgUpdateGroupPolicyMetadata, MsgUpdateGroupPolicyMetadataSDKType, MsgUpdateGroupPolicyMetadataResponse, MsgUpdateGroupPolicyMetadataResponseSDKType, MsgSubmitProposal, MsgSubmitProposalSDKType, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, MsgWithdrawProposal, MsgWithdrawProposalSDKType, MsgWithdrawProposalResponse, MsgWithdrawProposalResponseSDKType, MsgVote, MsgVoteSDKType, MsgVoteResponse, MsgVoteResponseSDKType, MsgExec, MsgExecSDKType, MsgExecResponse, MsgExecResponseSDKType, MsgLeaveGroup, MsgLeaveGroupSDKType, MsgLeaveGroupResponse, MsgLeaveGroupResponseSDKType } from "./tx";
/** Msg is the cosmos.group.v1 Msg service. */
export interface Msg {
  /** CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
  createGroup(request: BroadcastTxRequest<MsgCreateGroup>): Promise<BroadcastTxResponse<MsgCreateGroupResponse>>;
  /** UpdateGroupMembers updates the group members with given group id and admin address. */
  updateGroupMembers(request: BroadcastTxRequest<MsgUpdateGroupMembers>): Promise<BroadcastTxResponse<MsgUpdateGroupMembersResponse>>;
  /** UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
  updateGroupAdmin(request: BroadcastTxRequest<MsgUpdateGroupAdmin>): Promise<BroadcastTxResponse<MsgUpdateGroupAdminResponse>>;
  /** UpdateGroupMetadata updates the group metadata with given group id and admin address. */
  updateGroupMetadata(request: BroadcastTxRequest<MsgUpdateGroupMetadata>): Promise<BroadcastTxResponse<MsgUpdateGroupMetadataResponse>>;
  /** CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
  createGroupPolicy(request: BroadcastTxRequest<MsgCreateGroupPolicy>): Promise<BroadcastTxResponse<MsgCreateGroupPolicyResponse>>;
  /** CreateGroupWithPolicy creates a new group with policy. */
  createGroupWithPolicy(request: BroadcastTxRequest<MsgCreateGroupWithPolicy>): Promise<BroadcastTxResponse<MsgCreateGroupWithPolicyResponse>>;
  /** UpdateGroupPolicyAdmin updates a group policy admin. */
  updateGroupPolicyAdmin(request: BroadcastTxRequest<MsgUpdateGroupPolicyAdmin>): Promise<BroadcastTxResponse<MsgUpdateGroupPolicyAdminResponse>>;
  /** UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
  updateGroupPolicyDecisionPolicy(request: BroadcastTxRequest<MsgUpdateGroupPolicyDecisionPolicy>): Promise<BroadcastTxResponse<MsgUpdateGroupPolicyDecisionPolicyResponse>>;
  /** UpdateGroupPolicyMetadata updates a group policy metadata. */
  updateGroupPolicyMetadata(request: BroadcastTxRequest<MsgUpdateGroupPolicyMetadata>): Promise<BroadcastTxResponse<MsgUpdateGroupPolicyMetadataResponse>>;
  /** SubmitProposal submits a new proposal. */
  submitProposal(request: BroadcastTxRequest<MsgSubmitProposal>): Promise<BroadcastTxResponse<MsgSubmitProposalResponse>>;
  /** WithdrawProposal aborts a proposal. */
  withdrawProposal(request: BroadcastTxRequest<MsgWithdrawProposal>): Promise<BroadcastTxResponse<MsgWithdrawProposalResponse>>;
  /** Vote allows a voter to vote on a proposal. */
  vote(request: BroadcastTxRequest<MsgVote>): Promise<BroadcastTxResponse<MsgVoteResponse>>;
  /** Exec executes a proposal. */
  exec(request: BroadcastTxRequest<MsgExec>): Promise<BroadcastTxResponse<MsgExecResponse>>;
  /** LeaveGroup allows a group member to leave the group. */
  leaveGroup(request: BroadcastTxRequest<MsgLeaveGroup>): Promise<BroadcastTxResponse<MsgLeaveGroupResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
  createGroup = async (request: BroadcastTxRequest<MsgCreateGroup>): Promise<BroadcastTxResponse<MsgCreateGroupResponse>> => {
    const data = [{
      typeUrl: MsgCreateGroup.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCreateGroupResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* UpdateGroupMembers updates the group members with given group id and admin address. */
  updateGroupMembers = async (request: BroadcastTxRequest<MsgUpdateGroupMembers>): Promise<BroadcastTxResponse<MsgUpdateGroupMembersResponse>> => {
    const data = [{
      typeUrl: MsgUpdateGroupMembers.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgUpdateGroupMembersResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
  updateGroupAdmin = async (request: BroadcastTxRequest<MsgUpdateGroupAdmin>): Promise<BroadcastTxResponse<MsgUpdateGroupAdminResponse>> => {
    const data = [{
      typeUrl: MsgUpdateGroupAdmin.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgUpdateGroupAdminResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* UpdateGroupMetadata updates the group metadata with given group id and admin address. */
  updateGroupMetadata = async (request: BroadcastTxRequest<MsgUpdateGroupMetadata>): Promise<BroadcastTxResponse<MsgUpdateGroupMetadataResponse>> => {
    const data = [{
      typeUrl: MsgUpdateGroupMetadata.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgUpdateGroupMetadataResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
  createGroupPolicy = async (request: BroadcastTxRequest<MsgCreateGroupPolicy>): Promise<BroadcastTxResponse<MsgCreateGroupPolicyResponse>> => {
    const data = [{
      typeUrl: MsgCreateGroupPolicy.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCreateGroupPolicyResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* CreateGroupWithPolicy creates a new group with policy. */
  createGroupWithPolicy = async (request: BroadcastTxRequest<MsgCreateGroupWithPolicy>): Promise<BroadcastTxResponse<MsgCreateGroupWithPolicyResponse>> => {
    const data = [{
      typeUrl: MsgCreateGroupWithPolicy.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCreateGroupWithPolicyResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* UpdateGroupPolicyAdmin updates a group policy admin. */
  updateGroupPolicyAdmin = async (request: BroadcastTxRequest<MsgUpdateGroupPolicyAdmin>): Promise<BroadcastTxResponse<MsgUpdateGroupPolicyAdminResponse>> => {
    const data = [{
      typeUrl: MsgUpdateGroupPolicyAdmin.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgUpdateGroupPolicyAdminResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
  updateGroupPolicyDecisionPolicy = async (request: BroadcastTxRequest<MsgUpdateGroupPolicyDecisionPolicy>): Promise<BroadcastTxResponse<MsgUpdateGroupPolicyDecisionPolicyResponse>> => {
    const data = [{
      typeUrl: MsgUpdateGroupPolicyDecisionPolicy.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgUpdateGroupPolicyDecisionPolicyResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* UpdateGroupPolicyMetadata updates a group policy metadata. */
  updateGroupPolicyMetadata = async (request: BroadcastTxRequest<MsgUpdateGroupPolicyMetadata>): Promise<BroadcastTxResponse<MsgUpdateGroupPolicyMetadataResponse>> => {
    const data = [{
      typeUrl: MsgUpdateGroupPolicyMetadata.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgUpdateGroupPolicyMetadataResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* SubmitProposal submits a new proposal. */
  submitProposal = async (request: BroadcastTxRequest<MsgSubmitProposal>): Promise<BroadcastTxResponse<MsgSubmitProposalResponse>> => {
    const data = [{
      typeUrl: MsgSubmitProposal.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgSubmitProposalResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* WithdrawProposal aborts a proposal. */
  withdrawProposal = async (request: BroadcastTxRequest<MsgWithdrawProposal>): Promise<BroadcastTxResponse<MsgWithdrawProposalResponse>> => {
    const data = [{
      typeUrl: MsgWithdrawProposal.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgWithdrawProposalResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* Vote allows a voter to vote on a proposal. */
  vote = async (request: BroadcastTxRequest<MsgVote>): Promise<BroadcastTxResponse<MsgVoteResponse>> => {
    const data = [{
      typeUrl: MsgVote.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgVoteResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* Exec executes a proposal. */
  exec = async (request: BroadcastTxRequest<MsgExec>): Promise<BroadcastTxResponse<MsgExecResponse>> => {
    const data = [{
      typeUrl: MsgExec.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgExecResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* LeaveGroup allows a group member to leave the group. */
  leaveGroup = async (request: BroadcastTxRequest<MsgLeaveGroup>): Promise<BroadcastTxResponse<MsgLeaveGroupResponse>> => {
    const data = [{
      typeUrl: MsgLeaveGroup.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgLeaveGroupResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}