import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BasicAllowance, BasicAllowanceSDKType, PeriodicAllowance, PeriodicAllowanceSDKType, AllowedMsgAllowance, AllowedMsgAllowanceSDKType } from "./feegrant";
import * as fm from "../../../grpc-gateway";
import { MsgGrantAllowance, MsgGrantAllowanceSDKType, MsgGrantAllowanceResponse, MsgGrantAllowanceResponseSDKType, MsgRevokeAllowance, MsgRevokeAllowanceSDKType, MsgRevokeAllowanceResponse, MsgRevokeAllowanceResponseSDKType } from "./tx";
export class Msg {
  //GrantAllowance grants fee allowance to the grantee on the granter's
 account with the provided expiration time.
  static GrantAllowance(request: MsgGrantAllowance, initRequest?: fm.InitReq): Promise<MsgGrantAllowanceResponse> {
    return fm.fetchReq(`/cosmos.feegrant.v1beta1/GrantAllowance`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //RevokeAllowance revokes any fee allowance of granter's account that
 has been granted to the grantee.
  static RevokeAllowance(request: MsgRevokeAllowance, initRequest?: fm.InitReq): Promise<MsgRevokeAllowanceResponse> {
    return fm.fetchReq(`/cosmos.feegrant.v1beta1/RevokeAllowance`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}