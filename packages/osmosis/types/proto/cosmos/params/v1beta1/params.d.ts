import * as _m0 from "protobufjs/minimal";
/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposal {
    title: string;
    description: string;
    changes: ParamChange[];
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChange {
    subspace: string;
    key: string;
    value: string;
}
export declare const ParameterChangeProposal: {
    encode(message: ParameterChangeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParameterChangeProposal;
    fromJSON(object: any): ParameterChangeProposal;
    toJSON(message: ParameterChangeProposal): unknown;
    fromPartial<I extends {
        title?: string;
        description?: string;
        changes?: {
            subspace?: string;
            key?: string;
            value?: string;
        }[];
    } & {
        title?: string;
        description?: string;
        changes?: {
            subspace?: string;
            key?: string;
            value?: string;
        }[] & ({
            subspace?: string;
            key?: string;
            value?: string;
        } & {
            subspace?: string;
            key?: string;
            value?: string;
        } & Record<Exclude<keyof I["changes"][number], keyof ParamChange>, never>)[] & Record<Exclude<keyof I["changes"], keyof {
            subspace?: string;
            key?: string;
            value?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof ParameterChangeProposal>, never>>(object: I): ParameterChangeProposal;
};
export declare const ParamChange: {
    encode(message: ParamChange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamChange;
    fromJSON(object: any): ParamChange;
    toJSON(message: ParamChange): unknown;
    fromPartial<I extends {
        subspace?: string;
        key?: string;
        value?: string;
    } & {
        subspace?: string;
        key?: string;
        value?: string;
    } & Record<Exclude<keyof I, keyof ParamChange>, never>>(object: I): ParamChange;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
