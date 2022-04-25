import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { CPU, Memory, Storage } from "../../../akash/base/v1beta2/resource";
import { Endpoint } from "../../../akash/base/v1beta2/endpoint";
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnits {
    cpu: CPU;
    memory: Memory;
    storage: Storage[];
    endpoints: Endpoint[];
}
export declare const ResourceUnits: {
    encode(message: ResourceUnits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceUnits;
    fromJSON(object: any): ResourceUnits;
    toJSON(message: ResourceUnits): unknown;
    fromPartial<I extends unknown>(object: I): ResourceUnits;
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
