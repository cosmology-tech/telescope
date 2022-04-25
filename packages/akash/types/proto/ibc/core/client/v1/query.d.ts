import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { Height, Params, IdentifiedClientState, ConsensusStateWithHeight } from "../../../../ibc/core/client/v1/client";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
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
    fromPartial<I extends unknown>(object: I): QueryClientStateRequest;
};
export declare const QueryClientStateResponse: {
    encode(message: QueryClientStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStateResponse;
    fromJSON(object: any): QueryClientStateResponse;
    toJSON(message: QueryClientStateResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryClientStateResponse;
};
export declare const QueryClientStatesRequest: {
    encode(message: QueryClientStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatesRequest;
    fromJSON(object: any): QueryClientStatesRequest;
    toJSON(message: QueryClientStatesRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryClientStatesRequest;
};
export declare const QueryClientStatesResponse: {
    encode(message: QueryClientStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatesResponse;
    fromJSON(object: any): QueryClientStatesResponse;
    toJSON(message: QueryClientStatesResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryClientStatesResponse;
};
export declare const QueryConsensusStateRequest: {
    encode(message: QueryConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStateRequest;
    fromJSON(object: any): QueryConsensusStateRequest;
    toJSON(message: QueryConsensusStateRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryConsensusStateRequest;
};
export declare const QueryConsensusStateResponse: {
    encode(message: QueryConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStateResponse;
    fromJSON(object: any): QueryConsensusStateResponse;
    toJSON(message: QueryConsensusStateResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryConsensusStateResponse;
};
export declare const QueryConsensusStatesRequest: {
    encode(message: QueryConsensusStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStatesRequest;
    fromJSON(object: any): QueryConsensusStatesRequest;
    toJSON(message: QueryConsensusStatesRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryConsensusStatesRequest;
};
export declare const QueryConsensusStatesResponse: {
    encode(message: QueryConsensusStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStatesResponse;
    fromJSON(object: any): QueryConsensusStatesResponse;
    toJSON(message: QueryConsensusStatesResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryConsensusStatesResponse;
};
export declare const QueryClientStatusRequest: {
    encode(message: QueryClientStatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatusRequest;
    fromJSON(object: any): QueryClientStatusRequest;
    toJSON(message: QueryClientStatusRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryClientStatusRequest;
};
export declare const QueryClientStatusResponse: {
    encode(message: QueryClientStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatusResponse;
    fromJSON(object: any): QueryClientStatusResponse;
    toJSON(message: QueryClientStatusResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryClientStatusResponse;
};
export declare const QueryClientParamsRequest: {
    encode(_: QueryClientParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientParamsRequest;
    fromJSON(_: any): QueryClientParamsRequest;
    toJSON(_: QueryClientParamsRequest): unknown;
    fromPartial<I extends unknown>(_: I): QueryClientParamsRequest;
};
export declare const QueryClientParamsResponse: {
    encode(message: QueryClientParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientParamsResponse;
    fromJSON(object: any): QueryClientParamsResponse;
    toJSON(message: QueryClientParamsResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryClientParamsResponse;
};
export declare const QueryUpgradedClientStateRequest: {
    encode(_: QueryUpgradedClientStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedClientStateRequest;
    fromJSON(_: any): QueryUpgradedClientStateRequest;
    toJSON(_: QueryUpgradedClientStateRequest): unknown;
    fromPartial<I extends unknown>(_: I): QueryUpgradedClientStateRequest;
};
export declare const QueryUpgradedClientStateResponse: {
    encode(message: QueryUpgradedClientStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedClientStateResponse;
    fromJSON(object: any): QueryUpgradedClientStateResponse;
    toJSON(message: QueryUpgradedClientStateResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryUpgradedClientStateResponse;
};
export declare const QueryUpgradedConsensusStateRequest: {
    encode(_: QueryUpgradedConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateRequest;
    fromJSON(_: any): QueryUpgradedConsensusStateRequest;
    toJSON(_: QueryUpgradedConsensusStateRequest): unknown;
    fromPartial<I extends unknown>(_: I): QueryUpgradedConsensusStateRequest;
};
export declare const QueryUpgradedConsensusStateResponse: {
    encode(message: QueryUpgradedConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateResponse;
    fromJSON(object: any): QueryUpgradedConsensusStateResponse;
    toJSON(message: QueryUpgradedConsensusStateResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryUpgradedConsensusStateResponse;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
