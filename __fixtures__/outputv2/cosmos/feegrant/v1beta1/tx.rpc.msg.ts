import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BasicAllowance, BasicAllowanceSDKType, PeriodicAllowance, PeriodicAllowanceSDKType, AllowedMsgAllowance, AllowedMsgAllowanceSDKType } from "./feegrant";
import * as fm from "../../../grpc-gateway";
import { MsgGrantAllowance, MsgGrantAllowanceSDKType, MsgGrantAllowanceResponse, MsgGrantAllowanceResponseSDKType, MsgRevokeAllowance, MsgRevokeAllowanceSDKType, MsgRevokeAllowanceResponse, MsgRevokeAllowanceResponseSDKType } from "./tx";
export class Msg {
  static GrantAllowance(request: MsgGrantAllowance, initRequest?: fm.InitReq): Promise<MsgGrantAllowanceResponse> {
    return fm.fetchReq(`/cosmos.feegrant.v1beta1/GrantAllowance`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static RevokeAllowance(request: MsgRevokeAllowance, initRequest?: fm.InitReq): Promise<MsgRevokeAllowanceResponse> {
    return fm.fetchReq(`/cosmos.feegrant.v1beta1/RevokeAllowance`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}