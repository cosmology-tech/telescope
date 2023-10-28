import { ParsedExpr, ParsedExprSDKType, SourcePosition, SourcePositionSDKType } from "../../v1alpha1/syntax";
import { Decl, DeclSDKType, CheckedExpr, CheckedExprSDKType } from "../../v1alpha1/checked";
import { ExprValue, ExprValueSDKType } from "../../v1alpha1/eval";
import { Status, StatusSDKType } from "../../../../rpc/status";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
export const protobufPackage = "google.api.expr.conformance.v1alpha1";
/** Severities of issues. */
export enum IssueDetails_Severity {
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
  UNRECOGNIZED = -1,
}
export const IssueDetails_SeveritySDKType = IssueDetails_Severity;
export function issueDetails_SeverityFromJSON(object: any): IssueDetails_Severity {
  switch (object) {
    case 0:
    case "SEVERITY_UNSPECIFIED":
      return IssueDetails_Severity.SEVERITY_UNSPECIFIED;
    case 1:
    case "DEPRECATION":
      return IssueDetails_Severity.DEPRECATION;
    case 2:
    case "WARNING":
      return IssueDetails_Severity.WARNING;
    case 3:
    case "ERROR":
      return IssueDetails_Severity.ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IssueDetails_Severity.UNRECOGNIZED;
  }
}
export function issueDetails_SeverityToJSON(object: IssueDetails_Severity): string {
  switch (object) {
    case IssueDetails_Severity.SEVERITY_UNSPECIFIED:
      return "SEVERITY_UNSPECIFIED";
    case IssueDetails_Severity.DEPRECATION:
      return "DEPRECATION";
    case IssueDetails_Severity.WARNING:
      return "WARNING";
    case IssueDetails_Severity.ERROR:
      return "ERROR";
    case IssueDetails_Severity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
export interface ParseRequestProtoMsg {
  typeUrl: "/google.api.expr.conformance.v1alpha1.ParseRequest";
  value: Uint8Array;
}
/** Request message for the Parse method. */
export interface ParseRequestSDKType {
  cel_source: string;
  syntax_version: string;
  source_location: string;
  disable_macros: boolean;
}
/** Response message for the Parse method. */
export interface ParseResponse {
  /** The parsed representation, or unset if parsing failed. */
  parsedExpr?: ParsedExpr;
  /** Any number of issues with [StatusDetails][] as the details. */
  issues: Status[];
}
export interface ParseResponseProtoMsg {
  typeUrl: "/google.api.expr.conformance.v1alpha1.ParseResponse";
  value: Uint8Array;
}
/** Response message for the Parse method. */
export interface ParseResponseSDKType {
  parsed_expr?: ParsedExprSDKType;
  issues: StatusSDKType[];
}
/** Request message for the Check method. */
export interface CheckRequest {
  /** Required. The parsed representation of the CEL program. */
  parsedExpr?: ParsedExpr;
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
export interface CheckRequestProtoMsg {
  typeUrl: "/google.api.expr.conformance.v1alpha1.CheckRequest";
  value: Uint8Array;
}
/** Request message for the Check method. */
export interface CheckRequestSDKType {
  parsed_expr?: ParsedExprSDKType;
  type_env: DeclSDKType[];
  container: string;
  no_std_env: boolean;
}
/** Response message for the Check method. */
export interface CheckResponse {
  /** The annotated representation, or unset if checking failed. */
  checkedExpr?: CheckedExpr;
  /** Any number of issues with [StatusDetails][] as the details. */
  issues: Status[];
}
export interface CheckResponseProtoMsg {
  typeUrl: "/google.api.expr.conformance.v1alpha1.CheckResponse";
  value: Uint8Array;
}
/** Response message for the Check method. */
export interface CheckResponseSDKType {
  checked_expr?: CheckedExprSDKType;
  issues: StatusSDKType[];
}
export interface EvalRequest_BindingsEntry {
  key: string;
  value?: ExprValue;
}
export interface EvalRequest_BindingsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface EvalRequest_BindingsEntrySDKType {
  key: string;
  value?: ExprValueSDKType;
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
export interface EvalRequestProtoMsg {
  typeUrl: "/google.api.expr.conformance.v1alpha1.EvalRequest";
  value: Uint8Array;
}
/** Request message for the Eval method. */
export interface EvalRequestSDKType {
  parsed_expr?: ParsedExprSDKType;
  checked_expr?: CheckedExprSDKType;
  bindings: {
    [key: string]: ExprValueSDKType;
  };
  container: string;
}
/** Response message for the Eval method. */
export interface EvalResponse {
  /** The execution result, or unset if execution couldn't start. */
  result?: ExprValue;
  /**
   * Any number of issues with [StatusDetails][] as the details.
   * Note that CEL execution errors are reified into [ExprValue][].
   * Nevertheless, we'll allow out-of-band issues to be raised,
   * which also makes the replies more regular.
   */
  issues: Status[];
}
export interface EvalResponseProtoMsg {
  typeUrl: "/google.api.expr.conformance.v1alpha1.EvalResponse";
  value: Uint8Array;
}
/** Response message for the Eval method. */
export interface EvalResponseSDKType {
  result?: ExprValueSDKType;
  issues: StatusSDKType[];
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
  position?: SourcePosition;
  /** Expression ID from [Expr][], 0 if unknown. */
  id: bigint;
}
export interface IssueDetailsProtoMsg {
  typeUrl: "/google.api.expr.conformance.v1alpha1.IssueDetails";
  value: Uint8Array;
}
/**
 * Warnings or errors in service execution are represented by
 * [google.rpc.Status][google.rpc.Status] messages, with the following message
 * in the details field.
 */
export interface IssueDetailsSDKType {
  severity: IssueDetails_Severity;
  position?: SourcePositionSDKType;
  id: bigint;
}
function createBaseParseRequest(): ParseRequest {
  return {
    celSource: "",
    syntaxVersion: "",
    sourceLocation: "",
    disableMacros: false
  };
}
export const ParseRequest = {
  typeUrl: "/google.api.expr.conformance.v1alpha1.ParseRequest",
  encode(message: ParseRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.celSource !== "") {
      writer.uint32(10).string(message.celSource);
    }
    if (message.syntaxVersion !== "") {
      writer.uint32(18).string(message.syntaxVersion);
    }
    if (message.sourceLocation !== "") {
      writer.uint32(26).string(message.sourceLocation);
    }
    if (message.disableMacros === true) {
      writer.uint32(32).bool(message.disableMacros);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParseRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.celSource = reader.string();
          break;
        case 2:
          message.syntaxVersion = reader.string();
          break;
        case 3:
          message.sourceLocation = reader.string();
          break;
        case 4:
          message.disableMacros = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ParseRequestProtoMsg): ParseRequest {
    return ParseRequest.decode(message.value);
  },
  toProto(message: ParseRequest): Uint8Array {
    return ParseRequest.encode(message).finish();
  },
  toProtoMsg(message: ParseRequest): ParseRequestProtoMsg {
    return {
      typeUrl: "/google.api.expr.conformance.v1alpha1.ParseRequest",
      value: ParseRequest.encode(message).finish()
    };
  }
};
function createBaseParseResponse(): ParseResponse {
  return {
    parsedExpr: undefined,
    issues: []
  };
}
export const ParseResponse = {
  typeUrl: "/google.api.expr.conformance.v1alpha1.ParseResponse",
  encode(message: ParseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parsedExpr !== undefined) {
      ParsedExpr.encode(message.parsedExpr, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.issues) {
      Status.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parsedExpr = ParsedExpr.decode(reader, reader.uint32());
          break;
        case 2:
          message.issues.push(Status.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ParseResponseProtoMsg): ParseResponse {
    return ParseResponse.decode(message.value);
  },
  toProto(message: ParseResponse): Uint8Array {
    return ParseResponse.encode(message).finish();
  },
  toProtoMsg(message: ParseResponse): ParseResponseProtoMsg {
    return {
      typeUrl: "/google.api.expr.conformance.v1alpha1.ParseResponse",
      value: ParseResponse.encode(message).finish()
    };
  }
};
function createBaseCheckRequest(): CheckRequest {
  return {
    parsedExpr: undefined,
    typeEnv: [],
    container: "",
    noStdEnv: false
  };
}
export const CheckRequest = {
  typeUrl: "/google.api.expr.conformance.v1alpha1.CheckRequest",
  encode(message: CheckRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parsedExpr !== undefined) {
      ParsedExpr.encode(message.parsedExpr, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.typeEnv) {
      Decl.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.container !== "") {
      writer.uint32(26).string(message.container);
    }
    if (message.noStdEnv === true) {
      writer.uint32(32).bool(message.noStdEnv);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CheckRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parsedExpr = ParsedExpr.decode(reader, reader.uint32());
          break;
        case 2:
          message.typeEnv.push(Decl.decode(reader, reader.uint32()));
          break;
        case 3:
          message.container = reader.string();
          break;
        case 4:
          message.noStdEnv = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: CheckRequestProtoMsg): CheckRequest {
    return CheckRequest.decode(message.value);
  },
  toProto(message: CheckRequest): Uint8Array {
    return CheckRequest.encode(message).finish();
  },
  toProtoMsg(message: CheckRequest): CheckRequestProtoMsg {
    return {
      typeUrl: "/google.api.expr.conformance.v1alpha1.CheckRequest",
      value: CheckRequest.encode(message).finish()
    };
  }
};
function createBaseCheckResponse(): CheckResponse {
  return {
    checkedExpr: undefined,
    issues: []
  };
}
export const CheckResponse = {
  typeUrl: "/google.api.expr.conformance.v1alpha1.CheckResponse",
  encode(message: CheckResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.checkedExpr !== undefined) {
      CheckedExpr.encode(message.checkedExpr, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.issues) {
      Status.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CheckResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checkedExpr = CheckedExpr.decode(reader, reader.uint32());
          break;
        case 2:
          message.issues.push(Status.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: CheckResponseProtoMsg): CheckResponse {
    return CheckResponse.decode(message.value);
  },
  toProto(message: CheckResponse): Uint8Array {
    return CheckResponse.encode(message).finish();
  },
  toProtoMsg(message: CheckResponse): CheckResponseProtoMsg {
    return {
      typeUrl: "/google.api.expr.conformance.v1alpha1.CheckResponse",
      value: CheckResponse.encode(message).finish()
    };
  }
};
function createBaseEvalRequest_BindingsEntry(): EvalRequest_BindingsEntry {
  return {
    key: "",
    value: undefined
  };
}
export const EvalRequest_BindingsEntry = {
  encode(message: EvalRequest_BindingsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ExprValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EvalRequest_BindingsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvalRequest_BindingsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ExprValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: EvalRequest_BindingsEntryProtoMsg): EvalRequest_BindingsEntry {
    return EvalRequest_BindingsEntry.decode(message.value);
  },
  toProto(message: EvalRequest_BindingsEntry): Uint8Array {
    return EvalRequest_BindingsEntry.encode(message).finish();
  }
};
function createBaseEvalRequest(): EvalRequest {
  return {
    parsedExpr: undefined,
    checkedExpr: undefined,
    bindings: {},
    container: ""
  };
}
export const EvalRequest = {
  typeUrl: "/google.api.expr.conformance.v1alpha1.EvalRequest",
  encode(message: EvalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parsedExpr !== undefined) {
      ParsedExpr.encode(message.parsedExpr, writer.uint32(10).fork()).ldelim();
    }
    if (message.checkedExpr !== undefined) {
      CheckedExpr.encode(message.checkedExpr, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.bindings).forEach(([key, value]) => {
      EvalRequest_BindingsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    if (message.container !== "") {
      writer.uint32(34).string(message.container);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EvalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parsedExpr = ParsedExpr.decode(reader, reader.uint32());
          break;
        case 2:
          message.checkedExpr = CheckedExpr.decode(reader, reader.uint32());
          break;
        case 3:
          const entry3 = EvalRequest_BindingsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.bindings[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.container = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: EvalRequestProtoMsg): EvalRequest {
    return EvalRequest.decode(message.value);
  },
  toProto(message: EvalRequest): Uint8Array {
    return EvalRequest.encode(message).finish();
  },
  toProtoMsg(message: EvalRequest): EvalRequestProtoMsg {
    return {
      typeUrl: "/google.api.expr.conformance.v1alpha1.EvalRequest",
      value: EvalRequest.encode(message).finish()
    };
  }
};
function createBaseEvalResponse(): EvalResponse {
  return {
    result: undefined,
    issues: []
  };
}
export const EvalResponse = {
  typeUrl: "/google.api.expr.conformance.v1alpha1.EvalResponse",
  encode(message: EvalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== undefined) {
      ExprValue.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.issues) {
      Status.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EvalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = ExprValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.issues.push(Status.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: EvalResponseProtoMsg): EvalResponse {
    return EvalResponse.decode(message.value);
  },
  toProto(message: EvalResponse): Uint8Array {
    return EvalResponse.encode(message).finish();
  },
  toProtoMsg(message: EvalResponse): EvalResponseProtoMsg {
    return {
      typeUrl: "/google.api.expr.conformance.v1alpha1.EvalResponse",
      value: EvalResponse.encode(message).finish()
    };
  }
};
function createBaseIssueDetails(): IssueDetails {
  return {
    severity: 0,
    position: undefined,
    id: BigInt(0)
  };
}
export const IssueDetails = {
  typeUrl: "/google.api.expr.conformance.v1alpha1.IssueDetails",
  encode(message: IssueDetails, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.severity !== 0) {
      writer.uint32(8).int32(message.severity);
    }
    if (message.position !== undefined) {
      SourcePosition.encode(message.position, writer.uint32(18).fork()).ldelim();
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(24).int64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IssueDetails {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIssueDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.severity = (reader.int32() as any);
          break;
        case 2:
          message.position = SourcePosition.decode(reader, reader.uint32());
          break;
        case 3:
          message.id = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: IssueDetailsProtoMsg): IssueDetails {
    return IssueDetails.decode(message.value);
  },
  toProto(message: IssueDetails): Uint8Array {
    return IssueDetails.encode(message).finish();
  },
  toProtoMsg(message: IssueDetails): IssueDetailsProtoMsg {
    return {
      typeUrl: "/google.api.expr.conformance.v1alpha1.IssueDetails",
      value: IssueDetails.encode(message).finish()
    };
  }
};