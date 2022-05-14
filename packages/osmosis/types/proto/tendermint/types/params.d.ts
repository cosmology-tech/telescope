import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
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
    maxBytes: Long;
    /**
     * Max gas per block.
     * Note: must be greater or equal to -1
     */
    maxGas: Long;
    /**
     * Minimum time increment between consecutive blocks (in milliseconds) If the
     * block header timestamp is ahead of the system clock, decrease this value.
     *
     * Not exposed to the application.
     */
    timeIotaMs: Long;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParams {
    /**
     * Max age of evidence, in blocks.
     *
     * The basic formula for calculating this is: MaxAgeDuration / {average block
     * time}.
     */
    maxAgeNumBlocks: Long;
    /**
     * Max age of evidence, in time.
     *
     * It should correspond with an app's "unbonding period" or other similar
     * mechanism for handling [Nothing-At-Stake
     * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
     */
    maxAgeDuration: string;
    /**
     * This sets the maximum size of total evidence in bytes that can be committed in a single block.
     * and should fall comfortably under the max block bytes.
     * Default is 1048576 or 1MB
     */
    maxBytes: Long;
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
    appVersion: Long;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParams {
    blockMaxBytes: Long;
    blockMaxGas: Long;
}
export declare const ConsensusParams: {
    encode(message: ConsensusParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParams;
    fromJSON(object: any): ConsensusParams;
    toJSON(message: ConsensusParams): unknown;
    fromPartial<I extends {
        block?: {
            maxBytes?: any;
            maxGas?: any;
            timeIotaMs?: any;
        };
        evidence?: {
            maxAgeNumBlocks?: any;
            maxAgeDuration?: string;
            maxBytes?: any;
        };
        validator?: {
            pubKeyTypes?: string[];
        };
        version?: {
            appVersion?: any;
        };
    } & {
        block?: {
            maxBytes?: any;
            maxGas?: any;
            timeIotaMs?: any;
        } & {
            maxBytes?: any;
            maxGas?: any;
            timeIotaMs?: any;
        } & Record<Exclude<keyof I["block"], keyof BlockParams>, never>;
        evidence?: {
            maxAgeNumBlocks?: any;
            maxAgeDuration?: string;
            maxBytes?: any;
        } & {
            maxAgeNumBlocks?: any;
            maxAgeDuration?: string;
            maxBytes?: any;
        } & Record<Exclude<keyof I["evidence"], keyof EvidenceParams>, never>;
        validator?: {
            pubKeyTypes?: string[];
        } & {
            pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I["validator"]["pubKeyTypes"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["validator"], "pubKeyTypes">, never>;
        version?: {
            appVersion?: any;
        } & {
            appVersion?: any;
        } & Record<Exclude<keyof I["version"], "appVersion">, never>;
    } & Record<Exclude<keyof I, keyof ConsensusParams>, never>>(object: I): ConsensusParams;
};
export declare const BlockParams: {
    encode(message: BlockParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockParams;
    fromJSON(object: any): BlockParams;
    toJSON(message: BlockParams): unknown;
    fromPartial<I extends {
        maxBytes?: any;
        maxGas?: any;
        timeIotaMs?: any;
    } & {
        maxBytes?: any;
        maxGas?: any;
        timeIotaMs?: any;
    } & Record<Exclude<keyof I, keyof BlockParams>, never>>(object: I): BlockParams;
};
export declare const EvidenceParams: {
    encode(message: EvidenceParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvidenceParams;
    fromJSON(object: any): EvidenceParams;
    toJSON(message: EvidenceParams): unknown;
    fromPartial<I extends {
        maxAgeNumBlocks?: any;
        maxAgeDuration?: string;
        maxBytes?: any;
    } & {
        maxAgeNumBlocks?: any;
        maxAgeDuration?: string;
        maxBytes?: any;
    } & Record<Exclude<keyof I, keyof EvidenceParams>, never>>(object: I): EvidenceParams;
};
export declare const ValidatorParams: {
    encode(message: ValidatorParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorParams;
    fromJSON(object: any): ValidatorParams;
    toJSON(message: ValidatorParams): unknown;
    fromPartial<I extends {
        pubKeyTypes?: string[];
    } & {
        pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I["pubKeyTypes"], keyof string[]>, never>;
    } & Record<Exclude<keyof I, "pubKeyTypes">, never>>(object: I): ValidatorParams;
};
export declare const VersionParams: {
    encode(message: VersionParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VersionParams;
    fromJSON(object: any): VersionParams;
    toJSON(message: VersionParams): unknown;
    fromPartial<I extends {
        appVersion?: any;
    } & {
        appVersion?: any;
    } & Record<Exclude<keyof I, "appVersion">, never>>(object: I): VersionParams;
};
export declare const HashedParams: {
    encode(message: HashedParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HashedParams;
    fromJSON(object: any): HashedParams;
    toJSON(message: HashedParams): unknown;
    fromPartial<I extends {
        blockMaxBytes?: any;
        blockMaxGas?: any;
    } & {
        blockMaxBytes?: any;
        blockMaxGas?: any;
    } & Record<Exclude<keyof I, keyof HashedParams>, never>>(object: I): HashedParams;
};
