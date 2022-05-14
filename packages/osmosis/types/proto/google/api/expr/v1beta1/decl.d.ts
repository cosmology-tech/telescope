import { Expr } from "./expr";
import * as _m0 from "protobufjs/minimal";
/** A declaration. */
export interface Decl {
    /** The id of the declaration. */
    id: number;
    /** The name of the declaration. */
    name: string;
    /** The documentation string for the declaration. */
    doc: string;
    /** An identifier declaration. */
    ident?: IdentDecl;
    /** A function declaration. */
    function?: FunctionDecl;
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
    fromPartial<I extends {
        id?: number;
        name?: string;
        doc?: string;
        ident?: {
            type?: {
                id?: number;
                type?: string;
                typeParams?: any[];
            };
            value?: {
                id?: number;
                literalExpr?: {
                    nullValue?: import("../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                };
                identExpr?: {
                    name?: string;
                };
                selectExpr?: {
                    operand?: any;
                    field?: string;
                    testOnly?: boolean;
                };
                callExpr?: {
                    target?: any;
                    function?: string;
                    args?: any[];
                };
                listExpr?: {
                    elements?: any[];
                };
                structExpr?: {
                    type?: string;
                    entries?: {
                        id?: number;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[];
                };
                comprehensionExpr?: {
                    iterVar?: string;
                    iterRange?: any;
                    accuVar?: string;
                    accuInit?: any;
                    loopCondition?: any;
                    loopStep?: any;
                    result?: any;
                };
            };
        };
        function?: {
            args?: {
                type?: {
                    id?: number;
                    type?: string;
                    typeParams?: any[];
                };
                value?: {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    };
                    identExpr?: {
                        name?: string;
                    };
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    };
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    };
                    listExpr?: {
                        elements?: any[];
                    };
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    };
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    };
                };
            }[];
            returnType?: {
                id?: number;
                type?: string;
                typeParams?: any[];
            };
            receiverFunction?: boolean;
        };
    } & {
        id?: number;
        name?: string;
        doc?: string;
        ident?: {
            type?: {
                id?: number;
                type?: string;
                typeParams?: any[];
            };
            value?: {
                id?: number;
                literalExpr?: {
                    nullValue?: import("../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                };
                identExpr?: {
                    name?: string;
                };
                selectExpr?: {
                    operand?: any;
                    field?: string;
                    testOnly?: boolean;
                };
                callExpr?: {
                    target?: any;
                    function?: string;
                    args?: any[];
                };
                listExpr?: {
                    elements?: any[];
                };
                structExpr?: {
                    type?: string;
                    entries?: {
                        id?: number;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[];
                };
                comprehensionExpr?: {
                    iterVar?: string;
                    iterRange?: any;
                    accuVar?: string;
                    accuInit?: any;
                    loopCondition?: any;
                    loopStep?: any;
                    result?: any;
                };
            };
        } & {
            type?: {
                id?: number;
                type?: string;
                typeParams?: any[];
            } & {
                id?: number;
                type?: string;
                typeParams?: any[] & ({
                    id?: number;
                    type?: string;
                    typeParams?: any[];
                } & {
                    id?: number;
                    type?: string;
                    typeParams?: any[] & ({
                        id?: number;
                        type?: string;
                        typeParams?: any[];
                    } & {
                        id?: number;
                        type?: string;
                        typeParams?: any[] & ({
                            id?: number;
                            type?: string;
                            typeParams?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["type"]["typeParams"][number]["typeParams"][number]["typeParams"][number], keyof DeclType>, never>)[] & Record<Exclude<keyof I["ident"]["type"]["typeParams"][number]["typeParams"][number]["typeParams"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["ident"]["type"]["typeParams"][number]["typeParams"][number], keyof DeclType>, never>)[] & Record<Exclude<keyof I["ident"]["type"]["typeParams"][number]["typeParams"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["ident"]["type"]["typeParams"][number], keyof DeclType>, never>)[] & Record<Exclude<keyof I["ident"]["type"]["typeParams"], keyof any[]>, never>;
            } & Record<Exclude<keyof I["ident"]["type"], keyof DeclType>, never>;
            value?: {
                id?: number;
                literalExpr?: {
                    nullValue?: import("../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                };
                identExpr?: {
                    name?: string;
                };
                selectExpr?: {
                    operand?: any;
                    field?: string;
                    testOnly?: boolean;
                };
                callExpr?: {
                    target?: any;
                    function?: string;
                    args?: any[];
                };
                listExpr?: {
                    elements?: any[];
                };
                structExpr?: {
                    type?: string;
                    entries?: {
                        id?: number;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[];
                };
                comprehensionExpr?: {
                    iterVar?: string;
                    iterRange?: any;
                    accuVar?: string;
                    accuInit?: any;
                    loopCondition?: any;
                    loopStep?: any;
                    result?: any;
                };
            } & {
                id?: number;
                literalExpr?: {
                    nullValue?: import("../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                } & {
                    nullValue?: import("../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                } & Record<Exclude<keyof I["ident"]["value"]["literalExpr"], keyof import("./expr").Literal>, never>;
                identExpr?: {
                    name?: string;
                } & {
                    name?: string;
                } & Record<Exclude<keyof I["ident"]["value"]["identExpr"], "name">, never>;
                selectExpr?: {
                    operand?: any;
                    field?: string;
                    testOnly?: boolean;
                } & {
                    operand?: {
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        };
                        identExpr?: {
                            name?: string;
                        };
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        };
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        };
                        listExpr?: {
                            elements?: any[];
                        };
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        };
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        };
                    } & {
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["selectExpr"]["operand"]["literalExpr"], keyof import("./expr").Literal>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["selectExpr"]["operand"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["selectExpr"]["operand"]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["selectExpr"]["operand"]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["selectExpr"]["operand"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["selectExpr"]["operand"]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["selectExpr"]["operand"]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["ident"]["value"]["selectExpr"]["operand"], keyof Expr>, never>;
                    field?: string;
                    testOnly?: boolean;
                } & Record<Exclude<keyof I["ident"]["value"]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                callExpr?: {
                    target?: any;
                    function?: string;
                    args?: any[];
                } & {
                    target?: {
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        };
                        identExpr?: {
                            name?: string;
                        };
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        };
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        };
                        listExpr?: {
                            elements?: any[];
                        };
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        };
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        };
                    } & {
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["callExpr"]["target"]["literalExpr"], keyof import("./expr").Literal>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["callExpr"]["target"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["callExpr"]["target"]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["callExpr"]["target"]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["callExpr"]["target"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["callExpr"]["target"]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["callExpr"]["target"]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["ident"]["value"]["callExpr"]["target"], keyof Expr>, never>;
                    function?: string;
                    args?: any[] & ({
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        };
                        identExpr?: {
                            name?: string;
                        };
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        };
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        };
                        listExpr?: {
                            elements?: any[];
                        };
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        };
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        };
                    } & {
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["callExpr"]["args"][number]["literalExpr"], keyof import("./expr").Literal>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["callExpr"]["args"][number]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["callExpr"]["args"][number]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["callExpr"]["args"][number]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["callExpr"]["args"][number]["listExpr"], "elements">, never>;
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["callExpr"]["args"][number]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["callExpr"]["args"][number]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["ident"]["value"]["callExpr"]["args"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["ident"]["value"]["callExpr"]["args"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["ident"]["value"]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                listExpr?: {
                    elements?: any[];
                } & {
                    elements?: any[] & ({
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        };
                        identExpr?: {
                            name?: string;
                        };
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        };
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        };
                        listExpr?: {
                            elements?: any[];
                        };
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        };
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        };
                    } & {
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["listExpr"]["elements"][number]["literalExpr"], keyof import("./expr").Literal>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["listExpr"]["elements"][number]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["listExpr"]["elements"][number]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["listExpr"]["elements"][number]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["listExpr"]["elements"][number]["listExpr"], "elements">, never>;
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["listExpr"]["elements"][number]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["listExpr"]["elements"][number]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["ident"]["value"]["listExpr"]["elements"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["ident"]["value"]["listExpr"]["elements"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["ident"]["value"]["listExpr"], "elements">, never>;
                structExpr?: {
                    type?: string;
                    entries?: {
                        id?: number;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[];
                } & {
                    type?: string;
                    entries?: {
                        id?: number;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[] & ({
                        id?: number;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    } & {
                        id?: number;
                        fieldKey?: string;
                        mapKey?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["structExpr"]["entries"][number]["mapKey"], keyof Expr>, never>;
                        value?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["structExpr"]["entries"][number]["value"], keyof Expr>, never>;
                    } & Record<Exclude<keyof I["ident"]["value"]["structExpr"]["entries"][number], keyof import("./expr").Expr_CreateStruct_Entry>, never>)[] & Record<Exclude<keyof I["ident"]["value"]["structExpr"]["entries"], keyof {
                        id?: number;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I["ident"]["value"]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                comprehensionExpr?: {
                    iterVar?: string;
                    iterRange?: any;
                    accuVar?: string;
                    accuInit?: any;
                    loopCondition?: any;
                    loopStep?: any;
                    result?: any;
                } & {
                    iterVar?: string;
                    iterRange?: {
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        };
                        identExpr?: {
                            name?: string;
                        };
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        };
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        };
                        listExpr?: {
                            elements?: any[];
                        };
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        };
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        };
                    } & {
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["iterRange"]["literalExpr"], keyof import("./expr").Literal>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["iterRange"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["iterRange"]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["iterRange"]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["iterRange"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["iterRange"]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["iterRange"]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["iterRange"], keyof Expr>, never>;
                    accuVar?: string;
                    accuInit?: {
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        };
                        identExpr?: {
                            name?: string;
                        };
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        };
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        };
                        listExpr?: {
                            elements?: any[];
                        };
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        };
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        };
                    } & {
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["accuInit"]["literalExpr"], keyof import("./expr").Literal>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["accuInit"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["accuInit"]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["accuInit"]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["accuInit"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["accuInit"]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["accuInit"]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["accuInit"], keyof Expr>, never>;
                    loopCondition?: {
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        };
                        identExpr?: {
                            name?: string;
                        };
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        };
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        };
                        listExpr?: {
                            elements?: any[];
                        };
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        };
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        };
                    } & {
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["loopCondition"]["literalExpr"], keyof import("./expr").Literal>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["loopCondition"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["loopCondition"]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["loopCondition"]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["loopCondition"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["loopCondition"]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["loopCondition"]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["loopCondition"], keyof Expr>, never>;
                    loopStep?: {
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        };
                        identExpr?: {
                            name?: string;
                        };
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        };
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        };
                        listExpr?: {
                            elements?: any[];
                        };
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        };
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        };
                    } & {
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["loopStep"]["literalExpr"], keyof import("./expr").Literal>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["loopStep"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["loopStep"]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["loopStep"]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["loopStep"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["loopStep"]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["loopStep"]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["loopStep"], keyof Expr>, never>;
                    result?: {
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        };
                        identExpr?: {
                            name?: string;
                        };
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        };
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        };
                        listExpr?: {
                            elements?: any[];
                        };
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        };
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        };
                    } & {
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["result"]["literalExpr"], keyof import("./expr").Literal>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["result"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["result"]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["result"]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["result"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["result"]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["result"]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"]["result"], keyof Expr>, never>;
                } & Record<Exclude<keyof I["ident"]["value"]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
            } & Record<Exclude<keyof I["ident"]["value"], keyof Expr>, never>;
        } & Record<Exclude<keyof I["ident"], keyof IdentDecl>, never>;
        function?: {
            args?: {
                type?: {
                    id?: number;
                    type?: string;
                    typeParams?: any[];
                };
                value?: {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    };
                    identExpr?: {
                        name?: string;
                    };
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    };
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    };
                    listExpr?: {
                        elements?: any[];
                    };
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    };
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    };
                };
            }[];
            returnType?: {
                id?: number;
                type?: string;
                typeParams?: any[];
            };
            receiverFunction?: boolean;
        } & {
            args?: {
                type?: {
                    id?: number;
                    type?: string;
                    typeParams?: any[];
                };
                value?: {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    };
                    identExpr?: {
                        name?: string;
                    };
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    };
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    };
                    listExpr?: {
                        elements?: any[];
                    };
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    };
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    };
                };
            }[] & ({
                type?: {
                    id?: number;
                    type?: string;
                    typeParams?: any[];
                };
                value?: {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    };
                    identExpr?: {
                        name?: string;
                    };
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    };
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    };
                    listExpr?: {
                        elements?: any[];
                    };
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    };
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    };
                };
            } & {
                type?: {
                    id?: number;
                    type?: string;
                    typeParams?: any[];
                } & {
                    id?: number;
                    type?: string;
                    typeParams?: any[] & ({
                        id?: number;
                        type?: string;
                        typeParams?: any[];
                    } & {
                        id?: number;
                        type?: string;
                        typeParams?: any[] & ({
                            id?: number;
                            type?: string;
                            typeParams?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["function"]["args"][number]["type"]["typeParams"][number]["typeParams"][number], keyof DeclType>, never>)[] & Record<Exclude<keyof I["function"]["args"][number]["type"]["typeParams"][number]["typeParams"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["function"]["args"][number]["type"]["typeParams"][number], keyof DeclType>, never>)[] & Record<Exclude<keyof I["function"]["args"][number]["type"]["typeParams"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["function"]["args"][number]["type"], keyof DeclType>, never>;
                value?: {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    };
                    identExpr?: {
                        name?: string;
                    };
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    };
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    };
                    listExpr?: {
                        elements?: any[];
                    };
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    };
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    };
                } & {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    } & {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    } & Record<Exclude<keyof I["function"]["args"][number]["value"]["literalExpr"], keyof import("./expr").Literal>, never>;
                    identExpr?: {
                        name?: string;
                    } & {
                        name?: string;
                    } & Record<Exclude<keyof I["function"]["args"][number]["value"]["identExpr"], "name">, never>;
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    } & {
                        operand?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["function"]["args"][number]["value"]["selectExpr"]["operand"], keyof Expr>, never>;
                        field?: string;
                        testOnly?: boolean;
                    } & Record<Exclude<keyof I["function"]["args"][number]["value"]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    } & {
                        target?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["function"]["args"][number]["value"]["callExpr"]["target"], keyof Expr>, never>;
                        function?: string;
                        args?: any[] & ({
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["function"]["args"][number]["value"]["callExpr"]["args"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["function"]["args"][number]["value"]["callExpr"]["args"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["function"]["args"][number]["value"]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                    listExpr?: {
                        elements?: any[];
                    } & {
                        elements?: any[] & ({
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["function"]["args"][number]["value"]["listExpr"]["elements"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["function"]["args"][number]["value"]["listExpr"]["elements"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["function"]["args"][number]["value"]["listExpr"], "elements">, never>;
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    } & {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[] & ({
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["function"]["args"][number]["value"]["structExpr"]["entries"][number], keyof import("./expr").Expr_CreateStruct_Entry>, never>)[] & Record<Exclude<keyof I["function"]["args"][number]["value"]["structExpr"]["entries"], keyof {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["function"]["args"][number]["value"]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    } & {
                        iterVar?: string;
                        iterRange?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["function"]["args"][number]["value"]["comprehensionExpr"]["iterRange"], keyof Expr>, never>;
                        accuVar?: string;
                        accuInit?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["function"]["args"][number]["value"]["comprehensionExpr"]["accuInit"], keyof Expr>, never>;
                        loopCondition?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["function"]["args"][number]["value"]["comprehensionExpr"]["loopCondition"], keyof Expr>, never>;
                        loopStep?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["function"]["args"][number]["value"]["comprehensionExpr"]["loopStep"], keyof Expr>, never>;
                        result?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["function"]["args"][number]["value"]["comprehensionExpr"]["result"], keyof Expr>, never>;
                    } & Record<Exclude<keyof I["function"]["args"][number]["value"]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
                } & Record<Exclude<keyof I["function"]["args"][number]["value"], keyof Expr>, never>;
            } & Record<Exclude<keyof I["function"]["args"][number], keyof IdentDecl>, never>)[] & Record<Exclude<keyof I["function"]["args"], keyof {
                type?: {
                    id?: number;
                    type?: string;
                    typeParams?: any[];
                };
                value?: {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    };
                    identExpr?: {
                        name?: string;
                    };
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    };
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    };
                    listExpr?: {
                        elements?: any[];
                    };
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    };
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    };
                };
            }[]>, never>;
            returnType?: {
                id?: number;
                type?: string;
                typeParams?: any[];
            } & {
                id?: number;
                type?: string;
                typeParams?: any[] & ({
                    id?: number;
                    type?: string;
                    typeParams?: any[];
                } & {
                    id?: number;
                    type?: string;
                    typeParams?: any[] & ({
                        id?: number;
                        type?: string;
                        typeParams?: any[];
                    } & {
                        id?: number;
                        type?: string;
                        typeParams?: any[] & ({
                            id?: number;
                            type?: string;
                            typeParams?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["function"]["returnType"]["typeParams"][number]["typeParams"][number]["typeParams"][number], keyof DeclType>, never>)[] & Record<Exclude<keyof I["function"]["returnType"]["typeParams"][number]["typeParams"][number]["typeParams"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["function"]["returnType"]["typeParams"][number]["typeParams"][number], keyof DeclType>, never>)[] & Record<Exclude<keyof I["function"]["returnType"]["typeParams"][number]["typeParams"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["function"]["returnType"]["typeParams"][number], keyof DeclType>, never>)[] & Record<Exclude<keyof I["function"]["returnType"]["typeParams"], keyof any[]>, never>;
            } & Record<Exclude<keyof I["function"]["returnType"], keyof DeclType>, never>;
            receiverFunction?: boolean;
        } & Record<Exclude<keyof I["function"], keyof FunctionDecl>, never>;
    } & Record<Exclude<keyof I, keyof Decl>, never>>(object: I): Decl;
};
export declare const DeclType: {
    encode(message: DeclType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeclType;
    fromJSON(object: any): DeclType;
    toJSON(message: DeclType): unknown;
    fromPartial<I extends {
        id?: number;
        type?: string;
        typeParams?: any[];
    } & {
        id?: number;
        type?: string;
        typeParams?: any[] & ({
            id?: number;
            type?: string;
            typeParams?: any[];
        } & {
            id?: number;
            type?: string;
            typeParams?: any[] & ({
                id?: number;
                type?: string;
                typeParams?: any[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["typeParams"][number]["typeParams"][number], keyof DeclType>, never>)[] & Record<Exclude<keyof I["typeParams"][number]["typeParams"], keyof any[]>, never>;
        } & Record<Exclude<keyof I["typeParams"][number], keyof DeclType>, never>)[] & Record<Exclude<keyof I["typeParams"], keyof any[]>, never>;
    } & Record<Exclude<keyof I, keyof DeclType>, never>>(object: I): DeclType;
};
export declare const IdentDecl: {
    encode(message: IdentDecl, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdentDecl;
    fromJSON(object: any): IdentDecl;
    toJSON(message: IdentDecl): unknown;
    fromPartial<I extends {
        type?: {
            id?: number;
            type?: string;
            typeParams?: any[];
        };
        value?: {
            id?: number;
            literalExpr?: {
                nullValue?: import("../../../protobuf/struct").NullValue;
                boolValue?: boolean;
                int64Value?: any;
                uint64Value?: any;
                doubleValue?: number;
                stringValue?: string;
                bytesValue?: Uint8Array;
            };
            identExpr?: {
                name?: string;
            };
            selectExpr?: {
                operand?: any;
                field?: string;
                testOnly?: boolean;
            };
            callExpr?: {
                target?: any;
                function?: string;
                args?: any[];
            };
            listExpr?: {
                elements?: any[];
            };
            structExpr?: {
                type?: string;
                entries?: {
                    id?: number;
                    fieldKey?: string;
                    mapKey?: any;
                    value?: any;
                }[];
            };
            comprehensionExpr?: {
                iterVar?: string;
                iterRange?: any;
                accuVar?: string;
                accuInit?: any;
                loopCondition?: any;
                loopStep?: any;
                result?: any;
            };
        };
    } & {
        type?: {
            id?: number;
            type?: string;
            typeParams?: any[];
        } & {
            id?: number;
            type?: string;
            typeParams?: any[] & ({
                id?: number;
                type?: string;
                typeParams?: any[];
            } & {
                id?: number;
                type?: string;
                typeParams?: any[] & ({
                    id?: number;
                    type?: string;
                    typeParams?: any[];
                } & {
                    id?: number;
                    type?: string;
                    typeParams?: any[] & ({
                        id?: number;
                        type?: string;
                        typeParams?: any[];
                    } & {
                        [x: string]: any;
                    } & Record<Exclude<keyof I["type"]["typeParams"][number]["typeParams"][number]["typeParams"][number], keyof DeclType>, never>)[] & Record<Exclude<keyof I["type"]["typeParams"][number]["typeParams"][number]["typeParams"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["type"]["typeParams"][number]["typeParams"][number], keyof DeclType>, never>)[] & Record<Exclude<keyof I["type"]["typeParams"][number]["typeParams"], keyof any[]>, never>;
            } & Record<Exclude<keyof I["type"]["typeParams"][number], keyof DeclType>, never>)[] & Record<Exclude<keyof I["type"]["typeParams"], keyof any[]>, never>;
        } & Record<Exclude<keyof I["type"], keyof DeclType>, never>;
        value?: {
            id?: number;
            literalExpr?: {
                nullValue?: import("../../../protobuf/struct").NullValue;
                boolValue?: boolean;
                int64Value?: any;
                uint64Value?: any;
                doubleValue?: number;
                stringValue?: string;
                bytesValue?: Uint8Array;
            };
            identExpr?: {
                name?: string;
            };
            selectExpr?: {
                operand?: any;
                field?: string;
                testOnly?: boolean;
            };
            callExpr?: {
                target?: any;
                function?: string;
                args?: any[];
            };
            listExpr?: {
                elements?: any[];
            };
            structExpr?: {
                type?: string;
                entries?: {
                    id?: number;
                    fieldKey?: string;
                    mapKey?: any;
                    value?: any;
                }[];
            };
            comprehensionExpr?: {
                iterVar?: string;
                iterRange?: any;
                accuVar?: string;
                accuInit?: any;
                loopCondition?: any;
                loopStep?: any;
                result?: any;
            };
        } & {
            id?: number;
            literalExpr?: {
                nullValue?: import("../../../protobuf/struct").NullValue;
                boolValue?: boolean;
                int64Value?: any;
                uint64Value?: any;
                doubleValue?: number;
                stringValue?: string;
                bytesValue?: Uint8Array;
            } & {
                nullValue?: import("../../../protobuf/struct").NullValue;
                boolValue?: boolean;
                int64Value?: any;
                uint64Value?: any;
                doubleValue?: number;
                stringValue?: string;
                bytesValue?: Uint8Array;
            } & Record<Exclude<keyof I["value"]["literalExpr"], keyof import("./expr").Literal>, never>;
            identExpr?: {
                name?: string;
            } & {
                name?: string;
            } & Record<Exclude<keyof I["value"]["identExpr"], "name">, never>;
            selectExpr?: {
                operand?: any;
                field?: string;
                testOnly?: boolean;
            } & {
                operand?: {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    };
                    identExpr?: {
                        name?: string;
                    };
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    };
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    };
                    listExpr?: {
                        elements?: any[];
                    };
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    };
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    };
                } & {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    } & {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    } & Record<Exclude<keyof I["value"]["selectExpr"]["operand"]["literalExpr"], keyof import("./expr").Literal>, never>;
                    identExpr?: {
                        name?: string;
                    } & {
                        name?: string;
                    } & Record<Exclude<keyof I["value"]["selectExpr"]["operand"]["identExpr"], "name">, never>;
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    } & {
                        operand?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["selectExpr"]["operand"]["selectExpr"]["operand"], keyof Expr>, never>;
                        field?: string;
                        testOnly?: boolean;
                    } & Record<Exclude<keyof I["value"]["selectExpr"]["operand"]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    } & {
                        target?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["selectExpr"]["operand"]["callExpr"]["target"], keyof Expr>, never>;
                        function?: string;
                        args?: any[] & ({
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["selectExpr"]["operand"]["callExpr"]["args"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["value"]["selectExpr"]["operand"]["callExpr"]["args"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["value"]["selectExpr"]["operand"]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                    listExpr?: {
                        elements?: any[];
                    } & {
                        elements?: any[] & ({
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["selectExpr"]["operand"]["listExpr"]["elements"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["value"]["selectExpr"]["operand"]["listExpr"]["elements"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["value"]["selectExpr"]["operand"]["listExpr"], "elements">, never>;
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    } & {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[] & ({
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["selectExpr"]["operand"]["structExpr"]["entries"][number], keyof import("./expr").Expr_CreateStruct_Entry>, never>)[] & Record<Exclude<keyof I["value"]["selectExpr"]["operand"]["structExpr"]["entries"], keyof {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["value"]["selectExpr"]["operand"]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    } & {
                        iterVar?: string;
                        iterRange?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["selectExpr"]["operand"]["comprehensionExpr"]["iterRange"], keyof Expr>, never>;
                        accuVar?: string;
                        accuInit?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["selectExpr"]["operand"]["comprehensionExpr"]["accuInit"], keyof Expr>, never>;
                        loopCondition?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["selectExpr"]["operand"]["comprehensionExpr"]["loopCondition"], keyof Expr>, never>;
                        loopStep?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["selectExpr"]["operand"]["comprehensionExpr"]["loopStep"], keyof Expr>, never>;
                        result?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["selectExpr"]["operand"]["comprehensionExpr"]["result"], keyof Expr>, never>;
                    } & Record<Exclude<keyof I["value"]["selectExpr"]["operand"]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
                } & Record<Exclude<keyof I["value"]["selectExpr"]["operand"], keyof Expr>, never>;
                field?: string;
                testOnly?: boolean;
            } & Record<Exclude<keyof I["value"]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
            callExpr?: {
                target?: any;
                function?: string;
                args?: any[];
            } & {
                target?: {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    };
                    identExpr?: {
                        name?: string;
                    };
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    };
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    };
                    listExpr?: {
                        elements?: any[];
                    };
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    };
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    };
                } & {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    } & {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    } & Record<Exclude<keyof I["value"]["callExpr"]["target"]["literalExpr"], keyof import("./expr").Literal>, never>;
                    identExpr?: {
                        name?: string;
                    } & {
                        name?: string;
                    } & Record<Exclude<keyof I["value"]["callExpr"]["target"]["identExpr"], "name">, never>;
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    } & {
                        operand?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["callExpr"]["target"]["selectExpr"]["operand"], keyof Expr>, never>;
                        field?: string;
                        testOnly?: boolean;
                    } & Record<Exclude<keyof I["value"]["callExpr"]["target"]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    } & {
                        target?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["callExpr"]["target"]["callExpr"]["target"], keyof Expr>, never>;
                        function?: string;
                        args?: any[] & ({
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["callExpr"]["target"]["callExpr"]["args"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["value"]["callExpr"]["target"]["callExpr"]["args"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["value"]["callExpr"]["target"]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                    listExpr?: {
                        elements?: any[];
                    } & {
                        elements?: any[] & ({
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["callExpr"]["target"]["listExpr"]["elements"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["value"]["callExpr"]["target"]["listExpr"]["elements"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["value"]["callExpr"]["target"]["listExpr"], "elements">, never>;
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    } & {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[] & ({
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["callExpr"]["target"]["structExpr"]["entries"][number], keyof import("./expr").Expr_CreateStruct_Entry>, never>)[] & Record<Exclude<keyof I["value"]["callExpr"]["target"]["structExpr"]["entries"], keyof {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["value"]["callExpr"]["target"]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    } & {
                        iterVar?: string;
                        iterRange?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["callExpr"]["target"]["comprehensionExpr"]["iterRange"], keyof Expr>, never>;
                        accuVar?: string;
                        accuInit?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["callExpr"]["target"]["comprehensionExpr"]["accuInit"], keyof Expr>, never>;
                        loopCondition?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["callExpr"]["target"]["comprehensionExpr"]["loopCondition"], keyof Expr>, never>;
                        loopStep?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["callExpr"]["target"]["comprehensionExpr"]["loopStep"], keyof Expr>, never>;
                        result?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["callExpr"]["target"]["comprehensionExpr"]["result"], keyof Expr>, never>;
                    } & Record<Exclude<keyof I["value"]["callExpr"]["target"]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
                } & Record<Exclude<keyof I["value"]["callExpr"]["target"], keyof Expr>, never>;
                function?: string;
                args?: any[] & ({
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    };
                    identExpr?: {
                        name?: string;
                    };
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    };
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    };
                    listExpr?: {
                        elements?: any[];
                    };
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    };
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    };
                } & {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    } & {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    } & Record<Exclude<keyof I["value"]["callExpr"]["args"][number]["literalExpr"], keyof import("./expr").Literal>, never>;
                    identExpr?: {
                        name?: string;
                    } & {
                        name?: string;
                    } & Record<Exclude<keyof I["value"]["callExpr"]["args"][number]["identExpr"], "name">, never>;
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    } & {
                        operand?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["callExpr"]["args"][number]["selectExpr"]["operand"], keyof Expr>, never>;
                        field?: string;
                        testOnly?: boolean;
                    } & Record<Exclude<keyof I["value"]["callExpr"]["args"][number]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    } & {
                        target?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["callExpr"]["args"][number]["callExpr"]["target"], keyof Expr>, never>;
                        function?: string;
                        args?: any[] & ({
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["callExpr"]["args"][number]["callExpr"]["args"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["value"]["callExpr"]["args"][number]["callExpr"]["args"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["value"]["callExpr"]["args"][number]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                    listExpr?: {
                        elements?: any[];
                    } & {
                        elements?: any[] & ({
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["callExpr"]["args"][number]["listExpr"]["elements"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["value"]["callExpr"]["args"][number]["listExpr"]["elements"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["value"]["callExpr"]["args"][number]["listExpr"], "elements">, never>;
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    } & {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[] & ({
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["callExpr"]["args"][number]["structExpr"]["entries"][number], keyof import("./expr").Expr_CreateStruct_Entry>, never>)[] & Record<Exclude<keyof I["value"]["callExpr"]["args"][number]["structExpr"]["entries"], keyof {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["value"]["callExpr"]["args"][number]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    } & {
                        iterVar?: string;
                        iterRange?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["callExpr"]["args"][number]["comprehensionExpr"]["iterRange"], keyof Expr>, never>;
                        accuVar?: string;
                        accuInit?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["callExpr"]["args"][number]["comprehensionExpr"]["accuInit"], keyof Expr>, never>;
                        loopCondition?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["callExpr"]["args"][number]["comprehensionExpr"]["loopCondition"], keyof Expr>, never>;
                        loopStep?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["callExpr"]["args"][number]["comprehensionExpr"]["loopStep"], keyof Expr>, never>;
                        result?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["callExpr"]["args"][number]["comprehensionExpr"]["result"], keyof Expr>, never>;
                    } & Record<Exclude<keyof I["value"]["callExpr"]["args"][number]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
                } & Record<Exclude<keyof I["value"]["callExpr"]["args"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["value"]["callExpr"]["args"], keyof any[]>, never>;
            } & Record<Exclude<keyof I["value"]["callExpr"], keyof import("./expr").Expr_Call>, never>;
            listExpr?: {
                elements?: any[];
            } & {
                elements?: any[] & ({
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    };
                    identExpr?: {
                        name?: string;
                    };
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    };
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    };
                    listExpr?: {
                        elements?: any[];
                    };
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    };
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    };
                } & {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    } & {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    } & Record<Exclude<keyof I["value"]["listExpr"]["elements"][number]["literalExpr"], keyof import("./expr").Literal>, never>;
                    identExpr?: {
                        name?: string;
                    } & {
                        name?: string;
                    } & Record<Exclude<keyof I["value"]["listExpr"]["elements"][number]["identExpr"], "name">, never>;
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    } & {
                        operand?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["listExpr"]["elements"][number]["selectExpr"]["operand"], keyof Expr>, never>;
                        field?: string;
                        testOnly?: boolean;
                    } & Record<Exclude<keyof I["value"]["listExpr"]["elements"][number]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    } & {
                        target?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["listExpr"]["elements"][number]["callExpr"]["target"], keyof Expr>, never>;
                        function?: string;
                        args?: any[] & ({
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["listExpr"]["elements"][number]["callExpr"]["args"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["value"]["listExpr"]["elements"][number]["callExpr"]["args"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["value"]["listExpr"]["elements"][number]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                    listExpr?: {
                        elements?: any[];
                    } & {
                        elements?: any[] & ({
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["listExpr"]["elements"][number]["listExpr"]["elements"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["value"]["listExpr"]["elements"][number]["listExpr"]["elements"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["value"]["listExpr"]["elements"][number]["listExpr"], "elements">, never>;
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    } & {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[] & ({
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["listExpr"]["elements"][number]["structExpr"]["entries"][number], keyof import("./expr").Expr_CreateStruct_Entry>, never>)[] & Record<Exclude<keyof I["value"]["listExpr"]["elements"][number]["structExpr"]["entries"], keyof {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["value"]["listExpr"]["elements"][number]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    } & {
                        iterVar?: string;
                        iterRange?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["listExpr"]["elements"][number]["comprehensionExpr"]["iterRange"], keyof Expr>, never>;
                        accuVar?: string;
                        accuInit?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["listExpr"]["elements"][number]["comprehensionExpr"]["accuInit"], keyof Expr>, never>;
                        loopCondition?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["listExpr"]["elements"][number]["comprehensionExpr"]["loopCondition"], keyof Expr>, never>;
                        loopStep?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["listExpr"]["elements"][number]["comprehensionExpr"]["loopStep"], keyof Expr>, never>;
                        result?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["listExpr"]["elements"][number]["comprehensionExpr"]["result"], keyof Expr>, never>;
                    } & Record<Exclude<keyof I["value"]["listExpr"]["elements"][number]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
                } & Record<Exclude<keyof I["value"]["listExpr"]["elements"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["value"]["listExpr"]["elements"], keyof any[]>, never>;
            } & Record<Exclude<keyof I["value"]["listExpr"], "elements">, never>;
            structExpr?: {
                type?: string;
                entries?: {
                    id?: number;
                    fieldKey?: string;
                    mapKey?: any;
                    value?: any;
                }[];
            } & {
                type?: string;
                entries?: {
                    id?: number;
                    fieldKey?: string;
                    mapKey?: any;
                    value?: any;
                }[] & ({
                    id?: number;
                    fieldKey?: string;
                    mapKey?: any;
                    value?: any;
                } & {
                    id?: number;
                    fieldKey?: string;
                    mapKey?: {
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        };
                        identExpr?: {
                            name?: string;
                        };
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        };
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        };
                        listExpr?: {
                            elements?: any[];
                        };
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        };
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        };
                    } & {
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["structExpr"]["entries"][number]["mapKey"]["literalExpr"], keyof import("./expr").Literal>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["structExpr"]["entries"][number]["mapKey"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["structExpr"]["entries"][number]["mapKey"]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["structExpr"]["entries"][number]["mapKey"]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["structExpr"]["entries"][number]["mapKey"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["structExpr"]["entries"][number]["mapKey"]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["structExpr"]["entries"][number]["mapKey"]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["value"]["structExpr"]["entries"][number]["mapKey"], keyof Expr>, never>;
                    value?: {
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        };
                        identExpr?: {
                            name?: string;
                        };
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        };
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        };
                        listExpr?: {
                            elements?: any[];
                        };
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        };
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        };
                    } & {
                        id?: number;
                        literalExpr?: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["structExpr"]["entries"][number]["value"]["literalExpr"], keyof import("./expr").Literal>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["structExpr"]["entries"][number]["value"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["structExpr"]["entries"][number]["value"]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["structExpr"]["entries"][number]["value"]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["structExpr"]["entries"][number]["value"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            type?: string;
                            entries?: {
                                id?: number;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["structExpr"]["entries"][number]["value"]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                        comprehensionExpr?: {
                            iterVar?: string;
                            iterRange?: any;
                            accuVar?: string;
                            accuInit?: any;
                            loopCondition?: any;
                            loopStep?: any;
                            result?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["structExpr"]["entries"][number]["value"]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["value"]["structExpr"]["entries"][number]["value"], keyof Expr>, never>;
                } & Record<Exclude<keyof I["value"]["structExpr"]["entries"][number], keyof import("./expr").Expr_CreateStruct_Entry>, never>)[] & Record<Exclude<keyof I["value"]["structExpr"]["entries"], keyof {
                    id?: number;
                    fieldKey?: string;
                    mapKey?: any;
                    value?: any;
                }[]>, never>;
            } & Record<Exclude<keyof I["value"]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
            comprehensionExpr?: {
                iterVar?: string;
                iterRange?: any;
                accuVar?: string;
                accuInit?: any;
                loopCondition?: any;
                loopStep?: any;
                result?: any;
            } & {
                iterVar?: string;
                iterRange?: {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    };
                    identExpr?: {
                        name?: string;
                    };
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    };
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    };
                    listExpr?: {
                        elements?: any[];
                    };
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    };
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    };
                } & {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    } & {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["iterRange"]["literalExpr"], keyof import("./expr").Literal>, never>;
                    identExpr?: {
                        name?: string;
                    } & {
                        name?: string;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["iterRange"]["identExpr"], "name">, never>;
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    } & {
                        operand?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["iterRange"]["selectExpr"]["operand"], keyof Expr>, never>;
                        field?: string;
                        testOnly?: boolean;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["iterRange"]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    } & {
                        target?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["iterRange"]["callExpr"]["target"], keyof Expr>, never>;
                        function?: string;
                        args?: any[] & ({
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["iterRange"]["callExpr"]["args"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["value"]["comprehensionExpr"]["iterRange"]["callExpr"]["args"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["iterRange"]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                    listExpr?: {
                        elements?: any[];
                    } & {
                        elements?: any[] & ({
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["iterRange"]["listExpr"]["elements"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["value"]["comprehensionExpr"]["iterRange"]["listExpr"]["elements"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["iterRange"]["listExpr"], "elements">, never>;
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    } & {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[] & ({
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["iterRange"]["structExpr"]["entries"][number], keyof import("./expr").Expr_CreateStruct_Entry>, never>)[] & Record<Exclude<keyof I["value"]["comprehensionExpr"]["iterRange"]["structExpr"]["entries"], keyof {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["iterRange"]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    } & {
                        iterVar?: string;
                        iterRange?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["iterRange"]["comprehensionExpr"]["iterRange"], keyof Expr>, never>;
                        accuVar?: string;
                        accuInit?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["iterRange"]["comprehensionExpr"]["accuInit"], keyof Expr>, never>;
                        loopCondition?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["iterRange"]["comprehensionExpr"]["loopCondition"], keyof Expr>, never>;
                        loopStep?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["iterRange"]["comprehensionExpr"]["loopStep"], keyof Expr>, never>;
                        result?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["iterRange"]["comprehensionExpr"]["result"], keyof Expr>, never>;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["iterRange"]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
                } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["iterRange"], keyof Expr>, never>;
                accuVar?: string;
                accuInit?: {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    };
                    identExpr?: {
                        name?: string;
                    };
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    };
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    };
                    listExpr?: {
                        elements?: any[];
                    };
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    };
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    };
                } & {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    } & {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["accuInit"]["literalExpr"], keyof import("./expr").Literal>, never>;
                    identExpr?: {
                        name?: string;
                    } & {
                        name?: string;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["accuInit"]["identExpr"], "name">, never>;
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    } & {
                        operand?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["accuInit"]["selectExpr"]["operand"], keyof Expr>, never>;
                        field?: string;
                        testOnly?: boolean;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["accuInit"]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    } & {
                        target?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["accuInit"]["callExpr"]["target"], keyof Expr>, never>;
                        function?: string;
                        args?: any[] & ({
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["accuInit"]["callExpr"]["args"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["value"]["comprehensionExpr"]["accuInit"]["callExpr"]["args"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["accuInit"]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                    listExpr?: {
                        elements?: any[];
                    } & {
                        elements?: any[] & ({
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["accuInit"]["listExpr"]["elements"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["value"]["comprehensionExpr"]["accuInit"]["listExpr"]["elements"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["accuInit"]["listExpr"], "elements">, never>;
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    } & {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[] & ({
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["accuInit"]["structExpr"]["entries"][number], keyof import("./expr").Expr_CreateStruct_Entry>, never>)[] & Record<Exclude<keyof I["value"]["comprehensionExpr"]["accuInit"]["structExpr"]["entries"], keyof {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["accuInit"]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    } & {
                        iterVar?: string;
                        iterRange?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["accuInit"]["comprehensionExpr"]["iterRange"], keyof Expr>, never>;
                        accuVar?: string;
                        accuInit?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["accuInit"]["comprehensionExpr"]["accuInit"], keyof Expr>, never>;
                        loopCondition?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["accuInit"]["comprehensionExpr"]["loopCondition"], keyof Expr>, never>;
                        loopStep?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["accuInit"]["comprehensionExpr"]["loopStep"], keyof Expr>, never>;
                        result?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["accuInit"]["comprehensionExpr"]["result"], keyof Expr>, never>;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["accuInit"]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
                } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["accuInit"], keyof Expr>, never>;
                loopCondition?: {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    };
                    identExpr?: {
                        name?: string;
                    };
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    };
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    };
                    listExpr?: {
                        elements?: any[];
                    };
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    };
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    };
                } & {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    } & {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopCondition"]["literalExpr"], keyof import("./expr").Literal>, never>;
                    identExpr?: {
                        name?: string;
                    } & {
                        name?: string;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopCondition"]["identExpr"], "name">, never>;
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    } & {
                        operand?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopCondition"]["selectExpr"]["operand"], keyof Expr>, never>;
                        field?: string;
                        testOnly?: boolean;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopCondition"]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    } & {
                        target?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopCondition"]["callExpr"]["target"], keyof Expr>, never>;
                        function?: string;
                        args?: any[] & ({
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopCondition"]["callExpr"]["args"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopCondition"]["callExpr"]["args"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopCondition"]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                    listExpr?: {
                        elements?: any[];
                    } & {
                        elements?: any[] & ({
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopCondition"]["listExpr"]["elements"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopCondition"]["listExpr"]["elements"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopCondition"]["listExpr"], "elements">, never>;
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    } & {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[] & ({
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopCondition"]["structExpr"]["entries"][number], keyof import("./expr").Expr_CreateStruct_Entry>, never>)[] & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopCondition"]["structExpr"]["entries"], keyof {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopCondition"]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    } & {
                        iterVar?: string;
                        iterRange?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopCondition"]["comprehensionExpr"]["iterRange"], keyof Expr>, never>;
                        accuVar?: string;
                        accuInit?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopCondition"]["comprehensionExpr"]["accuInit"], keyof Expr>, never>;
                        loopCondition?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopCondition"]["comprehensionExpr"]["loopCondition"], keyof Expr>, never>;
                        loopStep?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopCondition"]["comprehensionExpr"]["loopStep"], keyof Expr>, never>;
                        result?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopCondition"]["comprehensionExpr"]["result"], keyof Expr>, never>;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopCondition"]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
                } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopCondition"], keyof Expr>, never>;
                loopStep?: {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    };
                    identExpr?: {
                        name?: string;
                    };
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    };
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    };
                    listExpr?: {
                        elements?: any[];
                    };
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    };
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    };
                } & {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    } & {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopStep"]["literalExpr"], keyof import("./expr").Literal>, never>;
                    identExpr?: {
                        name?: string;
                    } & {
                        name?: string;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopStep"]["identExpr"], "name">, never>;
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    } & {
                        operand?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopStep"]["selectExpr"]["operand"], keyof Expr>, never>;
                        field?: string;
                        testOnly?: boolean;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopStep"]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    } & {
                        target?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopStep"]["callExpr"]["target"], keyof Expr>, never>;
                        function?: string;
                        args?: any[] & ({
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopStep"]["callExpr"]["args"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopStep"]["callExpr"]["args"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopStep"]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                    listExpr?: {
                        elements?: any[];
                    } & {
                        elements?: any[] & ({
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopStep"]["listExpr"]["elements"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopStep"]["listExpr"]["elements"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopStep"]["listExpr"], "elements">, never>;
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    } & {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[] & ({
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopStep"]["structExpr"]["entries"][number], keyof import("./expr").Expr_CreateStruct_Entry>, never>)[] & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopStep"]["structExpr"]["entries"], keyof {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopStep"]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    } & {
                        iterVar?: string;
                        iterRange?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopStep"]["comprehensionExpr"]["iterRange"], keyof Expr>, never>;
                        accuVar?: string;
                        accuInit?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopStep"]["comprehensionExpr"]["accuInit"], keyof Expr>, never>;
                        loopCondition?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopStep"]["comprehensionExpr"]["loopCondition"], keyof Expr>, never>;
                        loopStep?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopStep"]["comprehensionExpr"]["loopStep"], keyof Expr>, never>;
                        result?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopStep"]["comprehensionExpr"]["result"], keyof Expr>, never>;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopStep"]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
                } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["loopStep"], keyof Expr>, never>;
                result?: {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    };
                    identExpr?: {
                        name?: string;
                    };
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    };
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    };
                    listExpr?: {
                        elements?: any[];
                    };
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    };
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    };
                } & {
                    id?: number;
                    literalExpr?: {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    } & {
                        nullValue?: import("../../../protobuf/struct").NullValue;
                        boolValue?: boolean;
                        int64Value?: any;
                        uint64Value?: any;
                        doubleValue?: number;
                        stringValue?: string;
                        bytesValue?: Uint8Array;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["result"]["literalExpr"], keyof import("./expr").Literal>, never>;
                    identExpr?: {
                        name?: string;
                    } & {
                        name?: string;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["result"]["identExpr"], "name">, never>;
                    selectExpr?: {
                        operand?: any;
                        field?: string;
                        testOnly?: boolean;
                    } & {
                        operand?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["result"]["selectExpr"]["operand"], keyof Expr>, never>;
                        field?: string;
                        testOnly?: boolean;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["result"]["selectExpr"], keyof import("./expr").Expr_Select>, never>;
                    callExpr?: {
                        target?: any;
                        function?: string;
                        args?: any[];
                    } & {
                        target?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["result"]["callExpr"]["target"], keyof Expr>, never>;
                        function?: string;
                        args?: any[] & ({
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["result"]["callExpr"]["args"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["value"]["comprehensionExpr"]["result"]["callExpr"]["args"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["result"]["callExpr"], keyof import("./expr").Expr_Call>, never>;
                    listExpr?: {
                        elements?: any[];
                    } & {
                        elements?: any[] & ({
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["result"]["listExpr"]["elements"][number], keyof Expr>, never>)[] & Record<Exclude<keyof I["value"]["comprehensionExpr"]["result"]["listExpr"]["elements"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["result"]["listExpr"], "elements">, never>;
                    structExpr?: {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[];
                    } & {
                        type?: string;
                        entries?: {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[] & ({
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["result"]["structExpr"]["entries"][number], keyof import("./expr").Expr_CreateStruct_Entry>, never>)[] & Record<Exclude<keyof I["value"]["comprehensionExpr"]["result"]["structExpr"]["entries"], keyof {
                            id?: number;
                            fieldKey?: string;
                            mapKey?: any;
                            value?: any;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["result"]["structExpr"], keyof import("./expr").Expr_CreateStruct>, never>;
                    comprehensionExpr?: {
                        iterVar?: string;
                        iterRange?: any;
                        accuVar?: string;
                        accuInit?: any;
                        loopCondition?: any;
                        loopStep?: any;
                        result?: any;
                    } & {
                        iterVar?: string;
                        iterRange?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["result"]["comprehensionExpr"]["iterRange"], keyof Expr>, never>;
                        accuVar?: string;
                        accuInit?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["result"]["comprehensionExpr"]["accuInit"], keyof Expr>, never>;
                        loopCondition?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["result"]["comprehensionExpr"]["loopCondition"], keyof Expr>, never>;
                        loopStep?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["result"]["comprehensionExpr"]["loopStep"], keyof Expr>, never>;
                        result?: {
                            id?: number;
                            literalExpr?: {
                                nullValue?: import("../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                            };
                            identExpr?: {
                                name?: string;
                            };
                            selectExpr?: {
                                operand?: any;
                                field?: string;
                                testOnly?: boolean;
                            };
                            callExpr?: {
                                target?: any;
                                function?: string;
                                args?: any[];
                            };
                            listExpr?: {
                                elements?: any[];
                            };
                            structExpr?: {
                                type?: string;
                                entries?: {
                                    id?: number;
                                    fieldKey?: string;
                                    mapKey?: any;
                                    value?: any;
                                }[];
                            };
                            comprehensionExpr?: {
                                iterVar?: string;
                                iterRange?: any;
                                accuVar?: string;
                                accuInit?: any;
                                loopCondition?: any;
                                loopStep?: any;
                                result?: any;
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["result"]["comprehensionExpr"]["result"], keyof Expr>, never>;
                    } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["result"]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
                } & Record<Exclude<keyof I["value"]["comprehensionExpr"]["result"], keyof Expr>, never>;
            } & Record<Exclude<keyof I["value"]["comprehensionExpr"], keyof import("./expr").Expr_Comprehension>, never>;
        } & Record<Exclude<keyof I["value"], keyof Expr>, never>;
    } & Record<Exclude<keyof I, keyof IdentDecl>, never>>(object: I): IdentDecl;
};
export declare const FunctionDecl: {
    encode(message: FunctionDecl, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FunctionDecl;
    fromJSON(object: any): FunctionDecl;
    toJSON(message: FunctionDecl): unknown;
    fromPartial<I extends {
        args?: {
            type?: {
                id?: number;
                type?: string;
                typeParams?: any[];
            };
            value?: {
                id?: number;
                literalExpr?: {
                    nullValue?: import("../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                };
                identExpr?: {
                    name?: string;
                };
                selectExpr?: {
                    operand?: any;
                    field?: string;
                    testOnly?: boolean;
                };
                callExpr?: {
                    target?: any;
                    function?: string;
                    args?: any[];
                };
                listExpr?: {
                    elements?: any[];
                };
                structExpr?: {
                    type?: string;
                    entries?: {
                        id?: number;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[];
                };
                comprehensionExpr?: {
                    iterVar?: string;
                    iterRange?: any;
                    accuVar?: string;
                    accuInit?: any;
                    loopCondition?: any;
                    loopStep?: any;
                    result?: any;
                };
            };
        }[];
        returnType?: {
            id?: number;
            type?: string;
            typeParams?: any[];
        };
        receiverFunction?: boolean;
    } & {
        args?: {
            type?: {
                id?: number;
                type?: string;
                typeParams?: any[];
            };
            value?: {
                id?: number;
                literalExpr?: {
                    nullValue?: import("../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                };
                identExpr?: {
                    name?: string;
                };
                selectExpr?: {
                    operand?: any;
                    field?: string;
                    testOnly?: boolean;
                };
                callExpr?: {
                    target?: any;
                    function?: string;
                    args?: any[];
                };
                listExpr?: {
                    elements?: any[];
                };
                structExpr?: {
                    type?: string;
                    entries?: {
                        id?: number;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[];
                };
                comprehensionExpr?: {
                    iterVar?: string;
                    iterRange?: any;
                    accuVar?: string;
                    accuInit?: any;
                    loopCondition?: any;
                    loopStep?: any;
                    result?: any;
                };
            };
        }[] & ({
            type?: {
                id?: number;
                type?: string;
                typeParams?: any[];
            };
            value?: {
                id?: number;
                literalExpr?: {
                    nullValue?: import("../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                };
                identExpr?: {
                    name?: string;
                };
                selectExpr?: {
                    operand?: any;
                    field?: string;
                    testOnly?: boolean;
                };
                callExpr?: {
                    target?: any;
                    function?: string;
                    args?: any[];
                };
                listExpr?: {
                    elements?: any[];
                };
                structExpr?: {
                    type?: string;
                    entries?: {
                        id?: number;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[];
                };
                comprehensionExpr?: {
                    iterVar?: string;
                    iterRange?: any;
                    accuVar?: string;
                    accuInit?: any;
                    loopCondition?: any;
                    loopStep?: any;
                    result?: any;
                };
            };
        } & {
            type?: {
                id?: number;
                type?: string;
                typeParams?: any[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["args"][number]["type"], keyof DeclType>, never>;
            value?: {
                id?: number;
                literalExpr?: {
                    nullValue?: import("../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                };
                identExpr?: {
                    name?: string;
                };
                selectExpr?: {
                    operand?: any;
                    field?: string;
                    testOnly?: boolean;
                };
                callExpr?: {
                    target?: any;
                    function?: string;
                    args?: any[];
                };
                listExpr?: {
                    elements?: any[];
                };
                structExpr?: {
                    type?: string;
                    entries?: {
                        id?: number;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[];
                };
                comprehensionExpr?: {
                    iterVar?: string;
                    iterRange?: any;
                    accuVar?: string;
                    accuInit?: any;
                    loopCondition?: any;
                    loopStep?: any;
                    result?: any;
                };
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["args"][number]["value"], keyof Expr>, never>;
        } & Record<Exclude<keyof I["args"][number], keyof IdentDecl>, never>)[] & Record<Exclude<keyof I["args"], keyof {
            type?: {
                id?: number;
                type?: string;
                typeParams?: any[];
            };
            value?: {
                id?: number;
                literalExpr?: {
                    nullValue?: import("../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                };
                identExpr?: {
                    name?: string;
                };
                selectExpr?: {
                    operand?: any;
                    field?: string;
                    testOnly?: boolean;
                };
                callExpr?: {
                    target?: any;
                    function?: string;
                    args?: any[];
                };
                listExpr?: {
                    elements?: any[];
                };
                structExpr?: {
                    type?: string;
                    entries?: {
                        id?: number;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[];
                };
                comprehensionExpr?: {
                    iterVar?: string;
                    iterRange?: any;
                    accuVar?: string;
                    accuInit?: any;
                    loopCondition?: any;
                    loopStep?: any;
                    result?: any;
                };
            };
        }[]>, never>;
        returnType?: {
            id?: number;
            type?: string;
            typeParams?: any[];
        } & {
            id?: number;
            type?: string;
            typeParams?: any[] & ({
                id?: number;
                type?: string;
                typeParams?: any[];
            } & {
                id?: number;
                type?: string;
                typeParams?: any[] & ({
                    id?: number;
                    type?: string;
                    typeParams?: any[];
                } & {
                    id?: number;
                    type?: string;
                    typeParams?: any[] & ({
                        id?: number;
                        type?: string;
                        typeParams?: any[];
                    } & {
                        [x: string]: any;
                    } & Record<Exclude<keyof I["returnType"]["typeParams"][number]["typeParams"][number]["typeParams"][number], keyof DeclType>, never>)[] & Record<Exclude<keyof I["returnType"]["typeParams"][number]["typeParams"][number]["typeParams"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["returnType"]["typeParams"][number]["typeParams"][number], keyof DeclType>, never>)[] & Record<Exclude<keyof I["returnType"]["typeParams"][number]["typeParams"], keyof any[]>, never>;
            } & Record<Exclude<keyof I["returnType"]["typeParams"][number], keyof DeclType>, never>)[] & Record<Exclude<keyof I["returnType"]["typeParams"], keyof any[]>, never>;
        } & Record<Exclude<keyof I["returnType"], keyof DeclType>, never>;
        receiverFunction?: boolean;
    } & Record<Exclude<keyof I, keyof FunctionDecl>, never>>(object: I): FunctionDecl;
};
