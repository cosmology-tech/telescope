import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgSend, MsgMultiSend, MsgSendResponse, MsgMultiSendResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Input, Output } from "../../../cosmos/bank/v1beta1/bank";
export const encoded = {
  send(value: MsgSend) {
    return {
      type_url: "/cosmos.bank.v1beta1.MsgSend",
      value: MsgSend.encode(value).finish()
    };
  },

  multiSend(value: MsgMultiSend) {
    return {
      type_url: "/cosmos.bank.v1beta1.MsgMultiSend",
      value: MsgMultiSend.encode(value).finish()
    };
  }

};