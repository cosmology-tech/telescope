import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BlockID, BlockIDAmino, BlockIDSDKType } from "../../../../tendermint/types/types";
import { Block, BlockAmino, BlockSDKType } from "../../../../tendermint/types/block";
import { NodeInfo, NodeInfoAmino, NodeInfoSDKType } from "../../../../tendermint/p2p/types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
export const protobufPackage = "cosmos.base.tendermint.v1beta1";
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightRequest {
  height: bigint;
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}
export interface GetValidatorSetByHeightRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest";
  value: Uint8Array;
}
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightRequestAmino {
  height?: string;
  /** pagination defines an pagination for the request. */
  pagination?: PageRequestAmino;
}
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightRequestSDKType {
  height: bigint;
  pagination?: PageRequestSDKType;
}
/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightResponse {
  blockHeight: bigint;
  validators: Validator[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}
export interface GetValidatorSetByHeightResponseProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse";
  value: Uint8Array;
}
/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightResponseAmino {
  block_height?: string;
  validators?: ValidatorAmino[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponseAmino;
}
/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightResponseSDKType {
  block_height: bigint;
  validators: ValidatorSDKType[];
  pagination?: PageResponseSDKType;
}
/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetRequest {
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}
export interface GetLatestValidatorSetRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest";
  value: Uint8Array;
}
/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetRequestAmino {
  /** pagination defines an pagination for the request. */
  pagination?: PageRequestAmino;
}
/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetResponse {
  blockHeight: bigint;
  validators: Validator[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}
export interface GetLatestValidatorSetResponseProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse";
  value: Uint8Array;
}
/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetResponseAmino {
  block_height?: string;
  validators?: ValidatorAmino[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponseAmino;
}
/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetResponseSDKType {
  block_height: bigint;
  validators: ValidatorSDKType[];
  pagination?: PageResponseSDKType;
}
/** Validator is the type for the validator-set. */
export interface Validator {
  address: string;
  pubKey?: Any;
  votingPower: bigint;
  proposerPriority: bigint;
}
export interface ValidatorProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Validator";
  value: Uint8Array;
}
/** Validator is the type for the validator-set. */
export interface ValidatorAmino {
  address?: string;
  pub_key?: AnyAmino;
  voting_power?: string;
  proposer_priority?: string;
}
/** Validator is the type for the validator-set. */
export interface ValidatorSDKType {
  address: string;
  pub_key?: AnySDKType;
  voting_power: bigint;
  proposer_priority: bigint;
}
/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightRequest {
  height: bigint;
}
export interface GetBlockByHeightRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest";
  value: Uint8Array;
}
/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightRequestAmino {
  height?: string;
}
/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightRequestSDKType {
  height: bigint;
}
/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightResponse {
  blockId?: BlockID;
  block?: Block;
}
export interface GetBlockByHeightResponseProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse";
  value: Uint8Array;
}
/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightResponseAmino {
  block_id?: BlockIDAmino;
  block?: BlockAmino;
}
/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightResponseSDKType {
  block_id?: BlockIDSDKType;
  block?: BlockSDKType;
}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequest {}
export interface GetLatestBlockRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest";
  value: Uint8Array;
}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequestAmino {}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequestSDKType {}
/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockResponse {
  blockId?: BlockID;
  block?: Block;
}
export interface GetLatestBlockResponseProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse";
  value: Uint8Array;
}
/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockResponseAmino {
  block_id?: BlockIDAmino;
  block?: BlockAmino;
}
/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockResponseSDKType {
  block_id?: BlockIDSDKType;
  block?: BlockSDKType;
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequest {}
export interface GetSyncingRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest";
  value: Uint8Array;
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequestAmino {}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequestSDKType {}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponse {
  syncing: boolean;
}
export interface GetSyncingResponseProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse";
  value: Uint8Array;
}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponseAmino {
  syncing?: boolean;
}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponseSDKType {
  syncing: boolean;
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequest {}
export interface GetNodeInfoRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest";
  value: Uint8Array;
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequestAmino {}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequestSDKType {}
/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoResponse {
  nodeInfo?: NodeInfo;
  applicationVersion?: VersionInfo;
}
export interface GetNodeInfoResponseProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse";
  value: Uint8Array;
}
/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoResponseAmino {
  node_info?: NodeInfoAmino;
  application_version?: VersionInfoAmino;
}
/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoResponseSDKType {
  node_info?: NodeInfoSDKType;
  application_version?: VersionInfoSDKType;
}
/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfo {
  name: string;
  appName: string;
  version: string;
  gitCommit: string;
  buildTags: string;
  goVersion: string;
  buildDeps: Module[];
  /** Since: cosmos-sdk 0.43 */
  cosmosSdkVersion: string;
}
export interface VersionInfoProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo";
  value: Uint8Array;
}
/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfoAmino {
  name?: string;
  app_name?: string;
  version?: string;
  git_commit?: string;
  build_tags?: string;
  go_version?: string;
  build_deps?: ModuleAmino[];
  /** Since: cosmos-sdk 0.43 */
  cosmos_sdk_version?: string;
}
/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfoSDKType {
  name: string;
  app_name: string;
  version: string;
  git_commit: string;
  build_tags: string;
  go_version: string;
  build_deps: ModuleSDKType[];
  cosmos_sdk_version: string;
}
/** Module is the type for VersionInfo */
export interface Module {
  /** module path */
  path: string;
  /** module version */
  version: string;
  /** checksum */
  sum: string;
}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Module";
  value: Uint8Array;
}
/** Module is the type for VersionInfo */
export interface ModuleAmino {
  /** module path */
  path?: string;
  /** module version */
  version?: string;
  /** checksum */
  sum?: string;
}
/** Module is the type for VersionInfo */
export interface ModuleSDKType {
  path: string;
  version: string;
  sum: string;
}
function createBaseGetValidatorSetByHeightRequest(): GetValidatorSetByHeightRequest {
  return {
    height: BigInt(0),
    pagination: undefined
  };
}
export const GetValidatorSetByHeightRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
  aminoType: "cosmos-sdk/GetValidatorSetByHeightRequest",
  encode(message: GetValidatorSetByHeightRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetValidatorSetByHeightRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetValidatorSetByHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetValidatorSetByHeightRequest {
    const obj = createBaseGetValidatorSetByHeightRequest();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: GetValidatorSetByHeightRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetValidatorSetByHeightRequest>): GetValidatorSetByHeightRequest {
    const message = createBaseGetValidatorSetByHeightRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: GetValidatorSetByHeightRequestSDKType): GetValidatorSetByHeightRequest {
    return {
      height: object?.height,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: GetValidatorSetByHeightRequest): GetValidatorSetByHeightRequestSDKType {
    const obj: any = {};
    obj.height = message.height;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: GetValidatorSetByHeightRequestAmino): GetValidatorSetByHeightRequest {
    const message = createBaseGetValidatorSetByHeightRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: GetValidatorSetByHeightRequest, useInterfaces: boolean = true): GetValidatorSetByHeightRequestAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: GetValidatorSetByHeightRequestProtoMsg, useInterfaces: boolean = true): GetValidatorSetByHeightRequest {
    return GetValidatorSetByHeightRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetValidatorSetByHeightRequest): Uint8Array {
    return GetValidatorSetByHeightRequest.encode(message).finish();
  },
  toProtoMsg(message: GetValidatorSetByHeightRequest): GetValidatorSetByHeightRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
      value: GetValidatorSetByHeightRequest.encode(message).finish()
    };
  }
};
function createBaseGetValidatorSetByHeightResponse(): GetValidatorSetByHeightResponse {
  return {
    blockHeight: BigInt(0),
    validators: [],
    pagination: undefined
  };
}
export const GetValidatorSetByHeightResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
  aminoType: "cosmos-sdk/GetValidatorSetByHeightResponse",
  encode(message: GetValidatorSetByHeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetValidatorSetByHeightResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetValidatorSetByHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetValidatorSetByHeightResponse {
    const obj = createBaseGetValidatorSetByHeightResponse();
    if (isSet(object.blockHeight)) obj.blockHeight = BigInt(object.blockHeight.toString());
    if (Array.isArray(object?.validators)) obj.validators = object.validators.map((e: any) => Validator.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: GetValidatorSetByHeightResponse): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetValidatorSetByHeightResponse>): GetValidatorSetByHeightResponse {
    const message = createBaseGetValidatorSetByHeightResponse();
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = BigInt(object.blockHeight.toString());
    }
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: GetValidatorSetByHeightResponseSDKType): GetValidatorSetByHeightResponse {
    return {
      blockHeight: object?.block_height,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: GetValidatorSetByHeightResponse): GetValidatorSetByHeightResponseSDKType {
    const obj: any = {};
    obj.block_height = message.blockHeight;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toSDK(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: GetValidatorSetByHeightResponseAmino): GetValidatorSetByHeightResponse {
    const message = createBaseGetValidatorSetByHeightResponse();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: GetValidatorSetByHeightResponse, useInterfaces: boolean = true): GetValidatorSetByHeightResponseAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight.toString() : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: GetValidatorSetByHeightResponseProtoMsg, useInterfaces: boolean = true): GetValidatorSetByHeightResponse {
    return GetValidatorSetByHeightResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetValidatorSetByHeightResponse): Uint8Array {
    return GetValidatorSetByHeightResponse.encode(message).finish();
  },
  toProtoMsg(message: GetValidatorSetByHeightResponse): GetValidatorSetByHeightResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
      value: GetValidatorSetByHeightResponse.encode(message).finish()
    };
  }
};
function createBaseGetLatestValidatorSetRequest(): GetLatestValidatorSetRequest {
  return {
    pagination: undefined
  };
}
export const GetLatestValidatorSetRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
  aminoType: "cosmos-sdk/GetLatestValidatorSetRequest",
  encode(message: GetLatestValidatorSetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetLatestValidatorSetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestValidatorSetRequest();
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
  fromJSON(object: any): GetLatestValidatorSetRequest {
    const obj = createBaseGetLatestValidatorSetRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: GetLatestValidatorSetRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetLatestValidatorSetRequest>): GetLatestValidatorSetRequest {
    const message = createBaseGetLatestValidatorSetRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: GetLatestValidatorSetRequestSDKType): GetLatestValidatorSetRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: GetLatestValidatorSetRequest): GetLatestValidatorSetRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: GetLatestValidatorSetRequestAmino): GetLatestValidatorSetRequest {
    const message = createBaseGetLatestValidatorSetRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: GetLatestValidatorSetRequest, useInterfaces: boolean = true): GetLatestValidatorSetRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: GetLatestValidatorSetRequestProtoMsg, useInterfaces: boolean = true): GetLatestValidatorSetRequest {
    return GetLatestValidatorSetRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetLatestValidatorSetRequest): Uint8Array {
    return GetLatestValidatorSetRequest.encode(message).finish();
  },
  toProtoMsg(message: GetLatestValidatorSetRequest): GetLatestValidatorSetRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
      value: GetLatestValidatorSetRequest.encode(message).finish()
    };
  }
};
function createBaseGetLatestValidatorSetResponse(): GetLatestValidatorSetResponse {
  return {
    blockHeight: BigInt(0),
    validators: [],
    pagination: undefined
  };
}
export const GetLatestValidatorSetResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
  aminoType: "cosmos-sdk/GetLatestValidatorSetResponse",
  encode(message: GetLatestValidatorSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetLatestValidatorSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetLatestValidatorSetResponse {
    const obj = createBaseGetLatestValidatorSetResponse();
    if (isSet(object.blockHeight)) obj.blockHeight = BigInt(object.blockHeight.toString());
    if (Array.isArray(object?.validators)) obj.validators = object.validators.map((e: any) => Validator.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: GetLatestValidatorSetResponse): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetLatestValidatorSetResponse>): GetLatestValidatorSetResponse {
    const message = createBaseGetLatestValidatorSetResponse();
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = BigInt(object.blockHeight.toString());
    }
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: GetLatestValidatorSetResponseSDKType): GetLatestValidatorSetResponse {
    return {
      blockHeight: object?.block_height,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: GetLatestValidatorSetResponse): GetLatestValidatorSetResponseSDKType {
    const obj: any = {};
    obj.block_height = message.blockHeight;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toSDK(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: GetLatestValidatorSetResponseAmino): GetLatestValidatorSetResponse {
    const message = createBaseGetLatestValidatorSetResponse();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: GetLatestValidatorSetResponse, useInterfaces: boolean = true): GetLatestValidatorSetResponseAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight.toString() : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: GetLatestValidatorSetResponseProtoMsg, useInterfaces: boolean = true): GetLatestValidatorSetResponse {
    return GetLatestValidatorSetResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetLatestValidatorSetResponse): Uint8Array {
    return GetLatestValidatorSetResponse.encode(message).finish();
  },
  toProtoMsg(message: GetLatestValidatorSetResponse): GetLatestValidatorSetResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
      value: GetLatestValidatorSetResponse.encode(message).finish()
    };
  }
};
function createBaseValidator(): Validator {
  return {
    address: "",
    pubKey: undefined,
    votingPower: BigInt(0),
    proposerPriority: BigInt(0)
  };
}
export const Validator = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Validator",
  aminoType: "cosmos-sdk/Validator",
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.votingPower !== BigInt(0)) {
      writer.uint32(24).int64(message.votingPower);
    }
    if (message.proposerPriority !== BigInt(0)) {
      writer.uint32(32).int64(message.proposerPriority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Validator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = Any.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.votingPower = reader.int64();
          break;
        case 4:
          message.proposerPriority = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    const obj = createBaseValidator();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.pubKey)) obj.pubKey = Any.fromJSON(object.pubKey);
    if (isSet(object.votingPower)) obj.votingPower = BigInt(object.votingPower.toString());
    if (isSet(object.proposerPriority)) obj.proposerPriority = BigInt(object.proposerPriority.toString());
    return obj;
  },
  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.votingPower !== undefined && (obj.votingPower = (message.votingPower || BigInt(0)).toString());
    message.proposerPriority !== undefined && (obj.proposerPriority = (message.proposerPriority || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? "";
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = Any.fromPartial(object.pubKey);
    }
    if (object.votingPower !== undefined && object.votingPower !== null) {
      message.votingPower = BigInt(object.votingPower.toString());
    }
    if (object.proposerPriority !== undefined && object.proposerPriority !== null) {
      message.proposerPriority = BigInt(object.proposerPriority.toString());
    }
    return message;
  },
  fromSDK(object: ValidatorSDKType): Validator {
    return {
      address: object?.address,
      pubKey: object.pub_key ? Any.fromSDK(object.pub_key) : undefined,
      votingPower: object?.voting_power,
      proposerPriority: object?.proposer_priority
    };
  },
  toSDK(message: Validator): ValidatorSDKType {
    const obj: any = {};
    obj.address = message.address;
    message.pubKey !== undefined && (obj.pub_key = message.pubKey ? Any.toSDK(message.pubKey) : undefined);
    obj.voting_power = message.votingPower;
    obj.proposer_priority = message.proposerPriority;
    return obj;
  },
  fromAmino(object: ValidatorAmino): Validator {
    const message = createBaseValidator();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = Any.fromAmino(object.pub_key);
    }
    if (object.voting_power !== undefined && object.voting_power !== null) {
      message.votingPower = BigInt(object.voting_power);
    }
    if (object.proposer_priority !== undefined && object.proposer_priority !== null) {
      message.proposerPriority = BigInt(object.proposer_priority);
    }
    return message;
  },
  toAmino(message: Validator, useInterfaces: boolean = true): ValidatorAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pub_key = message.pubKey ? Any.toAmino(message.pubKey, useInterfaces) : undefined;
    obj.voting_power = message.votingPower !== BigInt(0) ? message.votingPower.toString() : undefined;
    obj.proposer_priority = message.proposerPriority !== BigInt(0) ? message.proposerPriority.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: ValidatorProtoMsg, useInterfaces: boolean = true): Validator {
    return Validator.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Validator): Uint8Array {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message: Validator): ValidatorProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
function createBaseGetBlockByHeightRequest(): GetBlockByHeightRequest {
  return {
    height: BigInt(0)
  };
}
export const GetBlockByHeightRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
  aminoType: "cosmos-sdk/GetBlockByHeightRequest",
  encode(message: GetBlockByHeightRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetBlockByHeightRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetBlockByHeightRequest {
    const obj = createBaseGetBlockByHeightRequest();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    return obj;
  },
  toJSON(message: GetBlockByHeightRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<GetBlockByHeightRequest>): GetBlockByHeightRequest {
    const message = createBaseGetBlockByHeightRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    return message;
  },
  fromSDK(object: GetBlockByHeightRequestSDKType): GetBlockByHeightRequest {
    return {
      height: object?.height
    };
  },
  toSDK(message: GetBlockByHeightRequest): GetBlockByHeightRequestSDKType {
    const obj: any = {};
    obj.height = message.height;
    return obj;
  },
  fromAmino(object: GetBlockByHeightRequestAmino): GetBlockByHeightRequest {
    const message = createBaseGetBlockByHeightRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: GetBlockByHeightRequest, useInterfaces: boolean = true): GetBlockByHeightRequestAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: GetBlockByHeightRequestProtoMsg, useInterfaces: boolean = true): GetBlockByHeightRequest {
    return GetBlockByHeightRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetBlockByHeightRequest): Uint8Array {
    return GetBlockByHeightRequest.encode(message).finish();
  },
  toProtoMsg(message: GetBlockByHeightRequest): GetBlockByHeightRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
      value: GetBlockByHeightRequest.encode(message).finish()
    };
  }
};
function createBaseGetBlockByHeightResponse(): GetBlockByHeightResponse {
  return {
    blockId: undefined,
    block: undefined
  };
}
export const GetBlockByHeightResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
  aminoType: "cosmos-sdk/GetBlockByHeightResponse",
  encode(message: GetBlockByHeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetBlockByHeightResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.block = Block.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetBlockByHeightResponse {
    const obj = createBaseGetBlockByHeightResponse();
    if (isSet(object.blockId)) obj.blockId = BlockID.fromJSON(object.blockId);
    if (isSet(object.block)) obj.block = Block.fromJSON(object.block);
    return obj;
  },
  toJSON(message: GetBlockByHeightResponse): unknown {
    const obj: any = {};
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetBlockByHeightResponse>): GetBlockByHeightResponse {
    const message = createBaseGetBlockByHeightResponse();
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = BlockID.fromPartial(object.blockId);
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = Block.fromPartial(object.block);
    }
    return message;
  },
  fromSDK(object: GetBlockByHeightResponseSDKType): GetBlockByHeightResponse {
    return {
      blockId: object.block_id ? BlockID.fromSDK(object.block_id) : undefined,
      block: object.block ? Block.fromSDK(object.block) : undefined
    };
  },
  toSDK(message: GetBlockByHeightResponse): GetBlockByHeightResponseSDKType {
    const obj: any = {};
    message.blockId !== undefined && (obj.block_id = message.blockId ? BlockID.toSDK(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? Block.toSDK(message.block) : undefined);
    return obj;
  },
  fromAmino(object: GetBlockByHeightResponseAmino): GetBlockByHeightResponse {
    const message = createBaseGetBlockByHeightResponse();
    if (object.block_id !== undefined && object.block_id !== null) {
      message.blockId = BlockID.fromAmino(object.block_id);
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = Block.fromAmino(object.block);
    }
    return message;
  },
  toAmino(message: GetBlockByHeightResponse, useInterfaces: boolean = true): GetBlockByHeightResponseAmino {
    const obj: any = {};
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId, useInterfaces) : undefined;
    obj.block = message.block ? Block.toAmino(message.block, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: GetBlockByHeightResponseProtoMsg, useInterfaces: boolean = true): GetBlockByHeightResponse {
    return GetBlockByHeightResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetBlockByHeightResponse): Uint8Array {
    return GetBlockByHeightResponse.encode(message).finish();
  },
  toProtoMsg(message: GetBlockByHeightResponse): GetBlockByHeightResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
      value: GetBlockByHeightResponse.encode(message).finish()
    };
  }
};
function createBaseGetLatestBlockRequest(): GetLatestBlockRequest {
  return {};
}
export const GetLatestBlockRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
  aminoType: "cosmos-sdk/GetLatestBlockRequest",
  encode(_: GetLatestBlockRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetLatestBlockRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestBlockRequest();
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
  fromJSON(_: any): GetLatestBlockRequest {
    const obj = createBaseGetLatestBlockRequest();
    return obj;
  },
  toJSON(_: GetLatestBlockRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<GetLatestBlockRequest>): GetLatestBlockRequest {
    const message = createBaseGetLatestBlockRequest();
    return message;
  },
  fromSDK(_: GetLatestBlockRequestSDKType): GetLatestBlockRequest {
    return {};
  },
  toSDK(_: GetLatestBlockRequest): GetLatestBlockRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: GetLatestBlockRequestAmino): GetLatestBlockRequest {
    const message = createBaseGetLatestBlockRequest();
    return message;
  },
  toAmino(_: GetLatestBlockRequest, useInterfaces: boolean = true): GetLatestBlockRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: GetLatestBlockRequestProtoMsg, useInterfaces: boolean = true): GetLatestBlockRequest {
    return GetLatestBlockRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetLatestBlockRequest): Uint8Array {
    return GetLatestBlockRequest.encode(message).finish();
  },
  toProtoMsg(message: GetLatestBlockRequest): GetLatestBlockRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
      value: GetLatestBlockRequest.encode(message).finish()
    };
  }
};
function createBaseGetLatestBlockResponse(): GetLatestBlockResponse {
  return {
    blockId: undefined,
    block: undefined
  };
}
export const GetLatestBlockResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
  aminoType: "cosmos-sdk/GetLatestBlockResponse",
  encode(message: GetLatestBlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetLatestBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.block = Block.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetLatestBlockResponse {
    const obj = createBaseGetLatestBlockResponse();
    if (isSet(object.blockId)) obj.blockId = BlockID.fromJSON(object.blockId);
    if (isSet(object.block)) obj.block = Block.fromJSON(object.block);
    return obj;
  },
  toJSON(message: GetLatestBlockResponse): unknown {
    const obj: any = {};
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetLatestBlockResponse>): GetLatestBlockResponse {
    const message = createBaseGetLatestBlockResponse();
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = BlockID.fromPartial(object.blockId);
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = Block.fromPartial(object.block);
    }
    return message;
  },
  fromSDK(object: GetLatestBlockResponseSDKType): GetLatestBlockResponse {
    return {
      blockId: object.block_id ? BlockID.fromSDK(object.block_id) : undefined,
      block: object.block ? Block.fromSDK(object.block) : undefined
    };
  },
  toSDK(message: GetLatestBlockResponse): GetLatestBlockResponseSDKType {
    const obj: any = {};
    message.blockId !== undefined && (obj.block_id = message.blockId ? BlockID.toSDK(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? Block.toSDK(message.block) : undefined);
    return obj;
  },
  fromAmino(object: GetLatestBlockResponseAmino): GetLatestBlockResponse {
    const message = createBaseGetLatestBlockResponse();
    if (object.block_id !== undefined && object.block_id !== null) {
      message.blockId = BlockID.fromAmino(object.block_id);
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = Block.fromAmino(object.block);
    }
    return message;
  },
  toAmino(message: GetLatestBlockResponse, useInterfaces: boolean = true): GetLatestBlockResponseAmino {
    const obj: any = {};
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId, useInterfaces) : undefined;
    obj.block = message.block ? Block.toAmino(message.block, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: GetLatestBlockResponseProtoMsg, useInterfaces: boolean = true): GetLatestBlockResponse {
    return GetLatestBlockResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetLatestBlockResponse): Uint8Array {
    return GetLatestBlockResponse.encode(message).finish();
  },
  toProtoMsg(message: GetLatestBlockResponse): GetLatestBlockResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
      value: GetLatestBlockResponse.encode(message).finish()
    };
  }
};
function createBaseGetSyncingRequest(): GetSyncingRequest {
  return {};
}
export const GetSyncingRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest",
  aminoType: "cosmos-sdk/GetSyncingRequest",
  encode(_: GetSyncingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetSyncingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSyncingRequest();
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
  fromJSON(_: any): GetSyncingRequest {
    const obj = createBaseGetSyncingRequest();
    return obj;
  },
  toJSON(_: GetSyncingRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<GetSyncingRequest>): GetSyncingRequest {
    const message = createBaseGetSyncingRequest();
    return message;
  },
  fromSDK(_: GetSyncingRequestSDKType): GetSyncingRequest {
    return {};
  },
  toSDK(_: GetSyncingRequest): GetSyncingRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: GetSyncingRequestAmino): GetSyncingRequest {
    const message = createBaseGetSyncingRequest();
    return message;
  },
  toAmino(_: GetSyncingRequest, useInterfaces: boolean = true): GetSyncingRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: GetSyncingRequestProtoMsg, useInterfaces: boolean = true): GetSyncingRequest {
    return GetSyncingRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetSyncingRequest): Uint8Array {
    return GetSyncingRequest.encode(message).finish();
  },
  toProtoMsg(message: GetSyncingRequest): GetSyncingRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest",
      value: GetSyncingRequest.encode(message).finish()
    };
  }
};
function createBaseGetSyncingResponse(): GetSyncingResponse {
  return {
    syncing: false
  };
}
export const GetSyncingResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse",
  aminoType: "cosmos-sdk/GetSyncingResponse",
  encode(message: GetSyncingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.syncing === true) {
      writer.uint32(8).bool(message.syncing);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetSyncingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSyncingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syncing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetSyncingResponse {
    const obj = createBaseGetSyncingResponse();
    if (isSet(object.syncing)) obj.syncing = Boolean(object.syncing);
    return obj;
  },
  toJSON(message: GetSyncingResponse): unknown {
    const obj: any = {};
    message.syncing !== undefined && (obj.syncing = message.syncing);
    return obj;
  },
  fromPartial(object: DeepPartial<GetSyncingResponse>): GetSyncingResponse {
    const message = createBaseGetSyncingResponse();
    message.syncing = object.syncing ?? false;
    return message;
  },
  fromSDK(object: GetSyncingResponseSDKType): GetSyncingResponse {
    return {
      syncing: object?.syncing
    };
  },
  toSDK(message: GetSyncingResponse): GetSyncingResponseSDKType {
    const obj: any = {};
    obj.syncing = message.syncing;
    return obj;
  },
  fromAmino(object: GetSyncingResponseAmino): GetSyncingResponse {
    const message = createBaseGetSyncingResponse();
    if (object.syncing !== undefined && object.syncing !== null) {
      message.syncing = object.syncing;
    }
    return message;
  },
  toAmino(message: GetSyncingResponse, useInterfaces: boolean = true): GetSyncingResponseAmino {
    const obj: any = {};
    obj.syncing = message.syncing === false ? undefined : message.syncing;
    return obj;
  },
  fromProtoMsg(message: GetSyncingResponseProtoMsg, useInterfaces: boolean = true): GetSyncingResponse {
    return GetSyncingResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetSyncingResponse): Uint8Array {
    return GetSyncingResponse.encode(message).finish();
  },
  toProtoMsg(message: GetSyncingResponse): GetSyncingResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse",
      value: GetSyncingResponse.encode(message).finish()
    };
  }
};
function createBaseGetNodeInfoRequest(): GetNodeInfoRequest {
  return {};
}
export const GetNodeInfoRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
  aminoType: "cosmos-sdk/GetNodeInfoRequest",
  encode(_: GetNodeInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetNodeInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeInfoRequest();
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
  fromJSON(_: any): GetNodeInfoRequest {
    const obj = createBaseGetNodeInfoRequest();
    return obj;
  },
  toJSON(_: GetNodeInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<GetNodeInfoRequest>): GetNodeInfoRequest {
    const message = createBaseGetNodeInfoRequest();
    return message;
  },
  fromSDK(_: GetNodeInfoRequestSDKType): GetNodeInfoRequest {
    return {};
  },
  toSDK(_: GetNodeInfoRequest): GetNodeInfoRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: GetNodeInfoRequestAmino): GetNodeInfoRequest {
    const message = createBaseGetNodeInfoRequest();
    return message;
  },
  toAmino(_: GetNodeInfoRequest, useInterfaces: boolean = true): GetNodeInfoRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: GetNodeInfoRequestProtoMsg, useInterfaces: boolean = true): GetNodeInfoRequest {
    return GetNodeInfoRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetNodeInfoRequest): Uint8Array {
    return GetNodeInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: GetNodeInfoRequest): GetNodeInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
      value: GetNodeInfoRequest.encode(message).finish()
    };
  }
};
function createBaseGetNodeInfoResponse(): GetNodeInfoResponse {
  return {
    nodeInfo: undefined,
    applicationVersion: undefined
  };
}
export const GetNodeInfoResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
  aminoType: "cosmos-sdk/GetNodeInfoResponse",
  encode(message: GetNodeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nodeInfo !== undefined) {
      NodeInfo.encode(message.nodeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.applicationVersion !== undefined) {
      VersionInfo.encode(message.applicationVersion, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GetNodeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeInfo = NodeInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.applicationVersion = VersionInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetNodeInfoResponse {
    const obj = createBaseGetNodeInfoResponse();
    if (isSet(object.nodeInfo)) obj.nodeInfo = NodeInfo.fromJSON(object.nodeInfo);
    if (isSet(object.applicationVersion)) obj.applicationVersion = VersionInfo.fromJSON(object.applicationVersion);
    return obj;
  },
  toJSON(message: GetNodeInfoResponse): unknown {
    const obj: any = {};
    message.nodeInfo !== undefined && (obj.nodeInfo = message.nodeInfo ? NodeInfo.toJSON(message.nodeInfo) : undefined);
    message.applicationVersion !== undefined && (obj.applicationVersion = message.applicationVersion ? VersionInfo.toJSON(message.applicationVersion) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetNodeInfoResponse>): GetNodeInfoResponse {
    const message = createBaseGetNodeInfoResponse();
    if (object.nodeInfo !== undefined && object.nodeInfo !== null) {
      message.nodeInfo = NodeInfo.fromPartial(object.nodeInfo);
    }
    if (object.applicationVersion !== undefined && object.applicationVersion !== null) {
      message.applicationVersion = VersionInfo.fromPartial(object.applicationVersion);
    }
    return message;
  },
  fromSDK(object: GetNodeInfoResponseSDKType): GetNodeInfoResponse {
    return {
      nodeInfo: object.node_info ? NodeInfo.fromSDK(object.node_info) : undefined,
      applicationVersion: object.application_version ? VersionInfo.fromSDK(object.application_version) : undefined
    };
  },
  toSDK(message: GetNodeInfoResponse): GetNodeInfoResponseSDKType {
    const obj: any = {};
    message.nodeInfo !== undefined && (obj.node_info = message.nodeInfo ? NodeInfo.toSDK(message.nodeInfo) : undefined);
    message.applicationVersion !== undefined && (obj.application_version = message.applicationVersion ? VersionInfo.toSDK(message.applicationVersion) : undefined);
    return obj;
  },
  fromAmino(object: GetNodeInfoResponseAmino): GetNodeInfoResponse {
    const message = createBaseGetNodeInfoResponse();
    if (object.node_info !== undefined && object.node_info !== null) {
      message.nodeInfo = NodeInfo.fromAmino(object.node_info);
    }
    if (object.application_version !== undefined && object.application_version !== null) {
      message.applicationVersion = VersionInfo.fromAmino(object.application_version);
    }
    return message;
  },
  toAmino(message: GetNodeInfoResponse, useInterfaces: boolean = true): GetNodeInfoResponseAmino {
    const obj: any = {};
    obj.node_info = message.nodeInfo ? NodeInfo.toAmino(message.nodeInfo, useInterfaces) : undefined;
    obj.application_version = message.applicationVersion ? VersionInfo.toAmino(message.applicationVersion, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: GetNodeInfoResponseProtoMsg, useInterfaces: boolean = true): GetNodeInfoResponse {
    return GetNodeInfoResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GetNodeInfoResponse): Uint8Array {
    return GetNodeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: GetNodeInfoResponse): GetNodeInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
      value: GetNodeInfoResponse.encode(message).finish()
    };
  }
};
function createBaseVersionInfo(): VersionInfo {
  return {
    name: "",
    appName: "",
    version: "",
    gitCommit: "",
    buildTags: "",
    goVersion: "",
    buildDeps: [],
    cosmosSdkVersion: ""
  };
}
export const VersionInfo = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo",
  aminoType: "cosmos-sdk/VersionInfo",
  encode(message: VersionInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.appName !== "") {
      writer.uint32(18).string(message.appName);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.gitCommit !== "") {
      writer.uint32(34).string(message.gitCommit);
    }
    if (message.buildTags !== "") {
      writer.uint32(42).string(message.buildTags);
    }
    if (message.goVersion !== "") {
      writer.uint32(50).string(message.goVersion);
    }
    for (const v of message.buildDeps) {
      Module.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.cosmosSdkVersion !== "") {
      writer.uint32(66).string(message.cosmosSdkVersion);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): VersionInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.appName = reader.string();
          break;
        case 3:
          message.version = reader.string();
          break;
        case 4:
          message.gitCommit = reader.string();
          break;
        case 5:
          message.buildTags = reader.string();
          break;
        case 6:
          message.goVersion = reader.string();
          break;
        case 7:
          message.buildDeps.push(Module.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 8:
          message.cosmosSdkVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VersionInfo {
    const obj = createBaseVersionInfo();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.appName)) obj.appName = String(object.appName);
    if (isSet(object.version)) obj.version = String(object.version);
    if (isSet(object.gitCommit)) obj.gitCommit = String(object.gitCommit);
    if (isSet(object.buildTags)) obj.buildTags = String(object.buildTags);
    if (isSet(object.goVersion)) obj.goVersion = String(object.goVersion);
    if (Array.isArray(object?.buildDeps)) obj.buildDeps = object.buildDeps.map((e: any) => Module.fromJSON(e));
    if (isSet(object.cosmosSdkVersion)) obj.cosmosSdkVersion = String(object.cosmosSdkVersion);
    return obj;
  },
  toJSON(message: VersionInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.appName !== undefined && (obj.appName = message.appName);
    message.version !== undefined && (obj.version = message.version);
    message.gitCommit !== undefined && (obj.gitCommit = message.gitCommit);
    message.buildTags !== undefined && (obj.buildTags = message.buildTags);
    message.goVersion !== undefined && (obj.goVersion = message.goVersion);
    if (message.buildDeps) {
      obj.buildDeps = message.buildDeps.map(e => e ? Module.toJSON(e) : undefined);
    } else {
      obj.buildDeps = [];
    }
    message.cosmosSdkVersion !== undefined && (obj.cosmosSdkVersion = message.cosmosSdkVersion);
    return obj;
  },
  fromPartial(object: DeepPartial<VersionInfo>): VersionInfo {
    const message = createBaseVersionInfo();
    message.name = object.name ?? "";
    message.appName = object.appName ?? "";
    message.version = object.version ?? "";
    message.gitCommit = object.gitCommit ?? "";
    message.buildTags = object.buildTags ?? "";
    message.goVersion = object.goVersion ?? "";
    message.buildDeps = object.buildDeps?.map(e => Module.fromPartial(e)) || [];
    message.cosmosSdkVersion = object.cosmosSdkVersion ?? "";
    return message;
  },
  fromSDK(object: VersionInfoSDKType): VersionInfo {
    return {
      name: object?.name,
      appName: object?.app_name,
      version: object?.version,
      gitCommit: object?.git_commit,
      buildTags: object?.build_tags,
      goVersion: object?.go_version,
      buildDeps: Array.isArray(object?.build_deps) ? object.build_deps.map((e: any) => Module.fromSDK(e)) : [],
      cosmosSdkVersion: object?.cosmos_sdk_version
    };
  },
  toSDK(message: VersionInfo): VersionInfoSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.app_name = message.appName;
    obj.version = message.version;
    obj.git_commit = message.gitCommit;
    obj.build_tags = message.buildTags;
    obj.go_version = message.goVersion;
    if (message.buildDeps) {
      obj.build_deps = message.buildDeps.map(e => e ? Module.toSDK(e) : undefined);
    } else {
      obj.build_deps = [];
    }
    obj.cosmos_sdk_version = message.cosmosSdkVersion;
    return obj;
  },
  fromAmino(object: VersionInfoAmino): VersionInfo {
    const message = createBaseVersionInfo();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.app_name !== undefined && object.app_name !== null) {
      message.appName = object.app_name;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.git_commit !== undefined && object.git_commit !== null) {
      message.gitCommit = object.git_commit;
    }
    if (object.build_tags !== undefined && object.build_tags !== null) {
      message.buildTags = object.build_tags;
    }
    if (object.go_version !== undefined && object.go_version !== null) {
      message.goVersion = object.go_version;
    }
    message.buildDeps = object.build_deps?.map(e => Module.fromAmino(e)) || [];
    if (object.cosmos_sdk_version !== undefined && object.cosmos_sdk_version !== null) {
      message.cosmosSdkVersion = object.cosmos_sdk_version;
    }
    return message;
  },
  toAmino(message: VersionInfo, useInterfaces: boolean = true): VersionInfoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.app_name = message.appName === "" ? undefined : message.appName;
    obj.version = message.version === "" ? undefined : message.version;
    obj.git_commit = message.gitCommit === "" ? undefined : message.gitCommit;
    obj.build_tags = message.buildTags === "" ? undefined : message.buildTags;
    obj.go_version = message.goVersion === "" ? undefined : message.goVersion;
    if (message.buildDeps) {
      obj.build_deps = message.buildDeps.map(e => e ? Module.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.build_deps = message.buildDeps;
    }
    obj.cosmos_sdk_version = message.cosmosSdkVersion === "" ? undefined : message.cosmosSdkVersion;
    return obj;
  },
  fromProtoMsg(message: VersionInfoProtoMsg, useInterfaces: boolean = true): VersionInfo {
    return VersionInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: VersionInfo): Uint8Array {
    return VersionInfo.encode(message).finish();
  },
  toProtoMsg(message: VersionInfo): VersionInfoProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo",
      value: VersionInfo.encode(message).finish()
    };
  }
};
function createBaseModule(): Module {
  return {
    path: "",
    version: "",
    sum: ""
  };
}
export const Module = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Module",
  aminoType: "cosmos-sdk/Module",
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.sum !== "") {
      writer.uint32(26).string(message.sum);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.sum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Module {
    const obj = createBaseModule();
    if (isSet(object.path)) obj.path = String(object.path);
    if (isSet(object.version)) obj.version = String(object.version);
    if (isSet(object.sum)) obj.sum = String(object.sum);
    return obj;
  },
  toJSON(message: Module): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.version !== undefined && (obj.version = message.version);
    message.sum !== undefined && (obj.sum = message.sum);
    return obj;
  },
  fromPartial(object: DeepPartial<Module>): Module {
    const message = createBaseModule();
    message.path = object.path ?? "";
    message.version = object.version ?? "";
    message.sum = object.sum ?? "";
    return message;
  },
  fromSDK(object: ModuleSDKType): Module {
    return {
      path: object?.path,
      version: object?.version,
      sum: object?.sum
    };
  },
  toSDK(message: Module): ModuleSDKType {
    const obj: any = {};
    obj.path = message.path;
    obj.version = message.version;
    obj.sum = message.sum;
    return obj;
  },
  fromAmino(object: ModuleAmino): Module {
    const message = createBaseModule();
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.sum !== undefined && object.sum !== null) {
      message.sum = object.sum;
    }
    return message;
  },
  toAmino(message: Module, useInterfaces: boolean = true): ModuleAmino {
    const obj: any = {};
    obj.path = message.path === "" ? undefined : message.path;
    obj.version = message.version === "" ? undefined : message.version;
    obj.sum = message.sum === "" ? undefined : message.sum;
    return obj;
  },
  fromProtoMsg(message: ModuleProtoMsg, useInterfaces: boolean = true): Module {
    return Module.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.Module",
      value: Module.encode(message).finish()
    };
  }
};