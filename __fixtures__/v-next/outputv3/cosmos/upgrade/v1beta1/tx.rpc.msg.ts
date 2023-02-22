import { Plan, PlanSDKType } from "./upgrade";
import * as fm from "../../../grpc-gateway";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeSDKType, MsgSoftwareUpgradeResponse, MsgSoftwareUpgradeResponseSDKType, MsgCancelUpgrade, MsgCancelUpgradeSDKType, MsgCancelUpgradeResponse, MsgCancelUpgradeResponseSDKType } from "./tx";
export class Msg {
  /**
   * SoftwareUpgrade is a governance operation for initiating a software upgrade.
   * 
   * Since: cosmos-sdk 0.46
   */
  static SoftwareUpgrade(request: MsgSoftwareUpgrade, initRequest?: fm.InitReq): Promise<MsgSoftwareUpgradeResponse> {
    return fm.fetchReq(`/cosmos.upgrade.v1beta1/SoftwareUpgrade`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  /**
   * CancelUpgrade is a governance operation for cancelling a previously
   * approvid software upgrade.
   * 
   * Since: cosmos-sdk 0.46
   */
  static CancelUpgrade(request: MsgCancelUpgrade, initRequest?: fm.InitReq): Promise<MsgCancelUpgradeResponse> {
    return fm.fetchReq(`/cosmos.upgrade.v1beta1/CancelUpgrade`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}