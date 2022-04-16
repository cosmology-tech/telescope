import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../cosmos/auth/v1beta1/auth";
import { Any } from "../../../google/protobuf/any";
/** GenesisState defines the auth module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params;
    /** accounts are the accounts present at genesis. */
    accounts: Any[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            maxMemoCharacters?: string;
            txSigLimit?: string;
            txSizeCostPerByte?: string;
            sigVerifyCostEd25519?: string;
            sigVerifyCostSecp256k1?: string;
        };
        accounts?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[];
    } & {
        params?: {
            maxMemoCharacters?: string;
            txSigLimit?: string;
            txSizeCostPerByte?: string;
            sigVerifyCostEd25519?: string;
            sigVerifyCostSecp256k1?: string;
        } & {
            maxMemoCharacters?: string;
            txSigLimit?: string;
            txSizeCostPerByte?: string;
            sigVerifyCostEd25519?: string;
            sigVerifyCostSecp256k1?: string;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>;
        accounts?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[] & ({
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["accounts"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["accounts"], keyof {
            typeUrl?: string;
            value?: Uint8Array;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
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
