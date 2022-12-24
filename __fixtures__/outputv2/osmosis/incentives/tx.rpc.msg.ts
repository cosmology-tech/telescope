import { QueryCondition, QueryConditionAmino, QueryConditionAminoType, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampAminoType, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateGauge, MsgCreateGaugeAmino, MsgCreateGaugeAminoType, MsgCreateGaugeSDKType, MsgCreateGaugeResponse, MsgCreateGaugeResponseAmino, MsgCreateGaugeResponseAminoType, MsgCreateGaugeResponseSDKType, MsgAddToGauge, MsgAddToGaugeAmino, MsgAddToGaugeAminoType, MsgAddToGaugeSDKType, MsgAddToGaugeResponse, MsgAddToGaugeResponseAmino, MsgAddToGaugeResponseAminoType, MsgAddToGaugeResponseSDKType } from "./tx";
export interface Msg {
  createGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse>;
  addToGauge(request: MsgAddToGauge): Promise<MsgAddToGaugeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createGauge = this.createGauge.bind(this);
    this.addToGauge = this.addToGauge.bind(this);
  }

  createGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse> {
    const data = MsgCreateGauge.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Msg", "CreateGauge", data);
    return promise.then(data => MsgCreateGaugeResponse.decode(new _m0.Reader(data)));
  }

  addToGauge(request: MsgAddToGauge): Promise<MsgAddToGaugeResponse> {
    const data = MsgAddToGauge.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Msg", "AddToGauge", data);
    return promise.then(data => MsgAddToGaugeResponse.decode(new _m0.Reader(data)));
  }

}