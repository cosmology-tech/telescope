//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Params, ValidatorSigningInfo } from "./slashing";
import * as _m0 from "protobufjs/minimal";
import { isSet, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.slashing.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
  params: Params;
}
/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoRequest {
  /** cons_address is the address to query signing info of */
  consAddress: string;
}
/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoResponse {
  /** val_signing_info is the signing info of requested val cons address */
  valSigningInfo: ValidatorSigningInfo;
}
/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosRequest {
  pagination: PageRequest;
}
/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosResponse {
  /** info is the signing info of all validators */
  info: ValidatorSigningInfo[];
  pagination: PageResponse;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.slashing.v1beta1.QueryParamsRequest",
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
      typeUrl: "/cosmos.slashing.v1beta1.QueryParamsRequest",
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
  typeUrl: "/cosmos.slashing.v1beta1.QueryParamsResponse",
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
      typeUrl: "/cosmos.slashing.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySigningInfoRequest(): QuerySigningInfoRequest {
  return {
    consAddress: ""
  };
}
export const QuerySigningInfoRequest = {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoRequest",
  encode(message: QuerySigningInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consAddress !== "") {
      writer.uint32(10).string(message.consAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySigningInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySigningInfoRequest {
    return {
      consAddress: isSet(object.consAddress) ? String(object.consAddress) : ""
    };
  },
  toJSON(message: QuerySigningInfoRequest): unknown {
    const obj: any = {};
    message.consAddress !== undefined && (obj.consAddress = message.consAddress);
    return obj;
  },
  fromPartial(object: Partial<QuerySigningInfoRequest>): QuerySigningInfoRequest {
    const message = createBaseQuerySigningInfoRequest();
    message.consAddress = object.consAddress ?? "";
    return message;
  },
  fromAmino(object: QuerySigningInfoRequestAmino): QuerySigningInfoRequest {
    return {
      consAddress: object.cons_address
    };
  },
  toAmino(message: QuerySigningInfoRequest): QuerySigningInfoRequestAmino {
    const obj: any = {};
    obj.cons_address = message.consAddress;
    return obj;
  },
  fromAminoMsg(object: QuerySigningInfoRequestAminoMsg): QuerySigningInfoRequest {
    return QuerySigningInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySigningInfoRequest): QuerySigningInfoRequestAminoMsg {
    return {
      type: "cosmos-sdk/QuerySigningInfoRequest",
      value: QuerySigningInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySigningInfoRequestProtoMsg): QuerySigningInfoRequest {
    return QuerySigningInfoRequest.decode(message.value);
  },
  toProto(message: QuerySigningInfoRequest): Uint8Array {
    return QuerySigningInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySigningInfoRequest): QuerySigningInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoRequest",
      value: QuerySigningInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySigningInfoResponse(): QuerySigningInfoResponse {
  return {
    valSigningInfo: ValidatorSigningInfo.fromPartial({})
  };
}
export const QuerySigningInfoResponse = {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoResponse",
  encode(message: QuerySigningInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valSigningInfo !== undefined) {
      ValidatorSigningInfo.encode(message.valSigningInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySigningInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valSigningInfo = ValidatorSigningInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySigningInfoResponse {
    return {
      valSigningInfo: isSet(object.valSigningInfo) ? ValidatorSigningInfo.fromJSON(object.valSigningInfo) : undefined
    };
  },
  toJSON(message: QuerySigningInfoResponse): unknown {
    const obj: any = {};
    message.valSigningInfo !== undefined && (obj.valSigningInfo = message.valSigningInfo ? ValidatorSigningInfo.toJSON(message.valSigningInfo) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySigningInfoResponse>): QuerySigningInfoResponse {
    const message = createBaseQuerySigningInfoResponse();
    message.valSigningInfo = object.valSigningInfo !== undefined && object.valSigningInfo !== null ? ValidatorSigningInfo.fromPartial(object.valSigningInfo) : undefined;
    return message;
  },
  fromAmino(object: QuerySigningInfoResponseAmino): QuerySigningInfoResponse {
    return {
      valSigningInfo: object?.val_signing_info ? ValidatorSigningInfo.fromAmino(object.val_signing_info) : undefined
    };
  },
  toAmino(message: QuerySigningInfoResponse): QuerySigningInfoResponseAmino {
    const obj: any = {};
    obj.val_signing_info = message.valSigningInfo ? ValidatorSigningInfo.toAmino(message.valSigningInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySigningInfoResponseAminoMsg): QuerySigningInfoResponse {
    return QuerySigningInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySigningInfoResponse): QuerySigningInfoResponseAminoMsg {
    return {
      type: "cosmos-sdk/QuerySigningInfoResponse",
      value: QuerySigningInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySigningInfoResponseProtoMsg): QuerySigningInfoResponse {
    return QuerySigningInfoResponse.decode(message.value);
  },
  toProto(message: QuerySigningInfoResponse): Uint8Array {
    return QuerySigningInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySigningInfoResponse): QuerySigningInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoResponse",
      value: QuerySigningInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySigningInfosRequest(): QuerySigningInfosRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QuerySigningInfosRequest = {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosRequest",
  encode(message: QuerySigningInfosRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySigningInfosRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfosRequest();
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
  fromJSON(object: any): QuerySigningInfosRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySigningInfosRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySigningInfosRequest>): QuerySigningInfosRequest {
    const message = createBaseQuerySigningInfosRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySigningInfosRequestAmino): QuerySigningInfosRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QuerySigningInfosRequest): QuerySigningInfosRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySigningInfosRequestAminoMsg): QuerySigningInfosRequest {
    return QuerySigningInfosRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySigningInfosRequest): QuerySigningInfosRequestAminoMsg {
    return {
      type: "cosmos-sdk/QuerySigningInfosRequest",
      value: QuerySigningInfosRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySigningInfosRequestProtoMsg): QuerySigningInfosRequest {
    return QuerySigningInfosRequest.decode(message.value);
  },
  toProto(message: QuerySigningInfosRequest): Uint8Array {
    return QuerySigningInfosRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySigningInfosRequest): QuerySigningInfosRequestProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosRequest",
      value: QuerySigningInfosRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySigningInfosResponse(): QuerySigningInfosResponse {
  return {
    info: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QuerySigningInfosResponse = {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosResponse",
  encode(message: QuerySigningInfosResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.info) {
      ValidatorSigningInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySigningInfosResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info.push(ValidatorSigningInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QuerySigningInfosResponse {
    return {
      info: Array.isArray(object?.info) ? object.info.map((e: any) => ValidatorSigningInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySigningInfosResponse): unknown {
    const obj: any = {};
    if (message.info) {
      obj.info = message.info.map(e => e ? ValidatorSigningInfo.toJSON(e) : undefined);
    } else {
      obj.info = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySigningInfosResponse>): QuerySigningInfosResponse {
    const message = createBaseQuerySigningInfosResponse();
    message.info = object.info?.map(e => ValidatorSigningInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySigningInfosResponseAmino): QuerySigningInfosResponse {
    return {
      info: Array.isArray(object?.info) ? object.info.map((e: any) => ValidatorSigningInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QuerySigningInfosResponse): QuerySigningInfosResponseAmino {
    const obj: any = {};
    if (message.info) {
      obj.info = message.info.map(e => e ? ValidatorSigningInfo.toAmino(e) : undefined);
    } else {
      obj.info = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySigningInfosResponseAminoMsg): QuerySigningInfosResponse {
    return QuerySigningInfosResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySigningInfosResponse): QuerySigningInfosResponseAminoMsg {
    return {
      type: "cosmos-sdk/QuerySigningInfosResponse",
      value: QuerySigningInfosResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySigningInfosResponseProtoMsg): QuerySigningInfosResponse {
    return QuerySigningInfosResponse.decode(message.value);
  },
  toProto(message: QuerySigningInfosResponse): Uint8Array {
    return QuerySigningInfosResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySigningInfosResponse): QuerySigningInfosResponseProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosResponse",
      value: QuerySigningInfosResponse.encode(message).finish()
    };
  }
};
/** Query provides defines the gRPC querier service */
export interface Query {
  /** Params queries the parameters of slashing module */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** SigningInfo queries the signing info of given cons address */
  SigningInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse>;
  /** SigningInfos queries signing info of all validators */
  SigningInfos(request?: QuerySigningInfosRequest): Promise<QuerySigningInfosResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.SigningInfo = this.SigningInfo.bind(this);
    this.SigningInfos = this.SigningInfos.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  SigningInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse> {
    const data = QuerySigningInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfo", data);
    return promise.then(data => QuerySigningInfoResponse.decode(new _m0.Reader(data)));
  }
  SigningInfos(request: QuerySigningInfosRequest = {
    pagination: undefined
  }): Promise<QuerySigningInfosResponse> {
    const data = QuerySigningInfosRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfos", data);
    return promise.then(data => QuerySigningInfosResponse.decode(new _m0.Reader(data)));
  }
}