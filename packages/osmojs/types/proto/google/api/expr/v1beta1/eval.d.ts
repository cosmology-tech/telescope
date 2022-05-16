import { Value } from "./value";
import { Status } from "../../../rpc/status";
import * as _m0 from "protobufjs/minimal";
/**
 * The state of an evaluation.
 *
 * Can represent an initial, partial, or completed state of evaluation.
 */
export interface EvalState {
    /** The unique values referenced in this message. */
    values: ExprValue[];
    /**
     * An ordered list of results.
     *
     * Tracks the flow of evaluation through the expression.
     * May be sparse.
     */
    results: EvalState_Result[];
}
/** A single evaluation result. */
export interface EvalState_Result {
    /** The expression this result is for. */
    expr: IdRef;
    /** The index in `values` of the resulting value. */
    value: number;
}
/** The value of an evaluated expression. */
export interface ExprValue {
    /** A concrete value. */
    value?: Value;
    /**
     * The set of errors in the critical path of evalution.
     *
     * Only errors in the critical path are included. For example,
     * `(<error1> || true) && <error2>` will only result in `<error2>`,
     * while `<error1> || <error2>` will result in both `<error1>` and
     * `<error2>`.
     *
     * Errors cause by the presence of other errors are not included in the
     * set. For example `<error1>.foo`, `foo(<error1>)`, and `<error1> + 1` will
     * only result in `<error1>`.
     *
     * Multiple errors *might* be included when evaluation could result
     * in different errors. For example `<error1> + <error2>` and
     * `foo(<error1>, <error2>)` may result in `<error1>`, `<error2>` or both.
     * The exact subset of errors included for this case is unspecified and
     * depends on the implementation details of the evaluator.
     */
    error?: ErrorSet;
    /**
     * The set of unknowns in the critical path of evaluation.
     *
     * Unknown behaves identically to Error with regards to propagation.
     * Specifically, only unknowns in the critical path are included, unknowns
     * caused by the presence of other unknowns are not included, and multiple
     * unknowns *might* be included included when evaluation could result in
     * different unknowns. For example:
     *
     * (<unknown[1]> || true) && <unknown[2]> -> <unknown[2]>
     * <unknown[1]> || <unknown[2]> -> <unknown[1,2]>
     * <unknown[1]>.foo -> <unknown[1]>
     * foo(<unknown[1]>) -> <unknown[1]>
     * <unknown[1]> + <unknown[2]> -> <unknown[1]> or <unknown[2[>
     *
     * Unknown takes precidence over Error in cases where a `Value` can short
     * circuit the result:
     *
     * <error> || <unknown> -> <unknown>
     * <error> && <unknown> -> <unknown>
     *
     * Errors take precidence in all other cases:
     *
     * <unknown> + <error> -> <error>
     * foo(<unknown>, <error>) -> <error>
     */
    unknown?: UnknownSet;
}
/**
 * A set of errors.
 *
 * The errors included depend on the context. See `ExprValue.error`.
 */
export interface ErrorSet {
    /** The errors in the set. */
    errors: Status[];
}
/**
 * A set of expressions for which the value is unknown.
 *
 * The unknowns included depend on the context. See `ExprValue.unknown`.
 */
export interface UnknownSet {
    /** The ids of the expressions with unknown values. */
    exprs: IdRef[];
}
/** A reference to an expression id. */
export interface IdRef {
    /** The expression id. */
    id: number;
}
export declare const EvalState: {
    encode(message: EvalState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvalState;
    fromJSON(object: any): EvalState;
    toJSON(message: EvalState): unknown;
    fromPartial<I extends {
        values?: {
            value?: {
                nullValue?: import("../../../protobuf/struct").NullValue;
                boolValue?: boolean;
                int64Value?: any;
                uint64Value?: any;
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
            };
            error?: {
                errors?: {
                    code?: number;
                    message?: string;
                    details?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }[];
            };
            unknown?: {
                exprs?: {
                    id?: number;
                }[];
            };
        }[];
        results?: {
            expr?: {
                id?: number;
            };
            value?: number;
        }[];
    } & {
        values?: {
            value?: {
                nullValue?: import("../../../protobuf/struct").NullValue;
                boolValue?: boolean;
                int64Value?: any;
                uint64Value?: any;
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
            };
            error?: {
                errors?: {
                    code?: number;
                    message?: string;
                    details?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }[];
            };
            unknown?: {
                exprs?: {
                    id?: number;
                }[];
            };
        }[] & ({
            value?: {
                nullValue?: import("../../../protobuf/struct").NullValue;
                boolValue?: boolean;
                int64Value?: any;
                uint64Value?: any;
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
            };
            error?: {
                errors?: {
                    code?: number;
                    message?: string;
                    details?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }[];
            };
            unknown?: {
                exprs?: {
                    id?: number;
                }[];
            };
        } & {
            value?: {
                nullValue?: import("../../../protobuf/struct").NullValue;
                boolValue?: boolean;
                int64Value?: any;
                uint64Value?: any;
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
                [x: string]: any;
            } & Record<Exclude<keyof I["values"][number]["value"], keyof Value>, never>;
            error?: {
                errors?: {
                    code?: number;
                    message?: string;
                    details?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["values"][number]["error"], "errors">, never>;
            unknown?: {
                exprs?: {
                    id?: number;
                }[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["values"][number]["unknown"], "exprs">, never>;
        } & Record<Exclude<keyof I["values"][number], keyof ExprValue>, never>)[] & Record<Exclude<keyof I["values"], keyof {
            value?: {
                nullValue?: import("../../../protobuf/struct").NullValue;
                boolValue?: boolean;
                int64Value?: any;
                uint64Value?: any;
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
            };
            error?: {
                errors?: {
                    code?: number;
                    message?: string;
                    details?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }[];
            };
            unknown?: {
                exprs?: {
                    id?: number;
                }[];
            };
        }[]>, never>;
        results?: {
            expr?: {
                id?: number;
            };
            value?: number;
        }[] & ({
            expr?: {
                id?: number;
            };
            value?: number;
        } & {
            expr?: {
                id?: number;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["results"][number]["expr"], "id">, never>;
            value?: number;
        } & Record<Exclude<keyof I["results"][number], keyof EvalState_Result>, never>)[] & Record<Exclude<keyof I["results"], keyof {
            expr?: {
                id?: number;
            };
            value?: number;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof EvalState>, never>>(object: I): EvalState;
};
export declare const EvalState_Result: {
    encode(message: EvalState_Result, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvalState_Result;
    fromJSON(object: any): EvalState_Result;
    toJSON(message: EvalState_Result): unknown;
    fromPartial<I extends {
        expr?: {
            id?: number;
        };
        value?: number;
    } & {
        expr?: {
            id?: number;
        } & {
            id?: number;
        } & Record<Exclude<keyof I["expr"], "id">, never>;
        value?: number;
    } & Record<Exclude<keyof I, keyof EvalState_Result>, never>>(object: I): EvalState_Result;
};
export declare const ExprValue: {
    encode(message: ExprValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExprValue;
    fromJSON(object: any): ExprValue;
    toJSON(message: ExprValue): unknown;
    fromPartial<I extends {
        value?: {
            nullValue?: import("../../../protobuf/struct").NullValue;
            boolValue?: boolean;
            int64Value?: any;
            uint64Value?: any;
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
        };
        error?: {
            errors?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            }[];
        };
        unknown?: {
            exprs?: {
                id?: number;
            }[];
        };
    } & {
        value?: {
            nullValue?: import("../../../protobuf/struct").NullValue;
            boolValue?: boolean;
            int64Value?: any;
            uint64Value?: any;
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
            int64Value?: any;
            uint64Value?: any;
            doubleValue?: number;
            stringValue?: string;
            bytesValue?: Uint8Array;
            enumValue?: {
                type?: string;
                value?: number;
            } & {
                type?: string;
                value?: number;
            } & Record<Exclude<keyof I["value"]["enumValue"], keyof import("./value").EnumValue>, never>;
            objectValue?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["value"]["objectValue"], keyof import("../../../protobuf/any").Any>, never>;
            mapValue?: {
                entries?: {
                    key?: any;
                    value?: any;
                }[];
            } & {
                entries?: {
                    key?: any;
                    value?: any;
                }[] & ({
                    key?: any;
                    value?: any;
                } & {
                    key?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
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
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                        enumValue?: {
                            type?: string;
                            value?: number;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["mapValue"]["entries"][number]["key"]["enumValue"], keyof import("./value").EnumValue>, never>;
                        objectValue?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["mapValue"]["entries"][number]["key"]["objectValue"], keyof import("../../../protobuf/any").Any>, never>;
                        mapValue?: {
                            entries?: {
                                key?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["mapValue"]["entries"][number]["key"]["mapValue"], "entries">, never>;
                        listValue?: {
                            values?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["mapValue"]["entries"][number]["key"]["listValue"], "values">, never>;
                        typeValue?: string;
                    } & Record<Exclude<keyof I["value"]["mapValue"]["entries"][number]["key"], keyof Value>, never>;
                    value?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
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
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                        enumValue?: {
                            type?: string;
                            value?: number;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["mapValue"]["entries"][number]["value"]["enumValue"], keyof import("./value").EnumValue>, never>;
                        objectValue?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["mapValue"]["entries"][number]["value"]["objectValue"], keyof import("../../../protobuf/any").Any>, never>;
                        mapValue?: {
                            entries?: {
                                key?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["mapValue"]["entries"][number]["value"]["mapValue"], "entries">, never>;
                        listValue?: {
                            values?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["mapValue"]["entries"][number]["value"]["listValue"], "values">, never>;
                        typeValue?: string;
                    } & Record<Exclude<keyof I["value"]["mapValue"]["entries"][number]["value"], keyof Value>, never>;
                } & Record<Exclude<keyof I["value"]["mapValue"]["entries"][number], keyof import("./value").MapValue_Entry>, never>)[] & Record<Exclude<keyof I["value"]["mapValue"]["entries"], keyof {
                    key?: any;
                    value?: any;
                }[]>, never>;
            } & Record<Exclude<keyof I["value"]["mapValue"], "entries">, never>;
            listValue?: {
                values?: any[];
            } & {
                values?: any[] & ({
                    nullValue?: import("../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
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
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    enumValue?: {
                        type?: string;
                        value?: number;
                    } & {
                        type?: string;
                        value?: number;
                    } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["enumValue"], keyof import("./value").EnumValue>, never>;
                    objectValue?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["objectValue"], keyof import("../../../protobuf/any").Any>, never>;
                    mapValue?: {
                        entries?: {
                            key?: any;
                            value?: any;
                        }[];
                    } & {
                        entries?: {
                            key?: any;
                            value?: any;
                        }[] & ({
                            key?: any;
                            value?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["mapValue"]["entries"][number], keyof import("./value").MapValue_Entry>, never>)[] & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["mapValue"]["entries"], keyof {
                            key?: any;
                            value?: any;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["mapValue"], "entries">, never>;
                    listValue?: {
                        values?: any[];
                    } & {
                        values?: any[] & ({
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
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
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"], "values">, never>;
                    typeValue?: string;
                } & Record<Exclude<keyof I["value"]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["value"]["listValue"]["values"], keyof any[]>, never>;
            } & Record<Exclude<keyof I["value"]["listValue"], "values">, never>;
            typeValue?: string;
        } & Record<Exclude<keyof I["value"], keyof Value>, never>;
        error?: {
            errors?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            }[];
        } & {
            errors?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            }[] & ({
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            } & {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[] & ({
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["error"]["errors"][number]["details"][number], keyof import("../../../protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["error"]["errors"][number]["details"], keyof {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I["error"]["errors"][number], keyof Status>, never>)[] & Record<Exclude<keyof I["error"]["errors"], keyof {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            }[]>, never>;
        } & Record<Exclude<keyof I["error"], "errors">, never>;
        unknown?: {
            exprs?: {
                id?: number;
            }[];
        } & {
            exprs?: {
                id?: number;
            }[] & ({
                id?: number;
            } & {
                id?: number;
            } & Record<Exclude<keyof I["unknown"]["exprs"][number], "id">, never>)[] & Record<Exclude<keyof I["unknown"]["exprs"], keyof {
                id?: number;
            }[]>, never>;
        } & Record<Exclude<keyof I["unknown"], "exprs">, never>;
    } & Record<Exclude<keyof I, keyof ExprValue>, never>>(object: I): ExprValue;
};
export declare const ErrorSet: {
    encode(message: ErrorSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ErrorSet;
    fromJSON(object: any): ErrorSet;
    toJSON(message: ErrorSet): unknown;
    fromPartial<I extends {
        errors?: {
            code?: number;
            message?: string;
            details?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }[];
    } & {
        errors?: {
            code?: number;
            message?: string;
            details?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }[] & ({
            code?: number;
            message?: string;
            details?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        } & {
            code?: number;
            message?: string;
            details?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[] & ({
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["errors"][number]["details"][number], keyof import("../../../protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["errors"][number]["details"], keyof {
                typeUrl?: string;
                value?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["errors"][number], keyof Status>, never>)[] & Record<Exclude<keyof I["errors"], keyof {
            code?: number;
            message?: string;
            details?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, "errors">, never>>(object: I): ErrorSet;
};
export declare const UnknownSet: {
    encode(message: UnknownSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnknownSet;
    fromJSON(object: any): UnknownSet;
    toJSON(message: UnknownSet): unknown;
    fromPartial<I extends {
        exprs?: {
            id?: number;
        }[];
    } & {
        exprs?: {
            id?: number;
        }[] & ({
            id?: number;
        } & {
            id?: number;
        } & Record<Exclude<keyof I["exprs"][number], "id">, never>)[] & Record<Exclude<keyof I["exprs"], keyof {
            id?: number;
        }[]>, never>;
    } & Record<Exclude<keyof I, "exprs">, never>>(object: I): UnknownSet;
};
export declare const IdRef: {
    encode(message: IdRef, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdRef;
    fromJSON(object: any): IdRef;
    toJSON(message: IdRef): unknown;
    fromPartial<I extends {
        id?: number;
    } & {
        id?: number;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): IdRef;
};
