import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgGrantAllowance, MsgRevokeAllowance, MsgGrantAllowanceResponse, MsgRevokeAllowanceResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Registry, GeneratedType } from "@cosmjs/proto-signing";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.feegrant.v1beta1.MsgGrantAllowance", MsgGrantAllowance], ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", MsgRevokeAllowance]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};