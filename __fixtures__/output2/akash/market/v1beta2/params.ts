//@ts-nocheck
/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.market.v1beta2";
/** Params is the params for the x/market module */
export interface Params {
  bidMinDeposit: Coin;
  orderMaxBids: number;
}
function createBaseParams(): Params {
  return {
    bidMinDeposit: undefined,
    orderMaxBids: 0
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidMinDeposit !== undefined) {
      Coin.encode(message.bidMinDeposit, writer.uint32(10).fork()).ldelim();
    }
    if (message.orderMaxBids !== 0) {
      writer.uint32(16).uint32(message.orderMaxBids);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidMinDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.orderMaxBids = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.bidMinDeposit)) obj.bidMinDeposit = Coin.fromJSON(object.bidMinDeposit);
    if (isSet(object.orderMaxBids)) obj.orderMaxBids = Number(object.orderMaxBids);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.bidMinDeposit !== undefined && (obj.bidMinDeposit = message.bidMinDeposit ? Coin.toJSON(message.bidMinDeposit) : undefined);
    message.orderMaxBids !== undefined && (obj.orderMaxBids = Math.round(message.orderMaxBids));
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.bidMinDeposit = object.bidMinDeposit !== undefined && object.bidMinDeposit !== null ? Coin.fromPartial(object.bidMinDeposit) : Coin.fromPartial({});
    message.orderMaxBids = object.orderMaxBids ?? 0;
    return message;
  }
};