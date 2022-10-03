import { Duration, DurationSDKType } from "../../../../google/protobuf/duration";
import { Height, HeightSDKType } from "../../../core/client/v1/client";
import { ProofSpec, ProofSpecSDKType } from "../../../../confio/proofs";
import { Timestamp, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { MerkleRoot, MerkleRootSDKType } from "../../../core/commitment/v1/commitment";
import { SignedHeader, SignedHeaderSDKType } from "../../../../tendermint/types/types";
import { ValidatorSet, ValidatorSetSDKType } from "../../../../tendermint/types/validator";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp, bytesFromBase64, base64FromBytes, Long } from "@osmonauts/helpers";
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

  /**
   * duration of the period since the LastestTimestamp during which the
   * submitted headers are valid for upgrade
   */
  trusting_period: DurationSDKType;

  /** duration of the staking unbonding period */
  unbonding_period: DurationSDKType;

  /** defines how much new (untrusted) header's Time can drift into the future. */
  max_clock_drift: DurationSDKType;

  /** Block height when the client was frozen due to a misbehaviour */
  frozen_height: HeightSDKType;

  /** Latest height the client was updated to */
  latest_height: HeightSDKType;

  /** Proof specifications used in verifying counterparty state */
  proof_specs: ProofSpecSDKType[];

  /**
   * Path at which next upgraded client will be committed.
   * Each element corresponds to the key for a single CommitmentProof in the
   * chained proof. NOTE: ClientState must stored under
   * `{upgradePath}/{upgradeHeight}/clientState` ConsensusState must be stored
   * under `{upgradepath}/{upgradeHeight}/consensusState` For SDK chains using
   * the default upgrade module, upgrade_path should be []string{"upgrade",
   * "upgradedIBCState"}`
   */
  upgrade_path: string[];

  /**
   * This flag, when set to true, will allow governance to recover a client
   * which has expired
   */
  allow_update_after_expiry: boolean;

  /**
   * This flag, when set to true, will allow governance to unfreeze a client
   * whose chain has experienced a misbehaviour event
   */
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
  /**
   * timestamp that corresponds to the block height in which the ConsensusState
   * was stored.
   */
  timestamp: Date;

  /** commitment root (i.e app hash) */
  root: MerkleRootSDKType;
  next_validators_hash: Uint8Array;
}

/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 */
export interface Misbehaviour {
  clientId: string;
  header_1: Header;
  header_2: Header;
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
  numerator: Long;
  denominator: Long;
}

/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 */
export interface FractionSDKType {
  numerator: Long;
  denominator: Long;
}

function createBaseClientState(): ClientState {
  return {
    chainId: "",
    trustLevel: undefined,
    trustingPeriod: undefined,
    unbondingPeriod: undefined,
    maxClockDrift: undefined,
    frozenHeight: undefined,
    latestHeight: undefined,
    proofSpecs: [],
    upgradePath: [],
    allowUpdateAfterExpiry: false,
    allowUpdateAfterMisbehaviour: false
  };
}

export const ClientState = {
  encode(message: ClientState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      trustLevel: isSet(object.trustLevel) ? Fraction.fromJSON(object.trustLevel) : undefined,
      trustingPeriod: isSet(object.trustingPeriod) ? Duration.fromJSON(object.trustingPeriod) : undefined,
      unbondingPeriod: isSet(object.unbondingPeriod) ? Duration.fromJSON(object.unbondingPeriod) : undefined,
      maxClockDrift: isSet(object.maxClockDrift) ? Duration.fromJSON(object.maxClockDrift) : undefined,
      frozenHeight: isSet(object.frozenHeight) ? Height.fromJSON(object.frozenHeight) : undefined,
      latestHeight: isSet(object.latestHeight) ? Height.fromJSON(object.latestHeight) : undefined,
      proofSpecs: Array.isArray(object?.proofSpecs) ? object.proofSpecs.map((e: any) => ProofSpec.fromJSON(e)) : [],
      upgradePath: Array.isArray(object?.upgradePath) ? object.upgradePath.map((e: any) => String(e)) : [],
      allowUpdateAfterExpiry: isSet(object.allowUpdateAfterExpiry) ? Boolean(object.allowUpdateAfterExpiry) : false,
      allowUpdateAfterMisbehaviour: isSet(object.allowUpdateAfterMisbehaviour) ? Boolean(object.allowUpdateAfterMisbehaviour) : false
    };
  },

  toJSON(message: ClientState): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.trustLevel !== undefined && (obj.trustLevel = message.trustLevel ? Fraction.toJSON(message.trustLevel) : undefined);
    message.trustingPeriod !== undefined && (obj.trustingPeriod = message.trustingPeriod);
    message.unbondingPeriod !== undefined && (obj.unbondingPeriod = message.unbondingPeriod);
    message.maxClockDrift !== undefined && (obj.maxClockDrift = message.maxClockDrift);
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
    message.trustLevel = object.trustLevel !== undefined && object.trustLevel !== null ? Fraction.fromPartial(object.trustLevel) : undefined;
    message.trustingPeriod = object.trustingPeriod ?? undefined;
    message.unbondingPeriod = object.unbondingPeriod ?? undefined;
    message.maxClockDrift = object.maxClockDrift ?? undefined;
    message.frozenHeight = object.frozenHeight !== undefined && object.frozenHeight !== null ? Height.fromPartial(object.frozenHeight) : undefined;
    message.latestHeight = object.latestHeight !== undefined && object.latestHeight !== null ? Height.fromPartial(object.latestHeight) : undefined;
    message.proofSpecs = object.proofSpecs?.map(e => ProofSpec.fromPartial(e)) || [];
    message.upgradePath = object.upgradePath?.map(e => e) || [];
    message.allowUpdateAfterExpiry = object.allowUpdateAfterExpiry ?? false;
    message.allowUpdateAfterMisbehaviour = object.allowUpdateAfterMisbehaviour ?? false;
    return message;
  },

  fromSDK(object: ClientStateSDKType): ClientState {
    return {
      chainId: isSet(object.chain_id) ? object.chain_id : undefined,
      trustLevel: isSet(object.trust_level) ? Fraction.fromSDK(object.trust_level) : undefined,
      trustingPeriod: isSet(object.trusting_period) ? Duration.fromSDK(object.trusting_period) : undefined,
      unbondingPeriod: isSet(object.unbonding_period) ? Duration.fromSDK(object.unbonding_period) : undefined,
      maxClockDrift: isSet(object.max_clock_drift) ? Duration.fromSDK(object.max_clock_drift) : undefined,
      frozenHeight: isSet(object.frozen_height) ? Height.fromSDK(object.frozen_height) : undefined,
      latestHeight: isSet(object.latest_height) ? Height.fromSDK(object.latest_height) : undefined,
      proofSpecs: Array.isArray(object?.proof_specs) ? object.proof_specs.map((e: any) => ProofSpec.fromSDK(e)) : [],
      upgradePath: Array.isArray(object?.upgrade_path) ? object.upgrade_path.map((e: any) => e) : [],
      allowUpdateAfterExpiry: isSet(object.allow_update_after_expiry) ? object.allow_update_after_expiry : undefined,
      allowUpdateAfterMisbehaviour: isSet(object.allow_update_after_misbehaviour) ? object.allow_update_after_misbehaviour : undefined
    };
  },

  toSDK(message: ClientState): ClientStateSDKType {
    const obj: any = {};
    message.chainId !== undefined && (obj.chain_id = message.chainId);
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

    message.allowUpdateAfterExpiry !== undefined && (obj.allow_update_after_expiry = message.allowUpdateAfterExpiry);
    message.allowUpdateAfterMisbehaviour !== undefined && (obj.allow_update_after_misbehaviour = message.allowUpdateAfterMisbehaviour);
    return obj;
  }

};

function createBaseConsensusState(): ConsensusState {
  return {
    timestamp: undefined,
    root: undefined,
    nextValidatorsHash: new Uint8Array()
  };
}

export const ConsensusState = {
  encode(message: ConsensusState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      root: isSet(object.root) ? MerkleRoot.fromJSON(object.root) : undefined,
      nextValidatorsHash: isSet(object.nextValidatorsHash) ? bytesFromBase64(object.nextValidatorsHash) : new Uint8Array()
    };
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
    message.root = object.root !== undefined && object.root !== null ? MerkleRoot.fromPartial(object.root) : undefined;
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    return message;
  },

  fromSDK(object: ConsensusStateSDKType): ConsensusState {
    return {
      timestamp: isSet(object.timestamp) ? Timestamp.fromSDK(object.timestamp) : undefined,
      root: isSet(object.root) ? MerkleRoot.fromSDK(object.root) : undefined,
      nextValidatorsHash: isSet(object.next_validators_hash) ? object.next_validators_hash : undefined
    };
  },

  toSDK(message: ConsensusState): ConsensusStateSDKType {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ? Timestamp.toSDK(message.timestamp) : undefined);
    message.root !== undefined && (obj.root = message.root ? MerkleRoot.toSDK(message.root) : undefined);
    message.nextValidatorsHash !== undefined && (obj.next_validators_hash = message.nextValidatorsHash);
    return obj;
  }

};

function createBaseMisbehaviour(): Misbehaviour {
  return {
    clientId: "",
    header_1: undefined,
    header_2: undefined
  };
}

export const Misbehaviour = {
  encode(message: Misbehaviour, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }

    if (message.header_1 !== undefined) {
      Header.encode(message.header_1, writer.uint32(18).fork()).ldelim();
    }

    if (message.header_2 !== undefined) {
      Header.encode(message.header_2, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Misbehaviour {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisbehaviour();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.header_1 = Header.decode(reader, reader.uint32());
          break;

        case 3:
          message.header_2 = Header.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Misbehaviour {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      header_1: isSet(object.header_1) ? Header.fromJSON(object.header_1) : undefined,
      header_2: isSet(object.header_2) ? Header.fromJSON(object.header_2) : undefined
    };
  },

  toJSON(message: Misbehaviour): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.header_1 !== undefined && (obj.header_1 = message.header_1 ? Header.toJSON(message.header_1) : undefined);
    message.header_2 !== undefined && (obj.header_2 = message.header_2 ? Header.toJSON(message.header_2) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Misbehaviour>): Misbehaviour {
    const message = createBaseMisbehaviour();
    message.clientId = object.clientId ?? "";
    message.header_1 = object.header_1 !== undefined && object.header_1 !== null ? Header.fromPartial(object.header_1) : undefined;
    message.header_2 = object.header_2 !== undefined && object.header_2 !== null ? Header.fromPartial(object.header_2) : undefined;
    return message;
  },

  fromSDK(object: MisbehaviourSDKType): Misbehaviour {
    return {
      clientId: isSet(object.client_id) ? object.client_id : undefined,
      header_1: isSet(object.header_1) ? Header.fromSDK(object.header_1) : undefined,
      header_2: isSet(object.header_2) ? Header.fromSDK(object.header_2) : undefined
    };
  },

  toSDK(message: Misbehaviour): MisbehaviourSDKType {
    const obj: any = {};
    message.clientId !== undefined && (obj.client_id = message.clientId);
    message.header_1 !== undefined && (obj.header_1 = message.header_1 ? Header.toSDK(message.header_1) : undefined);
    message.header_2 !== undefined && (obj.header_2 = message.header_2 ? Header.toSDK(message.header_2) : undefined);
    return obj;
  }

};

function createBaseHeader(): Header {
  return {
    signedHeader: undefined,
    validatorSet: undefined,
    trustedHeight: undefined,
    trustedValidators: undefined
  };
}

export const Header = {
  encode(message: Header, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Header {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      signedHeader: isSet(object.signedHeader) ? SignedHeader.fromJSON(object.signedHeader) : undefined,
      validatorSet: isSet(object.validatorSet) ? ValidatorSet.fromJSON(object.validatorSet) : undefined,
      trustedHeight: isSet(object.trustedHeight) ? Height.fromJSON(object.trustedHeight) : undefined,
      trustedValidators: isSet(object.trustedValidators) ? ValidatorSet.fromJSON(object.trustedValidators) : undefined
    };
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
    message.signedHeader = object.signedHeader !== undefined && object.signedHeader !== null ? SignedHeader.fromPartial(object.signedHeader) : undefined;
    message.validatorSet = object.validatorSet !== undefined && object.validatorSet !== null ? ValidatorSet.fromPartial(object.validatorSet) : undefined;
    message.trustedHeight = object.trustedHeight !== undefined && object.trustedHeight !== null ? Height.fromPartial(object.trustedHeight) : undefined;
    message.trustedValidators = object.trustedValidators !== undefined && object.trustedValidators !== null ? ValidatorSet.fromPartial(object.trustedValidators) : undefined;
    return message;
  },

  fromSDK(object: HeaderSDKType): Header {
    return {
      signedHeader: isSet(object.signed_header) ? SignedHeader.fromSDK(object.signed_header) : undefined,
      validatorSet: isSet(object.validator_set) ? ValidatorSet.fromSDK(object.validator_set) : undefined,
      trustedHeight: isSet(object.trusted_height) ? Height.fromSDK(object.trusted_height) : undefined,
      trustedValidators: isSet(object.trusted_validators) ? ValidatorSet.fromSDK(object.trusted_validators) : undefined
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
    numerator: Long.UZERO,
    denominator: Long.UZERO
  };
}

export const Fraction = {
  encode(message: Fraction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.numerator.isZero()) {
      writer.uint32(8).uint64(message.numerator);
    }

    if (!message.denominator.isZero()) {
      writer.uint32(16).uint64(message.denominator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fraction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFraction();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.numerator = (reader.uint64() as Long);
          break;

        case 2:
          message.denominator = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Fraction {
    return {
      numerator: isSet(object.numerator) ? Long.fromString(object.numerator) : Long.UZERO,
      denominator: isSet(object.denominator) ? Long.fromString(object.denominator) : Long.UZERO
    };
  },

  toJSON(message: Fraction): unknown {
    const obj: any = {};
    message.numerator !== undefined && (obj.numerator = (message.numerator || Long.UZERO).toString());
    message.denominator !== undefined && (obj.denominator = (message.denominator || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Fraction>): Fraction {
    const message = createBaseFraction();
    message.numerator = object.numerator !== undefined && object.numerator !== null ? Long.fromValue(object.numerator) : Long.UZERO;
    message.denominator = object.denominator !== undefined && object.denominator !== null ? Long.fromValue(object.denominator) : Long.UZERO;
    return message;
  },

  fromSDK(object: FractionSDKType): Fraction {
    return {
      numerator: isSet(object.numerator) ? object.numerator : undefined,
      denominator: isSet(object.denominator) ? object.denominator : undefined
    };
  },

  toSDK(message: Fraction): FractionSDKType {
    const obj: any = {};
    message.numerator !== undefined && (obj.numerator = message.numerator);
    message.denominator !== undefined && (obj.denominator = message.denominator);
    return obj;
  }

};