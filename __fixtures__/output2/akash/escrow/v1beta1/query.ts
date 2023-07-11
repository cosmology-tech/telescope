//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account, Payment } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Rpc } from "../../../helpers";
export const protobufPackage = "akash.escrow.v1beta1";
/** QueryAccountRequest is request type for the Query/Account RPC method */
export interface QueryAccountsRequest {
  scope: string;
  xid: string;
  owner: string;
  state: string;
  pagination: PageRequest;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryAccountsResponse {
  accounts: Account[];
  pagination: PageResponse;
}
/** QueryPaymentRequest is request type for the Query/Payment RPC method */
export interface QueryPaymentsRequest {
  scope: string;
  xid: string;
  id: string;
  owner: string;
  state: string;
  pagination: PageRequest;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryPaymentsResponse {
  payments: Payment[];
  pagination: PageResponse;
}
function createBaseQueryAccountsRequest(): QueryAccountsRequest {
  return {
    scope: "",
    xid: "",
    owner: "",
    state: "",
    pagination: PageRequest.fromPartial({})
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
    const obj = createBaseQueryAccountsRequest();
    if (isSet(object.scope)) obj.scope = String(object.scope);
    if (isSet(object.xid)) obj.xid = String(object.xid);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.state)) obj.state = String(object.state);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
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
  fromPartial(object: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    message.scope = object.scope ?? "";
    message.xid = object.xid ?? "";
    message.owner = object.owner ?? "";
    message.state = object.state ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : PageRequest.fromPartial({});
    return message;
  }
};
function createBaseQueryAccountsResponse(): QueryAccountsResponse {
  return {
    accounts: [],
    pagination: PageResponse.fromPartial({})
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
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsResponse {
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
    const obj = createBaseQueryAccountsResponse();
    if (Array.isArray(object?.accounts)) object.accounts.map((e: any) => Account.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
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
  fromPartial(object: DeepPartial<QueryAccountsResponse>): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : PageResponse.fromPartial({});
    return message;
  }
};
function createBaseQueryPaymentsRequest(): QueryPaymentsRequest {
  return {
    scope: "",
    xid: "",
    id: "",
    owner: "",
    state: "",
    pagination: PageRequest.fromPartial({})
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
    const obj = createBaseQueryPaymentsRequest();
    if (isSet(object.scope)) obj.scope = String(object.scope);
    if (isSet(object.xid)) obj.xid = String(object.xid);
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.state)) obj.state = String(object.state);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
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
  fromPartial(object: DeepPartial<QueryPaymentsRequest>): QueryPaymentsRequest {
    const message = createBaseQueryPaymentsRequest();
    message.scope = object.scope ?? "";
    message.xid = object.xid ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    message.state = object.state ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : PageRequest.fromPartial({});
    return message;
  }
};
function createBaseQueryPaymentsResponse(): QueryPaymentsResponse {
  return {
    payments: [],
    pagination: PageResponse.fromPartial({})
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
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentsResponse {
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
    const obj = createBaseQueryPaymentsResponse();
    if (Array.isArray(object?.payments)) object.payments.map((e: any) => Payment.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
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
  fromPartial(object: DeepPartial<QueryPaymentsResponse>): QueryPaymentsResponse {
    const message = createBaseQueryPaymentsResponse();
    message.payments = object.payments?.map(e => Payment.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : PageResponse.fromPartial({});
    return message;
  }
};
/** Query defines the gRPC querier service */
export interface Query {
  /**
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   * Accounts queries all accounts
   */
  Accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;
  /**
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   * Payments queries all payments
   */
  Payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Accounts = this.Accounts.bind(this);
    this.Payments = this.Payments.bind(this);
  }
  Accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse> {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.escrow.v1beta1.Query", "Accounts", data);
    return promise.then(data => QueryAccountsResponse.decode(new _m0.Reader(data)));
  }
  Payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponse> {
    const data = QueryPaymentsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.escrow.v1beta1.Query", "Payments", data);
    return promise.then(data => QueryPaymentsResponse.decode(new _m0.Reader(data)));
  }
}