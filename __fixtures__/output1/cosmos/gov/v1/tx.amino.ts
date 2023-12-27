import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, VoteOptionSDKType, WeightedVoteOption, WeightedVoteOptionSDKType, voteOptionFromJSON } from "./gov";
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault, Long } from "../../../helpers";
import { MsgSubmitProposal, MsgSubmitProposalSDKType, MsgExecLegacyContent, MsgExecLegacyContentSDKType, MsgVote, MsgVoteSDKType, MsgVoteWeighted, MsgVoteWeightedSDKType, MsgDeposit, MsgDepositSDKType } from "./tx";
export interface MsgSubmitProposalAminoType extends AminoMsg {
  type: "cosmos-sdk/v1/MsgSubmitProposal";
  value: {
    messages: {
      type_url: string;
      value: Uint8Array;
    }[];
    initial_deposit: {
      denom: string;
      amount: string;
    }[];
    proposer: string;
    metadata: string;
  };
}
export interface MsgExecLegacyContentAminoType extends AminoMsg {
  type: "cosmos-sdk/v1/MsgExecLegacyContent";
  value: {
    content: {
      type_url: string;
      value: Uint8Array;
    };
    authority: string;
  };
}
export interface MsgVoteAminoType extends AminoMsg {
  type: "cosmos-sdk/v1/MsgVote";
  value: {
    proposal_id: string;
    voter: string;
    option: number;
    metadata: string;
  };
}
export interface MsgVoteWeightedAminoType extends AminoMsg {
  type: "cosmos-sdk/v1/MsgVoteWeighted";
  value: {
    proposal_id: string;
    voter: string;
    options: {
      option: number;
      weight: string;
    }[];
    metadata: string;
  };
}
export interface MsgDepositAminoType extends AminoMsg {
  type: "cosmos-sdk/v1/MsgDeposit";
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
  "/cosmos.gov.v1.MsgSubmitProposal": {
    aminoType: "cosmos-sdk/v1/MsgSubmitProposal",
    toAmino: ({
      messages,
      initialDeposit,
      proposer,
      metadata
    }: MsgSubmitProposal): MsgSubmitProposalAminoType["value"] => {
      return {
        messages: messages.map(el0 => ({
          type_url: omitDefault(el0.typeUrl),
          value: el0.value
        })),
        initial_deposit: initialDeposit.map(el0 => ({
          denom: omitDefault(el0.denom),
          amount: omitDefault(el0.amount)
        })),
        proposer: omitDefault(proposer),
        metadata: omitDefault(metadata)
      };
    },
    fromAmino: ({
      messages,
      initial_deposit,
      proposer,
      metadata
    }: MsgSubmitProposalAminoType["value"]): MsgSubmitProposal => {
      return {
        messages: messages.map(el0 => ({
          typeUrl: el0.type_url,
          value: el0.value
        })),
        initialDeposit: initial_deposit.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        proposer,
        metadata
      };
    }
  },
  "/cosmos.gov.v1.MsgExecLegacyContent": {
    aminoType: "cosmos-sdk/v1/MsgExecLegacyContent",
    toAmino: ({
      content,
      authority
    }: MsgExecLegacyContent): MsgExecLegacyContentAminoType["value"] => {
      return {
        content: {
          type_url: omitDefault(content.typeUrl),
          value: content.value
        },
        authority: omitDefault(authority)
      };
    },
    fromAmino: ({
      content,
      authority
    }: MsgExecLegacyContentAminoType["value"]): MsgExecLegacyContent => {
      return {
        content: {
          typeUrl: content.type_url,
          value: content.value
        },
        authority
      };
    }
  },
  "/cosmos.gov.v1.MsgVote": {
    aminoType: "cosmos-sdk/v1/MsgVote",
    toAmino: ({
      proposalId,
      voter,
      option,
      metadata
    }: MsgVote): MsgVoteAminoType["value"] => {
      return {
        proposal_id: proposalId?.toString?.(),
        voter: omitDefault(voter),
        option: option,
        metadata: omitDefault(metadata)
      };
    },
    fromAmino: ({
      proposal_id,
      voter,
      option,
      metadata
    }: MsgVoteAminoType["value"]): MsgVote => {
      return {
        proposalId: Long.fromString(proposal_id),
        voter,
        option: voteOptionFromJSON(option),
        metadata
      };
    }
  },
  "/cosmos.gov.v1.MsgVoteWeighted": {
    aminoType: "cosmos-sdk/v1/MsgVoteWeighted",
    toAmino: ({
      proposalId,
      voter,
      options,
      metadata
    }: MsgVoteWeighted): MsgVoteWeightedAminoType["value"] => {
      return {
        proposal_id: proposalId?.toString?.(),
        voter: omitDefault(voter),
        options: options.map(el0 => ({
          option: el0.option,
          weight: omitDefault(el0.weight)
        })),
        metadata: omitDefault(metadata)
      };
    },
    fromAmino: ({
      proposal_id,
      voter,
      options,
      metadata
    }: MsgVoteWeightedAminoType["value"]): MsgVoteWeighted => {
      return {
        proposalId: Long.fromString(proposal_id),
        voter,
        options: options.map(el0 => ({
          option: voteOptionFromJSON(el0.option),
          weight: el0.weight
        })),
        metadata
      };
    }
  },
  "/cosmos.gov.v1.MsgDeposit": {
    aminoType: "cosmos-sdk/v1/MsgDeposit",
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
        proposalId: Long.fromString(proposal_id),
        depositor,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};