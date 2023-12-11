import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "akash.market.v1beta2";
/** Params is the params for the x/market module */
export interface Params {
  bidMinDeposit: Coin;
  orderMaxBids: number;
}
export interface ParamsProtoMsg {
  typeUrl: "/akash.market.v1beta2.Params";
  value: Uint8Array;
}
/** Params is the params for the x/market module */
export interface ParamsAmino {
  bid_min_deposit?: CoinAmino;
  order_max_bids?: number;
}
export interface ParamsAminoMsg {
  type: "/akash.market.v1beta2.Params";
  value: ParamsAmino;
}
/** Params is the params for the x/market module */
export interface ParamsSDKType {
  bid_min_deposit: CoinSDKType;
  order_max_bids: number;
}
function createBaseParams(): Params {
  return {
    bidMinDeposit: Coin.fromPartial({}),
    orderMaxBids: 0
  };
}
export const Params = {
  typeUrl: "/akash.market.v1beta2.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidMinDeposit !== undefined) {
      Coin.encode(message.bidMinDeposit, writer.uint32(10).fork()).ldelim();
    }
    if (message.orderMaxBids !== 0) {
      writer.uint32(16).uint32(message.orderMaxBids);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (object.bidMinDeposit !== undefined && object.bidMinDeposit !== null) {
      message.bidMinDeposit = Coin.fromPartial(object.bidMinDeposit);
    }
    message.orderMaxBids = object.orderMaxBids ?? 0;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.bid_min_deposit !== undefined && object.bid_min_deposit !== null) {
      message.bidMinDeposit = Coin.fromAmino(object.bid_min_deposit);
    }
    if (object.order_max_bids !== undefined && object.order_max_bids !== null) {
      message.orderMaxBids = object.order_max_bids;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.bid_min_deposit = message.bidMinDeposit ? Coin.toAmino(message.bidMinDeposit) : undefined;
    obj.order_max_bids = message.orderMaxBids;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.Params",
      value: Params.encode(message).finish()
    };
  }
};