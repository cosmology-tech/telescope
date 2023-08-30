//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { DenomTrace, Params } from "./transfer";
import * as _m0 from "protobufjs/minimal";
import { isSet, Rpc } from "../../../../helpers";
export const protobufPackage = "ibc.applications.transfer.v1";
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequest {
  /** hash (in hex format) of the denomination trace information. */
  hash: string;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface QueryDenomTraceResponse {
  /** denom_trace returns the requested denomination trace information. */
  denomTrace: DenomTrace;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */
export interface QueryDenomTracesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface QueryDenomTracesResponse {
  /** denom_traces returns all denominations trace information. */
  denomTraces: DenomTrace[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
/**
 * QueryDenomHashRequest is the request type for the Query/DenomHash RPC
 * method
 */
export interface QueryDenomHashRequest {
  /** The denomination trace ([port_id]/[channel_id])+/[denom] */
  trace: string;
}
/**
 * QueryDenomHashResponse is the response type for the Query/DenomHash RPC
 * method.
 */
export interface QueryDenomHashResponse {
  /** hash (in hex format) of the denomination trace information. */
  hash: string;
}
function createBaseQueryDenomTraceRequest(): QueryDenomTraceRequest {
  return {
    hash: ""
  };
}
export const QueryDenomTraceRequest = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest",
  encode(message: QueryDenomTraceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTraceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTraceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomTraceRequest {
    return {
      hash: isSet(object.hash) ? String(object.hash) : ""
    };
  },
  toJSON(message: QueryDenomTraceRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },
  fromPartial(object: Partial<QueryDenomTraceRequest>): QueryDenomTraceRequest {
    const message = createBaseQueryDenomTraceRequest();
    message.hash = object.hash ?? "";
    return message;
  },
  fromAmino(object: QueryDenomTraceRequestAmino): QueryDenomTraceRequest {
    return {
      hash: object.hash
    };
  },
  toAmino(message: QueryDenomTraceRequest): QueryDenomTraceRequestAmino {
    const obj: any = {};
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg(object: QueryDenomTraceRequestAminoMsg): QueryDenomTraceRequest {
    return QueryDenomTraceRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomTraceRequest): QueryDenomTraceRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomTraceRequest",
      value: QueryDenomTraceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomTraceRequestProtoMsg): QueryDenomTraceRequest {
    return QueryDenomTraceRequest.decode(message.value);
  },
  toProto(message: QueryDenomTraceRequest): Uint8Array {
    return QueryDenomTraceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomTraceRequest): QueryDenomTraceRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest",
      value: QueryDenomTraceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomTraceResponse(): QueryDenomTraceResponse {
  return {
    denomTrace: DenomTrace.fromPartial({})
  };
}
export const QueryDenomTraceResponse = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse",
  encode(message: QueryDenomTraceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomTrace !== undefined) {
      DenomTrace.encode(message.denomTrace, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTraceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTraceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomTrace = DenomTrace.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomTraceResponse {
    return {
      denomTrace: isSet(object.denomTrace) ? DenomTrace.fromJSON(object.denomTrace) : undefined
    };
  },
  toJSON(message: QueryDenomTraceResponse): unknown {
    const obj: any = {};
    message.denomTrace !== undefined && (obj.denomTrace = message.denomTrace ? DenomTrace.toJSON(message.denomTrace) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDenomTraceResponse>): QueryDenomTraceResponse {
    const message = createBaseQueryDenomTraceResponse();
    message.denomTrace = object.denomTrace !== undefined && object.denomTrace !== null ? DenomTrace.fromPartial(object.denomTrace) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomTraceResponseAmino): QueryDenomTraceResponse {
    return {
      denomTrace: object?.denom_trace ? DenomTrace.fromAmino(object.denom_trace) : undefined
    };
  },
  toAmino(message: QueryDenomTraceResponse): QueryDenomTraceResponseAmino {
    const obj: any = {};
    obj.denom_trace = message.denomTrace ? DenomTrace.toAmino(message.denomTrace) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomTraceResponseAminoMsg): QueryDenomTraceResponse {
    return QueryDenomTraceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomTraceResponse): QueryDenomTraceResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomTraceResponse",
      value: QueryDenomTraceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomTraceResponseProtoMsg): QueryDenomTraceResponse {
    return QueryDenomTraceResponse.decode(message.value);
  },
  toProto(message: QueryDenomTraceResponse): Uint8Array {
    return QueryDenomTraceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomTraceResponse): QueryDenomTraceResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse",
      value: QueryDenomTraceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomTracesRequest(): QueryDenomTracesRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDenomTracesRequest = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest",
  encode(message: QueryDenomTracesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTracesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTracesRequest();
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
  fromJSON(object: any): QueryDenomTracesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDenomTracesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDenomTracesRequest>): QueryDenomTracesRequest {
    const message = createBaseQueryDenomTracesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomTracesRequestAmino): QueryDenomTracesRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDenomTracesRequest): QueryDenomTracesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomTracesRequestAminoMsg): QueryDenomTracesRequest {
    return QueryDenomTracesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomTracesRequest): QueryDenomTracesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomTracesRequest",
      value: QueryDenomTracesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomTracesRequestProtoMsg): QueryDenomTracesRequest {
    return QueryDenomTracesRequest.decode(message.value);
  },
  toProto(message: QueryDenomTracesRequest): Uint8Array {
    return QueryDenomTracesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomTracesRequest): QueryDenomTracesRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest",
      value: QueryDenomTracesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomTracesResponse(): QueryDenomTracesResponse {
  return {
    denomTraces: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryDenomTracesResponse = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse",
  encode(message: QueryDenomTracesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denomTraces) {
      DenomTrace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTracesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTracesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomTraces.push(DenomTrace.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryDenomTracesResponse {
    return {
      denomTraces: Array.isArray(object?.denomTraces) ? object.denomTraces.map((e: any) => DenomTrace.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDenomTracesResponse): unknown {
    const obj: any = {};
    if (message.denomTraces) {
      obj.denomTraces = message.denomTraces.map(e => e ? DenomTrace.toJSON(e) : undefined);
    } else {
      obj.denomTraces = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDenomTracesResponse>): QueryDenomTracesResponse {
    const message = createBaseQueryDenomTracesResponse();
    message.denomTraces = object.denomTraces?.map(e => DenomTrace.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomTracesResponseAmino): QueryDenomTracesResponse {
    return {
      denomTraces: Array.isArray(object?.denom_traces) ? object.denom_traces.map((e: any) => DenomTrace.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDenomTracesResponse): QueryDenomTracesResponseAmino {
    const obj: any = {};
    if (message.denomTraces) {
      obj.denom_traces = message.denomTraces.map(e => e ? DenomTrace.toAmino(e) : undefined);
    } else {
      obj.denom_traces = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomTracesResponseAminoMsg): QueryDenomTracesResponse {
    return QueryDenomTracesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomTracesResponse): QueryDenomTracesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomTracesResponse",
      value: QueryDenomTracesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomTracesResponseProtoMsg): QueryDenomTracesResponse {
    return QueryDenomTracesResponse.decode(message.value);
  },
  toProto(message: QueryDenomTracesResponse): Uint8Array {
    return QueryDenomTracesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomTracesResponse): QueryDenomTracesResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse",
      value: QueryDenomTracesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomHashRequest(): QueryDenomHashRequest {
  return {
    trace: ""
  };
}
export const QueryDenomHashRequest = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashRequest",
  encode(message: QueryDenomHashRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trace !== "") {
      writer.uint32(10).string(message.trace);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomHashRequest {
    return {
      trace: isSet(object.trace) ? String(object.trace) : ""
    };
  },
  toJSON(message: QueryDenomHashRequest): unknown {
    const obj: any = {};
    message.trace !== undefined && (obj.trace = message.trace);
    return obj;
  },
  fromPartial(object: Partial<QueryDenomHashRequest>): QueryDenomHashRequest {
    const message = createBaseQueryDenomHashRequest();
    message.trace = object.trace ?? "";
    return message;
  },
  fromAmino(object: QueryDenomHashRequestAmino): QueryDenomHashRequest {
    return {
      trace: object.trace
    };
  },
  toAmino(message: QueryDenomHashRequest): QueryDenomHashRequestAmino {
    const obj: any = {};
    obj.trace = message.trace;
    return obj;
  },
  fromAminoMsg(object: QueryDenomHashRequestAminoMsg): QueryDenomHashRequest {
    return QueryDenomHashRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomHashRequest): QueryDenomHashRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomHashRequest",
      value: QueryDenomHashRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomHashRequestProtoMsg): QueryDenomHashRequest {
    return QueryDenomHashRequest.decode(message.value);
  },
  toProto(message: QueryDenomHashRequest): Uint8Array {
    return QueryDenomHashRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomHashRequest): QueryDenomHashRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashRequest",
      value: QueryDenomHashRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomHashResponse(): QueryDenomHashResponse {
  return {
    hash: ""
  };
}
export const QueryDenomHashResponse = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashResponse",
  encode(message: QueryDenomHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomHashResponse {
    return {
      hash: isSet(object.hash) ? String(object.hash) : ""
    };
  },
  toJSON(message: QueryDenomHashResponse): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },
  fromPartial(object: Partial<QueryDenomHashResponse>): QueryDenomHashResponse {
    const message = createBaseQueryDenomHashResponse();
    message.hash = object.hash ?? "";
    return message;
  },
  fromAmino(object: QueryDenomHashResponseAmino): QueryDenomHashResponse {
    return {
      hash: object.hash
    };
  },
  toAmino(message: QueryDenomHashResponse): QueryDenomHashResponseAmino {
    const obj: any = {};
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg(object: QueryDenomHashResponseAminoMsg): QueryDenomHashResponse {
    return QueryDenomHashResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomHashResponse): QueryDenomHashResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomHashResponse",
      value: QueryDenomHashResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomHashResponseProtoMsg): QueryDenomHashResponse {
    return QueryDenomHashResponse.decode(message.value);
  },
  toProto(message: QueryDenomHashResponse): Uint8Array {
    return QueryDenomHashResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomHashResponse): QueryDenomHashResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashResponse",
      value: QueryDenomHashResponse.encode(message).finish()
    };
  }
};
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** DenomTrace queries a denomination trace information. */
  DenomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
  /** DenomTraces queries all denomination traces. */
  DenomTraces(request?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
  /** Params queries all parameters of the ibc-transfer module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** DenomHash queries a denomination hash information. */
  DenomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.DenomTrace = this.DenomTrace.bind(this);
    this.DenomTraces = this.DenomTraces.bind(this);
    this.Params = this.Params.bind(this);
    this.DenomHash = this.DenomHash.bind(this);
  }
  DenomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse> {
    const data = QueryDenomTraceRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTrace", data);
    return promise.then(data => QueryDenomTraceResponse.decode(new _m0.Reader(data)));
  }
  DenomTraces(request: QueryDenomTracesRequest = {
    pagination: undefined
  }): Promise<QueryDenomTracesResponse> {
    const data = QueryDenomTracesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTraces", data);
    return promise.then(data => QueryDenomTracesResponse.decode(new _m0.Reader(data)));
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  DenomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse> {
    const data = QueryDenomHashRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomHash", data);
    return promise.then(data => QueryDenomHashResponse.decode(new _m0.Reader(data)));
  }
}