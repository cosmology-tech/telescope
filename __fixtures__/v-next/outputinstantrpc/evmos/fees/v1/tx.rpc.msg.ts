import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgRegisterDevFeeInfo, MsgRegisterDevFeeInfoSDKType, MsgRegisterDevFeeInfoResponse, MsgRegisterDevFeeInfoResponseSDKType, MsgCancelDevFeeInfo, MsgCancelDevFeeInfoSDKType, MsgCancelDevFeeInfoResponse, MsgCancelDevFeeInfoResponseSDKType, MsgUpdateDevFeeInfo, MsgUpdateDevFeeInfoSDKType, MsgUpdateDevFeeInfoResponse, MsgUpdateDevFeeInfoResponseSDKType } from "./tx";
/** Msg defines the fees Msg service. */
export interface Msg {
  /**
   * RegisterDevFeeInfo is used by a deployer to register a new contract for
   * receiving transaction fees
   */
  registerDevFeeInfo(request: BroadcastTxReq<MsgRegisterDevFeeInfo>): Promise<BroadcastTxRes<MsgRegisterDevFeeInfoResponse>>;
  /**
   * CancelDevFeeInfo is used by a deployer to cancel a registered contract
   * and stop receiving transaction fees
   */
  cancelDevFeeInfo(request: BroadcastTxReq<MsgCancelDevFeeInfo>): Promise<BroadcastTxRes<MsgCancelDevFeeInfoResponse>>;
  /** UpdateDevFeeInfo is used by a deployer to update the withdraw address */
  updateDevFeeInfo(request: BroadcastTxReq<MsgUpdateDevFeeInfo>): Promise<BroadcastTxRes<MsgUpdateDevFeeInfoResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* RegisterDevFeeInfo is used by a deployer to register a new contract for
   receiving transaction fees */
  registerDevFeeInfo = async (request: BroadcastTxReq<MsgRegisterDevFeeInfo>): Promise<BroadcastTxRes<MsgRegisterDevFeeInfoResponse>> => {
    const data = [{
      typeUrl: MsgRegisterDevFeeInfo.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgRegisterDevFeeInfoResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* CancelDevFeeInfo is used by a deployer to cancel a registered contract
   and stop receiving transaction fees */
  cancelDevFeeInfo = async (request: BroadcastTxReq<MsgCancelDevFeeInfo>): Promise<BroadcastTxRes<MsgCancelDevFeeInfoResponse>> => {
    const data = [{
      typeUrl: MsgCancelDevFeeInfo.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCancelDevFeeInfoResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* UpdateDevFeeInfo is used by a deployer to update the withdraw address */
  updateDevFeeInfo = async (request: BroadcastTxReq<MsgUpdateDevFeeInfo>): Promise<BroadcastTxRes<MsgUpdateDevFeeInfoResponse>> => {
    const data = [{
      typeUrl: MsgUpdateDevFeeInfo.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgUpdateDevFeeInfoResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}
export const createMsgClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};