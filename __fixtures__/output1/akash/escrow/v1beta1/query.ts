import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account, AccountSDKType, Payment, PaymentSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "@osmonauts/helpers";
export const protobufPackage = "akash.escrow.v1beta1";

/** QueryAccountRequest is request type for the Query/Account RPC method */
export interface QueryAccountsRequest {
  scope: string;
  xid: string;
  owner: string;
  state: string;
  pagination?: PageRequest;
}

/** QueryAccountRequest is request type for the Query/Account RPC method */
export interface QueryAccountsRequestSDKType {
  scope: string;
  xid: string;
  owner: string;
  state: string;
  pagination?: PageRequestSDKType;
}

/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryAccountsResponse {
  accounts: Account[];
  pagination?: PageResponse;
}

/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryAccountsResponseSDKType {
  accounts: AccountSDKType[];
  pagination?: PageResponseSDKType;
}

/** QueryPaymentRequest is request type for the Query/Payment RPC method */
export interface QueryPaymentsRequest {
  scope?: string;
  xid?: string;
  id?: string;
  owner?: string;
  state?: string;
  pagination?: PageRequest;
}

/** QueryPaymentRequest is request type for the Query/Payment RPC method */
export interface QueryPaymentsRequestSDKType {
  scope?: string;
  xid?: string;
  id?: string;
  owner?: string;
  state?: string;
  pagination?: PageRequestSDKType;
}

/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryPaymentsResponse {
  payments: Payment[];
  pagination?: PageResponse;
}

/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryPaymentsResponseSDKType {
  payments: PaymentSDKType[];
  pagination?: PageResponseSDKType;
}

function createBaseQueryAccountsRequest(): QueryAccountsRequest {
  return {
    scope: "",
    xid: "",
    owner: "",
    state: "",
    pagination: undefined
  };
}

export const QueryAccountsRequest = {
  encode(message: QueryAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scope !== "") {
      writer.uint32(10).string(message.scope);
    }

    if (message.xid !== "") {
      writer.uint32(18).string(message.xid);
    }

    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }

    if (message.state !== "") {
      writer.uint32(34).string(message.state);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.scope = reader.string();
          break;

        case 2:
          message.xid = reader.string();
          break;

        case 3:
          message.owner = reader.string();
          break;

        case 4:
          message.state = reader.string();
          break;

        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAccountsRequest {
    return {
      scope: isSet(object.scope) ? String(object.scope) : "",
      xid: isSet(object.xid) ? String(object.xid) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      state: isSet(object.state) ? String(object.state) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAccountsRequest): unknown {
    const obj: any = {};
    message.scope !== undefined && (obj.scope = message.scope);
    message.xid !== undefined && (obj.xid = message.xid);
    message.owner !== undefined && (obj.owner = message.owner);
    message.state !== undefined && (obj.state = message.state);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountsRequest>, I>>(object: I): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    message.scope = object.scope ?? "";
    message.xid = object.xid ?? "";
    message.owner = object.owner ?? "";
    message.state = object.state ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryAccountsRequestSDKType): QueryAccountsRequest {
    return {
      scope: isSet(object.scope) ? object.scope : undefined,
      xid: isSet(object.xid) ? object.xid : undefined,
      owner: isSet(object.owner) ? object.owner : undefined,
      state: isSet(object.state) ? object.state : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryAccountsRequest): QueryAccountsRequestSDKType {
    const obj: any = {};
    message.scope !== undefined && (obj.scope = message.scope);
    message.xid !== undefined && (obj.xid = message.xid);
    message.owner !== undefined && (obj.owner = message.owner);
    message.state !== undefined && (obj.state = message.state);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryAccountsResponse(): QueryAccountsResponse {
  return {
    accounts: [],
    pagination: undefined
  };
}

export const QueryAccountsResponse = {
  encode(message: QueryAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Account.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAccountsResponse): unknown {
    const obj: any = {};

    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountsResponse>, I>>(object: I): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryAccountsResponseSDKType): QueryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromSDK(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryAccountsResponse): QueryAccountsResponseSDKType {
    const obj: any = {};

    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toSDK(e) : undefined);
    } else {
      obj.accounts = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryPaymentsRequest(): QueryPaymentsRequest {
  return {
    scope: "",
    xid: "",
    id: "",
    owner: "",
    state: "",
    pagination: undefined
  };
}

export const QueryPaymentsRequest = {
  encode(message: QueryPaymentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scope !== "") {
      writer.uint32(10).string(message.scope);
    }

    if (message.xid !== "") {
      writer.uint32(18).string(message.xid);
    }

    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }

    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }

    if (message.state !== "") {
      writer.uint32(42).string(message.state);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.scope = reader.string();
          break;

        case 2:
          message.xid = reader.string();
          break;

        case 3:
          message.id = reader.string();
          break;

        case 4:
          message.owner = reader.string();
          break;

        case 5:
          message.state = reader.string();
          break;

        case 6:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPaymentsRequest {
    return {
      scope: isSet(object.scope) ? String(object.scope) : "",
      xid: isSet(object.xid) ? String(object.xid) : "",
      id: isSet(object.id) ? String(object.id) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      state: isSet(object.state) ? String(object.state) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryPaymentsRequest): unknown {
    const obj: any = {};
    message.scope !== undefined && (obj.scope = message.scope);
    message.xid !== undefined && (obj.xid = message.xid);
    message.id !== undefined && (obj.id = message.id);
    message.owner !== undefined && (obj.owner = message.owner);
    message.state !== undefined && (obj.state = message.state);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPaymentsRequest>, I>>(object: I): QueryPaymentsRequest {
    const message = createBaseQueryPaymentsRequest();
    message.scope = object.scope ?? "";
    message.xid = object.xid ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    message.state = object.state ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryPaymentsRequestSDKType): QueryPaymentsRequest {
    return {
      scope: isSet(object.scope) ? object.scope : undefined,
      xid: isSet(object.xid) ? object.xid : undefined,
      id: isSet(object.id) ? object.id : undefined,
      owner: isSet(object.owner) ? object.owner : undefined,
      state: isSet(object.state) ? object.state : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryPaymentsRequest): QueryPaymentsRequestSDKType {
    const obj: any = {};
    message.scope !== undefined && (obj.scope = message.scope);
    message.xid !== undefined && (obj.xid = message.xid);
    message.id !== undefined && (obj.id = message.id);
    message.owner !== undefined && (obj.owner = message.owner);
    message.state !== undefined && (obj.state = message.state);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryPaymentsResponse(): QueryPaymentsResponse {
  return {
    payments: [],
    pagination: undefined
  };
}

export const QueryPaymentsResponse = {
  encode(message: QueryPaymentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.payments) {
      Payment.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.payments.push(Payment.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryPaymentsResponse {
    return {
      payments: Array.isArray(object?.payments) ? object.payments.map((e: any) => Payment.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryPaymentsResponse): unknown {
    const obj: any = {};

    if (message.payments) {
      obj.payments = message.payments.map(e => e ? Payment.toJSON(e) : undefined);
    } else {
      obj.payments = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPaymentsResponse>, I>>(object: I): QueryPaymentsResponse {
    const message = createBaseQueryPaymentsResponse();
    message.payments = object.payments?.map(e => Payment.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryPaymentsResponseSDKType): QueryPaymentsResponse {
    return {
      payments: Array.isArray(object?.payments) ? object.payments.map((e: any) => Payment.fromSDK(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryPaymentsResponse): QueryPaymentsResponseSDKType {
    const obj: any = {};

    if (message.payments) {
      obj.payments = message.payments.map(e => e ? Payment.toSDK(e) : undefined);
    } else {
      obj.payments = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }

};