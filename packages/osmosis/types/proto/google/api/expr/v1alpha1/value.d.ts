import { NullValue } from "../../../protobuf/struct";
import { Any } from "../../../protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/**
 * Represents a CEL value.
 *
 * This is similar to `google.protobuf.Value`, but can represent CEL's full
 * range of values.
 */
export interface Value {
    /** Null value. */
    nullValue?: NullValue;
    /** Boolean value. */
    boolValue?: boolean;
    /** Signed integer value. */
    int64Value?: Long;
    /** Unsigned integer value. */
    uint64Value?: Long;
    /** Floating point value. */
    doubleValue?: number;
    /** UTF-8 string value. */
    stringValue?: string;
    /** Byte string value. */
    bytesValue?: Uint8Array;
    /** An enum value. */
    enumValue?: EnumValue;
    /** The proto message backing an object value. */
    objectValue?: Any;
    /** Map value. */
    mapValue?: MapValue;
    /** List value. */
    listValue?: ListValue;
    /** Type value. */
    typeValue?: string;
}
/** An enum value. */
export interface EnumValue {
    /** The fully qualified name of the enum type. */
    type: string;
    /** The value of the enum. */
    value: number;
}
/**
 * A list.
 *
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 */
export interface ListValue {
    /** The ordered values in the list. */
    values: Value[];
}
/**
 * A map.
 *
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 */
export interface MapValue {
    /**
     * The set of map entries.
     *
     * CEL has fewer restrictions on keys, so a protobuf map represenation
     * cannot be used.
     */
    entries: MapValue_Entry[];
}
/** An entry in the map. */
export interface MapValue_Entry {
    /**
     * The key.
     *
     * Must be unique with in the map.
     * Currently only boolean, int, uint, and string values can be keys.
     */
    key: Value;
    /** The value. */
    value: Value;
}
export declare const Value: {
    encode(message: Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Value;
    fromJSON(object: any): Value;
    toJSON(message: Value): unknown;
    fromPartial<I extends {
        nullValue?: NullValue;
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
        nullValue?: NullValue;
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
        } & Record<Exclude<keyof I["enumValue"], keyof EnumValue>, never>;
        objectValue?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["objectValue"], keyof Any>, never>;
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
                    nullValue?: NullValue;
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
                    nullValue?: NullValue;
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
                    } & Record<Exclude<keyof I["mapValue"]["entries"][number]["key"]["enumValue"], keyof EnumValue>, never>;
                    objectValue?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I["mapValue"]["entries"][number]["key"]["objectValue"], keyof Any>, never>;
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
                        } & Record<Exclude<keyof I["mapValue"]["entries"][number]["key"]["mapValue"]["entries"][number], keyof MapValue_Entry>, never>)[] & Record<Exclude<keyof I["mapValue"]["entries"][number]["key"]["mapValue"]["entries"], keyof {
                            key?: any;
                            value?: any;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["mapValue"]["entries"][number]["key"]["mapValue"], "entries">, never>;
                    listValue?: {
                        values?: any[];
                    } & {
                        values?: any[] & ({
                            nullValue?: NullValue;
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
                        } & Record<Exclude<keyof I["mapValue"]["entries"][number]["key"]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["mapValue"]["entries"][number]["key"]["listValue"]["values"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["mapValue"]["entries"][number]["key"]["listValue"], "values">, never>;
                    typeValue?: string;
                } & Record<Exclude<keyof I["mapValue"]["entries"][number]["key"], keyof Value>, never>;
                value?: {
                    nullValue?: NullValue;
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
                    nullValue?: NullValue;
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
                    } & Record<Exclude<keyof I["mapValue"]["entries"][number]["value"]["enumValue"], keyof EnumValue>, never>;
                    objectValue?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I["mapValue"]["entries"][number]["value"]["objectValue"], keyof Any>, never>;
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
                        } & Record<Exclude<keyof I["mapValue"]["entries"][number]["value"]["mapValue"]["entries"][number], keyof MapValue_Entry>, never>)[] & Record<Exclude<keyof I["mapValue"]["entries"][number]["value"]["mapValue"]["entries"], keyof {
                            key?: any;
                            value?: any;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["mapValue"]["entries"][number]["value"]["mapValue"], "entries">, never>;
                    listValue?: {
                        values?: any[];
                    } & {
                        values?: any[] & ({
                            nullValue?: NullValue;
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
                        } & Record<Exclude<keyof I["mapValue"]["entries"][number]["value"]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["mapValue"]["entries"][number]["value"]["listValue"]["values"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["mapValue"]["entries"][number]["value"]["listValue"], "values">, never>;
                    typeValue?: string;
                } & Record<Exclude<keyof I["mapValue"]["entries"][number]["value"], keyof Value>, never>;
            } & Record<Exclude<keyof I["mapValue"]["entries"][number], keyof MapValue_Entry>, never>)[] & Record<Exclude<keyof I["mapValue"]["entries"], keyof {
                key?: any;
                value?: any;
            }[]>, never>;
        } & Record<Exclude<keyof I["mapValue"], "entries">, never>;
        listValue?: {
            values?: any[];
        } & {
            values?: any[] & ({
                nullValue?: NullValue;
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
                nullValue?: NullValue;
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
                } & Record<Exclude<keyof I["listValue"]["values"][number]["enumValue"], keyof EnumValue>, never>;
                objectValue?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["listValue"]["values"][number]["objectValue"], keyof Any>, never>;
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
                            nullValue?: NullValue;
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
                        } & Record<Exclude<keyof I["listValue"]["values"][number]["mapValue"]["entries"][number]["key"], keyof Value>, never>;
                        value?: {
                            nullValue?: NullValue;
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
                        } & Record<Exclude<keyof I["listValue"]["values"][number]["mapValue"]["entries"][number]["value"], keyof Value>, never>;
                    } & Record<Exclude<keyof I["listValue"]["values"][number]["mapValue"]["entries"][number], keyof MapValue_Entry>, never>)[] & Record<Exclude<keyof I["listValue"]["values"][number]["mapValue"]["entries"], keyof {
                        key?: any;
                        value?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I["listValue"]["values"][number]["mapValue"], "entries">, never>;
                listValue?: {
                    values?: any[];
                } & {
                    values?: any[] & ({
                        nullValue?: NullValue;
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
                        nullValue?: NullValue;
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
                        } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["enumValue"], keyof EnumValue>, never>;
                        objectValue?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["objectValue"], keyof Any>, never>;
                        mapValue?: {
                            entries?: {
                                key?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["mapValue"], "entries">, never>;
                        listValue?: {
                            values?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number]["listValue"], "values">, never>;
                        typeValue?: string;
                    } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["listValue"]["values"][number]["listValue"], "values">, never>;
                typeValue?: string;
            } & Record<Exclude<keyof I["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["listValue"]["values"], keyof any[]>, never>;
        } & Record<Exclude<keyof I["listValue"], "values">, never>;
        typeValue?: string;
    } & Record<Exclude<keyof I, keyof Value>, never>>(object: I): Value;
};
export declare const EnumValue: {
    encode(message: EnumValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnumValue;
    fromJSON(object: any): EnumValue;
    toJSON(message: EnumValue): unknown;
    fromPartial<I extends {
        type?: string;
        value?: number;
    } & {
        type?: string;
        value?: number;
    } & Record<Exclude<keyof I, keyof EnumValue>, never>>(object: I): EnumValue;
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
            nullValue?: NullValue;
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
            } & Record<Exclude<keyof I["values"][number]["enumValue"], keyof EnumValue>, never>;
            objectValue?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["values"][number]["objectValue"], keyof Any>, never>;
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
        } & Record<Exclude<keyof I["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["values"], keyof any[]>, never>;
    } & Record<Exclude<keyof I, "values">, never>>(object: I): ListValue;
};
export declare const MapValue: {
    encode(message: MapValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapValue;
    fromJSON(object: any): MapValue;
    toJSON(message: MapValue): unknown;
    fromPartial<I extends {
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
                nullValue?: NullValue;
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
            } & Record<Exclude<keyof I["entries"][number]["key"], keyof Value>, never>;
            value?: {
                nullValue?: NullValue;
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
            } & Record<Exclude<keyof I["entries"][number]["value"], keyof Value>, never>;
        } & Record<Exclude<keyof I["entries"][number], keyof MapValue_Entry>, never>)[] & Record<Exclude<keyof I["entries"], keyof {
            key?: any;
            value?: any;
        }[]>, never>;
    } & Record<Exclude<keyof I, "entries">, never>>(object: I): MapValue;
};
export declare const MapValue_Entry: {
    encode(message: MapValue_Entry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapValue_Entry;
    fromJSON(object: any): MapValue_Entry;
    toJSON(message: MapValue_Entry): unknown;
    fromPartial<I extends {
        key?: any;
        value?: any;
    } & {
        key?: {
            nullValue?: NullValue;
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
            nullValue?: NullValue;
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
            } & Record<Exclude<keyof I["key"]["enumValue"], keyof EnumValue>, never>;
            objectValue?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["key"]["objectValue"], keyof Any>, never>;
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
                        nullValue?: NullValue;
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
                        nullValue?: NullValue;
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
                        } & Record<Exclude<keyof I["key"]["mapValue"]["entries"][number]["key"]["enumValue"], keyof EnumValue>, never>;
                        objectValue?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["key"]["mapValue"]["entries"][number]["key"]["objectValue"], keyof Any>, never>;
                        mapValue?: {
                            entries?: {
                                key?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["key"]["mapValue"]["entries"][number]["key"]["mapValue"], "entries">, never>;
                        listValue?: {
                            values?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["key"]["mapValue"]["entries"][number]["key"]["listValue"], "values">, never>;
                        typeValue?: string;
                    } & Record<Exclude<keyof I["key"]["mapValue"]["entries"][number]["key"], keyof Value>, never>;
                    value?: {
                        nullValue?: NullValue;
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
                        nullValue?: NullValue;
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
                        } & Record<Exclude<keyof I["key"]["mapValue"]["entries"][number]["value"]["enumValue"], keyof EnumValue>, never>;
                        objectValue?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["key"]["mapValue"]["entries"][number]["value"]["objectValue"], keyof Any>, never>;
                        mapValue?: {
                            entries?: {
                                key?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["key"]["mapValue"]["entries"][number]["value"]["mapValue"], "entries">, never>;
                        listValue?: {
                            values?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["key"]["mapValue"]["entries"][number]["value"]["listValue"], "values">, never>;
                        typeValue?: string;
                    } & Record<Exclude<keyof I["key"]["mapValue"]["entries"][number]["value"], keyof Value>, never>;
                } & Record<Exclude<keyof I["key"]["mapValue"]["entries"][number], keyof MapValue_Entry>, never>)[] & Record<Exclude<keyof I["key"]["mapValue"]["entries"], keyof {
                    key?: any;
                    value?: any;
                }[]>, never>;
            } & Record<Exclude<keyof I["key"]["mapValue"], "entries">, never>;
            listValue?: {
                values?: any[];
            } & {
                values?: any[] & ({
                    nullValue?: NullValue;
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
                    nullValue?: NullValue;
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
                    } & Record<Exclude<keyof I["key"]["listValue"]["values"][number]["enumValue"], keyof EnumValue>, never>;
                    objectValue?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I["key"]["listValue"]["values"][number]["objectValue"], keyof Any>, never>;
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
                        } & Record<Exclude<keyof I["key"]["listValue"]["values"][number]["mapValue"]["entries"][number], keyof MapValue_Entry>, never>)[] & Record<Exclude<keyof I["key"]["listValue"]["values"][number]["mapValue"]["entries"], keyof {
                            key?: any;
                            value?: any;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["key"]["listValue"]["values"][number]["mapValue"], "entries">, never>;
                    listValue?: {
                        values?: any[];
                    } & {
                        values?: any[] & ({
                            nullValue?: NullValue;
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
                        } & Record<Exclude<keyof I["key"]["listValue"]["values"][number]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["key"]["listValue"]["values"][number]["listValue"]["values"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["key"]["listValue"]["values"][number]["listValue"], "values">, never>;
                    typeValue?: string;
                } & Record<Exclude<keyof I["key"]["listValue"]["values"][number], keyof Value>, never>)[] & Record<Exclude<keyof I["key"]["listValue"]["values"], keyof any[]>, never>;
            } & Record<Exclude<keyof I["key"]["listValue"], "values">, never>;
            typeValue?: string;
        } & Record<Exclude<keyof I["key"], keyof Value>, never>;
        value?: {
            nullValue?: NullValue;
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
            nullValue?: NullValue;
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
            } & Record<Exclude<keyof I["value"]["enumValue"], keyof EnumValue>, never>;
            objectValue?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["value"]["objectValue"], keyof Any>, never>;
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
                        nullValue?: NullValue;
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
                        nullValue?: NullValue;
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
                        } & Record<Exclude<keyof I["value"]["mapValue"]["entries"][number]["key"]["enumValue"], keyof EnumValue>, never>;
                        objectValue?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["mapValue"]["entries"][number]["key"]["objectValue"], keyof Any>, never>;
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
                        nullValue?: NullValue;
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
                        nullValue?: NullValue;
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
                        } & Record<Exclude<keyof I["value"]["mapValue"]["entries"][number]["value"]["enumValue"], keyof EnumValue>, never>;
                        objectValue?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["mapValue"]["entries"][number]["value"]["objectValue"], keyof Any>, never>;
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
                } & Record<Exclude<keyof I["value"]["mapValue"]["entries"][number], keyof MapValue_Entry>, never>)[] & Record<Exclude<keyof I["value"]["mapValue"]["entries"], keyof {
                    key?: any;
                    value?: any;
                }[]>, never>;
            } & Record<Exclude<keyof I["value"]["mapValue"], "entries">, never>;
            listValue?: {
                values?: any[];
            } & {
                values?: any[] & ({
                    nullValue?: NullValue;
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
                    nullValue?: NullValue;
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
                    } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["enumValue"], keyof EnumValue>, never>;
                    objectValue?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["objectValue"], keyof Any>, never>;
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
                        } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["mapValue"]["entries"][number], keyof MapValue_Entry>, never>)[] & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["mapValue"]["entries"], keyof {
                            key?: any;
                            value?: any;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["value"]["listValue"]["values"][number]["mapValue"], "entries">, never>;
                    listValue?: {
                        values?: any[];
                    } & {
                        values?: any[] & ({
                            nullValue?: NullValue;
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
    } & Record<Exclude<keyof I, keyof MapValue_Entry>, never>>(object: I): MapValue_Entry;
};
