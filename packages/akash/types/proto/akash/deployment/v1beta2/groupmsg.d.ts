import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { GroupID } from "../../../akash/deployment/v1beta2/groupid";
/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroup {
    id: GroupID;
}
/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponse {
}
/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroup {
    id: GroupID;
}
/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponse {
}
/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroup {
    id: GroupID;
}
/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponse {
}
export declare const MsgCloseGroup: {
    encode(message: MsgCloseGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseGroup;
    fromJSON(object: any): MsgCloseGroup;
    toJSON(message: MsgCloseGroup): unknown;
    fromPartial<I extends unknown>(object: I): MsgCloseGroup;
};
export declare const MsgCloseGroupResponse: {
    encode(_: MsgCloseGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseGroupResponse;
    fromJSON(_: any): MsgCloseGroupResponse;
    toJSON(_: MsgCloseGroupResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgCloseGroupResponse;
};
export declare const MsgPauseGroup: {
    encode(message: MsgPauseGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseGroup;
    fromJSON(object: any): MsgPauseGroup;
    toJSON(message: MsgPauseGroup): unknown;
    fromPartial<I extends unknown>(object: I): MsgPauseGroup;
};
export declare const MsgPauseGroupResponse: {
    encode(_: MsgPauseGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseGroupResponse;
    fromJSON(_: any): MsgPauseGroupResponse;
    toJSON(_: MsgPauseGroupResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgPauseGroupResponse;
};
export declare const MsgStartGroup: {
    encode(message: MsgStartGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartGroup;
    fromJSON(object: any): MsgStartGroup;
    toJSON(message: MsgStartGroup): unknown;
    fromPartial<I extends unknown>(object: I): MsgStartGroup;
};
export declare const MsgStartGroupResponse: {
    encode(_: MsgStartGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartGroupResponse;
    fromJSON(_: any): MsgStartGroupResponse;
    toJSON(_: MsgStartGroupResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgStartGroupResponse;
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
