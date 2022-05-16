import { SourceContext } from "./source_context";
import { Any } from "./any";
import * as _m0 from "protobufjs/minimal";
/** Basic field types. */
export declare enum Field_Kind {
    /** TYPE_UNKNOWN - Field type unknown. */
    TYPE_UNKNOWN = 0,
    /** TYPE_DOUBLE - Field type double. */
    TYPE_DOUBLE = 1,
    /** TYPE_FLOAT - Field type float. */
    TYPE_FLOAT = 2,
    /** TYPE_INT64 - Field type int64. */
    TYPE_INT64 = 3,
    /** TYPE_UINT64 - Field type uint64. */
    TYPE_UINT64 = 4,
    /** TYPE_INT32 - Field type int32. */
    TYPE_INT32 = 5,
    /** TYPE_FIXED64 - Field type fixed64. */
    TYPE_FIXED64 = 6,
    /** TYPE_FIXED32 - Field type fixed32. */
    TYPE_FIXED32 = 7,
    /** TYPE_BOOL - Field type bool. */
    TYPE_BOOL = 8,
    /** TYPE_STRING - Field type string. */
    TYPE_STRING = 9,
    /** TYPE_GROUP - Field type group. Proto2 syntax only, and deprecated. */
    TYPE_GROUP = 10,
    /** TYPE_MESSAGE - Field type message. */
    TYPE_MESSAGE = 11,
    /** TYPE_BYTES - Field type bytes. */
    TYPE_BYTES = 12,
    /** TYPE_UINT32 - Field type uint32. */
    TYPE_UINT32 = 13,
    /** TYPE_ENUM - Field type enum. */
    TYPE_ENUM = 14,
    /** TYPE_SFIXED32 - Field type sfixed32. */
    TYPE_SFIXED32 = 15,
    /** TYPE_SFIXED64 - Field type sfixed64. */
    TYPE_SFIXED64 = 16,
    /** TYPE_SINT32 - Field type sint32. */
    TYPE_SINT32 = 17,
    /** TYPE_SINT64 - Field type sint64. */
    TYPE_SINT64 = 18,
    UNRECOGNIZED = -1
}
export declare function field_KindFromJSON(object: any): Field_Kind;
export declare function field_KindToJSON(object: Field_Kind): string;
/** Whether a field is optional, required, or repeated. */
export declare enum Field_Cardinality {
    /** CARDINALITY_UNKNOWN - For fields with unknown cardinality. */
    CARDINALITY_UNKNOWN = 0,
    /** CARDINALITY_OPTIONAL - For optional fields. */
    CARDINALITY_OPTIONAL = 1,
    /** CARDINALITY_REQUIRED - For required fields. Proto2 syntax only. */
    CARDINALITY_REQUIRED = 2,
    /** CARDINALITY_REPEATED - For repeated fields. */
    CARDINALITY_REPEATED = 3,
    UNRECOGNIZED = -1
}
export declare function field_CardinalityFromJSON(object: any): Field_Cardinality;
export declare function field_CardinalityToJSON(object: Field_Cardinality): string;
/** The syntax in which a protocol buffer element is defined. */
export declare enum Syntax {
    /** SYNTAX_PROTO2 - Syntax `proto2`. */
    SYNTAX_PROTO2 = 0,
    /** SYNTAX_PROTO3 - Syntax `proto3`. */
    SYNTAX_PROTO3 = 1,
    UNRECOGNIZED = -1
}
export declare function syntaxFromJSON(object: any): Syntax;
export declare function syntaxToJSON(object: Syntax): string;
/** A protocol buffer message type. */
export interface Type {
    /** The fully qualified message name. */
    name: string;
    /** The list of fields. */
    fields: Field[];
    /** The list of types appearing in `oneof` definitions in this type. */
    oneofs: string[];
    /** The protocol buffer options. */
    options: Option[];
    /** The source context. */
    sourceContext: SourceContext;
    /** The source syntax. */
    syntax: Syntax;
}
/** A single field of a message type. */
export interface Field {
    /** The field type. */
    kind: Field_Kind;
    /** The field cardinality. */
    cardinality: Field_Cardinality;
    /** The field number. */
    number: number;
    /** The field name. */
    name: string;
    /**
     * The field type URL, without the scheme, for message or enumeration
     * types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`.
     */
    typeUrl: string;
    /**
     * The index of the field type in `Type.oneofs`, for message or enumeration
     * types. The first type has index 1; zero means the type is not in the list.
     */
    oneofIndex: number;
    /** Whether to use alternative packed wire representation. */
    packed: boolean;
    /** The protocol buffer options. */
    options: Option[];
    /** The field JSON name. */
    jsonName: string;
    /** The string value of the default value of this field. Proto2 syntax only. */
    defaultValue: string;
}
/** Enum type definition. */
export interface Enum {
    /** Enum type name. */
    name: string;
    /** Enum value definitions. */
    enumvalue: EnumValue[];
    /** Protocol buffer options. */
    options: Option[];
    /** The source context. */
    sourceContext: SourceContext;
    /** The source syntax. */
    syntax: Syntax;
}
/** Enum value definition. */
export interface EnumValue {
    /** Enum value name. */
    name: string;
    /** Enum value number. */
    number: number;
    /** Protocol buffer options. */
    options: Option[];
}
/**
 * A protocol buffer option, which can be attached to a message, field,
 * enumeration, etc.
 */
export interface Option {
    /**
     * The option's name. For protobuf built-in options (options defined in
     * descriptor.proto), this is the short name. For example, `"map_entry"`.
     * For custom options, it should be the fully-qualified name. For example,
     * `"google.api.http"`.
     */
    name: string;
    /**
     * The option's value packed in an Any message. If the value is a primitive,
     * the corresponding wrapper type defined in google/protobuf/wrappers.proto
     * should be used. If the value is an enum, it should be stored as an int32
     * value using the google.protobuf.Int32Value type.
     */
    value: Any;
}
export declare const Type: {
    encode(message: Type, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Type;
    fromJSON(object: any): Type;
    toJSON(message: Type): unknown;
    fromPartial<I extends {
        name?: string;
        fields?: {
            kind?: Field_Kind;
            cardinality?: Field_Cardinality;
            number?: number;
            name?: string;
            typeUrl?: string;
            oneofIndex?: number;
            packed?: boolean;
            options?: {
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
            jsonName?: string;
            defaultValue?: string;
        }[];
        oneofs?: string[];
        options?: {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
        sourceContext?: {
            fileName?: string;
        };
        syntax?: Syntax;
    } & {
        name?: string;
        fields?: {
            kind?: Field_Kind;
            cardinality?: Field_Cardinality;
            number?: number;
            name?: string;
            typeUrl?: string;
            oneofIndex?: number;
            packed?: boolean;
            options?: {
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
            jsonName?: string;
            defaultValue?: string;
        }[] & ({
            kind?: Field_Kind;
            cardinality?: Field_Cardinality;
            number?: number;
            name?: string;
            typeUrl?: string;
            oneofIndex?: number;
            packed?: boolean;
            options?: {
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
            jsonName?: string;
            defaultValue?: string;
        } & {
            kind?: Field_Kind;
            cardinality?: Field_Cardinality;
            number?: number;
            name?: string;
            typeUrl?: string;
            oneofIndex?: number;
            packed?: boolean;
            options?: {
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[] & ({
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            } & {
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["fields"][number]["options"][number]["value"], keyof Any>, never>;
            } & Record<Exclude<keyof I["fields"][number]["options"][number], keyof Option>, never>)[] & Record<Exclude<keyof I["fields"][number]["options"], keyof {
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[]>, never>;
            jsonName?: string;
            defaultValue?: string;
        } & Record<Exclude<keyof I["fields"][number], keyof Field>, never>)[] & Record<Exclude<keyof I["fields"], keyof {
            kind?: Field_Kind;
            cardinality?: Field_Cardinality;
            number?: number;
            name?: string;
            typeUrl?: string;
            oneofIndex?: number;
            packed?: boolean;
            options?: {
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
            jsonName?: string;
            defaultValue?: string;
        }[]>, never>;
        oneofs?: string[] & string[] & Record<Exclude<keyof I["oneofs"], keyof string[]>, never>;
        options?: {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[] & ({
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["options"][number]["value"], keyof Any>, never>;
        } & Record<Exclude<keyof I["options"][number], keyof Option>, never>)[] & Record<Exclude<keyof I["options"], keyof {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>, never>;
        sourceContext?: {
            fileName?: string;
        } & {
            fileName?: string;
        } & Record<Exclude<keyof I["sourceContext"], "fileName">, never>;
        syntax?: Syntax;
    } & Record<Exclude<keyof I, keyof Type>, never>>(object: I): Type;
};
export declare const Field: {
    encode(message: Field, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Field;
    fromJSON(object: any): Field;
    toJSON(message: Field): unknown;
    fromPartial<I extends {
        kind?: Field_Kind;
        cardinality?: Field_Cardinality;
        number?: number;
        name?: string;
        typeUrl?: string;
        oneofIndex?: number;
        packed?: boolean;
        options?: {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
        jsonName?: string;
        defaultValue?: string;
    } & {
        kind?: Field_Kind;
        cardinality?: Field_Cardinality;
        number?: number;
        name?: string;
        typeUrl?: string;
        oneofIndex?: number;
        packed?: boolean;
        options?: {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[] & ({
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["options"][number]["value"], keyof Any>, never>;
        } & Record<Exclude<keyof I["options"][number], keyof Option>, never>)[] & Record<Exclude<keyof I["options"], keyof {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>, never>;
        jsonName?: string;
        defaultValue?: string;
    } & Record<Exclude<keyof I, keyof Field>, never>>(object: I): Field;
};
export declare const Enum: {
    encode(message: Enum, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Enum;
    fromJSON(object: any): Enum;
    toJSON(message: Enum): unknown;
    fromPartial<I extends {
        name?: string;
        enumvalue?: {
            name?: string;
            number?: number;
            options?: {
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
        }[];
        options?: {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
        sourceContext?: {
            fileName?: string;
        };
        syntax?: Syntax;
    } & {
        name?: string;
        enumvalue?: {
            name?: string;
            number?: number;
            options?: {
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
        }[] & ({
            name?: string;
            number?: number;
            options?: {
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
        } & {
            name?: string;
            number?: number;
            options?: {
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[] & ({
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            } & {
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["enumvalue"][number]["options"][number]["value"], keyof Any>, never>;
            } & Record<Exclude<keyof I["enumvalue"][number]["options"][number], keyof Option>, never>)[] & Record<Exclude<keyof I["enumvalue"][number]["options"], keyof {
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[]>, never>;
        } & Record<Exclude<keyof I["enumvalue"][number], keyof EnumValue>, never>)[] & Record<Exclude<keyof I["enumvalue"], keyof {
            name?: string;
            number?: number;
            options?: {
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
        }[]>, never>;
        options?: {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[] & ({
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["options"][number]["value"], keyof Any>, never>;
        } & Record<Exclude<keyof I["options"][number], keyof Option>, never>)[] & Record<Exclude<keyof I["options"], keyof {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>, never>;
        sourceContext?: {
            fileName?: string;
        } & {
            fileName?: string;
        } & Record<Exclude<keyof I["sourceContext"], "fileName">, never>;
        syntax?: Syntax;
    } & Record<Exclude<keyof I, keyof Enum>, never>>(object: I): Enum;
};
export declare const EnumValue: {
    encode(message: EnumValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnumValue;
    fromJSON(object: any): EnumValue;
    toJSON(message: EnumValue): unknown;
    fromPartial<I extends {
        name?: string;
        number?: number;
        options?: {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
    } & {
        name?: string;
        number?: number;
        options?: {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[] & ({
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["options"][number]["value"], keyof Any>, never>;
        } & Record<Exclude<keyof I["options"][number], keyof Option>, never>)[] & Record<Exclude<keyof I["options"], keyof {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof EnumValue>, never>>(object: I): EnumValue;
};
export declare const Option: {
    encode(message: Option, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Option;
    fromJSON(object: any): Option;
    toJSON(message: Option): unknown;
    fromPartial<I extends {
        name?: string;
        value?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        name?: string;
        value?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["value"], keyof Any>, never>;
    } & Record<Exclude<keyof I, keyof Option>, never>>(object: I): Option;
};
