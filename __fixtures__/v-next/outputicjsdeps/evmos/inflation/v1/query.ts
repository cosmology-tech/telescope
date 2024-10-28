import { DecCoin, DecCoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryPeriodRequest is the request type for the Query/Period RPC method. */
export interface QueryPeriodRequest {}
export interface QueryPeriodRequestProtoMsg {
  typeUrl: "/evmos.inflation.v1.QueryPeriodRequest";
  value: Uint8Array;
}
/** QueryPeriodRequest is the request type for the Query/Period RPC method. */
export interface QueryPeriodRequestAmino {}
export interface QueryPeriodRequestAminoMsg {
  type: "/evmos.inflation.v1.QueryPeriodRequest";
  value: QueryPeriodRequestAmino;
}
/** QueryPeriodResponse is the response type for the Query/Period RPC method. */
export interface QueryPeriodResponse {
  /** period is the current minting per epoch provision value. */
  period: bigint;
}
export interface QueryPeriodResponseProtoMsg {
  typeUrl: "/evmos.inflation.v1.QueryPeriodResponse";
  value: Uint8Array;
}
/** QueryPeriodResponse is the response type for the Query/Period RPC method. */
export interface QueryPeriodResponseAmino {
  /** period is the current minting per epoch provision value. */
  period: string;
}
export interface QueryPeriodResponseAminoMsg {
  type: "/evmos.inflation.v1.QueryPeriodResponse";
  value: QueryPeriodResponseAmino;
}
/**
 * QueryEpochMintProvisionRequest is the request type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionRequest {}
export interface QueryEpochMintProvisionRequestProtoMsg {
  typeUrl: "/evmos.inflation.v1.QueryEpochMintProvisionRequest";
  value: Uint8Array;
}
/**
 * QueryEpochMintProvisionRequest is the request type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionRequestAmino {}
export interface QueryEpochMintProvisionRequestAminoMsg {
  type: "/evmos.inflation.v1.QueryEpochMintProvisionRequest";
  value: QueryEpochMintProvisionRequestAmino;
}
/**
 * QueryEpochMintProvisionResponse is the response type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionResponse {
  /** epoch_mint_provision is the current minting per epoch provision value. */
  epochMintProvision: DecCoin;
}
export interface QueryEpochMintProvisionResponseProtoMsg {
  typeUrl: "/evmos.inflation.v1.QueryEpochMintProvisionResponse";
  value: Uint8Array;
}
/**
 * QueryEpochMintProvisionResponse is the response type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionResponseAmino {
  /** epoch_mint_provision is the current minting per epoch provision value. */
  epoch_mint_provision: DecCoinAmino;
}
export interface QueryEpochMintProvisionResponseAminoMsg {
  type: "/evmos.inflation.v1.QueryEpochMintProvisionResponse";
  value: QueryEpochMintProvisionResponseAmino;
}
/**
 * QuerySkippedEpochsRequest is the request type for the Query/SkippedEpochs RPC
 * method.
 */
export interface QuerySkippedEpochsRequest {}
export interface QuerySkippedEpochsRequestProtoMsg {
  typeUrl: "/evmos.inflation.v1.QuerySkippedEpochsRequest";
  value: Uint8Array;
}
/**
 * QuerySkippedEpochsRequest is the request type for the Query/SkippedEpochs RPC
 * method.
 */
export interface QuerySkippedEpochsRequestAmino {}
export interface QuerySkippedEpochsRequestAminoMsg {
  type: "/evmos.inflation.v1.QuerySkippedEpochsRequest";
  value: QuerySkippedEpochsRequestAmino;
}
/**
 * QuerySkippedEpochsResponse is the response type for the Query/SkippedEpochs
 * RPC method.
 */
export interface QuerySkippedEpochsResponse {
  /** number of epochs that the inflation module has been disabled. */
  skippedEpochs: bigint;
}
export interface QuerySkippedEpochsResponseProtoMsg {
  typeUrl: "/evmos.inflation.v1.QuerySkippedEpochsResponse";
  value: Uint8Array;
}
/**
 * QuerySkippedEpochsResponse is the response type for the Query/SkippedEpochs
 * RPC method.
 */
export interface QuerySkippedEpochsResponseAmino {
  /** number of epochs that the inflation module has been disabled. */
  skipped_epochs: string;
}
export interface QuerySkippedEpochsResponseAminoMsg {
  type: "/evmos.inflation.v1.QuerySkippedEpochsResponse";
  value: QuerySkippedEpochsResponseAmino;
}
/**
 * QueryCirculatingSupplyRequest is the request type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyRequest {}
export interface QueryCirculatingSupplyRequestProtoMsg {
  typeUrl: "/evmos.inflation.v1.QueryCirculatingSupplyRequest";
  value: Uint8Array;
}
/**
 * QueryCirculatingSupplyRequest is the request type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyRequestAmino {}
export interface QueryCirculatingSupplyRequestAminoMsg {
  type: "/evmos.inflation.v1.QueryCirculatingSupplyRequest";
  value: QueryCirculatingSupplyRequestAmino;
}
/**
 * QueryCirculatingSupplyResponse is the response type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyResponse {
  /** total amount of coins in circulation */
  circulatingSupply: DecCoin;
}
export interface QueryCirculatingSupplyResponseProtoMsg {
  typeUrl: "/evmos.inflation.v1.QueryCirculatingSupplyResponse";
  value: Uint8Array;
}
/**
 * QueryCirculatingSupplyResponse is the response type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyResponseAmino {
  /** total amount of coins in circulation */
  circulating_supply: DecCoinAmino;
}
export interface QueryCirculatingSupplyResponseAminoMsg {
  type: "/evmos.inflation.v1.QueryCirculatingSupplyResponse";
  value: QueryCirculatingSupplyResponseAmino;
}
/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequest {}
export interface QueryInflationRateRequestProtoMsg {
  typeUrl: "/evmos.inflation.v1.QueryInflationRateRequest";
  value: Uint8Array;
}
/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequestAmino {}
export interface QueryInflationRateRequestAminoMsg {
  type: "/evmos.inflation.v1.QueryInflationRateRequest";
  value: QueryInflationRateRequestAmino;
}
/**
 * QueryInflationRateResponse is the response type for the Query/InflationRate
 * RPC method.
 */
export interface QueryInflationRateResponse {
  /** rate by which the total supply increases within one period */
  inflationRate: string;
}
export interface QueryInflationRateResponseProtoMsg {
  typeUrl: "/evmos.inflation.v1.QueryInflationRateResponse";
  value: Uint8Array;
}
/**
 * QueryInflationRateResponse is the response type for the Query/InflationRate
 * RPC method.
 */
export interface QueryInflationRateResponseAmino {
  /** rate by which the total supply increases within one period */
  inflation_rate: string;
}
export interface QueryInflationRateResponseAminoMsg {
  type: "/evmos.inflation.v1.QueryInflationRateResponse";
  value: QueryInflationRateResponseAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/evmos.inflation.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/evmos.inflation.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/evmos.inflation.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/evmos.inflation.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
function createBaseQueryPeriodRequest(): QueryPeriodRequest {
  return {};
}
export const QueryPeriodRequest = {
  typeUrl: "/evmos.inflation.v1.QueryPeriodRequest",
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
  fromPartial(_: DeepPartial<QueryPeriodRequest>): QueryPeriodRequest {
    const message = createBaseQueryPeriodRequest();
    return message;
  },
  fromAmino(_: QueryPeriodRequestAmino): QueryPeriodRequest {
    const message = createBaseQueryPeriodRequest();
    return message;
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
    period: BigInt(0)
  };
}
export const QueryPeriodResponse = {
  typeUrl: "/evmos.inflation.v1.QueryPeriodResponse",
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
  fromPartial(object: DeepPartial<QueryPeriodResponse>): QueryPeriodResponse {
    const message = createBaseQueryPeriodResponse();
    message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPeriodResponseAmino): QueryPeriodResponse {
    const message = createBaseQueryPeriodResponse();
    if (object.period !== undefined && object.period !== null) {
      message.period = BigInt(object.period);
    }
    return message;
  },
  toAmino(message: QueryPeriodResponse): QueryPeriodResponseAmino {
    const obj: any = {};
    obj.period = message.period !== BigInt(0) ? message.period?.toString() : undefined;
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
  fromPartial(_: DeepPartial<QueryEpochMintProvisionRequest>): QueryEpochMintProvisionRequest {
    const message = createBaseQueryEpochMintProvisionRequest();
    return message;
  },
  fromAmino(_: QueryEpochMintProvisionRequestAmino): QueryEpochMintProvisionRequest {
    const message = createBaseQueryEpochMintProvisionRequest();
    return message;
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
  fromPartial(object: DeepPartial<QueryEpochMintProvisionResponse>): QueryEpochMintProvisionResponse {
    const message = createBaseQueryEpochMintProvisionResponse();
    message.epochMintProvision = object.epochMintProvision !== undefined && object.epochMintProvision !== null ? DecCoin.fromPartial(object.epochMintProvision) : undefined;
    return message;
  },
  fromAmino(object: QueryEpochMintProvisionResponseAmino): QueryEpochMintProvisionResponse {
    const message = createBaseQueryEpochMintProvisionResponse();
    if (object.epoch_mint_provision !== undefined && object.epoch_mint_provision !== null) {
      message.epochMintProvision = DecCoin.fromAmino(object.epoch_mint_provision);
    }
    return message;
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
  fromPartial(_: DeepPartial<QuerySkippedEpochsRequest>): QuerySkippedEpochsRequest {
    const message = createBaseQuerySkippedEpochsRequest();
    return message;
  },
  fromAmino(_: QuerySkippedEpochsRequestAmino): QuerySkippedEpochsRequest {
    const message = createBaseQuerySkippedEpochsRequest();
    return message;
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
    skippedEpochs: BigInt(0)
  };
}
export const QuerySkippedEpochsResponse = {
  typeUrl: "/evmos.inflation.v1.QuerySkippedEpochsResponse",
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
  fromPartial(object: DeepPartial<QuerySkippedEpochsResponse>): QuerySkippedEpochsResponse {
    const message = createBaseQuerySkippedEpochsResponse();
    message.skippedEpochs = object.skippedEpochs !== undefined && object.skippedEpochs !== null ? BigInt(object.skippedEpochs.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySkippedEpochsResponseAmino): QuerySkippedEpochsResponse {
    const message = createBaseQuerySkippedEpochsResponse();
    if (object.skipped_epochs !== undefined && object.skipped_epochs !== null) {
      message.skippedEpochs = BigInt(object.skipped_epochs);
    }
    return message;
  },
  toAmino(message: QuerySkippedEpochsResponse): QuerySkippedEpochsResponseAmino {
    const obj: any = {};
    obj.skipped_epochs = message.skippedEpochs !== BigInt(0) ? message.skippedEpochs?.toString() : undefined;
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
  fromPartial(_: DeepPartial<QueryCirculatingSupplyRequest>): QueryCirculatingSupplyRequest {
    const message = createBaseQueryCirculatingSupplyRequest();
    return message;
  },
  fromAmino(_: QueryCirculatingSupplyRequestAmino): QueryCirculatingSupplyRequest {
    const message = createBaseQueryCirculatingSupplyRequest();
    return message;
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
  fromPartial(object: DeepPartial<QueryCirculatingSupplyResponse>): QueryCirculatingSupplyResponse {
    const message = createBaseQueryCirculatingSupplyResponse();
    message.circulatingSupply = object.circulatingSupply !== undefined && object.circulatingSupply !== null ? DecCoin.fromPartial(object.circulatingSupply) : undefined;
    return message;
  },
  fromAmino(object: QueryCirculatingSupplyResponseAmino): QueryCirculatingSupplyResponse {
    const message = createBaseQueryCirculatingSupplyResponse();
    if (object.circulating_supply !== undefined && object.circulating_supply !== null) {
      message.circulatingSupply = DecCoin.fromAmino(object.circulating_supply);
    }
    return message;
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
  fromPartial(_: DeepPartial<QueryInflationRateRequest>): QueryInflationRateRequest {
    const message = createBaseQueryInflationRateRequest();
    return message;
  },
  fromAmino(_: QueryInflationRateRequestAmino): QueryInflationRateRequest {
    const message = createBaseQueryInflationRateRequest();
    return message;
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
  encode(message: QueryInflationRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inflationRate !== "") {
      writer.uint32(10).string(message.inflationRate);
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
          message.inflationRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryInflationRateResponse>): QueryInflationRateResponse {
    const message = createBaseQueryInflationRateResponse();
    message.inflationRate = object.inflationRate ?? "";
    return message;
  },
  fromAmino(object: QueryInflationRateResponseAmino): QueryInflationRateResponse {
    const message = createBaseQueryInflationRateResponse();
    if (object.inflation_rate !== undefined && object.inflation_rate !== null) {
      message.inflationRate = object.inflation_rate;
    }
    return message;
  },
  toAmino(message: QueryInflationRateResponse): QueryInflationRateResponseAmino {
    const obj: any = {};
    obj.inflation_rate = message.inflationRate === "" ? undefined : message.inflationRate;
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
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
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
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
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
      typeUrl: "/evmos.inflation.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};