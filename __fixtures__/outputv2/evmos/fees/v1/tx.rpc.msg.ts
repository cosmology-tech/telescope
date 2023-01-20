import * as fm from "../../../grpc-gateway";
import { MsgRegisterDevFeeInfo, MsgRegisterDevFeeInfoSDKType, MsgRegisterDevFeeInfoResponse, MsgRegisterDevFeeInfoResponseSDKType, MsgCancelDevFeeInfo, MsgCancelDevFeeInfoSDKType, MsgCancelDevFeeInfoResponse, MsgCancelDevFeeInfoResponseSDKType, MsgUpdateDevFeeInfo, MsgUpdateDevFeeInfoSDKType, MsgUpdateDevFeeInfoResponse, MsgUpdateDevFeeInfoResponseSDKType } from "./tx";
export class Msg {
  static RegisterDevFeeInfo(request: MsgRegisterDevFeeInfo, initRequest?: fm.InitReq): Promise<MsgRegisterDevFeeInfoResponse> {
    return fm.fetchReq(`/evmos.fees.v1/RegisterDevFeeInfo`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static CancelDevFeeInfo(request: MsgCancelDevFeeInfo, initRequest?: fm.InitReq): Promise<MsgCancelDevFeeInfoResponse> {
    return fm.fetchReq(`/evmos.fees.v1/CancelDevFeeInfo`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static UpdateDevFeeInfo(request: MsgUpdateDevFeeInfo, initRequest?: fm.InitReq): Promise<MsgUpdateDevFeeInfoResponse> {
    return fm.fetchReq(`/evmos.fees.v1/UpdateDevFeeInfo`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}