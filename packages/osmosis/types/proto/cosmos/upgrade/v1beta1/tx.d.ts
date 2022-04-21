import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Plan } from "../../../cosmos/upgrade/v1beta1/upgrade";
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgrade {
    /** authority is the address of the governance account. */
    authority: string;
    /** plan is the upgrade plan. */
    plan: Plan;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeResponse {
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgrade {
    /** authority is the address of the governance account. */
    authority: string;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeResponse {
}
export declare const MsgSoftwareUpgrade: {
    encode(message: MsgSoftwareUpgrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSoftwareUpgrade;
    fromJSON(object: any): MsgSoftwareUpgrade;
    toJSON(message: MsgSoftwareUpgrade): unknown;
    fromPartial<I extends unknown>(object: I): MsgSoftwareUpgrade;
};
export declare const MsgSoftwareUpgradeResponse: {
    encode(_: MsgSoftwareUpgradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSoftwareUpgradeResponse;
    fromJSON(_: any): MsgSoftwareUpgradeResponse;
    toJSON(_: MsgSoftwareUpgradeResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgSoftwareUpgradeResponse;
};
export declare const MsgCancelUpgrade: {
    encode(message: MsgCancelUpgrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUpgrade;
    fromJSON(object: any): MsgCancelUpgrade;
    toJSON(message: MsgCancelUpgrade): unknown;
    fromPartial<I extends unknown>(object: I): MsgCancelUpgrade;
};
export declare const MsgCancelUpgradeResponse: {
    encode(_: MsgCancelUpgradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUpgradeResponse;
    fromJSON(_: any): MsgCancelUpgradeResponse;
    toJSON(_: MsgCancelUpgradeResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgCancelUpgradeResponse;
};
/** Msg defines the upgrade Msg service. */
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
