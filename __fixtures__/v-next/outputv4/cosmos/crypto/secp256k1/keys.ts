import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.crypto.secp256k1";
/**
 * PubKey defines a secp256k1 public key
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 */
export interface PubKey {
  key?: Uint8Array;
}
/**
 * PubKey defines a secp256k1 public key
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 */
export interface PubKeySDKType {
  key?: Uint8Array;
}
/** PrivKey defines a secp256k1 private key. */
export interface PrivKey {
  key?: Uint8Array;
}
/** PrivKey defines a secp256k1 private key. */
export interface PrivKeySDKType {
  key?: Uint8Array;
}
function createBasePubKey(): PubKey {
  return {
    key: undefined
  };
}
export const PubKey = {
  typeUrl: "/cosmos.crypto.secp256k1.PubKey",
  encode(message: PubKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PubKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PubKey {
    const obj = createBasePubKey();
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    return obj;
  },
  toJSON(message: PubKey): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key !== undefined ? base64FromBytes(message.key) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<PubKey>): PubKey {
    const message = createBasePubKey();
    message.key = object.key ?? undefined;
    return message;
  },
  fromSDK(object: PubKeySDKType): PubKey {
    return {
      key: object?.key
    };
  },
  fromSDKJSON(object: any): PubKeySDKType {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : undefined
    };
  },
  toSDK(message: PubKey): PubKeySDKType {
    const obj: any = {};
    obj.key = message.key;
    return obj;
  },
  fromAmino(object: PubKeyAmino): PubKey {
    return {
      key: object?.key
    };
  },
  toAmino(message: PubKey): PubKeyAmino {
    const obj: any = {};
    obj.key = message.key;
    return obj;
  },
  fromAminoMsg(object: PubKeyAminoMsg): PubKey {
    return PubKey.fromAmino(object.value);
  },
  toAminoMsg(message: PubKey): PubKeyAminoMsg {
    return {
      type: "cosmos-sdk/PubKey",
      value: PubKey.toAmino(message)
    };
  },
  fromProtoMsg(message: PubKeyProtoMsg): PubKey {
    return PubKey.decode(message.value);
  },
  toProto(message: PubKey): Uint8Array {
    return PubKey.encode(message).finish();
  },
  toProtoMsg(message: PubKey): PubKeyProtoMsg {
    return {
      typeUrl: "/cosmos.crypto.secp256k1.PubKey",
      value: PubKey.encode(message).finish()
    };
  }
};
function createBasePrivKey(): PrivKey {
  return {
    key: undefined
  };
}
export const PrivKey = {
  typeUrl: "/cosmos.crypto.secp256k1.PrivKey",
  encode(message: PrivKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PrivKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PrivKey {
    const obj = createBasePrivKey();
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    return obj;
  },
  toJSON(message: PrivKey): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key !== undefined ? base64FromBytes(message.key) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<PrivKey>): PrivKey {
    const message = createBasePrivKey();
    message.key = object.key ?? undefined;
    return message;
  },
  fromSDK(object: PrivKeySDKType): PrivKey {
    return {
      key: object?.key
    };
  },
  fromSDKJSON(object: any): PrivKeySDKType {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : undefined
    };
  },
  toSDK(message: PrivKey): PrivKeySDKType {
    const obj: any = {};
    obj.key = message.key;
    return obj;
  },
  fromAmino(object: PrivKeyAmino): PrivKey {
    return {
      key: object?.key
    };
  },
  toAmino(message: PrivKey): PrivKeyAmino {
    const obj: any = {};
    obj.key = message.key;
    return obj;
  },
  fromAminoMsg(object: PrivKeyAminoMsg): PrivKey {
    return PrivKey.fromAmino(object.value);
  },
  toAminoMsg(message: PrivKey): PrivKeyAminoMsg {
    return {
      type: "cosmos-sdk/PrivKey",
      value: PrivKey.toAmino(message)
    };
  },
  fromProtoMsg(message: PrivKeyProtoMsg): PrivKey {
    return PrivKey.decode(message.value);
  },
  toProto(message: PrivKey): Uint8Array {
    return PrivKey.encode(message).finish();
  },
  toProtoMsg(message: PrivKey): PrivKeyProtoMsg {
    return {
      typeUrl: "/cosmos.crypto.secp256k1.PrivKey",
      value: PrivKey.encode(message).finish()
    };
  }
};