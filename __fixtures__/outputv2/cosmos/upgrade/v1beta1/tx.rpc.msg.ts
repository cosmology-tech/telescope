import { Plan, PlanSDKType } from "./upgrade";
import { fetchReq } from "../../../grpc-gateway";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeSDKType, MsgSoftwareUpgradeResponse, MsgSoftwareUpgradeResponseSDKType, MsgCancelUpgrade, MsgCancelUpgradeSDKType, MsgCancelUpgradeResponse, MsgCancelUpgradeResponseSDKType } from "./tx";
export class Msg {
  static SoftwareUpgrade(): Promise<MsgSoftwareUpgradeResponse> {}

  static CancelUpgrade(): Promise<MsgCancelUpgradeResponse> {}

}