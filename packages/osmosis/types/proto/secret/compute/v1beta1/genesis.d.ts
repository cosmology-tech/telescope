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
    codeId: string;
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
    value: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        codes?: {
            codeId?: string;
            codeInfo?: {
                codeHash?: Uint8Array;
                creator?: Uint8Array;
                source?: string;
                builder?: string;
            };
            codeBytes?: Uint8Array;
        }[];
        contracts?: {
            contractAddress?: Uint8Array;
            contractInfo?: {
                codeId?: string;
                creator?: Uint8Array;
                label?: string;
                created?: {
                    blockHeight?: string;
                    txIndex?: string;
                };
            };
            contractState?: {
                Key?: Uint8Array;
                Value?: Uint8Array;
            }[];
            contractCustomInfo?: {
                enclaveKey?: Uint8Array;
                label?: string;
            };
        }[];
        sequences?: {
            idKey?: Uint8Array;
            value?: string;
        }[];
    } & {
        codes?: {
            codeId?: string;
            codeInfo?: {
                codeHash?: Uint8Array;
                creator?: Uint8Array;
                source?: string;
                builder?: string;
            };
            codeBytes?: Uint8Array;
        }[] & ({
            codeId?: string;
            codeInfo?: {
                codeHash?: Uint8Array;
                creator?: Uint8Array;
                source?: string;
                builder?: string;
            };
            codeBytes?: Uint8Array;
        } & {
            codeId?: string;
            codeInfo?: {
                codeHash?: Uint8Array;
                creator?: Uint8Array;
                source?: string;
                builder?: string;
            } & {
                codeHash?: Uint8Array;
                creator?: Uint8Array;
                source?: string;
                builder?: string;
            } & Record<Exclude<keyof I["codes"][number]["codeInfo"], keyof CodeInfo>, never>;
            codeBytes?: Uint8Array;
        } & Record<Exclude<keyof I["codes"][number], keyof Code>, never>)[] & Record<Exclude<keyof I["codes"], keyof {
            codeId?: string;
            codeInfo?: {
                codeHash?: Uint8Array;
                creator?: Uint8Array;
                source?: string;
                builder?: string;
            };
            codeBytes?: Uint8Array;
        }[]>, never>;
        contracts?: {
            contractAddress?: Uint8Array;
            contractInfo?: {
                codeId?: string;
                creator?: Uint8Array;
                label?: string;
                created?: {
                    blockHeight?: string;
                    txIndex?: string;
                };
            };
            contractState?: {
                Key?: Uint8Array;
                Value?: Uint8Array;
            }[];
            contractCustomInfo?: {
                enclaveKey?: Uint8Array;
                label?: string;
            };
        }[] & ({
            contractAddress?: Uint8Array;
            contractInfo?: {
                codeId?: string;
                creator?: Uint8Array;
                label?: string;
                created?: {
                    blockHeight?: string;
                    txIndex?: string;
                };
            };
            contractState?: {
                Key?: Uint8Array;
                Value?: Uint8Array;
            }[];
            contractCustomInfo?: {
                enclaveKey?: Uint8Array;
                label?: string;
            };
        } & {
            contractAddress?: Uint8Array;
            contractInfo?: {
                codeId?: string;
                creator?: Uint8Array;
                label?: string;
                created?: {
                    blockHeight?: string;
                    txIndex?: string;
                };
            } & {
                codeId?: string;
                creator?: Uint8Array;
                label?: string;
                created?: {
                    blockHeight?: string;
                    txIndex?: string;
                } & {
                    blockHeight?: string;
                    txIndex?: string;
                } & Record<Exclude<keyof I["contracts"][number]["contractInfo"]["created"], keyof import("../../../secret/compute/v1beta1/types").AbsoluteTxPosition>, never>;
            } & Record<Exclude<keyof I["contracts"][number]["contractInfo"], keyof ContractInfo>, never>;
            contractState?: {
                Key?: Uint8Array;
                Value?: Uint8Array;
            }[] & ({
                Key?: Uint8Array;
                Value?: Uint8Array;
            } & {
                Key?: Uint8Array;
                Value?: Uint8Array;
            } & Record<Exclude<keyof I["contracts"][number]["contractState"][number], keyof Model>, never>)[] & Record<Exclude<keyof I["contracts"][number]["contractState"], keyof {
                Key?: Uint8Array;
                Value?: Uint8Array;
            }[]>, never>;
            contractCustomInfo?: {
                enclaveKey?: Uint8Array;
                label?: string;
            } & {
                enclaveKey?: Uint8Array;
                label?: string;
            } & Record<Exclude<keyof I["contracts"][number]["contractCustomInfo"], keyof ContractCustomInfo>, never>;
        } & Record<Exclude<keyof I["contracts"][number], keyof Contract>, never>)[] & Record<Exclude<keyof I["contracts"], keyof {
            contractAddress?: Uint8Array;
            contractInfo?: {
                codeId?: string;
                creator?: Uint8Array;
                label?: string;
                created?: {
                    blockHeight?: string;
                    txIndex?: string;
                };
            };
            contractState?: {
                Key?: Uint8Array;
                Value?: Uint8Array;
            }[];
            contractCustomInfo?: {
                enclaveKey?: Uint8Array;
                label?: string;
            };
        }[]>, never>;
        sequences?: {
            idKey?: Uint8Array;
            value?: string;
        }[] & ({
            idKey?: Uint8Array;
            value?: string;
        } & {
            idKey?: Uint8Array;
            value?: string;
        } & Record<Exclude<keyof I["sequences"][number], keyof Sequence>, never>)[] & Record<Exclude<keyof I["sequences"], keyof {
            idKey?: Uint8Array;
            value?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const Code: {
    encode(message: Code, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Code;
    fromJSON(object: any): Code;
    toJSON(message: Code): unknown;
    fromPartial<I extends {
        codeId?: string;
        codeInfo?: {
            codeHash?: Uint8Array;
            creator?: Uint8Array;
            source?: string;
            builder?: string;
        };
        codeBytes?: Uint8Array;
    } & {
        codeId?: string;
        codeInfo?: {
            codeHash?: Uint8Array;
            creator?: Uint8Array;
            source?: string;
            builder?: string;
        } & {
            codeHash?: Uint8Array;
            creator?: Uint8Array;
            source?: string;
            builder?: string;
        } & Record<Exclude<keyof I["codeInfo"], keyof CodeInfo>, never>;
        codeBytes?: Uint8Array;
    } & Record<Exclude<keyof I, keyof Code>, never>>(object: I): Code;
};
export declare const Contract: {
    encode(message: Contract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Contract;
    fromJSON(object: any): Contract;
    toJSON(message: Contract): unknown;
    fromPartial<I extends {
        contractAddress?: Uint8Array;
        contractInfo?: {
            codeId?: string;
            creator?: Uint8Array;
            label?: string;
            created?: {
                blockHeight?: string;
                txIndex?: string;
            };
        };
        contractState?: {
            Key?: Uint8Array;
            Value?: Uint8Array;
        }[];
        contractCustomInfo?: {
            enclaveKey?: Uint8Array;
            label?: string;
        };
    } & {
        contractAddress?: Uint8Array;
        contractInfo?: {
            codeId?: string;
            creator?: Uint8Array;
            label?: string;
            created?: {
                blockHeight?: string;
                txIndex?: string;
            };
        } & {
            codeId?: string;
            creator?: Uint8Array;
            label?: string;
            created?: {
                blockHeight?: string;
                txIndex?: string;
            } & {
                blockHeight?: string;
                txIndex?: string;
            } & Record<Exclude<keyof I["contractInfo"]["created"], keyof import("../../../secret/compute/v1beta1/types").AbsoluteTxPosition>, never>;
        } & Record<Exclude<keyof I["contractInfo"], keyof ContractInfo>, never>;
        contractState?: {
            Key?: Uint8Array;
            Value?: Uint8Array;
        }[] & ({
            Key?: Uint8Array;
            Value?: Uint8Array;
        } & {
            Key?: Uint8Array;
            Value?: Uint8Array;
        } & Record<Exclude<keyof I["contractState"][number], keyof Model>, never>)[] & Record<Exclude<keyof I["contractState"], keyof {
            Key?: Uint8Array;
            Value?: Uint8Array;
        }[]>, never>;
        contractCustomInfo?: {
            enclaveKey?: Uint8Array;
            label?: string;
        } & {
            enclaveKey?: Uint8Array;
            label?: string;
        } & Record<Exclude<keyof I["contractCustomInfo"], keyof ContractCustomInfo>, never>;
    } & Record<Exclude<keyof I, keyof Contract>, never>>(object: I): Contract;
};
export declare const Sequence: {
    encode(message: Sequence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Sequence;
    fromJSON(object: any): Sequence;
    toJSON(message: Sequence): unknown;
    fromPartial<I extends {
        idKey?: Uint8Array;
        value?: string;
    } & {
        idKey?: Uint8Array;
        value?: string;
    } & Record<Exclude<keyof I, keyof Sequence>, never>>(object: I): Sequence;
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
