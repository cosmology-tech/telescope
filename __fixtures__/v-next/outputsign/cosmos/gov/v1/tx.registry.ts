import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, VoteOptionSDKType, WeightedVoteOption, WeightedVoteOptionSDKType } from "./gov";
import { TelescopeGeneratedType } from "../../../types";
import { MsgSubmitProposal, MsgSubmitProposalSDKType, MsgExecLegacyContent, MsgExecLegacyContentSDKType, MsgVote, MsgVoteSDKType, MsgVoteWeighted, MsgVoteWeightedSDKType, MsgDeposit, MsgDepositSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.gov.v1.MsgSubmitProposal", MsgSubmitProposal], ["/cosmos.gov.v1.MsgExecLegacyContent", MsgExecLegacyContent], ["/cosmos.gov.v1.MsgVote", MsgVote], ["/cosmos.gov.v1.MsgVoteWeighted", MsgVoteWeighted], ["/cosmos.gov.v1.MsgDeposit", MsgDeposit]];