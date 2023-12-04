import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgRegisterDevFeeInfo, MsgRegisterDevFeeInfoSDKType, MsgRegisterDevFeeInfoResponse, MsgRegisterDevFeeInfoResponseSDKType, MsgCancelDevFeeInfo, MsgCancelDevFeeInfoSDKType, MsgCancelDevFeeInfoResponse, MsgCancelDevFeeInfoResponseSDKType, MsgUpdateDevFeeInfo, MsgUpdateDevFeeInfoSDKType, MsgUpdateDevFeeInfoResponse, MsgUpdateDevFeeInfoResponseSDKType } from "./tx";
/** Msg defines the fees Msg service. */
export interface Msg {
  /**
   * RegisterDevFeeInfo is used by a deployer to register a new contract for
   * receiving transaction fees
   */
  registerDevFeeInfo(request: BroadcastTxReq<MsgRegisterDevFeeInfo>): Promise<DeliverTxResponse>;
  /**
   * CancelDevFeeInfo is used by a deployer to cancel a registered contract
   * and stop receiving transaction fees
   */
  cancelDevFeeInfo(request: BroadcastTxReq<MsgCancelDevFeeInfo>): Promise<DeliverTxResponse>;
  /** UpdateDevFeeInfo is used by a deployer to update the withdraw address */
  updateDevFeeInfo(request: BroadcastTxReq<MsgUpdateDevFeeInfo>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* RegisterDevFeeInfo is used by a deployer to register a new contract for
   receiving transaction fees */
  registerDevFeeInfo = async (request: BroadcastTxReq<MsgRegisterDevFeeInfo>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRegisterDevFeeInfo.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* CancelDevFeeInfo is used by a deployer to cancel a registered contract
   and stop receiving transaction fees */
  cancelDevFeeInfo = async (request: BroadcastTxReq<MsgCancelDevFeeInfo>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCancelDevFeeInfo.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* UpdateDevFeeInfo is used by a deployer to update the withdraw address */
  updateDevFeeInfo = async (request: BroadcastTxReq<MsgUpdateDevFeeInfo>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateDevFeeInfo.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};