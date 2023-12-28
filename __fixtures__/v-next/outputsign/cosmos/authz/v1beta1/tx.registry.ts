import { Grant, GrantSDKType } from "./authz";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { TelescopeGeneratedType } from "../../../types";
import { MsgGrant, MsgGrantSDKType, MsgExec, MsgExecSDKType, MsgRevoke, MsgRevokeSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.authz.v1beta1.MsgGrant", MsgGrant], ["/cosmos.authz.v1beta1.MsgExec", MsgExec], ["/cosmos.authz.v1beta1.MsgRevoke", MsgRevoke]];