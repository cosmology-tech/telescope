import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
export const createCreateGroup = (getSigningClient: SigningClientResolver) => buildTx<MsgCreateGroup>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCreateGroup.typeUrl,
  encoders: toEncoders(MsgCreateGroup),
  converters: toConverters(MsgCreateGroup)
});
export const useCreateGroup = buildUseMutation<MsgCreateGroup, Error>({
  builderMutationFn: createCreateGroup
});
export const createUpdateGroupMembers = (getSigningClient: SigningClientResolver) => buildTx<MsgUpdateGroupMembers>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUpdateGroupMembers.typeUrl,
  encoders: toEncoders(MsgUpdateGroupMembers),
  converters: toConverters(MsgUpdateGroupMembers)
});
export const useUpdateGroupMembers = buildUseMutation<MsgUpdateGroupMembers, Error>({
  builderMutationFn: createUpdateGroupMembers
});
export const createUpdateGroupAdmin = (getSigningClient: SigningClientResolver) => buildTx<MsgUpdateGroupAdmin>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUpdateGroupAdmin.typeUrl,
  encoders: toEncoders(MsgUpdateGroupAdmin),
  converters: toConverters(MsgUpdateGroupAdmin)
});
export const useUpdateGroupAdmin = buildUseMutation<MsgUpdateGroupAdmin, Error>({
  builderMutationFn: createUpdateGroupAdmin
});
export const createUpdateGroupMetadata = (getSigningClient: SigningClientResolver) => buildTx<MsgUpdateGroupMetadata>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUpdateGroupMetadata.typeUrl,
  encoders: toEncoders(MsgUpdateGroupMetadata),
  converters: toConverters(MsgUpdateGroupMetadata)
});
export const useUpdateGroupMetadata = buildUseMutation<MsgUpdateGroupMetadata, Error>({
  builderMutationFn: createUpdateGroupMetadata
});
export const createCreateGroupPolicy = (getSigningClient: SigningClientResolver) => buildTx<MsgCreateGroupPolicy>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCreateGroupPolicy.typeUrl,
  encoders: toEncoders(MsgCreateGroupPolicy),
  converters: toConverters(MsgCreateGroupPolicy)
});
export const useCreateGroupPolicy = buildUseMutation<MsgCreateGroupPolicy, Error>({
  builderMutationFn: createCreateGroupPolicy
});
export const createCreateGroupWithPolicy = (getSigningClient: SigningClientResolver) => buildTx<MsgCreateGroupWithPolicy>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCreateGroupWithPolicy.typeUrl,
  encoders: toEncoders(MsgCreateGroupWithPolicy),
  converters: toConverters(MsgCreateGroupWithPolicy)
});
export const useCreateGroupWithPolicy = buildUseMutation<MsgCreateGroupWithPolicy, Error>({
  builderMutationFn: createCreateGroupWithPolicy
});
export const createUpdateGroupPolicyAdmin = (getSigningClient: SigningClientResolver) => buildTx<MsgUpdateGroupPolicyAdmin>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUpdateGroupPolicyAdmin.typeUrl,
  encoders: toEncoders(MsgUpdateGroupPolicyAdmin),
  converters: toConverters(MsgUpdateGroupPolicyAdmin)
});
export const useUpdateGroupPolicyAdmin = buildUseMutation<MsgUpdateGroupPolicyAdmin, Error>({
  builderMutationFn: createUpdateGroupPolicyAdmin
});
export const createUpdateGroupPolicyDecisionPolicy = (getSigningClient: SigningClientResolver) => buildTx<MsgUpdateGroupPolicyDecisionPolicy>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUpdateGroupPolicyDecisionPolicy.typeUrl,
  encoders: toEncoders(MsgUpdateGroupPolicyDecisionPolicy),
  converters: toConverters(MsgUpdateGroupPolicyDecisionPolicy)
});
export const useUpdateGroupPolicyDecisionPolicy = buildUseMutation<MsgUpdateGroupPolicyDecisionPolicy, Error>({
  builderMutationFn: createUpdateGroupPolicyDecisionPolicy
});
export const createUpdateGroupPolicyMetadata = (getSigningClient: SigningClientResolver) => buildTx<MsgUpdateGroupPolicyMetadata>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUpdateGroupPolicyMetadata.typeUrl,
  encoders: toEncoders(MsgUpdateGroupPolicyMetadata),
  converters: toConverters(MsgUpdateGroupPolicyMetadata)
});
export const useUpdateGroupPolicyMetadata = buildUseMutation<MsgUpdateGroupPolicyMetadata, Error>({
  builderMutationFn: createUpdateGroupPolicyMetadata
});
export const createSubmitProposal = (getSigningClient: SigningClientResolver) => buildTx<MsgSubmitProposal>({
  getSigningClient: getSigningClient,
  typeUrl: MsgSubmitProposal.typeUrl,
  encoders: toEncoders(MsgSubmitProposal),
  converters: toConverters(MsgSubmitProposal)
});
export const useSubmitProposal = buildUseMutation<MsgSubmitProposal, Error>({
  builderMutationFn: createSubmitProposal
});
export const createWithdrawProposal = (getSigningClient: SigningClientResolver) => buildTx<MsgWithdrawProposal>({
  getSigningClient: getSigningClient,
  typeUrl: MsgWithdrawProposal.typeUrl,
  encoders: toEncoders(MsgWithdrawProposal),
  converters: toConverters(MsgWithdrawProposal)
});
export const useWithdrawProposal = buildUseMutation<MsgWithdrawProposal, Error>({
  builderMutationFn: createWithdrawProposal
});
export const createVote = (getSigningClient: SigningClientResolver) => buildTx<MsgVote>({
  getSigningClient: getSigningClient,
  typeUrl: MsgVote.typeUrl,
  encoders: toEncoders(MsgVote),
  converters: toConverters(MsgVote)
});
export const useVote = buildUseMutation<MsgVote, Error>({
  builderMutationFn: createVote
});
export const createExec = (getSigningClient: SigningClientResolver) => buildTx<MsgExec>({
  getSigningClient: getSigningClient,
  typeUrl: MsgExec.typeUrl,
  encoders: toEncoders(MsgExec),
  converters: toConverters(MsgExec)
});
export const useExec = buildUseMutation<MsgExec, Error>({
  builderMutationFn: createExec
});
export const createLeaveGroup = (getSigningClient: SigningClientResolver) => buildTx<MsgLeaveGroup>({
  getSigningClient: getSigningClient,
  typeUrl: MsgLeaveGroup.typeUrl,
  encoders: toEncoders(MsgLeaveGroup),
  converters: toConverters(MsgLeaveGroup)
});
export const useLeaveGroup = buildUseMutation<MsgLeaveGroup, Error>({
  builderMutationFn: createLeaveGroup
});