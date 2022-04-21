import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgVerifyInvariant, MsgVerifyInvariantResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Registry } from "@cosmjs/proto-signing";
export const registry = {
  "/cosmos.crisis.v1beta1.MsgVerifyInvariant": MsgVerifyInvariant
};
export const load = (protoRegistry: Registry) => {
  Object.keys(registry).forEach(typeUrl => {
    protoRegistry.register(typeUrl, registry[typeUrl]);
  });
};