//@ts-nocheck
/* eslint-disable */
import { Action, ClaimRecord, actionFromJSON, actionToJSON } from "./claim";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "osmosis.claim.v1beta1";

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponse {
  /** params defines the parameters of the module. */
  moduleAccountBalance: Coin[];
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
export interface QueryClaimRecordRequest {
  address: string;
}
export interface QueryClaimRecordResponse {
  claimRecord?: ClaimRecord;
}
export interface QueryClaimableForActionRequest {
  address: string;
  action: Action;
}
export interface QueryClaimableForActionResponse {
  coins: Coin[];
}
export interface QueryTotalClaimableRequest {
  address: string;
}
export interface QueryTotalClaimableResponse {
  coins: Coin[];
}

function createBaseQueryModuleAccountBalanceRequest(): QueryModuleAccountBalanceRequest {
  return {};
}

export const QueryModuleAccountBalanceRequest = {
  encode(_: QueryModuleAccountBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountBalanceRequest();

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

  fromJSON(_: any): QueryModuleAccountBalanceRequest {
    return {};
  },

  toJSON(_: QueryModuleAccountBalanceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryModuleAccountBalanceRequest>): QueryModuleAccountBalanceRequest {
    const message = createBaseQueryModuleAccountBalanceRequest();
    return message;
  },

  fromSDKJSON(_: any): QueryModuleAccountBalanceRequestSDKType {
    return {};
  }

};

function createBaseQueryModuleAccountBalanceResponse(): QueryModuleAccountBalanceResponse {
  return {
    moduleAccountBalance: []
  };
}

export const QueryModuleAccountBalanceResponse = {
  encode(message: QueryModuleAccountBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.moduleAccountBalance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountBalanceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.moduleAccountBalance.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryModuleAccountBalanceResponse {
    return {
      moduleAccountBalance: Array.isArray(object?.moduleAccountBalance) ? object.moduleAccountBalance.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryModuleAccountBalanceResponse): unknown {
    const obj: any = {};

    if (message.moduleAccountBalance) {
      obj.moduleAccountBalance = message.moduleAccountBalance.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.moduleAccountBalance = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryModuleAccountBalanceResponse>): QueryModuleAccountBalanceResponse {
    const message = createBaseQueryModuleAccountBalanceResponse();
    message.moduleAccountBalance = object.moduleAccountBalance?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromSDKJSON(object: any): QueryModuleAccountBalanceResponseSDKType {
    return {
      moduleAccountBalance: Array.isArray(object?.moduleAccountBalance) ? object.moduleAccountBalance.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
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

  fromSDKJSON(_: any): QueryParamsRequestSDKType {
    return {};
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

  fromSDKJSON(object: any): QueryParamsResponseSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined
    };
  }

};

function createBaseQueryClaimRecordRequest(): QueryClaimRecordRequest {
  return {
    address: ""
  };
}

export const QueryClaimRecordRequest = {
  encode(message: QueryClaimRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordRequest();

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

  fromJSON(object: any): QueryClaimRecordRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryClaimRecordRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClaimRecordRequest>): QueryClaimRecordRequest {
    const message = createBaseQueryClaimRecordRequest();
    message.address = object.address ?? "";
    return message;
  },

  fromSDKJSON(object: any): QueryClaimRecordRequestSDKType {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  }

};

function createBaseQueryClaimRecordResponse(): QueryClaimRecordResponse {
  return {
    claimRecord: undefined
  };
}

export const QueryClaimRecordResponse = {
  encode(message: QueryClaimRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimRecord !== undefined) {
      ClaimRecord.encode(message.claimRecord, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.claimRecord = ClaimRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClaimRecordResponse {
    return {
      claimRecord: isSet(object.claimRecord) ? ClaimRecord.fromJSON(object.claimRecord) : undefined
    };
  },

  toJSON(message: QueryClaimRecordResponse): unknown {
    const obj: any = {};
    message.claimRecord !== undefined && (obj.claimRecord = message.claimRecord ? ClaimRecord.toJSON(message.claimRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClaimRecordResponse>): QueryClaimRecordResponse {
    const message = createBaseQueryClaimRecordResponse();
    message.claimRecord = object.claimRecord !== undefined && object.claimRecord !== null ? ClaimRecord.fromPartial(object.claimRecord) : undefined;
    return message;
  },

  fromSDKJSON(object: any): QueryClaimRecordResponseSDKType {
    return {
      claim_record: isSet(object.claim_record) ? ClaimRecord.fromSDKJSON(object.claim_record) : undefined
    };
  }

};

function createBaseQueryClaimableForActionRequest(): QueryClaimableForActionRequest {
  return {
    address: "",
    action: 0
  };
}

export const QueryClaimableForActionRequest = {
  encode(message: QueryClaimableForActionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.action !== 0) {
      writer.uint32(16).int32(message.action);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableForActionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimableForActionRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.action = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClaimableForActionRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      action: isSet(object.action) ? actionFromJSON(object.action) : 0
    };
  },

  toJSON(message: QueryClaimableForActionRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.action !== undefined && (obj.action = actionToJSON(message.action));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClaimableForActionRequest>): QueryClaimableForActionRequest {
    const message = createBaseQueryClaimableForActionRequest();
    message.address = object.address ?? "";
    message.action = object.action ?? 0;
    return message;
  },

  fromSDKJSON(object: any): QueryClaimableForActionRequestSDKType {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      action: isSet(object.action) ? actionFromJSON(object.action) : 0
    };
  }

};

function createBaseQueryClaimableForActionResponse(): QueryClaimableForActionResponse {
  return {
    coins: []
  };
}

export const QueryClaimableForActionResponse = {
  encode(message: QueryClaimableForActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableForActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimableForActionResponse();

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

  fromJSON(object: any): QueryClaimableForActionResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryClaimableForActionResponse): unknown {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryClaimableForActionResponse>): QueryClaimableForActionResponse {
    const message = createBaseQueryClaimableForActionResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromSDKJSON(object: any): QueryClaimableForActionResponseSDKType {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  }

};

function createBaseQueryTotalClaimableRequest(): QueryTotalClaimableRequest {
  return {
    address: ""
  };
}

export const QueryTotalClaimableRequest = {
  encode(message: QueryTotalClaimableRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalClaimableRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalClaimableRequest();

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

  fromJSON(object: any): QueryTotalClaimableRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryTotalClaimableRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalClaimableRequest>): QueryTotalClaimableRequest {
    const message = createBaseQueryTotalClaimableRequest();
    message.address = object.address ?? "";
    return message;
  },

  fromSDKJSON(object: any): QueryTotalClaimableRequestSDKType {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  }

};

function createBaseQueryTotalClaimableResponse(): QueryTotalClaimableResponse {
  return {
    coins: []
  };
}

export const QueryTotalClaimableResponse = {
  encode(message: QueryTotalClaimableResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalClaimableResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalClaimableResponse();

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

  fromJSON(object: any): QueryTotalClaimableResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryTotalClaimableResponse): unknown {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalClaimableResponse>): QueryTotalClaimableResponse {
    const message = createBaseQueryTotalClaimableResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromSDKJSON(object: any): QueryTotalClaimableResponseSDKType {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  }

};

/** Query defines the gRPC querier service. */
export interface Query {
  ModuleAccountBalance(request?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse>;
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  ClaimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
  ClaimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
  TotalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ModuleAccountBalance = this.ModuleAccountBalance.bind(this);
    this.Params = this.Params.bind(this);
    this.ClaimRecord = this.ClaimRecord.bind(this);
    this.ClaimableForAction = this.ClaimableForAction.bind(this);
    this.TotalClaimable = this.TotalClaimable.bind(this);
  }

  ModuleAccountBalance(request: QueryModuleAccountBalanceRequest = {}): Promise<QueryModuleAccountBalanceResponse> {
    const data = QueryModuleAccountBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "ModuleAccountBalance", data);
    return promise.then(data => QueryModuleAccountBalanceResponse.decode(new _m0.Reader(data)));
  }

  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  ClaimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse> {
    const data = QueryClaimRecordRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "ClaimRecord", data);
    return promise.then(data => QueryClaimRecordResponse.decode(new _m0.Reader(data)));
  }

  ClaimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse> {
    const data = QueryClaimableForActionRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "ClaimableForAction", data);
    return promise.then(data => QueryClaimableForActionResponse.decode(new _m0.Reader(data)));
  }

  TotalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse> {
    const data = QueryTotalClaimableRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "TotalClaimable", data);
    return promise.then(data => QueryTotalClaimableResponse.decode(new _m0.Reader(data)));
  }

}