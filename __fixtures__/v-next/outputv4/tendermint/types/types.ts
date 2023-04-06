import { Proof, ProofSDKType } from "../crypto/proof";
import { Consensus, ConsensusSDKType } from "../version/types";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { ValidatorSet, ValidatorSetSDKType } from "./validator";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Long, toTimestamp, fromTimestamp } from "../../helpers";
export const protobufPackage = "tendermint.types";

/** BlockIdFlag indicates which BlcokID the signature is for */
export enum BlockIDFlag {
  BLOCK_ID_FLAG_UNKNOWN = 0,
  BLOCK_ID_FLAG_ABSENT = 1,
  BLOCK_ID_FLAG_COMMIT = 2,
  BLOCK_ID_FLAG_NIL = 3,
  UNRECOGNIZED = -1,
}
export const BlockIDFlagSDKType = BlockIDFlag;
export function blockIDFlagFromJSON(object: any): BlockIDFlag {
  switch (object) {
    case 0:
    case "BLOCK_ID_FLAG_UNKNOWN":
      return BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;

    case 1:
    case "BLOCK_ID_FLAG_ABSENT":
      return BlockIDFlag.BLOCK_ID_FLAG_ABSENT;

    case 2:
    case "BLOCK_ID_FLAG_COMMIT":
      return BlockIDFlag.BLOCK_ID_FLAG_COMMIT;

    case 3:
    case "BLOCK_ID_FLAG_NIL":
      return BlockIDFlag.BLOCK_ID_FLAG_NIL;

    case -1:
    case "UNRECOGNIZED":
    default:
      return BlockIDFlag.UNRECOGNIZED;
  }
}
export function blockIDFlagToJSON(object: BlockIDFlag): string {
  switch (object) {
    case BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN:
      return "BLOCK_ID_FLAG_UNKNOWN";

    case BlockIDFlag.BLOCK_ID_FLAG_ABSENT:
      return "BLOCK_ID_FLAG_ABSENT";

    case BlockIDFlag.BLOCK_ID_FLAG_COMMIT:
      return "BLOCK_ID_FLAG_COMMIT";

    case BlockIDFlag.BLOCK_ID_FLAG_NIL:
      return "BLOCK_ID_FLAG_NIL";

    case BlockIDFlag.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** SignedMsgType is a type of signed message in the consensus. */
export enum SignedMsgType {
  SIGNED_MSG_TYPE_UNKNOWN = 0,

  /** SIGNED_MSG_TYPE_PREVOTE - Votes */
  SIGNED_MSG_TYPE_PREVOTE = 1,
  SIGNED_MSG_TYPE_PRECOMMIT = 2,

  /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
  SIGNED_MSG_TYPE_PROPOSAL = 32,
  UNRECOGNIZED = -1,
}
export const SignedMsgTypeSDKType = SignedMsgType;
export function signedMsgTypeFromJSON(object: any): SignedMsgType {
  switch (object) {
    case 0:
    case "SIGNED_MSG_TYPE_UNKNOWN":
      return SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;

    case 1:
    case "SIGNED_MSG_TYPE_PREVOTE":
      return SignedMsgType.SIGNED_MSG_TYPE_PREVOTE;

    case 2:
    case "SIGNED_MSG_TYPE_PRECOMMIT":
      return SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT;

    case 32:
    case "SIGNED_MSG_TYPE_PROPOSAL":
      return SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL;

    case -1:
    case "UNRECOGNIZED":
    default:
      return SignedMsgType.UNRECOGNIZED;
  }
}
export function signedMsgTypeToJSON(object: SignedMsgType): string {
  switch (object) {
    case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
      return "SIGNED_MSG_TYPE_UNKNOWN";

    case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
      return "SIGNED_MSG_TYPE_PREVOTE";

    case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
      return "SIGNED_MSG_TYPE_PRECOMMIT";

    case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
      return "SIGNED_MSG_TYPE_PROPOSAL";

    case SignedMsgType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** PartsetHeader */
export interface PartSetHeader {
  total: number;
  hash: Uint8Array;
}

/** PartsetHeader */
export interface PartSetHeaderSDKType {
  total: number;
  hash: Uint8Array;
}
export interface Part {
  index: number;
  bytes: Uint8Array;
  proof?: Proof;
}
export interface PartSDKType {
  index: number;
  bytes: Uint8Array;
  proof?: ProofSDKType;
}

/** BlockID */
export interface BlockID {
  hash: Uint8Array;
  partSetHeader?: PartSetHeader;
}

/** BlockID */
export interface BlockIDSDKType {
  hash: Uint8Array;
  part_set_header?: PartSetHeaderSDKType;
}

/** Header defines the structure of a Tendermint block header. */
export interface Header {
  /** basic block info */
  version?: Consensus;
  chainId: string;
  height: bigint;
  time?: Date;

  /** prev block info */
  lastBlockId?: BlockID;

  /** hashes of block data */
  lastCommitHash: Uint8Array;
  dataHash: Uint8Array;

  /** hashes from the app output from the prev block */
  validatorsHash: Uint8Array;

  /** validators for the next block */
  nextValidatorsHash: Uint8Array;

  /** consensus params for current block */
  consensusHash: Uint8Array;

  /** state after txs from the previous block */
  appHash: Uint8Array;
  lastResultsHash: Uint8Array;

  /** consensus info */
  evidenceHash: Uint8Array;

  /** original proposer of the block */
  proposerAddress: Uint8Array;
}

/** Header defines the structure of a Tendermint block header. */
export interface HeaderSDKType {
  version?: ConsensusSDKType;
  chain_id: string;
  height: bigint;
  time?: Date;
  last_block_id?: BlockIDSDKType;
  last_commit_hash: Uint8Array;
  data_hash: Uint8Array;
  validators_hash: Uint8Array;
  next_validators_hash: Uint8Array;
  consensus_hash: Uint8Array;
  app_hash: Uint8Array;
  last_results_hash: Uint8Array;
  evidence_hash: Uint8Array;
  proposer_address: Uint8Array;
}

/** Data contains the set of transactions included in the block */
export interface Data {
  /**
   * Txs that will be applied by state @ block.Height+1.
   * NOTE: not all txs here are valid.  We're just agreeing on the order first.
   * This means that block.AppHash does not include these txs.
   */
  txs: Uint8Array[];
}

/** Data contains the set of transactions included in the block */
export interface DataSDKType {
  txs: Uint8Array[];
}

/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 */
export interface Vote {
  type: SignedMsgType;
  height: bigint;
  round: number;

  /** zero if vote is nil. */
  blockId?: BlockID;
  timestamp?: Date;
  validatorAddress: Uint8Array;
  validatorIndex: number;
  signature: Uint8Array;
}

/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 */
export interface VoteSDKType {
  type: SignedMsgType;
  height: bigint;
  round: number;
  block_id?: BlockIDSDKType;
  timestamp?: Date;
  validator_address: Uint8Array;
  validator_index: number;
  signature: Uint8Array;
}

/** Commit contains the evidence that a block was committed by a set of validators. */
export interface Commit {
  height: bigint;
  round: number;
  blockId?: BlockID;
  signatures: CommitSig[];
}

/** Commit contains the evidence that a block was committed by a set of validators. */
export interface CommitSDKType {
  height: bigint;
  round: number;
  block_id?: BlockIDSDKType;
  signatures: CommitSigSDKType[];
}

/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSig {
  blockIdFlag: BlockIDFlag;
  validatorAddress: Uint8Array;
  timestamp?: Date;
  signature: Uint8Array;
}

/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSigSDKType {
  block_id_flag: BlockIDFlag;
  validator_address: Uint8Array;
  timestamp?: Date;
  signature: Uint8Array;
}
export interface Proposal {
  type: SignedMsgType;
  height: bigint;
  round: number;
  polRound: number;
  blockId?: BlockID;
  timestamp?: Date;
  signature: Uint8Array;
}
export interface ProposalSDKType {
  type: SignedMsgType;
  height: bigint;
  round: number;
  pol_round: number;
  block_id?: BlockIDSDKType;
  timestamp?: Date;
  signature: Uint8Array;
}
export interface SignedHeader {
  header?: Header;
  commit?: Commit;
}
export interface SignedHeaderSDKType {
  header?: HeaderSDKType;
  commit?: CommitSDKType;
}
export interface LightBlock {
  signedHeader?: SignedHeader;
  validatorSet?: ValidatorSet;
}
export interface LightBlockSDKType {
  signed_header?: SignedHeaderSDKType;
  validator_set?: ValidatorSetSDKType;
}
export interface BlockMeta {
  blockId?: BlockID;
  blockSize: bigint;
  header?: Header;
  numTxs: bigint;
}
export interface BlockMetaSDKType {
  block_id?: BlockIDSDKType;
  block_size: bigint;
  header?: HeaderSDKType;
  num_txs: bigint;
}

/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProof {
  rootHash: Uint8Array;
  data: Uint8Array;
  proof?: Proof;
}

/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProofSDKType {
  root_hash: Uint8Array;
  data: Uint8Array;
  proof?: ProofSDKType;
}

function createBasePartSetHeader(): PartSetHeader {
  return {
    total: 0,
    hash: new Uint8Array()
  };
}

export const PartSetHeader = {
  encode(message: PartSetHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total !== 0) {
      writer.uint32(8).uint32(message.total);
    }

    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PartSetHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartSetHeader();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.total = reader.uint32();
          break;

        case 2:
          message.hash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PartSetHeader {
    return {
      total: isSet(object.total) ? Number(object.total) : 0,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },

  toJSON(message: PartSetHeader): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = Math.round(message.total));
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<PartSetHeader>): PartSetHeader {
    const message = createBasePartSetHeader();
    message.total = object.total ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },

  fromSDK(object: PartSetHeaderSDKType): PartSetHeader {
    return {
      total: object?.total,
      hash: object?.hash
    };
  },

  fromSDKJSON(object: any): PartSetHeaderSDKType {
    return {
      total: isSet(object.total) ? Number(object.total) : 0,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },

  toSDK(message: PartSetHeader): PartSetHeaderSDKType {
    const obj: any = {};
    obj.total = message.total;
    obj.hash = message.hash;
    return obj;
  }

};

function createBasePart(): Part {
  return {
    index: 0,
    bytes: new Uint8Array(),
    proof: undefined
  };
}

export const Part = {
  encode(message: Part, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }

    if (message.bytes.length !== 0) {
      writer.uint32(18).bytes(message.bytes);
    }

    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Part {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePart();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;

        case 2:
          message.bytes = reader.bytes();
          break;

        case 3:
          message.proof = Proof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Part {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : new Uint8Array(),
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined
    };
  },

  toJSON(message: Part): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.bytes !== undefined && (obj.bytes = base64FromBytes(message.bytes !== undefined ? message.bytes : new Uint8Array()));
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Part>): Part {
    const message = createBasePart();
    message.index = object.index ?? 0;
    message.bytes = object.bytes ?? new Uint8Array();
    message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
    return message;
  },

  fromSDK(object: PartSDKType): Part {
    return {
      index: object?.index,
      bytes: object?.bytes,
      proof: object.proof ? Proof.fromSDK(object.proof) : undefined
    };
  },

  fromSDKJSON(object: any): PartSDKType {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : new Uint8Array(),
      proof: isSet(object.proof) ? Proof.fromSDKJSON(object.proof) : undefined
    };
  },

  toSDK(message: Part): PartSDKType {
    const obj: any = {};
    obj.index = message.index;
    obj.bytes = message.bytes;
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toSDK(message.proof) : undefined);
    return obj;
  }

};

function createBaseBlockID(): BlockID {
  return {
    hash: new Uint8Array(),
    partSetHeader: undefined
  };
}

export const BlockID = {
  encode(message: BlockID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }

    if (message.partSetHeader !== undefined) {
      PartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockID();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;

        case 2:
          message.partSetHeader = PartSetHeader.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BlockID {
    return {
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      partSetHeader: isSet(object.partSetHeader) ? PartSetHeader.fromJSON(object.partSetHeader) : undefined
    };
  },

  toJSON(message: BlockID): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.partSetHeader !== undefined && (obj.partSetHeader = message.partSetHeader ? PartSetHeader.toJSON(message.partSetHeader) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BlockID>): BlockID {
    const message = createBaseBlockID();
    message.hash = object.hash ?? new Uint8Array();
    message.partSetHeader = object.partSetHeader !== undefined && object.partSetHeader !== null ? PartSetHeader.fromPartial(object.partSetHeader) : undefined;
    return message;
  },

  fromSDK(object: BlockIDSDKType): BlockID {
    return {
      hash: object?.hash,
      partSetHeader: object.part_set_header ? PartSetHeader.fromSDK(object.part_set_header) : undefined
    };
  },

  fromSDKJSON(object: any): BlockIDSDKType {
    return {
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      part_set_header: isSet(object.part_set_header) ? PartSetHeader.fromSDKJSON(object.part_set_header) : undefined
    };
  },

  toSDK(message: BlockID): BlockIDSDKType {
    const obj: any = {};
    obj.hash = message.hash;
    message.partSetHeader !== undefined && (obj.part_set_header = message.partSetHeader ? PartSetHeader.toSDK(message.partSetHeader) : undefined);
    return obj;
  }

};

function createBaseHeader(): Header {
  return {
    version: undefined,
    chainId: "",
    height: BigInt("0"),
    time: undefined,
    lastBlockId: undefined,
    lastCommitHash: new Uint8Array(),
    dataHash: new Uint8Array(),
    validatorsHash: new Uint8Array(),
    nextValidatorsHash: new Uint8Array(),
    consensusHash: new Uint8Array(),
    appHash: new Uint8Array(),
    lastResultsHash: new Uint8Array(),
    evidenceHash: new Uint8Array(),
    proposerAddress: new Uint8Array()
  };
}

export const Header = {
  encode(message: Header, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== undefined) {
      Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(Long.fromString(message.height.toString()));
    }

    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
    }

    if (message.lastBlockId !== undefined) {
      BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
    }

    if (message.lastCommitHash.length !== 0) {
      writer.uint32(50).bytes(message.lastCommitHash);
    }

    if (message.dataHash.length !== 0) {
      writer.uint32(58).bytes(message.dataHash);
    }

    if (message.validatorsHash.length !== 0) {
      writer.uint32(66).bytes(message.validatorsHash);
    }

    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(74).bytes(message.nextValidatorsHash);
    }

    if (message.consensusHash.length !== 0) {
      writer.uint32(82).bytes(message.consensusHash);
    }

    if (message.appHash.length !== 0) {
      writer.uint32(90).bytes(message.appHash);
    }

    if (message.lastResultsHash.length !== 0) {
      writer.uint32(98).bytes(message.lastResultsHash);
    }

    if (message.evidenceHash.length !== 0) {
      writer.uint32(106).bytes(message.evidenceHash);
    }

    if (message.proposerAddress.length !== 0) {
      writer.uint32(114).bytes(message.proposerAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Header {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.version = Consensus.decode(reader, reader.uint32());
          break;

        case 2:
          message.chainId = reader.string();
          break;

        case 3:
          message.height = BigInt(reader.int64().toString());
          break;

        case 4:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.lastBlockId = BlockID.decode(reader, reader.uint32());
          break;

        case 6:
          message.lastCommitHash = reader.bytes();
          break;

        case 7:
          message.dataHash = reader.bytes();
          break;

        case 8:
          message.validatorsHash = reader.bytes();
          break;

        case 9:
          message.nextValidatorsHash = reader.bytes();
          break;

        case 10:
          message.consensusHash = reader.bytes();
          break;

        case 11:
          message.appHash = reader.bytes();
          break;

        case 12:
          message.lastResultsHash = reader.bytes();
          break;

        case 13:
          message.evidenceHash = reader.bytes();
          break;

        case 14:
          message.proposerAddress = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Header {
    return {
      version: isSet(object.version) ? Consensus.fromJSON(object.version) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      time: isSet(object.time) ? new Date(object.time) : undefined,
      lastBlockId: isSet(object.lastBlockId) ? BlockID.fromJSON(object.lastBlockId) : undefined,
      lastCommitHash: isSet(object.lastCommitHash) ? bytesFromBase64(object.lastCommitHash) : new Uint8Array(),
      dataHash: isSet(object.dataHash) ? bytesFromBase64(object.dataHash) : new Uint8Array(),
      validatorsHash: isSet(object.validatorsHash) ? bytesFromBase64(object.validatorsHash) : new Uint8Array(),
      nextValidatorsHash: isSet(object.nextValidatorsHash) ? bytesFromBase64(object.nextValidatorsHash) : new Uint8Array(),
      consensusHash: isSet(object.consensusHash) ? bytesFromBase64(object.consensusHash) : new Uint8Array(),
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array(),
      lastResultsHash: isSet(object.lastResultsHash) ? bytesFromBase64(object.lastResultsHash) : new Uint8Array(),
      evidenceHash: isSet(object.evidenceHash) ? bytesFromBase64(object.evidenceHash) : new Uint8Array(),
      proposerAddress: isSet(object.proposerAddress) ? bytesFromBase64(object.proposerAddress) : new Uint8Array()
    };
  },

  toJSON(message: Header): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version ? Consensus.toJSON(message.version) : undefined);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.height !== undefined && (obj.height = (message.height || BigInt("0")).toString());
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.lastBlockId !== undefined && (obj.lastBlockId = message.lastBlockId ? BlockID.toJSON(message.lastBlockId) : undefined);
    message.lastCommitHash !== undefined && (obj.lastCommitHash = base64FromBytes(message.lastCommitHash !== undefined ? message.lastCommitHash : new Uint8Array()));
    message.dataHash !== undefined && (obj.dataHash = base64FromBytes(message.dataHash !== undefined ? message.dataHash : new Uint8Array()));
    message.validatorsHash !== undefined && (obj.validatorsHash = base64FromBytes(message.validatorsHash !== undefined ? message.validatorsHash : new Uint8Array()));
    message.nextValidatorsHash !== undefined && (obj.nextValidatorsHash = base64FromBytes(message.nextValidatorsHash !== undefined ? message.nextValidatorsHash : new Uint8Array()));
    message.consensusHash !== undefined && (obj.consensusHash = base64FromBytes(message.consensusHash !== undefined ? message.consensusHash : new Uint8Array()));
    message.appHash !== undefined && (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
    message.lastResultsHash !== undefined && (obj.lastResultsHash = base64FromBytes(message.lastResultsHash !== undefined ? message.lastResultsHash : new Uint8Array()));
    message.evidenceHash !== undefined && (obj.evidenceHash = base64FromBytes(message.evidenceHash !== undefined ? message.evidenceHash : new Uint8Array()));
    message.proposerAddress !== undefined && (obj.proposerAddress = base64FromBytes(message.proposerAddress !== undefined ? message.proposerAddress : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<Header>): Header {
    const message = createBaseHeader();
    message.version = object.version !== undefined && object.version !== null ? Consensus.fromPartial(object.version) : undefined;
    message.chainId = object.chainId ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.time = object.time ?? undefined;
    message.lastBlockId = object.lastBlockId !== undefined && object.lastBlockId !== null ? BlockID.fromPartial(object.lastBlockId) : undefined;
    message.lastCommitHash = object.lastCommitHash ?? new Uint8Array();
    message.dataHash = object.dataHash ?? new Uint8Array();
    message.validatorsHash = object.validatorsHash ?? new Uint8Array();
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.consensusHash = object.consensusHash ?? new Uint8Array();
    message.appHash = object.appHash ?? new Uint8Array();
    message.lastResultsHash = object.lastResultsHash ?? new Uint8Array();
    message.evidenceHash = object.evidenceHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  },

  fromSDK(object: HeaderSDKType): Header {
    return {
      version: object.version ? Consensus.fromSDK(object.version) : undefined,
      chainId: object?.chain_id,
      height: object?.height,
      time: object.time ?? undefined,
      lastBlockId: object.last_block_id ? BlockID.fromSDK(object.last_block_id) : undefined,
      lastCommitHash: object?.last_commit_hash,
      dataHash: object?.data_hash,
      validatorsHash: object?.validators_hash,
      nextValidatorsHash: object?.next_validators_hash,
      consensusHash: object?.consensus_hash,
      appHash: object?.app_hash,
      lastResultsHash: object?.last_results_hash,
      evidenceHash: object?.evidence_hash,
      proposerAddress: object?.proposer_address
    };
  },

  fromSDKJSON(object: any): HeaderSDKType {
    return {
      version: isSet(object.version) ? Consensus.fromSDKJSON(object.version) : undefined,
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      time: isSet(object.time) ? new Date(object.time) : undefined,
      last_block_id: isSet(object.last_block_id) ? BlockID.fromSDKJSON(object.last_block_id) : undefined,
      last_commit_hash: isSet(object.last_commit_hash) ? bytesFromBase64(object.last_commit_hash) : new Uint8Array(),
      data_hash: isSet(object.data_hash) ? bytesFromBase64(object.data_hash) : new Uint8Array(),
      validators_hash: isSet(object.validators_hash) ? bytesFromBase64(object.validators_hash) : new Uint8Array(),
      next_validators_hash: isSet(object.next_validators_hash) ? bytesFromBase64(object.next_validators_hash) : new Uint8Array(),
      consensus_hash: isSet(object.consensus_hash) ? bytesFromBase64(object.consensus_hash) : new Uint8Array(),
      app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array(),
      last_results_hash: isSet(object.last_results_hash) ? bytesFromBase64(object.last_results_hash) : new Uint8Array(),
      evidence_hash: isSet(object.evidence_hash) ? bytesFromBase64(object.evidence_hash) : new Uint8Array(),
      proposer_address: isSet(object.proposer_address) ? bytesFromBase64(object.proposer_address) : new Uint8Array()
    };
  },

  toSDK(message: Header): HeaderSDKType {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version ? Consensus.toSDK(message.version) : undefined);
    obj.chain_id = message.chainId;
    obj.height = message.height;
    message.time !== undefined && (obj.time = message.time ?? undefined);
    message.lastBlockId !== undefined && (obj.last_block_id = message.lastBlockId ? BlockID.toSDK(message.lastBlockId) : undefined);
    obj.last_commit_hash = message.lastCommitHash;
    obj.data_hash = message.dataHash;
    obj.validators_hash = message.validatorsHash;
    obj.next_validators_hash = message.nextValidatorsHash;
    obj.consensus_hash = message.consensusHash;
    obj.app_hash = message.appHash;
    obj.last_results_hash = message.lastResultsHash;
    obj.evidence_hash = message.evidenceHash;
    obj.proposer_address = message.proposerAddress;
    return obj;
  }

};

function createBaseData(): Data {
  return {
    txs: []
  };
}

export const Data = {
  encode(message: Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Data {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => bytesFromBase64(e)) : []
    };
  },

  toJSON(message: Data): unknown {
    const obj: any = {};

    if (message.txs) {
      obj.txs = message.txs.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.txs = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Data>): Data {
    const message = createBaseData();
    message.txs = object.txs?.map(e => e) || [];
    return message;
  },

  fromSDK(object: DataSDKType): Data {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => e) : []
    };
  },

  fromSDKJSON(object: any): DataSDKType {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => bytesFromBase64(e)) : []
    };
  },

  toSDK(message: Data): DataSDKType {
    const obj: any = {};

    if (message.txs) {
      obj.txs = message.txs.map(e => e);
    } else {
      obj.txs = [];
    }

    return obj;
  }

};

function createBaseVote(): Vote {
  return {
    type: 0,
    height: BigInt("0"),
    round: 0,
    blockId: undefined,
    timestamp: undefined,
    validatorAddress: new Uint8Array(),
    validatorIndex: 0,
    signature: new Uint8Array()
  };
}

export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }

    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(Long.fromString(message.height.toString()));
    }

    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }

    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
    }

    if (message.validatorAddress.length !== 0) {
      writer.uint32(50).bytes(message.validatorAddress);
    }

    if (message.validatorIndex !== 0) {
      writer.uint32(56).int32(message.validatorIndex);
    }

    if (message.signature.length !== 0) {
      writer.uint32(66).bytes(message.signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = (reader.int32() as any);
          break;

        case 2:
          message.height = BigInt(reader.int64().toString());
          break;

        case 3:
          message.round = reader.int32();
          break;

        case 4:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;

        case 5:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.validatorAddress = reader.bytes();
          break;

        case 7:
          message.validatorIndex = reader.int32();
          break;

        case 8:
          message.signature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Vote {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      round: isSet(object.round) ? Number(object.round) : 0,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      timestamp: isSet(object.timestamp) ? new Date(object.timestamp) : undefined,
      validatorAddress: isSet(object.validatorAddress) ? bytesFromBase64(object.validatorAddress) : new Uint8Array(),
      validatorIndex: isSet(object.validatorIndex) ? Number(object.validatorIndex) : 0,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
    message.height !== undefined && (obj.height = (message.height || BigInt("0")).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.validatorAddress !== undefined && (obj.validatorAddress = base64FromBytes(message.validatorAddress !== undefined ? message.validatorAddress : new Uint8Array()));
    message.validatorIndex !== undefined && (obj.validatorIndex = Math.round(message.validatorIndex));
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = createBaseVote();
    message.type = object.type ?? 0;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.round = object.round ?? 0;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.validatorAddress = object.validatorAddress ?? new Uint8Array();
    message.validatorIndex = object.validatorIndex ?? 0;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },

  fromSDK(object: VoteSDKType): Vote {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      height: object?.height,
      round: object?.round,
      blockId: object.block_id ? BlockID.fromSDK(object.block_id) : undefined,
      timestamp: object.timestamp ?? undefined,
      validatorAddress: object?.validator_address,
      validatorIndex: object?.validator_index,
      signature: object?.signature
    };
  },

  fromSDKJSON(object: any): VoteSDKType {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      round: isSet(object.round) ? Number(object.round) : 0,
      block_id: isSet(object.block_id) ? BlockID.fromSDKJSON(object.block_id) : undefined,
      timestamp: isSet(object.timestamp) ? new Date(object.timestamp) : undefined,
      validator_address: isSet(object.validator_address) ? bytesFromBase64(object.validator_address) : new Uint8Array(),
      validator_index: isSet(object.validator_index) ? Number(object.validator_index) : 0,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },

  toSDK(message: Vote): VoteSDKType {
    const obj: any = {};
    message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
    obj.height = message.height;
    obj.round = message.round;
    message.blockId !== undefined && (obj.block_id = message.blockId ? BlockID.toSDK(message.blockId) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
    obj.validator_address = message.validatorAddress;
    obj.validator_index = message.validatorIndex;
    obj.signature = message.signature;
    return obj;
  }

};

function createBaseCommit(): Commit {
  return {
    height: BigInt("0"),
    round: 0,
    blockId: undefined,
    signatures: []
  };
}

export const Commit = {
  encode(message: Commit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(Long.fromString(message.height.toString()));
    }

    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }

    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.signatures) {
      CommitSig.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Commit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = BigInt(reader.int64().toString());
          break;

        case 2:
          message.round = reader.int32();
          break;

        case 3:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;

        case 4:
          message.signatures.push(CommitSig.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Commit {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      round: isSet(object.round) ? Number(object.round) : 0,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => CommitSig.fromJSON(e)) : []
    };
  },

  toJSON(message: Commit): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt("0")).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);

    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e ? CommitSig.toJSON(e) : undefined);
    } else {
      obj.signatures = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Commit>): Commit {
    const message = createBaseCommit();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.round = object.round ?? 0;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.signatures = object.signatures?.map(e => CommitSig.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: CommitSDKType): Commit {
    return {
      height: object?.height,
      round: object?.round,
      blockId: object.block_id ? BlockID.fromSDK(object.block_id) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => CommitSig.fromSDK(e)) : []
    };
  },

  fromSDKJSON(object: any): CommitSDKType {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      round: isSet(object.round) ? Number(object.round) : 0,
      block_id: isSet(object.block_id) ? BlockID.fromSDKJSON(object.block_id) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => CommitSig.fromSDKJSON(e)) : []
    };
  },

  toSDK(message: Commit): CommitSDKType {
    const obj: any = {};
    obj.height = message.height;
    obj.round = message.round;
    message.blockId !== undefined && (obj.block_id = message.blockId ? BlockID.toSDK(message.blockId) : undefined);

    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e ? CommitSig.toSDK(e) : undefined);
    } else {
      obj.signatures = [];
    }

    return obj;
  }

};

function createBaseCommitSig(): CommitSig {
  return {
    blockIdFlag: 0,
    validatorAddress: new Uint8Array(),
    timestamp: undefined,
    signature: new Uint8Array()
  };
}

export const CommitSig = {
  encode(message: CommitSig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockIdFlag !== 0) {
      writer.uint32(8).int32(message.blockIdFlag);
    }

    if (message.validatorAddress.length !== 0) {
      writer.uint32(18).bytes(message.validatorAddress);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
    }

    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitSig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitSig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockIdFlag = (reader.int32() as any);
          break;

        case 2:
          message.validatorAddress = reader.bytes();
          break;

        case 3:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 4:
          message.signature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CommitSig {
    return {
      blockIdFlag: isSet(object.blockIdFlag) ? blockIDFlagFromJSON(object.blockIdFlag) : 0,
      validatorAddress: isSet(object.validatorAddress) ? bytesFromBase64(object.validatorAddress) : new Uint8Array(),
      timestamp: isSet(object.timestamp) ? new Date(object.timestamp) : undefined,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },

  toJSON(message: CommitSig): unknown {
    const obj: any = {};
    message.blockIdFlag !== undefined && (obj.blockIdFlag = blockIDFlagToJSON(message.blockIdFlag));
    message.validatorAddress !== undefined && (obj.validatorAddress = base64FromBytes(message.validatorAddress !== undefined ? message.validatorAddress : new Uint8Array()));
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<CommitSig>): CommitSig {
    const message = createBaseCommitSig();
    message.blockIdFlag = object.blockIdFlag ?? 0;
    message.validatorAddress = object.validatorAddress ?? new Uint8Array();
    message.timestamp = object.timestamp ?? undefined;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },

  fromSDK(object: CommitSigSDKType): CommitSig {
    return {
      blockIdFlag: isSet(object.block_id_flag) ? blockIDFlagFromJSON(object.block_id_flag) : 0,
      validatorAddress: object?.validator_address,
      timestamp: object.timestamp ?? undefined,
      signature: object?.signature
    };
  },

  fromSDKJSON(object: any): CommitSigSDKType {
    return {
      block_id_flag: isSet(object.block_id_flag) ? blockIDFlagFromJSON(object.block_id_flag) : 0,
      validator_address: isSet(object.validator_address) ? bytesFromBase64(object.validator_address) : new Uint8Array(),
      timestamp: isSet(object.timestamp) ? new Date(object.timestamp) : undefined,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },

  toSDK(message: CommitSig): CommitSigSDKType {
    const obj: any = {};
    message.blockIdFlag !== undefined && (obj.block_id_flag = blockIDFlagToJSON(message.blockIdFlag));
    obj.validator_address = message.validatorAddress;
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
    obj.signature = message.signature;
    return obj;
  }

};

function createBaseProposal(): Proposal {
  return {
    type: 0,
    height: BigInt("0"),
    round: 0,
    polRound: 0,
    blockId: undefined,
    timestamp: undefined,
    signature: new Uint8Array()
  };
}

export const Proposal = {
  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }

    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(Long.fromString(message.height.toString()));
    }

    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }

    if (message.polRound !== 0) {
      writer.uint32(32).int32(message.polRound);
    }

    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim();
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(50).fork()).ldelim();
    }

    if (message.signature.length !== 0) {
      writer.uint32(58).bytes(message.signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = (reader.int32() as any);
          break;

        case 2:
          message.height = BigInt(reader.int64().toString());
          break;

        case 3:
          message.round = reader.int32();
          break;

        case 4:
          message.polRound = reader.int32();
          break;

        case 5:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;

        case 6:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 7:
          message.signature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Proposal {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      round: isSet(object.round) ? Number(object.round) : 0,
      polRound: isSet(object.polRound) ? Number(object.polRound) : 0,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      timestamp: isSet(object.timestamp) ? new Date(object.timestamp) : undefined,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
    message.height !== undefined && (obj.height = (message.height || BigInt("0")).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.polRound !== undefined && (obj.polRound = Math.round(message.polRound));
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.type = object.type ?? 0;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.round = object.round ?? 0;
    message.polRound = object.polRound ?? 0;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },

  fromSDK(object: ProposalSDKType): Proposal {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      height: object?.height,
      round: object?.round,
      polRound: object?.pol_round,
      blockId: object.block_id ? BlockID.fromSDK(object.block_id) : undefined,
      timestamp: object.timestamp ?? undefined,
      signature: object?.signature
    };
  },

  fromSDKJSON(object: any): ProposalSDKType {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      round: isSet(object.round) ? Number(object.round) : 0,
      pol_round: isSet(object.pol_round) ? Number(object.pol_round) : 0,
      block_id: isSet(object.block_id) ? BlockID.fromSDKJSON(object.block_id) : undefined,
      timestamp: isSet(object.timestamp) ? new Date(object.timestamp) : undefined,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },

  toSDK(message: Proposal): ProposalSDKType {
    const obj: any = {};
    message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
    obj.height = message.height;
    obj.round = message.round;
    obj.pol_round = message.polRound;
    message.blockId !== undefined && (obj.block_id = message.blockId ? BlockID.toSDK(message.blockId) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
    obj.signature = message.signature;
    return obj;
  }

};

function createBaseSignedHeader(): SignedHeader {
  return {
    header: undefined,
    commit: undefined
  };
}

export const SignedHeader = {
  encode(message: SignedHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }

    if (message.commit !== undefined) {
      Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignedHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignedHeader();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;

        case 2:
          message.commit = Commit.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SignedHeader {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      commit: isSet(object.commit) ? Commit.fromJSON(object.commit) : undefined
    };
  },

  toJSON(message: SignedHeader): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.commit !== undefined && (obj.commit = message.commit ? Commit.toJSON(message.commit) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SignedHeader>): SignedHeader {
    const message = createBaseSignedHeader();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? Commit.fromPartial(object.commit) : undefined;
    return message;
  },

  fromSDK(object: SignedHeaderSDKType): SignedHeader {
    return {
      header: object.header ? Header.fromSDK(object.header) : undefined,
      commit: object.commit ? Commit.fromSDK(object.commit) : undefined
    };
  },

  fromSDKJSON(object: any): SignedHeaderSDKType {
    return {
      header: isSet(object.header) ? Header.fromSDKJSON(object.header) : undefined,
      commit: isSet(object.commit) ? Commit.fromSDKJSON(object.commit) : undefined
    };
  },

  toSDK(message: SignedHeader): SignedHeaderSDKType {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toSDK(message.header) : undefined);
    message.commit !== undefined && (obj.commit = message.commit ? Commit.toSDK(message.commit) : undefined);
    return obj;
  }

};

function createBaseLightBlock(): LightBlock {
  return {
    signedHeader: undefined,
    validatorSet: undefined
  };
}

export const LightBlock = {
  encode(message: LightBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signedHeader !== undefined) {
      SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
    }

    if (message.validatorSet !== undefined) {
      ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LightBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLightBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signedHeader = SignedHeader.decode(reader, reader.uint32());
          break;

        case 2:
          message.validatorSet = ValidatorSet.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LightBlock {
    return {
      signedHeader: isSet(object.signedHeader) ? SignedHeader.fromJSON(object.signedHeader) : undefined,
      validatorSet: isSet(object.validatorSet) ? ValidatorSet.fromJSON(object.validatorSet) : undefined
    };
  },

  toJSON(message: LightBlock): unknown {
    const obj: any = {};
    message.signedHeader !== undefined && (obj.signedHeader = message.signedHeader ? SignedHeader.toJSON(message.signedHeader) : undefined);
    message.validatorSet !== undefined && (obj.validatorSet = message.validatorSet ? ValidatorSet.toJSON(message.validatorSet) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<LightBlock>): LightBlock {
    const message = createBaseLightBlock();
    message.signedHeader = object.signedHeader !== undefined && object.signedHeader !== null ? SignedHeader.fromPartial(object.signedHeader) : undefined;
    message.validatorSet = object.validatorSet !== undefined && object.validatorSet !== null ? ValidatorSet.fromPartial(object.validatorSet) : undefined;
    return message;
  },

  fromSDK(object: LightBlockSDKType): LightBlock {
    return {
      signedHeader: object.signed_header ? SignedHeader.fromSDK(object.signed_header) : undefined,
      validatorSet: object.validator_set ? ValidatorSet.fromSDK(object.validator_set) : undefined
    };
  },

  fromSDKJSON(object: any): LightBlockSDKType {
    return {
      signed_header: isSet(object.signed_header) ? SignedHeader.fromSDKJSON(object.signed_header) : undefined,
      validator_set: isSet(object.validator_set) ? ValidatorSet.fromSDKJSON(object.validator_set) : undefined
    };
  },

  toSDK(message: LightBlock): LightBlockSDKType {
    const obj: any = {};
    message.signedHeader !== undefined && (obj.signed_header = message.signedHeader ? SignedHeader.toSDK(message.signedHeader) : undefined);
    message.validatorSet !== undefined && (obj.validator_set = message.validatorSet ? ValidatorSet.toSDK(message.validatorSet) : undefined);
    return obj;
  }

};

function createBaseBlockMeta(): BlockMeta {
  return {
    blockId: undefined,
    blockSize: BigInt("0"),
    header: undefined,
    numTxs: BigInt("0")
  };
}

export const BlockMeta = {
  encode(message: BlockMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }

    if (message.blockSize !== BigInt(0)) {
      writer.uint32(16).int64(Long.fromString(message.blockSize.toString()));
    }

    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(26).fork()).ldelim();
    }

    if (message.numTxs !== BigInt(0)) {
      writer.uint32(32).int64(Long.fromString(message.numTxs.toString()));
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockMeta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockMeta();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;

        case 2:
          message.blockSize = BigInt(reader.int64().toString());
          break;

        case 3:
          message.header = Header.decode(reader, reader.uint32());
          break;

        case 4:
          message.numTxs = BigInt(reader.int64().toString());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BlockMeta {
    return {
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      blockSize: isSet(object.blockSize) ? BigInt(object.blockSize.toString()) : BigInt("0"),
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      numTxs: isSet(object.numTxs) ? BigInt(object.numTxs.toString()) : BigInt("0")
    };
  },

  toJSON(message: BlockMeta): unknown {
    const obj: any = {};
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.blockSize !== undefined && (obj.blockSize = (message.blockSize || BigInt("0")).toString());
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.numTxs !== undefined && (obj.numTxs = (message.numTxs || BigInt("0")).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<BlockMeta>): BlockMeta {
    const message = createBaseBlockMeta();
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.blockSize = object.blockSize !== undefined && object.blockSize !== null ? BigInt(object.blockSize.toString()) : BigInt("0");
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.numTxs = object.numTxs !== undefined && object.numTxs !== null ? BigInt(object.numTxs.toString()) : BigInt("0");
    return message;
  },

  fromSDK(object: BlockMetaSDKType): BlockMeta {
    return {
      blockId: object.block_id ? BlockID.fromSDK(object.block_id) : undefined,
      blockSize: object?.block_size,
      header: object.header ? Header.fromSDK(object.header) : undefined,
      numTxs: object?.num_txs
    };
  },

  fromSDKJSON(object: any): BlockMetaSDKType {
    return {
      block_id: isSet(object.block_id) ? BlockID.fromSDKJSON(object.block_id) : undefined,
      block_size: isSet(object.block_size) ? BigInt(object.block_size.toString()) : BigInt("0"),
      header: isSet(object.header) ? Header.fromSDKJSON(object.header) : undefined,
      num_txs: isSet(object.num_txs) ? BigInt(object.num_txs.toString()) : BigInt("0")
    };
  },

  toSDK(message: BlockMeta): BlockMetaSDKType {
    const obj: any = {};
    message.blockId !== undefined && (obj.block_id = message.blockId ? BlockID.toSDK(message.blockId) : undefined);
    obj.block_size = message.blockSize;
    message.header !== undefined && (obj.header = message.header ? Header.toSDK(message.header) : undefined);
    obj.num_txs = message.numTxs;
    return obj;
  }

};

function createBaseTxProof(): TxProof {
  return {
    rootHash: new Uint8Array(),
    data: new Uint8Array(),
    proof: undefined
  };
}

export const TxProof = {
  encode(message: TxProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rootHash.length !== 0) {
      writer.uint32(10).bytes(message.rootHash);
    }

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxProof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxProof();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rootHash = reader.bytes();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        case 3:
          message.proof = Proof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TxProof {
    return {
      rootHash: isSet(object.rootHash) ? bytesFromBase64(object.rootHash) : new Uint8Array(),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined
    };
  },

  toJSON(message: TxProof): unknown {
    const obj: any = {};
    message.rootHash !== undefined && (obj.rootHash = base64FromBytes(message.rootHash !== undefined ? message.rootHash : new Uint8Array()));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TxProof>): TxProof {
    const message = createBaseTxProof();
    message.rootHash = object.rootHash ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
    return message;
  },

  fromSDK(object: TxProofSDKType): TxProof {
    return {
      rootHash: object?.root_hash,
      data: object?.data,
      proof: object.proof ? Proof.fromSDK(object.proof) : undefined
    };
  },

  fromSDKJSON(object: any): TxProofSDKType {
    return {
      root_hash: isSet(object.root_hash) ? bytesFromBase64(object.root_hash) : new Uint8Array(),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      proof: isSet(object.proof) ? Proof.fromSDKJSON(object.proof) : undefined
    };
  },

  toSDK(message: TxProof): TxProofSDKType {
    const obj: any = {};
    obj.root_hash = message.rootHash;
    obj.data = message.data;
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toSDK(message.proof) : undefined);
    return obj;
  }

};