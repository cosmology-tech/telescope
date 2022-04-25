import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Certificate, CertificateFilter } from "../../../akash/cert/v1beta2/cert";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
/** CertificateResponse contains a single X509 certificate and its serial number */
export interface CertificateResponse {
    certificate: Certificate;
    serial: string;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryCertificatesRequest {
    filter: CertificateFilter;
    pagination: PageRequest;
}
/** QueryCertificatesResponse is response type for the Query/Certificates RPC method */
export interface QueryCertificatesResponse {
    certificates: CertificateResponse[];
    pagination: PageResponse;
}
export declare const CertificateResponse: {
    encode(message: CertificateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CertificateResponse;
    fromJSON(object: any): CertificateResponse;
    toJSON(message: CertificateResponse): unknown;
    fromPartial<I extends unknown>(object: I): CertificateResponse;
};
export declare const QueryCertificatesRequest: {
    encode(message: QueryCertificatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCertificatesRequest;
    fromJSON(object: any): QueryCertificatesRequest;
    toJSON(message: QueryCertificatesRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryCertificatesRequest;
};
export declare const QueryCertificatesResponse: {
    encode(message: QueryCertificatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCertificatesResponse;
    fromJSON(object: any): QueryCertificatesResponse;
    toJSON(message: QueryCertificatesResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryCertificatesResponse;
};
/** Query defines the gRPC querier service */
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
