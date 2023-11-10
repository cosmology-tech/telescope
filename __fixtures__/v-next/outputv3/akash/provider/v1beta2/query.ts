import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderAmino, ProviderSDKType } from "./provider";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.provider.v1beta2";
/** QueryProvidersRequest is request type for the Query/Providers RPC method */
export interface QueryProvidersRequest {
  pagination?: PageRequest;
}
export interface QueryProvidersRequestProtoMsg {
  typeUrl: "/akash.provider.v1beta2.QueryProvidersRequest";
  value: Uint8Array;
}
/** QueryProvidersRequest is request type for the Query/Providers RPC method */
export interface QueryProvidersRequestAmino {
  pagination?: PageRequestAmino;
}
/** QueryProvidersRequest is request type for the Query/Providers RPC method */
export interface QueryProvidersRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponse {
  providers: Provider[];
  pagination?: PageResponse;
}
export interface QueryProvidersResponseProtoMsg {
  typeUrl: "/akash.provider.v1beta2.QueryProvidersResponse";
  value: Uint8Array;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponseAmino {
  providers: ProviderAmino[];
  pagination?: PageResponseAmino;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponseSDKType {
  providers: ProviderSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequest {
  owner: string;
}
export interface QueryProviderRequestProtoMsg {
  typeUrl: "/akash.provider.v1beta2.QueryProviderRequest";
  value: Uint8Array;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequestAmino {
  owner: string;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequestSDKType {
  owner: string;
}
/** QueryProviderResponse is response type for the Query/Provider RPC method */
export interface QueryProviderResponse {
  provider: Provider;
}
export interface QueryProviderResponseProtoMsg {
  typeUrl: "/akash.provider.v1beta2.QueryProviderResponse";
  value: Uint8Array;
}
/** QueryProviderResponse is response type for the Query/Provider RPC method */
export interface QueryProviderResponseAmino {
  provider?: ProviderAmino;
}
/** QueryProviderResponse is response type for the Query/Provider RPC method */
export interface QueryProviderResponseSDKType {
  provider: ProviderSDKType;
}
function createBaseQueryProvidersRequest(): QueryProvidersRequest {
  return {
    pagination: undefined
  };
}
export const QueryProvidersRequest = {
  typeUrl: "/akash.provider.v1beta2.QueryProvidersRequest",
  encode(message: QueryProvidersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryProvidersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProvidersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProvidersRequest {
    const obj = createBaseQueryProvidersRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryProvidersRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProvidersRequest>): QueryProvidersRequest {
    const message = createBaseQueryProvidersRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryProvidersRequestSDKType): QueryProvidersRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryProvidersRequest): QueryProvidersRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryProvidersRequestAmino): QueryProvidersRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryProvidersRequest, useInterfaces: boolean = true): QueryProvidersRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryProvidersRequestProtoMsg, useInterfaces: boolean = true): QueryProvidersRequest {
    return QueryProvidersRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryProvidersRequest): Uint8Array {
    return QueryProvidersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProvidersRequest): QueryProvidersRequestProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta2.QueryProvidersRequest",
      value: QueryProvidersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProvidersResponse(): QueryProvidersResponse {
  return {
    providers: [],
    pagination: undefined
  };
}
export const QueryProvidersResponse = {
  typeUrl: "/akash.provider.v1beta2.QueryProvidersResponse",
  encode(message: QueryProvidersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.providers) {
      Provider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryProvidersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProvidersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers.push(Provider.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
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
    if (Array.isArray(object?.providers)) obj.providers = object.providers.map((e: any) => Provider.fromJSON(e));
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
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryProvidersResponseSDKType): QueryProvidersResponse {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryProvidersResponse): QueryProvidersResponseSDKType {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? Provider.toSDK(e) : undefined);
    } else {
      obj.providers = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryProvidersResponseAmino): QueryProvidersResponse {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryProvidersResponse, useInterfaces: boolean = true): QueryProvidersResponseAmino {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? Provider.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.providers = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryProvidersResponseProtoMsg, useInterfaces: boolean = true): QueryProvidersResponse {
    return QueryProvidersResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryProvidersResponse): Uint8Array {
    return QueryProvidersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProvidersResponse): QueryProvidersResponseProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta2.QueryProvidersResponse",
      value: QueryProvidersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProviderRequest(): QueryProviderRequest {
  return {
    owner: ""
  };
}
export const QueryProviderRequest = {
  typeUrl: "/akash.provider.v1beta2.QueryProviderRequest",
  encode(message: QueryProviderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryProviderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: QueryProviderRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProviderRequest>): QueryProviderRequest {
    const message = createBaseQueryProviderRequest();
    message.owner = object.owner ?? "";
    return message;
  },
  fromSDK(object: QueryProviderRequestSDKType): QueryProviderRequest {
    return {
      owner: object?.owner
    };
  },
  toSDK(message: QueryProviderRequest): QueryProviderRequestSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  },
  fromAmino(object: QueryProviderRequestAmino): QueryProviderRequest {
    return {
      owner: object.owner
    };
  },
  toAmino(message: QueryProviderRequest, useInterfaces: boolean = true): QueryProviderRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  },
  fromProtoMsg(message: QueryProviderRequestProtoMsg, useInterfaces: boolean = true): QueryProviderRequest {
    return QueryProviderRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryProviderRequest): Uint8Array {
    return QueryProviderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderRequest): QueryProviderRequestProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta2.QueryProviderRequest",
      value: QueryProviderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProviderResponse(): QueryProviderResponse {
  return {
    provider: Provider.fromPartial({})
  };
}
export const QueryProviderResponse = {
  typeUrl: "/akash.provider.v1beta2.QueryProviderResponse",
  encode(message: QueryProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== undefined) {
      Provider.encode(message.provider, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = Provider.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProviderResponse {
    const obj = createBaseQueryProviderResponse();
    if (isSet(object.provider)) obj.provider = Provider.fromJSON(object.provider);
    return obj;
  },
  toJSON(message: QueryProviderResponse): unknown {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider ? Provider.toJSON(message.provider) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProviderResponse>): QueryProviderResponse {
    const message = createBaseQueryProviderResponse();
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = Provider.fromPartial(object.provider);
    }
    return message;
  },
  fromSDK(object: QueryProviderResponseSDKType): QueryProviderResponse {
    return {
      provider: object.provider ? Provider.fromSDK(object.provider) : undefined
    };
  },
  toSDK(message: QueryProviderResponse): QueryProviderResponseSDKType {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider ? Provider.toSDK(message.provider) : undefined);
    return obj;
  },
  fromAmino(object: QueryProviderResponseAmino): QueryProviderResponse {
    return {
      provider: object?.provider ? Provider.fromAmino(object.provider) : undefined
    };
  },
  toAmino(message: QueryProviderResponse, useInterfaces: boolean = true): QueryProviderResponseAmino {
    const obj: any = {};
    obj.provider = message.provider ? Provider.toAmino(message.provider, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryProviderResponseProtoMsg, useInterfaces: boolean = true): QueryProviderResponse {
    return QueryProviderResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryProviderResponse): Uint8Array {
    return QueryProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderResponse): QueryProviderResponseProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta2.QueryProviderResponse",
      value: QueryProviderResponse.encode(message).finish()
    };
  }
};