import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgSubmitProposal, MsgSubmitProposalResponse, MsgVote, MsgVoteWeighted, MsgDeposit, MsgVoteResponse, MsgVoteWeightedResponse, MsgDepositResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { VoteOption, WeightedVoteOption, voteOptionFromJSON, voteOptionToJSON } from "../../../cosmos/gov/v1beta1/gov";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export const registry = {
  "/cosmos.gov.v1beta1.MsgSubmitProposal": MsgSubmitProposal,
  "/cosmos.gov.v1beta1.MsgVote": MsgVote,
  "/cosmos.gov.v1beta1.MsgVoteWeighted": MsgVoteWeighted,
  "/cosmos.gov.v1beta1.MsgDeposit": MsgDeposit
};