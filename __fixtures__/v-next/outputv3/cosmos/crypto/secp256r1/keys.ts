import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, DeepPartial, base64FromBytes } from "../../../helpers";
export const protobufPackage = "cosmos.crypto.secp256r1";
/** PubKey defines a secp256r1 ECDSA public key. */
export interface PubKey {
  /**
   * Point on secp256r1 curve in a compressed representation as specified in section
   * 4.3.6 of ANSI X9.62: https://webstore.ansi.org/standards/ascx9/ansix9621998
   */
  key: Uint8Array;
}
export interface PubKeyProtoMsg {
  typeUrl: "/cosmos.crypto.secp256r1.PubKey";
  value: Uint8Array;
}
/** PubKey defines a secp256r1 ECDSA public key. */
export interface PubKeyAmino {
  /**
   * Point on secp256r1 curve in a compressed representation as specified in section
   * 4.3.6 of ANSI X9.62: https://webstore.ansi.org/standards/ascx9/ansix9621998
   */
  key?: string;
}
/** PubKey defines a secp256r1 ECDSA public key. */
export interface PubKeySDKType {
  key: Uint8Array;
}
/** PrivKey defines a secp256r1 ECDSA private key. */
export interface PrivKey {
  /** secret number serialized using big-endian encoding */
  secret: Uint8Array;
}
export interface PrivKeyProtoMsg {
  typeUrl: "/cosmos.crypto.secp256r1.PrivKey";
  value: Uint8Array;
}
/** PrivKey defines a secp256r1 ECDSA private key. */
export interface PrivKeyAmino {
  /** secret number serialized using big-endian encoding */
  secret?: string;
}
/** PrivKey defines a secp256r1 ECDSA private key. */
export interface PrivKeySDKType {
  secret: Uint8Array;
}
function createBasePubKey(): PubKey {
  return {
    key: new Uint8Array()
  };
}
export const PubKey = {
  typeUrl: "/cosmos.crypto.secp256r1.PubKey",
  aminoType: "cosmos-sdk/PubKey",
  encode(message: PubKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PubKey {
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
  fromPartial(object: DeepPartial<PubKey>): PubKey {
    const message = createBasePubKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  },
  fromSDK(object: PubKeySDKType): PubKey {
    return {
      key: object?.key
    };
  },
  toSDK(message: PubKey): PubKeySDKType {
    const obj: any = {};
    obj.key = message.key;
    return obj;
  },
  fromAmino(object: PubKeyAmino): PubKey {
    const message = createBasePubKey();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    return message;
  },
  toAmino(message: PubKey, useInterfaces: boolean = true): PubKeyAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    return obj;
  },
  fromProtoMsg(message: PubKeyProtoMsg, useInterfaces: boolean = true): PubKey {
    return PubKey.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PubKey): Uint8Array {
    return PubKey.encode(message).finish();
  },
  toProtoMsg(message: PubKey): PubKeyProtoMsg {
    return {
      typeUrl: "/cosmos.crypto.secp256r1.PubKey",
      value: PubKey.encode(message).finish()
    };
  }
};
function createBasePrivKey(): PrivKey {
  return {
    secret: new Uint8Array()
  };
}
export const PrivKey = {
  typeUrl: "/cosmos.crypto.secp256r1.PrivKey",
  aminoType: "cosmos-sdk/PrivKey",
  encode(message: PrivKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.secret.length !== 0) {
      writer.uint32(10).bytes(message.secret);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PrivKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secret = reader.bytes();
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
    if (isSet(object.secret)) obj.secret = bytesFromBase64(object.secret);
    return obj;
  },
  fromPartial(object: DeepPartial<PrivKey>): PrivKey {
    const message = createBasePrivKey();
    message.secret = object.secret ?? new Uint8Array();
    return message;
  },
  fromSDK(object: PrivKeySDKType): PrivKey {
    return {
      secret: object?.secret
    };
  },
  toSDK(message: PrivKey): PrivKeySDKType {
    const obj: any = {};
    obj.secret = message.secret;
    return obj;
  },
  fromAmino(object: PrivKeyAmino): PrivKey {
    const message = createBasePrivKey();
    if (object.secret !== undefined && object.secret !== null) {
      message.secret = bytesFromBase64(object.secret);
    }
    return message;
  },
  toAmino(message: PrivKey, useInterfaces: boolean = true): PrivKeyAmino {
    const obj: any = {};
    obj.secret = message.secret ? base64FromBytes(message.secret) : undefined;
    return obj;
  },
  fromProtoMsg(message: PrivKeyProtoMsg, useInterfaces: boolean = true): PrivKey {
    return PrivKey.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PrivKey): Uint8Array {
    return PrivKey.encode(message).finish();
  },
  toProtoMsg(message: PrivKey): PrivKeyProtoMsg {
    return {
      typeUrl: "/cosmos.crypto.secp256r1.PrivKey",
      value: PrivKey.encode(message).finish()
    };
  }
};