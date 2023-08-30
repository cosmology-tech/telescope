//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";
import { ClaimsRecordAddress, Claim } from "./claims";
import * as _m0 from "protobufjs/minimal";
import { isSet, Rpc } from "../../../helpers";
export const protobufPackage = "evmos.claims.v1";
/**
 * QueryTotalUnclaimedRequest is the request type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedRequest {}
/**
 * QueryTotalUnclaimedResponse is the response type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedResponse {
  /** coins defines the unclaimed coins */
  coins: Coin[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
/**
 * QueryClaimsRecordsRequest is the request type for the Query/ClaimsRecords RPC
 * method.
 */
export interface QueryClaimsRecordsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/**
 * QueryClaimsRecordsResponse is the response type for the Query/ClaimsRecords
 * RPC method.
 */
export interface QueryClaimsRecordsResponse {
  /** claims defines all claims records */
  claims: ClaimsRecordAddress[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/**
 * QueryClaimsRecordRequest is the request type for the Query/ClaimsRecord RPC
 * method.
 */
export interface QueryClaimsRecordRequest {
  /** address defines the user to query claims record for */
  address: string;
}
/**
 * QueryClaimsRecordResponse is the response type for the Query/ClaimsRecord RPC
 * method.
 */
export interface QueryClaimsRecordResponse {
  /** total initial claimable amount for the user */
  initialClaimableAmount: string;
  /** the claims of the user */
  claims: Claim[];
}
function createBaseQueryTotalUnclaimedRequest(): QueryTotalUnclaimedRequest {
  return {};
}
export const QueryTotalUnclaimedRequest = {
  typeUrl: "/evmos.claims.v1.QueryTotalUnclaimedRequest",
  encode(_: QueryTotalUnclaimedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalUnclaimedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalUnclaimedRequest();
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
  fromJSON(_: any): QueryTotalUnclaimedRequest {
    return {};
  },
  toJSON(_: QueryTotalUnclaimedRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryTotalUnclaimedRequest>): QueryTotalUnclaimedRequest {
    const message = createBaseQueryTotalUnclaimedRequest();
    return message;
  },
  fromAmino(_: QueryTotalUnclaimedRequestAmino): QueryTotalUnclaimedRequest {
    return {};
  },
  toAmino(_: QueryTotalUnclaimedRequest): QueryTotalUnclaimedRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalUnclaimedRequestAminoMsg): QueryTotalUnclaimedRequest {
    return QueryTotalUnclaimedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalUnclaimedRequestProtoMsg): QueryTotalUnclaimedRequest {
    return QueryTotalUnclaimedRequest.decode(message.value);
  },
  toProto(message: QueryTotalUnclaimedRequest): Uint8Array {
    return QueryTotalUnclaimedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalUnclaimedRequest): QueryTotalUnclaimedRequestProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryTotalUnclaimedRequest",
      value: QueryTotalUnclaimedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalUnclaimedResponse(): QueryTotalUnclaimedResponse {
  return {
    coins: []
  };
}
export const QueryTotalUnclaimedResponse = {
  typeUrl: "/evmos.claims.v1.QueryTotalUnclaimedResponse",
  encode(message: QueryTotalUnclaimedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalUnclaimedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalUnclaimedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalUnclaimedResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryTotalUnclaimedResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryTotalUnclaimedResponse>): QueryTotalUnclaimedResponse {
    const message = createBaseQueryTotalUnclaimedResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalUnclaimedResponseAmino): QueryTotalUnclaimedResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTotalUnclaimedResponse): QueryTotalUnclaimedResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalUnclaimedResponseAminoMsg): QueryTotalUnclaimedResponse {
    return QueryTotalUnclaimedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalUnclaimedResponseProtoMsg): QueryTotalUnclaimedResponse {
    return QueryTotalUnclaimedResponse.decode(message.value);
  },
  toProto(message: QueryTotalUnclaimedResponse): Uint8Array {
    return QueryTotalUnclaimedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalUnclaimedResponse): QueryTotalUnclaimedResponseProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryTotalUnclaimedResponse",
      value: QueryTotalUnclaimedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/evmos.claims.v1.QueryParamsRequest",
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
      typeUrl: "/evmos.claims.v1.QueryParamsRequest",
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
  typeUrl: "/evmos.claims.v1.QueryParamsResponse",
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
      typeUrl: "/evmos.claims.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClaimsRecordsRequest(): QueryClaimsRecordsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryClaimsRecordsRequest = {
  typeUrl: "/evmos.claims.v1.QueryClaimsRecordsRequest",
  encode(message: QueryClaimsRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimsRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimsRecordsRequest();
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
  fromJSON(object: any): QueryClaimsRecordsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryClaimsRecordsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryClaimsRecordsRequest>): QueryClaimsRecordsRequest {
    const message = createBaseQueryClaimsRecordsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClaimsRecordsRequestAmino): QueryClaimsRecordsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryClaimsRecordsRequest): QueryClaimsRecordsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClaimsRecordsRequestAminoMsg): QueryClaimsRecordsRequest {
    return QueryClaimsRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimsRecordsRequestProtoMsg): QueryClaimsRecordsRequest {
    return QueryClaimsRecordsRequest.decode(message.value);
  },
  toProto(message: QueryClaimsRecordsRequest): Uint8Array {
    return QueryClaimsRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimsRecordsRequest): QueryClaimsRecordsRequestProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryClaimsRecordsRequest",
      value: QueryClaimsRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimsRecordsResponse(): QueryClaimsRecordsResponse {
  return {
    claims: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryClaimsRecordsResponse = {
  typeUrl: "/evmos.claims.v1.QueryClaimsRecordsResponse",
  encode(message: QueryClaimsRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.claims) {
      ClaimsRecordAddress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimsRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimsRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claims.push(ClaimsRecordAddress.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryClaimsRecordsResponse {
    return {
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => ClaimsRecordAddress.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryClaimsRecordsResponse): unknown {
    const obj: any = {};
    if (message.claims) {
      obj.claims = message.claims.map(e => e ? ClaimsRecordAddress.toJSON(e) : undefined);
    } else {
      obj.claims = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryClaimsRecordsResponse>): QueryClaimsRecordsResponse {
    const message = createBaseQueryClaimsRecordsResponse();
    message.claims = object.claims?.map(e => ClaimsRecordAddress.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClaimsRecordsResponseAmino): QueryClaimsRecordsResponse {
    return {
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => ClaimsRecordAddress.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryClaimsRecordsResponse): QueryClaimsRecordsResponseAmino {
    const obj: any = {};
    if (message.claims) {
      obj.claims = message.claims.map(e => e ? ClaimsRecordAddress.toAmino(e) : undefined);
    } else {
      obj.claims = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClaimsRecordsResponseAminoMsg): QueryClaimsRecordsResponse {
    return QueryClaimsRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimsRecordsResponseProtoMsg): QueryClaimsRecordsResponse {
    return QueryClaimsRecordsResponse.decode(message.value);
  },
  toProto(message: QueryClaimsRecordsResponse): Uint8Array {
    return QueryClaimsRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimsRecordsResponse): QueryClaimsRecordsResponseProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryClaimsRecordsResponse",
      value: QueryClaimsRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClaimsRecordRequest(): QueryClaimsRecordRequest {
  return {
    address: ""
  };
}
export const QueryClaimsRecordRequest = {
  typeUrl: "/evmos.claims.v1.QueryClaimsRecordRequest",
  encode(message: QueryClaimsRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimsRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimsRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClaimsRecordRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryClaimsRecordRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryClaimsRecordRequest>): QueryClaimsRecordRequest {
    const message = createBaseQueryClaimsRecordRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryClaimsRecordRequestAmino): QueryClaimsRecordRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryClaimsRecordRequest): QueryClaimsRecordRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryClaimsRecordRequestAminoMsg): QueryClaimsRecordRequest {
    return QueryClaimsRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimsRecordRequestProtoMsg): QueryClaimsRecordRequest {
    return QueryClaimsRecordRequest.decode(message.value);
  },
  toProto(message: QueryClaimsRecordRequest): Uint8Array {
    return QueryClaimsRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimsRecordRequest): QueryClaimsRecordRequestProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryClaimsRecordRequest",
      value: QueryClaimsRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimsRecordResponse(): QueryClaimsRecordResponse {
  return {
    initialClaimableAmount: "",
    claims: []
  };
}
export const QueryClaimsRecordResponse = {
  typeUrl: "/evmos.claims.v1.QueryClaimsRecordResponse",
  encode(message: QueryClaimsRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initialClaimableAmount !== "") {
      writer.uint32(10).string(message.initialClaimableAmount);
    }
    for (const v of message.claims) {
      Claim.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimsRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimsRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initialClaimableAmount = reader.string();
          break;
        case 2:
          message.claims.push(Claim.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClaimsRecordResponse {
    return {
      initialClaimableAmount: isSet(object.initialClaimableAmount) ? String(object.initialClaimableAmount) : "",
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => Claim.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryClaimsRecordResponse): unknown {
    const obj: any = {};
    message.initialClaimableAmount !== undefined && (obj.initialClaimableAmount = message.initialClaimableAmount);
    if (message.claims) {
      obj.claims = message.claims.map(e => e ? Claim.toJSON(e) : undefined);
    } else {
      obj.claims = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryClaimsRecordResponse>): QueryClaimsRecordResponse {
    const message = createBaseQueryClaimsRecordResponse();
    message.initialClaimableAmount = object.initialClaimableAmount ?? "";
    message.claims = object.claims?.map(e => Claim.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryClaimsRecordResponseAmino): QueryClaimsRecordResponse {
    return {
      initialClaimableAmount: object.initial_claimable_amount,
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => Claim.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryClaimsRecordResponse): QueryClaimsRecordResponseAmino {
    const obj: any = {};
    obj.initial_claimable_amount = message.initialClaimableAmount;
    if (message.claims) {
      obj.claims = message.claims.map(e => e ? Claim.toAmino(e) : undefined);
    } else {
      obj.claims = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryClaimsRecordResponseAminoMsg): QueryClaimsRecordResponse {
    return QueryClaimsRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimsRecordResponseProtoMsg): QueryClaimsRecordResponse {
    return QueryClaimsRecordResponse.decode(message.value);
  },
  toProto(message: QueryClaimsRecordResponse): Uint8Array {
    return QueryClaimsRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimsRecordResponse): QueryClaimsRecordResponseProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryClaimsRecordResponse",
      value: QueryClaimsRecordResponse.encode(message).finish()
    };
  }
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** TotalUnclaimed queries the total unclaimed tokens from the airdrop */
  TotalUnclaimed(request?: QueryTotalUnclaimedRequest): Promise<QueryTotalUnclaimedResponse>;
  /** Params returns the claims module parameters */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ClaimsRecords returns all claims records */
  ClaimsRecords(request?: QueryClaimsRecordsRequest): Promise<QueryClaimsRecordsResponse>;
  /** ClaimsRecord returns the claims record for a given address */
  ClaimsRecord(request: QueryClaimsRecordRequest): Promise<QueryClaimsRecordResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.TotalUnclaimed = this.TotalUnclaimed.bind(this);
    this.Params = this.Params.bind(this);
    this.ClaimsRecords = this.ClaimsRecords.bind(this);
    this.ClaimsRecord = this.ClaimsRecord.bind(this);
  }
  TotalUnclaimed(request: QueryTotalUnclaimedRequest = {}): Promise<QueryTotalUnclaimedResponse> {
    const data = QueryTotalUnclaimedRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.claims.v1.Query", "TotalUnclaimed", data);
    return promise.then(data => QueryTotalUnclaimedResponse.decode(new _m0.Reader(data)));
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.claims.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  ClaimsRecords(request: QueryClaimsRecordsRequest = {
    pagination: undefined
  }): Promise<QueryClaimsRecordsResponse> {
    const data = QueryClaimsRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.claims.v1.Query", "ClaimsRecords", data);
    return promise.then(data => QueryClaimsRecordsResponse.decode(new _m0.Reader(data)));
  }
  ClaimsRecord(request: QueryClaimsRecordRequest): Promise<QueryClaimsRecordResponse> {
    const data = QueryClaimsRecordRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.claims.v1.Query", "ClaimsRecord", data);
    return promise.then(data => QueryClaimsRecordResponse.decode(new _m0.Reader(data)));
  }
}