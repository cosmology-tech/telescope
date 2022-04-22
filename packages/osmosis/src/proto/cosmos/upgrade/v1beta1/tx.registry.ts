import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgSoftwareUpgrade, MsgCancelUpgrade, MsgSoftwareUpgradeResponse, MsgCancelUpgradeResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Plan } from "../../../cosmos/upgrade/v1beta1/upgrade";
import { Registry, GeneratedType } from "@cosmjs/proto-signing";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade", MsgSoftwareUpgrade], ["/cosmos.upgrade.v1beta1.MsgCancelUpgrade", MsgCancelUpgrade]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};