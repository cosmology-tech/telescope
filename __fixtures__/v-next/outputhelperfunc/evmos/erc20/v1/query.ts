import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair, TokenPairAmino, TokenPairSDKType } from "./erc20";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "evmos.erc20.v1";
/**
 * QueryTokenPairsRequest is the request type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryTokenPairsRequestProtoMsg {
  typeUrl: "/evmos.erc20.v1.QueryTokenPairsRequest";
  value: Uint8Array;
}
/**
 * QueryTokenPairsRequest is the request type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryTokenPairsRequestAminoMsg {
  type: "/evmos.erc20.v1.QueryTokenPairsRequest";
  value: QueryTokenPairsRequestAmino;
}
/**
 * QueryTokenPairsRequest is the request type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsResponse {
  tokenPairs: TokenPair[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryTokenPairsResponseProtoMsg {
  typeUrl: "/evmos.erc20.v1.QueryTokenPairsResponse";
  value: Uint8Array;
}
/**
 * QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsResponseAmino {
  token_pairs?: TokenPairAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryTokenPairsResponseAminoMsg {
  type: "/evmos.erc20.v1.QueryTokenPairsResponse";
  value: QueryTokenPairsResponseAmino;
}
/**
 * QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsResponseSDKType {
  token_pairs: TokenPairSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryTokenPairRequest is the request type for the Query/TokenPair RPC method. */
export interface QueryTokenPairRequest {
  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   * Cosmos base denomination
   */
  token: string;
}
export interface QueryTokenPairRequestProtoMsg {
  typeUrl: "/evmos.erc20.v1.QueryTokenPairRequest";
  value: Uint8Array;
}
/** QueryTokenPairRequest is the request type for the Query/TokenPair RPC method. */
export interface QueryTokenPairRequestAmino {
  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   * Cosmos base denomination
   */
  token?: string;
}
export interface QueryTokenPairRequestAminoMsg {
  type: "/evmos.erc20.v1.QueryTokenPairRequest";
  value: QueryTokenPairRequestAmino;
}
/** QueryTokenPairRequest is the request type for the Query/TokenPair RPC method. */
export interface QueryTokenPairRequestSDKType {
  token: string;
}
/**
 * QueryTokenPairResponse is the response type for the Query/TokenPair RPC
 * method.
 */
export interface QueryTokenPairResponse {
  tokenPair: TokenPair;
}
export interface QueryTokenPairResponseProtoMsg {
  typeUrl: "/evmos.erc20.v1.QueryTokenPairResponse";
  value: Uint8Array;
}
/**
 * QueryTokenPairResponse is the response type for the Query/TokenPair RPC
 * method.
 */
export interface QueryTokenPairResponseAmino {
  token_pair?: TokenPairAmino;
}
export interface QueryTokenPairResponseAminoMsg {
  type: "/evmos.erc20.v1.QueryTokenPairResponse";
  value: QueryTokenPairResponseAmino;
}
/**
 * QueryTokenPairResponse is the response type for the Query/TokenPair RPC
 * method.
 */
export interface QueryTokenPairResponseSDKType {
  token_pair: TokenPairSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/evmos.erc20.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/evmos.erc20.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/evmos.erc20.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/evmos.erc20.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryTokenPairsRequest(): QueryTokenPairsRequest {
  return {
    pagination: undefined
  };
}
export const QueryTokenPairsRequest = {
  typeUrl: "/evmos.erc20.v1.QueryTokenPairsRequest",
  is(o: any): o is QueryTokenPairsRequest {
    return o && o.$typeUrl === QueryTokenPairsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryTokenPairsRequestSDKType {
    return o && o.$typeUrl === QueryTokenPairsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryTokenPairsRequestAmino {
    return o && o.$typeUrl === QueryTokenPairsRequest.typeUrl;
  },
  encode(message: QueryTokenPairsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPairsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPairsRequest();
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
  fromJSON(object: any): QueryTokenPairsRequest {
    const obj = createBaseQueryTokenPairsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryTokenPairsRequest): JsonSafe<QueryTokenPairsRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTokenPairsRequest>): QueryTokenPairsRequest {
    const message = createBaseQueryTokenPairsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryTokenPairsRequestSDKType): QueryTokenPairsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryTokenPairsRequestSDKType {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryTokenPairsRequest): QueryTokenPairsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryTokenPairsRequestAmino): QueryTokenPairsRequest {
    const message = createBaseQueryTokenPairsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTokenPairsRequest): QueryTokenPairsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenPairsRequestAminoMsg): QueryTokenPairsRequest {
    return QueryTokenPairsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPairsRequestProtoMsg): QueryTokenPairsRequest {
    return QueryTokenPairsRequest.decode(message.value);
  },
  toProto(message: QueryTokenPairsRequest): Uint8Array {
    return QueryTokenPairsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPairsRequest): QueryTokenPairsRequestProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.QueryTokenPairsRequest",
      value: QueryTokenPairsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryTokenPairsResponse(): QueryTokenPairsResponse {
  return {
    tokenPairs: [],
    pagination: undefined
  };
}
export const QueryTokenPairsResponse = {
  typeUrl: "/evmos.erc20.v1.QueryTokenPairsResponse",
  is(o: any): o is QueryTokenPairsResponse {
    return o && (o.$typeUrl === QueryTokenPairsResponse.typeUrl || Array.isArray(o.tokenPairs) && (!o.tokenPairs.length || TokenPair.is(o.tokenPairs[0])));
  },
  isSDK(o: any): o is QueryTokenPairsResponseSDKType {
    return o && (o.$typeUrl === QueryTokenPairsResponse.typeUrl || Array.isArray(o.token_pairs) && (!o.token_pairs.length || TokenPair.isSDK(o.token_pairs[0])));
  },
  isAmino(o: any): o is QueryTokenPairsResponseAmino {
    return o && (o.$typeUrl === QueryTokenPairsResponse.typeUrl || Array.isArray(o.token_pairs) && (!o.token_pairs.length || TokenPair.isAmino(o.token_pairs[0])));
  },
  encode(message: QueryTokenPairsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokenPairs) {
      TokenPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPairsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPairsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenPairs.push(TokenPair.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryTokenPairsResponse {
    const obj = createBaseQueryTokenPairsResponse();
    if (Array.isArray(object?.tokenPairs)) obj.tokenPairs = object.tokenPairs.map((e: any) => TokenPair.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryTokenPairsResponse): JsonSafe<QueryTokenPairsResponse> {
    const obj: any = {};
    if (message.tokenPairs) {
      obj.tokenPairs = message.tokenPairs.map(e => e ? TokenPair.toJSON(e) : undefined);
    } else {
      obj.tokenPairs = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTokenPairsResponse>): QueryTokenPairsResponse {
    const message = createBaseQueryTokenPairsResponse();
    message.tokenPairs = object.tokenPairs?.map(e => TokenPair.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryTokenPairsResponseSDKType): QueryTokenPairsResponse {
    return {
      tokenPairs: Array.isArray(object?.token_pairs) ? object.token_pairs.map((e: any) => TokenPair.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryTokenPairsResponseSDKType {
    return {
      token_pairs: Array.isArray(object?.token_pairs) ? object.token_pairs.map((e: any) => TokenPair.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryTokenPairsResponse): QueryTokenPairsResponseSDKType {
    const obj: any = {};
    if (message.tokenPairs) {
      obj.token_pairs = message.tokenPairs.map(e => e ? TokenPair.toSDK(e) : undefined);
    } else {
      obj.token_pairs = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryTokenPairsResponseAmino): QueryTokenPairsResponse {
    const message = createBaseQueryTokenPairsResponse();
    message.tokenPairs = object.token_pairs?.map(e => TokenPair.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTokenPairsResponse): QueryTokenPairsResponseAmino {
    const obj: any = {};
    if (message.tokenPairs) {
      obj.token_pairs = message.tokenPairs.map(e => e ? TokenPair.toAmino(e) : undefined);
    } else {
      obj.token_pairs = message.tokenPairs;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenPairsResponseAminoMsg): QueryTokenPairsResponse {
    return QueryTokenPairsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPairsResponseProtoMsg): QueryTokenPairsResponse {
    return QueryTokenPairsResponse.decode(message.value);
  },
  toProto(message: QueryTokenPairsResponse): Uint8Array {
    return QueryTokenPairsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPairsResponse): QueryTokenPairsResponseProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.QueryTokenPairsResponse",
      value: QueryTokenPairsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    TokenPair.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryTokenPairRequest(): QueryTokenPairRequest {
  return {
    token: ""
  };
}
export const QueryTokenPairRequest = {
  typeUrl: "/evmos.erc20.v1.QueryTokenPairRequest",
  is(o: any): o is QueryTokenPairRequest {
    return o && (o.$typeUrl === QueryTokenPairRequest.typeUrl || typeof o.token === "string");
  },
  isSDK(o: any): o is QueryTokenPairRequestSDKType {
    return o && (o.$typeUrl === QueryTokenPairRequest.typeUrl || typeof o.token === "string");
  },
  isAmino(o: any): o is QueryTokenPairRequestAmino {
    return o && (o.$typeUrl === QueryTokenPairRequest.typeUrl || typeof o.token === "string");
  },
  encode(message: QueryTokenPairRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token !== undefined) {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPairRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenPairRequest {
    const obj = createBaseQueryTokenPairRequest();
    if (isSet(object.token)) obj.token = String(object.token);
    return obj;
  },
  toJSON(message: QueryTokenPairRequest): JsonSafe<QueryTokenPairRequest> {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTokenPairRequest>): QueryTokenPairRequest {
    const message = createBaseQueryTokenPairRequest();
    message.token = object.token ?? "";
    return message;
  },
  fromSDK(object: QueryTokenPairRequestSDKType): QueryTokenPairRequest {
    return {
      token: object?.token
    };
  },
  fromSDKJSON(object: any): QueryTokenPairRequestSDKType {
    return {
      token: isSet(object.token) ? String(object.token) : ""
    };
  },
  toSDK(message: QueryTokenPairRequest): QueryTokenPairRequestSDKType {
    const obj: any = {};
    obj.token = message.token;
    return obj;
  },
  fromAmino(object: QueryTokenPairRequestAmino): QueryTokenPairRequest {
    const message = createBaseQueryTokenPairRequest();
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    return message;
  },
  toAmino(message: QueryTokenPairRequest): QueryTokenPairRequestAmino {
    const obj: any = {};
    obj.token = message.token === "" ? undefined : message.token;
    return obj;
  },
  fromAminoMsg(object: QueryTokenPairRequestAminoMsg): QueryTokenPairRequest {
    return QueryTokenPairRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPairRequestProtoMsg): QueryTokenPairRequest {
    return QueryTokenPairRequest.decode(message.value);
  },
  toProto(message: QueryTokenPairRequest): Uint8Array {
    return QueryTokenPairRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPairRequest): QueryTokenPairRequestProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.QueryTokenPairRequest",
      value: QueryTokenPairRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTokenPairResponse(): QueryTokenPairResponse {
  return {
    tokenPair: TokenPair.fromPartial({})
  };
}
export const QueryTokenPairResponse = {
  typeUrl: "/evmos.erc20.v1.QueryTokenPairResponse",
  is(o: any): o is QueryTokenPairResponse {
    return o && (o.$typeUrl === QueryTokenPairResponse.typeUrl || TokenPair.is(o.tokenPair));
  },
  isSDK(o: any): o is QueryTokenPairResponseSDKType {
    return o && (o.$typeUrl === QueryTokenPairResponse.typeUrl || TokenPair.isSDK(o.token_pair));
  },
  isAmino(o: any): o is QueryTokenPairResponseAmino {
    return o && (o.$typeUrl === QueryTokenPairResponse.typeUrl || TokenPair.isAmino(o.token_pair));
  },
  encode(message: QueryTokenPairResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenPair !== undefined) {
      TokenPair.encode(message.tokenPair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPairResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenPair = TokenPair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenPairResponse {
    const obj = createBaseQueryTokenPairResponse();
    if (isSet(object.tokenPair)) obj.tokenPair = TokenPair.fromJSON(object.tokenPair);
    return obj;
  },
  toJSON(message: QueryTokenPairResponse): JsonSafe<QueryTokenPairResponse> {
    const obj: any = {};
    message.tokenPair !== undefined && (obj.tokenPair = message.tokenPair ? TokenPair.toJSON(message.tokenPair) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTokenPairResponse>): QueryTokenPairResponse {
    const message = createBaseQueryTokenPairResponse();
    if (object.tokenPair !== undefined && object.tokenPair !== null) {
      message.tokenPair = TokenPair.fromPartial(object.tokenPair);
    }
    return message;
  },
  fromSDK(object: QueryTokenPairResponseSDKType): QueryTokenPairResponse {
    return {
      tokenPair: object.token_pair ? TokenPair.fromSDK(object.token_pair) : undefined
    };
  },
  fromSDKJSON(object: any): QueryTokenPairResponseSDKType {
    return {
      token_pair: isSet(object.token_pair) ? TokenPair.fromSDKJSON(object.token_pair) : undefined
    };
  },
  toSDK(message: QueryTokenPairResponse): QueryTokenPairResponseSDKType {
    const obj: any = {};
    message.tokenPair !== undefined && (obj.token_pair = message.tokenPair ? TokenPair.toSDK(message.tokenPair) : undefined);
    return obj;
  },
  fromAmino(object: QueryTokenPairResponseAmino): QueryTokenPairResponse {
    const message = createBaseQueryTokenPairResponse();
    if (object.token_pair !== undefined && object.token_pair !== null) {
      message.tokenPair = TokenPair.fromAmino(object.token_pair);
    }
    return message;
  },
  toAmino(message: QueryTokenPairResponse): QueryTokenPairResponseAmino {
    const obj: any = {};
    obj.token_pair = message.tokenPair ? TokenPair.toAmino(message.tokenPair) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenPairResponseAminoMsg): QueryTokenPairResponse {
    return QueryTokenPairResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPairResponseProtoMsg): QueryTokenPairResponse {
    return QueryTokenPairResponse.decode(message.value);
  },
  toProto(message: QueryTokenPairResponse): Uint8Array {
    return QueryTokenPairResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPairResponse): QueryTokenPairResponseProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.QueryTokenPairResponse",
      value: QueryTokenPairResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    TokenPair.registerTypeUrl();
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/evmos.erc20.v1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryParamsRequestSDKType {
    return {};
  },
  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/evmos.erc20.v1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  fromSDKJSON(object: any): QueryParamsResponseSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Params.registerTypeUrl();
  }
};