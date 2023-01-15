import { Plan, PlanSDKType } from "./upgrade";
import { fetchReq } from "../../../grpc-gateway";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeSDKType, MsgSoftwareUpgradeResponse, MsgSoftwareUpgradeResponseSDKType, MsgCancelUpgrade, MsgCancelUpgradeSDKType, MsgCancelUpgradeResponse, MsgCancelUpgradeResponseSDKType } from "./tx";
export class Msg {
  static SoftwareUpgrade(request: MsgSoftwareUpgrade, initRequest?: fm.initReq): Promise<MsgSoftwareUpgradeResponse> {
    return fm.fetchReq(`/cosmos.upgrade.v1beta1.Msg/SoftwareUpgrade`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static CancelUpgrade(request: MsgCancelUpgrade, initRequest?: fm.initReq): Promise<MsgCancelUpgradeResponse> {
    return fm.fetchReq(`/cosmos.upgrade.v1beta1.Msg/CancelUpgrade`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}