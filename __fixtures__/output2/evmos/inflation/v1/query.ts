//@ts-nocheck
/* eslint-disable */
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";
import { Long, DeepPartial, isSet, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
  fromPartial(_: DeepPartial<QueryPeriodRequest>): QueryPeriodRequest {
    const message = createBaseQueryPeriodRequest();
    return message;
  }
};
function createBaseQueryPeriodResponse(): QueryPeriodResponse {
  return {
    period: Long.UZERO
  };
}
export const QueryPeriodResponse = {
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
  fromPartial(object: DeepPartial<QueryPeriodResponse>): QueryPeriodResponse {
    const message = createBaseQueryPeriodResponse();
    message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
    return message;
  }
};
function createBaseQueryEpochMintProvisionRequest(): QueryEpochMintProvisionRequest {
  return {};
}
export const QueryEpochMintProvisionRequest = {
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
  fromPartial(_: DeepPartial<QueryEpochMintProvisionRequest>): QueryEpochMintProvisionRequest {
    const message = createBaseQueryEpochMintProvisionRequest();
    return message;
  }
};
function createBaseQueryEpochMintProvisionResponse(): QueryEpochMintProvisionResponse {
  return {
    epochMintProvision: DecCoin.fromPartial({})
  };
}
export const QueryEpochMintProvisionResponse = {
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
  fromPartial(object: DeepPartial<QueryEpochMintProvisionResponse>): QueryEpochMintProvisionResponse {
    const message = createBaseQueryEpochMintProvisionResponse();
    message.epochMintProvision = object.epochMintProvision !== undefined && object.epochMintProvision !== null ? DecCoin.fromPartial(object.epochMintProvision) : DecCoin.fromPartial({});
    return message;
  }
};
function createBaseQuerySkippedEpochsRequest(): QuerySkippedEpochsRequest {
  return {};
}
export const QuerySkippedEpochsRequest = {
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
  fromPartial(_: DeepPartial<QuerySkippedEpochsRequest>): QuerySkippedEpochsRequest {
    const message = createBaseQuerySkippedEpochsRequest();
    return message;
  }
};
function createBaseQuerySkippedEpochsResponse(): QuerySkippedEpochsResponse {
  return {
    skippedEpochs: Long.UZERO
  };
}
export const QuerySkippedEpochsResponse = {
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
  fromPartial(object: DeepPartial<QuerySkippedEpochsResponse>): QuerySkippedEpochsResponse {
    const message = createBaseQuerySkippedEpochsResponse();
    message.skippedEpochs = object.skippedEpochs !== undefined && object.skippedEpochs !== null ? Long.fromValue(object.skippedEpochs) : Long.UZERO;
    return message;
  }
};
function createBaseQueryCirculatingSupplyRequest(): QueryCirculatingSupplyRequest {
  return {};
}
export const QueryCirculatingSupplyRequest = {
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
  fromPartial(_: DeepPartial<QueryCirculatingSupplyRequest>): QueryCirculatingSupplyRequest {
    const message = createBaseQueryCirculatingSupplyRequest();
    return message;
  }
};
function createBaseQueryCirculatingSupplyResponse(): QueryCirculatingSupplyResponse {
  return {
    circulatingSupply: DecCoin.fromPartial({})
  };
}
export const QueryCirculatingSupplyResponse = {
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
  fromPartial(object: DeepPartial<QueryCirculatingSupplyResponse>): QueryCirculatingSupplyResponse {
    const message = createBaseQueryCirculatingSupplyResponse();
    message.circulatingSupply = object.circulatingSupply !== undefined && object.circulatingSupply !== null ? DecCoin.fromPartial(object.circulatingSupply) : DecCoin.fromPartial({});
    return message;
  }
};
function createBaseQueryInflationRateRequest(): QueryInflationRateRequest {
  return {};
}
export const QueryInflationRateRequest = {
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
  fromPartial(_: DeepPartial<QueryInflationRateRequest>): QueryInflationRateRequest {
    const message = createBaseQueryInflationRateRequest();
    return message;
  }
};
function createBaseQueryInflationRateResponse(): QueryInflationRateResponse {
  return {
    inflationRate: ""
  };
}
export const QueryInflationRateResponse = {
  encode(message: QueryInflationRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflationRate !== "") {
      writer.uint32(10).string(message.inflationRate);
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
          message.inflationRate = reader.string();
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
  fromPartial(object: DeepPartial<QueryInflationRateResponse>): QueryInflationRateResponse {
    const message = createBaseQueryInflationRateResponse();
    message.inflationRate = object.inflationRate ?? "";
    return message;
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
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
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
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : Params.fromPartial({});
    return message;
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