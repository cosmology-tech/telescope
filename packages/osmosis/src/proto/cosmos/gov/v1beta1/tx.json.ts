import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgSubmitProposal, MsgSubmitProposalResponse, MsgVote, MsgVoteWeighted, MsgDeposit, MsgVoteResponse, MsgVoteWeightedResponse, MsgDepositResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { VoteOption, WeightedVoteOption, voteOptionFromJSON, voteOptionToJSON } from "../../../cosmos/gov/v1beta1/gov";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export const json = {
  submitProposal(value: MsgSubmitProposal) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
      value
    };
  },

  vote(value: MsgVote) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVote",
      value
    };
  },

  voteWeighted(value: MsgVoteWeighted) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
      value
    };
  },

  deposit(value: MsgDeposit) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
      value
    };
  }

};