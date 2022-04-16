import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgUnjail, MsgUnjailResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
export const encoded = {
  unjail(value: MsgUnjail) {
    return {
      type_url: "/cosmos.slashing.v1beta1.MsgUnjail",
      value: MsgUnjail.encode(value).finish()
    };
  }

};