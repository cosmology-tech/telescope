import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Duration } from "../../../../google/protobuf/duration";
import { Height } from "../../../../ibc/core/client/v1/client";
import { MerkleRoot } from "../../../../ibc/core/commitment/v1/commitment";
import { SignedHeader } from "../../../../tendermint/types/types";
import { ValidatorSet } from "../../../../tendermint/types/validator";
import { ProofSpec } from "../../../../confio/proofs";
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
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 */
export interface Fraction {
    numerator: Long;
    denominator: Long;
}
export declare const ClientState: {
    encode(message: ClientState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientState;
    fromJSON(object: any): ClientState;
    toJSON(message: ClientState): unknown;
    fromPartial<I extends unknown>(object: I): ClientState;
};
export declare const ConsensusState: {
    encode(message: ConsensusState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusState;
    fromJSON(object: any): ConsensusState;
    toJSON(message: ConsensusState): unknown;
    fromPartial<I extends unknown>(object: I): ConsensusState;
};
export declare const Misbehaviour: {
    encode(message: Misbehaviour, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Misbehaviour;
    fromJSON(object: any): Misbehaviour;
    toJSON(message: Misbehaviour): unknown;
    fromPartial<I extends unknown>(object: I): Misbehaviour;
};
export declare const Header: {
    encode(message: Header, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Header;
    fromJSON(object: any): Header;
    toJSON(message: Header): unknown;
    fromPartial<I extends unknown>(object: I): Header;
};
export declare const Fraction: {
    encode(message: Fraction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Fraction;
    fromJSON(object: any): Fraction;
    toJSON(message: Fraction): unknown;
    fromPartial<I extends unknown>(object: I): Fraction;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
