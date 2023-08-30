//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractCodeHistoryEntry, Model, AccessConfig } from "./types";
import { Long, isSet, bytesFromBase64, base64FromBytes, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { toUtf8, fromUtf8 } from "@cosmjs/encoding";
export const protobufPackage = "cosmwasm.wasm.v1";
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequest {
  /** address is the address of the contract to query */
  address: string;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponse {
  /** address is the address of the contract */
  address: string;
  contractInfo: ContractInfo;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequest {
  /** address is the address of the contract to query */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponse {
  entries: ContractCodeHistoryEntry[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequest {
  /**
   * grpc-gateway_out does not support Go style CodID
   * pagination defines an optional pagination for the request.
   */
  codeId: Long;
  pagination: PageRequest;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponse {
  /** contracts are a set of contract addresses */
  contracts: string[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequest {
  /** address is the address of the contract */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponse {
  models: Model[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequest {
  /** address is the address of the contract */
  address: string;
  queryData: Uint8Array;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponse {
  /** Data contains the raw store data */
  data: Uint8Array;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequest {
  /** address is the address of the contract */
  address: string;
  /** QueryData contains the query data passed to the contract */
  queryData: Uint8Array;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponse {
  /** Data contains the json data returned from the smart contract */
  data: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequest {
  /** grpc-gateway_out does not support Go style CodID */
  codeId: Long;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponse {
  codeId: Long;
  creator: string;
  dataHash: Uint8Array;
  instantiatePermission: AccessConfig;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponse {
  codeInfo: CodeInfoResponse;
  data: Uint8Array;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponse {
  codeInfos: CodeInfoResponse[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponse {
  codeIds: Long[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
function createBaseQueryContractInfoRequest(): QueryContractInfoRequest {
  return {
    address: ""
  };
}
export const QueryContractInfoRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest",
  encode(message: QueryContractInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
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
          message.address = reader.string();
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
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryContractInfoRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryContractInfoRequest>): QueryContractInfoRequest {
    const message = createBaseQueryContractInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryContractInfoRequestAmino): QueryContractInfoRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryContractInfoRequest): QueryContractInfoRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryContractInfoRequestAminoMsg): QueryContractInfoRequest {
    return QueryContractInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractInfoRequest): QueryContractInfoRequestAminoMsg {
    return {
      type: "wasm/QueryContractInfoRequest",
      value: QueryContractInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryContractInfoRequestProtoMsg): QueryContractInfoRequest {
    return QueryContractInfoRequest.decode(message.value);
  },
  toProto(message: QueryContractInfoRequest): Uint8Array {
    return QueryContractInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractInfoRequest): QueryContractInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest",
      value: QueryContractInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContractInfoResponse(): QueryContractInfoResponse {
  return {
    address: "",
    contractInfo: ContractInfo.fromPartial({})
  };
}
export const QueryContractInfoResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse",
  encode(message: QueryContractInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
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
          message.address = reader.string();
          break;
        case 2:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
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
      address: isSet(object.address) ? String(object.address) : "",
      contractInfo: isSet(object.contractInfo) ? ContractInfo.fromJSON(object.contractInfo) : undefined
    };
  },
  toJSON(message: QueryContractInfoResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.contractInfo !== undefined && (obj.contractInfo = message.contractInfo ? ContractInfo.toJSON(message.contractInfo) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryContractInfoResponse>): QueryContractInfoResponse {
    const message = createBaseQueryContractInfoResponse();
    message.address = object.address ?? "";
    message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? ContractInfo.fromPartial(object.contractInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryContractInfoResponseAmino): QueryContractInfoResponse {
    return {
      address: object.address,
      contractInfo: object?.contract_info ? ContractInfo.fromAmino(object.contract_info) : undefined
    };
  },
  toAmino(message: QueryContractInfoResponse): QueryContractInfoResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.contract_info = message.contractInfo ? ContractInfo.toAmino(message.contractInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractInfoResponseAminoMsg): QueryContractInfoResponse {
    return QueryContractInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractInfoResponse): QueryContractInfoResponseAminoMsg {
    return {
      type: "wasm/QueryContractInfoResponse",
      value: QueryContractInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryContractInfoResponseProtoMsg): QueryContractInfoResponse {
    return QueryContractInfoResponse.decode(message.value);
  },
  toProto(message: QueryContractInfoResponse): Uint8Array {
    return QueryContractInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractInfoResponse): QueryContractInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse",
      value: QueryContractInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContractHistoryRequest(): QueryContractHistoryRequest {
  return {
    address: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryContractHistoryRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest",
  encode(message: QueryContractHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryContractHistoryRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryContractHistoryRequest>): QueryContractHistoryRequest {
    const message = createBaseQueryContractHistoryRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryContractHistoryRequestAmino): QueryContractHistoryRequest {
    return {
      address: object.address,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryContractHistoryRequest): QueryContractHistoryRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractHistoryRequestAminoMsg): QueryContractHistoryRequest {
    return QueryContractHistoryRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractHistoryRequest): QueryContractHistoryRequestAminoMsg {
    return {
      type: "wasm/QueryContractHistoryRequest",
      value: QueryContractHistoryRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryContractHistoryRequestProtoMsg): QueryContractHistoryRequest {
    return QueryContractHistoryRequest.decode(message.value);
  },
  toProto(message: QueryContractHistoryRequest): Uint8Array {
    return QueryContractHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractHistoryRequest): QueryContractHistoryRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest",
      value: QueryContractHistoryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContractHistoryResponse(): QueryContractHistoryResponse {
  return {
    entries: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryContractHistoryResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse",
  encode(message: QueryContractHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      ContractCodeHistoryEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(ContractCodeHistoryEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractHistoryResponse {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => ContractCodeHistoryEntry.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryContractHistoryResponse): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? ContractCodeHistoryEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryContractHistoryResponse>): QueryContractHistoryResponse {
    const message = createBaseQueryContractHistoryResponse();
    message.entries = object.entries?.map(e => ContractCodeHistoryEntry.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryContractHistoryResponseAmino): QueryContractHistoryResponse {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => ContractCodeHistoryEntry.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryContractHistoryResponse): QueryContractHistoryResponseAmino {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? ContractCodeHistoryEntry.toAmino(e) : undefined);
    } else {
      obj.entries = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractHistoryResponseAminoMsg): QueryContractHistoryResponse {
    return QueryContractHistoryResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractHistoryResponse): QueryContractHistoryResponseAminoMsg {
    return {
      type: "wasm/QueryContractHistoryResponse",
      value: QueryContractHistoryResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryContractHistoryResponseProtoMsg): QueryContractHistoryResponse {
    return QueryContractHistoryResponse.decode(message.value);
  },
  toProto(message: QueryContractHistoryResponse): Uint8Array {
    return QueryContractHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractHistoryResponse): QueryContractHistoryResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse",
      value: QueryContractHistoryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContractsByCodeRequest(): QueryContractsByCodeRequest {
  return {
    codeId: Long.UZERO,
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryContractsByCodeRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest",
  encode(message: QueryContractsByCodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryContractsByCodeRequest): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryContractsByCodeRequest>): QueryContractsByCodeRequest {
    const message = createBaseQueryContractsByCodeRequest();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryContractsByCodeRequestAmino): QueryContractsByCodeRequest {
    return {
      codeId: Long.fromString(object.code_id),
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestAmino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractsByCodeRequestAminoMsg): QueryContractsByCodeRequest {
    return QueryContractsByCodeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestAminoMsg {
    return {
      type: "wasm/QueryContractsByCodeRequest",
      value: QueryContractsByCodeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryContractsByCodeRequestProtoMsg): QueryContractsByCodeRequest {
    return QueryContractsByCodeRequest.decode(message.value);
  },
  toProto(message: QueryContractsByCodeRequest): Uint8Array {
    return QueryContractsByCodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest",
      value: QueryContractsByCodeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContractsByCodeResponse(): QueryContractsByCodeResponse {
  return {
    contracts: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryContractsByCodeResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse",
  encode(message: QueryContractsByCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contracts) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
          message.contracts.push(reader.string());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryContractsByCodeResponse): unknown {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e);
    } else {
      obj.contracts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryContractsByCodeResponse>): QueryContractsByCodeResponse {
    const message = createBaseQueryContractsByCodeResponse();
    message.contracts = object.contracts?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryContractsByCodeResponseAmino): QueryContractsByCodeResponse {
    return {
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => e) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseAmino {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e);
    } else {
      obj.contracts = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractsByCodeResponseAminoMsg): QueryContractsByCodeResponse {
    return QueryContractsByCodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseAminoMsg {
    return {
      type: "wasm/QueryContractsByCodeResponse",
      value: QueryContractsByCodeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryContractsByCodeResponseProtoMsg): QueryContractsByCodeResponse {
    return QueryContractsByCodeResponse.decode(message.value);
  },
  toProto(message: QueryContractsByCodeResponse): Uint8Array {
    return QueryContractsByCodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse",
      value: QueryContractsByCodeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllContractStateRequest(): QueryAllContractStateRequest {
  return {
    address: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllContractStateRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest",
  encode(message: QueryAllContractStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllContractStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllContractStateRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllContractStateRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllContractStateRequest>): QueryAllContractStateRequest {
    const message = createBaseQueryAllContractStateRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllContractStateRequestAmino): QueryAllContractStateRequest {
    return {
      address: object.address,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllContractStateRequest): QueryAllContractStateRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllContractStateRequestAminoMsg): QueryAllContractStateRequest {
    return QueryAllContractStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllContractStateRequest): QueryAllContractStateRequestAminoMsg {
    return {
      type: "wasm/QueryAllContractStateRequest",
      value: QueryAllContractStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllContractStateRequestProtoMsg): QueryAllContractStateRequest {
    return QueryAllContractStateRequest.decode(message.value);
  },
  toProto(message: QueryAllContractStateRequest): Uint8Array {
    return QueryAllContractStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllContractStateRequest): QueryAllContractStateRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest",
      value: QueryAllContractStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllContractStateResponse(): QueryAllContractStateResponse {
  return {
    models: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllContractStateResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse",
  encode(message: QueryAllContractStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.models) {
      Model.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllContractStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.models.push(Model.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllContractStateResponse {
    return {
      models: Array.isArray(object?.models) ? object.models.map((e: any) => Model.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllContractStateResponse): unknown {
    const obj: any = {};
    if (message.models) {
      obj.models = message.models.map(e => e ? Model.toJSON(e) : undefined);
    } else {
      obj.models = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllContractStateResponse>): QueryAllContractStateResponse {
    const message = createBaseQueryAllContractStateResponse();
    message.models = object.models?.map(e => Model.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllContractStateResponseAmino): QueryAllContractStateResponse {
    return {
      models: Array.isArray(object?.models) ? object.models.map((e: any) => Model.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllContractStateResponse): QueryAllContractStateResponseAmino {
    const obj: any = {};
    if (message.models) {
      obj.models = message.models.map(e => e ? Model.toAmino(e) : undefined);
    } else {
      obj.models = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllContractStateResponseAminoMsg): QueryAllContractStateResponse {
    return QueryAllContractStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllContractStateResponse): QueryAllContractStateResponseAminoMsg {
    return {
      type: "wasm/QueryAllContractStateResponse",
      value: QueryAllContractStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllContractStateResponseProtoMsg): QueryAllContractStateResponse {
    return QueryAllContractStateResponse.decode(message.value);
  },
  toProto(message: QueryAllContractStateResponse): Uint8Array {
    return QueryAllContractStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllContractStateResponse): QueryAllContractStateResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse",
      value: QueryAllContractStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRawContractStateRequest(): QueryRawContractStateRequest {
  return {
    address: "",
    queryData: new Uint8Array()
  };
}
export const QueryRawContractStateRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest",
  encode(message: QueryRawContractStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawContractStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromJSON(object: any): QueryRawContractStateRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      queryData: isSet(object.queryData) ? bytesFromBase64(object.queryData) : new Uint8Array()
    };
  },
  toJSON(message: QueryRawContractStateRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.queryData !== undefined && (obj.queryData = base64FromBytes(message.queryData !== undefined ? message.queryData : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<QueryRawContractStateRequest>): QueryRawContractStateRequest {
    const message = createBaseQueryRawContractStateRequest();
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryRawContractStateRequestAmino): QueryRawContractStateRequest {
    return {
      address: object.address,
      queryData: object.query_data
    };
  },
  toAmino(message: QueryRawContractStateRequest): QueryRawContractStateRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.query_data = message.queryData;
    return obj;
  },
  fromAminoMsg(object: QueryRawContractStateRequestAminoMsg): QueryRawContractStateRequest {
    return QueryRawContractStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRawContractStateRequest): QueryRawContractStateRequestAminoMsg {
    return {
      type: "wasm/QueryRawContractStateRequest",
      value: QueryRawContractStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryRawContractStateRequestProtoMsg): QueryRawContractStateRequest {
    return QueryRawContractStateRequest.decode(message.value);
  },
  toProto(message: QueryRawContractStateRequest): Uint8Array {
    return QueryRawContractStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRawContractStateRequest): QueryRawContractStateRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest",
      value: QueryRawContractStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRawContractStateResponse(): QueryRawContractStateResponse {
  return {
    data: new Uint8Array()
  };
}
export const QueryRawContractStateResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse",
  encode(message: QueryRawContractStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawContractStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateResponse();
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
  fromJSON(object: any): QueryRawContractStateResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: QueryRawContractStateResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<QueryRawContractStateResponse>): QueryRawContractStateResponse {
    const message = createBaseQueryRawContractStateResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryRawContractStateResponseAmino): QueryRawContractStateResponse {
    return {
      data: object.data
    };
  },
  toAmino(message: QueryRawContractStateResponse): QueryRawContractStateResponseAmino {
    const obj: any = {};
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: QueryRawContractStateResponseAminoMsg): QueryRawContractStateResponse {
    return QueryRawContractStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRawContractStateResponse): QueryRawContractStateResponseAminoMsg {
    return {
      type: "wasm/QueryRawContractStateResponse",
      value: QueryRawContractStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryRawContractStateResponseProtoMsg): QueryRawContractStateResponse {
    return QueryRawContractStateResponse.decode(message.value);
  },
  toProto(message: QueryRawContractStateResponse): Uint8Array {
    return QueryRawContractStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRawContractStateResponse): QueryRawContractStateResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse",
      value: QueryRawContractStateResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySmartContractStateRequest(): QuerySmartContractStateRequest {
  return {
    address: "",
    queryData: new Uint8Array()
  };
}
export const QuerySmartContractStateRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest",
  encode(message: QuerySmartContractStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
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
          message.address = reader.string();
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
      address: isSet(object.address) ? String(object.address) : "",
      queryData: isSet(object.queryData) ? bytesFromBase64(object.queryData) : new Uint8Array()
    };
  },
  toJSON(message: QuerySmartContractStateRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.queryData !== undefined && (obj.queryData = base64FromBytes(message.queryData !== undefined ? message.queryData : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<QuerySmartContractStateRequest>): QuerySmartContractStateRequest {
    const message = createBaseQuerySmartContractStateRequest();
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QuerySmartContractStateRequestAmino): QuerySmartContractStateRequest {
    return {
      address: object.address,
      queryData: toUtf8(JSON.stringify(object.query_data))
    };
  },
  toAmino(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.query_data = message.queryData ? JSON.parse(fromUtf8(message.queryData)) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySmartContractStateRequestAminoMsg): QuerySmartContractStateRequest {
    return QuerySmartContractStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestAminoMsg {
    return {
      type: "wasm/QuerySmartContractStateRequest",
      value: QuerySmartContractStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySmartContractStateRequestProtoMsg): QuerySmartContractStateRequest {
    return QuerySmartContractStateRequest.decode(message.value);
  },
  toProto(message: QuerySmartContractStateRequest): Uint8Array {
    return QuerySmartContractStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest",
      value: QuerySmartContractStateRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySmartContractStateResponse(): QuerySmartContractStateResponse {
  return {
    data: new Uint8Array()
  };
}
export const QuerySmartContractStateResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse",
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
  fromPartial(object: Partial<QuerySmartContractStateResponse>): QuerySmartContractStateResponse {
    const message = createBaseQuerySmartContractStateResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QuerySmartContractStateResponseAmino): QuerySmartContractStateResponse {
    return {
      data: toUtf8(JSON.stringify(object.data))
    };
  },
  toAmino(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseAmino {
    const obj: any = {};
    obj.data = message.data ? JSON.parse(fromUtf8(message.data)) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySmartContractStateResponseAminoMsg): QuerySmartContractStateResponse {
    return QuerySmartContractStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseAminoMsg {
    return {
      type: "wasm/QuerySmartContractStateResponse",
      value: QuerySmartContractStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySmartContractStateResponseProtoMsg): QuerySmartContractStateResponse {
    return QuerySmartContractStateResponse.decode(message.value);
  },
  toProto(message: QuerySmartContractStateResponse): Uint8Array {
    return QuerySmartContractStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse",
      value: QuerySmartContractStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCodeRequest(): QueryCodeRequest {
  return {
    codeId: Long.UZERO
  };
}
export const QueryCodeRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest",
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
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO
    };
  },
  toJSON(message: QueryCodeRequest): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryCodeRequest>): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryCodeRequestAmino): QueryCodeRequest {
    return {
      codeId: Long.fromString(object.code_id)
    };
  },
  toAmino(message: QueryCodeRequest): QueryCodeRequestAmino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCodeRequestAminoMsg): QueryCodeRequest {
    return QueryCodeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCodeRequest): QueryCodeRequestAminoMsg {
    return {
      type: "wasm/QueryCodeRequest",
      value: QueryCodeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCodeRequestProtoMsg): QueryCodeRequest {
    return QueryCodeRequest.decode(message.value);
  },
  toProto(message: QueryCodeRequest): Uint8Array {
    return QueryCodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeRequest): QueryCodeRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest",
      value: QueryCodeRequest.encode(message).finish()
    };
  }
};
function createBaseCodeInfoResponse(): CodeInfoResponse {
  return {
    codeId: Long.UZERO,
    creator: "",
    dataHash: new Uint8Array(),
    instantiatePermission: AccessConfig.fromPartial({})
  };
}
export const CodeInfoResponse = {
  typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse",
  encode(message: CodeInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.dataHash.length !== 0) {
      writer.uint32(26).bytes(message.dataHash);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(50).fork()).ldelim();
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
          message.creator = reader.string();
          break;
        case 3:
          message.dataHash = reader.bytes();
          break;
        case 6:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
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
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      creator: isSet(object.creator) ? String(object.creator) : "",
      dataHash: isSet(object.dataHash) ? bytesFromBase64(object.dataHash) : new Uint8Array(),
      instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : undefined
    };
  },
  toJSON(message: CodeInfoResponse): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    message.dataHash !== undefined && (obj.dataHash = base64FromBytes(message.dataHash !== undefined ? message.dataHash : new Uint8Array()));
    message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission ? AccessConfig.toJSON(message.instantiatePermission) : undefined);
    return obj;
  },
  fromPartial(object: Partial<CodeInfoResponse>): CodeInfoResponse {
    const message = createBaseCodeInfoResponse();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.creator = object.creator ?? "";
    message.dataHash = object.dataHash ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    return message;
  },
  fromAmino(object: CodeInfoResponseAmino): CodeInfoResponse {
    return {
      codeId: Long.fromString(object.code_id),
      creator: object.creator,
      dataHash: object.data_hash,
      instantiatePermission: object?.instantiate_permission ? AccessConfig.fromAmino(object.instantiate_permission) : undefined
    };
  },
  toAmino(message: CodeInfoResponse): CodeInfoResponseAmino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.creator = message.creator;
    obj.data_hash = message.dataHash;
    obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission) : undefined;
    return obj;
  },
  fromAminoMsg(object: CodeInfoResponseAminoMsg): CodeInfoResponse {
    return CodeInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: CodeInfoResponse): CodeInfoResponseAminoMsg {
    return {
      type: "wasm/CodeInfoResponse",
      value: CodeInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: CodeInfoResponseProtoMsg): CodeInfoResponse {
    return CodeInfoResponse.decode(message.value);
  },
  toProto(message: CodeInfoResponse): Uint8Array {
    return CodeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: CodeInfoResponse): CodeInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse",
      value: CodeInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCodeResponse(): QueryCodeResponse {
  return {
    codeInfo: CodeInfoResponse.fromPartial({}),
    data: new Uint8Array()
  };
}
export const QueryCodeResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse",
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
  fromPartial(object: Partial<QueryCodeResponse>): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? CodeInfoResponse.fromPartial(object.codeInfo) : undefined;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryCodeResponseAmino): QueryCodeResponse {
    return {
      codeInfo: object?.code_info ? CodeInfoResponse.fromAmino(object.code_info) : undefined,
      data: object.data
    };
  },
  toAmino(message: QueryCodeResponse): QueryCodeResponseAmino {
    const obj: any = {};
    obj.code_info = message.codeInfo ? CodeInfoResponse.toAmino(message.codeInfo) : undefined;
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: QueryCodeResponseAminoMsg): QueryCodeResponse {
    return QueryCodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCodeResponse): QueryCodeResponseAminoMsg {
    return {
      type: "wasm/QueryCodeResponse",
      value: QueryCodeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCodeResponseProtoMsg): QueryCodeResponse {
    return QueryCodeResponse.decode(message.value);
  },
  toProto(message: QueryCodeResponse): Uint8Array {
    return QueryCodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeResponse): QueryCodeResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse",
      value: QueryCodeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCodesRequest(): QueryCodesRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryCodesRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest",
  encode(message: QueryCodesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCodesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryCodesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryCodesRequest>): QueryCodesRequest {
    const message = createBaseQueryCodesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCodesRequestAmino): QueryCodesRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryCodesRequest): QueryCodesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCodesRequestAminoMsg): QueryCodesRequest {
    return QueryCodesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCodesRequest): QueryCodesRequestAminoMsg {
    return {
      type: "wasm/QueryCodesRequest",
      value: QueryCodesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCodesRequestProtoMsg): QueryCodesRequest {
    return QueryCodesRequest.decode(message.value);
  },
  toProto(message: QueryCodesRequest): Uint8Array {
    return QueryCodesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCodesRequest): QueryCodesRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest",
      value: QueryCodesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCodesResponse(): QueryCodesResponse {
  return {
    codeInfos: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryCodesResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse",
  encode(message: QueryCodesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.codeInfos) {
      CodeInfoResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
      codeInfos: Array.isArray(object?.codeInfos) ? object.codeInfos.map((e: any) => CodeInfoResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryCodesResponse): unknown {
    const obj: any = {};
    if (message.codeInfos) {
      obj.codeInfos = message.codeInfos.map(e => e ? CodeInfoResponse.toJSON(e) : undefined);
    } else {
      obj.codeInfos = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryCodesResponse>): QueryCodesResponse {
    const message = createBaseQueryCodesResponse();
    message.codeInfos = object.codeInfos?.map(e => CodeInfoResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCodesResponseAmino): QueryCodesResponse {
    return {
      codeInfos: Array.isArray(object?.code_infos) ? object.code_infos.map((e: any) => CodeInfoResponse.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryCodesResponse): QueryCodesResponseAmino {
    const obj: any = {};
    if (message.codeInfos) {
      obj.code_infos = message.codeInfos.map(e => e ? CodeInfoResponse.toAmino(e) : undefined);
    } else {
      obj.code_infos = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCodesResponseAminoMsg): QueryCodesResponse {
    return QueryCodesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCodesResponse): QueryCodesResponseAminoMsg {
    return {
      type: "wasm/QueryCodesResponse",
      value: QueryCodesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCodesResponseProtoMsg): QueryCodesResponse {
    return QueryCodesResponse.decode(message.value);
  },
  toProto(message: QueryCodesResponse): Uint8Array {
    return QueryCodesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCodesResponse): QueryCodesResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse",
      value: QueryCodesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPinnedCodesRequest(): QueryPinnedCodesRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryPinnedCodesRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest",
  encode(message: QueryPinnedCodesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPinnedCodesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedCodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPinnedCodesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPinnedCodesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPinnedCodesRequest>): QueryPinnedCodesRequest {
    const message = createBaseQueryPinnedCodesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPinnedCodesRequestAmino): QueryPinnedCodesRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPinnedCodesRequestAminoMsg): QueryPinnedCodesRequest {
    return QueryPinnedCodesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestAminoMsg {
    return {
      type: "wasm/QueryPinnedCodesRequest",
      value: QueryPinnedCodesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPinnedCodesRequestProtoMsg): QueryPinnedCodesRequest {
    return QueryPinnedCodesRequest.decode(message.value);
  },
  toProto(message: QueryPinnedCodesRequest): Uint8Array {
    return QueryPinnedCodesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest",
      value: QueryPinnedCodesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPinnedCodesResponse(): QueryPinnedCodesResponse {
  return {
    codeIds: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryPinnedCodesResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse",
  encode(message: QueryPinnedCodesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPinnedCodesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedCodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push((reader.uint64() as Long));
            }
          } else {
            message.codeIds.push((reader.uint64() as Long));
          }
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPinnedCodesResponse {
    return {
      codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e: any) => Long.fromValue(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPinnedCodesResponse): unknown {
    const obj: any = {};
    if (message.codeIds) {
      obj.codeIds = message.codeIds.map(e => (e || Long.UZERO).toString());
    } else {
      obj.codeIds = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPinnedCodesResponse>): QueryPinnedCodesResponse {
    const message = createBaseQueryPinnedCodesResponse();
    message.codeIds = object.codeIds?.map(e => Long.fromValue(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPinnedCodesResponseAmino): QueryPinnedCodesResponse {
    return {
      codeIds: Array.isArray(object?.code_ids) ? object.code_ids.map((e: any) => e) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseAmino {
    const obj: any = {};
    if (message.codeIds) {
      obj.code_ids = message.codeIds.map(e => e);
    } else {
      obj.code_ids = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPinnedCodesResponseAminoMsg): QueryPinnedCodesResponse {
    return QueryPinnedCodesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseAminoMsg {
    return {
      type: "wasm/QueryPinnedCodesResponse",
      value: QueryPinnedCodesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPinnedCodesResponseProtoMsg): QueryPinnedCodesResponse {
    return QueryPinnedCodesResponse.decode(message.value);
  },
  toProto(message: QueryPinnedCodesResponse): Uint8Array {
    return QueryPinnedCodesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse",
      value: QueryPinnedCodesResponse.encode(message).finish()
    };
  }
};
/** Query provides defines the gRPC querier service */
export interface Query {
  /** ContractInfo gets the contract meta data */
  ContractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
  /** ContractHistory gets the contract code history */
  ContractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse>;
  /** ContractsByCode lists all smart contracts for a code id */
  ContractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse>;
  /** AllContractState gets all raw store data for a single contract */
  AllContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse>;
  /** RawContractState gets single key from the raw store data of a contract */
  RawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse>;
  /** SmartContractState get smart query result from the contract */
  SmartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse>;
  /** Code gets the binary code and metadata for a singe wasm code */
  Code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
  /** Codes gets the metadata for all stored wasm codes */
  Codes(request?: QueryCodesRequest): Promise<QueryCodesResponse>;
  /** PinnedCodes gets the pinned code ids */
  PinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ContractInfo = this.ContractInfo.bind(this);
    this.ContractHistory = this.ContractHistory.bind(this);
    this.ContractsByCode = this.ContractsByCode.bind(this);
    this.AllContractState = this.AllContractState.bind(this);
    this.RawContractState = this.RawContractState.bind(this);
    this.SmartContractState = this.SmartContractState.bind(this);
    this.Code = this.Code.bind(this);
    this.Codes = this.Codes.bind(this);
    this.PinnedCodes = this.PinnedCodes.bind(this);
  }
  ContractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse> {
    const data = QueryContractInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractInfo", data);
    return promise.then(data => QueryContractInfoResponse.decode(new _m0.Reader(data)));
  }
  ContractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse> {
    const data = QueryContractHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractHistory", data);
    return promise.then(data => QueryContractHistoryResponse.decode(new _m0.Reader(data)));
  }
  ContractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse> {
    const data = QueryContractsByCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCode", data);
    return promise.then(data => QueryContractsByCodeResponse.decode(new _m0.Reader(data)));
  }
  AllContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse> {
    const data = QueryAllContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "AllContractState", data);
    return promise.then(data => QueryAllContractStateResponse.decode(new _m0.Reader(data)));
  }
  RawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse> {
    const data = QueryRawContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "RawContractState", data);
    return promise.then(data => QueryRawContractStateResponse.decode(new _m0.Reader(data)));
  }
  SmartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse> {
    const data = QuerySmartContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "SmartContractState", data);
    return promise.then(data => QuerySmartContractStateResponse.decode(new _m0.Reader(data)));
  }
  Code(request: QueryCodeRequest): Promise<QueryCodeResponse> {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Code", data);
    return promise.then(data => QueryCodeResponse.decode(new _m0.Reader(data)));
  }
  Codes(request: QueryCodesRequest = {
    pagination: undefined
  }): Promise<QueryCodesResponse> {
    const data = QueryCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Codes", data);
    return promise.then(data => QueryCodesResponse.decode(new _m0.Reader(data)));
  }
  PinnedCodes(request: QueryPinnedCodesRequest = {
    pagination: undefined
  }): Promise<QueryPinnedCodesResponse> {
    const data = QueryPinnedCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "PinnedCodes", data);
    return promise.then(data => QueryPinnedCodesResponse.decode(new _m0.Reader(data)));
  }
}