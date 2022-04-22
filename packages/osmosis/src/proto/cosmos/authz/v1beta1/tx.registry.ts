import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgGrant, MsgExecResponse, MsgExec, MsgRevoke, MsgGrantResponse, MsgRevokeResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Grant } from "../../../cosmos/authz/v1beta1/authz";
import { Any } from "../../../google/protobuf/any";
import { Registry, GeneratedType } from "@cosmjs/proto-signing";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.authz.v1beta1.MsgGrant", MsgGrant], ["/cosmos.authz.v1beta1.MsgExec", MsgExec], ["/cosmos.authz.v1beta1.MsgRevoke", MsgRevoke]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};