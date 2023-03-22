//@ts-nocheck
/* eslint-disable */
import { Any } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../../helpers";
export const protobufPackage = "ibc.applications.interchain_accounts.v1";

/**
 * Type defines a classification of message issued from a controller chain to its associated interchain accounts
 * host
 */
export enum Type {
  /** TYPE_UNSPECIFIED - Default zero value enumeration */
  TYPE_UNSPECIFIED = 0,

  /** TYPE_EXECUTE_TX - Execute a transaction on an interchain accounts host chain */
  TYPE_EXECUTE_TX = 1,
  UNRECOGNIZED = -1,
}
export function typeFromJSON(object: any): Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Type.TYPE_UNSPECIFIED;

    case 1:
    case "TYPE_EXECUTE_TX":
      return Type.TYPE_EXECUTE_TX;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Type.UNRECOGNIZED;
  }
}
export function typeToJSON(object: Type): string {
  switch (object) {
    case Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";

    case Type.TYPE_EXECUTE_TX:
      return "TYPE_EXECUTE_TX";

    case Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** InterchainAccountPacketData is comprised of a raw transaction, type of transaction and optional memo field. */
export interface InterchainAccountPacketData {
  type: Type;
  data: Uint8Array;
  memo: string;
}

/** CosmosTx contains a list of sdk.Msg's. It should be used when sending transactions to an SDK host chain. */
export interface CosmosTx {
  messages: Any[];
}

function createBaseInterchainAccountPacketData(): InterchainAccountPacketData {
  return {
    type: 0,
    data: new Uint8Array(),
    memo: ""
  };
}

export const InterchainAccountPacketData = {
  encode(message: InterchainAccountPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    if (message.memo !== "") {
      writer.uint32(26).string(message.memo);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterchainAccountPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterchainAccountPacketData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = (reader.int32() as any);
          break;

        case 2:
          message.data = reader.bytes();
          break;

        case 3:
          message.memo = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InterchainAccountPacketData {
    return {
      type: isSet(object.type) ? typeFromJSON(object.type) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      memo: isSet(object.memo) ? String(object.memo) : ""
    };
  },

  toJSON(message: InterchainAccountPacketData): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = typeToJSON(message.type));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.memo !== undefined && (obj.memo = message.memo);
    return obj;
  },

  fromPartial(object: DeepPartial<InterchainAccountPacketData>): InterchainAccountPacketData {
    const message = createBaseInterchainAccountPacketData();
    message.type = object.type ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.memo = object.memo ?? "";
    return message;
  },

  fromSDKJSON(object: any): InterchainAccountPacketDataSDKType {
    return {
      type: isSet(object.type) ? typeFromJSON(object.type) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      memo: isSet(object.memo) ? String(object.memo) : ""
    };
  }

};

function createBaseCosmosTx(): CosmosTx {
  return {
    messages: []
  };
}

export const CosmosTx = {
  encode(message: CosmosTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CosmosTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCosmosTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CosmosTx {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: CosmosTx): unknown {
    const obj: any = {};

    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<CosmosTx>): CosmosTx {
    const message = createBaseCosmosTx();
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    return message;
  },

  fromSDKJSON(object: any): CosmosTxSDKType {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromSDKJSON(e)) : []
    };
  }

};