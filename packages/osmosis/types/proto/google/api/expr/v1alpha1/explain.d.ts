import * as _m0 from "protobufjs/minimal";
import { Value } from "../../../../google/api/expr/v1alpha1/value";
/**
 * Values of intermediate expressions produced when evaluating expression.
 * Deprecated, use `EvalState` instead.
 *
 * @deprecated
 */
export interface Explain {
    /**
     * All of the observed values.
     *
     * The field value_index is an index in the values list.
     * Separating values from steps is needed to remove redundant values.
     */
    values: Value[];
    /**
     * List of steps.
     *
     * Repeated evaluations of the same expression generate new ExprStep
     * instances. The order of such ExprStep instances matches the order of
     * elements returned by Comprehension.iter_range.
     */
    exprSteps: Explain_ExprStep[];
}
/** ID and value index of one step. */
export interface Explain_ExprStep {
    /** ID of corresponding Expr node. */
    id: string;
    /** Index of the value in the values list. */
    valueIndex: number;
}
export declare const Explain: {
    encode(message: Explain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Explain;
    fromJSON(object: any): Explain;
    toJSON(message: Explain): unknown;
    fromPartial<I extends {
        values?: {
            nullValue?: import("../../../protobuf/struct").NullValue;
            boolValue?: boolean;
            int64Value?: string;
            uint64Value?: string;
            doubleValue?: number;
            stringValue?: string;
            bytesValue?: Uint8Array;
            enumValue?: {
                type?: string;
                value?: number;
            };
            objectValue?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            mapValue?: {
                entries?: {
                    key?: any;
                    value?: any;
                }[];
            };
            listValue?: {
                values?: any[];
            };
            typeValue?: string;
        }[];
        exprSteps?: {
            id?: string;
            valueIndex?: number;
        }[];
    } & {
        values?: {
            nullValue?: import("../../../protobuf/struct").NullValue;
            boolValue?: boolean;
            int64Value?: string;
            uint64Value?: string;
            doubleValue?: number;
            stringValue?: string;
            bytesValue?: Uint8Array;
            enumValue?: {
                type?: string;
                value?: number;
            };
            objectValue?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            mapValue?: {
                entries?: {
                    key?: any;
                    value?: any;
                }[];
            };
            listValue?: {
                values?: any[];
            };
            typeValue?: string;
        }[] & ({
            nullValue?: import("../../../protobuf/struct").NullValue;
            boolValue?: boolean;
            int64Value?: string;
            uint64Value?: string;
            doubleValue?: number;
            stringValue?: string;
            bytesValue?: Uint8Array;
            enumValue?: {
                type?: string;
                value?: number;
            };
            objectValue?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            mapValue?: {
                entries?: {
                    key?: any;
                    value?: any;
                }[];
            };
            listValue?: {
                values?: any[];
            };
            typeValue?: string;
        } & {
            nullValue?: import("../../../protobuf/struct").NullValue;
            boolValue?: boolean;
            int64Value?: string;
            uint64Value?: string;
            doubleValue?: number;
            stringValue?: string;
            bytesValue?: Uint8Array;
            enumValue?: {
                type?: string;
                value?: number;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["values"][number]["enumValue"], keyof import("../../../../google/api/expr/v1alpha1/value").EnumValue>, never>;
            objectValue?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["values"][number]["objectValue"], keyof import("../../../protobuf/any").Any>, never>;
            mapValue?: {
                entries?: {
                    key?: any;
                    value?: any;
                }[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["values"][number]["mapValue"], "entries">, never>;
            listValue?: {
                values?: any[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["values"][number]["listValue"], "values">, never>;
            typeValue?: string;
        } & Record<Exclude<keyof I["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["values"], keyof {
            nullValue?: import("../../../protobuf/struct").NullValue;
            boolValue?: boolean;
            int64Value?: string;
            uint64Value?: string;
            doubleValue?: number;
            stringValue?: string;
            bytesValue?: Uint8Array;
            enumValue?: {
                type?: string;
                value?: number;
            };
            objectValue?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            mapValue?: {
                entries?: {
                    key?: any;
                    value?: any;
                }[];
            };
            listValue?: {
                values?: any[];
            };
            typeValue?: string;
        }[]>, never>;
        exprSteps?: {
            id?: string;
            valueIndex?: number;
        }[] & ({
            id?: string;
            valueIndex?: number;
        } & {
            id?: string;
            valueIndex?: number;
        } & Record<Exclude<keyof I["exprSteps"][number], keyof Explain_ExprStep>, never>)[] & Record<Exclude<keyof I["exprSteps"], keyof {
            id?: string;
            valueIndex?: number;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof Explain>, never>>(object: I): Explain;
};
export declare const Explain_ExprStep: {
    encode(message: Explain_ExprStep, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Explain_ExprStep;
    fromJSON(object: any): Explain_ExprStep;
    toJSON(message: Explain_ExprStep): unknown;
    fromPartial<I extends {
        id?: string;
        valueIndex?: number;
    } & {
        id?: string;
        valueIndex?: number;
    } & Record<Exclude<keyof I, keyof Explain_ExprStep>, never>>(object: I): Explain_ExprStep;
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
