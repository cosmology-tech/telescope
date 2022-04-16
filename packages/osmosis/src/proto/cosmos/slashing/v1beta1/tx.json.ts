import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgUnjail, MsgUnjailResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
export const json = {
  unjail(value: MsgUnjail) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
      value
    };
  }

};