import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgRegisterDevFeeInfo, MsgRegisterDevFeeInfoSDKType, MsgRegisterDevFeeInfoResponse, MsgRegisterDevFeeInfoResponseSDKType, MsgCancelDevFeeInfo, MsgCancelDevFeeInfoSDKType, MsgCancelDevFeeInfoResponse, MsgCancelDevFeeInfoResponseSDKType, MsgUpdateDevFeeInfo, MsgUpdateDevFeeInfoSDKType, MsgUpdateDevFeeInfoResponse, MsgUpdateDevFeeInfoResponseSDKType } from "./tx";
/** Msg defines the fees Msg service. */
export interface Msg {
  /**
   * RegisterDevFeeInfo is used by a deployer to register a new contract for
   * receiving transaction fees
   */
  registerDevFeeInfo(signerAddress: string, message: MsgRegisterDevFeeInfo, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * CancelDevFeeInfo is used by a deployer to cancel a registered contract
   * and stop receiving transaction fees
   */
  cancelDevFeeInfo(signerAddress: string, message: MsgCancelDevFeeInfo, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** UpdateDevFeeInfo is used by a deployer to update the withdraw address */
  updateDevFeeInfo(signerAddress: string, message: MsgUpdateDevFeeInfo, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* RegisterDevFeeInfo is used by a deployer to register a new contract for
   receiving transaction fees */
  registerDevFeeInfo = async (signerAddress: string, message: MsgRegisterDevFeeInfo, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRegisterDevFeeInfo.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* CancelDevFeeInfo is used by a deployer to cancel a registered contract
   and stop receiving transaction fees */
  cancelDevFeeInfo = async (signerAddress: string, message: MsgCancelDevFeeInfo, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCancelDevFeeInfo.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpdateDevFeeInfo is used by a deployer to update the withdraw address */
  updateDevFeeInfo = async (signerAddress: string, message: MsgUpdateDevFeeInfo, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateDevFeeInfo.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};