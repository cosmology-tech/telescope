import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgSubmitProposal, MsgSubmitProposalResponse, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit, MsgExecLegacyContentResponse, MsgVoteResponse, MsgVoteWeightedResponse, MsgDepositResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { VoteOption, WeightedVoteOption, voteOptionFromJSON, voteOptionToJSON } from "../../../cosmos/gov/v1/gov";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export const encoded = {
  submitProposal(value: MsgSubmitProposal) {
    return {
      type_url: "/cosmos.gov.v1.MsgSubmitProposal",
      value: MsgSubmitProposal.encode(value).finish()
    };
  },

  execLegacyContent(value: MsgExecLegacyContent) {
    return {
      type_url: "/cosmos.gov.v1.MsgExecLegacyContent",
      value: MsgExecLegacyContent.encode(value).finish()
    };
  },

  vote(value: MsgVote) {
    return {
      type_url: "/cosmos.gov.v1.MsgVote",
      value: MsgVote.encode(value).finish()
    };
  },

  voteWeighted(value: MsgVoteWeighted) {
    return {
      type_url: "/cosmos.gov.v1.MsgVoteWeighted",
      value: MsgVoteWeighted.encode(value).finish()
    };
  },

  deposit(value: MsgDeposit) {
    return {
      type_url: "/cosmos.gov.v1.MsgDeposit",
      value: MsgDeposit.encode(value).finish()
    };
  }

};