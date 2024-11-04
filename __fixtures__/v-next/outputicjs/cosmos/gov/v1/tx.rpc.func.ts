import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
export const createSubmitProposal = (clientResolver: SigningClientResolver) => buildTx<MsgSubmitProposal>({
  clientResolver,
  typeUrl: MsgSubmitProposal.typeUrl,
  encoders: toEncoders(MsgSubmitProposal),
  converters: toConverters(MsgSubmitProposal)
});
export const useSubmitProposal = buildUseMutation<MsgSubmitProposal, Error>({
  builderMutationFn: createSubmitProposal
});
export const createExecLegacyContent = (clientResolver: SigningClientResolver) => buildTx<MsgExecLegacyContent>({
  clientResolver,
  typeUrl: MsgExecLegacyContent.typeUrl,
  encoders: toEncoders(MsgExecLegacyContent),
  converters: toConverters(MsgExecLegacyContent)
});
export const useExecLegacyContent = buildUseMutation<MsgExecLegacyContent, Error>({
  builderMutationFn: createExecLegacyContent
});
export const createVote = (clientResolver: SigningClientResolver) => buildTx<MsgVote>({
  clientResolver,
  typeUrl: MsgVote.typeUrl,
  encoders: toEncoders(MsgVote),
  converters: toConverters(MsgVote)
});
export const useVote = buildUseMutation<MsgVote, Error>({
  builderMutationFn: createVote
});
export const createVoteWeighted = (clientResolver: SigningClientResolver) => buildTx<MsgVoteWeighted>({
  clientResolver,
  typeUrl: MsgVoteWeighted.typeUrl,
  encoders: toEncoders(MsgVoteWeighted),
  converters: toConverters(MsgVoteWeighted)
});
export const useVoteWeighted = buildUseMutation<MsgVoteWeighted, Error>({
  builderMutationFn: createVoteWeighted
});
export const createDeposit = (clientResolver: SigningClientResolver) => buildTx<MsgDeposit>({
  clientResolver,
  typeUrl: MsgDeposit.typeUrl,
  encoders: toEncoders(MsgDeposit),
  converters: toConverters(MsgDeposit)
});
export const useDeposit = buildUseMutation<MsgDeposit, Error>({
  builderMutationFn: createDeposit
});