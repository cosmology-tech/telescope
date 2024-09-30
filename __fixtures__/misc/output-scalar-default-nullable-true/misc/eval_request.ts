import { ExprValue, ExprValueSDKType, IdRef, IdRefSDKType } from "../google/api/expr/v1alpha1/eval";
import { FeatureSet_Utf8Validation, FeatureSet_Utf8ValidationSDKType, featureSet_Utf8ValidationFromJSON, featureSet_Utf8ValidationToJSON } from "../google/protobuf/descriptor";
import { TestNest_Graph, TestNest_GraphSDKType } from "./nest";
import { BinaryReader, BinaryWriter } from "../binary";
import { isSet, DeepPartial, isObject } from "../helpers";
import { JsonSafe } from "../json-safe";
export const protobufPackage = "misc";
/** VoteOption enumerates the valid vote options for a given governance proposal. */
export enum VoteOption {
  /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
  VOTE_OPTION_UNSPECIFIED = 0,
  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
  VOTE_OPTION_YES = 1,
  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
  VOTE_OPTION_ABSTAIN = 2,
  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
  VOTE_OPTION_NO = 3,
  /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
  VOTE_OPTION_NO_WITH_VETO = 4,
  UNRECOGNIZED = -1,
}
export const VoteOptionSDKType = VoteOption;
export function voteOptionFromJSON(object: any): VoteOption {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;
    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;
    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;
    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;
    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}
export function voteOptionToJSON(object: VoteOption): string {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";
    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";
    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";
    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";
    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";
    case VoteOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface EvalRequest_BindingsEntry {
  key?: string;
  value?: ExprValue;
}
export interface EvalRequest_BindingsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface EvalRequest_BindingsEntrySDKType {
  key?: string;
  value?: ExprValueSDKType;
}
export interface EvalRequest_RefsEntry {
  key?: string;
  value?: IdRef;
}
export interface EvalRequest_RefsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface EvalRequest_RefsEntrySDKType {
  key?: string;
  value?: IdRefSDKType;
}
export interface EvalRequest {
  /**
   * Bindings for the external variables.  The types SHOULD be compatible
   * with the type environment in [CheckRequest][google.api.expr.conformance.v1alpha1.CheckRequest], if checked.
   */
  bindings: {
    [key: string]: ExprValue;
  };
  refs: {
    [key: string]: IdRef;
  };
  testNum?: number;
  testString: string;
  testBool?: boolean;
  instantiatePermission?: AccessConfig;
  /** [(gogoproto.nullable) = false] wouldn't work in this case */
  id?: string;
  name?: string;
  testArray: string[];
  opt: FeatureSet_Utf8Validation;
  graph?: TestNest_Graph;
}
export interface EvalRequestProtoMsg {
  typeUrl: "/misc.EvalRequest";
  value: Uint8Array;
}
export interface EvalRequestSDKType {
  bindings: {
    [key: string]: ExprValueSDKType;
  };
  refs: {
    [key: string]: IdRefSDKType;
  };
  test_num?: number;
  test_string: string;
  test_bool?: boolean;
  instantiate_permission?: AccessConfigSDKType;
  id?: string;
  name?: string;
  test_array: string[];
  opt: FeatureSet_Utf8Validation;
  graph?: TestNest_GraphSDKType;
}
export interface AccessConfig {
  sender?: string;
}
export interface AccessConfigProtoMsg {
  typeUrl: "/misc.AccessConfig";
  value: Uint8Array;
}
export interface AccessConfigSDKType {
  sender?: string;
}
export interface GenericAuthorization {
  /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
  msg?: string;
}
export interface GenericAuthorizationProtoMsg {
  typeUrl: "/misc.GenericAuthorization";
  value: Uint8Array;
}
export interface GenericAuthorizationSDKType {
  msg?: string;
}
function createBaseEvalRequest_BindingsEntry(): EvalRequest_BindingsEntry {
  return {
    key: undefined,
    value: undefined
  };
}
export const EvalRequest_BindingsEntry = {
  encode(message: EvalRequest_BindingsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
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
  fromJSON(object: any): EvalRequest_BindingsEntry {
    const obj = createBaseEvalRequest_BindingsEntry();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = ExprValue.fromJSON(object.value);
    return obj;
  },
  toJSON(message: EvalRequest_BindingsEntry): JsonSafe<EvalRequest_BindingsEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? ExprValue.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<EvalRequest_BindingsEntry>): EvalRequest_BindingsEntry {
    const message = createBaseEvalRequest_BindingsEntry();
    message.key = object.key ?? undefined;
    if (object.value !== undefined && object.value !== null) {
      message.value = ExprValue.fromPartial(object.value);
    }
    return message;
  },
  fromSDK(object: EvalRequest_BindingsEntrySDKType): EvalRequest_BindingsEntry {
    return {
      key: object?.key,
      value: object.value ? ExprValue.fromSDK(object.value) : undefined
    };
  },
  fromSDKJSON(object: any): EvalRequest_BindingsEntrySDKType {
    return {
      key: isSet(object.key) ? String(object.key) : undefined,
      value: isSet(object.value) ? ExprValue.fromSDKJSON(object.value) : undefined
    };
  },
  toSDK(message: EvalRequest_BindingsEntry): EvalRequest_BindingsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    message.value !== undefined && (obj.value = message.value ? ExprValue.toSDK(message.value) : undefined);
    return obj;
  },
  fromProtoMsg(message: EvalRequest_BindingsEntryProtoMsg): EvalRequest_BindingsEntry {
    return EvalRequest_BindingsEntry.decode(message.value);
  },
  toProto(message: EvalRequest_BindingsEntry): Uint8Array {
    return EvalRequest_BindingsEntry.encode(message).finish();
  }
};
function createBaseEvalRequest_RefsEntry(): EvalRequest_RefsEntry {
  return {
    key: undefined,
    value: undefined
  };
}
export const EvalRequest_RefsEntry = {
  encode(message: EvalRequest_RefsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      IdRef.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EvalRequest_RefsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvalRequest_RefsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = IdRef.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EvalRequest_RefsEntry {
    const obj = createBaseEvalRequest_RefsEntry();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = IdRef.fromJSON(object.value);
    return obj;
  },
  toJSON(message: EvalRequest_RefsEntry): JsonSafe<EvalRequest_RefsEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? IdRef.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<EvalRequest_RefsEntry>): EvalRequest_RefsEntry {
    const message = createBaseEvalRequest_RefsEntry();
    message.key = object.key ?? undefined;
    if (object.value !== undefined && object.value !== null) {
      message.value = IdRef.fromPartial(object.value);
    }
    return message;
  },
  fromSDK(object: EvalRequest_RefsEntrySDKType): EvalRequest_RefsEntry {
    return {
      key: object?.key,
      value: object.value ? IdRef.fromSDK(object.value) : undefined
    };
  },
  fromSDKJSON(object: any): EvalRequest_RefsEntrySDKType {
    return {
      key: isSet(object.key) ? String(object.key) : undefined,
      value: isSet(object.value) ? IdRef.fromSDKJSON(object.value) : undefined
    };
  },
  toSDK(message: EvalRequest_RefsEntry): EvalRequest_RefsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    message.value !== undefined && (obj.value = message.value ? IdRef.toSDK(message.value) : undefined);
    return obj;
  },
  fromProtoMsg(message: EvalRequest_RefsEntryProtoMsg): EvalRequest_RefsEntry {
    return EvalRequest_RefsEntry.decode(message.value);
  },
  toProto(message: EvalRequest_RefsEntry): Uint8Array {
    return EvalRequest_RefsEntry.encode(message).finish();
  }
};
function createBaseEvalRequest(): EvalRequest {
  return {
    bindings: {},
    refs: {},
    testNum: undefined,
    testString: "",
    testBool: undefined,
    instantiatePermission: undefined,
    id: undefined,
    name: undefined,
    testArray: [],
    opt: 0,
    graph: undefined
  };
}
export const EvalRequest = {
  typeUrl: "/misc.EvalRequest",
  encode(message: EvalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.bindings).forEach(([key, value]) => {
      EvalRequest_BindingsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    Object.entries(message.refs).forEach(([key, value]) => {
      EvalRequest_RefsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(18).fork()).ldelim();
    });
    if (message.testNum !== undefined) {
      writer.uint32(24).uint32(message.testNum);
    }
    if (message.testString !== "") {
      writer.uint32(34).string(message.testString);
    }
    if (message.testBool !== undefined) {
      writer.uint32(40).bool(message.testBool);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(66).fork()).ldelim();
    }
    if (message.id !== undefined) {
      writer.uint32(98).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(106).string(message.name);
    }
    for (const v of message.testArray) {
      writer.uint32(114).string(v!);
    }
    if (message.opt !== 0) {
      writer.uint32(120).int32(message.opt);
    }
    if (message.graph !== undefined) {
      TestNest_Graph.encode(message.graph, writer.uint32(130).fork()).ldelim();
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
          const entry1 = EvalRequest_BindingsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.bindings[entry1.key] = entry1.value;
          }
          break;
        case 2:
          const entry2 = EvalRequest_RefsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.refs[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.testNum = reader.uint32();
          break;
        case 4:
          message.testString = reader.string();
          break;
        case 5:
          message.testBool = reader.bool();
          break;
        case 8:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        case 12:
          message.id = reader.string();
          break;
        case 13:
          message.name = reader.string();
          break;
        case 14:
          message.testArray.push(reader.string());
          break;
        case 15:
          message.opt = (reader.int32() as any);
          break;
        case 16:
          message.graph = TestNest_Graph.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EvalRequest {
    const obj = createBaseEvalRequest();
    if (isObject(object.bindings)) obj.bindings = Object.entries(object.bindings).reduce<{
      [key: string]: ExprValue;
    }>((acc, [key, value]) => {
      acc[key] = ExprValue.fromJSON(value);
      return acc;
    }, {});
    if (isObject(object.refs)) obj.refs = Object.entries(object.refs).reduce<{
      [key: string]: IdRef;
    }>((acc, [key, value]) => {
      acc[key] = IdRef.fromJSON(value);
      return acc;
    }, {});
    if (isSet(object.testNum)) obj.testNum = Number(object.testNum);
    if (isSet(object.testString)) obj.testString = String(object.testString);
    if (isSet(object.testBool)) obj.testBool = Boolean(object.testBool);
    if (isSet(object.instantiatePermission)) obj.instantiatePermission = AccessConfig.fromJSON(object.instantiatePermission);
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.name)) obj.name = String(object.name);
    if (Array.isArray(object?.testArray)) obj.testArray = object.testArray.map((e: any) => String(e));
    if (isSet(object.opt)) obj.opt = featureSet_Utf8ValidationFromJSON(object.opt);
    if (isSet(object.graph)) obj.graph = TestNest_Graph.fromJSON(object.graph);
    return obj;
  },
  toJSON(message: EvalRequest): JsonSafe<EvalRequest> {
    const obj: any = {};
    obj.bindings = {};
    if (message.bindings) {
      Object.entries(message.bindings).forEach(([k, v]) => {
        obj.bindings[k] = ExprValue.toJSON(v);
      });
    }
    obj.refs = {};
    if (message.refs) {
      Object.entries(message.refs).forEach(([k, v]) => {
        obj.refs[k] = IdRef.toJSON(v);
      });
    }
    message.testNum !== undefined && (obj.testNum = Math.round(message.testNum));
    message.testString !== undefined && (obj.testString = message.testString);
    message.testBool !== undefined && (obj.testBool = message.testBool);
    message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission ? AccessConfig.toJSON(message.instantiatePermission) : undefined);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    if (message.testArray) {
      obj.testArray = message.testArray.map(e => e);
    } else {
      obj.testArray = [];
    }
    message.opt !== undefined && (obj.opt = featureSet_Utf8ValidationToJSON(message.opt));
    message.graph !== undefined && (obj.graph = message.graph ? TestNest_Graph.toJSON(message.graph) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<EvalRequest>): EvalRequest {
    const message = createBaseEvalRequest();
    message.bindings = Object.entries(object.bindings ?? {}).reduce<{
      [key: string]: ExprValue;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ExprValue.fromPartial(value);
      }
      return acc;
    }, {});
    message.refs = Object.entries(object.refs ?? {}).reduce<{
      [key: string]: IdRef;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = IdRef.fromPartial(value);
      }
      return acc;
    }, {});
    message.testNum = object.testNum ?? undefined;
    message.testString = object.testString ?? "";
    message.testBool = object.testBool ?? undefined;
    if (object.instantiatePermission !== undefined && object.instantiatePermission !== null) {
      message.instantiatePermission = AccessConfig.fromPartial(object.instantiatePermission);
    }
    message.id = object.id ?? undefined;
    message.name = object.name ?? undefined;
    message.testArray = object.testArray?.map(e => e) || [];
    message.opt = object.opt ?? 0;
    if (object.graph !== undefined && object.graph !== null) {
      message.graph = TestNest_Graph.fromPartial(object.graph);
    }
    return message;
  },
  fromSDK(object: EvalRequestSDKType): EvalRequest {
    return {
      bindings: isObject(object.bindings) ? Object.entries(object.bindings).reduce<{
        [key: string]: ExprValue;
      }>((acc, [key, value]) => {
        acc[key] = ExprValue.fromSDK(value);
        return acc;
      }, {}) : {},
      refs: isObject(object.refs) ? Object.entries(object.refs).reduce<{
        [key: string]: IdRef;
      }>((acc, [key, value]) => {
        acc[key] = IdRef.fromSDK(value);
        return acc;
      }, {}) : {},
      testNum: object?.test_num,
      testString: object?.test_string,
      testBool: object?.test_bool,
      instantiatePermission: object.instantiate_permission ? AccessConfig.fromSDK(object.instantiate_permission) : undefined,
      id: object?.id,
      name: object?.name,
      testArray: Array.isArray(object?.test_array) ? object.test_array.map((e: any) => e) : [],
      opt: isSet(object.opt) ? featureSet_Utf8ValidationFromJSON(object.opt) : -1,
      graph: object.graph ? TestNest_Graph.fromSDK(object.graph) : undefined
    };
  },
  fromSDKJSON(object: any): EvalRequestSDKType {
    return {
      bindings: isObject(object.bindings) ? Object.entries(object.bindings).reduce<{
        [key: string]: ExprValue;
      }>((acc, [key, value]) => {
        acc[key] = ExprValue.fromSDKJSON(value);
        return acc;
      }, {}) : {},
      refs: isObject(object.refs) ? Object.entries(object.refs).reduce<{
        [key: string]: IdRef;
      }>((acc, [key, value]) => {
        acc[key] = IdRef.fromSDKJSON(value);
        return acc;
      }, {}) : {},
      test_num: isSet(object.test_num) ? Number(object.test_num) : undefined,
      test_string: isSet(object.test_string) ? String(object.test_string) : "",
      test_bool: isSet(object.test_bool) ? Boolean(object.test_bool) : undefined,
      instantiate_permission: isSet(object.instantiate_permission) ? AccessConfig.fromSDKJSON(object.instantiate_permission) : undefined,
      id: isSet(object.id) ? String(object.id) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      test_array: Array.isArray(object?.test_array) ? object.test_array.map((e: any) => String(e)) : [],
      opt: isSet(object.opt) ? featureSet_Utf8ValidationFromJSON(object.opt) : -1,
      graph: isSet(object.graph) ? TestNest_Graph.fromSDKJSON(object.graph) : undefined
    };
  },
  toSDK(message: EvalRequest): EvalRequestSDKType {
    const obj: any = {};
    obj.bindings = {};
    if (message.bindings) {
      Object.entries(message.bindings).forEach(([k, v]) => {
        obj.bindings[k] = ExprValue.toSDK(v);
      });
    }
    obj.refs = {};
    if (message.refs) {
      Object.entries(message.refs).forEach(([k, v]) => {
        obj.refs[k] = IdRef.toSDK(v);
      });
    }
    obj.test_num = message.testNum;
    obj.test_string = message.testString;
    obj.test_bool = message.testBool;
    message.instantiatePermission !== undefined && (obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toSDK(message.instantiatePermission) : undefined);
    obj.id = message.id;
    obj.name = message.name;
    if (message.testArray) {
      obj.test_array = message.testArray.map(e => e);
    } else {
      obj.test_array = [];
    }
    message.opt !== undefined && (obj.opt = featureSet_Utf8ValidationToJSON(message.opt));
    message.graph !== undefined && (obj.graph = message.graph ? TestNest_Graph.toSDK(message.graph) : undefined);
    return obj;
  },
  fromProtoMsg(message: EvalRequestProtoMsg): EvalRequest {
    return EvalRequest.decode(message.value);
  },
  toProto(message: EvalRequest): Uint8Array {
    return EvalRequest.encode(message).finish();
  },
  toProtoMsg(message: EvalRequest): EvalRequestProtoMsg {
    return {
      typeUrl: "/misc.EvalRequest",
      value: EvalRequest.encode(message).finish()
    };
  }
};
function createBaseAccessConfig(): AccessConfig {
  return {
    sender: undefined
  };
}
export const AccessConfig = {
  typeUrl: "/misc.AccessConfig",
  encode(message: AccessConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== undefined) {
      writer.uint32(10).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccessConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccessConfig {
    const obj = createBaseAccessConfig();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(message: AccessConfig): JsonSafe<AccessConfig> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial(object: DeepPartial<AccessConfig>): AccessConfig {
    const message = createBaseAccessConfig();
    message.sender = object.sender ?? undefined;
    return message;
  },
  fromSDK(object: AccessConfigSDKType): AccessConfig {
    return {
      sender: object?.sender
    };
  },
  fromSDKJSON(object: any): AccessConfigSDKType {
    return {
      sender: isSet(object.sender) ? String(object.sender) : undefined
    };
  },
  toSDK(message: AccessConfig): AccessConfigSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    return obj;
  },
  fromProtoMsg(message: AccessConfigProtoMsg): AccessConfig {
    return AccessConfig.decode(message.value);
  },
  toProto(message: AccessConfig): Uint8Array {
    return AccessConfig.encode(message).finish();
  },
  toProtoMsg(message: AccessConfig): AccessConfigProtoMsg {
    return {
      typeUrl: "/misc.AccessConfig",
      value: AccessConfig.encode(message).finish()
    };
  }
};
function createBaseGenericAuthorization(): GenericAuthorization {
  return {
    msg: undefined
  };
}
export const GenericAuthorization = {
  typeUrl: "/misc.GenericAuthorization",
  encode(message: GenericAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msg !== undefined) {
      writer.uint32(10).string(message.msg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenericAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenericAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenericAuthorization {
    const obj = createBaseGenericAuthorization();
    if (isSet(object.msg)) obj.msg = String(object.msg);
    return obj;
  },
  toJSON(message: GenericAuthorization): JsonSafe<GenericAuthorization> {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },
  fromPartial(object: DeepPartial<GenericAuthorization>): GenericAuthorization {
    const message = createBaseGenericAuthorization();
    message.msg = object.msg ?? undefined;
    return message;
  },
  fromSDK(object: GenericAuthorizationSDKType): GenericAuthorization {
    return {
      msg: object?.msg
    };
  },
  fromSDKJSON(object: any): GenericAuthorizationSDKType {
    return {
      msg: isSet(object.msg) ? String(object.msg) : undefined
    };
  },
  toSDK(message: GenericAuthorization): GenericAuthorizationSDKType {
    const obj: any = {};
    obj.msg = message.msg;
    return obj;
  },
  fromProtoMsg(message: GenericAuthorizationProtoMsg): GenericAuthorization {
    return GenericAuthorization.decode(message.value);
  },
  toProto(message: GenericAuthorization): Uint8Array {
    return GenericAuthorization.encode(message).finish();
  },
  toProtoMsg(message: GenericAuthorization): GenericAuthorizationProtoMsg {
    return {
      typeUrl: "/misc.GenericAuthorization",
      value: GenericAuthorization.encode(message).finish()
    };
  }
};