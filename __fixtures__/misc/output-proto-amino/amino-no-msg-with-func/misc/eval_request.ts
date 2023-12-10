import { ExprValue, ExprValueAmino, ExprValueSDKType, IdRef, IdRefAmino, IdRefSDKType } from "../google/api/expr/v1alpha1/eval";
import { BinaryReader, BinaryWriter } from "../binary";
import { isSet, DeepPartial, isObject } from "../helpers";
export const protobufPackage = "misc";
export interface EvalRequest_BindingsEntry {
  key: string;
  value?: ExprValue;
}
export interface EvalRequest_BindingsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface EvalRequest_BindingsEntryAmino {
  key?: string;
  value?: ExprValueAmino;
}
export interface EvalRequest_BindingsEntrySDKType {
  key: string;
  value?: ExprValueSDKType;
}
export interface EvalRequest_RefsEntry {
  key: string;
  value?: IdRef;
}
export interface EvalRequest_RefsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface EvalRequest_RefsEntryAmino {
  key?: string;
  value?: IdRefAmino;
}
export interface EvalRequest_RefsEntrySDKType {
  key: string;
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
  testNum: number;
  testString: string;
  testBool: boolean;
  instantiatePermission?: AccessConfig;
  /** [(gogoproto.nullable) = false] wouldn't work in this case */
  id?: string;
  name?: string;
  testArray: string[];
}
export interface EvalRequestProtoMsg {
  typeUrl: "/misc.EvalRequest";
  value: Uint8Array;
}
export interface EvalRequestAmino {
  /**
   * Bindings for the external variables.  The types SHOULD be compatible
   * with the type environment in [CheckRequest][google.api.expr.conformance.v1alpha1.CheckRequest], if checked.
   */
  bindings?: {
    [key: string]: ExprValueAmino;
  };
  refs?: {
    [key: string]: IdRefAmino;
  };
  test_num?: number;
  test_string?: string;
  test_bool?: boolean;
  instantiate_permission?: AccessConfigAmino;
  /** [(gogoproto.nullable) = false] wouldn't work in this case */
  id?: string;
  name?: string;
  test_array?: string[];
}
export interface EvalRequestSDKType {
  bindings: {
    [key: string]: ExprValueSDKType;
  };
  refs: {
    [key: string]: IdRefSDKType;
  };
  test_num: number;
  test_string: string;
  test_bool: boolean;
  instantiate_permission?: AccessConfigSDKType;
  id?: string;
  name?: string;
  test_array: string[];
}
export interface AccessConfig {
  sender: string;
}
export interface AccessConfigProtoMsg {
  typeUrl: "/misc.AccessConfig";
  value: Uint8Array;
}
export interface AccessConfigAmino {
  sender?: string;
}
export interface AccessConfigSDKType {
  sender: string;
}
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
  fromJSON(object: any): EvalRequest_BindingsEntry {
    const obj = createBaseEvalRequest_BindingsEntry();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = ExprValue.fromJSON(object.value);
    return obj;
  },
  toJSON(message: EvalRequest_BindingsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? ExprValue.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<EvalRequest_BindingsEntry>): EvalRequest_BindingsEntry {
    const message = createBaseEvalRequest_BindingsEntry();
    message.key = object.key ?? "";
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
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ExprValue.fromSDKJSON(object.value) : undefined
    };
  },
  toSDK(message: EvalRequest_BindingsEntry): EvalRequest_BindingsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    message.value !== undefined && (obj.value = message.value ? ExprValue.toSDK(message.value) : undefined);
    return obj;
  },
  fromAmino(object: EvalRequest_BindingsEntryAmino): EvalRequest_BindingsEntry {
    return {
      key: object.key,
      value: object?.value ? ExprValue.fromAmino(object.value) : undefined
    };
  },
  toAmino(message: EvalRequest_BindingsEntry): EvalRequest_BindingsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value ? ExprValue.toAmino(message.value) : undefined;
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
    key: "",
    value: undefined
  };
}
export const EvalRequest_RefsEntry = {
  encode(message: EvalRequest_RefsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
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
  toJSON(message: EvalRequest_RefsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? IdRef.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<EvalRequest_RefsEntry>): EvalRequest_RefsEntry {
    const message = createBaseEvalRequest_RefsEntry();
    message.key = object.key ?? "";
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
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? IdRef.fromSDKJSON(object.value) : undefined
    };
  },
  toSDK(message: EvalRequest_RefsEntry): EvalRequest_RefsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    message.value !== undefined && (obj.value = message.value ? IdRef.toSDK(message.value) : undefined);
    return obj;
  },
  fromAmino(object: EvalRequest_RefsEntryAmino): EvalRequest_RefsEntry {
    return {
      key: object.key,
      value: object?.value ? IdRef.fromAmino(object.value) : undefined
    };
  },
  toAmino(message: EvalRequest_RefsEntry): EvalRequest_RefsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value ? IdRef.toAmino(message.value) : undefined;
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
    testNum: 0,
    testString: "",
    testBool: false,
    instantiatePermission: undefined,
    id: undefined,
    name: undefined,
    testArray: []
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
    if (message.testNum !== 0) {
      writer.uint32(24).uint32(message.testNum);
    }
    if (message.testString !== "") {
      writer.uint32(34).string(message.testString);
    }
    if (message.testBool === true) {
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
    return obj;
  },
  toJSON(message: EvalRequest): unknown {
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
    message.testNum = object.testNum ?? 0;
    message.testString = object.testString ?? "";
    message.testBool = object.testBool ?? false;
    if (object.instantiatePermission !== undefined && object.instantiatePermission !== null) {
      message.instantiatePermission = AccessConfig.fromPartial(object.instantiatePermission);
    }
    message.id = object.id ?? undefined;
    message.name = object.name ?? undefined;
    message.testArray = object.testArray?.map(e => e) || [];
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
      testArray: Array.isArray(object?.test_array) ? object.test_array.map((e: any) => e) : []
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
      test_num: isSet(object.test_num) ? Number(object.test_num) : 0,
      test_string: isSet(object.test_string) ? String(object.test_string) : "",
      test_bool: isSet(object.test_bool) ? Boolean(object.test_bool) : false,
      instantiate_permission: isSet(object.instantiate_permission) ? AccessConfig.fromSDKJSON(object.instantiate_permission) : undefined,
      id: isSet(object.id) ? String(object.id) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      test_array: Array.isArray(object?.test_array) ? object.test_array.map((e: any) => String(e)) : []
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
    return obj;
  },
  fromAmino(object: EvalRequestAmino): EvalRequest {
    return {
      bindings: isObject(object.bindings) ? Object.entries(object.bindings).reduce<{
        [key: string]: ExprValue;
      }>((acc, [key, value]) => {
        acc[key] = ExprValue.fromAmino(value);
        return acc;
      }, {}) : {},
      refs: isObject(object.refs) ? Object.entries(object.refs).reduce<{
        [key: string]: IdRef;
      }>((acc, [key, value]) => {
        acc[key] = IdRef.fromAmino(value);
        return acc;
      }, {}) : {},
      testNum: object.test_num,
      testString: object.test_string,
      testBool: object.test_bool,
      instantiatePermission: object?.instantiate_permission ? AccessConfig.fromAmino(object.instantiate_permission) : undefined,
      id: object?.id,
      name: object?.name,
      testArray: Array.isArray(object?.test_array) ? object.test_array.map((e: any) => e) : []
    };
  },
  toAmino(message: EvalRequest): EvalRequestAmino {
    const obj: any = {};
    obj.bindings = {};
    if (message.bindings) {
      Object.entries(message.bindings).forEach(([k, v]) => {
        obj.bindings[k] = ExprValue.toAmino(v);
      });
    }
    obj.refs = {};
    if (message.refs) {
      Object.entries(message.refs).forEach(([k, v]) => {
        obj.refs[k] = IdRef.toAmino(v);
      });
    }
    obj.test_num = message.testNum;
    obj.test_string = message.testString;
    obj.test_bool = message.testBool;
    obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission) : undefined;
    obj.id = message.id;
    obj.name = message.name;
    if (message.testArray) {
      obj.test_array = message.testArray.map(e => e);
    } else {
      obj.test_array = [];
    }
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
    sender: ""
  };
}
export const AccessConfig = {
  typeUrl: "/misc.AccessConfig",
  encode(message: AccessConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
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
  toJSON(message: AccessConfig): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial(object: DeepPartial<AccessConfig>): AccessConfig {
    const message = createBaseAccessConfig();
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: AccessConfigSDKType): AccessConfig {
    return {
      sender: object?.sender
    };
  },
  fromSDKJSON(object: any): AccessConfigSDKType {
    return {
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  toSDK(message: AccessConfig): AccessConfigSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    return obj;
  },
  fromAmino(object: AccessConfigAmino): AccessConfig {
    return {
      sender: object.sender
    };
  },
  toAmino(message: AccessConfig): AccessConfigAmino {
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