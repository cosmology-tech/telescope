import { ContractInfo } from "./types";
import { StringEvent } from "../../../cosmos/base/abci/v1beta1/abci";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Exact, DeepPartial, Long } from "@osmonauts/helpers";
export interface QueryContractInfoRequest {
  address: Uint8Array;
}

function createBaseQueryContractInfoRequest(): QueryContractInfoRequest {
  return {
    address: new Uint8Array()
  };
}

export const QueryContractInfoRequest = {
  encode(message: QueryContractInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractInfoRequest {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array()
    };
  },

  toJSON(message: QueryContractInfoRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryContractInfoRequest>, I>>(object: I): QueryContractInfoRequest {
    const message = createBaseQueryContractInfoRequest();
    message.address = object.address ?? new Uint8Array();
    return message;
  }

};
export interface QueryContractInfoResponse {
  address: Uint8Array;
  ContractInfo: ContractInfo;
}

function createBaseQueryContractInfoResponse(): QueryContractInfoResponse {
  return {
    address: new Uint8Array(),
    ContractInfo: undefined
  };
}

export const QueryContractInfoResponse = {
  encode(message: QueryContractInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    if (message.ContractInfo !== undefined) {
      ContractInfo.encode(message.ContractInfo, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;

        case 2:
          message.ContractInfo = ContractInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractInfoResponse {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      ContractInfo: isSet(object.ContractInfo) ? ContractInfo.fromJSON(object.ContractInfo) : undefined
    };
  },

  toJSON(message: QueryContractInfoResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.ContractInfo !== undefined && (obj.ContractInfo = message.ContractInfo ? ContractInfo.toJSON(message.ContractInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryContractInfoResponse>, I>>(object: I): QueryContractInfoResponse {
    const message = createBaseQueryContractInfoResponse();
    message.address = object.address ?? new Uint8Array();
    message.ContractInfo = object.ContractInfo !== undefined && object.ContractInfo !== null ? ContractInfo.fromPartial(object.ContractInfo) : undefined;
    return message;
  }

};
export interface QueryContractHistoryRequest {
  address: Uint8Array;
}

function createBaseQueryContractHistoryRequest(): QueryContractHistoryRequest {
  return {
    address: new Uint8Array()
  };
}

export const QueryContractHistoryRequest = {
  encode(message: QueryContractHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHistoryRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractHistoryRequest {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array()
    };
  },

  toJSON(message: QueryContractHistoryRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryContractHistoryRequest>, I>>(object: I): QueryContractHistoryRequest {
    const message = createBaseQueryContractHistoryRequest();
    message.address = object.address ?? new Uint8Array();
    return message;
  }

};
export interface QueryContractsByCodeRequest {
  codeId: Long;
}

function createBaseQueryContractsByCodeRequest(): QueryContractsByCodeRequest {
  return {
    codeId: Long.UZERO
  };
}

export const QueryContractsByCodeRequest = {
  encode(message: QueryContractsByCodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeRequest();

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

  fromJSON(object: any): QueryContractsByCodeRequest {
    return {
      codeId: isSet(object.codeId) ? Long.fromString(object.codeId) : Long.UZERO
    };
  },

  toJSON(message: QueryContractsByCodeRequest): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryContractsByCodeRequest>, I>>(object: I): QueryContractsByCodeRequest {
    const message = createBaseQueryContractsByCodeRequest();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    return message;
  }

};
export interface ContractInfoWithAddress {
  address: Uint8Array;
  ContractInfo: ContractInfo;
}

function createBaseContractInfoWithAddress(): ContractInfoWithAddress {
  return {
    address: new Uint8Array(),
    ContractInfo: undefined
  };
}

export const ContractInfoWithAddress = {
  encode(message: ContractInfoWithAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    if (message.ContractInfo !== undefined) {
      ContractInfo.encode(message.ContractInfo, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfoWithAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractInfoWithAddress();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;

        case 2:
          message.ContractInfo = ContractInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ContractInfoWithAddress {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      ContractInfo: isSet(object.ContractInfo) ? ContractInfo.fromJSON(object.ContractInfo) : undefined
    };
  },

  toJSON(message: ContractInfoWithAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.ContractInfo !== undefined && (obj.ContractInfo = message.ContractInfo ? ContractInfo.toJSON(message.ContractInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContractInfoWithAddress>, I>>(object: I): ContractInfoWithAddress {
    const message = createBaseContractInfoWithAddress();
    message.address = object.address ?? new Uint8Array();
    message.ContractInfo = object.ContractInfo !== undefined && object.ContractInfo !== null ? ContractInfo.fromPartial(object.ContractInfo) : undefined;
    return message;
  }

};
export interface QueryContractsByCodeResponse {
  contractInfos: ContractInfoWithAddress[];
}

function createBaseQueryContractsByCodeResponse(): QueryContractsByCodeResponse {
  return {
    contractInfos: []
  };
}

export const QueryContractsByCodeResponse = {
  encode(message: QueryContractsByCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contractInfos) {
      ContractInfoWithAddress.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractInfos.push(ContractInfoWithAddress.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractsByCodeResponse {
    return {
      contractInfos: Array.isArray(object?.contractInfos) ? object.contractInfos.map((e: any) => ContractInfoWithAddress.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryContractsByCodeResponse): unknown {
    const obj: any = {};

    if (message.contractInfos) {
      obj.contractInfos = message.contractInfos.map(e => e ? ContractInfoWithAddress.toJSON(e) : undefined);
    } else {
      obj.contractInfos = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryContractsByCodeResponse>, I>>(object: I): QueryContractsByCodeResponse {
    const message = createBaseQueryContractsByCodeResponse();
    message.contractInfos = object.contractInfos?.map(e => ContractInfoWithAddress.fromPartial(e)) || [];
    return message;
  }

};
export interface QuerySmartContractStateRequest {
  address: Uint8Array;
  queryData: Uint8Array;
}

function createBaseQuerySmartContractStateRequest(): QuerySmartContractStateRequest {
  return {
    address: new Uint8Array(),
    queryData: new Uint8Array()
  };
}

export const QuerySmartContractStateRequest = {
  encode(message: QuerySmartContractStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySmartContractStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractStateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;

        case 2:
          message.queryData = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySmartContractStateRequest {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      queryData: isSet(object.queryData) ? bytesFromBase64(object.queryData) : new Uint8Array()
    };
  },

  toJSON(message: QuerySmartContractStateRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.queryData !== undefined && (obj.queryData = base64FromBytes(message.queryData !== undefined ? message.queryData : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySmartContractStateRequest>, I>>(object: I): QuerySmartContractStateRequest {
    const message = createBaseQuerySmartContractStateRequest();
    message.address = object.address ?? new Uint8Array();
    message.queryData = object.queryData ?? new Uint8Array();
    return message;
  }

};
export interface QueryContractAddressByLabelRequest {
  label: string;
}

function createBaseQueryContractAddressByLabelRequest(): QueryContractAddressByLabelRequest {
  return {
    label: ""
  };
}

export const QueryContractAddressByLabelRequest = {
  encode(message: QueryContractAddressByLabelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.label !== "") {
      writer.uint32(10).string(message.label);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractAddressByLabelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractAddressByLabelRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.label = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractAddressByLabelRequest {
    return {
      label: isSet(object.label) ? String(object.label) : ""
    };
  },

  toJSON(message: QueryContractAddressByLabelRequest): unknown {
    const obj: any = {};
    message.label !== undefined && (obj.label = message.label);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryContractAddressByLabelRequest>, I>>(object: I): QueryContractAddressByLabelRequest {
    const message = createBaseQueryContractAddressByLabelRequest();
    message.label = object.label ?? "";
    return message;
  }

};
export interface QueryContractKeyRequest {
  address: Uint8Array;
}

function createBaseQueryContractKeyRequest(): QueryContractKeyRequest {
  return {
    address: new Uint8Array()
  };
}

export const QueryContractKeyRequest = {
  encode(message: QueryContractKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractKeyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractKeyRequest {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array()
    };
  },

  toJSON(message: QueryContractKeyRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryContractKeyRequest>, I>>(object: I): QueryContractKeyRequest {
    const message = createBaseQueryContractKeyRequest();
    message.address = object.address ?? new Uint8Array();
    return message;
  }

};
export interface QueryContractHashRequest {
  address: Uint8Array;
}

function createBaseQueryContractHashRequest(): QueryContractHashRequest {
  return {
    address: new Uint8Array()
  };
}

export const QueryContractHashRequest = {
  encode(message: QueryContractHashRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHashRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractHashRequest {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array()
    };
  },

  toJSON(message: QueryContractHashRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryContractHashRequest>, I>>(object: I): QueryContractHashRequest {
    const message = createBaseQueryContractHashRequest();
    message.address = object.address ?? new Uint8Array();
    return message;
  }

};
export interface QuerySmartContractStateResponse {
  data: Uint8Array;
}

function createBaseQuerySmartContractStateResponse(): QuerySmartContractStateResponse {
  return {
    data: new Uint8Array()
  };
}

export const QuerySmartContractStateResponse = {
  encode(message: QuerySmartContractStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySmartContractStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractStateResponse();

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

  fromJSON(object: any): QuerySmartContractStateResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: QuerySmartContractStateResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySmartContractStateResponse>, I>>(object: I): QuerySmartContractStateResponse {
    const message = createBaseQuerySmartContractStateResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};
export interface QueryCodeRequest {
  codeId: Long;
}

function createBaseQueryCodeRequest(): QueryCodeRequest {
  return {
    codeId: Long.UZERO
  };
}

export const QueryCodeRequest = {
  encode(message: QueryCodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeRequest();

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

  fromJSON(object: any): QueryCodeRequest {
    return {
      codeId: isSet(object.codeId) ? Long.fromString(object.codeId) : Long.UZERO
    };
  },

  toJSON(message: QueryCodeRequest): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCodeRequest>, I>>(object: I): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    return message;
  }

};
export interface CodeInfoResponse {
  codeId: Long;
  creator: Uint8Array;
  dataHash: Uint8Array;
  source: string;
  builder: string;
}

function createBaseCodeInfoResponse(): CodeInfoResponse {
  return {
    codeId: Long.UZERO,
    creator: new Uint8Array(),
    dataHash: new Uint8Array(),
    source: "",
    builder: ""
  };
}

export const CodeInfoResponse = {
  encode(message: CodeInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    if (message.creator.length !== 0) {
      writer.uint32(18).bytes(message.creator);
    }

    if (message.dataHash.length !== 0) {
      writer.uint32(26).bytes(message.dataHash);
    }

    if (message.source !== "") {
      writer.uint32(34).string(message.source);
    }

    if (message.builder !== "") {
      writer.uint32(42).string(message.builder);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodeInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;

        case 2:
          message.creator = reader.bytes();
          break;

        case 3:
          message.dataHash = reader.bytes();
          break;

        case 4:
          message.source = reader.string();
          break;

        case 5:
          message.builder = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CodeInfoResponse {
    return {
      codeId: isSet(object.codeId) ? Long.fromString(object.codeId) : Long.UZERO,
      creator: isSet(object.creator) ? bytesFromBase64(object.creator) : new Uint8Array(),
      dataHash: isSet(object.dataHash) ? bytesFromBase64(object.dataHash) : new Uint8Array(),
      source: isSet(object.source) ? String(object.source) : "",
      builder: isSet(object.builder) ? String(object.builder) : ""
    };
  },

  toJSON(message: CodeInfoResponse): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.creator !== undefined && (obj.creator = base64FromBytes(message.creator !== undefined ? message.creator : new Uint8Array()));
    message.dataHash !== undefined && (obj.dataHash = base64FromBytes(message.dataHash !== undefined ? message.dataHash : new Uint8Array()));
    message.source !== undefined && (obj.source = message.source);
    message.builder !== undefined && (obj.builder = message.builder);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CodeInfoResponse>, I>>(object: I): CodeInfoResponse {
    const message = createBaseCodeInfoResponse();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.creator = object.creator ?? new Uint8Array();
    message.dataHash = object.dataHash ?? new Uint8Array();
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    return message;
  }

};
export interface QueryCodeResponse {
  codeInfo: CodeInfoResponse;
  data: Uint8Array;
}

function createBaseQueryCodeResponse(): QueryCodeResponse {
  return {
    codeInfo: undefined,
    data: new Uint8Array()
  };
}

export const QueryCodeResponse = {
  encode(message: QueryCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeInfo !== undefined) {
      CodeInfoResponse.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
    }

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeInfo = CodeInfoResponse.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryCodeResponse {
    return {
      codeInfo: isSet(object.codeInfo) ? CodeInfoResponse.fromJSON(object.codeInfo) : undefined,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: QueryCodeResponse): unknown {
    const obj: any = {};
    message.codeInfo !== undefined && (obj.codeInfo = message.codeInfo ? CodeInfoResponse.toJSON(message.codeInfo) : undefined);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCodeResponse>, I>>(object: I): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? CodeInfoResponse.fromPartial(object.codeInfo) : undefined;
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};
export interface QueryCodesResponse {
  codeInfos: CodeInfoResponse[];
}

function createBaseQueryCodesResponse(): QueryCodesResponse {
  return {
    codeInfos: []
  };
}

export const QueryCodesResponse = {
  encode(message: QueryCodesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.codeInfos) {
      CodeInfoResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeInfos.push(CodeInfoResponse.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCodesResponse {
    return {
      codeInfos: Array.isArray(object?.codeInfos) ? object.codeInfos.map((e: any) => CodeInfoResponse.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryCodesResponse): unknown {
    const obj: any = {};

    if (message.codeInfos) {
      obj.codeInfos = message.codeInfos.map(e => e ? CodeInfoResponse.toJSON(e) : undefined);
    } else {
      obj.codeInfos = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCodesResponse>, I>>(object: I): QueryCodesResponse {
    const message = createBaseQueryCodesResponse();
    message.codeInfos = object.codeInfos?.map(e => CodeInfoResponse.fromPartial(e)) || [];
    return message;
  }

};
export interface QueryContractAddressByLabelResponse {
  address: Uint8Array;
}

function createBaseQueryContractAddressByLabelResponse(): QueryContractAddressByLabelResponse {
  return {
    address: new Uint8Array()
  };
}

export const QueryContractAddressByLabelResponse = {
  encode(message: QueryContractAddressByLabelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractAddressByLabelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractAddressByLabelResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractAddressByLabelResponse {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array()
    };
  },

  toJSON(message: QueryContractAddressByLabelResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryContractAddressByLabelResponse>, I>>(object: I): QueryContractAddressByLabelResponse {
    const message = createBaseQueryContractAddressByLabelResponse();
    message.address = object.address ?? new Uint8Array();
    return message;
  }

};
export interface QueryContractKeyResponse {
  key: Uint8Array;
}

function createBaseQueryContractKeyResponse(): QueryContractKeyResponse {
  return {
    key: new Uint8Array()
  };
}

export const QueryContractKeyResponse = {
  encode(message: QueryContractKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractKeyResponse();

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

  fromJSON(object: any): QueryContractKeyResponse {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array()
    };
  },

  toJSON(message: QueryContractKeyResponse): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryContractKeyResponse>, I>>(object: I): QueryContractKeyResponse {
    const message = createBaseQueryContractKeyResponse();
    message.key = object.key ?? new Uint8Array();
    return message;
  }

};
export interface QueryContractHashResponse {
  codeHash: Uint8Array;
}

function createBaseQueryContractHashResponse(): QueryContractHashResponse {
  return {
    codeHash: new Uint8Array()
  };
}

export const QueryContractHashResponse = {
  encode(message: QueryContractHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeHash.length !== 0) {
      writer.uint32(10).bytes(message.codeHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHashResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeHash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractHashResponse {
    return {
      codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array()
    };
  },

  toJSON(message: QueryContractHashResponse): unknown {
    const obj: any = {};
    message.codeHash !== undefined && (obj.codeHash = base64FromBytes(message.codeHash !== undefined ? message.codeHash : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryContractHashResponse>, I>>(object: I): QueryContractHashResponse {
    const message = createBaseQueryContractHashResponse();
    message.codeHash = object.codeHash ?? new Uint8Array();
    return message;
  }

};
export interface DecryptedAnswer {
  type: string;
  input: string;
  outputData: string;
  outputDataAsString: string;
  outputLogs: StringEvent[];
  outputError: Uint8Array;
  plaintextError: string;
}

function createBaseDecryptedAnswer(): DecryptedAnswer {
  return {
    type: "",
    input: "",
    outputData: "",
    outputDataAsString: "",
    outputLogs: [],
    outputError: new Uint8Array(),
    plaintextError: ""
  };
}

export const DecryptedAnswer = {
  encode(message: DecryptedAnswer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }

    if (message.input !== "") {
      writer.uint32(18).string(message.input);
    }

    if (message.outputData !== "") {
      writer.uint32(26).string(message.outputData);
    }

    if (message.outputDataAsString !== "") {
      writer.uint32(34).string(message.outputDataAsString);
    }

    for (const v of message.outputLogs) {
      StringEvent.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (message.outputError.length !== 0) {
      writer.uint32(50).bytes(message.outputError);
    }

    if (message.plaintextError !== "") {
      writer.uint32(58).string(message.plaintextError);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DecryptedAnswer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecryptedAnswer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;

        case 2:
          message.input = reader.string();
          break;

        case 3:
          message.outputData = reader.string();
          break;

        case 4:
          message.outputDataAsString = reader.string();
          break;

        case 5:
          message.outputLogs.push(StringEvent.decode(reader, reader.uint32()));
          break;

        case 6:
          message.outputError = reader.bytes();
          break;

        case 7:
          message.plaintextError = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DecryptedAnswer {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      input: isSet(object.input) ? String(object.input) : "",
      outputData: isSet(object.outputData) ? String(object.outputData) : "",
      outputDataAsString: isSet(object.outputDataAsString) ? String(object.outputDataAsString) : "",
      outputLogs: Array.isArray(object?.outputLogs) ? object.outputLogs.map((e: any) => StringEvent.fromJSON(e)) : [],
      outputError: isSet(object.outputError) ? bytesFromBase64(object.outputError) : new Uint8Array(),
      plaintextError: isSet(object.plaintextError) ? String(object.plaintextError) : ""
    };
  },

  toJSON(message: DecryptedAnswer): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.input !== undefined && (obj.input = message.input);
    message.outputData !== undefined && (obj.outputData = message.outputData);
    message.outputDataAsString !== undefined && (obj.outputDataAsString = message.outputDataAsString);

    if (message.outputLogs) {
      obj.outputLogs = message.outputLogs.map(e => e ? StringEvent.toJSON(e) : undefined);
    } else {
      obj.outputLogs = [];
    }

    message.outputError !== undefined && (obj.outputError = base64FromBytes(message.outputError !== undefined ? message.outputError : new Uint8Array()));
    message.plaintextError !== undefined && (obj.plaintextError = message.plaintextError);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DecryptedAnswer>, I>>(object: I): DecryptedAnswer {
    const message = createBaseDecryptedAnswer();
    message.type = object.type ?? "";
    message.input = object.input ?? "";
    message.outputData = object.outputData ?? "";
    message.outputDataAsString = object.outputDataAsString ?? "";
    message.outputLogs = object.outputLogs?.map(e => StringEvent.fromPartial(e)) || [];
    message.outputError = object.outputError ?? new Uint8Array();
    message.plaintextError = object.plaintextError ?? "";
    return message;
  }

};