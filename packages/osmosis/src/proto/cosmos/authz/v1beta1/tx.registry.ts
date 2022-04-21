import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgGrant, MsgExecResponse, MsgExec, MsgRevoke, MsgGrantResponse, MsgRevokeResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Grant } from "../../../cosmos/authz/v1beta1/authz";
import { Any } from "../../../google/protobuf/any";
export const registry = {
  "/cosmos.authz.v1beta1.MsgGrant": MsgGrant,
  "/cosmos.authz.v1beta1.MsgExec": MsgExec,
  "/cosmos.authz.v1beta1.MsgRevoke": MsgRevoke
};