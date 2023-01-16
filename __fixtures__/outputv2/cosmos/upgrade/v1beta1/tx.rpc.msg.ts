import { Plan, PlanSDKType } from "./upgrade";
import { fetchReq } from "../../../grpc-gateway";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeSDKType, MsgSoftwareUpgradeResponse, MsgSoftwareUpgradeResponseSDKType, MsgCancelUpgrade, MsgCancelUpgradeSDKType, MsgCancelUpgradeResponse, MsgCancelUpgradeResponseSDKType } from "./tx";
export class Msg {
  static SoftwareUpgrade(request: MsgSoftwareUpgrade, initRequest?: fm.initReq): Promise<MsgSoftwareUpgradeResponse> {
    return fm.fetchReq(`/SoftwareUpgrade/SoftwareUpgrade`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static CancelUpgrade(request: MsgCancelUpgrade, initRequest?: fm.initReq): Promise<MsgCancelUpgradeResponse> {
    return fm.fetchReq(`/CancelUpgrade/CancelUpgrade`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}