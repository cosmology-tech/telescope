import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { DeploymentID } from "../../../akash/deployment/v1beta2/deployment";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { GroupSpec } from "../../../akash/deployment/v1beta2/groupspec";
/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeployment {
    id: DeploymentID;
    groups: GroupSpec[];
    version: Uint8Array;
    deposit: Coin;
    /** Depositor pays for the deposit */
    depositor: string;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponse {
}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeployment {
    id: DeploymentID;
    amount: Coin;
    /** Depositor pays for the deposit */
    depositor: string;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponse {
}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeployment {
    id: DeploymentID;
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
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
