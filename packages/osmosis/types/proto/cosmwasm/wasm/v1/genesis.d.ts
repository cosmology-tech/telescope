import * as _m0 from "protobufjs/minimal";
import { Params, CodeInfo, ContractInfo, Model } from "../../../cosmwasm/wasm/v1/types";
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract } from "../../../cosmwasm/wasm/v1/tx";
/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
    params: Params;
    codes: Code[];
    contracts: Contract[];
    sequences: Sequence[];
    genMsgs: GenesisState_GenMsgs[];
}
/**
 * GenMsgs define the messages that can be executed during genesis phase in
 * order. The intention is to have more human readable data that is auditable.
 */
export interface GenesisState_GenMsgs {
    storeCode: MsgStoreCode | undefined;
    instantiateContract: MsgInstantiateContract | undefined;
    executeContract: MsgExecuteContract | undefined;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
    codeId: string;
    codeInfo: CodeInfo;
    codeBytes: Uint8Array;
    /** Pinned to wasmvm cache */
    pinned: boolean;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
    contractAddress: string;
    contractInfo: ContractInfo;
    contractState: Model[];
}
/** Sequence key and value of an id generation counter */
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
        params?: {
            codeUploadAccess?: {
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                address?: string;
            };
            instantiateDefaultPermission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
            maxWasmCodeSize?: string;
        };
        codes?: {
            codeId?: string;
            codeInfo?: {
                codeHash?: Uint8Array;
                creator?: string;
                instantiateConfig?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                    address?: string;
                };
            };
            codeBytes?: Uint8Array;
            pinned?: boolean;
        }[];
        contracts?: {
            contractAddress?: string;
            contractInfo?: {
                codeId?: string;
                creator?: string;
                admin?: string;
                label?: string;
                created?: {
                    blockHeight?: string;
                    txIndex?: string;
                };
                ibcPortId?: string;
                extension?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            };
            contractState?: {
                key?: Uint8Array;
                value?: Uint8Array;
            }[];
        }[];
        sequences?: {
            idKey?: Uint8Array;
            value?: string;
        }[];
        genMsgs?: {
            storeCode?: {
                sender?: string;
                wasmByteCode?: Uint8Array;
                instantiatePermission?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                    address?: string;
                };
            };
            instantiateContract?: {
                sender?: string;
                admin?: string;
                codeId?: string;
                label?: string;
                msg?: Uint8Array;
                funds?: {
                    denom?: string;
                    amount?: string;
                }[];
            };
            executeContract?: {
                sender?: string;
                contract?: string;
                msg?: Uint8Array;
                funds?: {
                    denom?: string;
                    amount?: string;
                }[];
            };
        }[];
    } & {
        params?: {
            codeUploadAccess?: {
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                address?: string;
            };
            instantiateDefaultPermission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
            maxWasmCodeSize?: string;
        } & {
            codeUploadAccess?: {
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                address?: string;
            } & {
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                address?: string;
            } & Record<Exclude<keyof I["params"]["codeUploadAccess"], keyof import("../../../cosmwasm/wasm/v1/types").AccessConfig>, never>;
            instantiateDefaultPermission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
            maxWasmCodeSize?: string;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>;
        codes?: {
            codeId?: string;
            codeInfo?: {
                codeHash?: Uint8Array;
                creator?: string;
                instantiateConfig?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                    address?: string;
                };
            };
            codeBytes?: Uint8Array;
            pinned?: boolean;
        }[] & ({
            codeId?: string;
            codeInfo?: {
                codeHash?: Uint8Array;
                creator?: string;
                instantiateConfig?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                    address?: string;
                };
            };
            codeBytes?: Uint8Array;
            pinned?: boolean;
        } & {
            codeId?: string;
            codeInfo?: {
                codeHash?: Uint8Array;
                creator?: string;
                instantiateConfig?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                    address?: string;
                };
            } & {
                codeHash?: Uint8Array;
                creator?: string;
                instantiateConfig?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                    address?: string;
                } & {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                    address?: string;
                } & Record<Exclude<keyof I["codes"][number]["codeInfo"]["instantiateConfig"], keyof import("../../../cosmwasm/wasm/v1/types").AccessConfig>, never>;
            } & Record<Exclude<keyof I["codes"][number]["codeInfo"], keyof CodeInfo>, never>;
            codeBytes?: Uint8Array;
            pinned?: boolean;
        } & Record<Exclude<keyof I["codes"][number], keyof Code>, never>)[] & Record<Exclude<keyof I["codes"], keyof {
            codeId?: string;
            codeInfo?: {
                codeHash?: Uint8Array;
                creator?: string;
                instantiateConfig?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                    address?: string;
                };
            };
            codeBytes?: Uint8Array;
            pinned?: boolean;
        }[]>, never>;
        contracts?: {
            contractAddress?: string;
            contractInfo?: {
                codeId?: string;
                creator?: string;
                admin?: string;
                label?: string;
                created?: {
                    blockHeight?: string;
                    txIndex?: string;
                };
                ibcPortId?: string;
                extension?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            };
            contractState?: {
                key?: Uint8Array;
                value?: Uint8Array;
            }[];
        }[] & ({
            contractAddress?: string;
            contractInfo?: {
                codeId?: string;
                creator?: string;
                admin?: string;
                label?: string;
                created?: {
                    blockHeight?: string;
                    txIndex?: string;
                };
                ibcPortId?: string;
                extension?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            };
            contractState?: {
                key?: Uint8Array;
                value?: Uint8Array;
            }[];
        } & {
            contractAddress?: string;
            contractInfo?: {
                codeId?: string;
                creator?: string;
                admin?: string;
                label?: string;
                created?: {
                    blockHeight?: string;
                    txIndex?: string;
                };
                ibcPortId?: string;
                extension?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            } & {
                codeId?: string;
                creator?: string;
                admin?: string;
                label?: string;
                created?: {
                    blockHeight?: string;
                    txIndex?: string;
                } & {
                    blockHeight?: string;
                    txIndex?: string;
                } & Record<Exclude<keyof I["contracts"][number]["contractInfo"]["created"], keyof import("../../../cosmwasm/wasm/v1/types").AbsoluteTxPosition>, never>;
                ibcPortId?: string;
                extension?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["contracts"][number]["contractInfo"]["extension"], keyof import("../../../google/protobuf/any").Any>, never>;
            } & Record<Exclude<keyof I["contracts"][number]["contractInfo"], keyof ContractInfo>, never>;
            contractState?: {
                key?: Uint8Array;
                value?: Uint8Array;
            }[] & ({
                key?: Uint8Array;
                value?: Uint8Array;
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["contracts"][number]["contractState"][number], keyof Model>, never>)[] & Record<Exclude<keyof I["contracts"][number]["contractState"], keyof {
                key?: Uint8Array;
                value?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["contracts"][number], keyof Contract>, never>)[] & Record<Exclude<keyof I["contracts"], keyof {
            contractAddress?: string;
            contractInfo?: {
                codeId?: string;
                creator?: string;
                admin?: string;
                label?: string;
                created?: {
                    blockHeight?: string;
                    txIndex?: string;
                };
                ibcPortId?: string;
                extension?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            };
            contractState?: {
                key?: Uint8Array;
                value?: Uint8Array;
            }[];
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
        genMsgs?: {
            storeCode?: {
                sender?: string;
                wasmByteCode?: Uint8Array;
                instantiatePermission?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                    address?: string;
                };
            };
            instantiateContract?: {
                sender?: string;
                admin?: string;
                codeId?: string;
                label?: string;
                msg?: Uint8Array;
                funds?: {
                    denom?: string;
                    amount?: string;
                }[];
            };
            executeContract?: {
                sender?: string;
                contract?: string;
                msg?: Uint8Array;
                funds?: {
                    denom?: string;
                    amount?: string;
                }[];
            };
        }[] & ({
            storeCode?: {
                sender?: string;
                wasmByteCode?: Uint8Array;
                instantiatePermission?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                    address?: string;
                };
            };
            instantiateContract?: {
                sender?: string;
                admin?: string;
                codeId?: string;
                label?: string;
                msg?: Uint8Array;
                funds?: {
                    denom?: string;
                    amount?: string;
                }[];
            };
            executeContract?: {
                sender?: string;
                contract?: string;
                msg?: Uint8Array;
                funds?: {
                    denom?: string;
                    amount?: string;
                }[];
            };
        } & {
            storeCode?: {
                sender?: string;
                wasmByteCode?: Uint8Array;
                instantiatePermission?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                    address?: string;
                };
            } & {
                sender?: string;
                wasmByteCode?: Uint8Array;
                instantiatePermission?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                    address?: string;
                } & {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                    address?: string;
                } & Record<Exclude<keyof I["genMsgs"][number]["storeCode"]["instantiatePermission"], keyof import("../../../cosmwasm/wasm/v1/types").AccessConfig>, never>;
            } & Record<Exclude<keyof I["genMsgs"][number]["storeCode"], keyof MsgStoreCode>, never>;
            instantiateContract?: {
                sender?: string;
                admin?: string;
                codeId?: string;
                label?: string;
                msg?: Uint8Array;
                funds?: {
                    denom?: string;
                    amount?: string;
                }[];
            } & {
                sender?: string;
                admin?: string;
                codeId?: string;
                label?: string;
                msg?: Uint8Array;
                funds?: {
                    denom?: string;
                    amount?: string;
                }[] & ({
                    denom?: string;
                    amount?: string;
                } & {
                    denom?: string;
                    amount?: string;
                } & Record<Exclude<keyof I["genMsgs"][number]["instantiateContract"]["funds"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["genMsgs"][number]["instantiateContract"]["funds"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["genMsgs"][number]["instantiateContract"], keyof MsgInstantiateContract>, never>;
            executeContract?: {
                sender?: string;
                contract?: string;
                msg?: Uint8Array;
                funds?: {
                    denom?: string;
                    amount?: string;
                }[];
            } & {
                sender?: string;
                contract?: string;
                msg?: Uint8Array;
                funds?: {
                    denom?: string;
                    amount?: string;
                }[] & ({
                    denom?: string;
                    amount?: string;
                } & {
                    denom?: string;
                    amount?: string;
                } & Record<Exclude<keyof I["genMsgs"][number]["executeContract"]["funds"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["genMsgs"][number]["executeContract"]["funds"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["genMsgs"][number]["executeContract"], keyof MsgExecuteContract>, never>;
        } & Record<Exclude<keyof I["genMsgs"][number], keyof GenesisState_GenMsgs>, never>)[] & Record<Exclude<keyof I["genMsgs"], keyof {
            storeCode?: {
                sender?: string;
                wasmByteCode?: Uint8Array;
                instantiatePermission?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                    address?: string;
                };
            };
            instantiateContract?: {
                sender?: string;
                admin?: string;
                codeId?: string;
                label?: string;
                msg?: Uint8Array;
                funds?: {
                    denom?: string;
                    amount?: string;
                }[];
            };
            executeContract?: {
                sender?: string;
                contract?: string;
                msg?: Uint8Array;
                funds?: {
                    denom?: string;
                    amount?: string;
                }[];
            };
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const GenesisState_GenMsgs: {
    encode(message: GenesisState_GenMsgs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_GenMsgs;
    fromJSON(object: any): GenesisState_GenMsgs;
    toJSON(message: GenesisState_GenMsgs): unknown;
    fromPartial<I extends {
        storeCode?: {
            sender?: string;
            wasmByteCode?: Uint8Array;
            instantiatePermission?: {
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                address?: string;
            };
        };
        instantiateContract?: {
            sender?: string;
            admin?: string;
            codeId?: string;
            label?: string;
            msg?: Uint8Array;
            funds?: {
                denom?: string;
                amount?: string;
            }[];
        };
        executeContract?: {
            sender?: string;
            contract?: string;
            msg?: Uint8Array;
            funds?: {
                denom?: string;
                amount?: string;
            }[];
        };
    } & {
        storeCode?: {
            sender?: string;
            wasmByteCode?: Uint8Array;
            instantiatePermission?: {
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                address?: string;
            };
        } & {
            sender?: string;
            wasmByteCode?: Uint8Array;
            instantiatePermission?: {
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                address?: string;
            } & {
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                address?: string;
            } & Record<Exclude<keyof I["storeCode"]["instantiatePermission"], keyof import("../../../cosmwasm/wasm/v1/types").AccessConfig>, never>;
        } & Record<Exclude<keyof I["storeCode"], keyof MsgStoreCode>, never>;
        instantiateContract?: {
            sender?: string;
            admin?: string;
            codeId?: string;
            label?: string;
            msg?: Uint8Array;
            funds?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            sender?: string;
            admin?: string;
            codeId?: string;
            label?: string;
            msg?: Uint8Array;
            funds?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["instantiateContract"]["funds"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["instantiateContract"]["funds"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["instantiateContract"], keyof MsgInstantiateContract>, never>;
        executeContract?: {
            sender?: string;
            contract?: string;
            msg?: Uint8Array;
            funds?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            sender?: string;
            contract?: string;
            msg?: Uint8Array;
            funds?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["executeContract"]["funds"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["executeContract"]["funds"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["executeContract"], keyof MsgExecuteContract>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState_GenMsgs>, never>>(object: I): GenesisState_GenMsgs;
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
            creator?: string;
            instantiateConfig?: {
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                address?: string;
            };
        };
        codeBytes?: Uint8Array;
        pinned?: boolean;
    } & {
        codeId?: string;
        codeInfo?: {
            codeHash?: Uint8Array;
            creator?: string;
            instantiateConfig?: {
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                address?: string;
            };
        } & {
            codeHash?: Uint8Array;
            creator?: string;
            instantiateConfig?: {
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                address?: string;
            } & {
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
                address?: string;
            } & Record<Exclude<keyof I["codeInfo"]["instantiateConfig"], keyof import("../../../cosmwasm/wasm/v1/types").AccessConfig>, never>;
        } & Record<Exclude<keyof I["codeInfo"], keyof CodeInfo>, never>;
        codeBytes?: Uint8Array;
        pinned?: boolean;
    } & Record<Exclude<keyof I, keyof Code>, never>>(object: I): Code;
};
export declare const Contract: {
    encode(message: Contract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Contract;
    fromJSON(object: any): Contract;
    toJSON(message: Contract): unknown;
    fromPartial<I extends {
        contractAddress?: string;
        contractInfo?: {
            codeId?: string;
            creator?: string;
            admin?: string;
            label?: string;
            created?: {
                blockHeight?: string;
                txIndex?: string;
            };
            ibcPortId?: string;
            extension?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        };
        contractState?: {
            key?: Uint8Array;
            value?: Uint8Array;
        }[];
    } & {
        contractAddress?: string;
        contractInfo?: {
            codeId?: string;
            creator?: string;
            admin?: string;
            label?: string;
            created?: {
                blockHeight?: string;
                txIndex?: string;
            };
            ibcPortId?: string;
            extension?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            codeId?: string;
            creator?: string;
            admin?: string;
            label?: string;
            created?: {
                blockHeight?: string;
                txIndex?: string;
            } & {
                blockHeight?: string;
                txIndex?: string;
            } & Record<Exclude<keyof I["contractInfo"]["created"], keyof import("../../../cosmwasm/wasm/v1/types").AbsoluteTxPosition>, never>;
            ibcPortId?: string;
            extension?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["contractInfo"]["extension"], keyof import("../../../google/protobuf/any").Any>, never>;
        } & Record<Exclude<keyof I["contractInfo"], keyof ContractInfo>, never>;
        contractState?: {
            key?: Uint8Array;
            value?: Uint8Array;
        }[] & ({
            key?: Uint8Array;
            value?: Uint8Array;
        } & {
            key?: Uint8Array;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["contractState"][number], keyof Model>, never>)[] & Record<Exclude<keyof I["contractState"], keyof {
            key?: Uint8Array;
            value?: Uint8Array;
        }[]>, never>;
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
