import { Plan, PlanSDKType } from "./upgrade";
import { BroadcastTxRequest, BroadcastTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeSDKType, MsgSoftwareUpgradeResponse, MsgSoftwareUpgradeResponseSDKType, MsgCancelUpgrade, MsgCancelUpgradeSDKType, MsgCancelUpgradeResponse, MsgCancelUpgradeResponseSDKType } from "./tx";
/** Msg defines the upgrade Msg service. */
export interface Msg {
  /**
   * SoftwareUpgrade is a governance operation for initiating a software upgrade.
   * 
   * Since: cosmos-sdk 0.46
   */
  softwareUpgrade(request: BroadcastTxRequest<MsgSoftwareUpgrade>): Promise<BroadcastTxResponse<MsgSoftwareUpgradeResponse>>;
  /**
   * CancelUpgrade is a governance operation for cancelling a previously
   * approvid software upgrade.
   * 
   * Since: cosmos-sdk 0.46
   */
  cancelUpgrade(request: BroadcastTxRequest<MsgCancelUpgrade>): Promise<BroadcastTxResponse<MsgCancelUpgradeResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* SoftwareUpgrade is a governance operation for initiating a software upgrade.
  
   Since: cosmos-sdk 0.46 */
  softwareUpgrade = async (request: BroadcastTxRequest<MsgSoftwareUpgrade>): Promise<BroadcastTxResponse<MsgSoftwareUpgradeResponse>> => {
    const data = [{
      typeUrl: MsgSoftwareUpgrade.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgSoftwareUpgradeResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* CancelUpgrade is a governance operation for cancelling a previously
   approvid software upgrade.
  
   Since: cosmos-sdk 0.46 */
  cancelUpgrade = async (request: BroadcastTxRequest<MsgCancelUpgrade>): Promise<BroadcastTxResponse<MsgCancelUpgradeResponse>> => {
    const data = [{
      typeUrl: MsgCancelUpgrade.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCancelUpgradeResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}