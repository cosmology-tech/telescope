import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { ClaimsRecordAddress, ClaimsRecordAddressSDKType, Claim, ClaimSDKType } from "./claims";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "../../../helpers";
export const protobufPackage = "evmos.claims.v1";
/**
 * QueryTotalUnclaimedRequest is the request type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedRequest {}
/**
 * QueryTotalUnclaimedRequest is the request type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedRequestSDKType {}
/**
 * QueryTotalUnclaimedResponse is the response type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedResponse {
  /** coins defines the unclaimed coins */
  coins: Coin[];
}
/**
 * QueryTotalUnclaimedResponse is the response type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedResponseSDKType {
  coins: CoinSDKType[];
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
/**
 * QueryClaimsRecordsRequest is the request type for the Query/ClaimsRecords RPC
 * method.
 */
export interface QueryClaimsRecordsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/**
 * QueryClaimsRecordsRequest is the request type for the Query/ClaimsRecords RPC
 * method.
 */
export interface QueryClaimsRecordsRequestSDKType {
  pagination: PageRequestSDKType;
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
 * QueryClaimsRecordsResponse is the response type for the Query/ClaimsRecords
 * RPC method.
 */
export interface QueryClaimsRecordsResponseSDKType {
  claims: ClaimsRecordAddressSDKType[];
  pagination: PageResponseSDKType;
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
 * QueryClaimsRecordRequest is the request type for the Query/ClaimsRecord RPC
 * method.
 */
export interface QueryClaimsRecordRequestSDKType {
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
/**
 * QueryClaimsRecordResponse is the response type for the Query/ClaimsRecord RPC
 * method.
 */
export interface QueryClaimsRecordResponseSDKType {
  initial_claimable_amount: string;
  claims: ClaimSDKType[];
}
function createBaseQueryTotalUnclaimedRequest(): QueryTotalUnclaimedRequest {
  return {};
}
export const QueryTotalUnclaimedRequest = {
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
  fromPartial(_: DeepPartial<QueryTotalUnclaimedRequest>): QueryTotalUnclaimedRequest {
    const message = createBaseQueryTotalUnclaimedRequest();
    return message;
  },
  fromSDK(_: QueryTotalUnclaimedRequestSDKType): QueryTotalUnclaimedRequest {
    return {};
  },
  toSDK(_: QueryTotalUnclaimedRequest): QueryTotalUnclaimedRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryTotalUnclaimedResponse(): QueryTotalUnclaimedResponse {
  return {
    coins: []
  };
}
export const QueryTotalUnclaimedResponse = {
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
  fromPartial(object: DeepPartial<QueryTotalUnclaimedResponse>): QueryTotalUnclaimedResponse {
    const message = createBaseQueryTotalUnclaimedResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTotalUnclaimedResponseSDKType): QueryTotalUnclaimedResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryTotalUnclaimedResponse): QueryTotalUnclaimedResponseSDKType {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
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
  }
};
function createBaseQueryClaimsRecordsRequest(): QueryClaimsRecordsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryClaimsRecordsRequest = {
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
  fromPartial(object: DeepPartial<QueryClaimsRecordsRequest>): QueryClaimsRecordsRequest {
    const message = createBaseQueryClaimsRecordsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryClaimsRecordsRequestSDKType): QueryClaimsRecordsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryClaimsRecordsRequest): QueryClaimsRecordsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }
};
function createBaseQueryClaimsRecordsResponse(): QueryClaimsRecordsResponse {
  return {
    claims: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryClaimsRecordsResponse = {
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
  fromPartial(object: DeepPartial<QueryClaimsRecordsResponse>): QueryClaimsRecordsResponse {
    const message = createBaseQueryClaimsRecordsResponse();
    message.claims = object.claims?.map(e => ClaimsRecordAddress.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryClaimsRecordsResponseSDKType): QueryClaimsRecordsResponse {
    return {
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => ClaimsRecordAddress.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryClaimsRecordsResponse): QueryClaimsRecordsResponseSDKType {
    const obj: any = {};
    if (message.claims) {
      obj.claims = message.claims.map(e => e ? ClaimsRecordAddress.toSDK(e) : undefined);
    } else {
      obj.claims = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }
};
function createBaseQueryClaimsRecordRequest(): QueryClaimsRecordRequest {
  return {
    address: ""
  };
}
export const QueryClaimsRecordRequest = {
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
  fromPartial(object: DeepPartial<QueryClaimsRecordRequest>): QueryClaimsRecordRequest {
    const message = createBaseQueryClaimsRecordRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: QueryClaimsRecordRequestSDKType): QueryClaimsRecordRequest {
    return {
      address: object?.address
    };
  },
  toSDK(message: QueryClaimsRecordRequest): QueryClaimsRecordRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  }
};
function createBaseQueryClaimsRecordResponse(): QueryClaimsRecordResponse {
  return {
    initialClaimableAmount: "",
    claims: []
  };
}
export const QueryClaimsRecordResponse = {
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
  fromPartial(object: DeepPartial<QueryClaimsRecordResponse>): QueryClaimsRecordResponse {
    const message = createBaseQueryClaimsRecordResponse();
    message.initialClaimableAmount = object.initialClaimableAmount ?? "";
    message.claims = object.claims?.map(e => Claim.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryClaimsRecordResponseSDKType): QueryClaimsRecordResponse {
    return {
      initialClaimableAmount: object?.initial_claimable_amount,
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => Claim.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryClaimsRecordResponse): QueryClaimsRecordResponseSDKType {
    const obj: any = {};
    obj.initial_claimable_amount = message.initialClaimableAmount;
    if (message.claims) {
      obj.claims = message.claims.map(e => e ? Claim.toSDK(e) : undefined);
    } else {
      obj.claims = [];
    }
    return obj;
  }
};