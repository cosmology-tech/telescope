import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../query/v1beta1/pagination";
import { Any, AnyAmino } from "../../../../google/protobuf/any";
import { BlockID, BlockIDAmino } from "../../../../tendermint/types/types";
import { Block, BlockAmino } from "../../../../tendermint/types/block";
import { NodeInfo, NodeInfoAmino } from "../../../../tendermint/p2p/types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
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
  height: string;
  /** pagination defines an pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface GetValidatorSetByHeightRequestAminoMsg {
  type: "cosmos-sdk/GetValidatorSetByHeightRequest";
  value: GetValidatorSetByHeightRequestAmino;
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
  block_height: string;
  validators: ValidatorAmino[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponseAmino;
}
export interface GetValidatorSetByHeightResponseAminoMsg {
  type: "cosmos-sdk/GetValidatorSetByHeightResponse";
  value: GetValidatorSetByHeightResponseAmino;
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
export interface GetLatestValidatorSetRequestAminoMsg {
  type: "cosmos-sdk/GetLatestValidatorSetRequest";
  value: GetLatestValidatorSetRequestAmino;
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
  block_height: string;
  validators: ValidatorAmino[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponseAmino;
}
export interface GetLatestValidatorSetResponseAminoMsg {
  type: "cosmos-sdk/GetLatestValidatorSetResponse";
  value: GetLatestValidatorSetResponseAmino;
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
  address: string;
  pub_key?: AnyAmino;
  voting_power: string;
  proposer_priority: string;
}
export interface ValidatorAminoMsg {
  type: "cosmos-sdk/Validator";
  value: ValidatorAmino;
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
  height: string;
}
export interface GetBlockByHeightRequestAminoMsg {
  type: "cosmos-sdk/GetBlockByHeightRequest";
  value: GetBlockByHeightRequestAmino;
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
export interface GetBlockByHeightResponseAminoMsg {
  type: "cosmos-sdk/GetBlockByHeightResponse";
  value: GetBlockByHeightResponseAmino;
}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequest {}
export interface GetLatestBlockRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest";
  value: Uint8Array;
}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequestAmino {}
export interface GetLatestBlockRequestAminoMsg {
  type: "cosmos-sdk/GetLatestBlockRequest";
  value: GetLatestBlockRequestAmino;
}
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
export interface GetLatestBlockResponseAminoMsg {
  type: "cosmos-sdk/GetLatestBlockResponse";
  value: GetLatestBlockResponseAmino;
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequest {}
export interface GetSyncingRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest";
  value: Uint8Array;
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequestAmino {}
export interface GetSyncingRequestAminoMsg {
  type: "cosmos-sdk/GetSyncingRequest";
  value: GetSyncingRequestAmino;
}
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
  syncing: boolean;
}
export interface GetSyncingResponseAminoMsg {
  type: "cosmos-sdk/GetSyncingResponse";
  value: GetSyncingResponseAmino;
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequest {}
export interface GetNodeInfoRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest";
  value: Uint8Array;
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequestAmino {}
export interface GetNodeInfoRequestAminoMsg {
  type: "cosmos-sdk/GetNodeInfoRequest";
  value: GetNodeInfoRequestAmino;
}
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
export interface GetNodeInfoResponseAminoMsg {
  type: "cosmos-sdk/GetNodeInfoResponse";
  value: GetNodeInfoResponseAmino;
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
  name: string;
  app_name: string;
  version: string;
  git_commit: string;
  build_tags: string;
  go_version: string;
  build_deps: ModuleAmino[];
  /** Since: cosmos-sdk 0.43 */
  cosmos_sdk_version: string;
}
export interface VersionInfoAminoMsg {
  type: "cosmos-sdk/VersionInfo";
  value: VersionInfoAmino;
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
  path: string;
  /** module version */
  version: string;
  /** checksum */
  sum: string;
}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
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
  decode(input: BinaryReader | Uint8Array, length?: number): GetValidatorSetByHeightRequest {
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetValidatorSetByHeightRequest>): GetValidatorSetByHeightRequest {
    const message = createBaseGetValidatorSetByHeightRequest();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
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
  toAmino(message: GetValidatorSetByHeightRequest): GetValidatorSetByHeightRequestAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetValidatorSetByHeightRequestAminoMsg): GetValidatorSetByHeightRequest {
    return GetValidatorSetByHeightRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetValidatorSetByHeightRequest): GetValidatorSetByHeightRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetValidatorSetByHeightRequest",
      value: GetValidatorSetByHeightRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetValidatorSetByHeightRequestProtoMsg): GetValidatorSetByHeightRequest {
    return GetValidatorSetByHeightRequest.decode(message.value);
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
  decode(input: BinaryReader | Uint8Array, length?: number): GetValidatorSetByHeightResponse {
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
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetValidatorSetByHeightResponse>): GetValidatorSetByHeightResponse {
    const message = createBaseGetValidatorSetByHeightResponse();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
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
  toAmino(message: GetValidatorSetByHeightResponse): GetValidatorSetByHeightResponseAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetValidatorSetByHeightResponseAminoMsg): GetValidatorSetByHeightResponse {
    return GetValidatorSetByHeightResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetValidatorSetByHeightResponse): GetValidatorSetByHeightResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetValidatorSetByHeightResponse",
      value: GetValidatorSetByHeightResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetValidatorSetByHeightResponseProtoMsg): GetValidatorSetByHeightResponse {
    return GetValidatorSetByHeightResponse.decode(message.value);
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
  decode(input: BinaryReader | Uint8Array, length?: number): GetLatestValidatorSetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestValidatorSetRequest();
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
  fromPartial(object: DeepPartial<GetLatestValidatorSetRequest>): GetLatestValidatorSetRequest {
    const message = createBaseGetLatestValidatorSetRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: GetLatestValidatorSetRequestAmino): GetLatestValidatorSetRequest {
    const message = createBaseGetLatestValidatorSetRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: GetLatestValidatorSetRequest): GetLatestValidatorSetRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetLatestValidatorSetRequestAminoMsg): GetLatestValidatorSetRequest {
    return GetLatestValidatorSetRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetLatestValidatorSetRequest): GetLatestValidatorSetRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetLatestValidatorSetRequest",
      value: GetLatestValidatorSetRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetLatestValidatorSetRequestProtoMsg): GetLatestValidatorSetRequest {
    return GetLatestValidatorSetRequest.decode(message.value);
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
  decode(input: BinaryReader | Uint8Array, length?: number): GetLatestValidatorSetResponse {
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
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetLatestValidatorSetResponse>): GetLatestValidatorSetResponse {
    const message = createBaseGetLatestValidatorSetResponse();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
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
  toAmino(message: GetLatestValidatorSetResponse): GetLatestValidatorSetResponseAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetLatestValidatorSetResponseAminoMsg): GetLatestValidatorSetResponse {
    return GetLatestValidatorSetResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetLatestValidatorSetResponse): GetLatestValidatorSetResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetLatestValidatorSetResponse",
      value: GetLatestValidatorSetResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetLatestValidatorSetResponseProtoMsg): GetLatestValidatorSetResponse {
    return GetLatestValidatorSetResponse.decode(message.value);
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
  decode(input: BinaryReader | Uint8Array, length?: number): Validator {
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
          message.pubKey = Any.decode(reader, reader.uint32());
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
  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? "";
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
    message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt(0);
    message.proposerPriority = object.proposerPriority !== undefined && object.proposerPriority !== null ? BigInt(object.proposerPriority.toString()) : BigInt(0);
    return message;
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
  toAmino(message: Validator): ValidatorAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pub_key = message.pubKey ? Any.toAmino(message.pubKey) : undefined;
    obj.voting_power = message.votingPower !== BigInt(0) ? message.votingPower?.toString() : undefined;
    obj.proposer_priority = message.proposerPriority !== BigInt(0) ? message.proposerPriority?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorAminoMsg): Validator {
    return Validator.fromAmino(object.value);
  },
  toAminoMsg(message: Validator): ValidatorAminoMsg {
    return {
      type: "cosmos-sdk/Validator",
      value: Validator.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorProtoMsg): Validator {
    return Validator.decode(message.value);
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
  decode(input: BinaryReader | Uint8Array, length?: number): GetBlockByHeightRequest {
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
  fromPartial(object: DeepPartial<GetBlockByHeightRequest>): GetBlockByHeightRequest {
    const message = createBaseGetBlockByHeightRequest();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GetBlockByHeightRequestAmino): GetBlockByHeightRequest {
    const message = createBaseGetBlockByHeightRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: GetBlockByHeightRequest): GetBlockByHeightRequestAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GetBlockByHeightRequestAminoMsg): GetBlockByHeightRequest {
    return GetBlockByHeightRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetBlockByHeightRequest): GetBlockByHeightRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetBlockByHeightRequest",
      value: GetBlockByHeightRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetBlockByHeightRequestProtoMsg): GetBlockByHeightRequest {
    return GetBlockByHeightRequest.decode(message.value);
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
  decode(input: BinaryReader | Uint8Array, length?: number): GetBlockByHeightResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = Block.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetBlockByHeightResponse>): GetBlockByHeightResponse {
    const message = createBaseGetBlockByHeightResponse();
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
    return message;
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
  toAmino(message: GetBlockByHeightResponse): GetBlockByHeightResponseAmino {
    const obj: any = {};
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
    obj.block = message.block ? Block.toAmino(message.block) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetBlockByHeightResponseAminoMsg): GetBlockByHeightResponse {
    return GetBlockByHeightResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetBlockByHeightResponse): GetBlockByHeightResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetBlockByHeightResponse",
      value: GetBlockByHeightResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetBlockByHeightResponseProtoMsg): GetBlockByHeightResponse {
    return GetBlockByHeightResponse.decode(message.value);
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
  decode(input: BinaryReader | Uint8Array, length?: number): GetLatestBlockRequest {
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
  fromPartial(_: DeepPartial<GetLatestBlockRequest>): GetLatestBlockRequest {
    const message = createBaseGetLatestBlockRequest();
    return message;
  },
  fromAmino(_: GetLatestBlockRequestAmino): GetLatestBlockRequest {
    const message = createBaseGetLatestBlockRequest();
    return message;
  },
  toAmino(_: GetLatestBlockRequest): GetLatestBlockRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GetLatestBlockRequestAminoMsg): GetLatestBlockRequest {
    return GetLatestBlockRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetLatestBlockRequest): GetLatestBlockRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetLatestBlockRequest",
      value: GetLatestBlockRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetLatestBlockRequestProtoMsg): GetLatestBlockRequest {
    return GetLatestBlockRequest.decode(message.value);
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
  decode(input: BinaryReader | Uint8Array, length?: number): GetLatestBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = Block.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetLatestBlockResponse>): GetLatestBlockResponse {
    const message = createBaseGetLatestBlockResponse();
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
    return message;
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
  toAmino(message: GetLatestBlockResponse): GetLatestBlockResponseAmino {
    const obj: any = {};
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
    obj.block = message.block ? Block.toAmino(message.block) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetLatestBlockResponseAminoMsg): GetLatestBlockResponse {
    return GetLatestBlockResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetLatestBlockResponse): GetLatestBlockResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetLatestBlockResponse",
      value: GetLatestBlockResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetLatestBlockResponseProtoMsg): GetLatestBlockResponse {
    return GetLatestBlockResponse.decode(message.value);
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
  decode(input: BinaryReader | Uint8Array, length?: number): GetSyncingRequest {
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
  fromPartial(_: DeepPartial<GetSyncingRequest>): GetSyncingRequest {
    const message = createBaseGetSyncingRequest();
    return message;
  },
  fromAmino(_: GetSyncingRequestAmino): GetSyncingRequest {
    const message = createBaseGetSyncingRequest();
    return message;
  },
  toAmino(_: GetSyncingRequest): GetSyncingRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GetSyncingRequestAminoMsg): GetSyncingRequest {
    return GetSyncingRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetSyncingRequest): GetSyncingRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetSyncingRequest",
      value: GetSyncingRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetSyncingRequestProtoMsg): GetSyncingRequest {
    return GetSyncingRequest.decode(message.value);
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
  decode(input: BinaryReader | Uint8Array, length?: number): GetSyncingResponse {
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
  fromPartial(object: DeepPartial<GetSyncingResponse>): GetSyncingResponse {
    const message = createBaseGetSyncingResponse();
    message.syncing = object.syncing ?? false;
    return message;
  },
  fromAmino(object: GetSyncingResponseAmino): GetSyncingResponse {
    const message = createBaseGetSyncingResponse();
    if (object.syncing !== undefined && object.syncing !== null) {
      message.syncing = object.syncing;
    }
    return message;
  },
  toAmino(message: GetSyncingResponse): GetSyncingResponseAmino {
    const obj: any = {};
    obj.syncing = message.syncing === false ? undefined : message.syncing;
    return obj;
  },
  fromAminoMsg(object: GetSyncingResponseAminoMsg): GetSyncingResponse {
    return GetSyncingResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetSyncingResponse): GetSyncingResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetSyncingResponse",
      value: GetSyncingResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetSyncingResponseProtoMsg): GetSyncingResponse {
    return GetSyncingResponse.decode(message.value);
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
  decode(input: BinaryReader | Uint8Array, length?: number): GetNodeInfoRequest {
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
  fromPartial(_: DeepPartial<GetNodeInfoRequest>): GetNodeInfoRequest {
    const message = createBaseGetNodeInfoRequest();
    return message;
  },
  fromAmino(_: GetNodeInfoRequestAmino): GetNodeInfoRequest {
    const message = createBaseGetNodeInfoRequest();
    return message;
  },
  toAmino(_: GetNodeInfoRequest): GetNodeInfoRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GetNodeInfoRequestAminoMsg): GetNodeInfoRequest {
    return GetNodeInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetNodeInfoRequest): GetNodeInfoRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetNodeInfoRequest",
      value: GetNodeInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetNodeInfoRequestProtoMsg): GetNodeInfoRequest {
    return GetNodeInfoRequest.decode(message.value);
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
  decode(input: BinaryReader | Uint8Array, length?: number): GetNodeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeInfo = NodeInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.applicationVersion = VersionInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetNodeInfoResponse>): GetNodeInfoResponse {
    const message = createBaseGetNodeInfoResponse();
    message.nodeInfo = object.nodeInfo !== undefined && object.nodeInfo !== null ? NodeInfo.fromPartial(object.nodeInfo) : undefined;
    message.applicationVersion = object.applicationVersion !== undefined && object.applicationVersion !== null ? VersionInfo.fromPartial(object.applicationVersion) : undefined;
    return message;
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
  toAmino(message: GetNodeInfoResponse): GetNodeInfoResponseAmino {
    const obj: any = {};
    obj.node_info = message.nodeInfo ? NodeInfo.toAmino(message.nodeInfo) : undefined;
    obj.application_version = message.applicationVersion ? VersionInfo.toAmino(message.applicationVersion) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetNodeInfoResponseAminoMsg): GetNodeInfoResponse {
    return GetNodeInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetNodeInfoResponse): GetNodeInfoResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetNodeInfoResponse",
      value: GetNodeInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetNodeInfoResponseProtoMsg): GetNodeInfoResponse {
    return GetNodeInfoResponse.decode(message.value);
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
  decode(input: BinaryReader | Uint8Array, length?: number): VersionInfo {
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
          message.buildDeps.push(Module.decode(reader, reader.uint32()));
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
  toAmino(message: VersionInfo): VersionInfoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.app_name = message.appName === "" ? undefined : message.appName;
    obj.version = message.version === "" ? undefined : message.version;
    obj.git_commit = message.gitCommit === "" ? undefined : message.gitCommit;
    obj.build_tags = message.buildTags === "" ? undefined : message.buildTags;
    obj.go_version = message.goVersion === "" ? undefined : message.goVersion;
    if (message.buildDeps) {
      obj.build_deps = message.buildDeps.map(e => e ? Module.toAmino(e) : undefined);
    } else {
      obj.build_deps = message.buildDeps;
    }
    obj.cosmos_sdk_version = message.cosmosSdkVersion === "" ? undefined : message.cosmosSdkVersion;
    return obj;
  },
  fromAminoMsg(object: VersionInfoAminoMsg): VersionInfo {
    return VersionInfo.fromAmino(object.value);
  },
  toAminoMsg(message: VersionInfo): VersionInfoAminoMsg {
    return {
      type: "cosmos-sdk/VersionInfo",
      value: VersionInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: VersionInfoProtoMsg): VersionInfo {
    return VersionInfo.decode(message.value);
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
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
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
  fromPartial(object: DeepPartial<Module>): Module {
    const message = createBaseModule();
    message.path = object.path ?? "";
    message.version = object.version ?? "";
    message.sum = object.sum ?? "";
    return message;
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
  toAmino(message: Module): ModuleAmino {
    const obj: any = {};
    obj.path = message.path === "" ? undefined : message.path;
    obj.version = message.version === "" ? undefined : message.version;
    obj.sum = message.sum === "" ? undefined : message.sum;
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message: Module): ModuleAminoMsg {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleProtoMsg): Module {
    return Module.decode(message.value);
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