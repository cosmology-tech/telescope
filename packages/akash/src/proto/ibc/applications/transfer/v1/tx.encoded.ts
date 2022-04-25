import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../../amino.helpers";
import { MsgTransfer, MsgTransferResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Height } from "../../../../ibc/core/client/v1/client";
export const encoded = {
  transfer(value: MsgTransfer) {
    return {
      type_url: "/ibc.applications.transfer.v1.MsgTransfer",
      value: MsgTransfer.encode(value).finish()
    };
  }

};