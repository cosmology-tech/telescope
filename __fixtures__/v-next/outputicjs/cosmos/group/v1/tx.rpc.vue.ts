import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
import { createCreateGroup, createUpdateGroupMembers, createUpdateGroupAdmin, createUpdateGroupMetadata, createCreateGroupPolicy, createCreateGroupWithPolicy, createUpdateGroupPolicyAdmin, createUpdateGroupPolicyDecisionPolicy, createUpdateGroupPolicyMetadata, createSubmitProposal, createWithdrawProposal, createVote, createExec, createLeaveGroup } from "./tx.rpc.func.ts";
export const useCreateGroup = buildUseVueMutation<MsgCreateGroup, Error>({
  builderMutationFn: createCreateGroup
});
export const useUpdateGroupMembers = buildUseVueMutation<MsgUpdateGroupMembers, Error>({
  builderMutationFn: createUpdateGroupMembers
});
export const useUpdateGroupAdmin = buildUseVueMutation<MsgUpdateGroupAdmin, Error>({
  builderMutationFn: createUpdateGroupAdmin
});
export const useUpdateGroupMetadata = buildUseVueMutation<MsgUpdateGroupMetadata, Error>({
  builderMutationFn: createUpdateGroupMetadata
});
export const useCreateGroupPolicy = buildUseVueMutation<MsgCreateGroupPolicy, Error>({
  builderMutationFn: createCreateGroupPolicy
});
export const useCreateGroupWithPolicy = buildUseVueMutation<MsgCreateGroupWithPolicy, Error>({
  builderMutationFn: createCreateGroupWithPolicy
});
export const useUpdateGroupPolicyAdmin = buildUseVueMutation<MsgUpdateGroupPolicyAdmin, Error>({
  builderMutationFn: createUpdateGroupPolicyAdmin
});
export const useUpdateGroupPolicyDecisionPolicy = buildUseVueMutation<MsgUpdateGroupPolicyDecisionPolicy, Error>({
  builderMutationFn: createUpdateGroupPolicyDecisionPolicy
});
export const useUpdateGroupPolicyMetadata = buildUseVueMutation<MsgUpdateGroupPolicyMetadata, Error>({
  builderMutationFn: createUpdateGroupPolicyMetadata
});
export const useSubmitProposal = buildUseVueMutation<MsgSubmitProposal, Error>({
  builderMutationFn: createSubmitProposal
});
export const useWithdrawProposal = buildUseVueMutation<MsgWithdrawProposal, Error>({
  builderMutationFn: createWithdrawProposal
});
export const useVote = buildUseVueMutation<MsgVote, Error>({
  builderMutationFn: createVote
});
export const useExec = buildUseVueMutation<MsgExec, Error>({
  builderMutationFn: createExec
});
export const useLeaveGroup = buildUseVueMutation<MsgLeaveGroup, Error>({
  builderMutationFn: createLeaveGroup
});