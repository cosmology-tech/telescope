import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Expr } from "../../../../google/api/expr/v1beta1/expr";
/** A declaration. */
export interface Decl {
    /** The id of the declaration. */
    id: number;
    /** The name of the declaration. */
    name: string;
    /** The documentation string for the declaration. */
    doc: string;
    /** An identifier declaration. */
    ident: IdentDecl | undefined;
    /** A function declaration. */
    function: FunctionDecl | undefined;
}
/**
 * The declared type of a variable.
 *
 * Extends runtime type values with extra information used for type checking
 * and dispatching.
 */
export interface DeclType {
    /** The expression id of the declared type, if applicable. */
    id: number;
    /** The type name, e.g. 'int', 'my.type.Type' or 'T' */
    type: string;
    /**
     * An ordered list of type parameters, e.g. `<string, int>`.
     * Only applies to a subset of types, e.g. `map`, `list`.
     */
    typeParams: DeclType[];
}
/** An identifier declaration. */
export interface IdentDecl {
    /** Optional type of the identifier. */
    type: DeclType;
    /** Optional value of the identifier. */
    value: Expr;
}
/** A function declaration. */
export interface FunctionDecl {
    /** The function arguments. */
    args: IdentDecl[];
    /** Optional declared return type. */
    returnType: DeclType;
    /** If the first argument of the function is the receiver. */
    receiverFunction: boolean;
}
export declare const Decl: {
    encode(message: Decl, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Decl;
    fromJSON(object: any): Decl;
    toJSON(message: Decl): unknown;
    fromPartial<I extends unknown>(object: I): Decl;
};
export declare const DeclType: {
    encode(message: DeclType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeclType;
    fromJSON(object: any): DeclType;
    toJSON(message: DeclType): unknown;
    fromPartial<I extends unknown>(object: I): DeclType;
};
export declare const IdentDecl: {
    encode(message: IdentDecl, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdentDecl;
    fromJSON(object: any): IdentDecl;
    toJSON(message: IdentDecl): unknown;
    fromPartial<I extends unknown>(object: I): IdentDecl;
};
export declare const FunctionDecl: {
    encode(message: FunctionDecl, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FunctionDecl;
    fromJSON(object: any): FunctionDecl;
    toJSON(message: FunctionDecl): unknown;
    fromPartial<I extends unknown>(object: I): FunctionDecl;
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
