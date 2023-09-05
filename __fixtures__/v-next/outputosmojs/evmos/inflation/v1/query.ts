import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "evmos.inflation.v1";
/** QueryPeriodRequest is the request type for the Query/Period RPC method. */
export interface QueryPeriodRequest {}
/** QueryPeriodRequest is the request type for the Query/Period RPC method. */
export interface QueryPeriodRequestSDKType {}
/** QueryPeriodResponse is the response type for the Query/Period RPC method. */
export interface QueryPeriodResponse {
  /** period is the current minting per epoch provision value. */
  period: bigint;
}
/** QueryPeriodResponse is the response type for the Query/Period RPC method. */
export interface QueryPeriodResponseSDKType {
  period: bigint;
}
/**
 * QueryEpochMintProvisionRequest is the request type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionRequest {}
/**
 * QueryEpochMintProvisionRequest is the request type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionRequestSDKType {}
/**
 * QueryEpochMintProvisionResponse is the response type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionResponse {
  /** epoch_mint_provision is the current minting per epoch provision value. */
  epochMintProvision: DecCoin;
}
/**
 * QueryEpochMintProvisionResponse is the response type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionResponseSDKType {
  epoch_mint_provision: DecCoinSDKType;
}
/**
 * QuerySkippedEpochsRequest is the request type for the Query/SkippedEpochs RPC
 * method.
 */
export interface QuerySkippedEpochsRequest {}
/**
 * QuerySkippedEpochsRequest is the request type for the Query/SkippedEpochs RPC
 * method.
 */
export interface QuerySkippedEpochsRequestSDKType {}
/**
 * QuerySkippedEpochsResponse is the response type for the Query/SkippedEpochs
 * RPC method.
 */
export interface QuerySkippedEpochsResponse {
  /** number of epochs that the inflation module has been disabled. */
  skippedEpochs: bigint;
}
/**
 * QuerySkippedEpochsResponse is the response type for the Query/SkippedEpochs
 * RPC method.
 */
export interface QuerySkippedEpochsResponseSDKType {
  skipped_epochs: bigint;
}
/**
 * QueryCirculatingSupplyRequest is the request type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyRequest {}
/**
 * QueryCirculatingSupplyRequest is the request type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyRequestSDKType {}
/**
 * QueryCirculatingSupplyResponse is the response type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyResponse {
  /** total amount of coins in circulation */
  circulatingSupply: DecCoin;
}
/**
 * QueryCirculatingSupplyResponse is the response type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyResponseSDKType {
  circulating_supply: DecCoinSDKType;
}
/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequest {}
/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequestSDKType {}
/**
 * QueryInflationRateResponse is the response type for the Query/InflationRate
 * RPC method.
 */
export interface QueryInflationRateResponse {
  /** rate by which the total supply increases within one period */
  inflationRate: string;
}
/**
 * QueryInflationRateResponse is the response type for the Query/InflationRate
 * RPC method.
 */
export interface QueryInflationRateResponseSDKType {
  inflation_rate: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryPeriodRequest(): QueryPeriodRequest {
  return {};
}
export const QueryPeriodRequest = {
  encode(_: QueryPeriodRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPeriodRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromSDK(_: QueryPeriodRequestSDKType): QueryPeriodRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryPeriodRequestSDKType {
    return {};
  },
  toSDK(_: QueryPeriodRequest): QueryPeriodRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryPeriodResponse(): QueryPeriodResponse {
  return {
    period: BigInt(0)
  };
}
export const QueryPeriodResponse = {
  encode(message: QueryPeriodResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.period !== BigInt(0)) {
      writer.uint32(8).uint64(message.period);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPeriodResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPeriodResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.period = reader.uint64();
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
      period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryPeriodResponse): unknown {
    const obj: any = {};
    message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPeriodResponse>): QueryPeriodResponse {
    const message = createBaseQueryPeriodResponse();
    message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryPeriodResponseSDKType): QueryPeriodResponse {
    return {
      period: object?.period
    };
  },
  fromSDKJSON(object: any): QueryPeriodResponseSDKType {
    return {
      period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt(0)
    };
  },
  toSDK(message: QueryPeriodResponse): QueryPeriodResponseSDKType {
    const obj: any = {};
    obj.period = message.period;
    return obj;
  }
};
function createBaseQueryEpochMintProvisionRequest(): QueryEpochMintProvisionRequest {
  return {};
}
export const QueryEpochMintProvisionRequest = {
  encode(_: QueryEpochMintProvisionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochMintProvisionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromSDK(_: QueryEpochMintProvisionRequestSDKType): QueryEpochMintProvisionRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryEpochMintProvisionRequestSDKType {
    return {};
  },
  toSDK(_: QueryEpochMintProvisionRequest): QueryEpochMintProvisionRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryEpochMintProvisionResponse(): QueryEpochMintProvisionResponse {
  return {
    epochMintProvision: DecCoin.fromPartial({})
  };
}
export const QueryEpochMintProvisionResponse = {
  encode(message: QueryEpochMintProvisionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochMintProvision !== undefined) {
      DecCoin.encode(message.epochMintProvision, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochMintProvisionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    message.epochMintProvision = object.epochMintProvision !== undefined && object.epochMintProvision !== null ? DecCoin.fromPartial(object.epochMintProvision) : undefined;
    return message;
  },
  fromSDK(object: QueryEpochMintProvisionResponseSDKType): QueryEpochMintProvisionResponse {
    return {
      epochMintProvision: object.epoch_mint_provision ? DecCoin.fromSDK(object.epoch_mint_provision) : undefined
    };
  },
  fromSDKJSON(object: any): QueryEpochMintProvisionResponseSDKType {
    return {
      epoch_mint_provision: isSet(object.epoch_mint_provision) ? DecCoin.fromSDKJSON(object.epoch_mint_provision) : undefined
    };
  },
  toSDK(message: QueryEpochMintProvisionResponse): QueryEpochMintProvisionResponseSDKType {
    const obj: any = {};
    message.epochMintProvision !== undefined && (obj.epoch_mint_provision = message.epochMintProvision ? DecCoin.toSDK(message.epochMintProvision) : undefined);
    return obj;
  }
};
function createBaseQuerySkippedEpochsRequest(): QuerySkippedEpochsRequest {
  return {};
}
export const QuerySkippedEpochsRequest = {
  encode(_: QuerySkippedEpochsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySkippedEpochsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromSDK(_: QuerySkippedEpochsRequestSDKType): QuerySkippedEpochsRequest {
    return {};
  },
  fromSDKJSON(_: any): QuerySkippedEpochsRequestSDKType {
    return {};
  },
  toSDK(_: QuerySkippedEpochsRequest): QuerySkippedEpochsRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQuerySkippedEpochsResponse(): QuerySkippedEpochsResponse {
  return {
    skippedEpochs: BigInt(0)
  };
}
export const QuerySkippedEpochsResponse = {
  encode(message: QuerySkippedEpochsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.skippedEpochs !== BigInt(0)) {
      writer.uint32(8).uint64(message.skippedEpochs);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySkippedEpochsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySkippedEpochsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.skippedEpochs = reader.uint64();
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
      skippedEpochs: isSet(object.skippedEpochs) ? BigInt(object.skippedEpochs.toString()) : BigInt(0)
    };
  },
  toJSON(message: QuerySkippedEpochsResponse): unknown {
    const obj: any = {};
    message.skippedEpochs !== undefined && (obj.skippedEpochs = (message.skippedEpochs || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySkippedEpochsResponse>): QuerySkippedEpochsResponse {
    const message = createBaseQuerySkippedEpochsResponse();
    message.skippedEpochs = object.skippedEpochs !== undefined && object.skippedEpochs !== null ? BigInt(object.skippedEpochs.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QuerySkippedEpochsResponseSDKType): QuerySkippedEpochsResponse {
    return {
      skippedEpochs: object?.skipped_epochs
    };
  },
  fromSDKJSON(object: any): QuerySkippedEpochsResponseSDKType {
    return {
      skipped_epochs: isSet(object.skipped_epochs) ? BigInt(object.skipped_epochs.toString()) : BigInt(0)
    };
  },
  toSDK(message: QuerySkippedEpochsResponse): QuerySkippedEpochsResponseSDKType {
    const obj: any = {};
    obj.skipped_epochs = message.skippedEpochs;
    return obj;
  }
};
function createBaseQueryCirculatingSupplyRequest(): QueryCirculatingSupplyRequest {
  return {};
}
export const QueryCirculatingSupplyRequest = {
  encode(_: QueryCirculatingSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCirculatingSupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromSDK(_: QueryCirculatingSupplyRequestSDKType): QueryCirculatingSupplyRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryCirculatingSupplyRequestSDKType {
    return {};
  },
  toSDK(_: QueryCirculatingSupplyRequest): QueryCirculatingSupplyRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryCirculatingSupplyResponse(): QueryCirculatingSupplyResponse {
  return {
    circulatingSupply: DecCoin.fromPartial({})
  };
}
export const QueryCirculatingSupplyResponse = {
  encode(message: QueryCirculatingSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.circulatingSupply !== undefined) {
      DecCoin.encode(message.circulatingSupply, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCirculatingSupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    message.circulatingSupply = object.circulatingSupply !== undefined && object.circulatingSupply !== null ? DecCoin.fromPartial(object.circulatingSupply) : undefined;
    return message;
  },
  fromSDK(object: QueryCirculatingSupplyResponseSDKType): QueryCirculatingSupplyResponse {
    return {
      circulatingSupply: object.circulating_supply ? DecCoin.fromSDK(object.circulating_supply) : undefined
    };
  },
  fromSDKJSON(object: any): QueryCirculatingSupplyResponseSDKType {
    return {
      circulating_supply: isSet(object.circulating_supply) ? DecCoin.fromSDKJSON(object.circulating_supply) : undefined
    };
  },
  toSDK(message: QueryCirculatingSupplyResponse): QueryCirculatingSupplyResponseSDKType {
    const obj: any = {};
    message.circulatingSupply !== undefined && (obj.circulating_supply = message.circulatingSupply ? DecCoin.toSDK(message.circulatingSupply) : undefined);
    return obj;
  }
};
function createBaseQueryInflationRateRequest(): QueryInflationRateRequest {
  return {};
}
export const QueryInflationRateRequest = {
  encode(_: QueryInflationRateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInflationRateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromSDK(_: QueryInflationRateRequestSDKType): QueryInflationRateRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryInflationRateRequestSDKType {
    return {};
  },
  toSDK(_: QueryInflationRateRequest): QueryInflationRateRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryInflationRateResponse(): QueryInflationRateResponse {
  return {
    inflationRate: ""
  };
}
export const QueryInflationRateResponse = {
  encode(message: QueryInflationRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inflationRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.inflationRate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInflationRateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: DeepPartial<QueryInflationRateResponse>): QueryInflationRateResponse {
    const message = createBaseQueryInflationRateResponse();
    message.inflationRate = object.inflationRate ?? "";
    return message;
  },
  fromSDK(object: QueryInflationRateResponseSDKType): QueryInflationRateResponse {
    return {
      inflationRate: object?.inflation_rate
    };
  },
  fromSDKJSON(object: any): QueryInflationRateResponseSDKType {
    return {
      inflation_rate: isSet(object.inflation_rate) ? String(object.inflation_rate) : ""
    };
  },
  toSDK(message: QueryInflationRateResponse): QueryInflationRateResponseSDKType {
    const obj: any = {};
    obj.inflation_rate = message.inflationRate;
    return obj;
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
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
  fromSDKJSON(_: any): QueryParamsRequestSDKType {
    return {};
  },
  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
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
  fromSDKJSON(object: any): QueryParamsResponseSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  }
};