import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { SourceInfo, Expr, Constant } from "../../../../google/api/expr/v1alpha1/syntax";
import { Empty } from "../../../../google/protobuf/empty";
import { NullValue } from "../../../../google/protobuf/struct";
/** A CEL expression which has been successfully type checked. */
export interface CheckedExpr {
    /**
     * A map from expression ids to resolved references.
     *
     * The following entries are in this table:
     *
     * - An Ident or Select expression is represented here if it resolves to a
     *   declaration. For instance, if `a.b.c` is represented by
     *   `select(select(id(a), b), c)`, and `a.b` resolves to a declaration,
     *   while `c` is a field selection, then the reference is attached to the
     *   nested select expression (but not to the id or or the outer select).
     *   In turn, if `a` resolves to a declaration and `b.c` are field selections,
     *   the reference is attached to the ident expression.
     * - Every Call expression has an entry here, identifying the function being
     *   called.
     * - Every CreateStruct expression for a message has an entry, identifying
     *   the message.
     */
    referenceMap: {
        [key: Long]: Reference;
    };
    /**
     * A map from expression ids to types.
     *
     * Every expression node which has a type different than DYN has a mapping
     * here. If an expression has type DYN, it is omitted from this map to save
     * space.
     */
    typeMap: {
        [key: Long]: Type;
    };
    /**
     * The source info derived from input that generated the parsed `expr` and
     * any optimizations made during the type-checking pass.
     */
    sourceInfo: SourceInfo;
    /**
     * The expr version indicates the major / minor version number of the `expr`
     * representation.
     *
     * The most common reason for a version change will be to indicate to the CEL
     * runtimes that transformations have been performed on the expr during static
     * analysis. In some cases, this will save the runtime the work of applying
     * the same or similar transformations prior to evaluation.
     */
    exprVersion: string;
    /**
     * The checked expression. Semantically equivalent to the parsed `expr`, but
     * may have structural differences.
     */
    expr: Expr;
}
export interface CheckedExpr_ReferenceMapEntry {
    key: Long;
    value: Reference;
}
export interface CheckedExpr_TypeMapEntry {
    key: Long;
    value: Type;
}
/** Represents a CEL type. */
export interface Type {
    /** Dynamic type. */
    dyn: Empty | undefined;
    /** Null value. */
    null: NullValue | undefined;
    /** Primitive types: `true`, `1u`, `-2.0`, `'string'`, `b'bytes'`. */
    primitive: Type_PrimitiveType | undefined;
    /** Wrapper of a primitive type, e.g. `google.protobuf.Int64Value`. */
    wrapper: Type_PrimitiveType | undefined;
    /** Well-known protobuf type such as `google.protobuf.Timestamp`. */
    wellKnown: Type_WellKnownType | undefined;
    /** Parameterized list with elements of `list_type`, e.g. `list<timestamp>`. */
    listType: Type_ListType | undefined;
    /** Parameterized map with typed keys and values. */
    mapType: Type_MapType | undefined;
    /** Function type. */
    function: Type_FunctionType | undefined;
    /**
     * Protocol buffer message type.
     *
     * The `message_type` string specifies the qualified message type name. For
     * example, `google.plus.Profile`.
     */
    messageType: string | undefined;
    /**
     * Type param type.
     *
     * The `type_param` string specifies the type parameter name, e.g. `list<E>`
     * would be a `list_type` whose element type was a `type_param` type
     * named `E`.
     */
    typeParam: string | undefined;
    /**
     * Type type.
     *
     * The `type` value specifies the target type. e.g. int is type with a
     * target type of `Primitive.INT`.
     */
    type: Type | undefined;
    /**
     * Error type.
     *
     * During type-checking if an expression is an error, its type is propagated
     * as the `ERROR` type. This permits the type-checker to discover other
     * errors present in the expression.
     */
    error: Empty | undefined;
    /** Abstract, application defined type. */
    abstractType: Type_AbstractType | undefined;
}
/** CEL primitive types. */
export declare enum Type_PrimitiveType {
    /** PRIMITIVE_TYPE_UNSPECIFIED - Unspecified type. */
    PRIMITIVE_TYPE_UNSPECIFIED = 0,
    /** BOOL - Boolean type. */
    BOOL = 1,
    /**
     * INT64 - Int64 type.
     *
     * Proto-based integer values are widened to int64.
     */
    INT64 = 2,
    /**
     * UINT64 - Uint64 type.
     *
     * Proto-based unsigned integer values are widened to uint64.
     */
    UINT64 = 3,
    /**
     * DOUBLE - Double type.
     *
     * Proto-based float values are widened to double values.
     */
    DOUBLE = 4,
    /** STRING - String type. */
    STRING = 5,
    /** BYTES - Bytes type. */
    BYTES = 6,
    UNRECOGNIZED = -1
}
export declare function type_PrimitiveTypeFromJSON(object: any): Type_PrimitiveType;
export declare function type_PrimitiveTypeToJSON(object: Type_PrimitiveType): string;
/** Well-known protobuf types treated with first-class support in CEL. */
export declare enum Type_WellKnownType {
    /** WELL_KNOWN_TYPE_UNSPECIFIED - Unspecified type. */
    WELL_KNOWN_TYPE_UNSPECIFIED = 0,
    /**
     * ANY - Well-known protobuf.Any type.
     *
     * Any types are a polymorphic message type. During type-checking they are
     * treated like `DYN` types, but at runtime they are resolved to a specific
     * message type specified at evaluation time.
     */
    ANY = 1,
    /** TIMESTAMP - Well-known protobuf.Timestamp type, internally referenced as `timestamp`. */
    TIMESTAMP = 2,
    /** DURATION - Well-known protobuf.Duration type, internally referenced as `duration`. */
    DURATION = 3,
    UNRECOGNIZED = -1
}
export declare function type_WellKnownTypeFromJSON(object: any): Type_WellKnownType;
export declare function type_WellKnownTypeToJSON(object: Type_WellKnownType): string;
/** List type with typed elements, e.g. `list<example.proto.MyMessage>`. */
export interface Type_ListType {
    /** The element type. */
    elemType: Type;
}
/** Map type with parameterized key and value types, e.g. `map<string, int>`. */
export interface Type_MapType {
    /** The type of the key. */
    keyType: Type;
    /** The type of the value. */
    valueType: Type;
}
/** Function type with result and arg types. */
export interface Type_FunctionType {
    /** Result type of the function. */
    resultType: Type;
    /** Argument types of the function. */
    argTypes: Type[];
}
/** Application defined abstract type. */
export interface Type_AbstractType {
    /** The fully qualified name of this abstract type. */
    name: string;
    /** Parameter types for this abstract type. */
    parameterTypes: Type[];
}
/**
 * Represents a declaration of a named value or function.
 *
 * A declaration is part of the contract between the expression, the agent
 * evaluating that expression, and the caller requesting evaluation.
 */
export interface Decl {
    /**
     * The fully qualified name of the declaration.
     *
     * Declarations are organized in containers and this represents the full path
     * to the declaration in its container, as in `google.api.expr.Decl`.
     *
     * Declarations used as [FunctionDecl.Overload][google.api.expr.v1alpha1.Decl.FunctionDecl.Overload] parameters may or may not
     * have a name depending on whether the overload is function declaration or a
     * function definition containing a result [Expr][google.api.expr.v1alpha1.Expr].
     */
    name: string;
    /** Identifier declaration. */
    ident: Decl_IdentDecl | undefined;
    /** Function declaration. */
    function: Decl_FunctionDecl | undefined;
}
/**
 * Identifier declaration which specifies its type and optional `Expr` value.
 *
 * An identifier without a value is a declaration that must be provided at
 * evaluation time. An identifier with a value should resolve to a constant,
 * but may be used in conjunction with other identifiers bound at evaluation
 * time.
 */
export interface Decl_IdentDecl {
    /** Required. The type of the identifier. */
    type: Type;
    /**
     * The constant value of the identifier. If not specified, the identifier
     * must be supplied at evaluation time.
     */
    value: Constant;
    /** Documentation string for the identifier. */
    doc: string;
}
/**
 * Function declaration specifies one or more overloads which indicate the
 * function's parameter types and return type.
 *
 * Functions have no observable side-effects (there may be side-effects like
 * logging which are not observable from CEL).
 */
export interface Decl_FunctionDecl {
    /** Required. List of function overloads, must contain at least one overload. */
    overloads: Decl_FunctionDecl_Overload[];
}
/**
 * An overload indicates a function's parameter types and return type, and
 * may optionally include a function body described in terms of [Expr][google.api.expr.v1alpha1.Expr]
 * values.
 *
 * Functions overloads are declared in either a function or method
 * call-style. For methods, the `params[0]` is the expected type of the
 * target receiver.
 *
 * Overloads must have non-overlapping argument types after erasure of all
 * parameterized type variables (similar as type erasure in Java).
 */
export interface Decl_FunctionDecl_Overload {
    /**
     * Required. Globally unique overload name of the function which reflects
     * the function name and argument types.
     *
     * This will be used by a [Reference][google.api.expr.v1alpha1.Reference] to indicate the `overload_id` that
     * was resolved for the function `name`.
     */
    overloadId: string;
    /**
     * List of function parameter [Type][google.api.expr.v1alpha1.Type] values.
     *
     * Param types are disjoint after generic type parameters have been
     * replaced with the type `DYN`. Since the `DYN` type is compatible with
     * any other type, this means that if `A` is a type parameter, the
     * function types `int<A>` and `int<int>` are not disjoint. Likewise,
     * `map<string, string>` is not disjoint from `map<K, V>`.
     *
     * When the `result_type` of a function is a generic type param, the
     * type param name also appears as the `type` of on at least one params.
     */
    params: Type[];
    /**
     * The type param names associated with the function declaration.
     *
     * For example, `function ex<K,V>(K key, map<K, V> map) : V` would yield
     * the type params of `K, V`.
     */
    typeParams: string[];
    /**
     * Required. The result type of the function. For example, the operator
     * `string.isEmpty()` would have `result_type` of `kind: BOOL`.
     */
    resultType: Type;
    /**
     * Whether the function is to be used in a method call-style `x.f(...)`
     * of a function call-style `f(x, ...)`.
     *
     * For methods, the first parameter declaration, `params[0]` is the
     * expected type of the target receiver.
     */
    isInstanceFunction: boolean;
    /** Documentation string for the overload. */
    doc: string;
}
/** Describes a resolved reference to a declaration. */
export interface Reference {
    /** The fully qualified name of the declaration. */
    name: string;
    /**
     * For references to functions, this is a list of `Overload.overload_id`
     * values which match according to typing rules.
     *
     * If the list has more than one element, overload resolution among the
     * presented candidates must happen at runtime because of dynamic types. The
     * type checker attempts to narrow down this list as much as possible.
     *
     * Empty if this is not a reference to a [Decl.FunctionDecl][google.api.expr.v1alpha1.Decl.FunctionDecl].
     */
    overloadId: string[];
    /**
     * For references to constants, this may contain the value of the
     * constant if known at compile time.
     */
    value: Constant;
}
export declare const CheckedExpr: {
    encode(message: CheckedExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckedExpr;
    fromJSON(object: any): CheckedExpr;
    toJSON(message: CheckedExpr): unknown;
    fromPartial<I extends unknown>(object: I): CheckedExpr;
};
export declare const CheckedExpr_ReferenceMapEntry: {
    encode(message: CheckedExpr_ReferenceMapEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckedExpr_ReferenceMapEntry;
    fromJSON(object: any): CheckedExpr_ReferenceMapEntry;
    toJSON(message: CheckedExpr_ReferenceMapEntry): unknown;
    fromPartial<I extends unknown>(object: I): CheckedExpr_ReferenceMapEntry;
};
export declare const CheckedExpr_TypeMapEntry: {
    encode(message: CheckedExpr_TypeMapEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckedExpr_TypeMapEntry;
    fromJSON(object: any): CheckedExpr_TypeMapEntry;
    toJSON(message: CheckedExpr_TypeMapEntry): unknown;
    fromPartial<I extends unknown>(object: I): CheckedExpr_TypeMapEntry;
};
export declare const Type: {
    encode(message: Type, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Type;
    fromJSON(object: any): Type;
    toJSON(message: Type): unknown;
    fromPartial<I extends unknown>(object: I): Type;
};
export declare const Type_ListType: {
    encode(message: Type_ListType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Type_ListType;
    fromJSON(object: any): Type_ListType;
    toJSON(message: Type_ListType): unknown;
    fromPartial<I extends unknown>(object: I): Type_ListType;
};
export declare const Type_MapType: {
    encode(message: Type_MapType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Type_MapType;
    fromJSON(object: any): Type_MapType;
    toJSON(message: Type_MapType): unknown;
    fromPartial<I extends unknown>(object: I): Type_MapType;
};
export declare const Type_FunctionType: {
    encode(message: Type_FunctionType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Type_FunctionType;
    fromJSON(object: any): Type_FunctionType;
    toJSON(message: Type_FunctionType): unknown;
    fromPartial<I extends unknown>(object: I): Type_FunctionType;
};
export declare const Type_AbstractType: {
    encode(message: Type_AbstractType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Type_AbstractType;
    fromJSON(object: any): Type_AbstractType;
    toJSON(message: Type_AbstractType): unknown;
    fromPartial<I extends unknown>(object: I): Type_AbstractType;
};
export declare const Decl: {
    encode(message: Decl, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Decl;
    fromJSON(object: any): Decl;
    toJSON(message: Decl): unknown;
    fromPartial<I extends unknown>(object: I): Decl;
};
export declare const Decl_IdentDecl: {
    encode(message: Decl_IdentDecl, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Decl_IdentDecl;
    fromJSON(object: any): Decl_IdentDecl;
    toJSON(message: Decl_IdentDecl): unknown;
    fromPartial<I extends unknown>(object: I): Decl_IdentDecl;
};
export declare const Decl_FunctionDecl: {
    encode(message: Decl_FunctionDecl, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Decl_FunctionDecl;
    fromJSON(object: any): Decl_FunctionDecl;
    toJSON(message: Decl_FunctionDecl): unknown;
    fromPartial<I extends unknown>(object: I): Decl_FunctionDecl;
};
export declare const Decl_FunctionDecl_Overload: {
    encode(message: Decl_FunctionDecl_Overload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Decl_FunctionDecl_Overload;
    fromJSON(object: any): Decl_FunctionDecl_Overload;
    toJSON(message: Decl_FunctionDecl_Overload): unknown;
    fromPartial<I extends unknown>(object: I): Decl_FunctionDecl_Overload;
};
export declare const Reference: {
    encode(message: Reference, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Reference;
    fromJSON(object: any): Reference;
    toJSON(message: Reference): unknown;
    fromPartial<I extends unknown>(object: I): Reference;
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
