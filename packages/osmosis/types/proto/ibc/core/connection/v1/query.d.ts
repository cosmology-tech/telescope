import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, IdentifiedConnection } from "./connection";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import { Any } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequest {
    /** connection unique identifier */
    connectionId: string;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponse {
    /** connection associated with the request identifier */
    connection: ConnectionEnd;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequest {
    pagination: PageRequest;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponse {
    /** list of stored connections of the chain. */
    connections: IdentifiedConnection[];
    /** pagination response */
    pagination: PageResponse;
    /** query block height */
    height: Height;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequest {
    /** client identifier associated with a connection */
    clientId: string;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponse {
    /** slice of all the connection paths associated with a client. */
    connectionPaths: string[];
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was generated */
    proofHeight: Height;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequest {
    /** connection identifier */
    connectionId: string;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponse {
    /** client state associated with the channel */
    identifiedClientState: IdentifiedClientState;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequest {
    /** connection identifier */
    connectionId: string;
    revisionNumber: Long;
    revisionHeight: Long;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponse {
    /** consensus state associated with the channel */
    consensusState: Any;
    /** client ID associated with the consensus state */
    clientId: string;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height;
}
export declare const QueryConnectionRequest: {
    encode(message: QueryConnectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionRequest;
    fromJSON(object: any): QueryConnectionRequest;
    toJSON(message: QueryConnectionRequest): unknown;
    fromPartial<I extends {
        connectionId?: string;
    } & {
        connectionId?: string;
    } & Record<Exclude<keyof I, "connectionId">, never>>(object: I): QueryConnectionRequest;
};
export declare const QueryConnectionResponse: {
    encode(message: QueryConnectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionResponse;
    fromJSON(object: any): QueryConnectionResponse;
    toJSON(message: QueryConnectionResponse): unknown;
    fromPartial<I extends {
        connection?: {
            clientId?: string;
            versions?: {
                identifier?: string;
                features?: string[];
            }[];
            state?: import("./connection").State;
            counterparty?: {
                clientId?: string;
                connectionId?: string;
                prefix?: {
                    keyPrefix?: Uint8Array;
                };
            };
            delayPeriod?: any;
        };
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
    } & {
        connection?: {
            clientId?: string;
            versions?: {
                identifier?: string;
                features?: string[];
            }[];
            state?: import("./connection").State;
            counterparty?: {
                clientId?: string;
                connectionId?: string;
                prefix?: {
                    keyPrefix?: Uint8Array;
                };
            };
            delayPeriod?: any;
        } & {
            clientId?: string;
            versions?: {
                identifier?: string;
                features?: string[];
            }[] & ({
                identifier?: string;
                features?: string[];
            } & {
                identifier?: string;
                features?: string[] & string[] & Record<Exclude<keyof I["connection"]["versions"][number]["features"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["connection"]["versions"][number], keyof import("./connection").Version>, never>)[] & Record<Exclude<keyof I["connection"]["versions"], keyof {
                identifier?: string;
                features?: string[];
            }[]>, never>;
            state?: import("./connection").State;
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
                } & Record<Exclude<keyof I["connection"]["counterparty"]["prefix"], "keyPrefix">, never>;
            } & Record<Exclude<keyof I["connection"]["counterparty"], keyof import("./connection").Counterparty>, never>;
            delayPeriod?: any;
        } & Record<Exclude<keyof I["connection"], keyof ConnectionEnd>, never>;
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["proofHeight"], keyof Height>, never>;
    } & Record<Exclude<keyof I, keyof QueryConnectionResponse>, never>>(object: I): QueryConnectionResponse;
};
export declare const QueryConnectionsRequest: {
    encode(message: QueryConnectionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionsRequest;
    fromJSON(object: any): QueryConnectionsRequest;
    toJSON(message: QueryConnectionsRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryConnectionsRequest;
};
export declare const QueryConnectionsResponse: {
    encode(message: QueryConnectionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionsResponse;
    fromJSON(object: any): QueryConnectionsResponse;
    toJSON(message: QueryConnectionsResponse): unknown;
    fromPartial<I extends {
        connections?: {
            id?: string;
            clientId?: string;
            versions?: {
                identifier?: string;
                features?: string[];
            }[];
            state?: import("./connection").State;
            counterparty?: {
                clientId?: string;
                connectionId?: string;
                prefix?: {
                    keyPrefix?: Uint8Array;
                };
            };
            delayPeriod?: any;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
        height?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
    } & {
        connections?: {
            id?: string;
            clientId?: string;
            versions?: {
                identifier?: string;
                features?: string[];
            }[];
            state?: import("./connection").State;
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
            state?: import("./connection").State;
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
                features?: string[] & string[] & Record<Exclude<keyof I["connections"][number]["versions"][number]["features"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["connections"][number]["versions"][number], keyof import("./connection").Version>, never>)[] & Record<Exclude<keyof I["connections"][number]["versions"], keyof {
                identifier?: string;
                features?: string[];
            }[]>, never>;
            state?: import("./connection").State;
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
                } & Record<Exclude<keyof I["connections"][number]["counterparty"]["prefix"], "keyPrefix">, never>;
            } & Record<Exclude<keyof I["connections"][number]["counterparty"], keyof import("./connection").Counterparty>, never>;
            delayPeriod?: any;
        } & Record<Exclude<keyof I["connections"][number], keyof IdentifiedConnection>, never>)[] & Record<Exclude<keyof I["connections"], keyof {
            id?: string;
            clientId?: string;
            versions?: {
                identifier?: string;
                features?: string[];
            }[];
            state?: import("./connection").State;
            counterparty?: {
                clientId?: string;
                connectionId?: string;
                prefix?: {
                    keyPrefix?: Uint8Array;
                };
            };
            delayPeriod?: any;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
        height?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["height"], keyof Height>, never>;
    } & Record<Exclude<keyof I, keyof QueryConnectionsResponse>, never>>(object: I): QueryConnectionsResponse;
};
export declare const QueryClientConnectionsRequest: {
    encode(message: QueryClientConnectionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientConnectionsRequest;
    fromJSON(object: any): QueryClientConnectionsRequest;
    toJSON(message: QueryClientConnectionsRequest): unknown;
    fromPartial<I extends {
        clientId?: string;
    } & {
        clientId?: string;
    } & Record<Exclude<keyof I, "clientId">, never>>(object: I): QueryClientConnectionsRequest;
};
export declare const QueryClientConnectionsResponse: {
    encode(message: QueryClientConnectionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientConnectionsResponse;
    fromJSON(object: any): QueryClientConnectionsResponse;
    toJSON(message: QueryClientConnectionsResponse): unknown;
    fromPartial<I extends {
        connectionPaths?: string[];
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
    } & {
        connectionPaths?: string[] & string[] & Record<Exclude<keyof I["connectionPaths"], keyof string[]>, never>;
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["proofHeight"], keyof Height>, never>;
    } & Record<Exclude<keyof I, keyof QueryClientConnectionsResponse>, never>>(object: I): QueryClientConnectionsResponse;
};
export declare const QueryConnectionClientStateRequest: {
    encode(message: QueryConnectionClientStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionClientStateRequest;
    fromJSON(object: any): QueryConnectionClientStateRequest;
    toJSON(message: QueryConnectionClientStateRequest): unknown;
    fromPartial<I extends {
        connectionId?: string;
    } & {
        connectionId?: string;
    } & Record<Exclude<keyof I, "connectionId">, never>>(object: I): QueryConnectionClientStateRequest;
};
export declare const QueryConnectionClientStateResponse: {
    encode(message: QueryConnectionClientStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionClientStateResponse;
    fromJSON(object: any): QueryConnectionClientStateResponse;
    toJSON(message: QueryConnectionClientStateResponse): unknown;
    fromPartial<I extends {
        identifiedClientState?: {
            clientId?: string;
            clientState?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        };
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
    } & {
        identifiedClientState?: {
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
            } & Record<Exclude<keyof I["identifiedClientState"]["clientState"], keyof Any>, never>;
        } & Record<Exclude<keyof I["identifiedClientState"], keyof IdentifiedClientState>, never>;
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["proofHeight"], keyof Height>, never>;
    } & Record<Exclude<keyof I, keyof QueryConnectionClientStateResponse>, never>>(object: I): QueryConnectionClientStateResponse;
};
export declare const QueryConnectionConsensusStateRequest: {
    encode(message: QueryConnectionConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionConsensusStateRequest;
    fromJSON(object: any): QueryConnectionConsensusStateRequest;
    toJSON(message: QueryConnectionConsensusStateRequest): unknown;
    fromPartial<I extends {
        connectionId?: string;
        revisionNumber?: any;
        revisionHeight?: any;
    } & {
        connectionId?: string;
        revisionNumber?: any;
        revisionHeight?: any;
    } & Record<Exclude<keyof I, keyof QueryConnectionConsensusStateRequest>, never>>(object: I): QueryConnectionConsensusStateRequest;
};
export declare const QueryConnectionConsensusStateResponse: {
    encode(message: QueryConnectionConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionConsensusStateResponse;
    fromJSON(object: any): QueryConnectionConsensusStateResponse;
    toJSON(message: QueryConnectionConsensusStateResponse): unknown;
    fromPartial<I extends {
        consensusState?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        clientId?: string;
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
    } & {
        consensusState?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["consensusState"], keyof Any>, never>;
        clientId?: string;
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["proofHeight"], keyof Height>, never>;
    } & Record<Exclude<keyof I, keyof QueryConnectionConsensusStateResponse>, never>>(object: I): QueryConnectionConsensusStateResponse;
};
