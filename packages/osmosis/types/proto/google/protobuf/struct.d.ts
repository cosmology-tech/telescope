import * as _m0 from "protobufjs/minimal";
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 * The JSON representation for `NullValue` is JSON `null`.
 */
export declare enum NullValue {
    /** NULL_VALUE - Null value. */
    NULL_VALUE = 0,
    UNRECOGNIZED = -1
}
export declare function nullValueFromJSON(object: any): NullValue;
export declare function nullValueToJSON(object: NullValue): string;
export interface Struct_FieldsEntry {
    key: string;
    value: Value;
}
/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 *
 * The JSON representation for `Struct` is JSON object.
 */
export interface Struct {
    /** Unordered map of dynamically typed values. */
    fields: {
        [key: string]: Value;
    };
}
/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of that
 * variants, absence of any variant indicates an error.
 *
 * The JSON representation for `Value` is JSON value.
 */
export interface Value {
    /** Represents a null value. */
    nullValue?: NullValue;
    /** Represents a double value. */
    numberValue?: number;
    /** Represents a string value. */
    stringValue?: string;
    /** Represents a boolean value. */
    boolValue?: boolean;
    /** Represents a structured value. */
    structValue?: Struct;
    /** Represents a repeated `Value`. */
    listValue?: ListValue;
}
/**
 * `ListValue` is a wrapper around a repeated field of values.
 *
 * The JSON representation for `ListValue` is JSON array.
 */
export interface ListValue {
    /** Repeated field of dynamically typed values. */
    values: Value[];
}
export declare const Struct_FieldsEntry: {
    encode(message: Struct_FieldsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Struct_FieldsEntry;
    fromJSON(object: any): Struct_FieldsEntry;
    toJSON(message: Struct_FieldsEntry): unknown;
    fromPartial<I extends {
        key?: string;
        value?: {
            nullValue?: NullValue;
            numberValue?: number;
            stringValue?: string;
            boolValue?: boolean;
            structValue?: {
                fields?: {
                    [x: string]: any;
                };
            };
            listValue?: {
                values?: any[];
            };
        };
    } & {
        key?: string;
        value?: {
            nullValue?: NullValue;
            numberValue?: number;
            stringValue?: string;
            boolValue?: boolean;
            structValue?: {
                fields?: {
                    [x: string]: any;
                };
            };
            listValue?: {
                values?: any[];
            };
        } & {
            nullValue?: NullValue;
            numberValue?: number;
            stringValue?: string;
            boolValue?: boolean;
            structValue?: {
                fields?: {
                    [x: string]: any;
                };
            } & {
                fields?: {
                    [x: string]: any;
                } & {
                    [x: string]: {
                        nullValue?: NullValue;
                        numberValue?: number;
                        stringValue?: string;
                        boolValue?: boolean;
                        structValue?: {
                            fields?: {
                                [x: string]: any;
                            };
                        };
                        listValue?: {
                            values?: any[];
                        };
                    } & {
                        nullValue?: NullValue;
                        numberValue?: number;
                        stringValue?: string;
                        boolValue?: boolean;
                        structValue?: {
                            fields?: {
                                [x: string]: any;
                            };
                        } & {
                            fields?: {
                                [x: string]: any;
                            } & {
                                [x: string]: {
                                    nullValue?: NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    };
                                    listValue?: {
                                        values?: any[];
                                    };
                                } & {
                                    nullValue?: NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    } & {
                                        fields?: {
                                            [x: string]: any;
                                        } & {
                                            [x: string]: {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                };
                                                listValue?: {
                                                    values?: any[];
                                                };
                                            } & {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                } & any & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                                listValue?: {
                                                    values?: any[];
                                                } & any & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                            } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string], keyof Value>, never>;
                                        } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                                    } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                    listValue?: {
                                        values?: any[];
                                    } & {
                                        values?: any[] & ({
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            };
                                            listValue?: {
                                                values?: any[];
                                            };
                                        } & {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            } & {
                                                fields?: {
                                                    [x: string]: any;
                                                } & any & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                            } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                            listValue?: {
                                                values?: any[];
                                            } & {
                                                values?: any[] & ({
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                            } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"], "values">, never>;
                                        } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                                    } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["structValue"]["fields"][string], keyof Value>, never>;
                            } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                        } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                        listValue?: {
                            values?: any[];
                        } & {
                            values?: any[] & ({
                                nullValue?: NullValue;
                                numberValue?: number;
                                stringValue?: string;
                                boolValue?: boolean;
                                structValue?: {
                                    fields?: {
                                        [x: string]: any;
                                    };
                                };
                                listValue?: {
                                    values?: any[];
                                };
                            } & {
                                nullValue?: NullValue;
                                numberValue?: number;
                                stringValue?: string;
                                boolValue?: boolean;
                                structValue?: {
                                    fields?: {
                                        [x: string]: any;
                                    };
                                } & {
                                    fields?: {
                                        [x: string]: any;
                                    } & {
                                        [x: string]: {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            };
                                            listValue?: {
                                                values?: any[];
                                            };
                                        } & {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            } & {
                                                fields?: {
                                                    [x: string]: any;
                                                } & any & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                                            } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                            listValue?: {
                                                values?: any[];
                                            } & {
                                                values?: any[] & ({
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                                            } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                        } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                                    } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                listValue?: {
                                    values?: any[];
                                } & {
                                    values?: any[] & ({
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        };
                                        listValue?: {
                                            values?: any[];
                                        };
                                    } & {
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        } & {
                                            fields?: {
                                                [x: string]: any;
                                            } & {
                                                [x: string]: {
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                                            } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                        } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                        listValue?: {
                                            values?: any[];
                                        } & {
                                            values?: any[] & ({
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                };
                                                listValue?: {
                                                    values?: any[];
                                                };
                                            } & {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                } & any & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                                listValue?: {
                                                    values?: any[];
                                                } & any & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                                            } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                        } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                                    } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"], "values">, never>;
                            } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                        } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string]["listValue"], "values">, never>;
                    } & Record<Exclude<keyof I["value"]["structValue"]["fields"][string], keyof Value>, never>;
                } & Record<Exclude<keyof I["value"]["structValue"]["fields"], string | number>, never>;
            } & Record<Exclude<keyof I["value"]["structValue"], "fields">, never>;
            listValue?: {
                values?: any[];
            } & {
                values?: any[] & ({
                    nullValue?: NullValue;
                    numberValue?: number;
                    stringValue?: string;
                    boolValue?: boolean;
                    structValue?: {
                        fields?: {
                            [x: string]: any;
                        };
                    };
                    listValue?: {
                        values?: any[];
                    };
                } & {
                    nullValue?: NullValue;
                    numberValue?: number;
                    stringValue?: string;
                    boolValue?: boolean;
                    structValue?: {
                        fields?: {
                            [x: string]: any;
                        };
                    } & {
                        fields?: {
                            [x: string]: any;
                        } & {
                            [x: string]: {
                                nullValue?: NullValue;
                                numberValue?: number;
                                stringValue?: string;
                                boolValue?: boolean;
                                structValue?: {
                                    fields?: {
                                        [x: string]: any;
                                    };
                                };
                                listValue?: {
                                    values?: any[];
                                };
                            } & {
                                nullValue?: NullValue;
                                numberValue?: number;
                                stringValue?: string;
                                boolValue?: boolean;
                                structValue?: {
                                    fields?: {
                                        [x: string]: any;
                                    };
                                } & {
                                    fields?: {
                                        [x: string]: any;
                                    } & {
                                        [x: string]: {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            };
                                            listValue?: {
                                                values?: any[];
                                            };
                                        } & {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            } & {
                                                fields?: {
                                                    [x: string]: any;
                                                } & any & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                                            } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                            listValue?: {
                                                values?: any[];
                                            } & {
                                                values?: any[] & ({
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                                            } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                        } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string], keyof Value>, never>;
                                    } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                                } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                listValue?: {
                                    values?: any[];
                                } & {
                                    values?: any[] & ({
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        };
                                        listValue?: {
                                            values?: any[];
                                        };
                                    } & {
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        } & {
                                            fields?: {
                                                [x: string]: any;
                                            } & {
                                                [x: string]: {
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                                            } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                        } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                        listValue?: {
                                            values?: any[];
                                        } & {
                                            values?: any[] & ({
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                };
                                                listValue?: {
                                                    values?: any[];
                                                };
                                            } & {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                } & any & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                                listValue?: {
                                                    values?: any[];
                                                } & any & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                                            } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                        } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"], "values">, never>;
                                    } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                                } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"], "values">, never>;
                            } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                        } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                    } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["structValue"], "fields">, never>;
                    listValue?: {
                        values?: any[];
                    } & {
                        values?: any[] & ({
                            nullValue?: NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: {
                                fields?: {
                                    [x: string]: any;
                                };
                            };
                            listValue?: {
                                values?: any[];
                            };
                        } & {
                            nullValue?: NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: {
                                fields?: {
                                    [x: string]: any;
                                };
                            } & {
                                fields?: {
                                    [x: string]: any;
                                } & {
                                    [x: string]: {
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        };
                                        listValue?: {
                                            values?: any[];
                                        };
                                    } & {
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        } & {
                                            fields?: {
                                                [x: string]: any;
                                            } & {
                                                [x: string]: {
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string], keyof Value>, never>;
                                            } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                                        } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                        listValue?: {
                                            values?: any[];
                                        } & {
                                            values?: any[] & ({
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                };
                                                listValue?: {
                                                    values?: any[];
                                                };
                                            } & {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                } & any & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                                listValue?: {
                                                    values?: any[];
                                                } & any & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"], "values">, never>;
                                            } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                                        } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                    } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                                } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                            } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                            listValue?: {
                                values?: any[];
                            } & {
                                values?: any[] & ({
                                    nullValue?: NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    };
                                    listValue?: {
                                        values?: any[];
                                    };
                                } & {
                                    nullValue?: NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    } & {
                                        fields?: {
                                            [x: string]: any;
                                        } & {
                                            [x: string]: {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                };
                                                listValue?: {
                                                    values?: any[];
                                                };
                                            } & {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                } & any & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                                listValue?: {
                                                    values?: any[];
                                                } & any & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                            } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                                        } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                    } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                    listValue?: {
                                        values?: any[];
                                    } & {
                                        values?: any[] & ({
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            };
                                            listValue?: {
                                                values?: any[];
                                            };
                                        } & {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            } & {
                                                fields?: {
                                                    [x: string]: any;
                                                } & any & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                            } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                            listValue?: {
                                                values?: any[];
                                            } & {
                                                values?: any[] & ({
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                            } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                                        } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                    } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                                } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                            } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                        } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["listValue"], "values">, never>;
                } & Record<Exclude<keyof I["value"]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["value"]["listValue"]["values"], keyof any[]>, never>;
            } & Record<Exclude<keyof I["value"]["listValue"], "values">, never>;
        } & Record<Exclude<keyof I["value"], keyof Value>, never>;
    } & Record<Exclude<keyof I, keyof Struct_FieldsEntry>, never>>(object: I): Struct_FieldsEntry;
};
export declare const Struct: {
    encode(message: Struct, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Struct;
    fromJSON(object: any): Struct;
    toJSON(message: Struct): unknown;
    fromPartial<I extends {
        fields?: {
            [x: string]: any;
        };
    } & {
        fields?: {
            [x: string]: any;
        } & {
            [x: string]: {
                nullValue?: NullValue;
                numberValue?: number;
                stringValue?: string;
                boolValue?: boolean;
                structValue?: {
                    fields?: {
                        [x: string]: any;
                    };
                };
                listValue?: {
                    values?: any[];
                };
            } & {
                nullValue?: NullValue;
                numberValue?: number;
                stringValue?: string;
                boolValue?: boolean;
                structValue?: {
                    fields?: {
                        [x: string]: any;
                    };
                } & {
                    fields?: {
                        [x: string]: any;
                    } & {
                        [x: string]: {
                            nullValue?: NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: {
                                fields?: {
                                    [x: string]: any;
                                };
                            };
                            listValue?: {
                                values?: any[];
                            };
                        } & {
                            nullValue?: NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: {
                                fields?: {
                                    [x: string]: any;
                                };
                            } & {
                                fields?: {
                                    [x: string]: any;
                                } & {
                                    [x: string]: {
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        };
                                        listValue?: {
                                            values?: any[];
                                        };
                                    } & {
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        } & {
                                            fields?: {
                                                [x: string]: any;
                                            } & {
                                                [x: string]: {
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string], keyof Value>, never>;
                                            } & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                                        } & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                        listValue?: {
                                            values?: any[];
                                        } & {
                                            values?: any[] & ({
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                };
                                                listValue?: {
                                                    values?: any[];
                                                };
                                            } & {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                } & any & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                                listValue?: {
                                                    values?: any[];
                                                } & any & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"], "values">, never>;
                                            } & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                                        } & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                    } & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string], keyof Value>, never>;
                                } & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                            } & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                            listValue?: {
                                values?: any[];
                            } & {
                                values?: any[] & ({
                                    nullValue?: NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    };
                                    listValue?: {
                                        values?: any[];
                                    };
                                } & {
                                    nullValue?: NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    } & {
                                        fields?: {
                                            [x: string]: any;
                                        } & {
                                            [x: string]: {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                };
                                                listValue?: {
                                                    values?: any[];
                                                };
                                            } & {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                } & any & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                                listValue?: {
                                                    values?: any[];
                                                } & any & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                            } & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                                        } & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                    } & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                    listValue?: {
                                        values?: any[];
                                    } & {
                                        values?: any[] & ({
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            };
                                            listValue?: {
                                                values?: any[];
                                            };
                                        } & {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            } & {
                                                fields?: {
                                                    [x: string]: any;
                                                } & any & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                            } & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                            listValue?: {
                                                values?: any[];
                                            } & {
                                                values?: any[] & ({
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                            } & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                                        } & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                    } & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"], "values">, never>;
                                } & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                            } & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string]["listValue"], "values">, never>;
                        } & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"][string], keyof Value>, never>;
                    } & Record<Exclude<keyof I["fields"][string]["structValue"]["fields"], string | number>, never>;
                } & Record<Exclude<keyof I["fields"][string]["structValue"], "fields">, never>;
                listValue?: {
                    values?: any[];
                } & {
                    values?: any[] & ({
                        nullValue?: NullValue;
                        numberValue?: number;
                        stringValue?: string;
                        boolValue?: boolean;
                        structValue?: {
                            fields?: {
                                [x: string]: any;
                            };
                        };
                        listValue?: {
                            values?: any[];
                        };
                    } & {
                        nullValue?: NullValue;
                        numberValue?: number;
                        stringValue?: string;
                        boolValue?: boolean;
                        structValue?: {
                            fields?: {
                                [x: string]: any;
                            };
                        } & {
                            fields?: {
                                [x: string]: any;
                            } & {
                                [x: string]: {
                                    nullValue?: NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    };
                                    listValue?: {
                                        values?: any[];
                                    };
                                } & {
                                    nullValue?: NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    } & {
                                        fields?: {
                                            [x: string]: any;
                                        } & {
                                            [x: string]: {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                };
                                                listValue?: {
                                                    values?: any[];
                                                };
                                            } & {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                } & any & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                                listValue?: {
                                                    values?: any[];
                                                } & any & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                            } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string], keyof Value>, never>;
                                        } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                                    } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                    listValue?: {
                                        values?: any[];
                                    } & {
                                        values?: any[] & ({
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            };
                                            listValue?: {
                                                values?: any[];
                                            };
                                        } & {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            } & {
                                                fields?: {
                                                    [x: string]: any;
                                                } & any & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                            } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                            listValue?: {
                                                values?: any[];
                                            } & {
                                                values?: any[] & ({
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                            } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"], "values">, never>;
                                        } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                                    } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                            } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                        } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["structValue"], "fields">, never>;
                        listValue?: {
                            values?: any[];
                        } & {
                            values?: any[] & ({
                                nullValue?: NullValue;
                                numberValue?: number;
                                stringValue?: string;
                                boolValue?: boolean;
                                structValue?: {
                                    fields?: {
                                        [x: string]: any;
                                    };
                                };
                                listValue?: {
                                    values?: any[];
                                };
                            } & {
                                nullValue?: NullValue;
                                numberValue?: number;
                                stringValue?: string;
                                boolValue?: boolean;
                                structValue?: {
                                    fields?: {
                                        [x: string]: any;
                                    };
                                } & {
                                    fields?: {
                                        [x: string]: any;
                                    } & {
                                        [x: string]: {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            };
                                            listValue?: {
                                                values?: any[];
                                            };
                                        } & {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            } & {
                                                fields?: {
                                                    [x: string]: any;
                                                } & any & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                                            } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                            listValue?: {
                                                values?: any[];
                                            } & {
                                                values?: any[] & ({
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                                            } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                        } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                                    } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                listValue?: {
                                    values?: any[];
                                } & {
                                    values?: any[] & ({
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        };
                                        listValue?: {
                                            values?: any[];
                                        };
                                    } & {
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        } & {
                                            fields?: {
                                                [x: string]: any;
                                            } & {
                                                [x: string]: {
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                                            } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                        } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                        listValue?: {
                                            values?: any[];
                                        } & {
                                            values?: any[] & ({
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                };
                                                listValue?: {
                                                    values?: any[];
                                                };
                                            } & {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                } & any & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                                listValue?: {
                                                    values?: any[];
                                                } & any & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                                            } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                        } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                                    } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                            } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                        } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number]["listValue"], "values">, never>;
                    } & Record<Exclude<keyof I["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["fields"][string]["listValue"], "values">, never>;
            } & Record<Exclude<keyof I["fields"][string], keyof Value>, never>;
        } & Record<Exclude<keyof I["fields"], string | number>, never>;
    } & Record<Exclude<keyof I, "fields">, never>>(object: I): Struct;
};
export declare const Value: {
    encode(message: Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Value;
    fromJSON(object: any): Value;
    toJSON(message: Value): unknown;
    fromPartial<I extends {
        nullValue?: NullValue;
        numberValue?: number;
        stringValue?: string;
        boolValue?: boolean;
        structValue?: {
            fields?: {
                [x: string]: any;
            };
        };
        listValue?: {
            values?: any[];
        };
    } & {
        nullValue?: NullValue;
        numberValue?: number;
        stringValue?: string;
        boolValue?: boolean;
        structValue?: {
            fields?: {
                [x: string]: any;
            };
        } & {
            fields?: {
                [x: string]: any;
            } & {
                [x: string]: {
                    nullValue?: NullValue;
                    numberValue?: number;
                    stringValue?: string;
                    boolValue?: boolean;
                    structValue?: {
                        fields?: {
                            [x: string]: any;
                        };
                    };
                    listValue?: {
                        values?: any[];
                    };
                } & {
                    nullValue?: NullValue;
                    numberValue?: number;
                    stringValue?: string;
                    boolValue?: boolean;
                    structValue?: {
                        fields?: {
                            [x: string]: any;
                        };
                    } & {
                        fields?: {
                            [x: string]: any;
                        } & {
                            [x: string]: {
                                nullValue?: NullValue;
                                numberValue?: number;
                                stringValue?: string;
                                boolValue?: boolean;
                                structValue?: {
                                    fields?: {
                                        [x: string]: any;
                                    };
                                };
                                listValue?: {
                                    values?: any[];
                                };
                            } & {
                                nullValue?: NullValue;
                                numberValue?: number;
                                stringValue?: string;
                                boolValue?: boolean;
                                structValue?: {
                                    fields?: {
                                        [x: string]: any;
                                    };
                                } & {
                                    fields?: {
                                        [x: string]: any;
                                    } & {
                                        [x: string]: {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            };
                                            listValue?: {
                                                values?: any[];
                                            };
                                        } & {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            } & {
                                                fields?: {
                                                    [x: string]: any;
                                                } & any & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                                            } & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                            listValue?: {
                                                values?: any[];
                                            } & {
                                                values?: any[] & ({
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                                            } & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                        } & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string], keyof Value>, never>;
                                    } & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                                } & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                listValue?: {
                                    values?: any[];
                                } & {
                                    values?: any[] & ({
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        };
                                        listValue?: {
                                            values?: any[];
                                        };
                                    } & {
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        } & {
                                            fields?: {
                                                [x: string]: any;
                                            } & {
                                                [x: string]: {
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                                            } & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                        } & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                        listValue?: {
                                            values?: any[];
                                        } & {
                                            values?: any[] & ({
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                };
                                                listValue?: {
                                                    values?: any[];
                                                };
                                            } & {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                } & any & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                                listValue?: {
                                                    values?: any[];
                                                } & any & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                                            } & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                        } & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"], "values">, never>;
                                    } & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                                } & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"], "values">, never>;
                            } & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"]["fields"][string], keyof Value>, never>;
                        } & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                    } & Record<Exclude<keyof I["structValue"]["fields"][string]["structValue"], "fields">, never>;
                    listValue?: {
                        values?: any[];
                    } & {
                        values?: any[] & ({
                            nullValue?: NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: {
                                fields?: {
                                    [x: string]: any;
                                };
                            };
                            listValue?: {
                                values?: any[];
                            };
                        } & {
                            nullValue?: NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: {
                                fields?: {
                                    [x: string]: any;
                                };
                            } & {
                                fields?: {
                                    [x: string]: any;
                                } & {
                                    [x: string]: {
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        };
                                        listValue?: {
                                            values?: any[];
                                        };
                                    } & {
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        } & {
                                            fields?: {
                                                [x: string]: any;
                                            } & {
                                                [x: string]: {
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string], keyof Value>, never>;
                                            } & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                                        } & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                        listValue?: {
                                            values?: any[];
                                        } & {
                                            values?: any[] & ({
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                };
                                                listValue?: {
                                                    values?: any[];
                                                };
                                            } & {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                } & any & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                                listValue?: {
                                                    values?: any[];
                                                } & any & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"], "values">, never>;
                                            } & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                                        } & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                    } & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                                } & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                            } & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"], "fields">, never>;
                            listValue?: {
                                values?: any[];
                            } & {
                                values?: any[] & ({
                                    nullValue?: NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    };
                                    listValue?: {
                                        values?: any[];
                                    };
                                } & {
                                    nullValue?: NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    } & {
                                        fields?: {
                                            [x: string]: any;
                                        } & {
                                            [x: string]: {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                };
                                                listValue?: {
                                                    values?: any[];
                                                };
                                            } & {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                } & any & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                                listValue?: {
                                                    values?: any[];
                                                } & any & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                            } & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                                        } & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                    } & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                    listValue?: {
                                        values?: any[];
                                    } & {
                                        values?: any[] & ({
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            };
                                            listValue?: {
                                                values?: any[];
                                            };
                                        } & {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            } & {
                                                fields?: {
                                                    [x: string]: any;
                                                } & any & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                            } & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                            listValue?: {
                                                values?: any[];
                                            } & {
                                                values?: any[] & ({
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                            } & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                                        } & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                    } & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                                } & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                            } & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"], "values">, never>;
                        } & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["structValue"]["fields"][string]["listValue"], "values">, never>;
                } & Record<Exclude<keyof I["structValue"]["fields"][string], keyof Value>, never>;
            } & Record<Exclude<keyof I["structValue"]["fields"], string | number>, never>;
        } & Record<Exclude<keyof I["structValue"], "fields">, never>;
        listValue?: {
            values?: any[];
        } & {
            values?: any[] & ({
                nullValue?: NullValue;
                numberValue?: number;
                stringValue?: string;
                boolValue?: boolean;
                structValue?: {
                    fields?: {
                        [x: string]: any;
                    };
                };
                listValue?: {
                    values?: any[];
                };
            } & {
                nullValue?: NullValue;
                numberValue?: number;
                stringValue?: string;
                boolValue?: boolean;
                structValue?: {
                    fields?: {
                        [x: string]: any;
                    };
                } & {
                    fields?: {
                        [x: string]: any;
                    } & {
                        [x: string]: {
                            nullValue?: NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: {
                                fields?: {
                                    [x: string]: any;
                                };
                            };
                            listValue?: {
                                values?: any[];
                            };
                        } & {
                            nullValue?: NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: {
                                fields?: {
                                    [x: string]: any;
                                };
                            } & {
                                fields?: {
                                    [x: string]: any;
                                } & {
                                    [x: string]: {
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        };
                                        listValue?: {
                                            values?: any[];
                                        };
                                    } & {
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        } & {
                                            fields?: {
                                                [x: string]: any;
                                            } & {
                                                [x: string]: {
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string], keyof Value>, never>;
                                            } & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                                        } & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                        listValue?: {
                                            values?: any[];
                                        } & {
                                            values?: any[] & ({
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                };
                                                listValue?: {
                                                    values?: any[];
                                                };
                                            } & {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                } & any & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                                listValue?: {
                                                    values?: any[];
                                                } & any & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"], "values">, never>;
                                            } & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                                        } & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                    } & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string], keyof Value>, never>;
                                } & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                            } & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                            listValue?: {
                                values?: any[];
                            } & {
                                values?: any[] & ({
                                    nullValue?: NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    };
                                    listValue?: {
                                        values?: any[];
                                    };
                                } & {
                                    nullValue?: NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    } & {
                                        fields?: {
                                            [x: string]: any;
                                        } & {
                                            [x: string]: {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                };
                                                listValue?: {
                                                    values?: any[];
                                                };
                                            } & {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                } & any & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                                listValue?: {
                                                    values?: any[];
                                                } & any & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                            } & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                                        } & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                    } & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                    listValue?: {
                                        values?: any[];
                                    } & {
                                        values?: any[] & ({
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            };
                                            listValue?: {
                                                values?: any[];
                                            };
                                        } & {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            } & {
                                                fields?: {
                                                    [x: string]: any;
                                                } & any & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                            } & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                            listValue?: {
                                                values?: any[];
                                            } & {
                                                values?: any[] & ({
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                            } & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                                        } & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                    } & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"], "values">, never>;
                                } & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                            } & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"], "values">, never>;
                        } & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                    } & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                } & Record<Exclude<keyof I["listValue"]["values"][number]["structValue"], "fields">, never>;
                listValue?: {
                    values?: any[];
                } & {
                    values?: any[] & ({
                        nullValue?: NullValue;
                        numberValue?: number;
                        stringValue?: string;
                        boolValue?: boolean;
                        structValue?: {
                            fields?: {
                                [x: string]: any;
                            };
                        };
                        listValue?: {
                            values?: any[];
                        };
                    } & {
                        nullValue?: NullValue;
                        numberValue?: number;
                        stringValue?: string;
                        boolValue?: boolean;
                        structValue?: {
                            fields?: {
                                [x: string]: any;
                            };
                        } & {
                            fields?: {
                                [x: string]: any;
                            } & {
                                [x: string]: {
                                    nullValue?: NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    };
                                    listValue?: {
                                        values?: any[];
                                    };
                                } & {
                                    nullValue?: NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    } & {
                                        fields?: {
                                            [x: string]: any;
                                        } & {
                                            [x: string]: {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                };
                                                listValue?: {
                                                    values?: any[];
                                                };
                                            } & {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                } & any & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                                listValue?: {
                                                    values?: any[];
                                                } & any & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                            } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string], keyof Value>, never>;
                                        } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                                    } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                    listValue?: {
                                        values?: any[];
                                    } & {
                                        values?: any[] & ({
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            };
                                            listValue?: {
                                                values?: any[];
                                            };
                                        } & {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            } & {
                                                fields?: {
                                                    [x: string]: any;
                                                } & any & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                            } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                            listValue?: {
                                                values?: any[];
                                            } & {
                                                values?: any[] & ({
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                            } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"], "values">, never>;
                                        } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                                    } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                            } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                        } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                        listValue?: {
                            values?: any[];
                        } & {
                            values?: any[] & ({
                                nullValue?: NullValue;
                                numberValue?: number;
                                stringValue?: string;
                                boolValue?: boolean;
                                structValue?: {
                                    fields?: {
                                        [x: string]: any;
                                    };
                                };
                                listValue?: {
                                    values?: any[];
                                };
                            } & {
                                nullValue?: NullValue;
                                numberValue?: number;
                                stringValue?: string;
                                boolValue?: boolean;
                                structValue?: {
                                    fields?: {
                                        [x: string]: any;
                                    };
                                } & {
                                    fields?: {
                                        [x: string]: any;
                                    } & {
                                        [x: string]: {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            };
                                            listValue?: {
                                                values?: any[];
                                            };
                                        } & {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            } & {
                                                fields?: {
                                                    [x: string]: any;
                                                } & any & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                                            } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                            listValue?: {
                                                values?: any[];
                                            } & {
                                                values?: any[] & ({
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                                            } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                        } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                                    } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                listValue?: {
                                    values?: any[];
                                } & {
                                    values?: any[] & ({
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        };
                                        listValue?: {
                                            values?: any[];
                                        };
                                    } & {
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        } & {
                                            fields?: {
                                                [x: string]: any;
                                            } & {
                                                [x: string]: {
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                                            } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                        } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                        listValue?: {
                                            values?: any[];
                                        } & {
                                            values?: any[] & ({
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                };
                                                listValue?: {
                                                    values?: any[];
                                                };
                                            } & {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                } & any & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                                listValue?: {
                                                    values?: any[];
                                                } & any & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                                            } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                        } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                                    } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                            } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                        } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                    } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"], "values">, never>;
            } & Record<Exclude<keyof I["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["listValue"]["values"], keyof any[]>, never>;
        } & Record<Exclude<keyof I["listValue"], "values">, never>;
    } & Record<Exclude<keyof I, keyof Value>, never>>(object: I): Value;
};
export declare const ListValue: {
    encode(message: ListValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListValue;
    fromJSON(object: any): ListValue;
    toJSON(message: ListValue): unknown;
    fromPartial<I extends {
        values?: any[];
    } & {
        values?: any[] & ({
            nullValue?: NullValue;
            numberValue?: number;
            stringValue?: string;
            boolValue?: boolean;
            structValue?: {
                fields?: {
                    [x: string]: any;
                };
            };
            listValue?: {
                values?: any[];
            };
        } & {
            nullValue?: NullValue;
            numberValue?: number;
            stringValue?: string;
            boolValue?: boolean;
            structValue?: {
                fields?: {
                    [x: string]: any;
                };
            } & {
                fields?: {
                    [x: string]: any;
                } & {
                    [x: string]: {
                        nullValue?: NullValue;
                        numberValue?: number;
                        stringValue?: string;
                        boolValue?: boolean;
                        structValue?: {
                            fields?: {
                                [x: string]: any;
                            };
                        };
                        listValue?: {
                            values?: any[];
                        };
                    } & {
                        nullValue?: NullValue;
                        numberValue?: number;
                        stringValue?: string;
                        boolValue?: boolean;
                        structValue?: {
                            fields?: {
                                [x: string]: any;
                            };
                        } & {
                            fields?: {
                                [x: string]: any;
                            } & {
                                [x: string]: {
                                    nullValue?: NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    };
                                    listValue?: {
                                        values?: any[];
                                    };
                                } & {
                                    nullValue?: NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    } & {
                                        fields?: {
                                            [x: string]: any;
                                        } & {
                                            [x: string]: {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                };
                                                listValue?: {
                                                    values?: any[];
                                                };
                                            } & {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                } & any & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                                listValue?: {
                                                    values?: any[];
                                                } & any & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                            } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"][string], keyof Value>, never>;
                                        } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                                    } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                    listValue?: {
                                        values?: any[];
                                    } & {
                                        values?: any[] & ({
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            };
                                            listValue?: {
                                                values?: any[];
                                            };
                                        } & {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            } & {
                                                fields?: {
                                                    [x: string]: any;
                                                } & any & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                            } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                            listValue?: {
                                                values?: any[];
                                            } & {
                                                values?: any[] & ({
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                            } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"], "values">, never>;
                                        } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                                    } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string], keyof Value>, never>;
                            } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                        } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                        listValue?: {
                            values?: any[];
                        } & {
                            values?: any[] & ({
                                nullValue?: NullValue;
                                numberValue?: number;
                                stringValue?: string;
                                boolValue?: boolean;
                                structValue?: {
                                    fields?: {
                                        [x: string]: any;
                                    };
                                };
                                listValue?: {
                                    values?: any[];
                                };
                            } & {
                                nullValue?: NullValue;
                                numberValue?: number;
                                stringValue?: string;
                                boolValue?: boolean;
                                structValue?: {
                                    fields?: {
                                        [x: string]: any;
                                    };
                                } & {
                                    fields?: {
                                        [x: string]: any;
                                    } & {
                                        [x: string]: {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            };
                                            listValue?: {
                                                values?: any[];
                                            };
                                        } & {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            } & {
                                                fields?: {
                                                    [x: string]: any;
                                                } & any & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                                            } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                            listValue?: {
                                                values?: any[];
                                            } & {
                                                values?: any[] & ({
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                                            } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                        } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                                    } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                listValue?: {
                                    values?: any[];
                                } & {
                                    values?: any[] & ({
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        };
                                        listValue?: {
                                            values?: any[];
                                        };
                                    } & {
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        } & {
                                            fields?: {
                                                [x: string]: any;
                                            } & {
                                                [x: string]: {
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                                            } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                        } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                        listValue?: {
                                            values?: any[];
                                        } & {
                                            values?: any[] & ({
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                };
                                                listValue?: {
                                                    values?: any[];
                                                };
                                            } & {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                } & any & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                                listValue?: {
                                                    values?: any[];
                                                } & any & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                                            } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                        } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                                    } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"], "values">, never>;
                            } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                        } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string]["listValue"], "values">, never>;
                    } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                } & Record<Exclude<keyof I["values"][number]["structValue"]["fields"], string | number>, never>;
            } & Record<Exclude<keyof I["values"][number]["structValue"], "fields">, never>;
            listValue?: {
                values?: any[];
            } & {
                values?: any[] & ({
                    nullValue?: NullValue;
                    numberValue?: number;
                    stringValue?: string;
                    boolValue?: boolean;
                    structValue?: {
                        fields?: {
                            [x: string]: any;
                        };
                    };
                    listValue?: {
                        values?: any[];
                    };
                } & {
                    nullValue?: NullValue;
                    numberValue?: number;
                    stringValue?: string;
                    boolValue?: boolean;
                    structValue?: {
                        fields?: {
                            [x: string]: any;
                        };
                    } & {
                        fields?: {
                            [x: string]: any;
                        } & {
                            [x: string]: {
                                nullValue?: NullValue;
                                numberValue?: number;
                                stringValue?: string;
                                boolValue?: boolean;
                                structValue?: {
                                    fields?: {
                                        [x: string]: any;
                                    };
                                };
                                listValue?: {
                                    values?: any[];
                                };
                            } & {
                                nullValue?: NullValue;
                                numberValue?: number;
                                stringValue?: string;
                                boolValue?: boolean;
                                structValue?: {
                                    fields?: {
                                        [x: string]: any;
                                    };
                                } & {
                                    fields?: {
                                        [x: string]: any;
                                    } & {
                                        [x: string]: {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            };
                                            listValue?: {
                                                values?: any[];
                                            };
                                        } & {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            } & {
                                                fields?: {
                                                    [x: string]: any;
                                                } & any & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                                            } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                            listValue?: {
                                                values?: any[];
                                            } & {
                                                values?: any[] & ({
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                                            } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                        } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string], keyof Value>, never>;
                                    } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                                } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                listValue?: {
                                    values?: any[];
                                } & {
                                    values?: any[] & ({
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        };
                                        listValue?: {
                                            values?: any[];
                                        };
                                    } & {
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        } & {
                                            fields?: {
                                                [x: string]: any;
                                            } & {
                                                [x: string]: {
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                                            } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                        } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                        listValue?: {
                                            values?: any[];
                                        } & {
                                            values?: any[] & ({
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                };
                                                listValue?: {
                                                    values?: any[];
                                                };
                                            } & {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                } & any & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                                listValue?: {
                                                    values?: any[];
                                                } & any & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                                            } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                        } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"], "values">, never>;
                                    } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                                } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"], "values">, never>;
                            } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                        } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                    } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                    listValue?: {
                        values?: any[];
                    } & {
                        values?: any[] & ({
                            nullValue?: NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: {
                                fields?: {
                                    [x: string]: any;
                                };
                            };
                            listValue?: {
                                values?: any[];
                            };
                        } & {
                            nullValue?: NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: {
                                fields?: {
                                    [x: string]: any;
                                };
                            } & {
                                fields?: {
                                    [x: string]: any;
                                } & {
                                    [x: string]: {
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        };
                                        listValue?: {
                                            values?: any[];
                                        };
                                    } & {
                                        nullValue?: NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        } & {
                                            fields?: {
                                                [x: string]: any;
                                            } & {
                                                [x: string]: {
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"][string], keyof Value>, never>;
                                            } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                                        } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                        listValue?: {
                                            values?: any[];
                                        } & {
                                            values?: any[] & ({
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                };
                                                listValue?: {
                                                    values?: any[];
                                                };
                                            } & {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                } & any & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                                listValue?: {
                                                    values?: any[];
                                                } & any & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number]["listValue"], "values">, never>;
                                            } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                                        } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                    } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                                } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                            } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                            listValue?: {
                                values?: any[];
                            } & {
                                values?: any[] & ({
                                    nullValue?: NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    };
                                    listValue?: {
                                        values?: any[];
                                    };
                                } & {
                                    nullValue?: NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    } & {
                                        fields?: {
                                            [x: string]: any;
                                        } & {
                                            [x: string]: {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                };
                                                listValue?: {
                                                    values?: any[];
                                                };
                                            } & {
                                                nullValue?: NullValue;
                                                numberValue?: number;
                                                stringValue?: string;
                                                boolValue?: boolean;
                                                structValue?: {
                                                    fields?: {
                                                        [x: string]: any;
                                                    };
                                                } & any & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["structValue"], "fields">, never>;
                                                listValue?: {
                                                    values?: any[];
                                                } & any & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string]["listValue"], "values">, never>;
                                            } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"][string], keyof Value>, never>;
                                        } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                    } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                    listValue?: {
                                        values?: any[];
                                    } & {
                                        values?: any[] & ({
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            };
                                            listValue?: {
                                                values?: any[];
                                            };
                                        } & {
                                            nullValue?: NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            } & {
                                                fields?: {
                                                    [x: string]: any;
                                                } & any & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"]["fields"], string | number>, never>;
                                            } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["structValue"], "fields">, never>;
                                            listValue?: {
                                                values?: any[];
                                            } & {
                                                values?: any[] & ({
                                                    nullValue?: NullValue;
                                                    numberValue?: number;
                                                    stringValue?: string;
                                                    boolValue?: boolean;
                                                    structValue?: {
                                                        fields?: {
                                                            [x: string]: any;
                                                        };
                                                    };
                                                    listValue?: {
                                                        values?: any[];
                                                    };
                                                } & any & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                            } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                                        } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                                    } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                                } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                            } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                        } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                } & Record<Exclude<keyof I["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["values"][number]["listValue"]["values"], keyof any[]>, never>;
            } & Record<Exclude<keyof I["values"][number]["listValue"], "values">, never>;
        } & Record<Exclude<keyof I["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["values"], keyof any[]>, never>;
    } & Record<Exclude<keyof I, "values">, never>>(object: I): ListValue;
};
