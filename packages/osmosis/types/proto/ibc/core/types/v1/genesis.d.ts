import * as _m0 from "protobufjs/minimal";
import { GenesisState as GenesisState1 } from "../../../../ibc/core/client/v1/genesis";
import { GenesisState as GenesisState2 } from "../../../../ibc/core/connection/v1/genesis";
import { GenesisState as GenesisState3 } from "../../../../ibc/core/channel/v1/genesis";
/** GenesisState defines the ibc module's genesis state. */
export interface GenesisState {
    /** ICS002 - Clients genesis state */
    clientGenesis: GenesisState1;
    /** ICS003 - Connections genesis state */
    connectionGenesis: GenesisState2;
    /** ICS004 - Channel genesis state */
    channelGenesis: GenesisState3;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        clientGenesis?: {
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
        };
        connectionGenesis?: {
            connections?: {
                id?: string;
                clientId?: string;
                versions?: {
                    identifier?: string;
                    features?: string[];
                }[];
                state?: import("../../connection/v1/connection").State;
                counterparty?: {
                    clientId?: string;
                    connectionId?: string;
                    prefix?: {
                        keyPrefix?: Uint8Array;
                    };
                };
                delayPeriod?: string;
            }[];
            clientConnectionPaths?: {
                clientId?: string;
                paths?: string[];
            }[];
            nextConnectionSequence?: string;
            params?: {
                maxExpectedTimePerBlock?: string;
            };
        };
        channelGenesis?: {
            channels?: {
                state?: import("../../channel/v1/channel").State;
                ordering?: import("../../channel/v1/channel").Order;
                counterparty?: {
                    portId?: string;
                    channelId?: string;
                };
                connectionHops?: string[];
                version?: string;
                portId?: string;
                channelId?: string;
            }[];
            acknowledgements?: {
                portId?: string;
                channelId?: string;
                sequence?: string;
                data?: Uint8Array;
            }[];
            commitments?: {
                portId?: string;
                channelId?: string;
                sequence?: string;
                data?: Uint8Array;
            }[];
            receipts?: {
                portId?: string;
                channelId?: string;
                sequence?: string;
                data?: Uint8Array;
            }[];
            sendSequences?: {
                portId?: string;
                channelId?: string;
                sequence?: string;
            }[];
            recvSequences?: {
                portId?: string;
                channelId?: string;
                sequence?: string;
            }[];
            ackSequences?: {
                portId?: string;
                channelId?: string;
                sequence?: string;
            }[];
            nextChannelSequence?: string;
        };
    } & {
        clientGenesis?: {
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
                } & Record<Exclude<keyof I["clientGenesis"]["clients"][number]["clientState"], keyof import("../../../../google/protobuf/any").Any>, never>;
            } & Record<Exclude<keyof I["clientGenesis"]["clients"][number], keyof import("../../client/v1/client").IdentifiedClientState>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clients"], keyof {
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
                    } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["height"], keyof import("../../client/v1/client").Height>, never>;
                    consensusState?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["consensusState"], keyof import("../../../../google/protobuf/any").Any>, never>;
                } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number], keyof import("../../client/v1/client").ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"], keyof {
                    height?: {
                        revisionNumber?: string;
                        revisionHeight?: string;
                    };
                    consensusState?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[]>, never>;
            } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number], keyof import("../../client/v1/client").ClientConsensusStates>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"], keyof {
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
                } & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number]["clientMetadata"][number], keyof import("../../../../ibc/core/client/v1/genesis").GenesisMetadata>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number]["clientMetadata"], keyof {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number], keyof import("../../../../ibc/core/client/v1/genesis").IdentifiedGenesisMetadata>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"], keyof {
                clientId?: string;
                clientMetadata?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }[];
            }[]>, never>;
            params?: {
                allowedClients?: string[];
            } & {
                allowedClients?: string[] & string[] & Record<Exclude<keyof I["clientGenesis"]["params"]["allowedClients"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["clientGenesis"]["params"], "allowedClients">, never>;
            createLocalhost?: boolean;
            nextClientSequence?: string;
        } & Record<Exclude<keyof I["clientGenesis"], keyof GenesisState1>, never>;
        connectionGenesis?: {
            connections?: {
                id?: string;
                clientId?: string;
                versions?: {
                    identifier?: string;
                    features?: string[];
                }[];
                state?: import("../../connection/v1/connection").State;
                counterparty?: {
                    clientId?: string;
                    connectionId?: string;
                    prefix?: {
                        keyPrefix?: Uint8Array;
                    };
                };
                delayPeriod?: string;
            }[];
            clientConnectionPaths?: {
                clientId?: string;
                paths?: string[];
            }[];
            nextConnectionSequence?: string;
            params?: {
                maxExpectedTimePerBlock?: string;
            };
        } & {
            connections?: {
                id?: string;
                clientId?: string;
                versions?: {
                    identifier?: string;
                    features?: string[];
                }[];
                state?: import("../../connection/v1/connection").State;
                counterparty?: {
                    clientId?: string;
                    connectionId?: string;
                    prefix?: {
                        keyPrefix?: Uint8Array;
                    };
                };
                delayPeriod?: string;
            }[] & ({
                id?: string;
                clientId?: string;
                versions?: {
                    identifier?: string;
                    features?: string[];
                }[];
                state?: import("../../connection/v1/connection").State;
                counterparty?: {
                    clientId?: string;
                    connectionId?: string;
                    prefix?: {
                        keyPrefix?: Uint8Array;
                    };
                };
                delayPeriod?: string;
            } & {
                id?: string;
                clientId?: string;
                versions?: {
                    identifier?: string;
                    features?: string[];
                }[] & ({
                    identifier?: string;
                    features?: string[];
                } & {
                    identifier?: string;
                    features?: string[] & string[] & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"][number]["features"], keyof string[]>, never>;
                } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"][number], keyof import("../../connection/v1/connection").Version>, never>)[] & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"], keyof {
                    identifier?: string;
                    features?: string[];
                }[]>, never>;
                state?: import("../../connection/v1/connection").State;
                counterparty?: {
                    clientId?: string;
                    connectionId?: string;
                    prefix?: {
                        keyPrefix?: Uint8Array;
                    };
                } & {
                    clientId?: string;
                    connectionId?: string;
                    prefix?: {
                        keyPrefix?: Uint8Array;
                    } & {
                        keyPrefix?: Uint8Array;
                    } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["counterparty"]["prefix"], "keyPrefix">, never>;
                } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["counterparty"], keyof import("../../connection/v1/connection").Counterparty>, never>;
                delayPeriod?: string;
            } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number], keyof import("../../connection/v1/connection").IdentifiedConnection>, never>)[] & Record<Exclude<keyof I["connectionGenesis"]["connections"], keyof {
                id?: string;
                clientId?: string;
                versions?: {
                    identifier?: string;
                    features?: string[];
                }[];
                state?: import("../../connection/v1/connection").State;
                counterparty?: {
                    clientId?: string;
                    connectionId?: string;
                    prefix?: {
                        keyPrefix?: Uint8Array;
                    };
                };
                delayPeriod?: string;
            }[]>, never>;
            clientConnectionPaths?: {
                clientId?: string;
                paths?: string[];
            }[] & ({
                clientId?: string;
                paths?: string[];
            } & {
                clientId?: string;
                paths?: string[] & string[] & Record<Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"][number]["paths"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"][number], keyof import("../../connection/v1/connection").ConnectionPaths>, never>)[] & Record<Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"], keyof {
                clientId?: string;
                paths?: string[];
            }[]>, never>;
            nextConnectionSequence?: string;
            params?: {
                maxExpectedTimePerBlock?: string;
            } & {
                maxExpectedTimePerBlock?: string;
            } & Record<Exclude<keyof I["connectionGenesis"]["params"], "maxExpectedTimePerBlock">, never>;
        } & Record<Exclude<keyof I["connectionGenesis"], keyof GenesisState2>, never>;
        channelGenesis?: {
            channels?: {
                state?: import("../../channel/v1/channel").State;
                ordering?: import("../../channel/v1/channel").Order;
                counterparty?: {
                    portId?: string;
                    channelId?: string;
                };
                connectionHops?: string[];
                version?: string;
                portId?: string;
                channelId?: string;
            }[];
            acknowledgements?: {
                portId?: string;
                channelId?: string;
                sequence?: string;
                data?: Uint8Array;
            }[];
            commitments?: {
                portId?: string;
                channelId?: string;
                sequence?: string;
                data?: Uint8Array;
            }[];
            receipts?: {
                portId?: string;
                channelId?: string;
                sequence?: string;
                data?: Uint8Array;
            }[];
            sendSequences?: {
                portId?: string;
                channelId?: string;
                sequence?: string;
            }[];
            recvSequences?: {
                portId?: string;
                channelId?: string;
                sequence?: string;
            }[];
            ackSequences?: {
                portId?: string;
                channelId?: string;
                sequence?: string;
            }[];
            nextChannelSequence?: string;
        } & {
            channels?: {
                state?: import("../../channel/v1/channel").State;
                ordering?: import("../../channel/v1/channel").Order;
                counterparty?: {
                    portId?: string;
                    channelId?: string;
                };
                connectionHops?: string[];
                version?: string;
                portId?: string;
                channelId?: string;
            }[] & ({
                state?: import("../../channel/v1/channel").State;
                ordering?: import("../../channel/v1/channel").Order;
                counterparty?: {
                    portId?: string;
                    channelId?: string;
                };
                connectionHops?: string[];
                version?: string;
                portId?: string;
                channelId?: string;
            } & {
                state?: import("../../channel/v1/channel").State;
                ordering?: import("../../channel/v1/channel").Order;
                counterparty?: {
                    portId?: string;
                    channelId?: string;
                } & {
                    portId?: string;
                    channelId?: string;
                } & Record<Exclude<keyof I["channelGenesis"]["channels"][number]["counterparty"], keyof import("../../channel/v1/channel").Counterparty>, never>;
                connectionHops?: string[] & string[] & Record<Exclude<keyof I["channelGenesis"]["channels"][number]["connectionHops"], keyof string[]>, never>;
                version?: string;
                portId?: string;
                channelId?: string;
            } & Record<Exclude<keyof I["channelGenesis"]["channels"][number], keyof import("../../channel/v1/channel").IdentifiedChannel>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["channels"], keyof {
                state?: import("../../channel/v1/channel").State;
                ordering?: import("../../channel/v1/channel").Order;
                counterparty?: {
                    portId?: string;
                    channelId?: string;
                };
                connectionHops?: string[];
                version?: string;
                portId?: string;
                channelId?: string;
            }[]>, never>;
            acknowledgements?: {
                portId?: string;
                channelId?: string;
                sequence?: string;
                data?: Uint8Array;
            }[] & ({
                portId?: string;
                channelId?: string;
                sequence?: string;
                data?: Uint8Array;
            } & {
                portId?: string;
                channelId?: string;
                sequence?: string;
                data?: Uint8Array;
            } & Record<Exclude<keyof I["channelGenesis"]["acknowledgements"][number], keyof import("../../channel/v1/channel").PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["acknowledgements"], keyof {
                portId?: string;
                channelId?: string;
                sequence?: string;
                data?: Uint8Array;
            }[]>, never>;
            commitments?: {
                portId?: string;
                channelId?: string;
                sequence?: string;
                data?: Uint8Array;
            }[] & ({
                portId?: string;
                channelId?: string;
                sequence?: string;
                data?: Uint8Array;
            } & {
                portId?: string;
                channelId?: string;
                sequence?: string;
                data?: Uint8Array;
            } & Record<Exclude<keyof I["channelGenesis"]["commitments"][number], keyof import("../../channel/v1/channel").PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["commitments"], keyof {
                portId?: string;
                channelId?: string;
                sequence?: string;
                data?: Uint8Array;
            }[]>, never>;
            receipts?: {
                portId?: string;
                channelId?: string;
                sequence?: string;
                data?: Uint8Array;
            }[] & ({
                portId?: string;
                channelId?: string;
                sequence?: string;
                data?: Uint8Array;
            } & {
                portId?: string;
                channelId?: string;
                sequence?: string;
                data?: Uint8Array;
            } & Record<Exclude<keyof I["channelGenesis"]["receipts"][number], keyof import("../../channel/v1/channel").PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["receipts"], keyof {
                portId?: string;
                channelId?: string;
                sequence?: string;
                data?: Uint8Array;
            }[]>, never>;
            sendSequences?: {
                portId?: string;
                channelId?: string;
                sequence?: string;
            }[] & ({
                portId?: string;
                channelId?: string;
                sequence?: string;
            } & {
                portId?: string;
                channelId?: string;
                sequence?: string;
            } & Record<Exclude<keyof I["channelGenesis"]["sendSequences"][number], keyof import("../../../../ibc/core/channel/v1/genesis").PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["sendSequences"], keyof {
                portId?: string;
                channelId?: string;
                sequence?: string;
            }[]>, never>;
            recvSequences?: {
                portId?: string;
                channelId?: string;
                sequence?: string;
            }[] & ({
                portId?: string;
                channelId?: string;
                sequence?: string;
            } & {
                portId?: string;
                channelId?: string;
                sequence?: string;
            } & Record<Exclude<keyof I["channelGenesis"]["recvSequences"][number], keyof import("../../../../ibc/core/channel/v1/genesis").PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["recvSequences"], keyof {
                portId?: string;
                channelId?: string;
                sequence?: string;
            }[]>, never>;
            ackSequences?: {
                portId?: string;
                channelId?: string;
                sequence?: string;
            }[] & ({
                portId?: string;
                channelId?: string;
                sequence?: string;
            } & {
                portId?: string;
                channelId?: string;
                sequence?: string;
            } & Record<Exclude<keyof I["channelGenesis"]["ackSequences"][number], keyof import("../../../../ibc/core/channel/v1/genesis").PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["ackSequences"], keyof {
                portId?: string;
                channelId?: string;
                sequence?: string;
            }[]>, never>;
            nextChannelSequence?: string;
        } & Record<Exclude<keyof I["channelGenesis"], keyof GenesisState3>, never>;
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
