import { Duration, DurationSDKType } from "../../../../google/protobuf/duration";
import { Height, HeightSDKType } from "../../../core/client/v1/client";
import { ProofSpec, ProofSpecSDKType } from "../../../../confio/proofs";
import { Timestamp, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { MerkleRoot, MerkleRootSDKType } from "../../../core/commitment/v1/commitment";
import { SignedHeader, SignedHeaderSDKType } from "../../../../tendermint/types/types";
import { ValidatorSet, ValidatorSetSDKType } from "../../../../tendermint/types/validator";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export const protobufPackage = "ibc.lightclients.tendermint.v1";
/**
 * ClientState from Tendermint tracks the current validator set, latest height,
 * and a possible frozen height.
 */
export interface ClientState {
  chainId: string;
  trustLevel: Fraction;
  /**
   * duration of the period since the LastestTimestamp during which the
   * submitted headers are valid for upgrade
   */
  trustingPeriod: Duration;
  /** duration of the staking unbonding period */
  unbondingPeriod: Duration;
  /** defines how much new (untrusted) header's Time can drift into the future. */
  maxClockDrift: Duration;
  /** Block height when the client was frozen due to a misbehaviour */
  frozenHeight: Height;
  /** Latest height the client was updated to */
  latestHeight: Height;
  /** Proof specifications used in verifying counterparty state */
  proofSpecs: ProofSpec[];
  /**
   * Path at which next upgraded client will be committed.
   * Each element corresponds to the key for a single CommitmentProof in the
   * chained proof. NOTE: ClientState must stored under
   * `{upgradePath}/{upgradeHeight}/clientState` ConsensusState must be stored
   * under `{upgradepath}/{upgradeHeight}/consensusState` For SDK chains using
   * the default upgrade module, upgrade_path should be []string{"upgrade",
   * "upgradedIBCState"}`
   */
  upgradePath: string[];
  /**
   * This flag, when set to true, will allow governance to recover a client
   * which has expired
   */
  allowUpdateAfterExpiry: boolean;
  /**
   * This flag, when set to true, will allow governance to unfreeze a client
   * whose chain has experienced a misbehaviour event
   */
  allowUpdateAfterMisbehaviour: boolean;
}
/**
 * ClientState from Tendermint tracks the current validator set, latest height,
 * and a possible frozen height.
 */
export interface ClientStateSDKType {
  chain_id: string;
  trust_level: FractionSDKType;
  trusting_period: DurationSDKType;
  unbonding_period: DurationSDKType;
  max_clock_drift: DurationSDKType;
  frozen_height: HeightSDKType;
  latest_height: HeightSDKType;
  proof_specs: ProofSpecSDKType[];
  upgrade_path: string[];
  allow_update_after_expiry: boolean;
  allow_update_after_misbehaviour: boolean;
}
/** ConsensusState defines the consensus state from Tendermint. */
export interface ConsensusState {
  /**
   * timestamp that corresponds to the block height in which the ConsensusState
   * was stored.
   */
  timestamp: Date;
  /** commitment root (i.e app hash) */
  root: MerkleRoot;
  nextValidatorsHash: Uint8Array;
}
/** ConsensusState defines the consensus state from Tendermint. */
export interface ConsensusStateSDKType {
  timestamp: Date;
  root: MerkleRootSDKType;
  next_validators_hash: Uint8Array;
}
/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 */
export interface Misbehaviour {
  clientId: string;
  header1: Header;
  header2: Header;
}
/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 */
export interface MisbehaviourSDKType {
  client_id: string;
  header_1: HeaderSDKType;
  header_2: HeaderSDKType;
}
/**
 * Header defines the Tendermint client consensus Header.
 * It encapsulates all the information necessary to update from a trusted
 * Tendermint ConsensusState. The inclusion of TrustedHeight and
 * TrustedValidators allows this update to process correctly, so long as the
 * ConsensusState for the TrustedHeight exists, this removes race conditions
 * among relayers The SignedHeader and ValidatorSet are the new untrusted update
 * fields for the client. The TrustedHeight is the height of a stored
 * ConsensusState on the client that will be used to verify the new untrusted
 * header. The Trusted ConsensusState must be within the unbonding period of
 * current time in order to correctly verify, and the TrustedValidators must
 * hash to TrustedConsensusState.NextValidatorsHash since that is the last
 * trusted validator set at the TrustedHeight.
 */
export interface Header {
  signedHeader: SignedHeader;
  validatorSet: ValidatorSet;
  trustedHeight: Height;
  trustedValidators: ValidatorSet;
}
/**
 * Header defines the Tendermint client consensus Header.
 * It encapsulates all the information necessary to update from a trusted
 * Tendermint ConsensusState. The inclusion of TrustedHeight and
 * TrustedValidators allows this update to process correctly, so long as the
 * ConsensusState for the TrustedHeight exists, this removes race conditions
 * among relayers The SignedHeader and ValidatorSet are the new untrusted update
 * fields for the client. The TrustedHeight is the height of a stored
 * ConsensusState on the client that will be used to verify the new untrusted
 * header. The Trusted ConsensusState must be within the unbonding period of
 * current time in order to correctly verify, and the TrustedValidators must
 * hash to TrustedConsensusState.NextValidatorsHash since that is the last
 * trusted validator set at the TrustedHeight.
 */
export interface HeaderSDKType {
  signed_header: SignedHeaderSDKType;
  validator_set: ValidatorSetSDKType;
  trusted_height: HeightSDKType;
  trusted_validators: ValidatorSetSDKType;
}
/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 */
export interface Fraction {
  numerator: bigint;
  denominator: bigint;
}
/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 */
export interface FractionSDKType {
  numerator: bigint;
  denominator: bigint;
}
function createBaseClientState(): ClientState {
  return {
    chainId: "",
    trustLevel: Fraction.fromPartial({}),
    trustingPeriod: Duration.fromPartial({}),
    unbondingPeriod: Duration.fromPartial({}),
    maxClockDrift: Duration.fromPartial({}),
    frozenHeight: Height.fromPartial({}),
    latestHeight: Height.fromPartial({}),
    proofSpecs: [],
    upgradePath: [],
    allowUpdateAfterExpiry: false,
    allowUpdateAfterMisbehaviour: false
  };
}
export const ClientState = {
  encode(message: ClientState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.trustLevel !== undefined) {
      Fraction.encode(message.trustLevel, writer.uint32(18).fork()).ldelim();
    }
    if (message.trustingPeriod !== undefined) {
      Duration.encode(message.trustingPeriod, writer.uint32(26).fork()).ldelim();
    }
    if (message.unbondingPeriod !== undefined) {
      Duration.encode(message.unbondingPeriod, writer.uint32(34).fork()).ldelim();
    }
    if (message.maxClockDrift !== undefined) {
      Duration.encode(message.maxClockDrift, writer.uint32(42).fork()).ldelim();
    }
    if (message.frozenHeight !== undefined) {
      Height.encode(message.frozenHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.latestHeight !== undefined) {
      Height.encode(message.latestHeight, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.proofSpecs) {
      ProofSpec.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.upgradePath) {
      writer.uint32(74).string(v!);
    }
    if (message.allowUpdateAfterExpiry === true) {
      writer.uint32(80).bool(message.allowUpdateAfterExpiry);
    }
    if (message.allowUpdateAfterMisbehaviour === true) {
      writer.uint32(88).bool(message.allowUpdateAfterMisbehaviour);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.trustLevel = Fraction.decode(reader, reader.uint32());
          break;
        case 3:
          message.trustingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.unbondingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.maxClockDrift = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.frozenHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.latestHeight = Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.proofSpecs.push(ProofSpec.decode(reader, reader.uint32()));
          break;
        case 9:
          message.upgradePath.push(reader.string());
          break;
        case 10:
          message.allowUpdateAfterExpiry = reader.bool();
          break;
        case 11:
          message.allowUpdateAfterMisbehaviour = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientState {
    const obj = createBaseClientState();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.trustLevel)) obj.trustLevel = Fraction.fromJSON(object.trustLevel);
    if (isSet(object.trustingPeriod)) obj.trustingPeriod = Duration.fromJSON(object.trustingPeriod);
    if (isSet(object.unbondingPeriod)) obj.unbondingPeriod = Duration.fromJSON(object.unbondingPeriod);
    if (isSet(object.maxClockDrift)) obj.maxClockDrift = Duration.fromJSON(object.maxClockDrift);
    if (isSet(object.frozenHeight)) obj.frozenHeight = Height.fromJSON(object.frozenHeight);
    if (isSet(object.latestHeight)) obj.latestHeight = Height.fromJSON(object.latestHeight);
    if (Array.isArray(object?.proofSpecs)) obj.proofSpecs = object.proofSpecs.map((e: any) => ProofSpec.fromJSON(e));
    if (Array.isArray(object?.upgradePath)) obj.upgradePath = object.upgradePath.map((e: any) => String(e));
    if (isSet(object.allowUpdateAfterExpiry)) obj.allowUpdateAfterExpiry = Boolean(object.allowUpdateAfterExpiry);
    if (isSet(object.allowUpdateAfterMisbehaviour)) obj.allowUpdateAfterMisbehaviour = Boolean(object.allowUpdateAfterMisbehaviour);
    return obj;
  },
  toJSON(message: ClientState): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.trustLevel !== undefined && (obj.trustLevel = message.trustLevel ? Fraction.toJSON(message.trustLevel) : undefined);
    message.trustingPeriod !== undefined && (obj.trustingPeriod = message.trustingPeriod ? Duration.toJSON(message.trustingPeriod) : undefined);
    message.unbondingPeriod !== undefined && (obj.unbondingPeriod = message.unbondingPeriod ? Duration.toJSON(message.unbondingPeriod) : undefined);
    message.maxClockDrift !== undefined && (obj.maxClockDrift = message.maxClockDrift ? Duration.toJSON(message.maxClockDrift) : undefined);
    message.frozenHeight !== undefined && (obj.frozenHeight = message.frozenHeight ? Height.toJSON(message.frozenHeight) : undefined);
    message.latestHeight !== undefined && (obj.latestHeight = message.latestHeight ? Height.toJSON(message.latestHeight) : undefined);
    if (message.proofSpecs) {
      obj.proofSpecs = message.proofSpecs.map(e => e ? ProofSpec.toJSON(e) : undefined);
    } else {
      obj.proofSpecs = [];
    }
    if (message.upgradePath) {
      obj.upgradePath = message.upgradePath.map(e => e);
    } else {
      obj.upgradePath = [];
    }
    message.allowUpdateAfterExpiry !== undefined && (obj.allowUpdateAfterExpiry = message.allowUpdateAfterExpiry);
    message.allowUpdateAfterMisbehaviour !== undefined && (obj.allowUpdateAfterMisbehaviour = message.allowUpdateAfterMisbehaviour);
    return obj;
  },
  fromPartial(object: DeepPartial<ClientState>): ClientState {
    const message = createBaseClientState();
    message.chainId = object.chainId ?? "";
    if (object.trustLevel !== undefined && object.trustLevel !== null) {
      message.trustLevel = Fraction.fromPartial(object.trustLevel);
    }
    if (object.trustingPeriod !== undefined && object.trustingPeriod !== null) {
      message.trustingPeriod = Duration.fromPartial(object.trustingPeriod);
    }
    if (object.unbondingPeriod !== undefined && object.unbondingPeriod !== null) {
      message.unbondingPeriod = Duration.fromPartial(object.unbondingPeriod);
    }
    if (object.maxClockDrift !== undefined && object.maxClockDrift !== null) {
      message.maxClockDrift = Duration.fromPartial(object.maxClockDrift);
    }
    if (object.frozenHeight !== undefined && object.frozenHeight !== null) {
      message.frozenHeight = Height.fromPartial(object.frozenHeight);
    }
    if (object.latestHeight !== undefined && object.latestHeight !== null) {
      message.latestHeight = Height.fromPartial(object.latestHeight);
    }
    message.proofSpecs = object.proofSpecs?.map(e => ProofSpec.fromPartial(e)) || [];
    message.upgradePath = object.upgradePath?.map(e => e) || [];
    message.allowUpdateAfterExpiry = object.allowUpdateAfterExpiry ?? false;
    message.allowUpdateAfterMisbehaviour = object.allowUpdateAfterMisbehaviour ?? false;
    return message;
  },
  fromSDK(object: ClientStateSDKType): ClientState {
    return {
      chainId: object?.chain_id,
      trustLevel: object.trust_level ? Fraction.fromSDK(object.trust_level) : undefined,
      trustingPeriod: object.trusting_period ? Duration.fromSDK(object.trusting_period) : undefined,
      unbondingPeriod: object.unbonding_period ? Duration.fromSDK(object.unbonding_period) : undefined,
      maxClockDrift: object.max_clock_drift ? Duration.fromSDK(object.max_clock_drift) : undefined,
      frozenHeight: object.frozen_height ? Height.fromSDK(object.frozen_height) : undefined,
      latestHeight: object.latest_height ? Height.fromSDK(object.latest_height) : undefined,
      proofSpecs: Array.isArray(object?.proof_specs) ? object.proof_specs.map((e: any) => ProofSpec.fromSDK(e)) : [],
      upgradePath: Array.isArray(object?.upgrade_path) ? object.upgrade_path.map((e: any) => e) : [],
      allowUpdateAfterExpiry: object?.allow_update_after_expiry,
      allowUpdateAfterMisbehaviour: object?.allow_update_after_misbehaviour
    };
  },
  fromSDKJSON(object: any): ClientStateSDKType {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      trust_level: isSet(object.trust_level) ? Fraction.fromSDKJSON(object.trust_level) : undefined,
      trusting_period: isSet(object.trusting_period) ? Duration.fromSDKJSON(object.trusting_period) : undefined,
      unbonding_period: isSet(object.unbonding_period) ? Duration.fromSDKJSON(object.unbonding_period) : undefined,
      max_clock_drift: isSet(object.max_clock_drift) ? Duration.fromSDKJSON(object.max_clock_drift) : undefined,
      frozen_height: isSet(object.frozen_height) ? Height.fromSDKJSON(object.frozen_height) : undefined,
      latest_height: isSet(object.latest_height) ? Height.fromSDKJSON(object.latest_height) : undefined,
      proof_specs: Array.isArray(object?.proof_specs) ? object.proof_specs.map((e: any) => ProofSpec.fromSDKJSON(e)) : [],
      upgrade_path: Array.isArray(object?.upgrade_path) ? object.upgrade_path.map((e: any) => String(e)) : [],
      allow_update_after_expiry: isSet(object.allow_update_after_expiry) ? Boolean(object.allow_update_after_expiry) : false,
      allow_update_after_misbehaviour: isSet(object.allow_update_after_misbehaviour) ? Boolean(object.allow_update_after_misbehaviour) : false
    };
  },
  toSDK(message: ClientState): ClientStateSDKType {
    const obj: any = {};
    obj.chain_id = message.chainId;
    message.trustLevel !== undefined && (obj.trust_level = message.trustLevel ? Fraction.toSDK(message.trustLevel) : undefined);
    message.trustingPeriod !== undefined && (obj.trusting_period = message.trustingPeriod ? Duration.toSDK(message.trustingPeriod) : undefined);
    message.unbondingPeriod !== undefined && (obj.unbonding_period = message.unbondingPeriod ? Duration.toSDK(message.unbondingPeriod) : undefined);
    message.maxClockDrift !== undefined && (obj.max_clock_drift = message.maxClockDrift ? Duration.toSDK(message.maxClockDrift) : undefined);
    message.frozenHeight !== undefined && (obj.frozen_height = message.frozenHeight ? Height.toSDK(message.frozenHeight) : undefined);
    message.latestHeight !== undefined && (obj.latest_height = message.latestHeight ? Height.toSDK(message.latestHeight) : undefined);
    if (message.proofSpecs) {
      obj.proof_specs = message.proofSpecs.map(e => e ? ProofSpec.toSDK(e) : undefined);
    } else {
      obj.proof_specs = [];
    }
    if (message.upgradePath) {
      obj.upgrade_path = message.upgradePath.map(e => e);
    } else {
      obj.upgrade_path = [];
    }
    obj.allow_update_after_expiry = message.allowUpdateAfterExpiry;
    obj.allow_update_after_misbehaviour = message.allowUpdateAfterMisbehaviour;
    return obj;
  }
};
function createBaseConsensusState(): ConsensusState {
  return {
    timestamp: new Date(),
    root: MerkleRoot.fromPartial({}),
    nextValidatorsHash: new Uint8Array()
  };
}
export const ConsensusState = {
  encode(message: ConsensusState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    if (message.root !== undefined) {
      MerkleRoot.encode(message.root, writer.uint32(18).fork()).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(26).bytes(message.nextValidatorsHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsensusState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.root = MerkleRoot.decode(reader, reader.uint32());
          break;
        case 3:
          message.nextValidatorsHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusState {
    const obj = createBaseConsensusState();
    if (isSet(object.timestamp)) obj.timestamp = new Date(object.timestamp);
    if (isSet(object.root)) obj.root = MerkleRoot.fromJSON(object.root);
    if (isSet(object.nextValidatorsHash)) obj.nextValidatorsHash = bytesFromBase64(object.nextValidatorsHash);
    return obj;
  },
  toJSON(message: ConsensusState): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.root !== undefined && (obj.root = message.root ? MerkleRoot.toJSON(message.root) : undefined);
    message.nextValidatorsHash !== undefined && (obj.nextValidatorsHash = base64FromBytes(message.nextValidatorsHash !== undefined ? message.nextValidatorsHash : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<ConsensusState>): ConsensusState {
    const message = createBaseConsensusState();
    message.timestamp = object.timestamp ?? undefined;
    if (object.root !== undefined && object.root !== null) {
      message.root = MerkleRoot.fromPartial(object.root);
    }
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    return message;
  },
  fromSDK(object: ConsensusStateSDKType): ConsensusState {
    return {
      timestamp: object.timestamp ?? undefined,
      root: object.root ? MerkleRoot.fromSDK(object.root) : undefined,
      nextValidatorsHash: object?.next_validators_hash
    };
  },
  fromSDKJSON(object: any): ConsensusStateSDKType {
    return {
      timestamp: isSet(object.timestamp) ? new Date(object.timestamp) : undefined,
      root: isSet(object.root) ? MerkleRoot.fromSDKJSON(object.root) : undefined,
      next_validators_hash: isSet(object.next_validators_hash) ? bytesFromBase64(object.next_validators_hash) : new Uint8Array()
    };
  },
  toSDK(message: ConsensusState): ConsensusStateSDKType {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
    message.root !== undefined && (obj.root = message.root ? MerkleRoot.toSDK(message.root) : undefined);
    obj.next_validators_hash = message.nextValidatorsHash;
    return obj;
  }
};
function createBaseMisbehaviour(): Misbehaviour {
  return {
    clientId: "",
    header1: Header.fromPartial({}),
    header2: Header.fromPartial({})
  };
}
export const Misbehaviour = {
  encode(message: Misbehaviour, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.header1 !== undefined) {
      Header.encode(message.header1, writer.uint32(18).fork()).ldelim();
    }
    if (message.header2 !== undefined) {
      Header.encode(message.header2, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Misbehaviour {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.header1 = Header.decode(reader, reader.uint32());
          break;
        case 3:
          message.header2 = Header.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Misbehaviour {
    const obj = createBaseMisbehaviour();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.header1)) obj.header1 = Header.fromJSON(object.header1);
    if (isSet(object.header2)) obj.header2 = Header.fromJSON(object.header2);
    return obj;
  },
  toJSON(message: Misbehaviour): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.header1 !== undefined && (obj.header1 = message.header1 ? Header.toJSON(message.header1) : undefined);
    message.header2 !== undefined && (obj.header2 = message.header2 ? Header.toJSON(message.header2) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Misbehaviour>): Misbehaviour {
    const message = createBaseMisbehaviour();
    message.clientId = object.clientId ?? "";
    if (object.header1 !== undefined && object.header1 !== null) {
      message.header1 = Header.fromPartial(object.header1);
    }
    if (object.header2 !== undefined && object.header2 !== null) {
      message.header2 = Header.fromPartial(object.header2);
    }
    return message;
  },
  fromSDK(object: MisbehaviourSDKType): Misbehaviour {
    return {
      clientId: object?.client_id,
      header1: object.header_1 ? Header.fromSDK(object.header_1) : undefined,
      header2: object.header_2 ? Header.fromSDK(object.header_2) : undefined
    };
  },
  fromSDKJSON(object: any): MisbehaviourSDKType {
    return {
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      header_1: isSet(object.header_1) ? Header.fromSDKJSON(object.header_1) : undefined,
      header_2: isSet(object.header_2) ? Header.fromSDKJSON(object.header_2) : undefined
    };
  },
  toSDK(message: Misbehaviour): MisbehaviourSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    message.header1 !== undefined && (obj.header_1 = message.header1 ? Header.toSDK(message.header1) : undefined);
    message.header2 !== undefined && (obj.header_2 = message.header2 ? Header.toSDK(message.header2) : undefined);
    return obj;
  }
};
function createBaseHeader(): Header {
  return {
    signedHeader: SignedHeader.fromPartial({}),
    validatorSet: ValidatorSet.fromPartial({}),
    trustedHeight: Height.fromPartial({}),
    trustedValidators: ValidatorSet.fromPartial({})
  };
}
export const Header = {
  encode(message: Header, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signedHeader !== undefined) {
      SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
    }
    if (message.validatorSet !== undefined) {
      ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
    }
    if (message.trustedHeight !== undefined) {
      Height.encode(message.trustedHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.trustedValidators !== undefined) {
      ValidatorSet.encode(message.trustedValidators, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Header {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedHeader = SignedHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.validatorSet = ValidatorSet.decode(reader, reader.uint32());
          break;
        case 3:
          message.trustedHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.trustedValidators = ValidatorSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Header {
    const obj = createBaseHeader();
    if (isSet(object.signedHeader)) obj.signedHeader = SignedHeader.fromJSON(object.signedHeader);
    if (isSet(object.validatorSet)) obj.validatorSet = ValidatorSet.fromJSON(object.validatorSet);
    if (isSet(object.trustedHeight)) obj.trustedHeight = Height.fromJSON(object.trustedHeight);
    if (isSet(object.trustedValidators)) obj.trustedValidators = ValidatorSet.fromJSON(object.trustedValidators);
    return obj;
  },
  toJSON(message: Header): unknown {
    const obj: any = {};
    message.signedHeader !== undefined && (obj.signedHeader = message.signedHeader ? SignedHeader.toJSON(message.signedHeader) : undefined);
    message.validatorSet !== undefined && (obj.validatorSet = message.validatorSet ? ValidatorSet.toJSON(message.validatorSet) : undefined);
    message.trustedHeight !== undefined && (obj.trustedHeight = message.trustedHeight ? Height.toJSON(message.trustedHeight) : undefined);
    message.trustedValidators !== undefined && (obj.trustedValidators = message.trustedValidators ? ValidatorSet.toJSON(message.trustedValidators) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Header>): Header {
    const message = createBaseHeader();
    if (object.signedHeader !== undefined && object.signedHeader !== null) {
      message.signedHeader = SignedHeader.fromPartial(object.signedHeader);
    }
    if (object.validatorSet !== undefined && object.validatorSet !== null) {
      message.validatorSet = ValidatorSet.fromPartial(object.validatorSet);
    }
    if (object.trustedHeight !== undefined && object.trustedHeight !== null) {
      message.trustedHeight = Height.fromPartial(object.trustedHeight);
    }
    if (object.trustedValidators !== undefined && object.trustedValidators !== null) {
      message.trustedValidators = ValidatorSet.fromPartial(object.trustedValidators);
    }
    return message;
  },
  fromSDK(object: HeaderSDKType): Header {
    return {
      signedHeader: object.signed_header ? SignedHeader.fromSDK(object.signed_header) : undefined,
      validatorSet: object.validator_set ? ValidatorSet.fromSDK(object.validator_set) : undefined,
      trustedHeight: object.trusted_height ? Height.fromSDK(object.trusted_height) : undefined,
      trustedValidators: object.trusted_validators ? ValidatorSet.fromSDK(object.trusted_validators) : undefined
    };
  },
  fromSDKJSON(object: any): HeaderSDKType {
    return {
      signed_header: isSet(object.signed_header) ? SignedHeader.fromSDKJSON(object.signed_header) : undefined,
      validator_set: isSet(object.validator_set) ? ValidatorSet.fromSDKJSON(object.validator_set) : undefined,
      trusted_height: isSet(object.trusted_height) ? Height.fromSDKJSON(object.trusted_height) : undefined,
      trusted_validators: isSet(object.trusted_validators) ? ValidatorSet.fromSDKJSON(object.trusted_validators) : undefined
    };
  },
  toSDK(message: Header): HeaderSDKType {
    const obj: any = {};
    message.signedHeader !== undefined && (obj.signed_header = message.signedHeader ? SignedHeader.toSDK(message.signedHeader) : undefined);
    message.validatorSet !== undefined && (obj.validator_set = message.validatorSet ? ValidatorSet.toSDK(message.validatorSet) : undefined);
    message.trustedHeight !== undefined && (obj.trusted_height = message.trustedHeight ? Height.toSDK(message.trustedHeight) : undefined);
    message.trustedValidators !== undefined && (obj.trusted_validators = message.trustedValidators ? ValidatorSet.toSDK(message.trustedValidators) : undefined);
    return obj;
  }
};
function createBaseFraction(): Fraction {
  return {
    numerator: BigInt(0),
    denominator: BigInt(0)
  };
}
export const Fraction = {
  encode(message: Fraction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numerator !== BigInt(0)) {
      writer.uint32(8).uint64(message.numerator);
    }
    if (message.denominator !== BigInt(0)) {
      writer.uint32(16).uint64(message.denominator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Fraction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFraction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numerator = reader.uint64();
          break;
        case 2:
          message.denominator = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Fraction {
    const obj = createBaseFraction();
    if (isSet(object.numerator)) obj.numerator = BigInt(object.numerator.toString());
    if (isSet(object.denominator)) obj.denominator = BigInt(object.denominator.toString());
    return obj;
  },
  toJSON(message: Fraction): unknown {
    const obj: any = {};
    message.numerator !== undefined && (obj.numerator = (message.numerator || BigInt(0)).toString());
    message.denominator !== undefined && (obj.denominator = (message.denominator || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Fraction>): Fraction {
    const message = createBaseFraction();
    if (object.numerator !== undefined && object.numerator !== null) {
      message.numerator = BigInt(object.numerator.toString());
    }
    if (object.denominator !== undefined && object.denominator !== null) {
      message.denominator = BigInt(object.denominator.toString());
    }
    return message;
  },
  fromSDK(object: FractionSDKType): Fraction {
    return {
      numerator: object?.numerator,
      denominator: object?.denominator
    };
  },
  fromSDKJSON(object: any): FractionSDKType {
    return {
      numerator: isSet(object.numerator) ? BigInt(object.numerator.toString()) : BigInt(0),
      denominator: isSet(object.denominator) ? BigInt(object.denominator.toString()) : BigInt(0)
    };
  },
  toSDK(message: Fraction): FractionSDKType {
    const obj: any = {};
    obj.numerator = message.numerator;
    obj.denominator = message.denominator;
    return obj;
  }
};