import { Member, MemberSDKType, VoteOption, VoteOptionSDKType } from "./types";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateGroup, MsgCreateGroupSDKType, MsgCreateGroupResponse, MsgCreateGroupResponseSDKType, MsgUpdateGroupMembers, MsgUpdateGroupMembersSDKType, MsgUpdateGroupMembersResponse, MsgUpdateGroupMembersResponseSDKType, MsgUpdateGroupAdmin, MsgUpdateGroupAdminSDKType, MsgUpdateGroupAdminResponse, MsgUpdateGroupAdminResponseSDKType, MsgUpdateGroupMetadata, MsgUpdateGroupMetadataSDKType, MsgUpdateGroupMetadataResponse, MsgUpdateGroupMetadataResponseSDKType, MsgCreateGroupPolicy, MsgCreateGroupPolicySDKType, MsgCreateGroupPolicyResponse, MsgCreateGroupPolicyResponseSDKType, MsgCreateGroupWithPolicy, MsgCreateGroupWithPolicySDKType, MsgCreateGroupWithPolicyResponse, MsgCreateGroupWithPolicyResponseSDKType, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyAdminSDKType, MsgUpdateGroupPolicyAdminResponse, MsgUpdateGroupPolicyAdminResponseSDKType, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyDecisionPolicySDKType, MsgUpdateGroupPolicyDecisionPolicyResponse, MsgUpdateGroupPolicyDecisionPolicyResponseSDKType, MsgUpdateGroupPolicyMetadata, MsgUpdateGroupPolicyMetadataSDKType, MsgUpdateGroupPolicyMetadataResponse, MsgUpdateGroupPolicyMetadataResponseSDKType, MsgSubmitProposal, MsgSubmitProposalSDKType, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, MsgWithdrawProposal, MsgWithdrawProposalSDKType, MsgWithdrawProposalResponse, MsgWithdrawProposalResponseSDKType, MsgVote, MsgVoteSDKType, MsgVoteResponse, MsgVoteResponseSDKType, MsgExec, MsgExecSDKType, MsgExecResponse, MsgExecResponseSDKType, MsgLeaveGroup, MsgLeaveGroupSDKType, MsgLeaveGroupResponse, MsgLeaveGroupResponseSDKType } from "./tx";
export const createCreateGroup = (getSigningClient: SigningClientResolver) => buildTx<CreateGroup>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCreateGroup.typeUrl,
  encoders: toEncoders(CreateGroup),
  converters: toConverters(CreateGroup)
});
export const useCreateGroup = buildUseMutation<CreateGroup, Error>({
  builderMutationFn: createCreateGroup
});
export const createUpdateGroupMembers = (getSigningClient: SigningClientResolver) => buildTx<UpdateGroupMembers>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgUpdateGroupMembers.typeUrl,
  encoders: toEncoders(UpdateGroupMembers),
  converters: toConverters(UpdateGroupMembers)
});
export const useUpdateGroupMembers = buildUseMutation<UpdateGroupMembers, Error>({
  builderMutationFn: createUpdateGroupMembers
});
export const createUpdateGroupAdmin = (getSigningClient: SigningClientResolver) => buildTx<UpdateGroupAdmin>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgUpdateGroupAdmin.typeUrl,
  encoders: toEncoders(UpdateGroupAdmin),
  converters: toConverters(UpdateGroupAdmin)
});
export const useUpdateGroupAdmin = buildUseMutation<UpdateGroupAdmin, Error>({
  builderMutationFn: createUpdateGroupAdmin
});
export const createUpdateGroupMetadata = (getSigningClient: SigningClientResolver) => buildTx<UpdateGroupMetadata>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgUpdateGroupMetadata.typeUrl,
  encoders: toEncoders(UpdateGroupMetadata),
  converters: toConverters(UpdateGroupMetadata)
});
export const useUpdateGroupMetadata = buildUseMutation<UpdateGroupMetadata, Error>({
  builderMutationFn: createUpdateGroupMetadata
});
export const createCreateGroupPolicy = (getSigningClient: SigningClientResolver) => buildTx<CreateGroupPolicy>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCreateGroupPolicy.typeUrl,
  encoders: toEncoders(CreateGroupPolicy),
  converters: toConverters(CreateGroupPolicy)
});
export const useCreateGroupPolicy = buildUseMutation<CreateGroupPolicy, Error>({
  builderMutationFn: createCreateGroupPolicy
});
export const createCreateGroupWithPolicy = (getSigningClient: SigningClientResolver) => buildTx<CreateGroupWithPolicy>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCreateGroupWithPolicy.typeUrl,
  encoders: toEncoders(CreateGroupWithPolicy),
  converters: toConverters(CreateGroupWithPolicy)
});
export const useCreateGroupWithPolicy = buildUseMutation<CreateGroupWithPolicy, Error>({
  builderMutationFn: createCreateGroupWithPolicy
});
export const createUpdateGroupPolicyAdmin = (getSigningClient: SigningClientResolver) => buildTx<UpdateGroupPolicyAdmin>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgUpdateGroupPolicyAdmin.typeUrl,
  encoders: toEncoders(UpdateGroupPolicyAdmin),
  converters: toConverters(UpdateGroupPolicyAdmin)
});
export const useUpdateGroupPolicyAdmin = buildUseMutation<UpdateGroupPolicyAdmin, Error>({
  builderMutationFn: createUpdateGroupPolicyAdmin
});
export const createUpdateGroupPolicyDecisionPolicy = (getSigningClient: SigningClientResolver) => buildTx<UpdateGroupPolicyDecisionPolicy>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgUpdateGroupPolicyDecisionPolicy.typeUrl,
  encoders: toEncoders(UpdateGroupPolicyDecisionPolicy),
  converters: toConverters(UpdateGroupPolicyDecisionPolicy)
});
export const useUpdateGroupPolicyDecisionPolicy = buildUseMutation<UpdateGroupPolicyDecisionPolicy, Error>({
  builderMutationFn: createUpdateGroupPolicyDecisionPolicy
});
export const createUpdateGroupPolicyMetadata = (getSigningClient: SigningClientResolver) => buildTx<UpdateGroupPolicyMetadata>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgUpdateGroupPolicyMetadata.typeUrl,
  encoders: toEncoders(UpdateGroupPolicyMetadata),
  converters: toConverters(UpdateGroupPolicyMetadata)
});
export const useUpdateGroupPolicyMetadata = buildUseMutation<UpdateGroupPolicyMetadata, Error>({
  builderMutationFn: createUpdateGroupPolicyMetadata
});
export const createSubmitProposal = (getSigningClient: SigningClientResolver) => buildTx<SubmitProposal>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgSubmitProposal.typeUrl,
  encoders: toEncoders(SubmitProposal),
  converters: toConverters(SubmitProposal)
});
export const useSubmitProposal = buildUseMutation<SubmitProposal, Error>({
  builderMutationFn: createSubmitProposal
});
export const createWithdrawProposal = (getSigningClient: SigningClientResolver) => buildTx<WithdrawProposal>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgWithdrawProposal.typeUrl,
  encoders: toEncoders(WithdrawProposal),
  converters: toConverters(WithdrawProposal)
});
export const useWithdrawProposal = buildUseMutation<WithdrawProposal, Error>({
  builderMutationFn: createWithdrawProposal
});
export const createVote = (getSigningClient: SigningClientResolver) => buildTx<Vote>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgVote.typeUrl,
  encoders: toEncoders(Vote),
  converters: toConverters(Vote)
});
export const useVote = buildUseMutation<Vote, Error>({
  builderMutationFn: createVote
});
export const createExec = (getSigningClient: SigningClientResolver) => buildTx<Exec>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgExec.typeUrl,
  encoders: toEncoders(Exec),
  converters: toConverters(Exec)
});
export const useExec = buildUseMutation<Exec, Error>({
  builderMutationFn: createExec
});
export const createLeaveGroup = (getSigningClient: SigningClientResolver) => buildTx<LeaveGroup>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgLeaveGroup.typeUrl,
  encoders: toEncoders(LeaveGroup),
  converters: toConverters(LeaveGroup)
});
export const useLeaveGroup = buildUseMutation<LeaveGroup, Error>({
  builderMutationFn: createLeaveGroup
});