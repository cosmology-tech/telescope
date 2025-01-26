import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
export const createCreateGroup = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateGroup>({
  clientResolver,
  typeUrl: MsgCreateGroup.typeUrl,
  encoders: toEncoders(MsgCreateGroup),
  converters: toConverters(MsgCreateGroup)
});
export const createUpdateGroupMembers = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateGroupMembers>({
  clientResolver,
  typeUrl: MsgUpdateGroupMembers.typeUrl,
  encoders: toEncoders(MsgUpdateGroupMembers),
  converters: toConverters(MsgUpdateGroupMembers)
});
export const createUpdateGroupAdmin = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateGroupAdmin>({
  clientResolver,
  typeUrl: MsgUpdateGroupAdmin.typeUrl,
  encoders: toEncoders(MsgUpdateGroupAdmin),
  converters: toConverters(MsgUpdateGroupAdmin)
});
export const createUpdateGroupMetadata = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateGroupMetadata>({
  clientResolver,
  typeUrl: MsgUpdateGroupMetadata.typeUrl,
  encoders: toEncoders(MsgUpdateGroupMetadata),
  converters: toConverters(MsgUpdateGroupMetadata)
});
export const createCreateGroupPolicy = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateGroupPolicy>({
  clientResolver,
  typeUrl: MsgCreateGroupPolicy.typeUrl,
  encoders: toEncoders(MsgCreateGroupPolicy),
  converters: toConverters(MsgCreateGroupPolicy)
});
export const createCreateGroupWithPolicy = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateGroupWithPolicy>({
  clientResolver,
  typeUrl: MsgCreateGroupWithPolicy.typeUrl,
  encoders: toEncoders(MsgCreateGroupWithPolicy),
  converters: toConverters(MsgCreateGroupWithPolicy)
});
export const createUpdateGroupPolicyAdmin = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateGroupPolicyAdmin>({
  clientResolver,
  typeUrl: MsgUpdateGroupPolicyAdmin.typeUrl,
  encoders: toEncoders(MsgUpdateGroupPolicyAdmin),
  converters: toConverters(MsgUpdateGroupPolicyAdmin)
});
export const createUpdateGroupPolicyDecisionPolicy = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateGroupPolicyDecisionPolicy>({
  clientResolver,
  typeUrl: MsgUpdateGroupPolicyDecisionPolicy.typeUrl,
  encoders: toEncoders(MsgUpdateGroupPolicyDecisionPolicy),
  converters: toConverters(MsgUpdateGroupPolicyDecisionPolicy)
});
export const createUpdateGroupPolicyMetadata = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateGroupPolicyMetadata>({
  clientResolver,
  typeUrl: MsgUpdateGroupPolicyMetadata.typeUrl,
  encoders: toEncoders(MsgUpdateGroupPolicyMetadata),
  converters: toConverters(MsgUpdateGroupPolicyMetadata)
});
export const createSubmitProposal = (clientResolver?: SigningClientResolver) => buildTx<MsgSubmitProposal>({
  clientResolver,
  typeUrl: MsgSubmitProposal.typeUrl,
  encoders: toEncoders(MsgSubmitProposal),
  converters: toConverters(MsgSubmitProposal)
});
export const createWithdrawProposal = (clientResolver?: SigningClientResolver) => buildTx<MsgWithdrawProposal>({
  clientResolver,
  typeUrl: MsgWithdrawProposal.typeUrl,
  encoders: toEncoders(MsgWithdrawProposal),
  converters: toConverters(MsgWithdrawProposal)
});
export const createVote = (clientResolver?: SigningClientResolver) => buildTx<MsgVote>({
  clientResolver,
  typeUrl: MsgVote.typeUrl,
  encoders: toEncoders(MsgVote),
  converters: toConverters(MsgVote)
});
export const createExec = (clientResolver?: SigningClientResolver) => buildTx<MsgExec>({
  clientResolver,
  typeUrl: MsgExec.typeUrl,
  encoders: toEncoders(MsgExec),
  converters: toConverters(MsgExec)
});
export const createLeaveGroup = (clientResolver?: SigningClientResolver) => buildTx<MsgLeaveGroup>({
  clientResolver,
  typeUrl: MsgLeaveGroup.typeUrl,
  encoders: toEncoders(MsgLeaveGroup),
  converters: toConverters(MsgLeaveGroup)
});