import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgSoftwareUpgrade, MsgCancelUpgrade, MsgSoftwareUpgradeResponse, MsgCancelUpgradeResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Plan } from "../../../cosmos/upgrade/v1beta1/upgrade";
export const encoded = {
  softwareUpgrade(value: MsgSoftwareUpgrade) {
    return {
      type_url: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
      value: MsgSoftwareUpgrade.encode(value).finish()
    };
  },

  cancelUpgrade(value: MsgCancelUpgrade) {
    return {
      type_url: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
      value: MsgCancelUpgrade.encode(value).finish()
    };
  }

};