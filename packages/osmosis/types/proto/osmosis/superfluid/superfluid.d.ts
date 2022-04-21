import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
export declare enum SuperfluidAssetType {
    SuperfluidAssetTypeNative = 0,
    /** SuperfluidAssetTypeLPShare - SuperfluidAssetTypeLendingShare = 2; // for now not exist */
    SuperfluidAssetTypeLPShare = 1,
    UNRECOGNIZED = -1
}
export declare function superfluidAssetTypeFromJSON(object: any): SuperfluidAssetType;
export declare function superfluidAssetTypeToJSON(object: SuperfluidAssetType): string;
/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */
export interface SuperfluidAsset {
    denom: string;
    assetType: SuperfluidAssetType;
}
/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking
 */
export interface SuperfluidIntermediaryAccount {
    denom: string;
    valAddr: string;
    /** perpetual gauge for rewards distribution */
    gaugeId: Long;
}
/**
 * The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
 * treat an LP share as having, for all of epoch N. Eventually this is intended
 * to be set as the Time-weighted-average-osmo-backing for the entire duration
 * of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior
 * epochs rewards) However for now, this is not the TWAP but instead the spot
 * price at the boundary.  For different types of assets in the future, it could
 * change.
 */
export interface OsmoEquivalentMultiplierRecord {
    epochNumber: Long;
    /** superfluid asset denom, can be LP token or native token */
    denom: string;
    multiplier: string;
}
/**
 * SuperfluidDelegationRecord takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking
 */
export interface SuperfluidDelegationRecord {
    delegatorAddress: string;
    validatorAddress: string;
    delegationAmount: Coin;
}
export interface LockIdIntermediaryAccountConnection {
    lockId: Long;
    intermediaryAccount: string;
}
export declare const SuperfluidAsset: {
    encode(message: SuperfluidAsset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidAsset;
    fromJSON(object: any): SuperfluidAsset;
    toJSON(message: SuperfluidAsset): unknown;
    fromPartial<I extends unknown>(object: I): SuperfluidAsset;
};
export declare const SuperfluidIntermediaryAccount: {
    encode(message: SuperfluidIntermediaryAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidIntermediaryAccount;
    fromJSON(object: any): SuperfluidIntermediaryAccount;
    toJSON(message: SuperfluidIntermediaryAccount): unknown;
    fromPartial<I extends unknown>(object: I): SuperfluidIntermediaryAccount;
};
export declare const OsmoEquivalentMultiplierRecord: {
    encode(message: OsmoEquivalentMultiplierRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OsmoEquivalentMultiplierRecord;
    fromJSON(object: any): OsmoEquivalentMultiplierRecord;
    toJSON(message: OsmoEquivalentMultiplierRecord): unknown;
    fromPartial<I extends unknown>(object: I): OsmoEquivalentMultiplierRecord;
};
export declare const SuperfluidDelegationRecord: {
    encode(message: SuperfluidDelegationRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationRecord;
    fromJSON(object: any): SuperfluidDelegationRecord;
    toJSON(message: SuperfluidDelegationRecord): unknown;
    fromPartial<I extends unknown>(object: I): SuperfluidDelegationRecord;
};
export declare const LockIdIntermediaryAccountConnection: {
    encode(message: LockIdIntermediaryAccountConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockIdIntermediaryAccountConnection;
    fromJSON(object: any): LockIdIntermediaryAccountConnection;
    toJSON(message: LockIdIntermediaryAccountConnection): unknown;
    fromPartial<I extends unknown>(object: I): LockIdIntermediaryAccountConnection;
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
