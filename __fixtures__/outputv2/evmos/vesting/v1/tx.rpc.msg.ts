import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Period, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountSDKType, MsgCreateClawbackVestingAccountResponse, MsgCreateClawbackVestingAccountResponseSDKType, MsgClawback, MsgClawbackSDKType, MsgClawbackResponse, MsgClawbackResponseSDKType } from "./tx";

/** Msg defines the vesting Msg service. */
export interface Msg {
  /**
   * CreateClawbackVestingAccount creats a vesting account that is subject to
   * clawback and the configuration of vesting and lockup schedules.
   */
  CreateClawbackVestingAccount(request: DeepPartial<MsgCreateClawbackVestingAccount>, metadata?: grpc.Metadata): Promise<MsgCreateClawbackVestingAccountResponse>;

  /** Clawback removes the unvested tokens from a ClawbackVestingAccount. */
  Clawback(request: DeepPartial<MsgClawback>, metadata?: grpc.Metadata): Promise<MsgClawbackResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createClawbackVestingAccount = this.createClawbackVestingAccount.bind(this);
    this.clawback = this.clawback.bind(this);
  }

  createClawbackVestingAccount(request: DeepPartial<MsgCreateClawbackVestingAccount>, metadata?: grpc.Metadata): Promise<MsgCreateClawbackVestingAccountResponse> {
    return this.rpc.unary(MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccount.fromPartial(request), metadata);
  }

  clawback(request: DeepPartial<MsgClawback>, metadata?: grpc.Metadata): Promise<MsgClawbackResponse> {
    return this.rpc.unary(MsgClawback, MsgClawback.fromPartial(request), metadata);
  }

}