//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAuthorization } from "./authz";
import * as _m0 from "protobufjs/minimal";
import { isSet, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.authz.v1beta1";
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequest {
  granter: string;
  grantee: string;
  /** Optional, msg_type_url, when set, will query only grants matching given msg type. */
  msgTypeUrl: string;
  /** pagination defines an pagination for the request. */
  pagination: PageRequest;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryGrantsResponse {
  /** authorizations is a list of grants granted for grantee by granter. */
  grants: Grant[];
  /** pagination defines an pagination for the response. */
  pagination: PageResponse;
}
/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsRequest {
  granter: string;
  /** pagination defines an pagination for the request. */
  pagination: PageRequest;
}
/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsResponse {
  /** grants is a list of grants granted by the granter. */
  grants: GrantAuthorization[];
  /** pagination defines an pagination for the response. */
  pagination: PageResponse;
}
/** QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method. */
export interface QueryGranteeGrantsRequest {
  grantee: string;
  /** pagination defines an pagination for the request. */
  pagination: PageRequest;
}
/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */
export interface QueryGranteeGrantsResponse {
  /** grants is a list of grants granted to the grantee. */
  grants: GrantAuthorization[];
  /** pagination defines an pagination for the response. */
  pagination: PageResponse;
}
function createBaseQueryGrantsRequest(): QueryGrantsRequest {
  return {
    granter: "",
    grantee: "",
    msgTypeUrl: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryGrantsRequest = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest",
  encode(message: QueryGrantsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.msgTypeUrl !== "") {
      writer.uint32(26).string(message.msgTypeUrl);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGrantsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.msgTypeUrl = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGrantsRequest {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGrantsRequest): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGrantsRequest>): QueryGrantsRequest {
    const message = createBaseQueryGrantsRequest();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGrantsRequestAmino): QueryGrantsRequest {
    return {
      granter: object.granter,
      grantee: object.grantee,
      msgTypeUrl: object.msg_type_url,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryGrantsRequest): QueryGrantsRequestAmino {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    obj.msg_type_url = message.msgTypeUrl;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGrantsRequestAminoMsg): QueryGrantsRequest {
    return QueryGrantsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGrantsRequest): QueryGrantsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGrantsRequest",
      value: QueryGrantsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGrantsRequestProtoMsg): QueryGrantsRequest {
    return QueryGrantsRequest.decode(message.value);
  },
  toProto(message: QueryGrantsRequest): Uint8Array {
    return QueryGrantsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGrantsRequest): QueryGrantsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest",
      value: QueryGrantsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGrantsResponse(): QueryGrantsResponse {
  return {
    grants: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryGrantsResponse = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse",
  encode(message: QueryGrantsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.grants) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGrantsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(Grant.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryGrantsResponse {
    return {
      grants: Array.isArray(object?.grants) ? object.grants.map((e: any) => Grant.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGrantsResponse): unknown {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? Grant.toJSON(e) : undefined);
    } else {
      obj.grants = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGrantsResponse>): QueryGrantsResponse {
    const message = createBaseQueryGrantsResponse();
    message.grants = object.grants?.map(e => Grant.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGrantsResponseAmino): QueryGrantsResponse {
    return {
      grants: Array.isArray(object?.grants) ? object.grants.map((e: any) => Grant.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryGrantsResponse): QueryGrantsResponseAmino {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? Grant.toAmino(e) : undefined);
    } else {
      obj.grants = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGrantsResponseAminoMsg): QueryGrantsResponse {
    return QueryGrantsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGrantsResponse): QueryGrantsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGrantsResponse",
      value: QueryGrantsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGrantsResponseProtoMsg): QueryGrantsResponse {
    return QueryGrantsResponse.decode(message.value);
  },
  toProto(message: QueryGrantsResponse): Uint8Array {
    return QueryGrantsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGrantsResponse): QueryGrantsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse",
      value: QueryGrantsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGranterGrantsRequest(): QueryGranterGrantsRequest {
  return {
    granter: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryGranterGrantsRequest = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest",
  encode(message: QueryGranterGrantsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGranterGrantsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranterGrantsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGranterGrantsRequest {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGranterGrantsRequest): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGranterGrantsRequest>): QueryGranterGrantsRequest {
    const message = createBaseQueryGranterGrantsRequest();
    message.granter = object.granter ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGranterGrantsRequestAmino): QueryGranterGrantsRequest {
    return {
      granter: object.granter,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryGranterGrantsRequest): QueryGranterGrantsRequestAmino {
    const obj: any = {};
    obj.granter = message.granter;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGranterGrantsRequestAminoMsg): QueryGranterGrantsRequest {
    return QueryGranterGrantsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGranterGrantsRequest): QueryGranterGrantsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGranterGrantsRequest",
      value: QueryGranterGrantsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGranterGrantsRequestProtoMsg): QueryGranterGrantsRequest {
    return QueryGranterGrantsRequest.decode(message.value);
  },
  toProto(message: QueryGranterGrantsRequest): Uint8Array {
    return QueryGranterGrantsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGranterGrantsRequest): QueryGranterGrantsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest",
      value: QueryGranterGrantsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGranterGrantsResponse(): QueryGranterGrantsResponse {
  return {
    grants: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryGranterGrantsResponse = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse",
  encode(message: QueryGranterGrantsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.grants) {
      GrantAuthorization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGranterGrantsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranterGrantsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(GrantAuthorization.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryGranterGrantsResponse {
    return {
      grants: Array.isArray(object?.grants) ? object.grants.map((e: any) => GrantAuthorization.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGranterGrantsResponse): unknown {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? GrantAuthorization.toJSON(e) : undefined);
    } else {
      obj.grants = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGranterGrantsResponse>): QueryGranterGrantsResponse {
    const message = createBaseQueryGranterGrantsResponse();
    message.grants = object.grants?.map(e => GrantAuthorization.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGranterGrantsResponseAmino): QueryGranterGrantsResponse {
    return {
      grants: Array.isArray(object?.grants) ? object.grants.map((e: any) => GrantAuthorization.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryGranterGrantsResponse): QueryGranterGrantsResponseAmino {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? GrantAuthorization.toAmino(e) : undefined);
    } else {
      obj.grants = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGranterGrantsResponseAminoMsg): QueryGranterGrantsResponse {
    return QueryGranterGrantsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGranterGrantsResponse): QueryGranterGrantsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGranterGrantsResponse",
      value: QueryGranterGrantsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGranterGrantsResponseProtoMsg): QueryGranterGrantsResponse {
    return QueryGranterGrantsResponse.decode(message.value);
  },
  toProto(message: QueryGranterGrantsResponse): Uint8Array {
    return QueryGranterGrantsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGranterGrantsResponse): QueryGranterGrantsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse",
      value: QueryGranterGrantsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGranteeGrantsRequest(): QueryGranteeGrantsRequest {
  return {
    grantee: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryGranteeGrantsRequest = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest",
  encode(message: QueryGranteeGrantsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGranteeGrantsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranteeGrantsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGranteeGrantsRequest {
    return {
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGranteeGrantsRequest): unknown {
    const obj: any = {};
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGranteeGrantsRequest>): QueryGranteeGrantsRequest {
    const message = createBaseQueryGranteeGrantsRequest();
    message.grantee = object.grantee ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGranteeGrantsRequestAmino): QueryGranteeGrantsRequest {
    return {
      grantee: object.grantee,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryGranteeGrantsRequest): QueryGranteeGrantsRequestAmino {
    const obj: any = {};
    obj.grantee = message.grantee;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGranteeGrantsRequestAminoMsg): QueryGranteeGrantsRequest {
    return QueryGranteeGrantsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGranteeGrantsRequest): QueryGranteeGrantsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGranteeGrantsRequest",
      value: QueryGranteeGrantsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGranteeGrantsRequestProtoMsg): QueryGranteeGrantsRequest {
    return QueryGranteeGrantsRequest.decode(message.value);
  },
  toProto(message: QueryGranteeGrantsRequest): Uint8Array {
    return QueryGranteeGrantsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGranteeGrantsRequest): QueryGranteeGrantsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest",
      value: QueryGranteeGrantsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGranteeGrantsResponse(): QueryGranteeGrantsResponse {
  return {
    grants: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryGranteeGrantsResponse = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse",
  encode(message: QueryGranteeGrantsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.grants) {
      GrantAuthorization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGranteeGrantsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranteeGrantsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(GrantAuthorization.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryGranteeGrantsResponse {
    return {
      grants: Array.isArray(object?.grants) ? object.grants.map((e: any) => GrantAuthorization.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGranteeGrantsResponse): unknown {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? GrantAuthorization.toJSON(e) : undefined);
    } else {
      obj.grants = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGranteeGrantsResponse>): QueryGranteeGrantsResponse {
    const message = createBaseQueryGranteeGrantsResponse();
    message.grants = object.grants?.map(e => GrantAuthorization.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGranteeGrantsResponseAmino): QueryGranteeGrantsResponse {
    return {
      grants: Array.isArray(object?.grants) ? object.grants.map((e: any) => GrantAuthorization.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryGranteeGrantsResponse): QueryGranteeGrantsResponseAmino {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? GrantAuthorization.toAmino(e) : undefined);
    } else {
      obj.grants = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGranteeGrantsResponseAminoMsg): QueryGranteeGrantsResponse {
    return QueryGranteeGrantsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGranteeGrantsResponse): QueryGranteeGrantsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGranteeGrantsResponse",
      value: QueryGranteeGrantsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGranteeGrantsResponseProtoMsg): QueryGranteeGrantsResponse {
    return QueryGranteeGrantsResponse.decode(message.value);
  },
  toProto(message: QueryGranteeGrantsResponse): Uint8Array {
    return QueryGranteeGrantsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGranteeGrantsResponse): QueryGranteeGrantsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse",
      value: QueryGranteeGrantsResponse.encode(message).finish()
    };
  }
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Returns list of `Authorization`, granted to the grantee by the granter. */
  Grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>;
  /**
   * GranterGrants returns list of `GrantAuthorization`, granted by granter.
   * 
   * Since: cosmos-sdk 0.45.2
   */
  GranterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse>;
  /**
   * GranteeGrants returns a list of `GrantAuthorization` by grantee.
   * 
   * Since: cosmos-sdk 0.45.2
   */
  GranteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Grants = this.Grants.bind(this);
    this.GranterGrants = this.GranterGrants.bind(this);
    this.GranteeGrants = this.GranteeGrants.bind(this);
  }
  Grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse> {
    const data = QueryGrantsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "Grants", data);
    return promise.then(data => QueryGrantsResponse.decode(new _m0.Reader(data)));
  }
  GranterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse> {
    const data = QueryGranterGrantsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranterGrants", data);
    return promise.then(data => QueryGranterGrantsResponse.decode(new _m0.Reader(data)));
  }
  GranteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse> {
    const data = QueryGranteeGrantsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranteeGrants", data);
    return promise.then(data => QueryGranteeGrantsResponse.decode(new _m0.Reader(data)));
  }
}