import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * PubKey defines a secp256k1 public key
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 */
export interface PubKey {
  key: Uint8Array;
}
/** PrivKey defines a secp256k1 private key. */
export interface PrivKey {
  key: Uint8Array;
}
function createBasePubKey(): PubKey {
  return {
    key: new Uint8Array()
  };
}
export const PubKey = {
  typeUrl: "/cosmos.crypto.secp256k1.PubKey",
  aminoType: "cosmos-sdk/PubKey",
  encode(message: PubKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
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
  fromPartial(object: DeepPartial<PubKey>): PubKey {
    const message = createBasePubKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  }
};
function createBasePrivKey(): PrivKey {
  return {
    key: new Uint8Array()
  };
}
export const PrivKey = {
  typeUrl: "/cosmos.crypto.secp256k1.PrivKey",
  aminoType: "cosmos-sdk/PrivKey",
  encode(message: PrivKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
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
  fromPartial(object: DeepPartial<PrivKey>): PrivKey {
    const message = createBasePrivKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  }
};