import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataAmino, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "../../../helpers";
export const protobufPackage = "osmosis.tokenfactory.v1beta1";

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "osmosis/tokenfactory/query-params-request";
  value: QueryParamsRequestAmino;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "osmosis/tokenfactory/query-params-response";
  value: QueryParamsResponseAmino;
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}

/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequest {
  denom: string;
}
export interface QueryDenomAuthorityMetadataRequestProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest";
  value: Uint8Array;
}

/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequestAmino {
  denom: string;
}
export interface QueryDenomAuthorityMetadataRequestAminoMsg {
  type: "osmosis/tokenfactory/query-denom-authority-metadata-request";
  value: QueryDenomAuthorityMetadataRequestAmino;
}

/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequestSDKType {
  denom: string;
}

/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponse {
  authorityMetadata?: DenomAuthorityMetadata;
}
export interface QueryDenomAuthorityMetadataResponseProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse";
  value: Uint8Array;
}

/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponseAmino {
  authority_metadata?: DenomAuthorityMetadataAmino;
}
export interface QueryDenomAuthorityMetadataResponseAminoMsg {
  type: "osmosis/tokenfactory/query-denom-authority-metadata-response";
  value: QueryDenomAuthorityMetadataResponseAmino;
}

/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponseSDKType {
  authority_metadata?: DenomAuthorityMetadataSDKType;
}

/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequest {
  creator: string;
}
export interface QueryDenomsFromCreatorRequestProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest";
  value: Uint8Array;
}

/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequestAmino {
  creator: string;
}
export interface QueryDenomsFromCreatorRequestAminoMsg {
  type: "osmosis/tokenfactory/query-denoms-from-creator-request";
  value: QueryDenomsFromCreatorRequestAmino;
}

/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequestSDKType {
  creator: string;
}

/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponse {
  denoms: string[];
}
export interface QueryDenomsFromCreatorResponseProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse";
  value: Uint8Array;
}

/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponseAmino {
  denoms: string[];
}
export interface QueryDenomsFromCreatorResponseAminoMsg {
  type: "osmosis/tokenfactory/query-denoms-from-creator-response";
  value: QueryDenomsFromCreatorResponseAmino;
}

/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponseSDKType {
  denoms: string[];
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsRequest",
  aminoType: "osmosis/tokenfactory/query-params-request",

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
      type: "osmosis/tokenfactory/query-params-request",
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
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsResponse",
  aminoType: "osmosis/tokenfactory/query-params-response",

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
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },

  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
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
      type: "osmosis/tokenfactory/query-params-response",
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
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }

};

function createBaseQueryDenomAuthorityMetadataRequest(): QueryDenomAuthorityMetadataRequest {
  return {
    denom: ""
  };
}

export const QueryDenomAuthorityMetadataRequest = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest",
  aminoType: "osmosis/tokenfactory/query-denom-authority-metadata-request",

  encode(message: QueryDenomAuthorityMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomAuthorityMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomAuthorityMetadataRequest();

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

  fromJSON(object: any): QueryDenomAuthorityMetadataRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: QueryDenomAuthorityMetadataRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomAuthorityMetadataRequest>): QueryDenomAuthorityMetadataRequest {
    const message = createBaseQueryDenomAuthorityMetadataRequest();
    message.denom = object.denom ?? "";
    return message;
  },

  fromSDK(object: QueryDenomAuthorityMetadataRequestSDKType): QueryDenomAuthorityMetadataRequest {
    return {
      denom: object?.denom
    };
  },

  toSDK(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },

  fromAmino(object: QueryDenomAuthorityMetadataRequestAmino): QueryDenomAuthorityMetadataRequest {
    return {
      denom: object.denom
    };
  },

  toAmino(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },

  fromAminoMsg(object: QueryDenomAuthorityMetadataRequestAminoMsg): QueryDenomAuthorityMetadataRequest {
    return QueryDenomAuthorityMetadataRequest.fromAmino(object.value);
  },

  toAminoMsg(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestAminoMsg {
    return {
      type: "osmosis/tokenfactory/query-denom-authority-metadata-request",
      value: QueryDenomAuthorityMetadataRequest.toAmino(message)
    };
  },

  fromProtoMsg(message: QueryDenomAuthorityMetadataRequestProtoMsg): QueryDenomAuthorityMetadataRequest {
    return QueryDenomAuthorityMetadataRequest.decode(message.value);
  },

  toProto(message: QueryDenomAuthorityMetadataRequest): Uint8Array {
    return QueryDenomAuthorityMetadataRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest",
      value: QueryDenomAuthorityMetadataRequest.encode(message).finish()
    };
  }

};

function createBaseQueryDenomAuthorityMetadataResponse(): QueryDenomAuthorityMetadataResponse {
  return {
    authorityMetadata: undefined
  };
}

export const QueryDenomAuthorityMetadataResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse",
  aminoType: "osmosis/tokenfactory/query-denom-authority-metadata-response",

  encode(message: QueryDenomAuthorityMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authorityMetadata !== undefined) {
      DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomAuthorityMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomAuthorityMetadataResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authorityMetadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDenomAuthorityMetadataResponse {
    return {
      authorityMetadata: isSet(object.authorityMetadata) ? DenomAuthorityMetadata.fromJSON(object.authorityMetadata) : undefined
    };
  },

  toJSON(message: QueryDenomAuthorityMetadataResponse): unknown {
    const obj: any = {};
    message.authorityMetadata !== undefined && (obj.authorityMetadata = message.authorityMetadata ? DenomAuthorityMetadata.toJSON(message.authorityMetadata) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomAuthorityMetadataResponse>): QueryDenomAuthorityMetadataResponse {
    const message = createBaseQueryDenomAuthorityMetadataResponse();
    message.authorityMetadata = object.authorityMetadata !== undefined && object.authorityMetadata !== null ? DenomAuthorityMetadata.fromPartial(object.authorityMetadata) : undefined;
    return message;
  },

  fromSDK(object: QueryDenomAuthorityMetadataResponseSDKType): QueryDenomAuthorityMetadataResponse {
    return {
      authorityMetadata: object.authority_metadata ? DenomAuthorityMetadata.fromSDK(object.authority_metadata) : undefined
    };
  },

  toSDK(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseSDKType {
    const obj: any = {};
    message.authorityMetadata !== undefined && (obj.authority_metadata = message.authorityMetadata ? DenomAuthorityMetadata.toSDK(message.authorityMetadata) : undefined);
    return obj;
  },

  fromAmino(object: QueryDenomAuthorityMetadataResponseAmino): QueryDenomAuthorityMetadataResponse {
    return {
      authorityMetadata: object?.authority_metadata ? DenomAuthorityMetadata.fromAmino(object.authority_metadata) : undefined
    };
  },

  toAmino(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseAmino {
    const obj: any = {};
    obj.authority_metadata = message.authorityMetadata ? DenomAuthorityMetadata.toAmino(message.authorityMetadata) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryDenomAuthorityMetadataResponseAminoMsg): QueryDenomAuthorityMetadataResponse {
    return QueryDenomAuthorityMetadataResponse.fromAmino(object.value);
  },

  toAminoMsg(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseAminoMsg {
    return {
      type: "osmosis/tokenfactory/query-denom-authority-metadata-response",
      value: QueryDenomAuthorityMetadataResponse.toAmino(message)
    };
  },

  fromProtoMsg(message: QueryDenomAuthorityMetadataResponseProtoMsg): QueryDenomAuthorityMetadataResponse {
    return QueryDenomAuthorityMetadataResponse.decode(message.value);
  },

  toProto(message: QueryDenomAuthorityMetadataResponse): Uint8Array {
    return QueryDenomAuthorityMetadataResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse",
      value: QueryDenomAuthorityMetadataResponse.encode(message).finish()
    };
  }

};

function createBaseQueryDenomsFromCreatorRequest(): QueryDenomsFromCreatorRequest {
  return {
    creator: ""
  };
}

export const QueryDenomsFromCreatorRequest = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest",
  aminoType: "osmosis/tokenfactory/query-denoms-from-creator-request",

  encode(message: QueryDenomsFromCreatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsFromCreatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsFromCreatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDenomsFromCreatorRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },

  toJSON(message: QueryDenomsFromCreatorRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomsFromCreatorRequest>): QueryDenomsFromCreatorRequest {
    const message = createBaseQueryDenomsFromCreatorRequest();
    message.creator = object.creator ?? "";
    return message;
  },

  fromSDK(object: QueryDenomsFromCreatorRequestSDKType): QueryDenomsFromCreatorRequest {
    return {
      creator: object?.creator
    };
  },

  toSDK(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestSDKType {
    const obj: any = {};
    obj.creator = message.creator;
    return obj;
  },

  fromAmino(object: QueryDenomsFromCreatorRequestAmino): QueryDenomsFromCreatorRequest {
    return {
      creator: object.creator
    };
  },

  toAmino(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestAmino {
    const obj: any = {};
    obj.creator = message.creator;
    return obj;
  },

  fromAminoMsg(object: QueryDenomsFromCreatorRequestAminoMsg): QueryDenomsFromCreatorRequest {
    return QueryDenomsFromCreatorRequest.fromAmino(object.value);
  },

  toAminoMsg(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestAminoMsg {
    return {
      type: "osmosis/tokenfactory/query-denoms-from-creator-request",
      value: QueryDenomsFromCreatorRequest.toAmino(message)
    };
  },

  fromProtoMsg(message: QueryDenomsFromCreatorRequestProtoMsg): QueryDenomsFromCreatorRequest {
    return QueryDenomsFromCreatorRequest.decode(message.value);
  },

  toProto(message: QueryDenomsFromCreatorRequest): Uint8Array {
    return QueryDenomsFromCreatorRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest",
      value: QueryDenomsFromCreatorRequest.encode(message).finish()
    };
  }

};

function createBaseQueryDenomsFromCreatorResponse(): QueryDenomsFromCreatorResponse {
  return {
    denoms: []
  };
}

export const QueryDenomsFromCreatorResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse",
  aminoType: "osmosis/tokenfactory/query-denoms-from-creator-response",

  encode(message: QueryDenomsFromCreatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsFromCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsFromCreatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDenomsFromCreatorResponse {
    return {
      denoms: Array.isArray(object?.denoms) ? object.denoms.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: QueryDenomsFromCreatorResponse): unknown {
    const obj: any = {};

    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e);
    } else {
      obj.denoms = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomsFromCreatorResponse>): QueryDenomsFromCreatorResponse {
    const message = createBaseQueryDenomsFromCreatorResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },

  fromSDK(object: QueryDenomsFromCreatorResponseSDKType): QueryDenomsFromCreatorResponse {
    return {
      denoms: Array.isArray(object?.denoms) ? object.denoms.map((e: any) => e) : []
    };
  },

  toSDK(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseSDKType {
    const obj: any = {};

    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e);
    } else {
      obj.denoms = [];
    }

    return obj;
  },

  fromAmino(object: QueryDenomsFromCreatorResponseAmino): QueryDenomsFromCreatorResponse {
    return {
      denoms: Array.isArray(object?.denoms) ? object.denoms.map((e: any) => e) : []
    };
  },

  toAmino(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseAmino {
    const obj: any = {};

    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e);
    } else {
      obj.denoms = [];
    }

    return obj;
  },

  fromAminoMsg(object: QueryDenomsFromCreatorResponseAminoMsg): QueryDenomsFromCreatorResponse {
    return QueryDenomsFromCreatorResponse.fromAmino(object.value);
  },

  toAminoMsg(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseAminoMsg {
    return {
      type: "osmosis/tokenfactory/query-denoms-from-creator-response",
      value: QueryDenomsFromCreatorResponse.toAmino(message)
    };
  },

  fromProtoMsg(message: QueryDenomsFromCreatorResponseProtoMsg): QueryDenomsFromCreatorResponse {
    return QueryDenomsFromCreatorResponse.decode(message.value);
  },

  toProto(message: QueryDenomsFromCreatorResponse): Uint8Array {
    return QueryDenomsFromCreatorResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse",
      value: QueryDenomsFromCreatorResponse.encode(message).finish()
    };
  }

};