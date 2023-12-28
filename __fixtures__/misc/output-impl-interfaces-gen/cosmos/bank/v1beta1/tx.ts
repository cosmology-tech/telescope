import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.bank.v1beta1";
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */
export interface MsgInstantiateContract2 {
  /** CodeID is the reference to the stored WASM code */
  codeId: bigint;
  /** Label is optional metadata to be stored with a contract instance. */
  label: string;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
  /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
  salt: Uint8Array;
  /**
   * FixMsg include the msg value into the hash for the predictable address.
   * Default is false
   */
  fixMsg: boolean;
  dontOmitemptyFixMsg: boolean;
  aListOfBytes: Uint8Array[];
}
export interface MsgInstantiateContract2ProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.MsgInstantiateContract2";
  value: Uint8Array;
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */
export interface MsgInstantiateContract2Amino {
  /** CodeID is the reference to the stored WASM code */
  code_id?: string;
  /** Label is optional metadata to be stored with a contract instance. */
  label?: string;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: CoinAmino[];
  /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
  salt?: string;
  /**
   * FixMsg include the msg value into the hash for the predictable address.
   * Default is false
   */
  fix_msg?: boolean;
  dont_omitempty_fix_msg: boolean;
  a_list_of_bytes?: string[];
}
export interface MsgInstantiateContract2AminoMsg {
  type: "wasm/MsgInstantiateContract2";
  value: MsgInstantiateContract2Amino;
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */
export interface MsgInstantiateContract2SDKType {
  code_id: bigint;
  label: string;
  funds: CoinSDKType[];
  salt: Uint8Array;
  fix_msg: boolean;
  dont_omitempty_fix_msg: boolean;
  a_list_of_bytes: Uint8Array[];
}
function createBaseMsgInstantiateContract2(): MsgInstantiateContract2 {
  return {
    codeId: BigInt(0),
    label: "",
    funds: [],
    salt: new Uint8Array(),
    fixMsg: false,
    dontOmitemptyFixMsg: false,
    aListOfBytes: []
  };
}
export const MsgInstantiateContract2 = {
  typeUrl: "/cosmos.bank.v1beta1.MsgInstantiateContract2",
  aminoType: "wasm/MsgInstantiateContract2",
  is(o: any): o is MsgInstantiateContract2 {
    return o && (o.$typeUrl === MsgInstantiateContract2.typeUrl || typeof o.codeId === "bigint" && typeof o.label === "string" && Array.isArray(o.funds) && (!o.funds.length || Coin.is(o.funds[0])) && (o.salt instanceof Uint8Array || typeof o.salt === "string") && typeof o.fixMsg === "boolean" && typeof o.dontOmitemptyFixMsg === "boolean" && Array.isArray(o.aListOfBytes) && (!o.aListOfBytes.length || o.aListOfBytes[0] instanceof Uint8Array || typeof o.aListOfBytes[0] === "string"));
  },
  isSDK(o: any): o is MsgInstantiateContract2SDKType {
    return o && (o.$typeUrl === MsgInstantiateContract2.typeUrl || typeof o.code_id === "bigint" && typeof o.label === "string" && Array.isArray(o.funds) && (!o.funds.length || Coin.isSDK(o.funds[0])) && (o.salt instanceof Uint8Array || typeof o.salt === "string") && typeof o.fix_msg === "boolean" && typeof o.dont_omitempty_fix_msg === "boolean" && Array.isArray(o.a_list_of_bytes) && (!o.a_list_of_bytes.length || o.a_list_of_bytes[0] instanceof Uint8Array || typeof o.a_list_of_bytes[0] === "string"));
  },
  isAmino(o: any): o is MsgInstantiateContract2Amino {
    return o && (o.$typeUrl === MsgInstantiateContract2.typeUrl || typeof o.code_id === "bigint" && typeof o.label === "string" && Array.isArray(o.funds) && (!o.funds.length || Coin.isAmino(o.funds[0])) && (o.salt instanceof Uint8Array || typeof o.salt === "string") && typeof o.fix_msg === "boolean" && typeof o.dont_omitempty_fix_msg === "boolean" && Array.isArray(o.a_list_of_bytes) && (!o.a_list_of_bytes.length || o.a_list_of_bytes[0] instanceof Uint8Array || typeof o.a_list_of_bytes[0] === "string"));
  },
  encode(message: MsgInstantiateContract2, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.salt.length !== 0) {
      writer.uint32(34).bytes(message.salt);
    }
    if (message.fixMsg === true) {
      writer.uint32(40).bool(message.fixMsg);
    }
    if (message.dontOmitemptyFixMsg === true) {
      writer.uint32(48).bool(message.dontOmitemptyFixMsg);
    }
    for (const v of message.aListOfBytes) {
      writer.uint32(58).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContract2 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.label = reader.string();
          break;
        case 3:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.salt = reader.bytes();
          break;
        case 5:
          message.fixMsg = reader.bool();
          break;
        case 6:
          message.dontOmitemptyFixMsg = reader.bool();
          break;
        case 7:
          message.aListOfBytes.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInstantiateContract2 {
    const obj = createBaseMsgInstantiateContract2();
    if (isSet(object.codeId)) obj.codeId = BigInt(object.codeId.toString());
    if (isSet(object.label)) obj.label = String(object.label);
    if (Array.isArray(object?.funds)) obj.funds = object.funds.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.salt)) obj.salt = bytesFromBase64(object.salt);
    if (isSet(object.fixMsg)) obj.fixMsg = Boolean(object.fixMsg);
    if (isSet(object.dontOmitemptyFixMsg)) obj.dontOmitemptyFixMsg = Boolean(object.dontOmitemptyFixMsg);
    if (Array.isArray(object?.aListOfBytes)) obj.aListOfBytes = object.aListOfBytes.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  toJSON(message: MsgInstantiateContract2): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    message.label !== undefined && (obj.label = message.label);
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }
    message.salt !== undefined && (obj.salt = base64FromBytes(message.salt !== undefined ? message.salt : new Uint8Array()));
    message.fixMsg !== undefined && (obj.fixMsg = message.fixMsg);
    message.dontOmitemptyFixMsg !== undefined && (obj.dontOmitemptyFixMsg = message.dontOmitemptyFixMsg);
    if (message.aListOfBytes) {
      obj.aListOfBytes = message.aListOfBytes.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.aListOfBytes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgInstantiateContract2>): MsgInstantiateContract2 {
    const message = createBaseMsgInstantiateContract2();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    message.label = object.label ?? "";
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.salt = object.salt ?? new Uint8Array();
    message.fixMsg = object.fixMsg ?? false;
    message.dontOmitemptyFixMsg = object.dontOmitemptyFixMsg ?? false;
    message.aListOfBytes = object.aListOfBytes?.map(e => e) || [];
    return message;
  },
  fromSDK(object: MsgInstantiateContract2SDKType): MsgInstantiateContract2 {
    return {
      codeId: object?.code_id,
      label: object?.label,
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromSDK(e)) : [],
      salt: object?.salt,
      fixMsg: object?.fix_msg,
      dontOmitemptyFixMsg: object?.dont_omitempty_fix_msg,
      aListOfBytes: Array.isArray(object?.a_list_of_bytes) ? object.a_list_of_bytes.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): MsgInstantiateContract2SDKType {
    return {
      code_id: isSet(object.code_id) ? BigInt(object.code_id.toString()) : BigInt(0),
      label: isSet(object.label) ? String(object.label) : "",
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromSDKJSON(e)) : [],
      salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array(),
      fix_msg: isSet(object.fix_msg) ? Boolean(object.fix_msg) : false,
      dont_omitempty_fix_msg: isSet(object.dont_omitempty_fix_msg) ? Boolean(object.dont_omitempty_fix_msg) : false,
      a_list_of_bytes: Array.isArray(object?.a_list_of_bytes) ? object.a_list_of_bytes.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  toSDK(message: MsgInstantiateContract2): MsgInstantiateContract2SDKType {
    const obj: any = {};
    obj.code_id = message.codeId;
    obj.label = message.label;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.funds = [];
    }
    obj.salt = message.salt;
    obj.fix_msg = message.fixMsg;
    obj.dont_omitempty_fix_msg = message.dontOmitemptyFixMsg;
    if (message.aListOfBytes) {
      obj.a_list_of_bytes = message.aListOfBytes.map(e => e);
    } else {
      obj.a_list_of_bytes = [];
    }
    return obj;
  },
  fromAmino(object: MsgInstantiateContract2Amino): MsgInstantiateContract2 {
    const message = createBaseMsgInstantiateContract2();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    }
    message.funds = object.funds?.map(e => Coin.fromAmino(e)) || [];
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = bytesFromBase64(object.salt);
    }
    if (object.fix_msg !== undefined && object.fix_msg !== null) {
      message.fixMsg = object.fix_msg;
    }
    if (object.dont_omitempty_fix_msg !== undefined && object.dont_omitempty_fix_msg !== null) {
      message.dontOmitemptyFixMsg = object.dont_omitempty_fix_msg;
    }
    message.aListOfBytes = object.a_list_of_bytes?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: MsgInstantiateContract2): MsgInstantiateContract2Amino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.label = message.label;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.funds = [];
    }
    obj.salt = message.salt ? base64FromBytes(message.salt) : undefined;
    obj.fix_msg = message.fixMsg;
    obj.dont_omitempty_fix_msg = message.dontOmitemptyFixMsg ?? false;
    if (message.aListOfBytes) {
      obj.a_list_of_bytes = message.aListOfBytes.map(e => base64FromBytes(e));
    } else {
      obj.a_list_of_bytes = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgInstantiateContract2AminoMsg): MsgInstantiateContract2 {
    return MsgInstantiateContract2.fromAmino(object.value);
  },
  toAminoMsg(message: MsgInstantiateContract2): MsgInstantiateContract2AminoMsg {
    return {
      type: "wasm/MsgInstantiateContract2",
      value: MsgInstantiateContract2.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgInstantiateContract2ProtoMsg): MsgInstantiateContract2 {
    return MsgInstantiateContract2.decode(message.value);
  },
  toProto(message: MsgInstantiateContract2): Uint8Array {
    return MsgInstantiateContract2.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantiateContract2): MsgInstantiateContract2ProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.MsgInstantiateContract2",
      value: MsgInstantiateContract2.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgInstantiateContract2.typeUrl, MsgInstantiateContract2);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgInstantiateContract2.aminoType, MsgInstantiateContract2.typeUrl);