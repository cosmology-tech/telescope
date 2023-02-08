import { Plan, PlanSDKType } from "./upgrade";
import * as fm from "../../../grpc-gateway";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeSDKType, MsgSoftwareUpgradeResponse, MsgSoftwareUpgradeResponseSDKType, MsgCancelUpgrade, MsgCancelUpgradeSDKType, MsgCancelUpgradeResponse, MsgCancelUpgradeResponseSDKType } from "./tx";
export class Msg {
  static SoftwareUpgrade(request: MsgSoftwareUpgrade, initRequest?: fm.InitReq): Promise<MsgSoftwareUpgradeResponse> {
    return fm.fetchReq(`/cosmos.upgrade.v1beta1/SoftwareUpgrade`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static CancelUpgrade(request: MsgCancelUpgrade, initRequest?: fm.InitReq): Promise<MsgCancelUpgradeResponse> {
    return fm.fetchReq(`/cosmos.upgrade.v1beta1/CancelUpgrade`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}