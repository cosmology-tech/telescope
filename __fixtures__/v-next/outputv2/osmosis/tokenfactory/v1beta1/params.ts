import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.tokenfactory.v1beta1";
/** Params defines the parameters for the tokenfactory module. */
export interface Params {
  denomCreationFee: Coin[];
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the tokenfactory module. */
export interface ParamsAmino {
  denom_creation_fee: CoinAmino[];
}
export interface ParamsAminoMsg {
  type: "osmosis/tokenfactory/params";
  value: ParamsAmino;
}
/** Params defines the parameters for the tokenfactory module. */
export interface ParamsSDKType {
  denom_creation_fee: CoinSDKType[];
}
function createBaseParams(): Params {
  return {
    denomCreationFee: []
  };
}
export const Params = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.Params",
  aminoType: "osmosis/tokenfactory/params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomCreationFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
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
    if (Array.isArray(object?.denomCreationFee)) obj.denomCreationFee = object.denomCreationFee.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.denomCreationFee) {
      obj.denomCreationFee = message.denomCreationFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.denomCreationFee = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.denomCreationFee = object.denomCreationFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      denomCreationFee: Array.isArray(object?.denom_creation_fee) ? object.denom_creation_fee.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    if (message.denomCreationFee) {
      obj.denom_creation_fee = message.denomCreationFee.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.denom_creation_fee = [];
    }
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      denomCreationFee: Array.isArray(object?.denom_creation_fee) ? object.denom_creation_fee.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: Params, useInterfaces: boolean = true): ParamsAmino {
    const obj: any = {};
    if (message.denomCreationFee) {
      obj.denom_creation_fee = message.denomCreationFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.denom_creation_fee = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params, useInterfaces: boolean = true): ParamsAminoMsg {
    return {
      type: "osmosis/tokenfactory/params",
      value: Params.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg, useInterfaces: boolean = true): Params {
    return Params.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};