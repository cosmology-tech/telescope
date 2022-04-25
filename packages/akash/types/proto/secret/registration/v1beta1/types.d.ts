import Long from "long";
import * as _m0 from "protobufjs/minimal";
export interface SeedConfig {
    masterCert: string;
    encryptedKey: string;
}
export interface RegistrationNodeInfo {
    certificate: Uint8Array;
    encryptedSeed: Uint8Array;
}
export declare const SeedConfig: {
    encode(message: SeedConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SeedConfig;
    fromJSON(object: any): SeedConfig;
    toJSON(message: SeedConfig): unknown;
    fromPartial<I extends unknown>(object: I): SeedConfig;
};
export declare const RegistrationNodeInfo: {
    encode(message: RegistrationNodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegistrationNodeInfo;
    fromJSON(object: any): RegistrationNodeInfo;
    toJSON(message: RegistrationNodeInfo): unknown;
    fromPartial<I extends unknown>(object: I): RegistrationNodeInfo;
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
