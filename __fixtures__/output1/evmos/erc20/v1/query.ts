import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair, TokenPairSDKType } from "./erc20";
import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export const protobufPackage = "evmos.erc20.v1";

/**
 * QueryTokenPairsRequest is the request type for the Query/TokenPairs RPC
 *  method.
 */
export interface QueryTokenPairsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryTokenPairsRequest is the request type for the Query/TokenPairs RPC
 *  method.
 */
export interface QueryTokenPairsRequestSDKType {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestSDKType;
}

/**
 * QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC
 *  method.
 */
export interface QueryTokenPairsResponse {
  tokenPairs: TokenPair[];

  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC
 *  method.
 */
export interface QueryTokenPairsResponseSDKType {
  token_pairs: TokenPairSDKType[];

  /** pagination defines the pagination in the response. */
  pagination?: PageResponseSDKType;
}

/** QueryTokenPairRequest is the request type for the Query/TokenPair RPC method. */
export interface QueryTokenPairRequest {
  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   *  Cosmos base denomination
   */
  token: string;
}

/** QueryTokenPairRequest is the request type for the Query/TokenPair RPC method. */
export interface QueryTokenPairRequestSDKType {
  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   *  Cosmos base denomination
   */
  token: string;
}

/**
 * QueryTokenPairResponse is the response type for the Query/TokenPair RPC
 *  method.
 */
export interface QueryTokenPairResponse {
  tokenPair: TokenPair;
}

/**
 * QueryTokenPairResponse is the response type for the Query/TokenPair RPC
 *  method.
 */
export interface QueryTokenPairResponseSDKType {
  token_pair: TokenPairSDKType;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}

/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 *  method.
 */
export interface QueryParamsResponse {
  params: Params;
}

/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 *  method.
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
  encode(message: QueryTokenPairsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenPairsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryTokenPairsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTokenPairsRequest>): QueryTokenPairsRequest {
    const message = createBaseQueryTokenPairsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryTokenPairsRequestSDKType): QueryTokenPairsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryTokenPairsRequest): QueryTokenPairsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryTokenPairsResponse(): QueryTokenPairsResponse {
  return {
    tokenPairs: [],
    pagination: undefined
  };
}

export const QueryTokenPairsResponse = {
  encode(message: QueryTokenPairsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tokenPairs) {
      TokenPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenPairsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      tokenPairs: Array.isArray(object?.tokenPairs) ? object.tokenPairs.map((e: any) => TokenPair.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryTokenPairsResponse): unknown {
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
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryTokenPairsResponseSDKType): QueryTokenPairsResponse {
    return {
      tokenPairs: Array.isArray(object?.token_pairs) ? object.token_pairs.map((e: any) => TokenPair.fromSDK(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDK(object.pagination) : undefined
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
  }

};

function createBaseQueryTokenPairRequest(): QueryTokenPairRequest {
  return {
    token: ""
  };
}

export const QueryTokenPairRequest = {
  encode(message: QueryTokenPairRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      token: isSet(object.token) ? String(object.token) : ""
    };
  },

  toJSON(message: QueryTokenPairRequest): unknown {
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
      token: isSet(object.token) ? object.token : undefined
    };
  },

  toSDK(message: QueryTokenPairRequest): QueryTokenPairRequestSDKType {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  }

};

function createBaseQueryTokenPairResponse(): QueryTokenPairResponse {
  return {
    tokenPair: undefined
  };
}

export const QueryTokenPairResponse = {
  encode(message: QueryTokenPairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenPair !== undefined) {
      TokenPair.encode(message.tokenPair, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      tokenPair: isSet(object.tokenPair) ? TokenPair.fromJSON(object.tokenPair) : undefined
    };
  },

  toJSON(message: QueryTokenPairResponse): unknown {
    const obj: any = {};
    message.tokenPair !== undefined && (obj.tokenPair = message.tokenPair ? TokenPair.toJSON(message.tokenPair) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTokenPairResponse>): QueryTokenPairResponse {
    const message = createBaseQueryTokenPairResponse();
    message.tokenPair = object.tokenPair !== undefined && object.tokenPair !== null ? TokenPair.fromPartial(object.tokenPair) : undefined;
    return message;
  },

  fromSDK(object: QueryTokenPairResponseSDKType): QueryTokenPairResponse {
    return {
      tokenPair: isSet(object.token_pair) ? TokenPair.fromSDK(object.token_pair) : undefined
    };
  },

  toSDK(message: QueryTokenPairResponse): QueryTokenPairResponseSDKType {
    const obj: any = {};
    message.tokenPair !== undefined && (obj.token_pair = message.tokenPair ? TokenPair.toSDK(message.tokenPair) : undefined);
    return obj;
  }

};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
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

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },

  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },

  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
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

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },

  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromSDK(object.params) : undefined
    };
  },

  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  }

};