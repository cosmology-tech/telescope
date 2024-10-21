import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, VoteOptionSDKType, WeightedVoteOption, WeightedVoteOptionSDKType } from "./gov";
import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSubmitProposal, MsgSubmitProposalSDKType, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, MsgVote, MsgVoteSDKType, MsgVoteResponse, MsgVoteResponseSDKType, MsgVoteWeighted, MsgVoteWeightedSDKType, MsgVoteWeightedResponse, MsgVoteWeightedResponseSDKType, MsgDeposit, MsgDepositSDKType, MsgDepositResponse, MsgDepositResponseSDKType } from "./tx";
export const createSubmitProposal = (getSigningClient: SigningClientResolver) => buildTx<SubmitProposal>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgSubmitProposal.typeUrl,
  encoders: toEncoders(SubmitProposal),
  converters: toConverters(SubmitProposal)
});
export const useSubmitProposal = buildUseMutation<SubmitProposal, Error>({
  builderMutationFn: createSubmitProposal
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
export const createVoteWeighted = (getSigningClient: SigningClientResolver) => buildTx<VoteWeighted>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgVoteWeighted.typeUrl,
  encoders: toEncoders(VoteWeighted),
  converters: toConverters(VoteWeighted)
});
export const useVoteWeighted = buildUseMutation<VoteWeighted, Error>({
  builderMutationFn: createVoteWeighted
});
export const createDeposit = (getSigningClient: SigningClientResolver) => buildTx<Deposit>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgDeposit.typeUrl,
  encoders: toEncoders(Deposit),
  converters: toConverters(Deposit)
});
export const useDeposit = buildUseMutation<Deposit, Error>({
  builderMutationFn: createDeposit
});