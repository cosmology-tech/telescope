import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgRegisterDevFeeInfo, MsgRegisterDevFeeInfoSDKType, MsgRegisterDevFeeInfoResponse, MsgRegisterDevFeeInfoResponseSDKType, MsgCancelDevFeeInfo, MsgCancelDevFeeInfoSDKType, MsgCancelDevFeeInfoResponse, MsgCancelDevFeeInfoResponseSDKType, MsgUpdateDevFeeInfo, MsgUpdateDevFeeInfoSDKType, MsgUpdateDevFeeInfoResponse, MsgUpdateDevFeeInfoResponseSDKType } from "./tx";
/** Msg defines the fees Msg service. */
export interface Msg {
  /**
   * RegisterDevFeeInfo is used by a deployer to register a new contract for
   * receiving transaction fees
   */
  registerDevFeeInfo(request: MsgRegisterDevFeeInfo): Promise<MsgRegisterDevFeeInfoResponse>;
  /**
   * CancelDevFeeInfo is used by a deployer to cancel a registered contract
   * and stop receiving transaction fees
   */
  cancelDevFeeInfo(request: MsgCancelDevFeeInfo): Promise<MsgCancelDevFeeInfoResponse>;
  /** UpdateDevFeeInfo is used by a deployer to update the withdraw address */
  updateDevFeeInfo(request: MsgUpdateDevFeeInfo): Promise<MsgUpdateDevFeeInfoResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* RegisterDevFeeInfo is used by a deployer to register a new contract for
   receiving transaction fees */
  registerDevFeeInfo = async (request: MsgRegisterDevFeeInfo): Promise<MsgRegisterDevFeeInfoResponse> => {
    const data = MsgRegisterDevFeeInfo.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Msg", "RegisterDevFeeInfo", data);
    return promise.then(data => MsgRegisterDevFeeInfoResponse.decode(new BinaryReader(data)));
  };
  /* CancelDevFeeInfo is used by a deployer to cancel a registered contract
   and stop receiving transaction fees */
  cancelDevFeeInfo = async (request: MsgCancelDevFeeInfo): Promise<MsgCancelDevFeeInfoResponse> => {
    const data = MsgCancelDevFeeInfo.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Msg", "CancelDevFeeInfo", data);
    return promise.then(data => MsgCancelDevFeeInfoResponse.decode(new BinaryReader(data)));
  };
  /* UpdateDevFeeInfo is used by a deployer to update the withdraw address */
  updateDevFeeInfo = async (request: MsgUpdateDevFeeInfo): Promise<MsgUpdateDevFeeInfoResponse> => {
    const data = MsgUpdateDevFeeInfo.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Msg", "UpdateDevFeeInfo", data);
    return promise.then(data => MsgUpdateDevFeeInfoResponse.decode(new BinaryReader(data)));
  };
}