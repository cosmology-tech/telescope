import * as _m0 from "protobufjs/minimal";
import { CapabilityOwners } from "../../../cosmos/capability/v1beta1/capability";
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwners {
    /** index is the index of the capability owner. */
    index: string;
    /** index_owners are the owners at the given index. */
    indexOwners: CapabilityOwners;
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
    /** index is the capability global index. */
    index: string;
    /**
     * owners represents a map from index to owners of the capability index
     * index key is string to allow amino marshalling.
     */
    owners: GenesisOwners[];
}
export declare const GenesisOwners: {
    encode(message: GenesisOwners, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisOwners;
    fromJSON(object: any): GenesisOwners;
    toJSON(message: GenesisOwners): unknown;
    fromPartial<I extends {
        index?: string;
        indexOwners?: {
            owners?: {
                module?: string;
                name?: string;
            }[];
        };
    } & {
        index?: string;
        indexOwners?: {
            owners?: {
                module?: string;
                name?: string;
            }[];
        } & {
            owners?: {
                module?: string;
                name?: string;
            }[] & ({
                module?: string;
                name?: string;
            } & {
                module?: string;
                name?: string;
            } & Record<Exclude<keyof I["indexOwners"]["owners"][number], keyof import("../../../cosmos/capability/v1beta1/capability").Owner>, never>)[] & Record<Exclude<keyof I["indexOwners"]["owners"], keyof {
                module?: string;
                name?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["indexOwners"], "owners">, never>;
    } & Record<Exclude<keyof I, keyof GenesisOwners>, never>>(object: I): GenesisOwners;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        index?: string;
        owners?: {
            index?: string;
            indexOwners?: {
                owners?: {
                    module?: string;
                    name?: string;
                }[];
            };
        }[];
    } & {
        index?: string;
        owners?: {
            index?: string;
            indexOwners?: {
                owners?: {
                    module?: string;
                    name?: string;
                }[];
            };
        }[] & ({
            index?: string;
            indexOwners?: {
                owners?: {
                    module?: string;
                    name?: string;
                }[];
            };
        } & {
            index?: string;
            indexOwners?: {
                owners?: {
                    module?: string;
                    name?: string;
                }[];
            } & {
                owners?: {
                    module?: string;
                    name?: string;
                }[] & ({
                    module?: string;
                    name?: string;
                } & {
                    module?: string;
                    name?: string;
                } & Record<Exclude<keyof I["owners"][number]["indexOwners"]["owners"][number], keyof import("../../../cosmos/capability/v1beta1/capability").Owner>, never>)[] & Record<Exclude<keyof I["owners"][number]["indexOwners"]["owners"], keyof {
                    module?: string;
                    name?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["owners"][number]["indexOwners"], "owners">, never>;
        } & Record<Exclude<keyof I["owners"][number], keyof GenesisOwners>, never>)[] & Record<Exclude<keyof I["owners"], keyof {
            index?: string;
            indexOwners?: {
                owners?: {
                    module?: string;
                    name?: string;
                }[];
            };
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
