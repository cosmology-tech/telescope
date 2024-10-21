import { Any } from "../../../../google/protobuf/any";
import { BIP44Params } from "../../hd/v1/hd";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** Record is used for representing a key in the keyring. */
export interface Record {
  /** name represents a name of Record */
  name: string;
  /** pub_key represents a public key in any format */
  pubKey?: Any;
  /** local stores the public information about a locally stored key */
  local?: Record_Local;
  /** ledger stores the public information about a Ledger key */
  ledger?: Record_Ledger;
  /** Multi does not store any information. */
  multi?: Record_Multi;
  /** Offline does not store any information. */
  offline?: Record_Offline;
}
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_Local {
  privKey?: Any;
  privKeyType: string;
}
/** Ledger item */
export interface Record_Ledger {
  path?: BIP44Params;
}
/** Multi item */
export interface Record_Multi {}
/** Offline item */
export interface Record_Offline {}
function createBaseRecord(): Record {
  return {
    name: "",
    pubKey: undefined,
    local: undefined,
    ledger: undefined,
    multi: undefined,
    offline: undefined
  };
}
export const Record = {
  typeUrl: "/cosmos.crypto.keyring.v1.Record",
  aminoType: "cosmos-sdk/Record",
  encode(message: Record, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.local !== undefined) {
      Record_Local.encode(message.local, writer.uint32(26).fork()).ldelim();
    }
    if (message.ledger !== undefined) {
      Record_Ledger.encode(message.ledger, writer.uint32(34).fork()).ldelim();
    }
    if (message.multi !== undefined) {
      Record_Multi.encode(message.multi, writer.uint32(42).fork()).ldelim();
    }
    if (message.offline !== undefined) {
      Record_Offline.encode(message.offline, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Record {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.local = Record_Local.decode(reader, reader.uint32());
          break;
        case 4:
          message.ledger = Record_Ledger.decode(reader, reader.uint32());
          break;
        case 5:
          message.multi = Record_Multi.decode(reader, reader.uint32());
          break;
        case 6:
          message.offline = Record_Offline.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Record>): Record {
    const message = createBaseRecord();
    message.name = object.name ?? "";
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
    message.local = object.local !== undefined && object.local !== null ? Record_Local.fromPartial(object.local) : undefined;
    message.ledger = object.ledger !== undefined && object.ledger !== null ? Record_Ledger.fromPartial(object.ledger) : undefined;
    message.multi = object.multi !== undefined && object.multi !== null ? Record_Multi.fromPartial(object.multi) : undefined;
    message.offline = object.offline !== undefined && object.offline !== null ? Record_Offline.fromPartial(object.offline) : undefined;
    return message;
  }
};
function createBaseRecord_Local(): Record_Local {
  return {
    privKey: undefined,
    privKeyType: ""
  };
}
export const Record_Local = {
  typeUrl: "/cosmos.crypto.keyring.v1.Local",
  aminoType: "cosmos-sdk/Local",
  encode(message: Record_Local, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.privKey !== undefined) {
      Any.encode(message.privKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.privKeyType !== "") {
      writer.uint32(18).string(message.privKeyType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Record_Local {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord_Local();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privKey = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.privKeyType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Record_Local>): Record_Local {
    const message = createBaseRecord_Local();
    message.privKey = object.privKey !== undefined && object.privKey !== null ? Any.fromPartial(object.privKey) : undefined;
    message.privKeyType = object.privKeyType ?? "";
    return message;
  }
};
function createBaseRecord_Ledger(): Record_Ledger {
  return {
    path: undefined
  };
}
export const Record_Ledger = {
  typeUrl: "/cosmos.crypto.keyring.v1.Ledger",
  aminoType: "cosmos-sdk/Ledger",
  encode(message: Record_Ledger, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path !== undefined) {
      BIP44Params.encode(message.path, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Record_Ledger {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord_Ledger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = BIP44Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Record_Ledger>): Record_Ledger {
    const message = createBaseRecord_Ledger();
    message.path = object.path !== undefined && object.path !== null ? BIP44Params.fromPartial(object.path) : undefined;
    return message;
  }
};
function createBaseRecord_Multi(): Record_Multi {
  return {};
}
export const Record_Multi = {
  typeUrl: "/cosmos.crypto.keyring.v1.Multi",
  aminoType: "cosmos-sdk/Multi",
  encode(_: Record_Multi, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Record_Multi {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord_Multi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<Record_Multi>): Record_Multi {
    const message = createBaseRecord_Multi();
    return message;
  }
};
function createBaseRecord_Offline(): Record_Offline {
  return {};
}
export const Record_Offline = {
  typeUrl: "/cosmos.crypto.keyring.v1.Offline",
  aminoType: "cosmos-sdk/Offline",
  encode(_: Record_Offline, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Record_Offline {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord_Offline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<Record_Offline>): Record_Offline {
    const message = createBaseRecord_Offline();
    return message;
  }
};