import { fetchReq } from "../../../grpc-gateway";
import { MsgVerifyInvariant, MsgVerifyInvariantSDKType, MsgVerifyInvariantResponse, MsgVerifyInvariantResponseSDKType } from "./tx";
export class Msg {
  static VerifyInvariant(): Promise<MsgVerifyInvariantResponse> {}

}