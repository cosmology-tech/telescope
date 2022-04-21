import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgSend, MsgMultiSend, MsgSendResponse, MsgMultiSendResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Input, Output } from "../../../cosmos/bank/v1beta1/bank";
export const registry = {
  "/cosmos.bank.v1beta1.MsgSend": MsgSend,
  "/cosmos.bank.v1beta1.MsgMultiSend": MsgMultiSend
};