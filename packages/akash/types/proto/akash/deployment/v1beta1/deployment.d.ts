import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { GroupSpec, MsgCloseGroupResponse, MsgPauseGroupResponse, MsgStartGroupResponse, MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "../../../akash/deployment/v1beta1/group";
/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeployment {
    id: DeploymentID;
    groups: GroupSpec[];
    version: Uint8Array;
    deposit: Coin;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponse {
}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeployment {
    id: DeploymentID;
    amount: Coin;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponse {
}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeployment {
    id: DeploymentID;
    groups: GroupSpec[];
    version: Uint8Array;
}
/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponse {
}
/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeployment {
    id: DeploymentID;
}
/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponse {
}
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
export declare const MsgCreateDeployment: {
    encode(message: MsgCreateDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDeployment;
    fromJSON(object: any): MsgCreateDeployment;
    toJSON(message: MsgCreateDeployment): unknown;
    fromPartial<I extends unknown>(object: I): MsgCreateDeployment;
};
export declare const MsgCreateDeploymentResponse: {
    encode(_: MsgCreateDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDeploymentResponse;
    fromJSON(_: any): MsgCreateDeploymentResponse;
    toJSON(_: MsgCreateDeploymentResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgCreateDeploymentResponse;
};
export declare const MsgDepositDeployment: {
    encode(message: MsgDepositDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositDeployment;
    fromJSON(object: any): MsgDepositDeployment;
    toJSON(message: MsgDepositDeployment): unknown;
    fromPartial<I extends unknown>(object: I): MsgDepositDeployment;
};
export declare const MsgDepositDeploymentResponse: {
    encode(_: MsgDepositDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositDeploymentResponse;
    fromJSON(_: any): MsgDepositDeploymentResponse;
    toJSON(_: MsgDepositDeploymentResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgDepositDeploymentResponse;
};
export declare const MsgUpdateDeployment: {
    encode(message: MsgUpdateDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDeployment;
    fromJSON(object: any): MsgUpdateDeployment;
    toJSON(message: MsgUpdateDeployment): unknown;
    fromPartial<I extends unknown>(object: I): MsgUpdateDeployment;
};
export declare const MsgUpdateDeploymentResponse: {
    encode(_: MsgUpdateDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDeploymentResponse;
    fromJSON(_: any): MsgUpdateDeploymentResponse;
    toJSON(_: MsgUpdateDeploymentResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgUpdateDeploymentResponse;
};
export declare const MsgCloseDeployment: {
    encode(message: MsgCloseDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseDeployment;
    fromJSON(object: any): MsgCloseDeployment;
    toJSON(message: MsgCloseDeployment): unknown;
    fromPartial<I extends unknown>(object: I): MsgCloseDeployment;
};
export declare const MsgCloseDeploymentResponse: {
    encode(_: MsgCloseDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseDeploymentResponse;
    fromJSON(_: any): MsgCloseDeploymentResponse;
    toJSON(_: MsgCloseDeploymentResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgCloseDeploymentResponse;
};
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
/** Msg defines the deployment Msg service. */
export interface Msg {
    /** CreateDeployment defines a method to create new deployment given proper inputs. */
    CreateDeployment(request: MsgCreateDeployment): Promise<MsgCreateDeploymentResponse>;
    /** DepositDeployment deposits more funds into the deployment account */
    DepositDeployment(request: MsgDepositDeployment): Promise<MsgDepositDeploymentResponse>;
    /** UpdateDeployment defines a method to update a deployment given proper inputs. */
    UpdateDeployment(request: MsgUpdateDeployment): Promise<MsgUpdateDeploymentResponse>;
    /** CloseDeployment defines a method to close a deployment given proper inputs. */
    CloseDeployment(request: MsgCloseDeployment): Promise<MsgCloseDeploymentResponse>;
    /** CloseGroup defines a method to close a group of a deployment given proper inputs. */
    CloseGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponse>;
    /** PauseGroup defines a method to close a group of a deployment given proper inputs. */
    PauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponse>;
    /** StartGroup defines a method to close a group of a deployment given proper inputs. */
    StartGroup(request: MsgStartGroup): Promise<MsgStartGroupResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateDeployment(request: MsgCreateDeployment): Promise<MsgCreateDeploymentResponse>;
    DepositDeployment(request: MsgDepositDeployment): Promise<MsgDepositDeploymentResponse>;
    UpdateDeployment(request: MsgUpdateDeployment): Promise<MsgUpdateDeploymentResponse>;
    CloseDeployment(request: MsgCloseDeployment): Promise<MsgCloseDeploymentResponse>;
    CloseGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponse>;
    PauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponse>;
    StartGroup(request: MsgStartGroup): Promise<MsgStartGroupResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
