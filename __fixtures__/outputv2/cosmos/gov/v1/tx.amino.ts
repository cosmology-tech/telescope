import { Any, AnyAmino, AnyAminoType, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, VoteOptionAmino, VoteOptionAminoType, VoteOptionSDKType, WeightedVoteOption, WeightedVoteOptionAmino, WeightedVoteOptionAminoType, WeightedVoteOptionSDKType } from "./gov";
import { TextProposal, TextProposalAmino, TextProposalAminoType, TextProposalSDKType } from "../v1beta1/gov";
import { RegisterIncentiveProposal, RegisterIncentiveProposalAmino, RegisterIncentiveProposalAminoType, RegisterIncentiveProposalSDKType } from "../../../evmos/incentives/v1/incentives";
import { ClientUpdateProposal, ClientUpdateProposalAmino, ClientUpdateProposalAminoType, ClientUpdateProposalSDKType, UpgradeProposal, UpgradeProposalAmino, UpgradeProposalAminoType, UpgradeProposalSDKType } from "../../../ibc/core/client/v1/client";
import { ReplacePoolIncentivesProposal, ReplacePoolIncentivesProposalAmino, ReplacePoolIncentivesProposalAminoType, ReplacePoolIncentivesProposalSDKType, UpdatePoolIncentivesProposal, UpdatePoolIncentivesProposalAmino, UpdatePoolIncentivesProposalAminoType, UpdatePoolIncentivesProposalSDKType } from "../../../osmosis/pool-incentives/v1beta1/gov";
import { SetSuperfluidAssetsProposal, SetSuperfluidAssetsProposalAmino, SetSuperfluidAssetsProposalAminoType, SetSuperfluidAssetsProposalSDKType, RemoveSuperfluidAssetsProposal, RemoveSuperfluidAssetsProposalAmino, RemoveSuperfluidAssetsProposalAminoType, RemoveSuperfluidAssetsProposalSDKType, UpdateUnpoolWhiteListProposal, UpdateUnpoolWhiteListProposalAmino, UpdateUnpoolWhiteListProposalAminoType, UpdateUnpoolWhiteListProposalSDKType } from "../../../osmosis/superfluid/v1beta1/gov";
import { UpdateFeeTokenProposal, UpdateFeeTokenProposalAmino, UpdateFeeTokenProposalAminoType, UpdateFeeTokenProposalSDKType } from "../../../osmosis/txfees/v1beta1/gov";
import { MsgSubmitProposal, MsgSubmitProposalAmino, MsgSubmitProposalAminoType, MsgSubmitProposalSDKType, MsgExecLegacyContent, MsgExecLegacyContentAmino, MsgExecLegacyContentAminoType, MsgExecLegacyContentSDKType, MsgVote, MsgVoteAmino, MsgVoteAminoType, MsgVoteSDKType, MsgVoteWeighted, MsgVoteWeightedAmino, MsgVoteWeightedAminoType, MsgVoteWeightedSDKType, MsgDeposit, MsgDepositAmino, MsgDepositAminoType, MsgDepositSDKType } from "./tx";
export const AminoConverter = {
  "/cosmos.gov.v1.MsgSubmitProposal": {
    aminoType: "cosmos-sdk/v1/MsgSubmitProposal",
    toAmino: MsgSubmitProposal.toAmino,
    fromAmino: MsgSubmitProposal.fromAmino
  },
  "/cosmos.gov.v1.MsgExecLegacyContent": {
    aminoType: "cosmos-sdk/v1/MsgExecLegacyContent",
    toAmino: MsgExecLegacyContent.toAmino,
    fromAmino: MsgExecLegacyContent.fromAmino
  },
  "/cosmos.gov.v1.MsgVote": {
    aminoType: "cosmos-sdk/v1/MsgVote",
    toAmino: MsgVote.toAmino,
    fromAmino: MsgVote.fromAmino
  },
  "/cosmos.gov.v1.MsgVoteWeighted": {
    aminoType: "cosmos-sdk/v1/MsgVoteWeighted",
    toAmino: MsgVoteWeighted.toAmino,
    fromAmino: MsgVoteWeighted.fromAmino
  },
  "/cosmos.gov.v1.MsgDeposit": {
    aminoType: "cosmos-sdk/v1/MsgDeposit",
    toAmino: MsgDeposit.toAmino,
    fromAmino: MsgDeposit.fromAmino
  }
};