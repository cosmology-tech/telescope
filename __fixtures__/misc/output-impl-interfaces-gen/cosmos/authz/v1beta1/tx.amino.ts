import { Grant, GrantSDKType } from "./authz.js";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any.js";
import { MsgGrant, MsgGrantSDKType, MsgExec, MsgExecSDKType, MsgRevoke, MsgRevokeSDKType } from "./tx.js";
export const AminoConverter = {
  "/cosmos.authz.v1beta1.MsgGrant": {
    aminoType: "cosmos-sdk/MsgGrant",
    toAmino: MsgGrant.toAmino,
    fromAmino: MsgGrant.fromAmino
  },
  "/cosmos.authz.v1beta1.MsgExec": {
    aminoType: "cosmos-sdk/MsgExec",
    toAmino: MsgExec.toAmino,
    fromAmino: MsgExec.fromAmino
  },
  "/cosmos.authz.v1beta1.MsgRevoke": {
    aminoType: "cosmos-sdk/MsgRevoke",
    toAmino: MsgRevoke.toAmino,
    fromAmino: MsgRevoke.fromAmino
  }
};