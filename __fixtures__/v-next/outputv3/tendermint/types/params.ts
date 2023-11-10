import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
export const protobufPackage = "tendermint.types";
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParams {
  block: BlockParams;
  evidence: EvidenceParams;
  validator: ValidatorParams;
  version: VersionParams;
}
export interface ConsensusParamsProtoMsg {
  typeUrl: "/tendermint.types.ConsensusParams";
  value: Uint8Array;
}
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParamsAmino {
  block?: BlockParamsAmino;
  evidence?: EvidenceParamsAmino;
  validator?: ValidatorParamsAmino;
  version?: VersionParamsAmino;
}
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParamsSDKType {
  block: BlockParamsSDKType;
  evidence: EvidenceParamsSDKType;
  validator: ValidatorParamsSDKType;
  version: VersionParamsSDKType;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
  /**
   * Max block size, in bytes.
   * Note: must be greater than 0
   */
  maxBytes: bigint;
  /**
   * Max gas per block.
   * Note: must be greater or equal to -1
   */
  maxGas: bigint;
  /**
   * Minimum time increment between consecutive blocks (in milliseconds) If the
   * block header timestamp is ahead of the system clock, decrease this value.
   * 
   * Not exposed to the application.
   */
  timeIotaMs: bigint;
}
export interface BlockParamsProtoMsg {
  typeUrl: "/tendermint.types.BlockParams";
  value: Uint8Array;
}
/** BlockParams contains limits on the block size. */
export interface BlockParamsAmino {
  /**
   * Max block size, in bytes.
   * Note: must be greater than 0
   */
  max_bytes: string;
  /**
   * Max gas per block.
   * Note: must be greater or equal to -1
   */
  max_gas: string;
  /**
   * Minimum time increment between consecutive blocks (in milliseconds) If the
   * block header timestamp is ahead of the system clock, decrease this value.
   * 
   * Not exposed to the application.
   */
  time_iota_ms: string;
}
/** BlockParams contains limits on the block size. */
export interface BlockParamsSDKType {
  max_bytes: bigint;
  max_gas: bigint;
  time_iota_ms: bigint;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParams {
  /**
   * Max age of evidence, in blocks.
   * 
   * The basic formula for calculating this is: MaxAgeDuration / {average block
   * time}.
   */
  maxAgeNumBlocks: bigint;
  /**
   * Max age of evidence, in time.
   * 
   * It should correspond with an app's "unbonding period" or other similar
   * mechanism for handling [Nothing-At-Stake
   * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
   */
  maxAgeDuration: Duration;
  /**
   * This sets the maximum size of total evidence in bytes that can be committed in a single block.
   * and should fall comfortably under the max block bytes.
   * Default is 1048576 or 1MB
   */
  maxBytes: bigint;
}
export interface EvidenceParamsProtoMsg {
  typeUrl: "/tendermint.types.EvidenceParams";
  value: Uint8Array;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParamsAmino {
  /**
   * Max age of evidence, in blocks.
   * 
   * The basic formula for calculating this is: MaxAgeDuration / {average block
   * time}.
   */
  max_age_num_blocks: string;
  /**
   * Max age of evidence, in time.
   * 
   * It should correspond with an app's "unbonding period" or other similar
   * mechanism for handling [Nothing-At-Stake
   * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
   */
  max_age_duration?: DurationAmino;
  /**
   * This sets the maximum size of total evidence in bytes that can be committed in a single block.
   * and should fall comfortably under the max block bytes.
   * Default is 1048576 or 1MB
   */
  max_bytes: string;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParamsSDKType {
  max_age_num_blocks: bigint;
  max_age_duration: DurationSDKType;
  max_bytes: bigint;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParams {
  pubKeyTypes: string[];
}
export interface ValidatorParamsProtoMsg {
  typeUrl: "/tendermint.types.ValidatorParams";
  value: Uint8Array;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParamsAmino {
  pub_key_types: string[];
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParamsSDKType {
  pub_key_types: string[];
}
/** VersionParams contains the ABCI application version. */
export interface VersionParams {
  appVersion: bigint;
}
export interface VersionParamsProtoMsg {
  typeUrl: "/tendermint.types.VersionParams";
  value: Uint8Array;
}
/** VersionParams contains the ABCI application version. */
export interface VersionParamsAmino {
  app_version: string;
}
/** VersionParams contains the ABCI application version. */
export interface VersionParamsSDKType {
  app_version: bigint;
}
/**
 * HashedParams is a subset of ConsensusParams.
 * 
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParams {
  blockMaxBytes: bigint;
  blockMaxGas: bigint;
}
export interface HashedParamsProtoMsg {
  typeUrl: "/tendermint.types.HashedParams";
  value: Uint8Array;
}
/**
 * HashedParams is a subset of ConsensusParams.
 * 
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParamsAmino {
  block_max_bytes: string;
  block_max_gas: string;
}
/**
 * HashedParams is a subset of ConsensusParams.
 * 
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParamsSDKType {
  block_max_bytes: bigint;
  block_max_gas: bigint;
}
function createBaseConsensusParams(): ConsensusParams {
  return {
    block: BlockParams.fromPartial({}),
    evidence: EvidenceParams.fromPartial({}),
    validator: ValidatorParams.fromPartial({}),
    version: VersionParams.fromPartial({})
  };
}
export const ConsensusParams = {
  typeUrl: "/tendermint.types.ConsensusParams",
  encode(message: ConsensusParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.block !== undefined) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    if (message.validator !== undefined) {
      ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }
    if (message.version !== undefined) {
      VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ConsensusParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockParams.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.evidence = EvidenceParams.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.validator = ValidatorParams.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.version = VersionParams.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusParams {
    const obj = createBaseConsensusParams();
    if (isSet(object.block)) obj.block = BlockParams.fromJSON(object.block);
    if (isSet(object.evidence)) obj.evidence = EvidenceParams.fromJSON(object.evidence);
    if (isSet(object.validator)) obj.validator = ValidatorParams.fromJSON(object.validator);
    if (isSet(object.version)) obj.version = VersionParams.fromJSON(object.version);
    return obj;
  },
  toJSON(message: ConsensusParams): unknown {
    const obj: any = {};
    message.block !== undefined && (obj.block = message.block ? BlockParams.toJSON(message.block) : undefined);
    message.evidence !== undefined && (obj.evidence = message.evidence ? EvidenceParams.toJSON(message.evidence) : undefined);
    message.validator !== undefined && (obj.validator = message.validator ? ValidatorParams.toJSON(message.validator) : undefined);
    message.version !== undefined && (obj.version = message.version ? VersionParams.toJSON(message.version) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ConsensusParams>): ConsensusParams {
    const message = createBaseConsensusParams();
    if (object.block !== undefined && object.block !== null) {
      message.block = BlockParams.fromPartial(object.block);
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = EvidenceParams.fromPartial(object.evidence);
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = ValidatorParams.fromPartial(object.validator);
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = VersionParams.fromPartial(object.version);
    }
    return message;
  },
  fromSDK(object: ConsensusParamsSDKType): ConsensusParams {
    return {
      block: object.block ? BlockParams.fromSDK(object.block) : undefined,
      evidence: object.evidence ? EvidenceParams.fromSDK(object.evidence) : undefined,
      validator: object.validator ? ValidatorParams.fromSDK(object.validator) : undefined,
      version: object.version ? VersionParams.fromSDK(object.version) : undefined
    };
  },
  toSDK(message: ConsensusParams): ConsensusParamsSDKType {
    const obj: any = {};
    message.block !== undefined && (obj.block = message.block ? BlockParams.toSDK(message.block) : undefined);
    message.evidence !== undefined && (obj.evidence = message.evidence ? EvidenceParams.toSDK(message.evidence) : undefined);
    message.validator !== undefined && (obj.validator = message.validator ? ValidatorParams.toSDK(message.validator) : undefined);
    message.version !== undefined && (obj.version = message.version ? VersionParams.toSDK(message.version) : undefined);
    return obj;
  },
  fromAmino(object: ConsensusParamsAmino): ConsensusParams {
    return {
      block: object?.block ? BlockParams.fromAmino(object.block) : undefined,
      evidence: object?.evidence ? EvidenceParams.fromAmino(object.evidence) : undefined,
      validator: object?.validator ? ValidatorParams.fromAmino(object.validator) : undefined,
      version: object?.version ? VersionParams.fromAmino(object.version) : undefined
    };
  },
  toAmino(message: ConsensusParams, useInterfaces: boolean = true): ConsensusParamsAmino {
    const obj: any = {};
    obj.block = message.block ? BlockParams.toAmino(message.block, useInterfaces) : undefined;
    obj.evidence = message.evidence ? EvidenceParams.toAmino(message.evidence, useInterfaces) : undefined;
    obj.validator = message.validator ? ValidatorParams.toAmino(message.validator, useInterfaces) : undefined;
    obj.version = message.version ? VersionParams.toAmino(message.version, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: ConsensusParamsProtoMsg, useInterfaces: boolean = true): ConsensusParams {
    return ConsensusParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ConsensusParams): Uint8Array {
    return ConsensusParams.encode(message).finish();
  },
  toProtoMsg(message: ConsensusParams): ConsensusParamsProtoMsg {
    return {
      typeUrl: "/tendermint.types.ConsensusParams",
      value: ConsensusParams.encode(message).finish()
    };
  }
};
function createBaseBlockParams(): BlockParams {
  return {
    maxBytes: BigInt(0),
    maxGas: BigInt(0),
    timeIotaMs: BigInt(0)
  };
}
export const BlockParams = {
  typeUrl: "/tendermint.types.BlockParams",
  encode(message: BlockParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxBytes !== BigInt(0)) {
      writer.uint32(8).int64(message.maxBytes);
    }
    if (message.maxGas !== BigInt(0)) {
      writer.uint32(16).int64(message.maxGas);
    }
    if (message.timeIotaMs !== BigInt(0)) {
      writer.uint32(24).int64(message.timeIotaMs);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): BlockParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxBytes = reader.int64();
          break;
        case 2:
          message.maxGas = reader.int64();
          break;
        case 3:
          message.timeIotaMs = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockParams {
    const obj = createBaseBlockParams();
    if (isSet(object.maxBytes)) obj.maxBytes = BigInt(object.maxBytes.toString());
    if (isSet(object.maxGas)) obj.maxGas = BigInt(object.maxGas.toString());
    if (isSet(object.timeIotaMs)) obj.timeIotaMs = BigInt(object.timeIotaMs.toString());
    return obj;
  },
  toJSON(message: BlockParams): unknown {
    const obj: any = {};
    message.maxBytes !== undefined && (obj.maxBytes = (message.maxBytes || BigInt(0)).toString());
    message.maxGas !== undefined && (obj.maxGas = (message.maxGas || BigInt(0)).toString());
    message.timeIotaMs !== undefined && (obj.timeIotaMs = (message.timeIotaMs || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<BlockParams>): BlockParams {
    const message = createBaseBlockParams();
    if (object.maxBytes !== undefined && object.maxBytes !== null) {
      message.maxBytes = BigInt(object.maxBytes.toString());
    }
    if (object.maxGas !== undefined && object.maxGas !== null) {
      message.maxGas = BigInt(object.maxGas.toString());
    }
    if (object.timeIotaMs !== undefined && object.timeIotaMs !== null) {
      message.timeIotaMs = BigInt(object.timeIotaMs.toString());
    }
    return message;
  },
  fromSDK(object: BlockParamsSDKType): BlockParams {
    return {
      maxBytes: object?.max_bytes,
      maxGas: object?.max_gas,
      timeIotaMs: object?.time_iota_ms
    };
  },
  toSDK(message: BlockParams): BlockParamsSDKType {
    const obj: any = {};
    obj.max_bytes = message.maxBytes;
    obj.max_gas = message.maxGas;
    obj.time_iota_ms = message.timeIotaMs;
    return obj;
  },
  fromAmino(object: BlockParamsAmino): BlockParams {
    return {
      maxBytes: BigInt(object.max_bytes),
      maxGas: BigInt(object.max_gas),
      timeIotaMs: BigInt(object.time_iota_ms)
    };
  },
  toAmino(message: BlockParams, useInterfaces: boolean = true): BlockParamsAmino {
    const obj: any = {};
    obj.max_bytes = message.maxBytes ? message.maxBytes.toString() : undefined;
    obj.max_gas = message.maxGas ? message.maxGas.toString() : undefined;
    obj.time_iota_ms = message.timeIotaMs ? message.timeIotaMs.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: BlockParamsProtoMsg, useInterfaces: boolean = true): BlockParams {
    return BlockParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: BlockParams): Uint8Array {
    return BlockParams.encode(message).finish();
  },
  toProtoMsg(message: BlockParams): BlockParamsProtoMsg {
    return {
      typeUrl: "/tendermint.types.BlockParams",
      value: BlockParams.encode(message).finish()
    };
  }
};
function createBaseEvidenceParams(): EvidenceParams {
  return {
    maxAgeNumBlocks: BigInt(0),
    maxAgeDuration: Duration.fromPartial({}),
    maxBytes: BigInt(0)
  };
}
export const EvidenceParams = {
  typeUrl: "/tendermint.types.EvidenceParams",
  encode(message: EvidenceParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxAgeNumBlocks !== BigInt(0)) {
      writer.uint32(8).int64(message.maxAgeNumBlocks);
    }
    if (message.maxAgeDuration !== undefined) {
      Duration.encode(message.maxAgeDuration, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxBytes !== BigInt(0)) {
      writer.uint32(24).int64(message.maxBytes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EvidenceParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidenceParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxAgeNumBlocks = reader.int64();
          break;
        case 2:
          message.maxAgeDuration = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.maxBytes = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EvidenceParams {
    const obj = createBaseEvidenceParams();
    if (isSet(object.maxAgeNumBlocks)) obj.maxAgeNumBlocks = BigInt(object.maxAgeNumBlocks.toString());
    if (isSet(object.maxAgeDuration)) obj.maxAgeDuration = Duration.fromJSON(object.maxAgeDuration);
    if (isSet(object.maxBytes)) obj.maxBytes = BigInt(object.maxBytes.toString());
    return obj;
  },
  toJSON(message: EvidenceParams): unknown {
    const obj: any = {};
    message.maxAgeNumBlocks !== undefined && (obj.maxAgeNumBlocks = (message.maxAgeNumBlocks || BigInt(0)).toString());
    message.maxAgeDuration !== undefined && (obj.maxAgeDuration = message.maxAgeDuration ? Duration.toJSON(message.maxAgeDuration) : undefined);
    message.maxBytes !== undefined && (obj.maxBytes = (message.maxBytes || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<EvidenceParams>): EvidenceParams {
    const message = createBaseEvidenceParams();
    if (object.maxAgeNumBlocks !== undefined && object.maxAgeNumBlocks !== null) {
      message.maxAgeNumBlocks = BigInt(object.maxAgeNumBlocks.toString());
    }
    if (object.maxAgeDuration !== undefined && object.maxAgeDuration !== null) {
      message.maxAgeDuration = Duration.fromPartial(object.maxAgeDuration);
    }
    if (object.maxBytes !== undefined && object.maxBytes !== null) {
      message.maxBytes = BigInt(object.maxBytes.toString());
    }
    return message;
  },
  fromSDK(object: EvidenceParamsSDKType): EvidenceParams {
    return {
      maxAgeNumBlocks: object?.max_age_num_blocks,
      maxAgeDuration: object.max_age_duration ? Duration.fromSDK(object.max_age_duration) : undefined,
      maxBytes: object?.max_bytes
    };
  },
  toSDK(message: EvidenceParams): EvidenceParamsSDKType {
    const obj: any = {};
    obj.max_age_num_blocks = message.maxAgeNumBlocks;
    message.maxAgeDuration !== undefined && (obj.max_age_duration = message.maxAgeDuration ? Duration.toSDK(message.maxAgeDuration) : undefined);
    obj.max_bytes = message.maxBytes;
    return obj;
  },
  fromAmino(object: EvidenceParamsAmino): EvidenceParams {
    return {
      maxAgeNumBlocks: BigInt(object.max_age_num_blocks),
      maxAgeDuration: object?.max_age_duration ? Duration.fromAmino(object.max_age_duration) : undefined,
      maxBytes: BigInt(object.max_bytes)
    };
  },
  toAmino(message: EvidenceParams, useInterfaces: boolean = true): EvidenceParamsAmino {
    const obj: any = {};
    obj.max_age_num_blocks = message.maxAgeNumBlocks ? message.maxAgeNumBlocks.toString() : undefined;
    obj.max_age_duration = message.maxAgeDuration ? Duration.toAmino(message.maxAgeDuration, useInterfaces) : undefined;
    obj.max_bytes = message.maxBytes ? message.maxBytes.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: EvidenceParamsProtoMsg, useInterfaces: boolean = true): EvidenceParams {
    return EvidenceParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EvidenceParams): Uint8Array {
    return EvidenceParams.encode(message).finish();
  },
  toProtoMsg(message: EvidenceParams): EvidenceParamsProtoMsg {
    return {
      typeUrl: "/tendermint.types.EvidenceParams",
      value: EvidenceParams.encode(message).finish()
    };
  }
};
function createBaseValidatorParams(): ValidatorParams {
  return {
    pubKeyTypes: []
  };
}
export const ValidatorParams = {
  typeUrl: "/tendermint.types.ValidatorParams",
  encode(message: ValidatorParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pubKeyTypes) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ValidatorParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKeyTypes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorParams {
    const obj = createBaseValidatorParams();
    if (Array.isArray(object?.pubKeyTypes)) obj.pubKeyTypes = object.pubKeyTypes.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: ValidatorParams): unknown {
    const obj: any = {};
    if (message.pubKeyTypes) {
      obj.pubKeyTypes = message.pubKeyTypes.map(e => e);
    } else {
      obj.pubKeyTypes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorParams>): ValidatorParams {
    const message = createBaseValidatorParams();
    message.pubKeyTypes = object.pubKeyTypes?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ValidatorParamsSDKType): ValidatorParams {
    return {
      pubKeyTypes: Array.isArray(object?.pub_key_types) ? object.pub_key_types.map((e: any) => e) : []
    };
  },
  toSDK(message: ValidatorParams): ValidatorParamsSDKType {
    const obj: any = {};
    if (message.pubKeyTypes) {
      obj.pub_key_types = message.pubKeyTypes.map(e => e);
    } else {
      obj.pub_key_types = [];
    }
    return obj;
  },
  fromAmino(object: ValidatorParamsAmino): ValidatorParams {
    return {
      pubKeyTypes: Array.isArray(object?.pub_key_types) ? object.pub_key_types.map((e: any) => e) : []
    };
  },
  toAmino(message: ValidatorParams, useInterfaces: boolean = true): ValidatorParamsAmino {
    const obj: any = {};
    if (message.pubKeyTypes) {
      obj.pub_key_types = message.pubKeyTypes.map(e => e);
    } else {
      obj.pub_key_types = [];
    }
    return obj;
  },
  fromProtoMsg(message: ValidatorParamsProtoMsg, useInterfaces: boolean = true): ValidatorParams {
    return ValidatorParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorParams): Uint8Array {
    return ValidatorParams.encode(message).finish();
  },
  toProtoMsg(message: ValidatorParams): ValidatorParamsProtoMsg {
    return {
      typeUrl: "/tendermint.types.ValidatorParams",
      value: ValidatorParams.encode(message).finish()
    };
  }
};
function createBaseVersionParams(): VersionParams {
  return {
    appVersion: BigInt(0)
  };
}
export const VersionParams = {
  typeUrl: "/tendermint.types.VersionParams",
  encode(message: VersionParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.appVersion !== BigInt(0)) {
      writer.uint32(8).uint64(message.appVersion);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): VersionParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appVersion = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VersionParams {
    const obj = createBaseVersionParams();
    if (isSet(object.appVersion)) obj.appVersion = BigInt(object.appVersion.toString());
    return obj;
  },
  toJSON(message: VersionParams): unknown {
    const obj: any = {};
    message.appVersion !== undefined && (obj.appVersion = (message.appVersion || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<VersionParams>): VersionParams {
    const message = createBaseVersionParams();
    if (object.appVersion !== undefined && object.appVersion !== null) {
      message.appVersion = BigInt(object.appVersion.toString());
    }
    return message;
  },
  fromSDK(object: VersionParamsSDKType): VersionParams {
    return {
      appVersion: object?.app_version
    };
  },
  toSDK(message: VersionParams): VersionParamsSDKType {
    const obj: any = {};
    obj.app_version = message.appVersion;
    return obj;
  },
  fromAmino(object: VersionParamsAmino): VersionParams {
    return {
      appVersion: BigInt(object.app_version)
    };
  },
  toAmino(message: VersionParams, useInterfaces: boolean = true): VersionParamsAmino {
    const obj: any = {};
    obj.app_version = message.appVersion ? message.appVersion.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: VersionParamsProtoMsg, useInterfaces: boolean = true): VersionParams {
    return VersionParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: VersionParams): Uint8Array {
    return VersionParams.encode(message).finish();
  },
  toProtoMsg(message: VersionParams): VersionParamsProtoMsg {
    return {
      typeUrl: "/tendermint.types.VersionParams",
      value: VersionParams.encode(message).finish()
    };
  }
};
function createBaseHashedParams(): HashedParams {
  return {
    blockMaxBytes: BigInt(0),
    blockMaxGas: BigInt(0)
  };
}
export const HashedParams = {
  typeUrl: "/tendermint.types.HashedParams",
  encode(message: HashedParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockMaxBytes !== BigInt(0)) {
      writer.uint32(8).int64(message.blockMaxBytes);
    }
    if (message.blockMaxGas !== BigInt(0)) {
      writer.uint32(16).int64(message.blockMaxGas);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): HashedParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHashedParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockMaxBytes = reader.int64();
          break;
        case 2:
          message.blockMaxGas = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HashedParams {
    const obj = createBaseHashedParams();
    if (isSet(object.blockMaxBytes)) obj.blockMaxBytes = BigInt(object.blockMaxBytes.toString());
    if (isSet(object.blockMaxGas)) obj.blockMaxGas = BigInt(object.blockMaxGas.toString());
    return obj;
  },
  toJSON(message: HashedParams): unknown {
    const obj: any = {};
    message.blockMaxBytes !== undefined && (obj.blockMaxBytes = (message.blockMaxBytes || BigInt(0)).toString());
    message.blockMaxGas !== undefined && (obj.blockMaxGas = (message.blockMaxGas || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<HashedParams>): HashedParams {
    const message = createBaseHashedParams();
    if (object.blockMaxBytes !== undefined && object.blockMaxBytes !== null) {
      message.blockMaxBytes = BigInt(object.blockMaxBytes.toString());
    }
    if (object.blockMaxGas !== undefined && object.blockMaxGas !== null) {
      message.blockMaxGas = BigInt(object.blockMaxGas.toString());
    }
    return message;
  },
  fromSDK(object: HashedParamsSDKType): HashedParams {
    return {
      blockMaxBytes: object?.block_max_bytes,
      blockMaxGas: object?.block_max_gas
    };
  },
  toSDK(message: HashedParams): HashedParamsSDKType {
    const obj: any = {};
    obj.block_max_bytes = message.blockMaxBytes;
    obj.block_max_gas = message.blockMaxGas;
    return obj;
  },
  fromAmino(object: HashedParamsAmino): HashedParams {
    return {
      blockMaxBytes: BigInt(object.block_max_bytes),
      blockMaxGas: BigInt(object.block_max_gas)
    };
  },
  toAmino(message: HashedParams, useInterfaces: boolean = true): HashedParamsAmino {
    const obj: any = {};
    obj.block_max_bytes = message.blockMaxBytes ? message.blockMaxBytes.toString() : undefined;
    obj.block_max_gas = message.blockMaxGas ? message.blockMaxGas.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: HashedParamsProtoMsg, useInterfaces: boolean = true): HashedParams {
    return HashedParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: HashedParams): Uint8Array {
    return HashedParams.encode(message).finish();
  },
  toProtoMsg(message: HashedParams): HashedParamsProtoMsg {
    return {
      typeUrl: "/tendermint.types.HashedParams",
      value: HashedParams.encode(message).finish()
    };
  }
};