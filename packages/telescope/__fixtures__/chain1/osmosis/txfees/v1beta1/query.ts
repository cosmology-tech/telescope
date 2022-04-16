/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { FeeToken } from "../../../osmosis/txfees/v1beta1/feetoken";

export const protobufPackage = "osmosis.txfees.v1beta1";

export interface QueryFeeTokensRequest {}

export interface QueryFeeTokensResponse {
  feeTokens: FeeToken[];
}

export interface QueryDenomPoolIdRequest {
  denom: string;
}

export interface QueryDenomPoolIdResponse {
  poolID: Long;
}

export interface QueryBaseDenomRequest {}

export interface QueryBaseDenomResponse {
  baseDenom: string;
}

function createBaseQueryFeeTokensRequest(): QueryFeeTokensRequest {
  return {};
}

export const QueryFeeTokensRequest = {
  encode(
    _: QueryFeeTokensRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFeeTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeTokensRequest();
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

  fromJSON(_: any): QueryFeeTokensRequest {
    return {};
  },

  toJSON(_: QueryFeeTokensRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeeTokensRequest>, I>>(
    _: I
  ): QueryFeeTokensRequest {
    const message = createBaseQueryFeeTokensRequest();
    return message;
  },
};

function createBaseQueryFeeTokensResponse(): QueryFeeTokensResponse {
  return { feeTokens: [] };
}

export const QueryFeeTokensResponse = {
  encode(
    message: QueryFeeTokensResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.feeTokens) {
      FeeToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFeeTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeTokens.push(FeeToken.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeeTokensResponse {
    return {
      feeTokens: Array.isArray(object?.feeTokens)
        ? object.feeTokens.map((e: any) => FeeToken.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryFeeTokensResponse): unknown {
    const obj: any = {};
    if (message.feeTokens) {
      obj.feeTokens = message.feeTokens.map((e) =>
        e ? FeeToken.toJSON(e) : undefined
      );
    } else {
      obj.feeTokens = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeeTokensResponse>, I>>(
    object: I
  ): QueryFeeTokensResponse {
    const message = createBaseQueryFeeTokensResponse();
    message.feeTokens =
      object.feeTokens?.map((e) => FeeToken.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryDenomPoolIdRequest(): QueryDenomPoolIdRequest {
  return { denom: "" };
}

export const QueryDenomPoolIdRequest = {
  encode(
    message: QueryDenomPoolIdRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDenomPoolIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomPoolIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomPoolIdRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: QueryDenomPoolIdRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomPoolIdRequest>, I>>(
    object: I
  ): QueryDenomPoolIdRequest {
    const message = createBaseQueryDenomPoolIdRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryDenomPoolIdResponse(): QueryDenomPoolIdResponse {
  return { poolID: Long.UZERO };
}

export const QueryDenomPoolIdResponse = {
  encode(
    message: QueryDenomPoolIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolID.isZero()) {
      writer.uint32(8).uint64(message.poolID);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDenomPoolIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomPoolIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolID = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomPoolIdResponse {
    return {
      poolID: isSet(object.poolID)
        ? Long.fromString(object.poolID)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryDenomPoolIdResponse): unknown {
    const obj: any = {};
    message.poolID !== undefined &&
      (obj.poolID = (message.poolID || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomPoolIdResponse>, I>>(
    object: I
  ): QueryDenomPoolIdResponse {
    const message = createBaseQueryDenomPoolIdResponse();
    message.poolID =
      object.poolID !== undefined && object.poolID !== null
        ? Long.fromValue(object.poolID)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryBaseDenomRequest(): QueryBaseDenomRequest {
  return {};
}

export const QueryBaseDenomRequest = {
  encode(
    _: QueryBaseDenomRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBaseDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseDenomRequest();
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

  fromJSON(_: any): QueryBaseDenomRequest {
    return {};
  },

  toJSON(_: QueryBaseDenomRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBaseDenomRequest>, I>>(
    _: I
  ): QueryBaseDenomRequest {
    const message = createBaseQueryBaseDenomRequest();
    return message;
  },
};

function createBaseQueryBaseDenomResponse(): QueryBaseDenomResponse {
  return { baseDenom: "" };
}

export const QueryBaseDenomResponse = {
  encode(
    message: QueryBaseDenomResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBaseDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBaseDenomResponse {
    return {
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
    };
  },

  toJSON(message: QueryBaseDenomResponse): unknown {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBaseDenomResponse>, I>>(
    object: I
  ): QueryBaseDenomResponse {
    const message = createBaseQueryBaseDenomResponse();
    message.baseDenom = object.baseDenom ?? "";
    return message;
  },
};

export interface Query {
  /**
   * FeeTokens returns a list of all the whitelisted fee tokens and their
   * corresponding pools It does not include the BaseDenom, which has its own
   * query endpoint
   */
  FeeTokens(request: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse>;
  DenomPoolId(
    request: QueryDenomPoolIdRequest
  ): Promise<QueryDenomPoolIdResponse>;
  BaseDenom(request: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.FeeTokens = this.FeeTokens.bind(this);
    this.DenomPoolId = this.DenomPoolId.bind(this);
    this.BaseDenom = this.BaseDenom.bind(this);
  }
  FeeTokens(request: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse> {
    const data = QueryFeeTokensRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.txfees.v1beta1.Query",
      "FeeTokens",
      data
    );
    return promise.then((data) =>
      QueryFeeTokensResponse.decode(new _m0.Reader(data))
    );
  }

  DenomPoolId(
    request: QueryDenomPoolIdRequest
  ): Promise<QueryDenomPoolIdResponse> {
    const data = QueryDenomPoolIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.txfees.v1beta1.Query",
      "DenomPoolId",
      data
    );
    return promise.then((data) =>
      QueryDenomPoolIdResponse.decode(new _m0.Reader(data))
    );
  }

  BaseDenom(request: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse> {
    const data = QueryBaseDenomRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.txfees.v1beta1.Query",
      "BaseDenom",
      data
    );
    return promise.then((data) =>
      QueryBaseDenomResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
