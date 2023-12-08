import { Params, ParamsAmino, ParamsSDKType } from "./mint";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "cosmos.mint.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.mint.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.mint.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */
export interface QueryInflationRequest {}
export interface QueryInflationRequestProtoMsg {
  typeUrl: "/cosmos.mint.v1beta1.QueryInflationRequest";
  value: Uint8Array;
}
/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */
export interface QueryInflationRequestAmino {}
/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */
export interface QueryInflationRequestSDKType {}
/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface QueryInflationResponse {
  /** inflation is the current minting inflation value. */
  inflation: Uint8Array;
}
export interface QueryInflationResponseProtoMsg {
  typeUrl: "/cosmos.mint.v1beta1.QueryInflationResponse";
  value: Uint8Array;
}
/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface QueryInflationResponseAmino {
  /** inflation is the current minting inflation value. */
  inflation: string;
}
/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface QueryInflationResponseSDKType {
  inflation: Uint8Array;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequest {}
export interface QueryAnnualProvisionsRequestProtoMsg {
  typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsRequest";
  value: Uint8Array;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequestAmino {}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequestSDKType {}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponse {
  /** annual_provisions is the current minting annual provisions value. */
  annualProvisions: Uint8Array;
}
export interface QueryAnnualProvisionsResponseProtoMsg {
  typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsResponse";
  value: Uint8Array;
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponseAmino {
  /** annual_provisions is the current minting annual provisions value. */
  annual_provisions: string;
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponseSDKType {
  annual_provisions: Uint8Array;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.mint.v1beta1.QueryParamsRequest",
  aminoType: "cosmos-sdk/QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsRequest {
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
  toAmino(_: QueryParamsRequest, useInterfaces: boolean = true): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg, useInterfaces: boolean = true): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.mint.v1beta1.QueryParamsRequest",
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
  typeUrl: "/cosmos.mint.v1beta1.QueryParamsResponse",
  aminoType: "cosmos-sdk/QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
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
  toJSON(message: QueryParamsResponse): unknown {
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
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : Params.fromPartial({})
    };
  },
  toAmino(message: QueryParamsResponse, useInterfaces: boolean = true): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg, useInterfaces: boolean = true): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.mint.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInflationRequest(): QueryInflationRequest {
  return {};
}
export const QueryInflationRequest = {
  typeUrl: "/cosmos.mint.v1beta1.QueryInflationRequest",
  aminoType: "cosmos-sdk/QueryInflationRequest",
  encode(_: QueryInflationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryInflationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInflationRequest();
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
  fromJSON(_: any): QueryInflationRequest {
    const obj = createBaseQueryInflationRequest();
    return obj;
  },
  toJSON(_: QueryInflationRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryInflationRequest>): QueryInflationRequest {
    const message = createBaseQueryInflationRequest();
    return message;
  },
  fromSDK(_: QueryInflationRequestSDKType): QueryInflationRequest {
    return {};
  },
  toSDK(_: QueryInflationRequest): QueryInflationRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryInflationRequestAmino): QueryInflationRequest {
    return {};
  },
  toAmino(_: QueryInflationRequest, useInterfaces: boolean = true): QueryInflationRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: QueryInflationRequestProtoMsg, useInterfaces: boolean = true): QueryInflationRequest {
    return QueryInflationRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryInflationRequest): Uint8Array {
    return QueryInflationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInflationRequest): QueryInflationRequestProtoMsg {
    return {
      typeUrl: "/cosmos.mint.v1beta1.QueryInflationRequest",
      value: QueryInflationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInflationResponse(): QueryInflationResponse {
  return {
    inflation: new Uint8Array()
  };
}
export const QueryInflationResponse = {
  typeUrl: "/cosmos.mint.v1beta1.QueryInflationResponse",
  aminoType: "cosmos-sdk/QueryInflationResponse",
  encode(message: QueryInflationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inflation.length !== 0) {
      writer.uint32(10).bytes(message.inflation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryInflationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInflationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflation = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInflationResponse {
    const obj = createBaseQueryInflationResponse();
    if (isSet(object.inflation)) obj.inflation = bytesFromBase64(object.inflation);
    return obj;
  },
  toJSON(message: QueryInflationResponse): unknown {
    const obj: any = {};
    message.inflation !== undefined && (obj.inflation = base64FromBytes(message.inflation !== undefined ? message.inflation : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryInflationResponse>): QueryInflationResponse {
    const message = createBaseQueryInflationResponse();
    message.inflation = object.inflation ?? new Uint8Array();
    return message;
  },
  fromSDK(object: QueryInflationResponseSDKType): QueryInflationResponse {
    return {
      inflation: object?.inflation
    };
  },
  toSDK(message: QueryInflationResponse): QueryInflationResponseSDKType {
    const obj: any = {};
    obj.inflation = message.inflation;
    return obj;
  },
  fromAmino(object: QueryInflationResponseAmino): QueryInflationResponse {
    return {
      inflation: isSet(object.inflation) ? bytesFromBase64(object.inflation) : new Uint8Array()
    };
  },
  toAmino(message: QueryInflationResponse, useInterfaces: boolean = true): QueryInflationResponseAmino {
    const obj: any = {};
    obj.inflation = base64FromBytes(message.inflation);
    return obj;
  },
  fromProtoMsg(message: QueryInflationResponseProtoMsg, useInterfaces: boolean = true): QueryInflationResponse {
    return QueryInflationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryInflationResponse): Uint8Array {
    return QueryInflationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInflationResponse): QueryInflationResponseProtoMsg {
    return {
      typeUrl: "/cosmos.mint.v1beta1.QueryInflationResponse",
      value: QueryInflationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAnnualProvisionsRequest(): QueryAnnualProvisionsRequest {
  return {};
}
export const QueryAnnualProvisionsRequest = {
  typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsRequest",
  aminoType: "cosmos-sdk/QueryAnnualProvisionsRequest",
  encode(_: QueryAnnualProvisionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAnnualProvisionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAnnualProvisionsRequest();
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
  fromJSON(_: any): QueryAnnualProvisionsRequest {
    const obj = createBaseQueryAnnualProvisionsRequest();
    return obj;
  },
  toJSON(_: QueryAnnualProvisionsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryAnnualProvisionsRequest>): QueryAnnualProvisionsRequest {
    const message = createBaseQueryAnnualProvisionsRequest();
    return message;
  },
  fromSDK(_: QueryAnnualProvisionsRequestSDKType): QueryAnnualProvisionsRequest {
    return {};
  },
  toSDK(_: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryAnnualProvisionsRequestAmino): QueryAnnualProvisionsRequest {
    return {};
  },
  toAmino(_: QueryAnnualProvisionsRequest, useInterfaces: boolean = true): QueryAnnualProvisionsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: QueryAnnualProvisionsRequestProtoMsg, useInterfaces: boolean = true): QueryAnnualProvisionsRequest {
    return QueryAnnualProvisionsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAnnualProvisionsRequest): Uint8Array {
    return QueryAnnualProvisionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsRequest",
      value: QueryAnnualProvisionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAnnualProvisionsResponse(): QueryAnnualProvisionsResponse {
  return {
    annualProvisions: new Uint8Array()
  };
}
export const QueryAnnualProvisionsResponse = {
  typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsResponse",
  aminoType: "cosmos-sdk/QueryAnnualProvisionsResponse",
  encode(message: QueryAnnualProvisionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.annualProvisions.length !== 0) {
      writer.uint32(10).bytes(message.annualProvisions);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAnnualProvisionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAnnualProvisionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annualProvisions = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAnnualProvisionsResponse {
    const obj = createBaseQueryAnnualProvisionsResponse();
    if (isSet(object.annualProvisions)) obj.annualProvisions = bytesFromBase64(object.annualProvisions);
    return obj;
  },
  toJSON(message: QueryAnnualProvisionsResponse): unknown {
    const obj: any = {};
    message.annualProvisions !== undefined && (obj.annualProvisions = base64FromBytes(message.annualProvisions !== undefined ? message.annualProvisions : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAnnualProvisionsResponse>): QueryAnnualProvisionsResponse {
    const message = createBaseQueryAnnualProvisionsResponse();
    message.annualProvisions = object.annualProvisions ?? new Uint8Array();
    return message;
  },
  fromSDK(object: QueryAnnualProvisionsResponseSDKType): QueryAnnualProvisionsResponse {
    return {
      annualProvisions: object?.annual_provisions
    };
  },
  toSDK(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseSDKType {
    const obj: any = {};
    obj.annual_provisions = message.annualProvisions;
    return obj;
  },
  fromAmino(object: QueryAnnualProvisionsResponseAmino): QueryAnnualProvisionsResponse {
    return {
      annual_provisions: isSet(object.annual_provisions) ? bytesFromBase64(object.annual_provisions) : new Uint8Array()
    };
  },
  toAmino(message: QueryAnnualProvisionsResponse, useInterfaces: boolean = true): QueryAnnualProvisionsResponseAmino {
    const obj: any = {};
    obj.annual_provisions = base64FromBytes(message.annualProvisions);
    return obj;
  },
  fromProtoMsg(message: QueryAnnualProvisionsResponseProtoMsg, useInterfaces: boolean = true): QueryAnnualProvisionsResponse {
    return QueryAnnualProvisionsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAnnualProvisionsResponse): Uint8Array {
    return QueryAnnualProvisionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsResponse",
      value: QueryAnnualProvisionsResponse.encode(message).finish()
    };
  }
};