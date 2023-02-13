import { QueryCondition, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { UnaryMethodDefinitionishR, UnaryMethodDefinitionish } from "../../grpc-web";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { MsgCreateGauge, MsgCreateGaugeSDKType, MsgCreateGaugeResponse, MsgCreateGaugeResponseSDKType, MsgAddToGauge, MsgAddToGaugeSDKType, MsgAddToGaugeResponse, MsgAddToGaugeResponseSDKType } from "./tx";
export interface Msg {
  createGauge(request: DeepPartial<MsgCreateGauge>, metadata?: grpc.Metadata): Promise<MsgCreateGaugeResponse>;
  addToGauge(request: DeepPartial<MsgAddToGauge>, metadata?: grpc.Metadata): Promise<MsgAddToGaugeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createGauge = this.createGauge.bind(this);
    this.addToGauge = this.addToGauge.bind(this);
  }

  createGauge(request: DeepPartial<MsgCreateGauge>, metadata?: grpc.Metadata): Promise<MsgCreateGaugeResponse> {
    return this.rpc.unary(MsgCreateGaugeDesc, MsgCreateGauge.fromPartial(request), metadata);
  }

  addToGauge(request: DeepPartial<MsgAddToGauge>, metadata?: grpc.Metadata): Promise<MsgAddToGaugeResponse> {
    return this.rpc.unary(MsgAddToGaugeDesc, MsgAddToGauge.fromPartial(request), metadata);
  }

}
export const MsgDesc = {
  serviceName: "osmosis.incentives.Msg"
};
export const MsgCreateGaugeDesc: UnaryMethodDefinitionish = {
  methodName: "CreateGauge",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateGauge.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgCreateGaugeResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgAddToGaugeDesc: UnaryMethodDefinitionish = {
  methodName: "AddToGauge",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgAddToGauge.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgAddToGaugeResponse.decode(data),

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