import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../../amino.helpers";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgCreateClientResponse, MsgUpdateClientResponse, MsgUpgradeClientResponse, MsgSubmitMisbehaviourResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { Registry } from "@cosmjs/proto-signing";
export const registry = {
  "/ibc.core.client.v1.MsgCreateClient": MsgCreateClient,
  "/ibc.core.client.v1.MsgUpdateClient": MsgUpdateClient,
  "/ibc.core.client.v1.MsgUpgradeClient": MsgUpgradeClient,
  "/ibc.core.client.v1.MsgSubmitMisbehaviour": MsgSubmitMisbehaviour
};
export const load = (protoRegistry: Registry) => {
  Object.keys(registry).forEach(typeUrl => {
    protoRegistry.register(typeUrl, registry[typeUrl]);
  });
};