import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgSubmitProposal, MsgSubmitProposalResponse, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit, MsgExecLegacyContentResponse, MsgVoteResponse, MsgVoteWeightedResponse, MsgDepositResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { VoteOption, WeightedVoteOption, voteOptionFromJSON, voteOptionToJSON } from "../../../cosmos/gov/v1/gov";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Registry } from "@cosmjs/proto-signing";
export const registry = {
  "/cosmos.gov.v1.MsgSubmitProposal": MsgSubmitProposal,
  "/cosmos.gov.v1.MsgExecLegacyContent": MsgExecLegacyContent,
  "/cosmos.gov.v1.MsgVote": MsgVote,
  "/cosmos.gov.v1.MsgVoteWeighted": MsgVoteWeighted,
  "/cosmos.gov.v1.MsgDeposit": MsgDeposit
};
export const load = (protoRegistry: Registry) => {
  Object.keys(registry).forEach(typeUrl => {
    protoRegistry.register(typeUrl, registry[typeUrl]);
  });
};