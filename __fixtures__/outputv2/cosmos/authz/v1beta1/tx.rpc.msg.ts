import { Grant, GrantSDKType } from "./authz";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { fetchReq } from "../../../grpc-gateway";
import { MsgGrant, MsgGrantSDKType, MsgGrantResponse, MsgGrantResponseSDKType, MsgExec, MsgExecSDKType, MsgExecResponse, MsgExecResponseSDKType, MsgRevoke, MsgRevokeSDKType, MsgRevokeResponse, MsgRevokeResponseSDKType } from "./tx";
export class Msg {
  static Grant(request: MsgGrant, initRequest?: fm.initReq): Promise<MsgGrantResponse> {
    return fm.fetchReq(`/Grant/Grant`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static Exec(request: MsgExec, initRequest?: fm.initReq): Promise<MsgExecResponse> {
    return fm.fetchReq(`/Exec/Exec`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static Revoke(request: MsgRevoke, initRequest?: fm.initReq): Promise<MsgRevokeResponse> {
    return fm.fetchReq(`/Revoke/Revoke`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}