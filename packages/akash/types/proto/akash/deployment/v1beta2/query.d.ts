import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { DeploymentFilters, DeploymentID, Deployment } from "../../../akash/deployment/v1beta2/deployment";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account } from "../../../akash/escrow/v1beta2/types";
import { GroupID } from "../../../akash/deployment/v1beta2/groupid";
import { Group } from "../../../akash/deployment/v1beta2/group";
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequest {
    filters: DeploymentFilters;
    pagination: PageRequest;
}
/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponse {
    deployments: QueryDeploymentResponse[];
    pagination: PageResponse;
}
/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequest {
    id: DeploymentID;
}
/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponse {
    deployment: Deployment;
    groups: Group[];
    escrowAccount: Account;
}
/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequest {
    id: GroupID;
}
/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponse {
    group: Group;
}
export declare const QueryDeploymentsRequest: {
    encode(message: QueryDeploymentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeploymentsRequest;
    fromJSON(object: any): QueryDeploymentsRequest;
    toJSON(message: QueryDeploymentsRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryDeploymentsRequest;
};
export declare const QueryDeploymentsResponse: {
    encode(message: QueryDeploymentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeploymentsResponse;
    fromJSON(object: any): QueryDeploymentsResponse;
    toJSON(message: QueryDeploymentsResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryDeploymentsResponse;
};
export declare const QueryDeploymentRequest: {
    encode(message: QueryDeploymentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeploymentRequest;
    fromJSON(object: any): QueryDeploymentRequest;
    toJSON(message: QueryDeploymentRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryDeploymentRequest;
};
export declare const QueryDeploymentResponse: {
    encode(message: QueryDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeploymentResponse;
    fromJSON(object: any): QueryDeploymentResponse;
    toJSON(message: QueryDeploymentResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryDeploymentResponse;
};
export declare const QueryGroupRequest: {
    encode(message: QueryGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupRequest;
    fromJSON(object: any): QueryGroupRequest;
    toJSON(message: QueryGroupRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryGroupRequest;
};
export declare const QueryGroupResponse: {
    encode(message: QueryGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupResponse;
    fromJSON(object: any): QueryGroupResponse;
    toJSON(message: QueryGroupResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryGroupResponse;
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
