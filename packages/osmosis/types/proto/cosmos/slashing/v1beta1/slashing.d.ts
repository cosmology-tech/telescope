import * as _m0 from "protobufjs/minimal";
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfo {
    address: string;
    /** Height at which validator was first a candidate OR was unjailed */
    startHeight: string;
    /**
     * Index which is incremented each time the validator was a bonded
     * in a block and may have signed a precommit or not. This in conjunction with the
     * `SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.
     */
    indexOffset: string;
    /** Timestamp until which the validator is jailed due to liveness downtime. */
    jailedUntil: Date;
    /**
     * Whether or not a validator has been tombstoned (killed out of validator set). It is set
     * once the validator commits an equivocation or for any other configured misbehiavor.
     */
    tombstoned: boolean;
    /**
     * A counter kept to avoid unnecessary array reads.
     * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
     */
    missedBlocksCounter: string;
}
/** Params represents the parameters used for by the slashing module. */
export interface Params {
    signedBlocksWindow: string;
    minSignedPerWindow: Uint8Array;
    downtimeJailDuration: string;
    slashFractionDoubleSign: Uint8Array;
    slashFractionDowntime: Uint8Array;
}
export declare const ValidatorSigningInfo: {
    encode(message: ValidatorSigningInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSigningInfo;
    fromJSON(object: any): ValidatorSigningInfo;
    toJSON(message: ValidatorSigningInfo): unknown;
    fromPartial<I extends {
        address?: string;
        startHeight?: string;
        indexOffset?: string;
        jailedUntil?: Date;
        tombstoned?: boolean;
        missedBlocksCounter?: string;
    } & {
        address?: string;
        startHeight?: string;
        indexOffset?: string;
        jailedUntil?: Date;
        tombstoned?: boolean;
        missedBlocksCounter?: string;
    } & Record<Exclude<keyof I, keyof ValidatorSigningInfo>, never>>(object: I): ValidatorSigningInfo;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        signedBlocksWindow?: string;
        minSignedPerWindow?: Uint8Array;
        downtimeJailDuration?: string;
        slashFractionDoubleSign?: Uint8Array;
        slashFractionDowntime?: Uint8Array;
    } & {
        signedBlocksWindow?: string;
        minSignedPerWindow?: Uint8Array;
        downtimeJailDuration?: string;
        slashFractionDoubleSign?: Uint8Array;
        slashFractionDowntime?: Uint8Array;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
