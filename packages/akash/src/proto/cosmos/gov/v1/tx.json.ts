import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgSubmitProposal, MsgSubmitProposalResponse, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit, MsgExecLegacyContentResponse, MsgVoteResponse, MsgVoteWeightedResponse, MsgDepositResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { VoteOption, WeightedVoteOption, voteOptionFromJSON, voteOptionToJSON } from "../../../cosmos/gov/v1/gov";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export const json = {
  submitProposal(value: MsgSubmitProposal) {
    return {
      typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
      value
    };
  },

  execLegacyContent(value: MsgExecLegacyContent) {
    return {
      typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
      value
    };
  },

  vote(value: MsgVote) {
    return {
      typeUrl: "/cosmos.gov.v1.MsgVote",
      value
    };
  },

  voteWeighted(value: MsgVoteWeighted) {
    return {
      typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
      value
    };
  },

  deposit(value: MsgDeposit) {
    return {
      typeUrl: "/cosmos.gov.v1.MsgDeposit",
      value
    };
  }

};