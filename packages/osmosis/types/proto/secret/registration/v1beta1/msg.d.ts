import * as _m0 from "protobufjs/minimal";
export interface RaAuthenticate {
    sender: Uint8Array;
    certificate: Uint8Array;
}
export interface MasterCertificate {
    bytes: Uint8Array;
}
export interface Key {
    key: Uint8Array;
}
export declare const RaAuthenticate: {
    encode(message: RaAuthenticate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RaAuthenticate;
    fromJSON(object: any): RaAuthenticate;
    toJSON(message: RaAuthenticate): unknown;
    fromPartial<I extends {
        sender?: Uint8Array;
        certificate?: Uint8Array;
    } & {
        sender?: Uint8Array;
        certificate?: Uint8Array;
    } & Record<Exclude<keyof I, keyof RaAuthenticate>, never>>(object: I): RaAuthenticate;
};
export declare const MasterCertificate: {
    encode(message: MasterCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MasterCertificate;
    fromJSON(object: any): MasterCertificate;
    toJSON(message: MasterCertificate): unknown;
    fromPartial<I extends {
        bytes?: Uint8Array;
    } & {
        bytes?: Uint8Array;
    } & Record<Exclude<keyof I, "bytes">, never>>(object: I): MasterCertificate;
};
export declare const Key: {
    encode(message: Key, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Key;
    fromJSON(object: any): Key;
    toJSON(message: Key): unknown;
    fromPartial<I extends {
        key?: Uint8Array;
    } & {
        key?: Uint8Array;
    } & Record<Exclude<keyof I, "key">, never>>(object: I): Key;
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
