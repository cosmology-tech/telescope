import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/** QueryEvidenceRequest is the request type for the Query/Evidence RPC method. */
export interface QueryEvidenceRequest {
    /** evidence_hash defines the hash of the requested evidence. */
    evidenceHash: Uint8Array;
}
/** QueryEvidenceResponse is the response type for the Query/Evidence RPC method. */
export interface QueryEvidenceResponse {
    /** evidence returns the requested evidence. */
    evidence: Any;
}
/**
 * QueryEvidenceRequest is the request type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceResponse {
    /** evidence returns all evidences. */
    evidence: Any[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export declare const QueryEvidenceRequest: {
    encode(message: QueryEvidenceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEvidenceRequest;
    fromJSON(object: any): QueryEvidenceRequest;
    toJSON(message: QueryEvidenceRequest): unknown;
    fromPartial<I extends {
        evidenceHash?: Uint8Array;
    } & {
        evidenceHash?: Uint8Array;
    } & Record<Exclude<keyof I, "evidenceHash">, never>>(object: I): QueryEvidenceRequest;
};
export declare const QueryEvidenceResponse: {
    encode(message: QueryEvidenceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEvidenceResponse;
    fromJSON(object: any): QueryEvidenceResponse;
    toJSON(message: QueryEvidenceResponse): unknown;
    fromPartial<I extends {
        evidence?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        evidence?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["evidence"], keyof Any>, never>;
    } & Record<Exclude<keyof I, "evidence">, never>>(object: I): QueryEvidenceResponse;
};
export declare const QueryAllEvidenceRequest: {
    encode(message: QueryAllEvidenceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEvidenceRequest;
    fromJSON(object: any): QueryAllEvidenceRequest;
    toJSON(message: QueryAllEvidenceRequest): unknown;
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
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryAllEvidenceRequest;
};
export declare const QueryAllEvidenceResponse: {
    encode(message: QueryAllEvidenceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEvidenceResponse;
    fromJSON(object: any): QueryAllEvidenceResponse;
    toJSON(message: QueryAllEvidenceResponse): unknown;
    fromPartial<I extends {
        evidence?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        evidence?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[] & ({
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["evidence"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["evidence"], keyof {
            typeUrl?: string;
            value?: Uint8Array;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryAllEvidenceResponse>, never>>(object: I): QueryAllEvidenceResponse;
};
