import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Attribute } from "../../../akash/base/v1beta2/attribute";
/** Provider stores owner auditor and attributes details */
export interface Provider {
    owner: string;
    auditor: string;
    attributes: Attribute[];
}
/** Attributes */
export interface AuditedAttributes {
    owner: string;
    auditor: string;
    attributes: Attribute[];
}
/** AttributesResponse represents details of deployment along with group details */
export interface AttributesResponse {
    attributes: AuditedAttributes[];
}
/** AttributesFilters defines filters used to filter deployments */
export interface AttributesFilters {
    auditors: string[];
    owners: string[];
}
/** MsgSignProviderAttributes defines an SDK message for signing a provider attributes */
export interface MsgSignProviderAttributes {
    owner: string;
    auditor: string;
    attributes: Attribute[];
}
/** MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type. */
export interface MsgSignProviderAttributesResponse {
}
/** MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes */
export interface MsgDeleteProviderAttributes {
    owner: string;
    auditor: string;
    keys: string[];
}
/** MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type. */
export interface MsgDeleteProviderAttributesResponse {
}
export declare const Provider: {
    encode(message: Provider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Provider;
    fromJSON(object: any): Provider;
    toJSON(message: Provider): unknown;
    fromPartial<I extends unknown>(object: I): Provider;
};
export declare const AuditedAttributes: {
    encode(message: AuditedAttributes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuditedAttributes;
    fromJSON(object: any): AuditedAttributes;
    toJSON(message: AuditedAttributes): unknown;
    fromPartial<I extends unknown>(object: I): AuditedAttributes;
};
export declare const AttributesResponse: {
    encode(message: AttributesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributesResponse;
    fromJSON(object: any): AttributesResponse;
    toJSON(message: AttributesResponse): unknown;
    fromPartial<I extends unknown>(object: I): AttributesResponse;
};
export declare const AttributesFilters: {
    encode(message: AttributesFilters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributesFilters;
    fromJSON(object: any): AttributesFilters;
    toJSON(message: AttributesFilters): unknown;
    fromPartial<I extends unknown>(object: I): AttributesFilters;
};
export declare const MsgSignProviderAttributes: {
    encode(message: MsgSignProviderAttributes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignProviderAttributes;
    fromJSON(object: any): MsgSignProviderAttributes;
    toJSON(message: MsgSignProviderAttributes): unknown;
    fromPartial<I extends unknown>(object: I): MsgSignProviderAttributes;
};
export declare const MsgSignProviderAttributesResponse: {
    encode(_: MsgSignProviderAttributesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignProviderAttributesResponse;
    fromJSON(_: any): MsgSignProviderAttributesResponse;
    toJSON(_: MsgSignProviderAttributesResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgSignProviderAttributesResponse;
};
export declare const MsgDeleteProviderAttributes: {
    encode(message: MsgDeleteProviderAttributes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProviderAttributes;
    fromJSON(object: any): MsgDeleteProviderAttributes;
    toJSON(message: MsgDeleteProviderAttributes): unknown;
    fromPartial<I extends unknown>(object: I): MsgDeleteProviderAttributes;
};
export declare const MsgDeleteProviderAttributesResponse: {
    encode(_: MsgDeleteProviderAttributesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProviderAttributesResponse;
    fromJSON(_: any): MsgDeleteProviderAttributesResponse;
    toJSON(_: MsgDeleteProviderAttributesResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgDeleteProviderAttributesResponse;
};
/** Msg defines the provider Msg service */
export interface Msg {
    /** SignProviderAttributes defines a method that signs provider attributes */
    SignProviderAttributes(request: MsgSignProviderAttributes): Promise<MsgSignProviderAttributesResponse>;
    /** DeleteProviderAttributes defines a method that deletes provider attributes */
    DeleteProviderAttributes(request: MsgDeleteProviderAttributes): Promise<MsgDeleteProviderAttributesResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SignProviderAttributes(request: MsgSignProviderAttributes): Promise<MsgSignProviderAttributesResponse>;
    DeleteProviderAttributes(request: MsgDeleteProviderAttributes): Promise<MsgDeleteProviderAttributesResponse>;
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
