import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgRegisterDevFeeInfo, MsgRegisterDevFeeInfoResponse, MsgCancelDevFeeInfo, MsgCancelDevFeeInfoResponse, MsgUpdateDevFeeInfo, MsgUpdateDevFeeInfoResponse } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  registerDevFeeInfo(request: MsgRegisterDevFeeInfo): Promise<MsgRegisterDevFeeInfoResponse>;
  /*RegisterDevFeeInfo is used by a deployer to register a new contract for
  receiving transaction fees*/

  cancelDevFeeInfo(request: MsgCancelDevFeeInfo): Promise<MsgCancelDevFeeInfoResponse>;
  /*CancelDevFeeInfo is used by a deployer to cancel a registered contract
  and stop receiving transaction fees*/

  updateDevFeeInfo(request: MsgUpdateDevFeeInfo): Promise<MsgUpdateDevFeeInfoResponse>;
  /*UpdateDevFeeInfo is used by a deployer to update the withdraw address*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerDevFeeInfo = this.registerDevFeeInfo.bind(this);
    this.cancelDevFeeInfo = this.cancelDevFeeInfo.bind(this);
    this.updateDevFeeInfo = this.updateDevFeeInfo.bind(this);
  }

  registerDevFeeInfo(request: MsgRegisterDevFeeInfo): Promise<MsgRegisterDevFeeInfoResponse> {
    const data = MsgRegisterDevFeeInfo.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Msg", "RegisterDevFeeInfo", data);
    return promise.then(data => MsgRegisterDevFeeInfoResponse.decode(new _m0.Reader(data)));
  }

  cancelDevFeeInfo(request: MsgCancelDevFeeInfo): Promise<MsgCancelDevFeeInfoResponse> {
    const data = MsgCancelDevFeeInfo.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Msg", "CancelDevFeeInfo", data);
    return promise.then(data => MsgCancelDevFeeInfoResponse.decode(new _m0.Reader(data)));
  }

  updateDevFeeInfo(request: MsgUpdateDevFeeInfo): Promise<MsgUpdateDevFeeInfoResponse> {
    const data = MsgUpdateDevFeeInfo.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Msg", "UpdateDevFeeInfo", data);
    return promise.then(data => MsgUpdateDevFeeInfoResponse.decode(new _m0.Reader(data)));
  }

}