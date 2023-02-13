import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Period, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { UnaryMethodDefinitionishR, UnaryMethodDefinitionish } from "../../../grpc-web";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountSDKType, MsgCreateClawbackVestingAccountResponse, MsgCreateClawbackVestingAccountResponseSDKType, MsgClawback, MsgClawbackSDKType, MsgClawbackResponse, MsgClawbackResponseSDKType } from "./tx";

/** Msg defines the vesting Msg service. */
export interface Msg {
  /**
   * CreateClawbackVestingAccount creats a vesting account that is subject to
   * clawback and the configuration of vesting and lockup schedules.
   */
  createClawbackVestingAccount(request: DeepPartial<MsgCreateClawbackVestingAccount>, metadata?: grpc.Metadata): Promise<MsgCreateClawbackVestingAccountResponse>;

  /** Clawback removes the unvested tokens from a ClawbackVestingAccount. */
  clawback(request: DeepPartial<MsgClawback>, metadata?: grpc.Metadata): Promise<MsgClawbackResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createClawbackVestingAccount = this.createClawbackVestingAccount.bind(this);
    this.clawback = this.clawback.bind(this);
  }

  createClawbackVestingAccount(request: DeepPartial<MsgCreateClawbackVestingAccount>, metadata?: grpc.Metadata): Promise<MsgCreateClawbackVestingAccountResponse> {
    return this.rpc.unary(MsgCreateClawbackVestingAccountDesc, MsgCreateClawbackVestingAccount.fromPartial(request), metadata);
  }

  clawback(request: DeepPartial<MsgClawback>, metadata?: grpc.Metadata): Promise<MsgClawbackResponse> {
    return this.rpc.unary(MsgClawbackDesc, MsgClawback.fromPartial(request), metadata);
  }

}
export const MsgDesc = {
  serviceName: "evmos.vesting.v1.Msg"
};
export const MsgCreateClawbackVestingAccountDesc: UnaryMethodDefinitionish = {
  methodName: "CreateClawbackVestingAccount",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateClawbackVestingAccount.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgCreateClawbackVestingAccountResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgClawbackDesc: UnaryMethodDefinitionish = {
  methodName: "Clawback",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgClawback.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgClawbackResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined);
}