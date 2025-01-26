import { buildUseVueMutation } from "../../../vue-query";
import { MsgSubmitProposal, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
import { createSubmitProposal, createVote, createVoteWeighted, createDeposit } from "./tx.rpc.func.ts";
export const useSubmitProposal = buildUseVueMutation<MsgSubmitProposal, Error>({
  builderMutationFn: createSubmitProposal
});
export const useVote = buildUseVueMutation<MsgVote, Error>({
  builderMutationFn: createVote
});
export const useVoteWeighted = buildUseVueMutation<MsgVoteWeighted, Error>({
  builderMutationFn: createVoteWeighted
});
export const useDeposit = buildUseVueMutation<MsgDeposit, Error>({
  builderMutationFn: createDeposit
});