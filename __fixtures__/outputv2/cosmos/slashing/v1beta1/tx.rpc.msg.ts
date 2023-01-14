import { fetchReq } from "../../../grpc-gateway";
import { MsgUnjail, MsgUnjailSDKType, MsgUnjailResponse, MsgUnjailResponseSDKType } from "./tx";
export class Msg {
  static Unjail(): Promise<MsgUnjailResponse> {}

}