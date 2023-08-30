//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { NFT, Class } from "./nft";
import { Long, isSet, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.nft.v1beta1";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method */
export interface QueryBalanceRequest {
  classId: string;
  owner: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method */
export interface QueryBalanceResponse {
  amount: Long;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequest {
  classId: string;
  id: string;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponse {
  owner: string;
}
/** QuerySupplyRequest is the request type for the Query/Supply RPC method */
export interface QuerySupplyRequest {
  classId: string;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponse {
  amount: Long;
}
/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */
export interface QueryNFTsRequest {
  classId: string;
  owner: string;
  pagination: PageRequest;
}
/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */
export interface QueryNFTsResponse {
  nfts: NFT[];
  pagination: PageResponse;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequest {
  classId: string;
  id: string;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponse {
  nft: NFT;
}
/** QueryClassRequest is the request type for the Query/Class RPC method */
export interface QueryClassRequest {
  classId: string;
}
/** QueryClassResponse is the response type for the Query/Class RPC method */
export interface QueryClassResponse {
  class: Class;
}
/** QueryClassesRequest is the request type for the Query/Classes RPC method */
export interface QueryClassesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/** QueryClassesResponse is the response type for the Query/Classes RPC method */
export interface QueryClassesResponse {
  classes: Class[];
  pagination: PageResponse;
}
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    classId: "",
    owner: ""
  };
}
export const QueryBalanceRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest",
  encode(message: QueryBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
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
  fromJSON(object: any): QueryBalanceRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: Partial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.classId = object.classId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest {
    return {
      classId: object.class_id,
      owner: object.owner
    };
  },
  toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBalanceRequest): QueryBalanceRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryBalanceRequest",
      value: QueryBalanceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.decode(message.value);
  },
  toProto(message: QueryBalanceRequest): Uint8Array {
    return QueryBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest",
      value: QueryBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    amount: Long.UZERO
  };
}
export const QueryBalanceResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse",
  encode(message: QueryBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.amount.isZero()) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalanceResponse {
    return {
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse {
    return {
      amount: Long.fromString(object.amount)
    };
  },
  toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBalanceResponse): QueryBalanceResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryBalanceResponse",
      value: QueryBalanceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.decode(message.value);
  },
  toProto(message: QueryBalanceResponse): Uint8Array {
    return QueryBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse",
      value: QueryBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOwnerRequest(): QueryOwnerRequest {
  return {
    classId: "",
    id: ""
  };
}
export const QueryOwnerRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest",
  encode(message: QueryOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOwnerRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  toJSON(message: QueryOwnerRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial(object: Partial<QueryOwnerRequest>): QueryOwnerRequest {
    const message = createBaseQueryOwnerRequest();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryOwnerRequestAmino): QueryOwnerRequest {
    return {
      classId: object.class_id,
      id: object.id
    };
  },
  toAmino(message: QueryOwnerRequest): QueryOwnerRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: QueryOwnerRequestAminoMsg): QueryOwnerRequest {
    return QueryOwnerRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryOwnerRequest): QueryOwnerRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryOwnerRequest",
      value: QueryOwnerRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryOwnerRequestProtoMsg): QueryOwnerRequest {
    return QueryOwnerRequest.decode(message.value);
  },
  toProto(message: QueryOwnerRequest): Uint8Array {
    return QueryOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOwnerRequest): QueryOwnerRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest",
      value: QueryOwnerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOwnerResponse(): QueryOwnerResponse {
  return {
    owner: ""
  };
}
export const QueryOwnerResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse",
  encode(message: QueryOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerResponse();
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
  fromJSON(object: any): QueryOwnerResponse {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toJSON(message: QueryOwnerResponse): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: Partial<QueryOwnerResponse>): QueryOwnerResponse {
    const message = createBaseQueryOwnerResponse();
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueryOwnerResponseAmino): QueryOwnerResponse {
    return {
      owner: object.owner
    };
  },
  toAmino(message: QueryOwnerResponse): QueryOwnerResponseAmino {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryOwnerResponseAminoMsg): QueryOwnerResponse {
    return QueryOwnerResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryOwnerResponse): QueryOwnerResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryOwnerResponse",
      value: QueryOwnerResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryOwnerResponseProtoMsg): QueryOwnerResponse {
    return QueryOwnerResponse.decode(message.value);
  },
  toProto(message: QueryOwnerResponse): Uint8Array {
    return QueryOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOwnerResponse): QueryOwnerResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse",
      value: QueryOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return {
    classId: ""
  };
}
export const QuerySupplyRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest",
  encode(message: QuerySupplyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySupplyRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  toJSON(message: QuerySupplyRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },
  fromPartial(object: Partial<QuerySupplyRequest>): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: QuerySupplyRequestAmino): QuerySupplyRequest {
    return {
      classId: object.class_id
    };
  },
  toAmino(message: QuerySupplyRequest): QuerySupplyRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyRequestAminoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySupplyRequest): QuerySupplyRequestAminoMsg {
    return {
      type: "cosmos-sdk/QuerySupplyRequest",
      value: QuerySupplyRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySupplyRequestProtoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.decode(message.value);
  },
  toProto(message: QuerySupplyRequest): Uint8Array {
    return QuerySupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyRequest): QuerySupplyRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest",
      value: QuerySupplyRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return {
    amount: Long.UZERO
  };
}
export const QuerySupplyResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse",
  encode(message: QuerySupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.amount.isZero()) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySupplyResponse {
    return {
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  toJSON(message: QuerySupplyResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QuerySupplyResponse>): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  },
  fromAmino(object: QuerySupplyResponseAmino): QuerySupplyResponse {
    return {
      amount: Long.fromString(object.amount)
    };
  },
  toAmino(message: QuerySupplyResponse): QuerySupplyResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyResponseAminoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySupplyResponse): QuerySupplyResponseAminoMsg {
    return {
      type: "cosmos-sdk/QuerySupplyResponse",
      value: QuerySupplyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySupplyResponseProtoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.decode(message.value);
  },
  toProto(message: QuerySupplyResponse): Uint8Array {
    return QuerySupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyResponse): QuerySupplyResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse",
      value: QuerySupplyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryNFTsRequest(): QueryNFTsRequest {
  return {
    classId: "",
    owner: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryNFTsRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest",
  encode(message: QueryNFTsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNFTsRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryNFTsRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryNFTsRequest>): QueryNFTsRequest {
    const message = createBaseQueryNFTsRequest();
    message.classId = object.classId ?? "";
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryNFTsRequestAmino): QueryNFTsRequest {
    return {
      classId: object.class_id,
      owner: object.owner,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryNFTsRequest): QueryNFTsRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.owner = message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNFTsRequestAminoMsg): QueryNFTsRequest {
    return QueryNFTsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNFTsRequest): QueryNFTsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryNFTsRequest",
      value: QueryNFTsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNFTsRequestProtoMsg): QueryNFTsRequest {
    return QueryNFTsRequest.decode(message.value);
  },
  toProto(message: QueryNFTsRequest): Uint8Array {
    return QueryNFTsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNFTsRequest): QueryNFTsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest",
      value: QueryNFTsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryNFTsResponse(): QueryNFTsResponse {
  return {
    nfts: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryNFTsResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse",
  encode(message: QueryNFTsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryNFTsResponse {
    return {
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => NFT.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryNFTsResponse): unknown {
    const obj: any = {};
    if (message.nfts) {
      obj.nfts = message.nfts.map(e => e ? NFT.toJSON(e) : undefined);
    } else {
      obj.nfts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryNFTsResponse>): QueryNFTsResponse {
    const message = createBaseQueryNFTsResponse();
    message.nfts = object.nfts?.map(e => NFT.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryNFTsResponseAmino): QueryNFTsResponse {
    return {
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => NFT.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryNFTsResponse): QueryNFTsResponseAmino {
    const obj: any = {};
    if (message.nfts) {
      obj.nfts = message.nfts.map(e => e ? NFT.toAmino(e) : undefined);
    } else {
      obj.nfts = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNFTsResponseAminoMsg): QueryNFTsResponse {
    return QueryNFTsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNFTsResponse): QueryNFTsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryNFTsResponse",
      value: QueryNFTsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNFTsResponseProtoMsg): QueryNFTsResponse {
    return QueryNFTsResponse.decode(message.value);
  },
  toProto(message: QueryNFTsResponse): Uint8Array {
    return QueryNFTsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNFTsResponse): QueryNFTsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse",
      value: QueryNFTsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryNFTRequest(): QueryNFTRequest {
  return {
    classId: "",
    id: ""
  };
}
export const QueryNFTRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest",
  encode(message: QueryNFTRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNFTRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  toJSON(message: QueryNFTRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial(object: Partial<QueryNFTRequest>): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryNFTRequestAmino): QueryNFTRequest {
    return {
      classId: object.class_id,
      id: object.id
    };
  },
  toAmino(message: QueryNFTRequest): QueryNFTRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: QueryNFTRequestAminoMsg): QueryNFTRequest {
    return QueryNFTRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNFTRequest): QueryNFTRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryNFTRequest",
      value: QueryNFTRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNFTRequestProtoMsg): QueryNFTRequest {
    return QueryNFTRequest.decode(message.value);
  },
  toProto(message: QueryNFTRequest): Uint8Array {
    return QueryNFTRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNFTRequest): QueryNFTRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest",
      value: QueryNFTRequest.encode(message).finish()
    };
  }
};
function createBaseQueryNFTResponse(): QueryNFTResponse {
  return {
    nft: NFT.fromPartial({})
  };
}
export const QueryNFTResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse",
  encode(message: QueryNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nft !== undefined) {
      NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft = NFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNFTResponse {
    return {
      nft: isSet(object.nft) ? NFT.fromJSON(object.nft) : undefined
    };
  },
  toJSON(message: QueryNFTResponse): unknown {
    const obj: any = {};
    message.nft !== undefined && (obj.nft = message.nft ? NFT.toJSON(message.nft) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryNFTResponse>): QueryNFTResponse {
    const message = createBaseQueryNFTResponse();
    message.nft = object.nft !== undefined && object.nft !== null ? NFT.fromPartial(object.nft) : undefined;
    return message;
  },
  fromAmino(object: QueryNFTResponseAmino): QueryNFTResponse {
    return {
      nft: object?.nft ? NFT.fromAmino(object.nft) : undefined
    };
  },
  toAmino(message: QueryNFTResponse): QueryNFTResponseAmino {
    const obj: any = {};
    obj.nft = message.nft ? NFT.toAmino(message.nft) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNFTResponseAminoMsg): QueryNFTResponse {
    return QueryNFTResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNFTResponse): QueryNFTResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryNFTResponse",
      value: QueryNFTResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNFTResponseProtoMsg): QueryNFTResponse {
    return QueryNFTResponse.decode(message.value);
  },
  toProto(message: QueryNFTResponse): Uint8Array {
    return QueryNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNFTResponse): QueryNFTResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse",
      value: QueryNFTResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassRequest(): QueryClassRequest {
  return {
    classId: ""
  };
}
export const QueryClassRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest",
  encode(message: QueryClassRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClassRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  toJSON(message: QueryClassRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },
  fromPartial(object: Partial<QueryClassRequest>): QueryClassRequest {
    const message = createBaseQueryClassRequest();
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: QueryClassRequestAmino): QueryClassRequest {
    return {
      classId: object.class_id
    };
  },
  toAmino(message: QueryClassRequest): QueryClassRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg(object: QueryClassRequestAminoMsg): QueryClassRequest {
    return QueryClassRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClassRequest): QueryClassRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryClassRequest",
      value: QueryClassRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClassRequestProtoMsg): QueryClassRequest {
    return QueryClassRequest.decode(message.value);
  },
  toProto(message: QueryClassRequest): Uint8Array {
    return QueryClassRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassRequest): QueryClassRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest",
      value: QueryClassRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassResponse(): QueryClassResponse {
  return {
    class: Class.fromPartial({})
  };
}
export const QueryClassResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse",
  encode(message: QueryClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.class !== undefined) {
      Class.encode(message.class, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class = Class.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClassResponse {
    return {
      class: isSet(object.class) ? Class.fromJSON(object.class) : undefined
    };
  },
  toJSON(message: QueryClassResponse): unknown {
    const obj: any = {};
    message.class !== undefined && (obj.class = message.class ? Class.toJSON(message.class) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryClassResponse>): QueryClassResponse {
    const message = createBaseQueryClassResponse();
    message.class = object.class !== undefined && object.class !== null ? Class.fromPartial(object.class) : undefined;
    return message;
  },
  fromAmino(object: QueryClassResponseAmino): QueryClassResponse {
    return {
      class: object?.class ? Class.fromAmino(object.class) : undefined
    };
  },
  toAmino(message: QueryClassResponse): QueryClassResponseAmino {
    const obj: any = {};
    obj.class = message.class ? Class.toAmino(message.class) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassResponseAminoMsg): QueryClassResponse {
    return QueryClassResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClassResponse): QueryClassResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryClassResponse",
      value: QueryClassResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClassResponseProtoMsg): QueryClassResponse {
    return QueryClassResponse.decode(message.value);
  },
  toProto(message: QueryClassResponse): Uint8Array {
    return QueryClassResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassResponse): QueryClassResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse",
      value: QueryClassResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassesRequest(): QueryClassesRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryClassesRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest",
  encode(message: QueryClassesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesRequest();
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
  fromJSON(object: any): QueryClassesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryClassesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryClassesRequest>): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClassesRequestAmino): QueryClassesRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryClassesRequest): QueryClassesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesRequestAminoMsg): QueryClassesRequest {
    return QueryClassesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClassesRequest): QueryClassesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryClassesRequest",
      value: QueryClassesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClassesRequestProtoMsg): QueryClassesRequest {
    return QueryClassesRequest.decode(message.value);
  },
  toProto(message: QueryClassesRequest): Uint8Array {
    return QueryClassesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesRequest): QueryClassesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest",
      value: QueryClassesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassesResponse(): QueryClassesResponse {
  return {
    classes: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryClassesResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse",
  encode(message: QueryClassesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classes.push(Class.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryClassesResponse {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => Class.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryClassesResponse): unknown {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toJSON(e) : undefined);
    } else {
      obj.classes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryClassesResponse>): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map(e => Class.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClassesResponseAmino): QueryClassesResponse {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => Class.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryClassesResponse): QueryClassesResponseAmino {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toAmino(e) : undefined);
    } else {
      obj.classes = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesResponseAminoMsg): QueryClassesResponse {
    return QueryClassesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClassesResponse): QueryClassesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryClassesResponse",
      value: QueryClassesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClassesResponseProtoMsg): QueryClassesResponse {
    return QueryClassesResponse.decode(message.value);
  },
  toProto(message: QueryClassesResponse): Uint8Array {
    return QueryClassesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesResponse): QueryClassesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse",
      value: QueryClassesResponse.encode(message).finish()
    };
  }
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
  Owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
  /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
  /**
   * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
   * ERC721Enumerable
   */
  NFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponse>;
  /** NFT queries an NFT based on its class and id. */
  NFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
  /** Class queries an NFT class based on its id */
  Class(request: QueryClassRequest): Promise<QueryClassResponse>;
  /** Classes queries all NFT classes */
  Classes(request?: QueryClassesRequest): Promise<QueryClassesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Balance = this.Balance.bind(this);
    this.Owner = this.Owner.bind(this);
    this.Supply = this.Supply.bind(this);
    this.NFTs = this.NFTs.bind(this);
    this.NFT = this.NFT.bind(this);
    this.Class = this.Class.bind(this);
    this.Classes = this.Classes.bind(this);
  }
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new _m0.Reader(data)));
  }
  Owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse> {
    const data = QueryOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Owner", data);
    return promise.then(data => QueryOwnerResponse.decode(new _m0.Reader(data)));
  }
  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Supply", data);
    return promise.then(data => QuerySupplyResponse.decode(new _m0.Reader(data)));
  }
  NFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponse> {
    const data = QueryNFTsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFTs", data);
    return promise.then(data => QueryNFTsResponse.decode(new _m0.Reader(data)));
  }
  NFT(request: QueryNFTRequest): Promise<QueryNFTResponse> {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFT", data);
    return promise.then(data => QueryNFTResponse.decode(new _m0.Reader(data)));
  }
  Class(request: QueryClassRequest): Promise<QueryClassResponse> {
    const data = QueryClassRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Class", data);
    return promise.then(data => QueryClassResponse.decode(new _m0.Reader(data)));
  }
  Classes(request: QueryClassesRequest = {
    pagination: undefined
  }): Promise<QueryClassesResponse> {
    const data = QueryClassesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Classes", data);
    return promise.then(data => QueryClassesResponse.decode(new _m0.Reader(data)));
  }
}