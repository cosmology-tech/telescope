import { QueryCondition, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../helpers";
import { MsgCreateGauge, MsgCreateGaugeSDKType, MsgCreateGaugeResponse, MsgCreateGaugeResponseSDKType, MsgAddToGauge, MsgAddToGaugeSDKType, MsgAddToGaugeResponse, MsgAddToGaugeResponseSDKType } from "./tx";
export interface Msg {
  CreateGauge(request: DeepPartial<MsgCreateGauge>, metadata?: grpc.Metadata): Promise<MsgCreateGaugeResponse>;
  AddToGauge(request: DeepPartial<MsgAddToGauge>, metadata?: grpc.Metadata): Promise<MsgAddToGaugeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createGauge = this.createGauge.bind(this);
    this.addToGauge = this.addToGauge.bind(this);
  }

  createGauge(request: DeepPartial<MsgCreateGauge>, metadata?: grpc.Metadata): Promise<MsgCreateGaugeResponse> {
    return this.rpc.unary(MsgCreateGauge, MsgCreateGauge.fromPartial(request), metadata);
  }

  addToGauge(request: DeepPartial<MsgAddToGauge>, metadata?: grpc.Metadata): Promise<MsgAddToGaugeResponse> {
    return this.rpc.unary(MsgAddToGauge, MsgAddToGauge.fromPartial(request), metadata);
  }

}