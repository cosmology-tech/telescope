import { Plan, PlanSDKType } from "./upgrade";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeSDKType, MsgSoftwareUpgradeResponse, MsgSoftwareUpgradeResponseSDKType, MsgCancelUpgrade, MsgCancelUpgradeSDKType, MsgCancelUpgradeResponse, MsgCancelUpgradeResponseSDKType } from "./tx";

/** Msg defines the upgrade Msg service. */
export interface Msg {
  /**
   * SoftwareUpgrade is a governance operation for initiating a software upgrade.
   * 
   * Since: cosmos-sdk 0.46
   */
  SoftwareUpgrade(request: DeepPartial<MsgSoftwareUpgrade>, metadata?: grpc.Metadata): Promise<MsgSoftwareUpgradeResponse>;

  /**
   * CancelUpgrade is a governance operation for cancelling a previously
   * approvid software upgrade.
   * 
   * Since: cosmos-sdk 0.46
   */
  CancelUpgrade(request: DeepPartial<MsgCancelUpgrade>, metadata?: grpc.Metadata): Promise<MsgCancelUpgradeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.softwareUpgrade = this.softwareUpgrade.bind(this);
    this.cancelUpgrade = this.cancelUpgrade.bind(this);
  }

  softwareUpgrade(request: DeepPartial<MsgSoftwareUpgrade>, metadata?: grpc.Metadata): Promise<MsgSoftwareUpgradeResponse> {
    return this.rpc.unary(MsgSoftwareUpgrade, MsgSoftwareUpgrade.fromPartial(request), metadata);
  }

  cancelUpgrade(request: DeepPartial<MsgCancelUpgrade>, metadata?: grpc.Metadata): Promise<MsgCancelUpgradeResponse> {
    return this.rpc.unary(MsgCancelUpgrade, MsgCancelUpgrade.fromPartial(request), metadata);
  }

}