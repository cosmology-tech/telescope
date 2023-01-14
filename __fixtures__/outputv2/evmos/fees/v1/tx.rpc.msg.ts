import { fetchReq } from "../../../grpc-gateway";
import { MsgRegisterDevFeeInfo, MsgRegisterDevFeeInfoSDKType, MsgRegisterDevFeeInfoResponse, MsgRegisterDevFeeInfoResponseSDKType, MsgCancelDevFeeInfo, MsgCancelDevFeeInfoSDKType, MsgCancelDevFeeInfoResponse, MsgCancelDevFeeInfoResponseSDKType, MsgUpdateDevFeeInfo, MsgUpdateDevFeeInfoSDKType, MsgUpdateDevFeeInfoResponse, MsgUpdateDevFeeInfoResponseSDKType } from "./tx";
export class Msg {
  static RegisterDevFeeInfo(): Promise<MsgRegisterDevFeeInfoResponse> {}

  static CancelDevFeeInfo(): Promise<MsgCancelDevFeeInfoResponse> {}

  static UpdateDevFeeInfo(): Promise<MsgUpdateDevFeeInfoResponse> {}

}