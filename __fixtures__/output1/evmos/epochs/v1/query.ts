import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo, EpochInfoSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "../../../helpers";
export const protobufPackage = "evmos.epochs.v1";
export interface QueryEpochsInfoRequest {
  pagination?: PageRequest;
}
export interface QueryEpochsInfoRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryEpochsInfoResponse {
  epochs: EpochInfo[];
  pagination?: PageResponse;
}
export interface QueryEpochsInfoResponseSDKType {
  epochs: EpochInfoSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryCurrentEpochRequest {
  identifier: string;
}
export interface QueryCurrentEpochRequestSDKType {
  identifier: string;
}
export interface QueryCurrentEpochResponse {
  currentEpoch: Long;
}
export interface QueryCurrentEpochResponseSDKType {
  current_epoch: Long;
}

function createBaseQueryEpochsInfoRequest(): QueryEpochsInfoRequest {
  return {
    pagination: undefined
  };
}

export const QueryEpochsInfoRequest = {
  encode(message: QueryEpochsInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochsInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochsInfoRequest();

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

  fromJSON(object: any): QueryEpochsInfoRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryEpochsInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryEpochsInfoRequest>): QueryEpochsInfoRequest {
    const message = createBaseQueryEpochsInfoRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryEpochsInfoRequestSDKType): QueryEpochsInfoRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryEpochsInfoRequest): QueryEpochsInfoRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromSDKJSON(object: any): QueryEpochsInfoRequestSDKType {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  }

};

function createBaseQueryEpochsInfoResponse(): QueryEpochsInfoResponse {
  return {
    epochs: [],
    pagination: undefined
  };
}

export const QueryEpochsInfoResponse = {
  encode(message: QueryEpochsInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochsInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochsInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryEpochsInfoResponse {
    return {
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryEpochsInfoResponse): unknown {
    const obj: any = {};

    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toJSON(e) : undefined);
    } else {
      obj.epochs = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryEpochsInfoResponse>): QueryEpochsInfoResponse {
    const message = createBaseQueryEpochsInfoResponse();
    message.epochs = object.epochs?.map(e => EpochInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryEpochsInfoResponseSDKType): QueryEpochsInfoResponse {
    return {
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryEpochsInfoResponse): QueryEpochsInfoResponseSDKType {
    const obj: any = {};

    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toSDK(e) : undefined);
    } else {
      obj.epochs = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromSDKJSON(object: any): QueryEpochsInfoResponseSDKType {
    return {
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  }

};

function createBaseQueryCurrentEpochRequest(): QueryCurrentEpochRequest {
  return {
    identifier: ""
  };
}

export const QueryCurrentEpochRequest = {
  encode(message: QueryCurrentEpochRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCurrentEpochRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : ""
    };
  },

  toJSON(message: QueryCurrentEpochRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCurrentEpochRequest>): QueryCurrentEpochRequest {
    const message = createBaseQueryCurrentEpochRequest();
    message.identifier = object.identifier ?? "";
    return message;
  },

  fromSDK(object: QueryCurrentEpochRequestSDKType): QueryCurrentEpochRequest {
    return {
      identifier: object?.identifier
    };
  },

  toSDK(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestSDKType {
    const obj: any = {};
    obj.identifier = message.identifier;
    return obj;
  },

  fromSDKJSON(object: any): QueryCurrentEpochRequestSDKType {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : ""
    };
  }

};

function createBaseQueryCurrentEpochResponse(): QueryCurrentEpochResponse {
  return {
    currentEpoch: Long.ZERO
  };
}

export const QueryCurrentEpochResponse = {
  encode(message: QueryCurrentEpochResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.currentEpoch.isZero()) {
      writer.uint32(8).int64(message.currentEpoch);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.currentEpoch = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCurrentEpochResponse {
    return {
      currentEpoch: isSet(object.currentEpoch) ? Long.fromValue(object.currentEpoch) : Long.ZERO
    };
  },

  toJSON(message: QueryCurrentEpochResponse): unknown {
    const obj: any = {};
    message.currentEpoch !== undefined && (obj.currentEpoch = (message.currentEpoch || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCurrentEpochResponse>): QueryCurrentEpochResponse {
    const message = createBaseQueryCurrentEpochResponse();
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? Long.fromValue(object.currentEpoch) : Long.ZERO;
    return message;
  },

  fromSDK(object: QueryCurrentEpochResponseSDKType): QueryCurrentEpochResponse {
    return {
      currentEpoch: object?.current_epoch
    };
  },

  toSDK(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseSDKType {
    const obj: any = {};
    obj.current_epoch = message.currentEpoch;
    return obj;
  },

  fromSDKJSON(object: any): QueryCurrentEpochResponseSDKType {
    return {
      current_epoch: isSet(object.current_epoch) ? Long.fromValue(object.current_epoch) : Long.ZERO
    };
  }

};