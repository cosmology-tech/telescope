import { Duration } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
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
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParams {
  pubKeyTypes: string[];
}
/** VersionParams contains the ABCI application version. */
export interface VersionParams {
  appVersion: bigint;
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
  decode(input: BinaryReader | Uint8Array, length?: number): ConsensusParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.evidence = EvidenceParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.validator = ValidatorParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.version = VersionParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ConsensusParams>): ConsensusParams {
    const message = createBaseConsensusParams();
    message.block = object.block !== undefined && object.block !== null ? BlockParams.fromPartial(object.block) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceParams.fromPartial(object.evidence) : undefined;
    message.validator = object.validator !== undefined && object.validator !== null ? ValidatorParams.fromPartial(object.validator) : undefined;
    message.version = object.version !== undefined && object.version !== null ? VersionParams.fromPartial(object.version) : undefined;
    return message;
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
  decode(input: BinaryReader | Uint8Array, length?: number): BlockParams {
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
  fromPartial(object: DeepPartial<BlockParams>): BlockParams {
    const message = createBaseBlockParams();
    message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? BigInt(object.maxBytes.toString()) : BigInt(0);
    message.maxGas = object.maxGas !== undefined && object.maxGas !== null ? BigInt(object.maxGas.toString()) : BigInt(0);
    message.timeIotaMs = object.timeIotaMs !== undefined && object.timeIotaMs !== null ? BigInt(object.timeIotaMs.toString()) : BigInt(0);
    return message;
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
  decode(input: BinaryReader | Uint8Array, length?: number): EvidenceParams {
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
          message.maxAgeDuration = Duration.decode(reader, reader.uint32());
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
  fromPartial(object: DeepPartial<EvidenceParams>): EvidenceParams {
    const message = createBaseEvidenceParams();
    message.maxAgeNumBlocks = object.maxAgeNumBlocks !== undefined && object.maxAgeNumBlocks !== null ? BigInt(object.maxAgeNumBlocks.toString()) : BigInt(0);
    message.maxAgeDuration = object.maxAgeDuration !== undefined && object.maxAgeDuration !== null ? Duration.fromPartial(object.maxAgeDuration) : undefined;
    message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? BigInt(object.maxBytes.toString()) : BigInt(0);
    return message;
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
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorParams {
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
  fromPartial(object: DeepPartial<ValidatorParams>): ValidatorParams {
    const message = createBaseValidatorParams();
    message.pubKeyTypes = object.pubKeyTypes?.map(e => e) || [];
    return message;
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
  decode(input: BinaryReader | Uint8Array, length?: number): VersionParams {
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
  fromPartial(object: DeepPartial<VersionParams>): VersionParams {
    const message = createBaseVersionParams();
    message.appVersion = object.appVersion !== undefined && object.appVersion !== null ? BigInt(object.appVersion.toString()) : BigInt(0);
    return message;
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
  decode(input: BinaryReader | Uint8Array, length?: number): HashedParams {
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
  fromPartial(object: DeepPartial<HashedParams>): HashedParams {
    const message = createBaseHashedParams();
    message.blockMaxBytes = object.blockMaxBytes !== undefined && object.blockMaxBytes !== null ? BigInt(object.blockMaxBytes.toString()) : BigInt(0);
    message.blockMaxGas = object.blockMaxGas !== undefined && object.blockMaxGas !== null ? BigInt(object.blockMaxGas.toString()) : BigInt(0);
    return message;
  }
};