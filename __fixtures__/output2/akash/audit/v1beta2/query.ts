//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider } from "./audit";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Rpc } from "../../../helpers";
export const protobufPackage = "akash.audit.v1beta2";
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponse {
  providers: Provider[];
  pagination: PageResponse;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequest {
  auditor: string;
  owner: string;
}
/** QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method */
export interface QueryAllProvidersAttributesRequest {
  pagination: PageRequest;
}
/** QueryProviderAttributesRequest is request type for the Query/Provider RPC method */
export interface QueryProviderAttributesRequest {
  owner: string;
  pagination: PageRequest;
}
/** QueryProviderAuditorRequest is request type for the Query/Providers RPC method */
export interface QueryProviderAuditorRequest {
  auditor: string;
  owner: string;
}
/** QueryAuditorAttributesRequest is request type for the Query/Providers RPC method */
export interface QueryAuditorAttributesRequest {
  auditor: string;
  pagination: PageRequest;
}
function createBaseQueryProvidersResponse(): QueryProvidersResponse {
  return {
    providers: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryProvidersResponse = {
  encode(message: QueryProvidersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providers) {
      Provider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProvidersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProvidersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers.push(Provider.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryProvidersResponse {
    const obj = createBaseQueryProvidersResponse();
    if (Array.isArray(object?.providers)) object.providers.map((e: any) => Provider.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryProvidersResponse): unknown {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? Provider.toJSON(e) : undefined);
    } else {
      obj.providers = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProvidersResponse>): QueryProvidersResponse {
    const message = createBaseQueryProvidersResponse();
    message.providers = object.providers?.map(e => Provider.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : PageResponse.fromPartial({});
    return message;
  }
};
function createBaseQueryProviderRequest(): QueryProviderRequest {
  return {
    auditor: "",
    owner: ""
  };
}
export const QueryProviderRequest = {
  encode(message: QueryProviderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auditor !== "") {
      writer.uint32(10).string(message.auditor);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auditor = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProviderRequest {
    const obj = createBaseQueryProviderRequest();
    if (isSet(object.auditor)) obj.auditor = String(object.auditor);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: QueryProviderRequest): unknown {
    const obj: any = {};
    message.auditor !== undefined && (obj.auditor = message.auditor);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProviderRequest>): QueryProviderRequest {
    const message = createBaseQueryProviderRequest();
    message.auditor = object.auditor ?? "";
    message.owner = object.owner ?? "";
    return message;
  }
};
function createBaseQueryAllProvidersAttributesRequest(): QueryAllProvidersAttributesRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllProvidersAttributesRequest = {
  encode(message: QueryAllProvidersAttributesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProvidersAttributesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProvidersAttributesRequest();
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
  fromJSON(object: any): QueryAllProvidersAttributesRequest {
    const obj = createBaseQueryAllProvidersAttributesRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllProvidersAttributesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllProvidersAttributesRequest>): QueryAllProvidersAttributesRequest {
    const message = createBaseQueryAllProvidersAttributesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : PageRequest.fromPartial({});
    return message;
  }
};
function createBaseQueryProviderAttributesRequest(): QueryProviderAttributesRequest {
  return {
    owner: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryProviderAttributesRequest = {
  encode(message: QueryProviderAttributesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderAttributesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderAttributesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
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
  fromJSON(object: any): QueryProviderAttributesRequest {
    const obj = createBaseQueryProviderAttributesRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryProviderAttributesRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProviderAttributesRequest>): QueryProviderAttributesRequest {
    const message = createBaseQueryProviderAttributesRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : PageRequest.fromPartial({});
    return message;
  }
};
function createBaseQueryProviderAuditorRequest(): QueryProviderAuditorRequest {
  return {
    auditor: "",
    owner: ""
  };
}
export const QueryProviderAuditorRequest = {
  encode(message: QueryProviderAuditorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auditor !== "") {
      writer.uint32(10).string(message.auditor);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderAuditorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderAuditorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auditor = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProviderAuditorRequest {
    const obj = createBaseQueryProviderAuditorRequest();
    if (isSet(object.auditor)) obj.auditor = String(object.auditor);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: QueryProviderAuditorRequest): unknown {
    const obj: any = {};
    message.auditor !== undefined && (obj.auditor = message.auditor);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProviderAuditorRequest>): QueryProviderAuditorRequest {
    const message = createBaseQueryProviderAuditorRequest();
    message.auditor = object.auditor ?? "";
    message.owner = object.owner ?? "";
    return message;
  }
};
function createBaseQueryAuditorAttributesRequest(): QueryAuditorAttributesRequest {
  return {
    auditor: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAuditorAttributesRequest = {
  encode(message: QueryAuditorAttributesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auditor !== "") {
      writer.uint32(10).string(message.auditor);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuditorAttributesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuditorAttributesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auditor = reader.string();
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
  fromJSON(object: any): QueryAuditorAttributesRequest {
    const obj = createBaseQueryAuditorAttributesRequest();
    if (isSet(object.auditor)) obj.auditor = String(object.auditor);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAuditorAttributesRequest): unknown {
    const obj: any = {};
    message.auditor !== undefined && (obj.auditor = message.auditor);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAuditorAttributesRequest>): QueryAuditorAttributesRequest {
    const message = createBaseQueryAuditorAttributesRequest();
    message.auditor = object.auditor ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : PageRequest.fromPartial({});
    return message;
  }
};
/** Query defines the gRPC querier service */
export interface Query {
  /**
   * AllProvidersAttributes queries all providers
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  AllProvidersAttributes(request?: QueryAllProvidersAttributesRequest): Promise<QueryProvidersResponse>;
  /**
   * ProviderAttributes queries all provider signed attributes
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  ProviderAttributes(request: QueryProviderAttributesRequest): Promise<QueryProvidersResponse>;
  /**
   * ProviderAuditorAttributes queries provider signed attributes by specific auditor
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  ProviderAuditorAttributes(request: QueryProviderAuditorRequest): Promise<QueryProvidersResponse>;
  /**
   * AuditorAttributes queries all providers signed by this auditor
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  AuditorAttributes(request: QueryAuditorAttributesRequest): Promise<QueryProvidersResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AllProvidersAttributes = this.AllProvidersAttributes.bind(this);
    this.ProviderAttributes = this.ProviderAttributes.bind(this);
    this.ProviderAuditorAttributes = this.ProviderAuditorAttributes.bind(this);
    this.AuditorAttributes = this.AuditorAttributes.bind(this);
  }
  AllProvidersAttributes(request: QueryAllProvidersAttributesRequest = {
    pagination: undefined
  }): Promise<QueryProvidersResponse> {
    const data = QueryAllProvidersAttributesRequest.encode(request).finish();
    const promise = this.rpc.request("akash.audit.v1beta2.Query", "AllProvidersAttributes", data);
    return promise.then(data => QueryProvidersResponse.decode(new _m0.Reader(data)));
  }
  ProviderAttributes(request: QueryProviderAttributesRequest): Promise<QueryProvidersResponse> {
    const data = QueryProviderAttributesRequest.encode(request).finish();
    const promise = this.rpc.request("akash.audit.v1beta2.Query", "ProviderAttributes", data);
    return promise.then(data => QueryProvidersResponse.decode(new _m0.Reader(data)));
  }
  ProviderAuditorAttributes(request: QueryProviderAuditorRequest): Promise<QueryProvidersResponse> {
    const data = QueryProviderAuditorRequest.encode(request).finish();
    const promise = this.rpc.request("akash.audit.v1beta2.Query", "ProviderAuditorAttributes", data);
    return promise.then(data => QueryProvidersResponse.decode(new _m0.Reader(data)));
  }
  AuditorAttributes(request: QueryAuditorAttributesRequest): Promise<QueryProvidersResponse> {
    const data = QueryAuditorAttributesRequest.encode(request).finish();
    const promise = this.rpc.request("akash.audit.v1beta2.Query", "AuditorAttributes", data);
    return promise.then(data => QueryProvidersResponse.decode(new _m0.Reader(data)));
  }
}