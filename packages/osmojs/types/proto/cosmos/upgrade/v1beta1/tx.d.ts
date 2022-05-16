import { Plan } from "./upgrade";
import * as _m0 from "protobufjs/minimal";
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
    fromPartial<I extends {
        authority?: string;
        plan?: {
            name?: string;
            time?: Date;
            height?: any;
            info?: string;
            upgradedClientState?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        };
    } & {
        authority?: string;
        plan?: {
            name?: string;
            time?: Date;
            height?: any;
            info?: string;
            upgradedClientState?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            name?: string;
            time?: Date;
            height?: any;
            info?: string;
            upgradedClientState?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["plan"]["upgradedClientState"], keyof import("../../../google/protobuf/any").Any>, never>;
        } & Record<Exclude<keyof I["plan"], keyof Plan>, never>;
    } & Record<Exclude<keyof I, keyof MsgSoftwareUpgrade>, never>>(object: I): MsgSoftwareUpgrade;
};
export declare const MsgSoftwareUpgradeResponse: {
    encode(_: MsgSoftwareUpgradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSoftwareUpgradeResponse;
    fromJSON(_: any): MsgSoftwareUpgradeResponse;
    toJSON(_: MsgSoftwareUpgradeResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSoftwareUpgradeResponse;
};
export declare const MsgCancelUpgrade: {
    encode(message: MsgCancelUpgrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUpgrade;
    fromJSON(object: any): MsgCancelUpgrade;
    toJSON(message: MsgCancelUpgrade): unknown;
    fromPartial<I extends {
        authority?: string;
    } & {
        authority?: string;
    } & Record<Exclude<keyof I, "authority">, never>>(object: I): MsgCancelUpgrade;
};
export declare const MsgCancelUpgradeResponse: {
    encode(_: MsgCancelUpgradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUpgradeResponse;
    fromJSON(_: any): MsgCancelUpgradeResponse;
    toJSON(_: MsgCancelUpgradeResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCancelUpgradeResponse;
};
