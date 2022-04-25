import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Attribute } from "../../../akash/base/v1beta1/attribute";
/** ProviderInfo */
export interface ProviderInfo {
    email: string;
    website: string;
}
/** MsgCreateProvider defines an SDK message for creating a provider */
export interface MsgCreateProvider {
    owner: string;
    hostUri: string;
    attributes: Attribute[];
    info: ProviderInfo;
}
/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */
export interface MsgCreateProviderResponse {
}
/** MsgUpdateProvider defines an SDK message for updating a provider */
export interface MsgUpdateProvider {
    owner: string;
    hostUri: string;
    attributes: Attribute[];
    info: ProviderInfo;
}
/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */
export interface MsgUpdateProviderResponse {
}
/** MsgDeleteProvider defines an SDK message for deleting a provider */
export interface MsgDeleteProvider {
    owner: string;
}
/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */
export interface MsgDeleteProviderResponse {
}
/** Provider stores owner and host details */
export interface Provider {
    owner: string;
    hostUri: string;
    attributes: Attribute[];
    info: ProviderInfo;
}
export declare const ProviderInfo: {
    encode(message: ProviderInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProviderInfo;
    fromJSON(object: any): ProviderInfo;
    toJSON(message: ProviderInfo): unknown;
    fromPartial<I extends unknown>(object: I): ProviderInfo;
};
export declare const MsgCreateProvider: {
    encode(message: MsgCreateProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProvider;
    fromJSON(object: any): MsgCreateProvider;
    toJSON(message: MsgCreateProvider): unknown;
    fromPartial<I extends unknown>(object: I): MsgCreateProvider;
};
export declare const MsgCreateProviderResponse: {
    encode(_: MsgCreateProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProviderResponse;
    fromJSON(_: any): MsgCreateProviderResponse;
    toJSON(_: MsgCreateProviderResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgCreateProviderResponse;
};
export declare const MsgUpdateProvider: {
    encode(message: MsgUpdateProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProvider;
    fromJSON(object: any): MsgUpdateProvider;
    toJSON(message: MsgUpdateProvider): unknown;
    fromPartial<I extends unknown>(object: I): MsgUpdateProvider;
};
export declare const MsgUpdateProviderResponse: {
    encode(_: MsgUpdateProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProviderResponse;
    fromJSON(_: any): MsgUpdateProviderResponse;
    toJSON(_: MsgUpdateProviderResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgUpdateProviderResponse;
};
export declare const MsgDeleteProvider: {
    encode(message: MsgDeleteProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProvider;
    fromJSON(object: any): MsgDeleteProvider;
    toJSON(message: MsgDeleteProvider): unknown;
    fromPartial<I extends unknown>(object: I): MsgDeleteProvider;
};
export declare const MsgDeleteProviderResponse: {
    encode(_: MsgDeleteProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProviderResponse;
    fromJSON(_: any): MsgDeleteProviderResponse;
    toJSON(_: MsgDeleteProviderResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgDeleteProviderResponse;
};
export declare const Provider: {
    encode(message: Provider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Provider;
    fromJSON(object: any): Provider;
    toJSON(message: Provider): unknown;
    fromPartial<I extends unknown>(object: I): Provider;
};
/** Msg defines the provider Msg service */
export interface Msg {
    /** CreateProvider defines a method that creates a provider given the proper inputs */
    CreateProvider(request: MsgCreateProvider): Promise<MsgCreateProviderResponse>;
    /** UpdateProvider defines a method that updates a provider given the proper inputs */
    UpdateProvider(request: MsgUpdateProvider): Promise<MsgUpdateProviderResponse>;
    /** DeleteProvider defines a method that deletes a provider given the proper inputs */
    DeleteProvider(request: MsgDeleteProvider): Promise<MsgDeleteProviderResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateProvider(request: MsgCreateProvider): Promise<MsgCreateProviderResponse>;
    UpdateProvider(request: MsgUpdateProvider): Promise<MsgUpdateProviderResponse>;
    DeleteProvider(request: MsgDeleteProvider): Promise<MsgDeleteProviderResponse>;
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
