import { CapabilityOwners } from "./capability";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwners {
    /** index is the index of the capability owner. */
    index: Long;
    /** index_owners are the owners at the given index. */
    indexOwners: CapabilityOwners;
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
    /** index is the capability global index. */
    index: Long;
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
        index?: any;
        indexOwners?: {
            owners?: {
                module?: string;
                name?: string;
            }[];
        };
    } & {
        index?: any;
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
            } & Record<Exclude<keyof I["indexOwners"]["owners"][number], keyof import("./capability").Owner>, never>)[] & Record<Exclude<keyof I["indexOwners"]["owners"], keyof {
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
        index?: any;
        owners?: {
            index?: any;
            indexOwners?: {
                owners?: {
                    module?: string;
                    name?: string;
                }[];
            };
        }[];
    } & {
        index?: any;
        owners?: {
            index?: any;
            indexOwners?: {
                owners?: {
                    module?: string;
                    name?: string;
                }[];
            };
        }[] & ({
            index?: any;
            indexOwners?: {
                owners?: {
                    module?: string;
                    name?: string;
                }[];
            };
        } & {
            index?: any;
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
                } & Record<Exclude<keyof I["owners"][number]["indexOwners"]["owners"][number], keyof import("./capability").Owner>, never>)[] & Record<Exclude<keyof I["owners"][number]["indexOwners"]["owners"], keyof {
                    module?: string;
                    name?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["owners"][number]["indexOwners"], "owners">, never>;
        } & Record<Exclude<keyof I["owners"][number], keyof GenesisOwners>, never>)[] & Record<Exclude<keyof I["owners"], keyof {
            index?: any;
            indexOwners?: {
                owners?: {
                    module?: string;
                    name?: string;
                }[];
            };
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
