import { ParsedExpr, SourcePosition } from "../../v1alpha1/syntax";
import { Decl, CheckedExpr } from "../../v1alpha1/checked";
import { ExprValue } from "../../v1alpha1/eval";
import { Status } from "../../../../rpc/status";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** Severities of issues. */
export declare enum IssueDetails_Severity {
    /** SEVERITY_UNSPECIFIED - An unspecified severity. */
    SEVERITY_UNSPECIFIED = 0,
    /**
     * DEPRECATION - Deprecation issue for statements and method that may no longer be
     * supported or maintained.
     */
    DEPRECATION = 1,
    /** WARNING - Warnings such as: unused variables. */
    WARNING = 2,
    /** ERROR - Errors such as: unmatched curly braces or variable redefinition. */
    ERROR = 3,
    UNRECOGNIZED = -1
}
export declare function issueDetails_SeverityFromJSON(object: any): IssueDetails_Severity;
export declare function issueDetails_SeverityToJSON(object: IssueDetails_Severity): string;
/** Request message for the Parse method. */
export interface ParseRequest {
    /** Required. Source text in CEL syntax. */
    celSource: string;
    /** Tag for version of CEL syntax, for future use. */
    syntaxVersion: string;
    /** File or resource for source text, used in [SourceInfo][google.api.SourceInfo]. */
    sourceLocation: string;
    /** Prevent macro expansion.  See "Macros" in Language Defiinition. */
    disableMacros: boolean;
}
/** Response message for the Parse method. */
export interface ParseResponse {
    /** The parsed representation, or unset if parsing failed. */
    parsedExpr: ParsedExpr;
    /** Any number of issues with [StatusDetails][] as the details. */
    issues: Status[];
}
/** Request message for the Check method. */
export interface CheckRequest {
    /** Required. The parsed representation of the CEL program. */
    parsedExpr: ParsedExpr;
    /**
     * Declarations of types for external variables and functions.
     * Required if program uses external variables or functions
     * not in the default environment.
     */
    typeEnv: Decl[];
    /**
     * The protocol buffer context.  See "Name Resolution" in the
     * Language Definition.
     */
    container: string;
    /**
     * If true, use only the declarations in [type_env][google.api.expr.conformance.v1alpha1.CheckRequest.type_env].  If false (default),
     * add declarations for the standard definitions to the type environment.  See
     * "Standard Definitions" in the Language Definition.
     */
    noStdEnv: boolean;
}
/** Response message for the Check method. */
export interface CheckResponse {
    /** The annotated representation, or unset if checking failed. */
    checkedExpr: CheckedExpr;
    /** Any number of issues with [StatusDetails][] as the details. */
    issues: Status[];
}
export interface EvalRequest_BindingsEntry {
    key: string;
    value: ExprValue;
}
/** Request message for the Eval method. */
export interface EvalRequest {
    /** Evaluate based on the parsed representation. */
    parsedExpr?: ParsedExpr;
    /** Evaluate based on the checked representation. */
    checkedExpr?: CheckedExpr;
    /**
     * Bindings for the external variables.  The types SHOULD be compatible
     * with the type environment in [CheckRequest][google.api.expr.conformance.v1alpha1.CheckRequest], if checked.
     */
    bindings: {
        [key: string]: ExprValue;
    };
    /** SHOULD be the same container as used in [CheckRequest][google.api.expr.conformance.v1alpha1.CheckRequest], if checked. */
    container: string;
}
/** Response message for the Eval method. */
export interface EvalResponse {
    /** The execution result, or unset if execution couldn't start. */
    result: ExprValue;
    /**
     * Any number of issues with [StatusDetails][] as the details.
     * Note that CEL execution errors are reified into [ExprValue][].
     * Nevertheless, we'll allow out-of-band issues to be raised,
     * which also makes the replies more regular.
     */
    issues: Status[];
}
/**
 * Warnings or errors in service execution are represented by
 * [google.rpc.Status][google.rpc.Status] messages, with the following message
 * in the details field.
 */
export interface IssueDetails {
    /** The severity of the issue. */
    severity: IssueDetails_Severity;
    /** Position in the source, if known. */
    position: SourcePosition;
    /** Expression ID from [Expr][], 0 if unknown. */
    id: Long;
}
export declare const ParseRequest: {
    encode(message: ParseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParseRequest;
    fromJSON(object: any): ParseRequest;
    toJSON(message: ParseRequest): unknown;
    fromPartial<I extends {
        celSource?: string;
        syntaxVersion?: string;
        sourceLocation?: string;
        disableMacros?: boolean;
    } & {
        celSource?: string;
        syntaxVersion?: string;
        sourceLocation?: string;
        disableMacros?: boolean;
    } & Record<Exclude<keyof I, keyof ParseRequest>, never>>(object: I): ParseRequest;
};
export declare const ParseResponse: {
    encode(message: ParseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParseResponse;
    fromJSON(object: any): ParseResponse;
    toJSON(message: ParseResponse): unknown;
    fromPartial<I extends {
        parsedExpr?: {
            expr?: {
                id?: any;
                constExpr?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
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
                    messageName?: string;
                    entries?: {
                        id?: any;
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
            sourceInfo?: {
                syntaxVersion?: string;
                location?: string;
                lineOffsets?: number[];
                positions?: {};
                macroCalls?: {};
            };
        };
        issues?: {
            code?: number;
            message?: string;
            details?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }[];
    } & {
        parsedExpr?: {
            expr?: {
                id?: any;
                constExpr?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
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
                    messageName?: string;
                    entries?: {
                        id?: any;
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
            sourceInfo?: {
                syntaxVersion?: string;
                location?: string;
                lineOffsets?: number[];
                positions?: {};
                macroCalls?: {};
            };
        } & {
            expr?: {
                id?: any;
                constExpr?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
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
                    messageName?: string;
                    entries?: {
                        id?: any;
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
                id?: any;
                constExpr?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
                } & {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
                } & Record<Exclude<keyof I["parsedExpr"]["expr"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                identExpr?: {
                    name?: string;
                } & {
                    name?: string;
                } & Record<Exclude<keyof I["parsedExpr"]["expr"]["identExpr"], "name">, never>;
                selectExpr?: {
                    operand?: any;
                    field?: string;
                    testOnly?: boolean;
                } & {
                    operand?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    field?: string;
                    testOnly?: boolean;
                } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                callExpr?: {
                    target?: any;
                    function?: string;
                    args?: any[];
                } & {
                    target?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    function?: string;
                    args?: any[] & ({
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number], keyof import("../../v1alpha1/syntax").Expr>, never>)[] & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                listExpr?: {
                    elements?: any[];
                } & {
                    elements?: any[] & ({
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number], keyof import("../../v1alpha1/syntax").Expr>, never>)[] & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"], "elements">, never>;
                structExpr?: {
                    messageName?: string;
                    entries?: {
                        id?: any;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[];
                } & {
                    messageName?: string;
                    entries?: {
                        id?: any;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[] & ({
                        id?: any;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    } & {
                        id?: any;
                        fieldKey?: string;
                        mapKey?: {
                            id?: any;
                            constExpr?: {
                                nullValue?: import("../../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: string;
                                timestampValue?: Date;
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
                                messageName?: string;
                                entries?: {
                                    id?: any;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["structExpr"]["entries"][number]["mapKey"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                        value?: {
                            id?: any;
                            constExpr?: {
                                nullValue?: import("../../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: string;
                                timestampValue?: Date;
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
                                messageName?: string;
                                entries?: {
                                    id?: any;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["structExpr"]["entries"][number]["value"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["structExpr"]["entries"][number], keyof import("../../v1alpha1/syntax").Expr_CreateStruct_Entry>, never>)[] & Record<Exclude<keyof I["parsedExpr"]["expr"]["structExpr"]["entries"], keyof {
                        id?: any;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I["parsedExpr"]["expr"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    accuVar?: string;
                    accuInit?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    loopCondition?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    loopStep?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    result?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
            } & Record<Exclude<keyof I["parsedExpr"]["expr"], keyof import("../../v1alpha1/syntax").Expr>, never>;
            sourceInfo?: {
                syntaxVersion?: string;
                location?: string;
                lineOffsets?: number[];
                positions?: {};
                macroCalls?: {};
            } & {
                syntaxVersion?: string;
                location?: string;
                lineOffsets?: number[] & number[] & Record<Exclude<keyof I["parsedExpr"]["sourceInfo"]["lineOffsets"], keyof number[]>, never>;
                positions?: {} & {} & Record<Exclude<keyof I["parsedExpr"]["sourceInfo"]["positions"], never>, never>;
                macroCalls?: {} & {} & Record<Exclude<keyof I["parsedExpr"]["sourceInfo"]["macroCalls"], never>, never>;
            } & Record<Exclude<keyof I["parsedExpr"]["sourceInfo"], keyof import("../../v1alpha1/syntax").SourceInfo>, never>;
        } & Record<Exclude<keyof I["parsedExpr"], keyof ParsedExpr>, never>;
        issues?: {
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
            } & Record<Exclude<keyof I["issues"][number]["details"][number], keyof import("../../../../protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["issues"][number]["details"], keyof {
                typeUrl?: string;
                value?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["issues"][number], keyof Status>, never>)[] & Record<Exclude<keyof I["issues"], keyof {
            code?: number;
            message?: string;
            details?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof ParseResponse>, never>>(object: I): ParseResponse;
};
export declare const CheckRequest: {
    encode(message: CheckRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckRequest;
    fromJSON(object: any): CheckRequest;
    toJSON(message: CheckRequest): unknown;
    fromPartial<I extends {
        parsedExpr?: {
            expr?: {
                id?: any;
                constExpr?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
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
                    messageName?: string;
                    entries?: {
                        id?: any;
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
            sourceInfo?: {
                syntaxVersion?: string;
                location?: string;
                lineOffsets?: number[];
                positions?: {};
                macroCalls?: {};
            };
        };
        typeEnv?: {
            name?: string;
            ident?: {
                type?: {
                    dyn?: {};
                    null?: import("../../../../protobuf/struct").NullValue;
                    primitive?: import("../../v1alpha1/checked").Type_PrimitiveType;
                    wrapper?: import("../../v1alpha1/checked").Type_PrimitiveType;
                    wellKnown?: import("../../v1alpha1/checked").Type_WellKnownType;
                    listType?: {
                        elemType?: any;
                    };
                    mapType?: {
                        keyType?: any;
                        valueType?: any;
                    };
                    function?: {
                        resultType?: any;
                        argTypes?: any[];
                    };
                    messageType?: string;
                    typeParam?: string;
                    type?: any;
                    error?: {};
                    abstractType?: {
                        name?: string;
                        parameterTypes?: any[];
                    };
                };
                value?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
                };
                doc?: string;
            };
            function?: {
                overloads?: {
                    overloadId?: string;
                    params?: any[];
                    typeParams?: string[];
                    resultType?: {
                        dyn?: {};
                        null?: import("../../../../protobuf/struct").NullValue;
                        primitive?: import("../../v1alpha1/checked").Type_PrimitiveType;
                        wrapper?: import("../../v1alpha1/checked").Type_PrimitiveType;
                        wellKnown?: import("../../v1alpha1/checked").Type_WellKnownType;
                        listType?: {
                            elemType?: any;
                        };
                        mapType?: {
                            keyType?: any;
                            valueType?: any;
                        };
                        function?: {
                            resultType?: any;
                            argTypes?: any[];
                        };
                        messageType?: string;
                        typeParam?: string;
                        type?: any;
                        error?: {};
                        abstractType?: {
                            name?: string;
                            parameterTypes?: any[];
                        };
                    };
                    isInstanceFunction?: boolean;
                    doc?: string;
                }[];
            };
        }[];
        container?: string;
        noStdEnv?: boolean;
    } & {
        parsedExpr?: {
            expr?: {
                id?: any;
                constExpr?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
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
                    messageName?: string;
                    entries?: {
                        id?: any;
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
            sourceInfo?: {
                syntaxVersion?: string;
                location?: string;
                lineOffsets?: number[];
                positions?: {};
                macroCalls?: {};
            };
        } & {
            expr?: {
                id?: any;
                constExpr?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
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
                    messageName?: string;
                    entries?: {
                        id?: any;
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
                id?: any;
                constExpr?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
                } & {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
                } & Record<Exclude<keyof I["parsedExpr"]["expr"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                identExpr?: {
                    name?: string;
                } & {
                    name?: string;
                } & Record<Exclude<keyof I["parsedExpr"]["expr"]["identExpr"], "name">, never>;
                selectExpr?: {
                    operand?: any;
                    field?: string;
                    testOnly?: boolean;
                } & {
                    operand?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    field?: string;
                    testOnly?: boolean;
                } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                callExpr?: {
                    target?: any;
                    function?: string;
                    args?: any[];
                } & {
                    target?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    function?: string;
                    args?: any[] & ({
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number], keyof import("../../v1alpha1/syntax").Expr>, never>)[] & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                listExpr?: {
                    elements?: any[];
                } & {
                    elements?: any[] & ({
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number], keyof import("../../v1alpha1/syntax").Expr>, never>)[] & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"], "elements">, never>;
                structExpr?: {
                    messageName?: string;
                    entries?: {
                        id?: any;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[];
                } & {
                    messageName?: string;
                    entries?: {
                        id?: any;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[] & ({
                        id?: any;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    } & {
                        id?: any;
                        fieldKey?: string;
                        mapKey?: {
                            id?: any;
                            constExpr?: {
                                nullValue?: import("../../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: string;
                                timestampValue?: Date;
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
                                messageName?: string;
                                entries?: {
                                    id?: any;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["structExpr"]["entries"][number]["mapKey"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                        value?: {
                            id?: any;
                            constExpr?: {
                                nullValue?: import("../../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: string;
                                timestampValue?: Date;
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
                                messageName?: string;
                                entries?: {
                                    id?: any;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["structExpr"]["entries"][number]["value"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["structExpr"]["entries"][number], keyof import("../../v1alpha1/syntax").Expr_CreateStruct_Entry>, never>)[] & Record<Exclude<keyof I["parsedExpr"]["expr"]["structExpr"]["entries"], keyof {
                        id?: any;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I["parsedExpr"]["expr"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    accuVar?: string;
                    accuInit?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    loopCondition?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    loopStep?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    result?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
            } & Record<Exclude<keyof I["parsedExpr"]["expr"], keyof import("../../v1alpha1/syntax").Expr>, never>;
            sourceInfo?: {
                syntaxVersion?: string;
                location?: string;
                lineOffsets?: number[];
                positions?: {};
                macroCalls?: {};
            } & {
                syntaxVersion?: string;
                location?: string;
                lineOffsets?: number[] & number[] & Record<Exclude<keyof I["parsedExpr"]["sourceInfo"]["lineOffsets"], keyof number[]>, never>;
                positions?: {} & {} & Record<Exclude<keyof I["parsedExpr"]["sourceInfo"]["positions"], never>, never>;
                macroCalls?: {} & {} & Record<Exclude<keyof I["parsedExpr"]["sourceInfo"]["macroCalls"], never>, never>;
            } & Record<Exclude<keyof I["parsedExpr"]["sourceInfo"], keyof import("../../v1alpha1/syntax").SourceInfo>, never>;
        } & Record<Exclude<keyof I["parsedExpr"], keyof ParsedExpr>, never>;
        typeEnv?: {
            name?: string;
            ident?: {
                type?: {
                    dyn?: {};
                    null?: import("../../../../protobuf/struct").NullValue;
                    primitive?: import("../../v1alpha1/checked").Type_PrimitiveType;
                    wrapper?: import("../../v1alpha1/checked").Type_PrimitiveType;
                    wellKnown?: import("../../v1alpha1/checked").Type_WellKnownType;
                    listType?: {
                        elemType?: any;
                    };
                    mapType?: {
                        keyType?: any;
                        valueType?: any;
                    };
                    function?: {
                        resultType?: any;
                        argTypes?: any[];
                    };
                    messageType?: string;
                    typeParam?: string;
                    type?: any;
                    error?: {};
                    abstractType?: {
                        name?: string;
                        parameterTypes?: any[];
                    };
                };
                value?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
                };
                doc?: string;
            };
            function?: {
                overloads?: {
                    overloadId?: string;
                    params?: any[];
                    typeParams?: string[];
                    resultType?: {
                        dyn?: {};
                        null?: import("../../../../protobuf/struct").NullValue;
                        primitive?: import("../../v1alpha1/checked").Type_PrimitiveType;
                        wrapper?: import("../../v1alpha1/checked").Type_PrimitiveType;
                        wellKnown?: import("../../v1alpha1/checked").Type_WellKnownType;
                        listType?: {
                            elemType?: any;
                        };
                        mapType?: {
                            keyType?: any;
                            valueType?: any;
                        };
                        function?: {
                            resultType?: any;
                            argTypes?: any[];
                        };
                        messageType?: string;
                        typeParam?: string;
                        type?: any;
                        error?: {};
                        abstractType?: {
                            name?: string;
                            parameterTypes?: any[];
                        };
                    };
                    isInstanceFunction?: boolean;
                    doc?: string;
                }[];
            };
        }[] & ({
            name?: string;
            ident?: {
                type?: {
                    dyn?: {};
                    null?: import("../../../../protobuf/struct").NullValue;
                    primitive?: import("../../v1alpha1/checked").Type_PrimitiveType;
                    wrapper?: import("../../v1alpha1/checked").Type_PrimitiveType;
                    wellKnown?: import("../../v1alpha1/checked").Type_WellKnownType;
                    listType?: {
                        elemType?: any;
                    };
                    mapType?: {
                        keyType?: any;
                        valueType?: any;
                    };
                    function?: {
                        resultType?: any;
                        argTypes?: any[];
                    };
                    messageType?: string;
                    typeParam?: string;
                    type?: any;
                    error?: {};
                    abstractType?: {
                        name?: string;
                        parameterTypes?: any[];
                    };
                };
                value?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
                };
                doc?: string;
            };
            function?: {
                overloads?: {
                    overloadId?: string;
                    params?: any[];
                    typeParams?: string[];
                    resultType?: {
                        dyn?: {};
                        null?: import("../../../../protobuf/struct").NullValue;
                        primitive?: import("../../v1alpha1/checked").Type_PrimitiveType;
                        wrapper?: import("../../v1alpha1/checked").Type_PrimitiveType;
                        wellKnown?: import("../../v1alpha1/checked").Type_WellKnownType;
                        listType?: {
                            elemType?: any;
                        };
                        mapType?: {
                            keyType?: any;
                            valueType?: any;
                        };
                        function?: {
                            resultType?: any;
                            argTypes?: any[];
                        };
                        messageType?: string;
                        typeParam?: string;
                        type?: any;
                        error?: {};
                        abstractType?: {
                            name?: string;
                            parameterTypes?: any[];
                        };
                    };
                    isInstanceFunction?: boolean;
                    doc?: string;
                }[];
            };
        } & {
            name?: string;
            ident?: {
                type?: {
                    dyn?: {};
                    null?: import("../../../../protobuf/struct").NullValue;
                    primitive?: import("../../v1alpha1/checked").Type_PrimitiveType;
                    wrapper?: import("../../v1alpha1/checked").Type_PrimitiveType;
                    wellKnown?: import("../../v1alpha1/checked").Type_WellKnownType;
                    listType?: {
                        elemType?: any;
                    };
                    mapType?: {
                        keyType?: any;
                        valueType?: any;
                    };
                    function?: {
                        resultType?: any;
                        argTypes?: any[];
                    };
                    messageType?: string;
                    typeParam?: string;
                    type?: any;
                    error?: {};
                    abstractType?: {
                        name?: string;
                        parameterTypes?: any[];
                    };
                };
                value?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
                };
                doc?: string;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["typeEnv"][number]["ident"], keyof import("../../v1alpha1/checked").Decl_IdentDecl>, never>;
            function?: {
                overloads?: {
                    overloadId?: string;
                    params?: any[];
                    typeParams?: string[];
                    resultType?: {
                        dyn?: {};
                        null?: import("../../../../protobuf/struct").NullValue;
                        primitive?: import("../../v1alpha1/checked").Type_PrimitiveType;
                        wrapper?: import("../../v1alpha1/checked").Type_PrimitiveType;
                        wellKnown?: import("../../v1alpha1/checked").Type_WellKnownType;
                        listType?: {
                            elemType?: any;
                        };
                        mapType?: {
                            keyType?: any;
                            valueType?: any;
                        };
                        function?: {
                            resultType?: any;
                            argTypes?: any[];
                        };
                        messageType?: string;
                        typeParam?: string;
                        type?: any;
                        error?: {};
                        abstractType?: {
                            name?: string;
                            parameterTypes?: any[];
                        };
                    };
                    isInstanceFunction?: boolean;
                    doc?: string;
                }[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["typeEnv"][number]["function"], "overloads">, never>;
        } & Record<Exclude<keyof I["typeEnv"][number], keyof Decl>, never>)[] & Record<Exclude<keyof I["typeEnv"], keyof {
            name?: string;
            ident?: {
                type?: {
                    dyn?: {};
                    null?: import("../../../../protobuf/struct").NullValue;
                    primitive?: import("../../v1alpha1/checked").Type_PrimitiveType;
                    wrapper?: import("../../v1alpha1/checked").Type_PrimitiveType;
                    wellKnown?: import("../../v1alpha1/checked").Type_WellKnownType;
                    listType?: {
                        elemType?: any;
                    };
                    mapType?: {
                        keyType?: any;
                        valueType?: any;
                    };
                    function?: {
                        resultType?: any;
                        argTypes?: any[];
                    };
                    messageType?: string;
                    typeParam?: string;
                    type?: any;
                    error?: {};
                    abstractType?: {
                        name?: string;
                        parameterTypes?: any[];
                    };
                };
                value?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
                };
                doc?: string;
            };
            function?: {
                overloads?: {
                    overloadId?: string;
                    params?: any[];
                    typeParams?: string[];
                    resultType?: {
                        dyn?: {};
                        null?: import("../../../../protobuf/struct").NullValue;
                        primitive?: import("../../v1alpha1/checked").Type_PrimitiveType;
                        wrapper?: import("../../v1alpha1/checked").Type_PrimitiveType;
                        wellKnown?: import("../../v1alpha1/checked").Type_WellKnownType;
                        listType?: {
                            elemType?: any;
                        };
                        mapType?: {
                            keyType?: any;
                            valueType?: any;
                        };
                        function?: {
                            resultType?: any;
                            argTypes?: any[];
                        };
                        messageType?: string;
                        typeParam?: string;
                        type?: any;
                        error?: {};
                        abstractType?: {
                            name?: string;
                            parameterTypes?: any[];
                        };
                    };
                    isInstanceFunction?: boolean;
                    doc?: string;
                }[];
            };
        }[]>, never>;
        container?: string;
        noStdEnv?: boolean;
    } & Record<Exclude<keyof I, keyof CheckRequest>, never>>(object: I): CheckRequest;
};
export declare const CheckResponse: {
    encode(message: CheckResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse;
    fromJSON(object: any): CheckResponse;
    toJSON(message: CheckResponse): unknown;
    fromPartial<I extends {
        checkedExpr?: {
            referenceMap?: {};
            typeMap?: {};
            sourceInfo?: {
                syntaxVersion?: string;
                location?: string;
                lineOffsets?: number[];
                positions?: {};
                macroCalls?: {};
            };
            exprVersion?: string;
            expr?: {
                id?: any;
                constExpr?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
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
                    messageName?: string;
                    entries?: {
                        id?: any;
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
        issues?: {
            code?: number;
            message?: string;
            details?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }[];
    } & {
        checkedExpr?: {
            referenceMap?: {};
            typeMap?: {};
            sourceInfo?: {
                syntaxVersion?: string;
                location?: string;
                lineOffsets?: number[];
                positions?: {};
                macroCalls?: {};
            };
            exprVersion?: string;
            expr?: {
                id?: any;
                constExpr?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
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
                    messageName?: string;
                    entries?: {
                        id?: any;
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
            referenceMap?: {} & {} & Record<Exclude<keyof I["checkedExpr"]["referenceMap"], never>, never>;
            typeMap?: {} & {} & Record<Exclude<keyof I["checkedExpr"]["typeMap"], never>, never>;
            sourceInfo?: {
                syntaxVersion?: string;
                location?: string;
                lineOffsets?: number[];
                positions?: {};
                macroCalls?: {};
            } & {
                syntaxVersion?: string;
                location?: string;
                lineOffsets?: number[] & number[] & Record<Exclude<keyof I["checkedExpr"]["sourceInfo"]["lineOffsets"], keyof number[]>, never>;
                positions?: {} & {} & Record<Exclude<keyof I["checkedExpr"]["sourceInfo"]["positions"], never>, never>;
                macroCalls?: {} & {} & Record<Exclude<keyof I["checkedExpr"]["sourceInfo"]["macroCalls"], never>, never>;
            } & Record<Exclude<keyof I["checkedExpr"]["sourceInfo"], keyof import("../../v1alpha1/syntax").SourceInfo>, never>;
            exprVersion?: string;
            expr?: {
                id?: any;
                constExpr?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
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
                    messageName?: string;
                    entries?: {
                        id?: any;
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
                id?: any;
                constExpr?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
                } & {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
                } & Record<Exclude<keyof I["checkedExpr"]["expr"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                identExpr?: {
                    name?: string;
                } & {
                    name?: string;
                } & Record<Exclude<keyof I["checkedExpr"]["expr"]["identExpr"], "name">, never>;
                selectExpr?: {
                    operand?: any;
                    field?: string;
                    testOnly?: boolean;
                } & {
                    operand?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["selectExpr"]["operand"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["selectExpr"]["operand"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["selectExpr"]["operand"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["selectExpr"]["operand"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["selectExpr"]["operand"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["selectExpr"]["operand"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["selectExpr"]["operand"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["checkedExpr"]["expr"]["selectExpr"]["operand"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    field?: string;
                    testOnly?: boolean;
                } & Record<Exclude<keyof I["checkedExpr"]["expr"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                callExpr?: {
                    target?: any;
                    function?: string;
                    args?: any[];
                } & {
                    target?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["target"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["target"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["target"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["target"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["target"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["target"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["target"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["target"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    function?: string;
                    args?: any[] & ({
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["args"][number]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["args"][number]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["args"][number]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["args"][number]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["args"][number]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["args"][number]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["args"][number]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["args"][number], keyof import("../../v1alpha1/syntax").Expr>, never>)[] & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["args"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                listExpr?: {
                    elements?: any[];
                } & {
                    elements?: any[] & ({
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["listExpr"]["elements"][number]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["listExpr"]["elements"][number]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["listExpr"]["elements"][number]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["listExpr"]["elements"][number]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["listExpr"]["elements"][number]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["listExpr"]["elements"][number]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["listExpr"]["elements"][number]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["checkedExpr"]["expr"]["listExpr"]["elements"][number], keyof import("../../v1alpha1/syntax").Expr>, never>)[] & Record<Exclude<keyof I["checkedExpr"]["expr"]["listExpr"]["elements"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["checkedExpr"]["expr"]["listExpr"], "elements">, never>;
                structExpr?: {
                    messageName?: string;
                    entries?: {
                        id?: any;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[];
                } & {
                    messageName?: string;
                    entries?: {
                        id?: any;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[] & ({
                        id?: any;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    } & {
                        id?: any;
                        fieldKey?: string;
                        mapKey?: {
                            id?: any;
                            constExpr?: {
                                nullValue?: import("../../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: string;
                                timestampValue?: Date;
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
                                messageName?: string;
                                entries?: {
                                    id?: any;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["structExpr"]["entries"][number]["mapKey"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                        value?: {
                            id?: any;
                            constExpr?: {
                                nullValue?: import("../../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: string;
                                timestampValue?: Date;
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
                                messageName?: string;
                                entries?: {
                                    id?: any;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["structExpr"]["entries"][number]["value"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    } & Record<Exclude<keyof I["checkedExpr"]["expr"]["structExpr"]["entries"][number], keyof import("../../v1alpha1/syntax").Expr_CreateStruct_Entry>, never>)[] & Record<Exclude<keyof I["checkedExpr"]["expr"]["structExpr"]["entries"], keyof {
                        id?: any;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I["checkedExpr"]["expr"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["iterRange"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    accuVar?: string;
                    accuInit?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["accuInit"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    loopCondition?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopCondition"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    loopStep?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopStep"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    result?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["result"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["result"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["result"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["result"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["result"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["result"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["result"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["result"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
            } & Record<Exclude<keyof I["checkedExpr"]["expr"], keyof import("../../v1alpha1/syntax").Expr>, never>;
        } & Record<Exclude<keyof I["checkedExpr"], keyof CheckedExpr>, never>;
        issues?: {
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
            } & Record<Exclude<keyof I["issues"][number]["details"][number], keyof import("../../../../protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["issues"][number]["details"], keyof {
                typeUrl?: string;
                value?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["issues"][number], keyof Status>, never>)[] & Record<Exclude<keyof I["issues"], keyof {
            code?: number;
            message?: string;
            details?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof CheckResponse>, never>>(object: I): CheckResponse;
};
export declare const EvalRequest_BindingsEntry: {
    encode(message: EvalRequest_BindingsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvalRequest_BindingsEntry;
    fromJSON(object: any): EvalRequest_BindingsEntry;
    toJSON(message: EvalRequest_BindingsEntry): unknown;
    fromPartial<I extends {
        key?: string;
        value?: {
            value?: {
                nullValue?: import("../../../../protobuf/struct").NullValue;
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
                exprs?: any[];
            };
        };
    } & {
        key?: string;
        value?: {
            value?: {
                nullValue?: import("../../../../protobuf/struct").NullValue;
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
                exprs?: any[];
            };
        } & {
            value?: {
                nullValue?: import("../../../../protobuf/struct").NullValue;
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
            } & Record<Exclude<keyof I["value"]["value"], keyof import("../../v1alpha1/value").Value>, never>;
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
            } & Record<Exclude<keyof I["value"]["error"], "errors">, never>;
            unknown?: {
                exprs?: any[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["value"]["unknown"], "exprs">, never>;
        } & Record<Exclude<keyof I["value"], keyof ExprValue>, never>;
    } & Record<Exclude<keyof I, keyof EvalRequest_BindingsEntry>, never>>(object: I): EvalRequest_BindingsEntry;
};
export declare const EvalRequest: {
    encode(message: EvalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvalRequest;
    fromJSON(object: any): EvalRequest;
    toJSON(message: EvalRequest): unknown;
    fromPartial<I extends {
        parsedExpr?: {
            expr?: {
                id?: any;
                constExpr?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
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
                    messageName?: string;
                    entries?: {
                        id?: any;
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
            sourceInfo?: {
                syntaxVersion?: string;
                location?: string;
                lineOffsets?: number[];
                positions?: {};
                macroCalls?: {};
            };
        };
        checkedExpr?: {
            referenceMap?: {};
            typeMap?: {};
            sourceInfo?: {
                syntaxVersion?: string;
                location?: string;
                lineOffsets?: number[];
                positions?: {};
                macroCalls?: {};
            };
            exprVersion?: string;
            expr?: {
                id?: any;
                constExpr?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
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
                    messageName?: string;
                    entries?: {
                        id?: any;
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
        bindings?: {
            [x: string]: {
                value?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
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
                    exprs?: any[];
                };
            };
        };
        container?: string;
    } & {
        parsedExpr?: {
            expr?: {
                id?: any;
                constExpr?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
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
                    messageName?: string;
                    entries?: {
                        id?: any;
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
            sourceInfo?: {
                syntaxVersion?: string;
                location?: string;
                lineOffsets?: number[];
                positions?: {};
                macroCalls?: {};
            };
        } & {
            expr?: {
                id?: any;
                constExpr?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
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
                    messageName?: string;
                    entries?: {
                        id?: any;
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
                id?: any;
                constExpr?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
                } & {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
                } & Record<Exclude<keyof I["parsedExpr"]["expr"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                identExpr?: {
                    name?: string;
                } & {
                    name?: string;
                } & Record<Exclude<keyof I["parsedExpr"]["expr"]["identExpr"], "name">, never>;
                selectExpr?: {
                    operand?: any;
                    field?: string;
                    testOnly?: boolean;
                } & {
                    operand?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"]["operand"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    field?: string;
                    testOnly?: boolean;
                } & Record<Exclude<keyof I["parsedExpr"]["expr"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                callExpr?: {
                    target?: any;
                    function?: string;
                    args?: any[];
                } & {
                    target?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["target"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    function?: string;
                    args?: any[] & ({
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"][number], keyof import("../../v1alpha1/syntax").Expr>, never>)[] & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"]["args"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["parsedExpr"]["expr"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                listExpr?: {
                    elements?: any[];
                } & {
                    elements?: any[] & ({
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"][number], keyof import("../../v1alpha1/syntax").Expr>, never>)[] & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"]["elements"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["parsedExpr"]["expr"]["listExpr"], "elements">, never>;
                structExpr?: {
                    messageName?: string;
                    entries?: {
                        id?: any;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[];
                } & {
                    messageName?: string;
                    entries?: {
                        id?: any;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[] & ({
                        id?: any;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    } & {
                        id?: any;
                        fieldKey?: string;
                        mapKey?: {
                            id?: any;
                            constExpr?: {
                                nullValue?: import("../../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: string;
                                timestampValue?: Date;
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
                                messageName?: string;
                                entries?: {
                                    id?: any;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["structExpr"]["entries"][number]["mapKey"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                        value?: {
                            id?: any;
                            constExpr?: {
                                nullValue?: import("../../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: string;
                                timestampValue?: Date;
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
                                messageName?: string;
                                entries?: {
                                    id?: any;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["structExpr"]["entries"][number]["value"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["structExpr"]["entries"][number], keyof import("../../v1alpha1/syntax").Expr_CreateStruct_Entry>, never>)[] & Record<Exclude<keyof I["parsedExpr"]["expr"]["structExpr"]["entries"], keyof {
                        id?: any;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I["parsedExpr"]["expr"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["iterRange"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    accuVar?: string;
                    accuInit?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["accuInit"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    loopCondition?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopCondition"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    loopStep?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["loopStep"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    result?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"]["result"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                } & Record<Exclude<keyof I["parsedExpr"]["expr"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
            } & Record<Exclude<keyof I["parsedExpr"]["expr"], keyof import("../../v1alpha1/syntax").Expr>, never>;
            sourceInfo?: {
                syntaxVersion?: string;
                location?: string;
                lineOffsets?: number[];
                positions?: {};
                macroCalls?: {};
            } & {
                syntaxVersion?: string;
                location?: string;
                lineOffsets?: number[] & number[] & Record<Exclude<keyof I["parsedExpr"]["sourceInfo"]["lineOffsets"], keyof number[]>, never>;
                positions?: {} & {} & Record<Exclude<keyof I["parsedExpr"]["sourceInfo"]["positions"], never>, never>;
                macroCalls?: {} & {} & Record<Exclude<keyof I["parsedExpr"]["sourceInfo"]["macroCalls"], never>, never>;
            } & Record<Exclude<keyof I["parsedExpr"]["sourceInfo"], keyof import("../../v1alpha1/syntax").SourceInfo>, never>;
        } & Record<Exclude<keyof I["parsedExpr"], keyof ParsedExpr>, never>;
        checkedExpr?: {
            referenceMap?: {};
            typeMap?: {};
            sourceInfo?: {
                syntaxVersion?: string;
                location?: string;
                lineOffsets?: number[];
                positions?: {};
                macroCalls?: {};
            };
            exprVersion?: string;
            expr?: {
                id?: any;
                constExpr?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
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
                    messageName?: string;
                    entries?: {
                        id?: any;
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
            referenceMap?: {} & {} & Record<Exclude<keyof I["checkedExpr"]["referenceMap"], never>, never>;
            typeMap?: {} & {} & Record<Exclude<keyof I["checkedExpr"]["typeMap"], never>, never>;
            sourceInfo?: {
                syntaxVersion?: string;
                location?: string;
                lineOffsets?: number[];
                positions?: {};
                macroCalls?: {};
            } & {
                syntaxVersion?: string;
                location?: string;
                lineOffsets?: number[] & number[] & Record<Exclude<keyof I["checkedExpr"]["sourceInfo"]["lineOffsets"], keyof number[]>, never>;
                positions?: {} & {} & Record<Exclude<keyof I["checkedExpr"]["sourceInfo"]["positions"], never>, never>;
                macroCalls?: {} & {} & Record<Exclude<keyof I["checkedExpr"]["sourceInfo"]["macroCalls"], never>, never>;
            } & Record<Exclude<keyof I["checkedExpr"]["sourceInfo"], keyof import("../../v1alpha1/syntax").SourceInfo>, never>;
            exprVersion?: string;
            expr?: {
                id?: any;
                constExpr?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
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
                    messageName?: string;
                    entries?: {
                        id?: any;
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
                id?: any;
                constExpr?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
                } & {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
                    boolValue?: boolean;
                    int64Value?: any;
                    uint64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    bytesValue?: Uint8Array;
                    durationValue?: string;
                    timestampValue?: Date;
                } & Record<Exclude<keyof I["checkedExpr"]["expr"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                identExpr?: {
                    name?: string;
                } & {
                    name?: string;
                } & Record<Exclude<keyof I["checkedExpr"]["expr"]["identExpr"], "name">, never>;
                selectExpr?: {
                    operand?: any;
                    field?: string;
                    testOnly?: boolean;
                } & {
                    operand?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["selectExpr"]["operand"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["selectExpr"]["operand"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["selectExpr"]["operand"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["selectExpr"]["operand"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["selectExpr"]["operand"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["selectExpr"]["operand"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["selectExpr"]["operand"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["checkedExpr"]["expr"]["selectExpr"]["operand"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    field?: string;
                    testOnly?: boolean;
                } & Record<Exclude<keyof I["checkedExpr"]["expr"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                callExpr?: {
                    target?: any;
                    function?: string;
                    args?: any[];
                } & {
                    target?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["target"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["target"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["target"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["target"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["target"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["target"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["target"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["target"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    function?: string;
                    args?: any[] & ({
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["args"][number]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["args"][number]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["args"][number]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["args"][number]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["args"][number]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["args"][number]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["args"][number]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["args"][number], keyof import("../../v1alpha1/syntax").Expr>, never>)[] & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"]["args"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["checkedExpr"]["expr"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                listExpr?: {
                    elements?: any[];
                } & {
                    elements?: any[] & ({
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["listExpr"]["elements"][number]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["listExpr"]["elements"][number]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["listExpr"]["elements"][number]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["listExpr"]["elements"][number]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["listExpr"]["elements"][number]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["listExpr"]["elements"][number]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["listExpr"]["elements"][number]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["checkedExpr"]["expr"]["listExpr"]["elements"][number], keyof import("../../v1alpha1/syntax").Expr>, never>)[] & Record<Exclude<keyof I["checkedExpr"]["expr"]["listExpr"]["elements"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["checkedExpr"]["expr"]["listExpr"], "elements">, never>;
                structExpr?: {
                    messageName?: string;
                    entries?: {
                        id?: any;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[];
                } & {
                    messageName?: string;
                    entries?: {
                        id?: any;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[] & ({
                        id?: any;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    } & {
                        id?: any;
                        fieldKey?: string;
                        mapKey?: {
                            id?: any;
                            constExpr?: {
                                nullValue?: import("../../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: string;
                                timestampValue?: Date;
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
                                messageName?: string;
                                entries?: {
                                    id?: any;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["structExpr"]["entries"][number]["mapKey"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                        value?: {
                            id?: any;
                            constExpr?: {
                                nullValue?: import("../../../../protobuf/struct").NullValue;
                                boolValue?: boolean;
                                int64Value?: any;
                                uint64Value?: any;
                                doubleValue?: number;
                                stringValue?: string;
                                bytesValue?: Uint8Array;
                                durationValue?: string;
                                timestampValue?: Date;
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
                                messageName?: string;
                                entries?: {
                                    id?: any;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["structExpr"]["entries"][number]["value"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    } & Record<Exclude<keyof I["checkedExpr"]["expr"]["structExpr"]["entries"][number], keyof import("../../v1alpha1/syntax").Expr_CreateStruct_Entry>, never>)[] & Record<Exclude<keyof I["checkedExpr"]["expr"]["structExpr"]["entries"], keyof {
                        id?: any;
                        fieldKey?: string;
                        mapKey?: any;
                        value?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I["checkedExpr"]["expr"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["iterRange"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["iterRange"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    accuVar?: string;
                    accuInit?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["accuInit"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["accuInit"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    loopCondition?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopCondition"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopCondition"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    loopStep?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopStep"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["loopStep"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                    result?: {
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
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
                            messageName?: string;
                            entries?: {
                                id?: any;
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
                        id?: any;
                        constExpr?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
                            boolValue?: boolean;
                            int64Value?: any;
                            uint64Value?: any;
                            doubleValue?: number;
                            stringValue?: string;
                            bytesValue?: Uint8Array;
                            durationValue?: string;
                            timestampValue?: Date;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["result"]["constExpr"], keyof import("../../v1alpha1/syntax").Constant>, never>;
                        identExpr?: {
                            name?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["result"]["identExpr"], "name">, never>;
                        selectExpr?: {
                            operand?: any;
                            field?: string;
                            testOnly?: boolean;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["result"]["selectExpr"], keyof import("../../v1alpha1/syntax").Expr_Select>, never>;
                        callExpr?: {
                            target?: any;
                            function?: string;
                            args?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["result"]["callExpr"], keyof import("../../v1alpha1/syntax").Expr_Call>, never>;
                        listExpr?: {
                            elements?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["result"]["listExpr"], "elements">, never>;
                        structExpr?: {
                            messageName?: string;
                            entries?: {
                                id?: any;
                                fieldKey?: string;
                                mapKey?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["result"]["structExpr"], keyof import("../../v1alpha1/syntax").Expr_CreateStruct>, never>;
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
                        } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["result"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
                    } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"]["result"], keyof import("../../v1alpha1/syntax").Expr>, never>;
                } & Record<Exclude<keyof I["checkedExpr"]["expr"]["comprehensionExpr"], keyof import("../../v1alpha1/syntax").Expr_Comprehension>, never>;
            } & Record<Exclude<keyof I["checkedExpr"]["expr"], keyof import("../../v1alpha1/syntax").Expr>, never>;
        } & Record<Exclude<keyof I["checkedExpr"], keyof CheckedExpr>, never>;
        bindings?: {
            [x: string]: {
                value?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
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
                    exprs?: any[];
                };
            };
        } & {
            [x: string]: {
                value?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
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
                    exprs?: any[];
                };
            } & {
                value?: {
                    nullValue?: import("../../../../protobuf/struct").NullValue;
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
                    nullValue?: import("../../../../protobuf/struct").NullValue;
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
                    } & Record<Exclude<keyof I["bindings"][string]["value"]["enumValue"], keyof import("../../v1alpha1/value").EnumValue>, never>;
                    objectValue?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I["bindings"][string]["value"]["objectValue"], keyof import("../../../../protobuf/any").Any>, never>;
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
                                nullValue?: import("../../../../protobuf/struct").NullValue;
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
                            } & Record<Exclude<keyof I["bindings"][string]["value"]["mapValue"]["entries"][number]["key"], keyof import("../../v1alpha1/value").Value>, never>;
                            value?: {
                                nullValue?: import("../../../../protobuf/struct").NullValue;
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
                            } & Record<Exclude<keyof I["bindings"][string]["value"]["mapValue"]["entries"][number]["value"], keyof import("../../v1alpha1/value").Value>, never>;
                        } & Record<Exclude<keyof I["bindings"][string]["value"]["mapValue"]["entries"][number], keyof import("../../v1alpha1/value").MapValue_Entry>, never>)[] & Record<Exclude<keyof I["bindings"][string]["value"]["mapValue"]["entries"], keyof {
                            key?: any;
                            value?: any;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["bindings"][string]["value"]["mapValue"], "entries">, never>;
                    listValue?: {
                        values?: any[];
                    } & {
                        values?: any[] & ({
                            nullValue?: import("../../../../protobuf/struct").NullValue;
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
                            nullValue?: import("../../../../protobuf/struct").NullValue;
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
                            } & Record<Exclude<keyof I["bindings"][string]["value"]["listValue"]["values"][number]["enumValue"], keyof import("../../v1alpha1/value").EnumValue>, never>;
                            objectValue?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                [x: string]: any;
                            } & Record<Exclude<keyof I["bindings"][string]["value"]["listValue"]["values"][number]["objectValue"], keyof import("../../../../protobuf/any").Any>, never>;
                            mapValue?: {
                                entries?: {
                                    key?: any;
                                    value?: any;
                                }[];
                            } & {
                                [x: string]: any;
                            } & Record<Exclude<keyof I["bindings"][string]["value"]["listValue"]["values"][number]["mapValue"], "entries">, never>;
                            listValue?: {
                                values?: any[];
                            } & {
                                [x: string]: any;
                            } & Record<Exclude<keyof I["bindings"][string]["value"]["listValue"]["values"][number]["listValue"], "values">, never>;
                            typeValue?: string;
                        } & Record<Exclude<keyof I["bindings"][string]["value"]["listValue"]["values"][number], keyof import("../../v1alpha1/value").Value>, never>)[] & Record<Exclude<keyof I["bindings"][string]["value"]["listValue"]["values"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["bindings"][string]["value"]["listValue"], "values">, never>;
                    typeValue?: string;
                } & Record<Exclude<keyof I["bindings"][string]["value"], keyof import("../../v1alpha1/value").Value>, never>;
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
                        } & Record<Exclude<keyof I["bindings"][string]["error"]["errors"][number]["details"][number], keyof import("../../../../protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["bindings"][string]["error"]["errors"][number]["details"], keyof {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["bindings"][string]["error"]["errors"][number], keyof Status>, never>)[] & Record<Exclude<keyof I["bindings"][string]["error"]["errors"], keyof {
                        code?: number;
                        message?: string;
                        details?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[]>, never>;
                } & Record<Exclude<keyof I["bindings"][string]["error"], "errors">, never>;
                unknown?: {
                    exprs?: any[];
                } & {
                    exprs?: any[] & any[] & Record<Exclude<keyof I["bindings"][string]["unknown"]["exprs"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["bindings"][string]["unknown"], "exprs">, never>;
            } & Record<Exclude<keyof I["bindings"][string], keyof ExprValue>, never>;
        } & Record<Exclude<keyof I["bindings"], string | number>, never>;
        container?: string;
    } & Record<Exclude<keyof I, keyof EvalRequest>, never>>(object: I): EvalRequest;
};
export declare const EvalResponse: {
    encode(message: EvalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvalResponse;
    fromJSON(object: any): EvalResponse;
    toJSON(message: EvalResponse): unknown;
    fromPartial<I extends {
        result?: {
            value?: {
                nullValue?: import("../../../../protobuf/struct").NullValue;
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
                exprs?: any[];
            };
        };
        issues?: {
            code?: number;
            message?: string;
            details?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }[];
    } & {
        result?: {
            value?: {
                nullValue?: import("../../../../protobuf/struct").NullValue;
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
                exprs?: any[];
            };
        } & {
            value?: {
                nullValue?: import("../../../../protobuf/struct").NullValue;
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
                nullValue?: import("../../../../protobuf/struct").NullValue;
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
                } & Record<Exclude<keyof I["result"]["value"]["enumValue"], keyof import("../../v1alpha1/value").EnumValue>, never>;
                objectValue?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["result"]["value"]["objectValue"], keyof import("../../../../protobuf/any").Any>, never>;
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
                            nullValue?: import("../../../../protobuf/struct").NullValue;
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
                        } & Record<Exclude<keyof I["result"]["value"]["mapValue"]["entries"][number]["key"], keyof import("../../v1alpha1/value").Value>, never>;
                        value?: {
                            nullValue?: import("../../../../protobuf/struct").NullValue;
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
                        } & Record<Exclude<keyof I["result"]["value"]["mapValue"]["entries"][number]["value"], keyof import("../../v1alpha1/value").Value>, never>;
                    } & Record<Exclude<keyof I["result"]["value"]["mapValue"]["entries"][number], keyof import("../../v1alpha1/value").MapValue_Entry>, never>)[] & Record<Exclude<keyof I["result"]["value"]["mapValue"]["entries"], keyof {
                        key?: any;
                        value?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I["result"]["value"]["mapValue"], "entries">, never>;
                listValue?: {
                    values?: any[];
                } & {
                    values?: any[] & ({
                        nullValue?: import("../../../../protobuf/struct").NullValue;
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
                        nullValue?: import("../../../../protobuf/struct").NullValue;
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
                        } & Record<Exclude<keyof I["result"]["value"]["listValue"]["values"][number]["enumValue"], keyof import("../../v1alpha1/value").EnumValue>, never>;
                        objectValue?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["result"]["value"]["listValue"]["values"][number]["objectValue"], keyof import("../../../../protobuf/any").Any>, never>;
                        mapValue?: {
                            entries?: {
                                key?: any;
                                value?: any;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["result"]["value"]["listValue"]["values"][number]["mapValue"], "entries">, never>;
                        listValue?: {
                            values?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["result"]["value"]["listValue"]["values"][number]["listValue"], "values">, never>;
                        typeValue?: string;
                    } & Record<Exclude<keyof I["result"]["value"]["listValue"]["values"][number], keyof import("../../v1alpha1/value").Value>, never>)[] & Record<Exclude<keyof I["result"]["value"]["listValue"]["values"], keyof any[]>, never>;
                } & Record<Exclude<keyof I["result"]["value"]["listValue"], "values">, never>;
                typeValue?: string;
            } & Record<Exclude<keyof I["result"]["value"], keyof import("../../v1alpha1/value").Value>, never>;
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
                    } & Record<Exclude<keyof I["result"]["error"]["errors"][number]["details"][number], keyof import("../../../../protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["result"]["error"]["errors"][number]["details"], keyof {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I["result"]["error"]["errors"][number], keyof Status>, never>)[] & Record<Exclude<keyof I["result"]["error"]["errors"], keyof {
                    code?: number;
                    message?: string;
                    details?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I["result"]["error"], "errors">, never>;
            unknown?: {
                exprs?: any[];
            } & {
                exprs?: any[] & any[] & Record<Exclude<keyof I["result"]["unknown"]["exprs"], keyof any[]>, never>;
            } & Record<Exclude<keyof I["result"]["unknown"], "exprs">, never>;
        } & Record<Exclude<keyof I["result"], keyof ExprValue>, never>;
        issues?: {
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
            } & Record<Exclude<keyof I["issues"][number]["details"][number], keyof import("../../../../protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["issues"][number]["details"], keyof {
                typeUrl?: string;
                value?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["issues"][number], keyof Status>, never>)[] & Record<Exclude<keyof I["issues"], keyof {
            code?: number;
            message?: string;
            details?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof EvalResponse>, never>>(object: I): EvalResponse;
};
export declare const IssueDetails: {
    encode(message: IssueDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IssueDetails;
    fromJSON(object: any): IssueDetails;
    toJSON(message: IssueDetails): unknown;
    fromPartial<I extends {
        severity?: IssueDetails_Severity;
        position?: {
            location?: string;
            offset?: number;
            line?: number;
            column?: number;
        };
        id?: any;
    } & {
        severity?: IssueDetails_Severity;
        position?: {
            location?: string;
            offset?: number;
            line?: number;
            column?: number;
        } & {
            location?: string;
            offset?: number;
            line?: number;
            column?: number;
        } & Record<Exclude<keyof I["position"], keyof SourcePosition>, never>;
        id?: any;
    } & Record<Exclude<keyof I, keyof IssueDetails>, never>>(object: I): IssueDetails;
};
