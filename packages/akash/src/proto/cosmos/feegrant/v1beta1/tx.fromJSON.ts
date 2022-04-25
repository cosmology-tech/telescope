import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgGrantAllowance, MsgRevokeAllowance, MsgGrantAllowanceResponse, MsgRevokeAllowanceResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export const fromJSON = {
  grantAllowance(value: any) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
      value: MsgGrantAllowance.fromJSON(value)
    };
  },

  revokeAllowance(value: any) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
      value: MsgRevokeAllowance.fromJSON(value)
    };
  }

};