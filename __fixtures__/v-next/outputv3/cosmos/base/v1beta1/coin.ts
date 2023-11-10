import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.base.v1beta1";
/**
 * Coin defines a token with a denomination and an amount.
 * 
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 */
export interface Coin {
  denom: string;
  amount: string;
}
export interface CoinProtoMsg {
  typeUrl: "/cosmos.base.v1beta1.Coin";
  value: Uint8Array;
}
/**
 * Coin defines a token with a denomination and an amount.
 * 
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 */
export interface CoinAmino {
  denom: string;
  amount: string;
}
/**
 * Coin defines a token with a denomination and an amount.
 * 
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 */
export interface CoinSDKType {
  denom: string;
  amount: string;
}
/**
 * DecCoin defines a token with a denomination and a decimal amount.
 * 
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 */
export interface DecCoin {
  denom: string;
  amount: string;
}
export interface DecCoinProtoMsg {
  typeUrl: "/cosmos.base.v1beta1.DecCoin";
  value: Uint8Array;
}
/**
 * DecCoin defines a token with a denomination and a decimal amount.
 * 
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 */
export interface DecCoinAmino {
  denom: string;
  amount: string;
}
/**
 * DecCoin defines a token with a denomination and a decimal amount.
 * 
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 */
export interface DecCoinSDKType {
  denom: string;
  amount: string;
}
/** IntProto defines a Protobuf wrapper around an Int object. */
export interface IntProto {
  int: string;
}
export interface IntProtoProtoMsg {
  typeUrl: "/cosmos.base.v1beta1.IntProto";
  value: Uint8Array;
}
/** IntProto defines a Protobuf wrapper around an Int object. */
export interface IntProtoAmino {
  int: string;
}
/** IntProto defines a Protobuf wrapper around an Int object. */
export interface IntProtoSDKType {
  int: string;
}
/** DecProto defines a Protobuf wrapper around a Dec object. */
export interface DecProto {
  dec: string;
}
export interface DecProtoProtoMsg {
  typeUrl: "/cosmos.base.v1beta1.DecProto";
  value: Uint8Array;
}
/** DecProto defines a Protobuf wrapper around a Dec object. */
export interface DecProtoAmino {
  dec: string;
}
/** DecProto defines a Protobuf wrapper around a Dec object. */
export interface DecProtoSDKType {
  dec: string;
}
function createBaseCoin(): Coin {
  return {
    denom: "",
    amount: ""
  };
}
export const Coin = {
  typeUrl: "/cosmos.base.v1beta1.Coin",
  aminoType: "cosmos-sdk/Coin",
  encode(message: Coin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Coin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Coin {
    const obj = createBaseCoin();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.amount)) obj.amount = String(object.amount);
    return obj;
  },
  toJSON(message: Coin): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: DeepPartial<Coin>): Coin {
    const message = createBaseCoin();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromSDK(object: CoinSDKType): Coin {
    return {
      denom: object?.denom,
      amount: object?.amount
    };
  },
  toSDK(message: Coin): CoinSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: CoinAmino): Coin {
    return {
      denom: object.denom,
      amount: object.amount
    };
  },
  toAmino(message: Coin, useInterfaces: boolean = true): CoinAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.amount = message.amount;
    return obj;
  },
  fromProtoMsg(message: CoinProtoMsg, useInterfaces: boolean = true): Coin {
    return Coin.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Coin): Uint8Array {
    return Coin.encode(message).finish();
  },
  toProtoMsg(message: Coin): CoinProtoMsg {
    return {
      typeUrl: "/cosmos.base.v1beta1.Coin",
      value: Coin.encode(message).finish()
    };
  }
};
function createBaseDecCoin(): DecCoin {
  return {
    denom: "",
    amount: ""
  };
}
export const DecCoin = {
  typeUrl: "/cosmos.base.v1beta1.DecCoin",
  aminoType: "cosmos-sdk/DecCoin",
  encode(message: DecCoin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): DecCoin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DecCoin {
    const obj = createBaseDecCoin();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.amount)) obj.amount = String(object.amount);
    return obj;
  },
  toJSON(message: DecCoin): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: DeepPartial<DecCoin>): DecCoin {
    const message = createBaseDecCoin();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromSDK(object: DecCoinSDKType): DecCoin {
    return {
      denom: object?.denom,
      amount: object?.amount
    };
  },
  toSDK(message: DecCoin): DecCoinSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: DecCoinAmino): DecCoin {
    return {
      denom: object.denom,
      amount: object.amount
    };
  },
  toAmino(message: DecCoin, useInterfaces: boolean = true): DecCoinAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.amount = message.amount;
    return obj;
  },
  fromProtoMsg(message: DecCoinProtoMsg, useInterfaces: boolean = true): DecCoin {
    return DecCoin.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: DecCoin): Uint8Array {
    return DecCoin.encode(message).finish();
  },
  toProtoMsg(message: DecCoin): DecCoinProtoMsg {
    return {
      typeUrl: "/cosmos.base.v1beta1.DecCoin",
      value: DecCoin.encode(message).finish()
    };
  }
};
function createBaseIntProto(): IntProto {
  return {
    int: ""
  };
}
export const IntProto = {
  typeUrl: "/cosmos.base.v1beta1.IntProto",
  aminoType: "cosmos-sdk/IntProto",
  encode(message: IntProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.int !== "") {
      writer.uint32(10).string(message.int);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): IntProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.int = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IntProto {
    const obj = createBaseIntProto();
    if (isSet(object.int)) obj.int = String(object.int);
    return obj;
  },
  toJSON(message: IntProto): unknown {
    const obj: any = {};
    message.int !== undefined && (obj.int = message.int);
    return obj;
  },
  fromPartial(object: DeepPartial<IntProto>): IntProto {
    const message = createBaseIntProto();
    message.int = object.int ?? "";
    return message;
  },
  fromSDK(object: IntProtoSDKType): IntProto {
    return {
      int: object?.int
    };
  },
  toSDK(message: IntProto): IntProtoSDKType {
    const obj: any = {};
    obj.int = message.int;
    return obj;
  },
  fromAmino(object: IntProtoAmino): IntProto {
    return {
      int: object.int
    };
  },
  toAmino(message: IntProto, useInterfaces: boolean = true): IntProtoAmino {
    const obj: any = {};
    obj.int = message.int;
    return obj;
  },
  fromProtoMsg(message: IntProtoProtoMsg, useInterfaces: boolean = true): IntProto {
    return IntProto.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: IntProto): Uint8Array {
    return IntProto.encode(message).finish();
  },
  toProtoMsg(message: IntProto): IntProtoProtoMsg {
    return {
      typeUrl: "/cosmos.base.v1beta1.IntProto",
      value: IntProto.encode(message).finish()
    };
  }
};
function createBaseDecProto(): DecProto {
  return {
    dec: ""
  };
}
export const DecProto = {
  typeUrl: "/cosmos.base.v1beta1.DecProto",
  aminoType: "cosmos-sdk/DecProto",
  encode(message: DecProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dec !== "") {
      writer.uint32(10).string(message.dec);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): DecProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dec = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DecProto {
    const obj = createBaseDecProto();
    if (isSet(object.dec)) obj.dec = String(object.dec);
    return obj;
  },
  toJSON(message: DecProto): unknown {
    const obj: any = {};
    message.dec !== undefined && (obj.dec = message.dec);
    return obj;
  },
  fromPartial(object: DeepPartial<DecProto>): DecProto {
    const message = createBaseDecProto();
    message.dec = object.dec ?? "";
    return message;
  },
  fromSDK(object: DecProtoSDKType): DecProto {
    return {
      dec: object?.dec
    };
  },
  toSDK(message: DecProto): DecProtoSDKType {
    const obj: any = {};
    obj.dec = message.dec;
    return obj;
  },
  fromAmino(object: DecProtoAmino): DecProto {
    return {
      dec: object.dec
    };
  },
  toAmino(message: DecProto, useInterfaces: boolean = true): DecProtoAmino {
    const obj: any = {};
    obj.dec = message.dec;
    return obj;
  },
  fromProtoMsg(message: DecProtoProtoMsg, useInterfaces: boolean = true): DecProto {
    return DecProto.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: DecProto): Uint8Array {
    return DecProto.encode(message).finish();
  },
  toProtoMsg(message: DecProto): DecProtoProtoMsg {
    return {
      typeUrl: "/cosmos.base.v1beta1.DecProto",
      value: DecProto.encode(message).finish()
    };
  }
};