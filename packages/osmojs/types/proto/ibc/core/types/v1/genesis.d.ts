import { GenesisState as GenesisState1 } from "../../client/v1/genesis";
import { GenesisState as GenesisState2 } from "../../connection/v1/genesis";
import { GenesisState as GenesisState3 } from "../../channel/v1/genesis";
import * as _m0 from "protobufjs/minimal";
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
                        revisionNumber?: any;
                        revisionHeight?: any;
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
            nextClientSequence?: any;
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
                delayPeriod?: any;
            }[];
            clientConnectionPaths?: {
                clientId?: string;
                paths?: string[];
            }[];
            nextConnectionSequence?: any;
            params?: {
                maxExpectedTimePerBlock?: any;
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
                sequence?: any;
                data?: Uint8Array;
            }[];
            commitments?: {
                portId?: string;
                channelId?: string;
                sequence?: any;
                data?: Uint8Array;
            }[];
            receipts?: {
                portId?: string;
                channelId?: string;
                sequence?: any;
                data?: Uint8Array;
            }[];
            sendSequences?: {
                portId?: string;
                channelId?: string;
                sequence?: any;
            }[];
            recvSequences?: {
                portId?: string;
                channelId?: string;
                sequence?: any;
            }[];
            ackSequences?: {
                portId?: string;
                channelId?: string;
                sequence?: any;
            }[];
            nextChannelSequence?: any;
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
                        revisionNumber?: any;
                        revisionHeight?: any;
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
            nextClientSequence?: any;
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
                        revisionNumber?: any;
                        revisionHeight?: any;
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
                        revisionNumber?: any;
                        revisionHeight?: any;
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
                        revisionNumber?: any;
                        revisionHeight?: any;
                    };
                    consensusState?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[] & ({
                    height?: {
                        revisionNumber?: any;
                        revisionHeight?: any;
                    };
                    consensusState?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                } & {
                    height?: {
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & {
                        revisionNumber?: any;
                        revisionHeight?: any;
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
                        revisionNumber?: any;
                        revisionHeight?: any;
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
                        revisionNumber?: any;
                        revisionHeight?: any;
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
                } & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number]["clientMetadata"][number], keyof import("../../client/v1/genesis").GenesisMetadata>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number]["clientMetadata"], keyof {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number], keyof import("../../client/v1/genesis").IdentifiedGenesisMetadata>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"], keyof {
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
            nextClientSequence?: any;
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
                delayPeriod?: any;
            }[];
            clientConnectionPaths?: {
                clientId?: string;
                paths?: string[];
            }[];
            nextConnectionSequence?: any;
            params?: {
                maxExpectedTimePerBlock?: any;
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
                delayPeriod?: any;
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
                delayPeriod?: any;
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
                delayPeriod?: any;
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
                delayPeriod?: any;
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
            nextConnectionSequence?: any;
            params?: {
                maxExpectedTimePerBlock?: any;
            } & {
                maxExpectedTimePerBlock?: any;
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
                sequence?: any;
                data?: Uint8Array;
            }[];
            commitments?: {
                portId?: string;
                channelId?: string;
                sequence?: any;
                data?: Uint8Array;
            }[];
            receipts?: {
                portId?: string;
                channelId?: string;
                sequence?: any;
                data?: Uint8Array;
            }[];
            sendSequences?: {
                portId?: string;
                channelId?: string;
                sequence?: any;
            }[];
            recvSequences?: {
                portId?: string;
                channelId?: string;
                sequence?: any;
            }[];
            ackSequences?: {
                portId?: string;
                channelId?: string;
                sequence?: any;
            }[];
            nextChannelSequence?: any;
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
                sequence?: any;
                data?: Uint8Array;
            }[] & ({
                portId?: string;
                channelId?: string;
                sequence?: any;
                data?: Uint8Array;
            } & {
                portId?: string;
                channelId?: string;
                sequence?: any;
                data?: Uint8Array;
            } & Record<Exclude<keyof I["channelGenesis"]["acknowledgements"][number], keyof import("../../channel/v1/channel").PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["acknowledgements"], keyof {
                portId?: string;
                channelId?: string;
                sequence?: any;
                data?: Uint8Array;
            }[]>, never>;
            commitments?: {
                portId?: string;
                channelId?: string;
                sequence?: any;
                data?: Uint8Array;
            }[] & ({
                portId?: string;
                channelId?: string;
                sequence?: any;
                data?: Uint8Array;
            } & {
                portId?: string;
                channelId?: string;
                sequence?: any;
                data?: Uint8Array;
            } & Record<Exclude<keyof I["channelGenesis"]["commitments"][number], keyof import("../../channel/v1/channel").PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["commitments"], keyof {
                portId?: string;
                channelId?: string;
                sequence?: any;
                data?: Uint8Array;
            }[]>, never>;
            receipts?: {
                portId?: string;
                channelId?: string;
                sequence?: any;
                data?: Uint8Array;
            }[] & ({
                portId?: string;
                channelId?: string;
                sequence?: any;
                data?: Uint8Array;
            } & {
                portId?: string;
                channelId?: string;
                sequence?: any;
                data?: Uint8Array;
            } & Record<Exclude<keyof I["channelGenesis"]["receipts"][number], keyof import("../../channel/v1/channel").PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["receipts"], keyof {
                portId?: string;
                channelId?: string;
                sequence?: any;
                data?: Uint8Array;
            }[]>, never>;
            sendSequences?: {
                portId?: string;
                channelId?: string;
                sequence?: any;
            }[] & ({
                portId?: string;
                channelId?: string;
                sequence?: any;
            } & {
                portId?: string;
                channelId?: string;
                sequence?: any;
            } & Record<Exclude<keyof I["channelGenesis"]["sendSequences"][number], keyof import("../../channel/v1/genesis").PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["sendSequences"], keyof {
                portId?: string;
                channelId?: string;
                sequence?: any;
            }[]>, never>;
            recvSequences?: {
                portId?: string;
                channelId?: string;
                sequence?: any;
            }[] & ({
                portId?: string;
                channelId?: string;
                sequence?: any;
            } & {
                portId?: string;
                channelId?: string;
                sequence?: any;
            } & Record<Exclude<keyof I["channelGenesis"]["recvSequences"][number], keyof import("../../channel/v1/genesis").PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["recvSequences"], keyof {
                portId?: string;
                channelId?: string;
                sequence?: any;
            }[]>, never>;
            ackSequences?: {
                portId?: string;
                channelId?: string;
                sequence?: any;
            }[] & ({
                portId?: string;
                channelId?: string;
                sequence?: any;
            } & {
                portId?: string;
                channelId?: string;
                sequence?: any;
            } & Record<Exclude<keyof I["channelGenesis"]["ackSequences"][number], keyof import("../../channel/v1/genesis").PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["ackSequences"], keyof {
                portId?: string;
                channelId?: string;
                sequence?: any;
            }[]>, never>;
            nextChannelSequence?: any;
        } & Record<Exclude<keyof I["channelGenesis"], keyof GenesisState3>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
