import * as _m0 from "protobufjs/minimal";
export interface EpochInfo {
    identifier: string;
    startTime: Date;
    duration: string;
    currentEpoch: string;
    currentEpochStartTime: Date;
    epochCountingStarted: boolean;
    currentEpochStartHeight: string;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
    epochs: EpochInfo[];
}
export declare const EpochInfo: {
    encode(message: EpochInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EpochInfo;
    fromJSON(object: any): EpochInfo;
    toJSON(message: EpochInfo): unknown;
    fromPartial<I extends {
        identifier?: string;
        startTime?: Date;
        duration?: string;
        currentEpoch?: string;
        currentEpochStartTime?: Date;
        epochCountingStarted?: boolean;
        currentEpochStartHeight?: string;
    } & {
        identifier?: string;
        startTime?: Date;
        duration?: string;
        currentEpoch?: string;
        currentEpochStartTime?: Date;
        epochCountingStarted?: boolean;
        currentEpochStartHeight?: string;
    } & Record<Exclude<keyof I, keyof EpochInfo>, never>>(object: I): EpochInfo;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        epochs?: {
            identifier?: string;
            startTime?: Date;
            duration?: string;
            currentEpoch?: string;
            currentEpochStartTime?: Date;
            epochCountingStarted?: boolean;
            currentEpochStartHeight?: string;
        }[];
    } & {
        epochs?: {
            identifier?: string;
            startTime?: Date;
            duration?: string;
            currentEpoch?: string;
            currentEpochStartTime?: Date;
            epochCountingStarted?: boolean;
            currentEpochStartHeight?: string;
        }[] & ({
            identifier?: string;
            startTime?: Date;
            duration?: string;
            currentEpoch?: string;
            currentEpochStartTime?: Date;
            epochCountingStarted?: boolean;
            currentEpochStartHeight?: string;
        } & {
            identifier?: string;
            startTime?: Date;
            duration?: string;
            currentEpoch?: string;
            currentEpochStartTime?: Date;
            epochCountingStarted?: boolean;
            currentEpochStartHeight?: string;
        } & Record<Exclude<keyof I["epochs"][number], keyof EpochInfo>, never>)[] & Record<Exclude<keyof I["epochs"], keyof {
            identifier?: string;
            startTime?: Date;
            duration?: string;
            currentEpoch?: string;
            currentEpochStartTime?: Date;
            epochCountingStarted?: boolean;
            currentEpochStartHeight?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "epochs">, never>>(object: I): GenesisState;
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
