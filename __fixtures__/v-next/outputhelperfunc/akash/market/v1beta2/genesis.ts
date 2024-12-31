import { Order, OrderAmino, OrderSDKType } from "./order";
import { Lease, LeaseAmino, LeaseSDKType } from "./lease";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "akash.market.v1beta2";
/** GenesisState defines the basic genesis state used by market module */
export interface GenesisState {
  orders: Order[];
  leases: Lease[];
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.market.v1beta2.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the basic genesis state used by market module */
export interface GenesisStateAmino {
  orders: OrderAmino[];
  leases: LeaseAmino[];
  params: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "akash/market/v1beta2/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the basic genesis state used by market module */
export interface GenesisStateSDKType {
  orders: OrderSDKType[];
  leases: LeaseSDKType[];
  params: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    orders: [],
    leases: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/akash.market.v1beta2.GenesisState",
  aminoType: "akash/market/v1beta2/genesis-state",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.orders) && (!o.orders.length || Order.is(o.orders[0])) && Array.isArray(o.leases) && (!o.leases.length || Lease.is(o.leases[0])) && Params.is(o.params));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.orders) && (!o.orders.length || Order.isSDK(o.orders[0])) && Array.isArray(o.leases) && (!o.leases.length || Lease.isSDK(o.leases[0])) && Params.isSDK(o.params));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.orders) && (!o.orders.length || Order.isAmino(o.orders[0])) && Array.isArray(o.leases) && (!o.leases.length || Lease.isAmino(o.leases[0])) && Params.isAmino(o.params));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.leases) {
      Lease.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        case 2:
          message.leases.push(Lease.decode(reader, reader.uint32()));
          break;
        case 3:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (Array.isArray(object?.orders)) obj.orders = object.orders.map((e: any) => Order.fromJSON(e));
    if (Array.isArray(object?.leases)) obj.leases = object.leases.map((e: any) => Lease.fromJSON(e));
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    if (message.leases) {
      obj.leases = message.leases.map(e => e ? Lease.toJSON(e) : undefined);
    } else {
      obj.leases = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    message.leases = object.leases?.map(e => Lease.fromPartial(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromSDK(e)) : [],
      leases: Array.isArray(object?.leases) ? object.leases.map((e: any) => Lease.fromSDK(e)) : [],
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromSDKJSON(e)) : [],
      leases: Array.isArray(object?.leases) ? object.leases.map((e: any) => Lease.fromSDKJSON(e)) : [],
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toSDK(e) : undefined);
    } else {
      obj.orders = [];
    }
    if (message.leases) {
      obj.leases = message.leases.map(e => e ? Lease.toSDK(e) : undefined);
    } else {
      obj.leases = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.orders = object.orders?.map(e => Order.fromAmino(e)) || [];
    message.leases = object.leases?.map(e => Lease.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toAmino(e) : undefined);
    } else {
      obj.orders = message.orders;
    }
    if (message.leases) {
      obj.leases = message.leases.map(e => e ? Lease.toAmino(e) : undefined);
    } else {
      obj.leases = message.leases;
    }
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "akash/market/v1beta2/genesis-state",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Order.registerTypeUrl();
    Lease.registerTypeUrl();
    Params.registerTypeUrl();
  }
};