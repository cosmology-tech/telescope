import { Plan, PlanSDKType } from "./upgrade";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeSDKType, MsgSoftwareUpgradeResponse, MsgSoftwareUpgradeResponseSDKType, MsgCancelUpgrade, MsgCancelUpgradeSDKType, MsgCancelUpgradeResponse, MsgCancelUpgradeResponseSDKType } from "./tx";
/** Msg defines the upgrade Msg service. */
export interface Msg {
  /**
   * SoftwareUpgrade is a governance operation for initiating a software upgrade.
   * 
   * Since: cosmos-sdk 0.46
   */
  softwareUpgrade(request: BroadcastTxReq<MsgSoftwareUpgrade>): Promise<DeliverTxResponse>;
  /**
   * CancelUpgrade is a governance operation for cancelling a previously
   * approvid software upgrade.
   * 
   * Since: cosmos-sdk 0.46
   */
  cancelUpgrade(request: BroadcastTxReq<MsgCancelUpgrade>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* SoftwareUpgrade is a governance operation for initiating a software upgrade.
  
   Since: cosmos-sdk 0.46 */
  softwareUpgrade = async (request: BroadcastTxReq<MsgSoftwareUpgrade>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSoftwareUpgrade.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* CancelUpgrade is a governance operation for cancelling a previously
   approvid software upgrade.
  
   Since: cosmos-sdk 0.46 */
  cancelUpgrade = async (request: BroadcastTxReq<MsgCancelUpgrade>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCancelUpgrade.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};