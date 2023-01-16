import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BasicAllowance, BasicAllowanceSDKType, PeriodicAllowance, PeriodicAllowanceSDKType, AllowedMsgAllowance, AllowedMsgAllowanceSDKType } from "./feegrant";
import { fetchReq } from "../../../grpc-gateway";
import { MsgGrantAllowance, MsgGrantAllowanceSDKType, MsgGrantAllowanceResponse, MsgGrantAllowanceResponseSDKType, MsgRevokeAllowance, MsgRevokeAllowanceSDKType, MsgRevokeAllowanceResponse, MsgRevokeAllowanceResponseSDKType } from "./tx";
export class Msg {
  static GrantAllowance(request: MsgGrantAllowance, initRequest?: fm.initReq): Promise<MsgGrantAllowanceResponse> {
    return fm.fetchReq(`/GrantAllowance/GrantAllowance`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static RevokeAllowance(request: MsgRevokeAllowance, initRequest?: fm.initReq): Promise<MsgRevokeAllowanceResponse> {
    return fm.fetchReq(`/RevokeAllowance/RevokeAllowance`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}