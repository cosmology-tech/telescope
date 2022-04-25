import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgSend, MsgSendResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
export const toJSON = {
  send(value: MsgSend) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.MsgSend",
      value: MsgSend.toJSON(value)
    };
  }

};