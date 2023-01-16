import { fetchReq } from "../../../grpc-gateway";
import { MsgRegisterDevFeeInfo, MsgRegisterDevFeeInfoSDKType, MsgRegisterDevFeeInfoResponse, MsgRegisterDevFeeInfoResponseSDKType, MsgCancelDevFeeInfo, MsgCancelDevFeeInfoSDKType, MsgCancelDevFeeInfoResponse, MsgCancelDevFeeInfoResponseSDKType, MsgUpdateDevFeeInfo, MsgUpdateDevFeeInfoSDKType, MsgUpdateDevFeeInfoResponse, MsgUpdateDevFeeInfoResponseSDKType } from "./tx";
export class Msg {
  static RegisterDevFeeInfo(request: MsgRegisterDevFeeInfo, initRequest?: fm.initReq): Promise<MsgRegisterDevFeeInfoResponse> {
    return fm.fetchReq(`/RegisterDevFeeInfo/RegisterDevFeeInfo`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static CancelDevFeeInfo(request: MsgCancelDevFeeInfo, initRequest?: fm.initReq): Promise<MsgCancelDevFeeInfoResponse> {
    return fm.fetchReq(`/CancelDevFeeInfo/CancelDevFeeInfo`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static UpdateDevFeeInfo(request: MsgUpdateDevFeeInfo, initRequest?: fm.initReq): Promise<MsgUpdateDevFeeInfoResponse> {
    return fm.fetchReq(`/UpdateDevFeeInfo/UpdateDevFeeInfo`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}