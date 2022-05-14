import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { Height, IdentifiedClientState, ConsensusStateWithHeight, Params } from "./client";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */
export interface QueryClientStateRequest {
    /** client state unique identifier */
    clientId: string;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryClientStateResponse {
    /** client state associated with the request identifier */
    clientState: Any;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */
export interface QueryClientStatesRequest {
    /** pagination request */
    pagination: PageRequest;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface QueryClientStatesResponse {
    /** list of stored ClientStates of the chain. */
    clientStates: IdentifiedClientState[];
    /** pagination response */
    pagination: PageResponse;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */
export interface QueryConsensusStateRequest {
    /** client identifier */
    clientId: string;
    /** consensus state revision number */
    revisionNumber: Long;
    /** consensus state revision height */
    revisionHeight: Long;
    /**
     * latest_height overrrides the height field and queries the latest stored
     * ConsensusState
     */
    latestHeight: boolean;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface QueryConsensusStateResponse {
    /** consensus state associated with the client identifier at the given height */
    consensusState: Any;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */
export interface QueryConsensusStatesRequest {
    /** client identifier */
    clientId: string;
    /** pagination request */
    pagination: PageRequest;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface QueryConsensusStatesResponse {
    /** consensus states associated with the identifier */
    consensusStates: ConsensusStateWithHeight[];
    /** pagination response */
    pagination: PageResponse;
}
/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 */
export interface QueryClientStatusRequest {
    /** client unique identifier */
    clientId: string;
}
/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 */
export interface QueryClientStatusResponse {
    status: string;
}
/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsRequest {
}
/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 */
export interface QueryUpgradedClientStateRequest {
}
/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 */
export interface QueryUpgradedClientStateResponse {
    /** client state associated with the request identifier */
    upgradedClientState: Any;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 */
export interface QueryUpgradedConsensusStateRequest {
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 */
export interface QueryUpgradedConsensusStateResponse {
    /** Consensus state associated with the request identifier */
    upgradedConsensusState: Any;
}
export declare const QueryClientStateRequest: {
    encode(message: QueryClientStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStateRequest;
    fromJSON(object: any): QueryClientStateRequest;
    toJSON(message: QueryClientStateRequest): unknown;
    fromPartial<I extends {
        clientId?: string;
    } & {
        clientId?: string;
    } & Record<Exclude<keyof I, "clientId">, never>>(object: I): QueryClientStateRequest;
};
export declare const QueryClientStateResponse: {
    encode(message: QueryClientStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStateResponse;
    fromJSON(object: any): QueryClientStateResponse;
    toJSON(message: QueryClientStateResponse): unknown;
    fromPartial<I extends {
        clientState?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
    } & {
        clientState?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["clientState"], keyof Any>, never>;
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["proofHeight"], keyof Height>, never>;
    } & Record<Exclude<keyof I, keyof QueryClientStateResponse>, never>>(object: I): QueryClientStateResponse;
};
export declare const QueryClientStatesRequest: {
    encode(message: QueryClientStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatesRequest;
    fromJSON(object: any): QueryClientStatesRequest;
    toJSON(message: QueryClientStatesRequest): unknown;
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
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryClientStatesRequest;
};
export declare const QueryClientStatesResponse: {
    encode(message: QueryClientStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatesResponse;
    fromJSON(object: any): QueryClientStatesResponse;
    toJSON(message: QueryClientStatesResponse): unknown;
    fromPartial<I extends {
        clientStates?: {
            clientId?: string;
            clientState?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        clientStates?: {
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
            } & Record<Exclude<keyof I["clientStates"][number]["clientState"], keyof Any>, never>;
        } & Record<Exclude<keyof I["clientStates"][number], keyof IdentifiedClientState>, never>)[] & Record<Exclude<keyof I["clientStates"], keyof {
            clientId?: string;
            clientState?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryClientStatesResponse>, never>>(object: I): QueryClientStatesResponse;
};
export declare const QueryConsensusStateRequest: {
    encode(message: QueryConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStateRequest;
    fromJSON(object: any): QueryConsensusStateRequest;
    toJSON(message: QueryConsensusStateRequest): unknown;
    fromPartial<I extends {
        clientId?: string;
        revisionNumber?: any;
        revisionHeight?: any;
        latestHeight?: boolean;
    } & {
        clientId?: string;
        revisionNumber?: any;
        revisionHeight?: any;
        latestHeight?: boolean;
    } & Record<Exclude<keyof I, keyof QueryConsensusStateRequest>, never>>(object: I): QueryConsensusStateRequest;
};
export declare const QueryConsensusStateResponse: {
    encode(message: QueryConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStateResponse;
    fromJSON(object: any): QueryConsensusStateResponse;
    toJSON(message: QueryConsensusStateResponse): unknown;
    fromPartial<I extends {
        consensusState?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
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
        proof?: Uint8Array;
        proofHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["proofHeight"], keyof Height>, never>;
    } & Record<Exclude<keyof I, keyof QueryConsensusStateResponse>, never>>(object: I): QueryConsensusStateResponse;
};
export declare const QueryConsensusStatesRequest: {
    encode(message: QueryConsensusStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStatesRequest;
    fromJSON(object: any): QueryConsensusStatesRequest;
    toJSON(message: QueryConsensusStatesRequest): unknown;
    fromPartial<I extends {
        clientId?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        clientId?: string;
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
    } & Record<Exclude<keyof I, keyof QueryConsensusStatesRequest>, never>>(object: I): QueryConsensusStatesRequest;
};
export declare const QueryConsensusStatesResponse: {
    encode(message: QueryConsensusStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStatesResponse;
    fromJSON(object: any): QueryConsensusStatesResponse;
    toJSON(message: QueryConsensusStatesResponse): unknown;
    fromPartial<I extends {
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
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
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
            } & Record<Exclude<keyof I["consensusStates"][number]["height"], keyof Height>, never>;
            consensusState?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["consensusStates"][number]["consensusState"], keyof Any>, never>;
        } & Record<Exclude<keyof I["consensusStates"][number], keyof ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I["consensusStates"], keyof {
            height?: {
                revisionNumber?: any;
                revisionHeight?: any;
            };
            consensusState?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryConsensusStatesResponse>, never>>(object: I): QueryConsensusStatesResponse;
};
export declare const QueryClientStatusRequest: {
    encode(message: QueryClientStatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatusRequest;
    fromJSON(object: any): QueryClientStatusRequest;
    toJSON(message: QueryClientStatusRequest): unknown;
    fromPartial<I extends {
        clientId?: string;
    } & {
        clientId?: string;
    } & Record<Exclude<keyof I, "clientId">, never>>(object: I): QueryClientStatusRequest;
};
export declare const QueryClientStatusResponse: {
    encode(message: QueryClientStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatusResponse;
    fromJSON(object: any): QueryClientStatusResponse;
    toJSON(message: QueryClientStatusResponse): unknown;
    fromPartial<I extends {
        status?: string;
    } & {
        status?: string;
    } & Record<Exclude<keyof I, "status">, never>>(object: I): QueryClientStatusResponse;
};
export declare const QueryClientParamsRequest: {
    encode(_: QueryClientParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientParamsRequest;
    fromJSON(_: any): QueryClientParamsRequest;
    toJSON(_: QueryClientParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryClientParamsRequest;
};
export declare const QueryClientParamsResponse: {
    encode(message: QueryClientParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientParamsResponse;
    fromJSON(object: any): QueryClientParamsResponse;
    toJSON(message: QueryClientParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            allowedClients?: string[];
        };
    } & {
        params?: {
            allowedClients?: string[];
        } & {
            allowedClients?: string[] & string[] & Record<Exclude<keyof I["params"]["allowedClients"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["params"], "allowedClients">, never>;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryClientParamsResponse;
};
export declare const QueryUpgradedClientStateRequest: {
    encode(_: QueryUpgradedClientStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedClientStateRequest;
    fromJSON(_: any): QueryUpgradedClientStateRequest;
    toJSON(_: QueryUpgradedClientStateRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryUpgradedClientStateRequest;
};
export declare const QueryUpgradedClientStateResponse: {
    encode(message: QueryUpgradedClientStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedClientStateResponse;
    fromJSON(object: any): QueryUpgradedClientStateResponse;
    toJSON(message: QueryUpgradedClientStateResponse): unknown;
    fromPartial<I extends {
        upgradedClientState?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        upgradedClientState?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["upgradedClientState"], keyof Any>, never>;
    } & Record<Exclude<keyof I, "upgradedClientState">, never>>(object: I): QueryUpgradedClientStateResponse;
};
export declare const QueryUpgradedConsensusStateRequest: {
    encode(_: QueryUpgradedConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateRequest;
    fromJSON(_: any): QueryUpgradedConsensusStateRequest;
    toJSON(_: QueryUpgradedConsensusStateRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryUpgradedConsensusStateRequest;
};
export declare const QueryUpgradedConsensusStateResponse: {
    encode(message: QueryUpgradedConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateResponse;
    fromJSON(object: any): QueryUpgradedConsensusStateResponse;
    toJSON(message: QueryUpgradedConsensusStateResponse): unknown;
    fromPartial<I extends {
        upgradedConsensusState?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        upgradedConsensusState?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["upgradedConsensusState"], keyof Any>, never>;
    } & Record<Exclude<keyof I, "upgradedConsensusState">, never>>(object: I): QueryUpgradedConsensusStateResponse;
};
