import { AccessConfig } from "./types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { Long, isSet, bytesFromBase64, base64FromBytes, Exact, DeepPartial } from "@osmonauts/helpers";
import * as _m0 from "protobuf/minimal";
export interface MsgStoreCode {
  sender: string;
  wasmByteCode: Uint8Array;
  instantiatePermission: AccessConfig;
}

function createBaseMsgStoreCode(): MsgStoreCode {
  return {
    sender: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: undefined
  };
}

export const MsgStoreCode = {
  encode(message: MsgStoreCode, writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.wasmByteCode.length !== 0) {
      writer.uint32(18).bytes(message.wasmByteCode);
    }

    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCode();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.wasmByteCode = reader.bytes();
          break;

        case 5:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgStoreCode {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(),
      instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : undefined
    };
  },

  toJSON(message: MsgStoreCode): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.wasmByteCode !== undefined && (obj.wasmByteCode = base64FromBytes(message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array()));
    message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission ? AccessConfig.toJSON(message.instantiatePermission) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStoreCode>, I>>(object: I): MsgStoreCode {
    const message = createBaseMsgStoreCode();
    message.sender = object.sender ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    return message;
  }

};
export interface MsgStoreCodeResponse {
  codeId: Long;
}

function createBaseMsgStoreCodeResponse(): MsgStoreCodeResponse {
  return {
    codeId: Long.UZERO
  };
}

export const MsgStoreCodeResponse = {
  encode(message: MsgStoreCodeResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCodeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgStoreCodeResponse {
    return {
      codeId: isSet(object.codeId) ? Long.fromString(object.codeId) : Long.UZERO
    };
  },

  toJSON(message: MsgStoreCodeResponse): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStoreCodeResponse>, I>>(object: I): MsgStoreCodeResponse {
    const message = createBaseMsgStoreCodeResponse();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    return message;
  }

};
export interface MsgInstantiateContract {
  sender: string;
  admin: string;
  codeId: Long;
  label: string;
  msg: Uint8Array;
  funds: Coin[];
}

function createBaseMsgInstantiateContract(): MsgInstantiateContract {
  return {
    sender: "",
    admin: "",
    codeId: Long.UZERO,
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}

export const MsgInstantiateContract = {
  encode(message: MsgInstantiateContract, writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }

    if (!message.codeId.isZero()) {
      writer.uint32(24).uint64(message.codeId);
    }

    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }

    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.admin = reader.string();
          break;

        case 3:
          message.codeId = (reader.uint64() as Long);
          break;

        case 4:
          message.label = reader.string();
          break;

        case 5:
          message.msg = reader.bytes();
          break;

        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgInstantiateContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      codeId: isSet(object.codeId) ? Long.fromString(object.codeId) : Long.UZERO,
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgInstantiateContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.admin !== undefined && (obj.admin = message.admin);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.label !== undefined && (obj.label = message.label);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInstantiateContract>, I>>(object: I): MsgInstantiateContract {
    const message = createBaseMsgInstantiateContract();
    message.sender = object.sender ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};
export interface MsgInstantiateContractResponse {
  address: string;
  data: Uint8Array;
}

function createBaseMsgInstantiateContractResponse(): MsgInstantiateContractResponse {
  return {
    address: "",
    data: new Uint8Array()
  };
}

export const MsgInstantiateContractResponse = {
  encode(message: MsgInstantiateContractResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContractResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgInstantiateContractResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: MsgInstantiateContractResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInstantiateContractResponse>, I>>(object: I): MsgInstantiateContractResponse {
    const message = createBaseMsgInstantiateContractResponse();
    message.address = object.address ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};
export interface MsgExecuteContract {
  sender: string;
  contract: string;
  msg: Uint8Array;
  funds: Coin[];
}

function createBaseMsgExecuteContract(): MsgExecuteContract {
  return {
    sender: "",
    contract: "",
    msg: new Uint8Array(),
    funds: []
  };
}

export const MsgExecuteContract = {
  encode(message: MsgExecuteContract, writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }

    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.contract = reader.string();
          break;

        case 3:
          message.msg = reader.bytes();
          break;

        case 5:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecuteContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgExecuteContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecuteContract>, I>>(object: I): MsgExecuteContract {
    const message = createBaseMsgExecuteContract();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};
export interface MsgExecuteContractResponse {
  data: Uint8Array;
}

function createBaseMsgExecuteContractResponse(): MsgExecuteContractResponse {
  return {
    data: new Uint8Array()
  };
}

export const MsgExecuteContractResponse = {
  encode(message: MsgExecuteContractResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContractResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecuteContractResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: MsgExecuteContractResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecuteContractResponse>, I>>(object: I): MsgExecuteContractResponse {
    const message = createBaseMsgExecuteContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};
export interface MsgMigrateContract {
  sender: string;
  contract: string;
  codeId: Long;
  msg: Uint8Array;
}

function createBaseMsgMigrateContract(): MsgMigrateContract {
  return {
    sender: "",
    contract: "",
    codeId: Long.UZERO,
    msg: new Uint8Array()
  };
}

export const MsgMigrateContract = {
  encode(message: MsgMigrateContract, writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }

    if (!message.codeId.isZero()) {
      writer.uint32(24).uint64(message.codeId);
    }

    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.contract = reader.string();
          break;

        case 3:
          message.codeId = (reader.uint64() as Long);
          break;

        case 4:
          message.msg = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgMigrateContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      codeId: isSet(object.codeId) ? Long.fromString(object.codeId) : Long.UZERO,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },

  toJSON(message: MsgMigrateContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMigrateContract>, I>>(object: I): MsgMigrateContract {
    const message = createBaseMsgMigrateContract();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.msg = object.msg ?? new Uint8Array();
    return message;
  }

};
export interface MsgMigrateContractResponse {
  data: Uint8Array;
}

function createBaseMsgMigrateContractResponse(): MsgMigrateContractResponse {
  return {
    data: new Uint8Array()
  };
}

export const MsgMigrateContractResponse = {
  encode(message: MsgMigrateContractResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContractResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgMigrateContractResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: MsgMigrateContractResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMigrateContractResponse>, I>>(object: I): MsgMigrateContractResponse {
    const message = createBaseMsgMigrateContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};
export interface MsgUpdateAdmin {
  sender: string;
  newAdmin: string;
  contract: string;
}

function createBaseMsgUpdateAdmin(): MsgUpdateAdmin {
  return {
    sender: "",
    newAdmin: "",
    contract: ""
  };
}

export const MsgUpdateAdmin = {
  encode(message: MsgUpdateAdmin, writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.newAdmin !== "") {
      writer.uint32(18).string(message.newAdmin);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAdmin();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.newAdmin = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateAdmin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },

  toJSON(message: MsgUpdateAdmin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateAdmin>, I>>(object: I): MsgUpdateAdmin {
    const message = createBaseMsgUpdateAdmin();
    message.sender = object.sender ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.contract = object.contract ?? "";
    return message;
  }

};
export interface MsgUpdateAdminResponse {}

function createBaseMsgUpdateAdminResponse(): MsgUpdateAdminResponse {
  return {};
}

export const MsgUpdateAdminResponse = {
  encode(message: MsgUpdateAdminResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAdminResponse();

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

  fromJSON(object: any): MsgUpdateAdminResponse {
    return {};
  },

  toJSON(message: MsgUpdateAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateAdminResponse>, I>>(object: I): MsgUpdateAdminResponse {
    const message = createBaseMsgUpdateAdminResponse();
    return message;
  }

};
export interface MsgClearAdmin {
  sender: string;
  contract: string;
}

function createBaseMsgClearAdmin(): MsgClearAdmin {
  return {
    sender: "",
    contract: ""
  };
}

export const MsgClearAdmin = {
  encode(message: MsgClearAdmin, writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearAdmin();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgClearAdmin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },

  toJSON(message: MsgClearAdmin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClearAdmin>, I>>(object: I): MsgClearAdmin {
    const message = createBaseMsgClearAdmin();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    return message;
  }

};
export interface MsgClearAdminResponse {}

function createBaseMsgClearAdminResponse(): MsgClearAdminResponse {
  return {};
}

export const MsgClearAdminResponse = {
  encode(message: MsgClearAdminResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearAdminResponse();

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

  fromJSON(object: any): MsgClearAdminResponse {
    return {};
  },

  toJSON(message: MsgClearAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClearAdminResponse>, I>>(object: I): MsgClearAdminResponse {
    const message = createBaseMsgClearAdminResponse();
    return message;
  }

};
export interface AminoMsgStoreCode extends AminoMsg {
  type: "/cosmwasm.wasm.v1.MsgStoreCode";
  value: {
    sender: string;
    wasm_byte_code: Uint8Array;
    instantiate_permission: {
      permission: number;
      address: string;
    };
  };
}
export interface AminoMsgInstantiateContract extends AminoMsg {
  type: "/cosmwasm.wasm.v1.MsgInstantiateContract";
  value: {
    sender: string;
    admin: string;
    code_id: string;
    label: string;
    msg: Uint8Array;
    funds: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgExecuteContract extends AminoMsg {
  type: "/cosmwasm.wasm.v1.MsgExecuteContract";
  value: {
    sender: string;
    contract: string;
    msg: Uint8Array;
    funds: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgMigrateContract extends AminoMsg {
  type: "/cosmwasm.wasm.v1.MsgMigrateContract";
  value: {
    sender: string;
    contract: string;
    code_id: string;
    msg: Uint8Array;
  };
}
export interface AminoMsgUpdateAdmin extends AminoMsg {
  type: "/cosmwasm.wasm.v1.MsgUpdateAdmin";
  value: {
    sender: string;
    new_admin: string;
    contract: string;
  };
}
export interface AminoMsgClearAdmin extends AminoMsg {
  type: "/cosmwasm.wasm.v1.MsgClearAdmin";
  value: {
    sender: string;
    contract: string;
  };
}
export const AminoConverter = {
  "/cosmwasm.wasm.v1.MsgStoreCode": {
    aminoType: "/cosmwasm.wasm.v1.MsgStoreCode",
    toAmino: ({
      sender,
      wasmByteCode,
      instantiatePermission
    }: MsgStoreCode): AminoMsgStoreCode["value"] => {
      return {
        sender,
        wasm_byte_code: wasmByteCode,
        instantiate_permission: {
          permission: instantiatePermission.permission,
          address: instantiatePermission.address
        }
      };
    },
    fromAmino: ({
      sender,
      wasm_byte_code,
      instantiate_permission
    }: AminoMsgStoreCode["value"]): MsgStoreCode => {
      return {
        sender,
        wasmByteCode: wasm_byte_code,
        instantiatePermission: {
          permission: accessTypeFromJSON(instantiate_permission.permission),
          address: instantiate_permission.address
        }
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgInstantiateContract": {
    aminoType: "/cosmwasm.wasm.v1.MsgInstantiateContract",
    toAmino: ({
      sender,
      admin,
      codeId,
      label,
      msg,
      funds
    }: MsgInstantiateContract): AminoMsgInstantiateContract["value"] => {
      return {
        sender,
        admin,
        code_id: codeId.toString(),
        label,
        msg,
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      sender,
      admin,
      code_id,
      label,
      msg,
      funds
    }: AminoMsgInstantiateContract["value"]): MsgInstantiateContract => {
      return {
        sender,
        admin,
        codeId: Long.fromString(code_id),
        label,
        msg,
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgExecuteContract": {
    aminoType: "/cosmwasm.wasm.v1.MsgExecuteContract",
    toAmino: ({
      sender,
      contract,
      msg,
      funds
    }: MsgExecuteContract): AminoMsgExecuteContract["value"] => {
      return {
        sender,
        contract,
        msg,
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      sender,
      contract,
      msg,
      funds
    }: AminoMsgExecuteContract["value"]): MsgExecuteContract => {
      return {
        sender,
        contract,
        msg,
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgMigrateContract": {
    aminoType: "/cosmwasm.wasm.v1.MsgMigrateContract",
    toAmino: ({
      sender,
      contract,
      codeId,
      msg
    }: MsgMigrateContract): AminoMsgMigrateContract["value"] => {
      return {
        sender,
        contract,
        code_id: codeId.toString(),
        msg
      };
    },
    fromAmino: ({
      sender,
      contract,
      code_id,
      msg
    }: AminoMsgMigrateContract["value"]): MsgMigrateContract => {
      return {
        sender,
        contract,
        codeId: Long.fromString(code_id),
        msg
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
    aminoType: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
    toAmino: ({
      sender,
      newAdmin,
      contract
    }: MsgUpdateAdmin): AminoMsgUpdateAdmin["value"] => {
      return {
        sender,
        new_admin: newAdmin,
        contract
      };
    },
    fromAmino: ({
      sender,
      new_admin,
      contract
    }: AminoMsgUpdateAdmin["value"]): MsgUpdateAdmin => {
      return {
        sender,
        newAdmin: new_admin,
        contract
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgClearAdmin": {
    aminoType: "/cosmwasm.wasm.v1.MsgClearAdmin",
    toAmino: ({
      sender,
      contract
    }: MsgClearAdmin): AminoMsgClearAdmin["value"] => {
      return {
        sender,
        contract
      };
    },
    fromAmino: ({
      sender,
      contract
    }: AminoMsgClearAdmin["value"]): MsgClearAdmin => {
      return {
        sender,
        contract
      };
    }
  }
};
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmwasm.wasm.v1.MsgStoreCode", MsgStoreCode], ["/cosmwasm.wasm.v1.MsgInstantiateContract", MsgInstantiateContract], ["/cosmwasm.wasm.v1.MsgExecuteContract", MsgExecuteContract], ["/cosmwasm.wasm.v1.MsgMigrateContract", MsgMigrateContract], ["/cosmwasm.wasm.v1.MsgUpdateAdmin", MsgUpdateAdmin], ["/cosmwasm.wasm.v1.MsgClearAdmin", MsgClearAdmin]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    storeCode(value: MsgStoreCode) {
      return {
        type_url: "/cosmwasm.wasm.v1.MsgStoreCode",
        value: MsgStoreCode.encode(value).finish()
      };
    },

    instantiateContract(value: MsgInstantiateContract) {
      return {
        type_url: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: MsgInstantiateContract.encode(value).finish()
      };
    },

    executeContract(value: MsgExecuteContract) {
      return {
        type_url: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value: MsgExecuteContract.encode(value).finish()
      };
    },

    migrateContract(value: MsgMigrateContract) {
      return {
        type_url: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value: MsgMigrateContract.encode(value).finish()
      };
    },

    updateAdmin(value: MsgUpdateAdmin) {
      return {
        type_url: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value: MsgUpdateAdmin.encode(value).finish()
      };
    },

    clearAdmin(value: MsgClearAdmin) {
      return {
        type_url: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value: MsgClearAdmin.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value
      };
    },

    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value
      };
    },

    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value
      };
    },

    migrateContract(value: MsgMigrateContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value
      };
    },

    updateAdmin(value: MsgUpdateAdmin) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value
      };
    },

    clearAdmin(value: MsgClearAdmin) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value
      };
    }

  },
  toJSON: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value: MsgStoreCode.toJSON(value)
      };
    },

    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: MsgInstantiateContract.toJSON(value)
      };
    },

    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value: MsgExecuteContract.toJSON(value)
      };
    },

    migrateContract(value: MsgMigrateContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value: MsgMigrateContract.toJSON(value)
      };
    },

    updateAdmin(value: MsgUpdateAdmin) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value: MsgUpdateAdmin.toJSON(value)
      };
    },

    clearAdmin(value: MsgClearAdmin) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value: MsgClearAdmin.toJSON(value)
      };
    }

  },
  fromJSON: {
    storeCode(value: any) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value: MsgStoreCode.fromJSON(value)
      };
    },

    instantiateContract(value: any) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: MsgInstantiateContract.fromJSON(value)
      };
    },

    executeContract(value: any) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value: MsgExecuteContract.fromJSON(value)
      };
    },

    migrateContract(value: any) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value: MsgMigrateContract.fromJSON(value)
      };
    },

    updateAdmin(value: any) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value: MsgUpdateAdmin.fromJSON(value)
      };
    },

    clearAdmin(value: any) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value: MsgClearAdmin.fromJSON(value)
      };
    }

  },
  fromPartial: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value: MsgStoreCode.fromPartial(value)
      };
    },

    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: MsgInstantiateContract.fromPartial(value)
      };
    },

    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value: MsgExecuteContract.fromPartial(value)
      };
    },

    migrateContract(value: MsgMigrateContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value: MsgMigrateContract.fromPartial(value)
      };
    },

    updateAdmin(value: MsgUpdateAdmin) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value: MsgUpdateAdmin.fromPartial(value)
      };
    },

    clearAdmin(value: MsgClearAdmin) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value: MsgClearAdmin.fromPartial(value)
      };
    }

  }
};