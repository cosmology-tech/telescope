import * as _m0 from "protobufjs/minimal";
import { Params, IdentifiedClientState, ClientConsensusStates } from "../../../../ibc/core/client/v1/client";
/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisState {
    /** client states with their corresponding identifiers */
    clients: IdentifiedClientState[];
    /** consensus states from each client */
    clientsConsensus: ClientConsensusStates[];
    /** metadata from each client */
    clientsMetadata: IdentifiedGenesisMetadata[];
    params: Params;
    /** create localhost on initialization */
    createLocalhost: boolean;
    /** the sequence for the next generated client identifier */
    nextClientSequence: string;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadata {
    /** store key of metadata without clientID-prefix */
    key: Uint8Array;
    /** metadata value */
    value: Uint8Array;
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadata {
    clientId: string;
    clientMetadata: GenesisMetadata[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        clients?: {
            clientId?: string;
            clientState?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
        clientsConsensus?: {
            clientId?: string;
            consensusStates?: {
                height?: {
                    revisionNumber?: string;
                    revisionHeight?: string;
                };
                consensusState?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
        }[];
        clientsMetadata?: {
            clientId?: string;
            clientMetadata?: {
                key?: Uint8Array;
                value?: Uint8Array;
            }[];
        }[];
        params?: {
            allowedClients?: string[];
        };
        createLocalhost?: boolean;
        nextClientSequence?: string;
    } & {
        clients?: {
            clientId?: string;
            clientState?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[] & ({
            clientId?: string;
            clientState?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            clientId?: string;
            clientState?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["clients"][number]["clientState"], keyof import("../../../../google/protobuf/any").Any>, never>;
        } & Record<Exclude<keyof I["clients"][number], keyof IdentifiedClientState>, never>)[] & Record<Exclude<keyof I["clients"], keyof {
            clientId?: string;
            clientState?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>, never>;
        clientsConsensus?: {
            clientId?: string;
            consensusStates?: {
                height?: {
                    revisionNumber?: string;
                    revisionHeight?: string;
                };
                consensusState?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
        }[] & ({
            clientId?: string;
            consensusStates?: {
                height?: {
                    revisionNumber?: string;
                    revisionHeight?: string;
                };
                consensusState?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
        } & {
            clientId?: string;
            consensusStates?: {
                height?: {
                    revisionNumber?: string;
                    revisionHeight?: string;
                };
                consensusState?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[] & ({
                height?: {
                    revisionNumber?: string;
                    revisionHeight?: string;
                };
                consensusState?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            } & {
                height?: {
                    revisionNumber?: string;
                    revisionHeight?: string;
                } & {
                    revisionNumber?: string;
                    revisionHeight?: string;
                } & Record<Exclude<keyof I["clientsConsensus"][number]["consensusStates"][number]["height"], keyof import("../../../../ibc/core/client/v1/client").Height>, never>;
                consensusState?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["clientsConsensus"][number]["consensusStates"][number]["consensusState"], keyof import("../../../../google/protobuf/any").Any>, never>;
            } & Record<Exclude<keyof I["clientsConsensus"][number]["consensusStates"][number], keyof import("../../../../ibc/core/client/v1/client").ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I["clientsConsensus"][number]["consensusStates"], keyof {
                height?: {
                    revisionNumber?: string;
                    revisionHeight?: string;
                };
                consensusState?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[]>, never>;
        } & Record<Exclude<keyof I["clientsConsensus"][number], keyof ClientConsensusStates>, never>)[] & Record<Exclude<keyof I["clientsConsensus"], keyof {
            clientId?: string;
            consensusStates?: {
                height?: {
                    revisionNumber?: string;
                    revisionHeight?: string;
                };
                consensusState?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
        }[]>, never>;
        clientsMetadata?: {
            clientId?: string;
            clientMetadata?: {
                key?: Uint8Array;
                value?: Uint8Array;
            }[];
        }[] & ({
            clientId?: string;
            clientMetadata?: {
                key?: Uint8Array;
                value?: Uint8Array;
            }[];
        } & {
            clientId?: string;
            clientMetadata?: {
                key?: Uint8Array;
                value?: Uint8Array;
            }[] & ({
                key?: Uint8Array;
                value?: Uint8Array;
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["clientsMetadata"][number]["clientMetadata"][number], keyof GenesisMetadata>, never>)[] & Record<Exclude<keyof I["clientsMetadata"][number]["clientMetadata"], keyof {
                key?: Uint8Array;
                value?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["clientsMetadata"][number], keyof IdentifiedGenesisMetadata>, never>)[] & Record<Exclude<keyof I["clientsMetadata"], keyof {
            clientId?: string;
            clientMetadata?: {
                key?: Uint8Array;
                value?: Uint8Array;
            }[];
        }[]>, never>;
        params?: {
            allowedClients?: string[];
        } & {
            allowedClients?: string[] & string[] & Record<Exclude<keyof I["params"]["allowedClients"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["params"], "allowedClients">, never>;
        createLocalhost?: boolean;
        nextClientSequence?: string;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const GenesisMetadata: {
    encode(message: GenesisMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisMetadata;
    fromJSON(object: any): GenesisMetadata;
    toJSON(message: GenesisMetadata): unknown;
    fromPartial<I extends {
        key?: Uint8Array;
        value?: Uint8Array;
    } & {
        key?: Uint8Array;
        value?: Uint8Array;
    } & Record<Exclude<keyof I, keyof GenesisMetadata>, never>>(object: I): GenesisMetadata;
};
export declare const IdentifiedGenesisMetadata: {
    encode(message: IdentifiedGenesisMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedGenesisMetadata;
    fromJSON(object: any): IdentifiedGenesisMetadata;
    toJSON(message: IdentifiedGenesisMetadata): unknown;
    fromPartial<I extends {
        clientId?: string;
        clientMetadata?: {
            key?: Uint8Array;
            value?: Uint8Array;
        }[];
    } & {
        clientId?: string;
        clientMetadata?: {
            key?: Uint8Array;
            value?: Uint8Array;
        }[] & ({
            key?: Uint8Array;
            value?: Uint8Array;
        } & {
            key?: Uint8Array;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["clientMetadata"][number], keyof GenesisMetadata>, never>)[] & Record<Exclude<keyof I["clientMetadata"], keyof {
            key?: Uint8Array;
            value?: Uint8Array;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof IdentifiedGenesisMetadata>, never>>(object: I): IdentifiedGenesisMetadata;
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
