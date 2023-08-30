//@ts-nocheck
/* eslint-disable */
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";
import { Long, isSet, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "evmos.inflation.v1";
/** QueryPeriodRequest is the request type for the Query/Period RPC method. */
export interface QueryPeriodRequest {}
/** QueryPeriodResponse is the response type for the Query/Period RPC method. */
export interface QueryPeriodResponse {
  /** period is the current minting per epoch provision value. */
  period: Long;
}
/**
 * QueryEpochMintProvisionRequest is the request type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionRequest {}
/**
 * QueryEpochMintProvisionResponse is the response type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionResponse {
  /** epoch_mint_provision is the current minting per epoch provision value. */
  epochMintProvision: DecCoin;
}
/**
 * QuerySkippedEpochsRequest is the request type for the Query/SkippedEpochs RPC
 * method.
 */
export interface QuerySkippedEpochsRequest {}
/**
 * QuerySkippedEpochsResponse is the response type for the Query/SkippedEpochs
 * RPC method.
 */
export interface QuerySkippedEpochsResponse {
  /** number of epochs that the inflation module has been disabled. */
  skippedEpochs: Long;
}
/**
 * QueryCirculatingSupplyRequest is the request type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyRequest {}
/**
 * QueryCirculatingSupplyResponse is the response type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyResponse {
  /** total amount of coins in circulation */
  circulatingSupply: DecCoin;
}
/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequest {}
/**
 * QueryInflationRateResponse is the response type for the Query/InflationRate
 * RPC method.
 */
export interface QueryInflationRateResponse {
  /** rate by which the total supply increases within one period */
  inflationRate: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
function createBaseQueryPeriodRequest(): QueryPeriodRequest {
  return {};
}
export const QueryPeriodRequest = {
  typeUrl: "/evmos.inflation.v1.QueryPeriodRequest",
  encode(_: QueryPeriodRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPeriodRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPeriodRequest();
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
  fromJSON(_: any): QueryPeriodRequest {
    return {};
  },
  toJSON(_: QueryPeriodRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryPeriodRequest>): QueryPeriodRequest {
    const message = createBaseQueryPeriodRequest();
    return message;
  },
  fromAmino(_: QueryPeriodRequestAmino): QueryPeriodRequest {
    return {};
  },
  toAmino(_: QueryPeriodRequest): QueryPeriodRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPeriodRequestAminoMsg): QueryPeriodRequest {
    return QueryPeriodRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPeriodRequestProtoMsg): QueryPeriodRequest {
    return QueryPeriodRequest.decode(message.value);
  },
  toProto(message: QueryPeriodRequest): Uint8Array {
    return QueryPeriodRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPeriodRequest): QueryPeriodRequestProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QueryPeriodRequest",
      value: QueryPeriodRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPeriodResponse(): QueryPeriodResponse {
  return {
    period: Long.UZERO
  };
}
export const QueryPeriodResponse = {
  typeUrl: "/evmos.inflation.v1.QueryPeriodResponse",
  encode(message: QueryPeriodResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.period.isZero()) {
      writer.uint32(8).uint64(message.period);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPeriodResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPeriodResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.period = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPeriodResponse {
    return {
      period: isSet(object.period) ? Long.fromValue(object.period) : Long.UZERO
    };
  },
  toJSON(message: QueryPeriodResponse): unknown {
    const obj: any = {};
    message.period !== undefined && (obj.period = (message.period || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryPeriodResponse>): QueryPeriodResponse {
    const message = createBaseQueryPeriodResponse();
    message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryPeriodResponseAmino): QueryPeriodResponse {
    return {
      period: Long.fromString(object.period)
    };
  },
  toAmino(message: QueryPeriodResponse): QueryPeriodResponseAmino {
    const obj: any = {};
    obj.period = message.period ? message.period.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPeriodResponseAminoMsg): QueryPeriodResponse {
    return QueryPeriodResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPeriodResponseProtoMsg): QueryPeriodResponse {
    return QueryPeriodResponse.decode(message.value);
  },
  toProto(message: QueryPeriodResponse): Uint8Array {
    return QueryPeriodResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPeriodResponse): QueryPeriodResponseProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QueryPeriodResponse",
      value: QueryPeriodResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEpochMintProvisionRequest(): QueryEpochMintProvisionRequest {
  return {};
}
export const QueryEpochMintProvisionRequest = {
  typeUrl: "/evmos.inflation.v1.QueryEpochMintProvisionRequest",
  encode(_: QueryEpochMintProvisionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochMintProvisionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochMintProvisionRequest();
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
  fromJSON(_: any): QueryEpochMintProvisionRequest {
    return {};
  },
  toJSON(_: QueryEpochMintProvisionRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryEpochMintProvisionRequest>): QueryEpochMintProvisionRequest {
    const message = createBaseQueryEpochMintProvisionRequest();
    return message;
  },
  fromAmino(_: QueryEpochMintProvisionRequestAmino): QueryEpochMintProvisionRequest {
    return {};
  },
  toAmino(_: QueryEpochMintProvisionRequest): QueryEpochMintProvisionRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryEpochMintProvisionRequestAminoMsg): QueryEpochMintProvisionRequest {
    return QueryEpochMintProvisionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochMintProvisionRequestProtoMsg): QueryEpochMintProvisionRequest {
    return QueryEpochMintProvisionRequest.decode(message.value);
  },
  toProto(message: QueryEpochMintProvisionRequest): Uint8Array {
    return QueryEpochMintProvisionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochMintProvisionRequest): QueryEpochMintProvisionRequestProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QueryEpochMintProvisionRequest",
      value: QueryEpochMintProvisionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEpochMintProvisionResponse(): QueryEpochMintProvisionResponse {
  return {
    epochMintProvision: DecCoin.fromPartial({})
  };
}
export const QueryEpochMintProvisionResponse = {
  typeUrl: "/evmos.inflation.v1.QueryEpochMintProvisionResponse",
  encode(message: QueryEpochMintProvisionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochMintProvision !== undefined) {
      DecCoin.encode(message.epochMintProvision, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochMintProvisionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochMintProvisionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochMintProvision = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEpochMintProvisionResponse {
    return {
      epochMintProvision: isSet(object.epochMintProvision) ? DecCoin.fromJSON(object.epochMintProvision) : undefined
    };
  },
  toJSON(message: QueryEpochMintProvisionResponse): unknown {
    const obj: any = {};
    message.epochMintProvision !== undefined && (obj.epochMintProvision = message.epochMintProvision ? DecCoin.toJSON(message.epochMintProvision) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryEpochMintProvisionResponse>): QueryEpochMintProvisionResponse {
    const message = createBaseQueryEpochMintProvisionResponse();
    message.epochMintProvision = object.epochMintProvision !== undefined && object.epochMintProvision !== null ? DecCoin.fromPartial(object.epochMintProvision) : undefined;
    return message;
  },
  fromAmino(object: QueryEpochMintProvisionResponseAmino): QueryEpochMintProvisionResponse {
    return {
      epochMintProvision: object?.epoch_mint_provision ? DecCoin.fromAmino(object.epoch_mint_provision) : undefined
    };
  },
  toAmino(message: QueryEpochMintProvisionResponse): QueryEpochMintProvisionResponseAmino {
    const obj: any = {};
    obj.epoch_mint_provision = message.epochMintProvision ? DecCoin.toAmino(message.epochMintProvision) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEpochMintProvisionResponseAminoMsg): QueryEpochMintProvisionResponse {
    return QueryEpochMintProvisionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochMintProvisionResponseProtoMsg): QueryEpochMintProvisionResponse {
    return QueryEpochMintProvisionResponse.decode(message.value);
  },
  toProto(message: QueryEpochMintProvisionResponse): Uint8Array {
    return QueryEpochMintProvisionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochMintProvisionResponse): QueryEpochMintProvisionResponseProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QueryEpochMintProvisionResponse",
      value: QueryEpochMintProvisionResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySkippedEpochsRequest(): QuerySkippedEpochsRequest {
  return {};
}
export const QuerySkippedEpochsRequest = {
  typeUrl: "/evmos.inflation.v1.QuerySkippedEpochsRequest",
  encode(_: QuerySkippedEpochsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySkippedEpochsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySkippedEpochsRequest();
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
  fromJSON(_: any): QuerySkippedEpochsRequest {
    return {};
  },
  toJSON(_: QuerySkippedEpochsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QuerySkippedEpochsRequest>): QuerySkippedEpochsRequest {
    const message = createBaseQuerySkippedEpochsRequest();
    return message;
  },
  fromAmino(_: QuerySkippedEpochsRequestAmino): QuerySkippedEpochsRequest {
    return {};
  },
  toAmino(_: QuerySkippedEpochsRequest): QuerySkippedEpochsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySkippedEpochsRequestAminoMsg): QuerySkippedEpochsRequest {
    return QuerySkippedEpochsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySkippedEpochsRequestProtoMsg): QuerySkippedEpochsRequest {
    return QuerySkippedEpochsRequest.decode(message.value);
  },
  toProto(message: QuerySkippedEpochsRequest): Uint8Array {
    return QuerySkippedEpochsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySkippedEpochsRequest): QuerySkippedEpochsRequestProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QuerySkippedEpochsRequest",
      value: QuerySkippedEpochsRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySkippedEpochsResponse(): QuerySkippedEpochsResponse {
  return {
    skippedEpochs: Long.UZERO
  };
}
export const QuerySkippedEpochsResponse = {
  typeUrl: "/evmos.inflation.v1.QuerySkippedEpochsResponse",
  encode(message: QuerySkippedEpochsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.skippedEpochs.isZero()) {
      writer.uint32(8).uint64(message.skippedEpochs);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySkippedEpochsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySkippedEpochsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.skippedEpochs = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySkippedEpochsResponse {
    return {
      skippedEpochs: isSet(object.skippedEpochs) ? Long.fromValue(object.skippedEpochs) : Long.UZERO
    };
  },
  toJSON(message: QuerySkippedEpochsResponse): unknown {
    const obj: any = {};
    message.skippedEpochs !== undefined && (obj.skippedEpochs = (message.skippedEpochs || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QuerySkippedEpochsResponse>): QuerySkippedEpochsResponse {
    const message = createBaseQuerySkippedEpochsResponse();
    message.skippedEpochs = object.skippedEpochs !== undefined && object.skippedEpochs !== null ? Long.fromValue(object.skippedEpochs) : Long.UZERO;
    return message;
  },
  fromAmino(object: QuerySkippedEpochsResponseAmino): QuerySkippedEpochsResponse {
    return {
      skippedEpochs: Long.fromString(object.skipped_epochs)
    };
  },
  toAmino(message: QuerySkippedEpochsResponse): QuerySkippedEpochsResponseAmino {
    const obj: any = {};
    obj.skipped_epochs = message.skippedEpochs ? message.skippedEpochs.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySkippedEpochsResponseAminoMsg): QuerySkippedEpochsResponse {
    return QuerySkippedEpochsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySkippedEpochsResponseProtoMsg): QuerySkippedEpochsResponse {
    return QuerySkippedEpochsResponse.decode(message.value);
  },
  toProto(message: QuerySkippedEpochsResponse): Uint8Array {
    return QuerySkippedEpochsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySkippedEpochsResponse): QuerySkippedEpochsResponseProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QuerySkippedEpochsResponse",
      value: QuerySkippedEpochsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCirculatingSupplyRequest(): QueryCirculatingSupplyRequest {
  return {};
}
export const QueryCirculatingSupplyRequest = {
  typeUrl: "/evmos.inflation.v1.QueryCirculatingSupplyRequest",
  encode(_: QueryCirculatingSupplyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCirculatingSupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCirculatingSupplyRequest();
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
  fromJSON(_: any): QueryCirculatingSupplyRequest {
    return {};
  },
  toJSON(_: QueryCirculatingSupplyRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryCirculatingSupplyRequest>): QueryCirculatingSupplyRequest {
    const message = createBaseQueryCirculatingSupplyRequest();
    return message;
  },
  fromAmino(_: QueryCirculatingSupplyRequestAmino): QueryCirculatingSupplyRequest {
    return {};
  },
  toAmino(_: QueryCirculatingSupplyRequest): QueryCirculatingSupplyRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCirculatingSupplyRequestAminoMsg): QueryCirculatingSupplyRequest {
    return QueryCirculatingSupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCirculatingSupplyRequestProtoMsg): QueryCirculatingSupplyRequest {
    return QueryCirculatingSupplyRequest.decode(message.value);
  },
  toProto(message: QueryCirculatingSupplyRequest): Uint8Array {
    return QueryCirculatingSupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCirculatingSupplyRequest): QueryCirculatingSupplyRequestProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QueryCirculatingSupplyRequest",
      value: QueryCirculatingSupplyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCirculatingSupplyResponse(): QueryCirculatingSupplyResponse {
  return {
    circulatingSupply: DecCoin.fromPartial({})
  };
}
export const QueryCirculatingSupplyResponse = {
  typeUrl: "/evmos.inflation.v1.QueryCirculatingSupplyResponse",
  encode(message: QueryCirculatingSupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.circulatingSupply !== undefined) {
      DecCoin.encode(message.circulatingSupply, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCirculatingSupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCirculatingSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.circulatingSupply = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCirculatingSupplyResponse {
    return {
      circulatingSupply: isSet(object.circulatingSupply) ? DecCoin.fromJSON(object.circulatingSupply) : undefined
    };
  },
  toJSON(message: QueryCirculatingSupplyResponse): unknown {
    const obj: any = {};
    message.circulatingSupply !== undefined && (obj.circulatingSupply = message.circulatingSupply ? DecCoin.toJSON(message.circulatingSupply) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryCirculatingSupplyResponse>): QueryCirculatingSupplyResponse {
    const message = createBaseQueryCirculatingSupplyResponse();
    message.circulatingSupply = object.circulatingSupply !== undefined && object.circulatingSupply !== null ? DecCoin.fromPartial(object.circulatingSupply) : undefined;
    return message;
  },
  fromAmino(object: QueryCirculatingSupplyResponseAmino): QueryCirculatingSupplyResponse {
    return {
      circulatingSupply: object?.circulating_supply ? DecCoin.fromAmino(object.circulating_supply) : undefined
    };
  },
  toAmino(message: QueryCirculatingSupplyResponse): QueryCirculatingSupplyResponseAmino {
    const obj: any = {};
    obj.circulating_supply = message.circulatingSupply ? DecCoin.toAmino(message.circulatingSupply) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCirculatingSupplyResponseAminoMsg): QueryCirculatingSupplyResponse {
    return QueryCirculatingSupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCirculatingSupplyResponseProtoMsg): QueryCirculatingSupplyResponse {
    return QueryCirculatingSupplyResponse.decode(message.value);
  },
  toProto(message: QueryCirculatingSupplyResponse): Uint8Array {
    return QueryCirculatingSupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCirculatingSupplyResponse): QueryCirculatingSupplyResponseProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QueryCirculatingSupplyResponse",
      value: QueryCirculatingSupplyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInflationRateRequest(): QueryInflationRateRequest {
  return {};
}
export const QueryInflationRateRequest = {
  typeUrl: "/evmos.inflation.v1.QueryInflationRateRequest",
  encode(_: QueryInflationRateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInflationRateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInflationRateRequest();
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
  fromJSON(_: any): QueryInflationRateRequest {
    return {};
  },
  toJSON(_: QueryInflationRateRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryInflationRateRequest>): QueryInflationRateRequest {
    const message = createBaseQueryInflationRateRequest();
    return message;
  },
  fromAmino(_: QueryInflationRateRequestAmino): QueryInflationRateRequest {
    return {};
  },
  toAmino(_: QueryInflationRateRequest): QueryInflationRateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryInflationRateRequestAminoMsg): QueryInflationRateRequest {
    return QueryInflationRateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInflationRateRequestProtoMsg): QueryInflationRateRequest {
    return QueryInflationRateRequest.decode(message.value);
  },
  toProto(message: QueryInflationRateRequest): Uint8Array {
    return QueryInflationRateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInflationRateRequest): QueryInflationRateRequestProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QueryInflationRateRequest",
      value: QueryInflationRateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInflationRateResponse(): QueryInflationRateResponse {
  return {
    inflationRate: ""
  };
}
export const QueryInflationRateResponse = {
  typeUrl: "/evmos.inflation.v1.QueryInflationRateResponse",
  encode(message: QueryInflationRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflationRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.inflationRate, 18).atomics);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInflationRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInflationRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflationRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInflationRateResponse {
    return {
      inflationRate: isSet(object.inflationRate) ? String(object.inflationRate) : ""
    };
  },
  toJSON(message: QueryInflationRateResponse): unknown {
    const obj: any = {};
    message.inflationRate !== undefined && (obj.inflationRate = message.inflationRate);
    return obj;
  },
  fromPartial(object: Partial<QueryInflationRateResponse>): QueryInflationRateResponse {
    const message = createBaseQueryInflationRateResponse();
    message.inflationRate = object.inflationRate ?? "";
    return message;
  },
  fromAmino(object: QueryInflationRateResponseAmino): QueryInflationRateResponse {
    return {
      inflationRate: object.inflation_rate
    };
  },
  toAmino(message: QueryInflationRateResponse): QueryInflationRateResponseAmino {
    const obj: any = {};
    obj.inflation_rate = message.inflationRate;
    return obj;
  },
  fromAminoMsg(object: QueryInflationRateResponseAminoMsg): QueryInflationRateResponse {
    return QueryInflationRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInflationRateResponseProtoMsg): QueryInflationRateResponse {
    return QueryInflationRateResponse.decode(message.value);
  },
  toProto(message: QueryInflationRateResponse): Uint8Array {
    return QueryInflationRateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInflationRateResponse): QueryInflationRateResponseProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QueryInflationRateResponse",
      value: QueryInflationRateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/evmos.inflation.v1.QueryParamsRequest",
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
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QueryParamsRequest",
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
  typeUrl: "/evmos.inflation.v1.QueryParamsResponse",
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
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Period retrieves current period. */
  Period(request?: QueryPeriodRequest): Promise<QueryPeriodResponse>;
  /** EpochMintProvision retrieves current minting epoch provision value. */
  EpochMintProvision(request?: QueryEpochMintProvisionRequest): Promise<QueryEpochMintProvisionResponse>;
  /** SkippedEpochs retrieves the total number of skipped epochs. */
  SkippedEpochs(request?: QuerySkippedEpochsRequest): Promise<QuerySkippedEpochsResponse>;
  /**
   * CirculatingSupply retrieves the total number of tokens that are in
   * circulation (i.e. excluding unvested tokens).
   */
  CirculatingSupply(request?: QueryCirculatingSupplyRequest): Promise<QueryCirculatingSupplyResponse>;
  /** InflationRate retrieves the inflation rate of the current period. */
  InflationRate(request?: QueryInflationRateRequest): Promise<QueryInflationRateResponse>;
  /** Params retrieves the total set of minting parameters. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Period = this.Period.bind(this);
    this.EpochMintProvision = this.EpochMintProvision.bind(this);
    this.SkippedEpochs = this.SkippedEpochs.bind(this);
    this.CirculatingSupply = this.CirculatingSupply.bind(this);
    this.InflationRate = this.InflationRate.bind(this);
    this.Params = this.Params.bind(this);
  }
  Period(request: QueryPeriodRequest = {}): Promise<QueryPeriodResponse> {
    const data = QueryPeriodRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.inflation.v1.Query", "Period", data);
    return promise.then(data => QueryPeriodResponse.decode(new _m0.Reader(data)));
  }
  EpochMintProvision(request: QueryEpochMintProvisionRequest = {}): Promise<QueryEpochMintProvisionResponse> {
    const data = QueryEpochMintProvisionRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.inflation.v1.Query", "EpochMintProvision", data);
    return promise.then(data => QueryEpochMintProvisionResponse.decode(new _m0.Reader(data)));
  }
  SkippedEpochs(request: QuerySkippedEpochsRequest = {}): Promise<QuerySkippedEpochsResponse> {
    const data = QuerySkippedEpochsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.inflation.v1.Query", "SkippedEpochs", data);
    return promise.then(data => QuerySkippedEpochsResponse.decode(new _m0.Reader(data)));
  }
  CirculatingSupply(request: QueryCirculatingSupplyRequest = {}): Promise<QueryCirculatingSupplyResponse> {
    const data = QueryCirculatingSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.inflation.v1.Query", "CirculatingSupply", data);
    return promise.then(data => QueryCirculatingSupplyResponse.decode(new _m0.Reader(data)));
  }
  InflationRate(request: QueryInflationRateRequest = {}): Promise<QueryInflationRateResponse> {
    const data = QueryInflationRateRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.inflation.v1.Query", "InflationRate", data);
    return promise.then(data => QueryInflationRateResponse.decode(new _m0.Reader(data)));
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.inflation.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
}