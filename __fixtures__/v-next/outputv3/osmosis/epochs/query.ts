import { EpochInfo, EpochInfoAmino, EpochInfoSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, isSet } from "../../helpers";
export const protobufPackage = "osmosis.epochs.v1beta1";
export interface QueryEpochsInfoRequest {}
export interface QueryEpochsInfoRequestProtoMsg {
  typeUrl: "/osmosis.epochs.v1beta1.QueryEpochsInfoRequest";
  value: Uint8Array;
}
export interface QueryEpochsInfoRequestAmino {}
export interface QueryEpochsInfoRequestSDKType {}
export interface QueryEpochsInfoResponse {
  epochs: EpochInfo[];
}
export interface QueryEpochsInfoResponseProtoMsg {
  typeUrl: "/osmosis.epochs.v1beta1.QueryEpochsInfoResponse";
  value: Uint8Array;
}
export interface QueryEpochsInfoResponseAmino {
  epochs?: EpochInfoAmino[];
}
export interface QueryEpochsInfoResponseSDKType {
  epochs: EpochInfoSDKType[];
}
export interface QueryCurrentEpochRequest {
  identifier: string;
}
export interface QueryCurrentEpochRequestProtoMsg {
  typeUrl: "/osmosis.epochs.v1beta1.QueryCurrentEpochRequest";
  value: Uint8Array;
}
export interface QueryCurrentEpochRequestAmino {
  identifier?: string;
}
export interface QueryCurrentEpochRequestSDKType {
  identifier: string;
}
export interface QueryCurrentEpochResponse {
  currentEpoch: bigint;
}
export interface QueryCurrentEpochResponseProtoMsg {
  typeUrl: "/osmosis.epochs.v1beta1.QueryCurrentEpochResponse";
  value: Uint8Array;
}
export interface QueryCurrentEpochResponseAmino {
  current_epoch?: string;
}
export interface QueryCurrentEpochResponseSDKType {
  current_epoch: bigint;
}
function createBaseQueryEpochsInfoRequest(): QueryEpochsInfoRequest {
  return {};
}
export const QueryEpochsInfoRequest = {
  typeUrl: "/osmosis.epochs.v1beta1.QueryEpochsInfoRequest",
  aminoType: "osmosis/epochs/query-epochs-info-request",
  encode(_: QueryEpochsInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryEpochsInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochsInfoRequest();
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
  fromJSON(_: any): QueryEpochsInfoRequest {
    const obj = createBaseQueryEpochsInfoRequest();
    return obj;
  },
  fromPartial(_: DeepPartial<QueryEpochsInfoRequest>): QueryEpochsInfoRequest {
    const message = createBaseQueryEpochsInfoRequest();
    return message;
  },
  fromSDK(_: QueryEpochsInfoRequestSDKType): QueryEpochsInfoRequest {
    return {};
  },
  toSDK(_: QueryEpochsInfoRequest): QueryEpochsInfoRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryEpochsInfoRequestAmino): QueryEpochsInfoRequest {
    const message = createBaseQueryEpochsInfoRequest();
    return message;
  },
  toAmino(_: QueryEpochsInfoRequest, useInterfaces: boolean = true): QueryEpochsInfoRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: QueryEpochsInfoRequestProtoMsg, useInterfaces: boolean = true): QueryEpochsInfoRequest {
    return QueryEpochsInfoRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryEpochsInfoRequest): Uint8Array {
    return QueryEpochsInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochsInfoRequest): QueryEpochsInfoRequestProtoMsg {
    return {
      typeUrl: "/osmosis.epochs.v1beta1.QueryEpochsInfoRequest",
      value: QueryEpochsInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEpochsInfoResponse(): QueryEpochsInfoResponse {
  return {
    epochs: []
  };
}
export const QueryEpochsInfoResponse = {
  typeUrl: "/osmosis.epochs.v1beta1.QueryEpochsInfoResponse",
  aminoType: "osmosis/epochs/query-epochs-info-response",
  encode(message: QueryEpochsInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryEpochsInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochsInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochs.push(EpochInfo.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEpochsInfoResponse {
    const obj = createBaseQueryEpochsInfoResponse();
    if (Array.isArray(object?.epochs)) obj.epochs = object.epochs.map((e: any) => EpochInfo.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryEpochsInfoResponse>): QueryEpochsInfoResponse {
    const message = createBaseQueryEpochsInfoResponse();
    message.epochs = object.epochs?.map(e => EpochInfo.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryEpochsInfoResponseSDKType): QueryEpochsInfoResponse {
    return {
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryEpochsInfoResponse): QueryEpochsInfoResponseSDKType {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toSDK(e) : undefined);
    } else {
      obj.epochs = [];
    }
    return obj;
  },
  fromAmino(object: QueryEpochsInfoResponseAmino): QueryEpochsInfoResponse {
    const message = createBaseQueryEpochsInfoResponse();
    message.epochs = object.epochs?.map(e => EpochInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryEpochsInfoResponse, useInterfaces: boolean = true): QueryEpochsInfoResponseAmino {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.epochs = message.epochs;
    }
    return obj;
  },
  fromProtoMsg(message: QueryEpochsInfoResponseProtoMsg, useInterfaces: boolean = true): QueryEpochsInfoResponse {
    return QueryEpochsInfoResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryEpochsInfoResponse): Uint8Array {
    return QueryEpochsInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochsInfoResponse): QueryEpochsInfoResponseProtoMsg {
    return {
      typeUrl: "/osmosis.epochs.v1beta1.QueryEpochsInfoResponse",
      value: QueryEpochsInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentEpochRequest(): QueryCurrentEpochRequest {
  return {
    identifier: ""
  };
}
export const QueryCurrentEpochRequest = {
  typeUrl: "/osmosis.epochs.v1beta1.QueryCurrentEpochRequest",
  aminoType: "osmosis/epochs/query-current-epoch-request",
  encode(message: QueryCurrentEpochRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryCurrentEpochRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQueryCurrentEpochRequest();
    if (isSet(object.identifier)) obj.identifier = String(object.identifier);
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
  fromAmino(object: QueryCurrentEpochRequestAmino): QueryCurrentEpochRequest {
    const message = createBaseQueryCurrentEpochRequest();
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    }
    return message;
  },
  toAmino(message: QueryCurrentEpochRequest, useInterfaces: boolean = true): QueryCurrentEpochRequestAmino {
    const obj: any = {};
    obj.identifier = message.identifier === "" ? undefined : message.identifier;
    return obj;
  },
  fromProtoMsg(message: QueryCurrentEpochRequestProtoMsg, useInterfaces: boolean = true): QueryCurrentEpochRequest {
    return QueryCurrentEpochRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryCurrentEpochRequest): Uint8Array {
    return QueryCurrentEpochRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestProtoMsg {
    return {
      typeUrl: "/osmosis.epochs.v1beta1.QueryCurrentEpochRequest",
      value: QueryCurrentEpochRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentEpochResponse(): QueryCurrentEpochResponse {
  return {
    currentEpoch: BigInt(0)
  };
}
export const QueryCurrentEpochResponse = {
  typeUrl: "/osmosis.epochs.v1beta1.QueryCurrentEpochResponse",
  aminoType: "osmosis/epochs/query-current-epoch-response",
  encode(message: QueryCurrentEpochResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.currentEpoch !== BigInt(0)) {
      writer.uint32(8).int64(message.currentEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryCurrentEpochResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCurrentEpochResponse {
    const obj = createBaseQueryCurrentEpochResponse();
    if (isSet(object.currentEpoch)) obj.currentEpoch = BigInt(object.currentEpoch.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCurrentEpochResponse>): QueryCurrentEpochResponse {
    const message = createBaseQueryCurrentEpochResponse();
    if (object.currentEpoch !== undefined && object.currentEpoch !== null) {
      message.currentEpoch = BigInt(object.currentEpoch.toString());
    }
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
  fromAmino(object: QueryCurrentEpochResponseAmino): QueryCurrentEpochResponse {
    const message = createBaseQueryCurrentEpochResponse();
    if (object.current_epoch !== undefined && object.current_epoch !== null) {
      message.currentEpoch = BigInt(object.current_epoch);
    }
    return message;
  },
  toAmino(message: QueryCurrentEpochResponse, useInterfaces: boolean = true): QueryCurrentEpochResponseAmino {
    const obj: any = {};
    obj.current_epoch = message.currentEpoch !== BigInt(0) ? message.currentEpoch?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryCurrentEpochResponseProtoMsg, useInterfaces: boolean = true): QueryCurrentEpochResponse {
    return QueryCurrentEpochResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryCurrentEpochResponse): Uint8Array {
    return QueryCurrentEpochResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseProtoMsg {
    return {
      typeUrl: "/osmosis.epochs.v1beta1.QueryCurrentEpochResponse",
      value: QueryCurrentEpochResponse.encode(message).finish()
    };
  }
};