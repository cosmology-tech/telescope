import { Grant, GrantSDKType } from "./authz";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as fm from "../../../grpc-gateway";
import { MsgGrant, MsgGrantSDKType, MsgGrantResponse, MsgGrantResponseSDKType, MsgExec, MsgExecSDKType, MsgExecResponse, MsgExecResponseSDKType, MsgRevoke, MsgRevokeSDKType, MsgRevokeResponse, MsgRevokeResponseSDKType } from "./tx";
export class Msg {
  static Grant(request: MsgGrant, initRequest?: fm.InitReq): Promise<MsgGrantResponse> {
    return fm.fetchReq(`/cosmos.authz.v1beta1/Grant`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static Exec(request: MsgExec, initRequest?: fm.InitReq): Promise<MsgExecResponse> {
    return fm.fetchReq(`/cosmos.authz.v1beta1/Exec`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static Revoke(request: MsgRevoke, initRequest?: fm.InitReq): Promise<MsgRevokeResponse> {
    return fm.fetchReq(`/cosmos.authz.v1beta1/Revoke`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}