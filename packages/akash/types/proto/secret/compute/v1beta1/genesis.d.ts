import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { CodeInfo, ContractInfo, ContractCustomInfo, Model } from "../../../secret/compute/v1beta1/types";
/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
    /** Params params = 1 [(gogoproto.nullable) = false]; */
    codes: Code[];
    contracts: Contract[];
    sequences: Sequence[];
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
    codeId: Long;
    codeInfo: CodeInfo;
    codeBytes: Uint8Array;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
    contractAddress: Uint8Array;
    contractInfo: ContractInfo;
    contractState: Model[];
    contractCustomInfo: ContractCustomInfo;
}
/** Sequence id and value of a counter */
export interface Sequence {
    idKey: Uint8Array;
    value: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends unknown>(object: I): GenesisState;
};
export declare const Code: {
    encode(message: Code, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Code;
    fromJSON(object: any): Code;
    toJSON(message: Code): unknown;
    fromPartial<I extends unknown>(object: I): Code;
};
export declare const Contract: {
    encode(message: Contract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Contract;
    fromJSON(object: any): Contract;
    toJSON(message: Contract): unknown;
    fromPartial<I extends unknown>(object: I): Contract;
};
export declare const Sequence: {
    encode(message: Sequence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Sequence;
    fromJSON(object: any): Sequence;
    toJSON(message: Sequence): unknown;
    fromPartial<I extends unknown>(object: I): Sequence;
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
