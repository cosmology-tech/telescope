import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, VoteOptionSDKType, WeightedVoteOption, WeightedVoteOptionSDKType, voteOptionFromJSON } from "./gov";
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault, Long, padDecimal } from "../../../helpers";
import { MsgSubmitProposal, MsgSubmitProposalSDKType, MsgVote, MsgVoteSDKType, MsgVoteWeighted, MsgVoteWeightedSDKType, MsgDeposit, MsgDepositSDKType } from "./tx";
export interface MsgSubmitProposalAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgSubmitProposal";
  value: {
    content: {
      type_url: string;
      value: Uint8Array;
    };
    initial_deposit: {
      denom: string;
      amount: string;
    }[];
    proposer: string;
  };
}
export interface MsgVoteAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgVote";
  value: {
    proposal_id: string;
    voter: string;
    option: number;
  };
}
export interface MsgVoteWeightedAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgVoteWeighted";
  value: {
    proposal_id: string;
    voter: string;
    options: {
      option: number;
      weight: string;
    }[];
  };
}
export interface MsgDepositAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgDeposit";
  value: {
    proposal_id: string;
    depositor: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export const AminoConverter = {
  "/cosmos.gov.v1beta1.MsgSubmitProposal": {
    aminoType: "cosmos-sdk/MsgSubmitProposal",
    toAmino: ({
      content,
      initialDeposit,
      proposer
    }: MsgSubmitProposal): MsgSubmitProposalAminoType["value"] => {
      return {
        content: {
          type_url: omitDefault(content.typeUrl),
          value: content.value
        },
        initial_deposit: initialDeposit.map(el0 => ({
          denom: omitDefault(el0.denom),
          amount: omitDefault(el0.amount)
        })),
        proposer: omitDefault(proposer)
      };
    },
    fromAmino: ({
      content,
      initial_deposit,
      proposer
    }: MsgSubmitProposalAminoType["value"]): MsgSubmitProposal => {
      return {
        content: content == null ? content : {
          typeUrl: content.type_url,
          value: content.value
        },
        initialDeposit: initial_deposit.map?.(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        proposer
      };
    }
  },
  "/cosmos.gov.v1beta1.MsgVote": {
    aminoType: "cosmos-sdk/MsgVote",
    toAmino: ({
      proposalId,
      voter,
      option
    }: MsgVote): MsgVoteAminoType["value"] => {
      return {
        proposal_id: omitDefault(proposalId)?.toString?.(),
        voter: omitDefault(voter),
        option: option
      };
    },
    fromAmino: ({
      proposal_id,
      voter,
      option
    }: MsgVoteAminoType["value"]): MsgVote => {
      return {
        proposalId: proposal_id == null ? proposal_id : Long.fromString(proposal_id),
        voter,
        option: option == null ? option : voteOptionFromJSON(option)
      };
    }
  },
  "/cosmos.gov.v1beta1.MsgVoteWeighted": {
    aminoType: "cosmos-sdk/MsgVoteWeighted",
    toAmino: ({
      proposalId,
      voter,
      options
    }: MsgVoteWeighted): MsgVoteWeightedAminoType["value"] => {
      return {
        proposal_id: proposalId?.toString?.(),
        voter: omitDefault(voter),
        options: options.map(el0 => ({
          option: el0.option,
          weight: padDecimal(el0.weight)
        }))
      };
    },
    fromAmino: ({
      proposal_id,
      voter,
      options
    }: MsgVoteWeightedAminoType["value"]): MsgVoteWeighted => {
      return {
        proposalId: proposal_id == null ? proposal_id : Long.fromString(proposal_id),
        voter,
        options: options.map?.(el0 => ({
          option: el0.option == null ? el0.option : voteOptionFromJSON(el0.option),
          weight: el0.weight
        }))
      };
    }
  },
  "/cosmos.gov.v1beta1.MsgDeposit": {
    aminoType: "cosmos-sdk/MsgDeposit",
    toAmino: ({
      proposalId,
      depositor,
      amount
    }: MsgDeposit): MsgDepositAminoType["value"] => {
      return {
        proposal_id: proposalId?.toString?.(),
        depositor: omitDefault(depositor),
        amount: amount.map(el0 => ({
          denom: omitDefault(el0.denom),
          amount: omitDefault(el0.amount)
        }))
      };
    },
    fromAmino: ({
      proposal_id,
      depositor,
      amount
    }: MsgDepositAminoType["value"]): MsgDeposit => {
      return {
        proposalId: proposal_id == null ? proposal_id : Long.fromString(proposal_id),
        depositor,
        amount: amount.map?.(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};