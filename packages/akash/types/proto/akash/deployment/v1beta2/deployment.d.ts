import Long from "long";
import * as _m0 from "protobufjs/minimal";
/** DeploymentID stores owner and sequence number */
export interface DeploymentID {
    owner: string;
    dseq: Long;
}
/** Deployment stores deploymentID, state and version details */
export interface Deployment {
    deploymentId: DeploymentID;
    state: Deployment_State;
    version: Uint8Array;
    createdAt: Long;
}
/** State is an enum which refers to state of deployment */
export declare enum Deployment_State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    /** active - DeploymentActive denotes state for deployment active */
    active = 1,
    /** closed - DeploymentClosed denotes state for deployment closed */
    closed = 2,
    UNRECOGNIZED = -1
}
export declare function deployment_StateFromJSON(object: any): Deployment_State;
export declare function deployment_StateToJSON(object: Deployment_State): string;
/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFilters {
    owner: string;
    dseq: Long;
    state: string;
}
export declare const DeploymentID: {
    encode(message: DeploymentID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeploymentID;
    fromJSON(object: any): DeploymentID;
    toJSON(message: DeploymentID): unknown;
    fromPartial<I extends unknown>(object: I): DeploymentID;
};
export declare const Deployment: {
    encode(message: Deployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Deployment;
    fromJSON(object: any): Deployment;
    toJSON(message: Deployment): unknown;
    fromPartial<I extends unknown>(object: I): Deployment;
};
export declare const DeploymentFilters: {
    encode(message: DeploymentFilters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeploymentFilters;
    fromJSON(object: any): DeploymentFilters;
    toJSON(message: DeploymentFilters): unknown;
    fromPartial<I extends unknown>(object: I): DeploymentFilters;
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
