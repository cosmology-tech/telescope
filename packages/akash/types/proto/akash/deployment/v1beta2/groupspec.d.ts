import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { PlacementRequirements } from "../../../akash/base/v1beta2/attribute";
import { Resource } from "../../../akash/deployment/v1beta2/resource";
/** GroupSpec stores group specifications */
export interface GroupSpec {
    name: string;
    requirements: PlacementRequirements;
    resources: Resource[];
}
export declare const GroupSpec: {
    encode(message: GroupSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupSpec;
    fromJSON(object: any): GroupSpec;
    toJSON(message: GroupSpec): unknown;
    fromPartial<I extends unknown>(object: I): GroupSpec;
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
