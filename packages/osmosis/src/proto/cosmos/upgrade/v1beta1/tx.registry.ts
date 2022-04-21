import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgSoftwareUpgrade, MsgCancelUpgrade, MsgSoftwareUpgradeResponse, MsgCancelUpgradeResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Plan } from "../../../cosmos/upgrade/v1beta1/upgrade";
import { Registry } from "@cosmjs/proto-signing";
export const registry = {
  "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": MsgSoftwareUpgrade,
  "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": MsgCancelUpgrade
};
export const load = (protoRegistry: Registry) => {
  Object.keys(registry).forEach(typeUrl => {
    protoRegistry.register(typeUrl, registry[typeUrl]);
  });
};