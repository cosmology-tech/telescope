import { ExprValue, ExprValueAmino, ExprValueSDKType, IdRef, IdRefAmino, IdRefSDKType } from "../google/api/expr/v1alpha1/eval";
import { BinaryReader, BinaryWriter } from "../binary";
import { isSet, DeepPartial, isObject } from "../helpers";
export const protobufPackage = "misc";
export interface EvalRequest_BindingsEntry {
  key: string;
  value: ExprValue;
}
export interface EvalRequest_BindingsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface EvalRequest_BindingsEntryAmino {
  key: string;
  value?: ExprValueAmino;
}
export interface EvalRequest_BindingsEntryAminoMsg {
  type: string;
  value: EvalRequest_BindingsEntryAmino;
}
export interface EvalRequest_BindingsEntrySDKType {
  key: string;
  value: ExprValueSDKType;
}
export interface EvalRequest_RefsEntry {
  key: string;
  value: IdRef;
}
export interface EvalRequest_RefsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface EvalRequest_RefsEntryAmino {
  key: string;
  value?: IdRefAmino;
}
export interface EvalRequest_RefsEntryAminoMsg {
  type: string;
  value: EvalRequest_RefsEntryAmino;
}
export interface EvalRequest_RefsEntrySDKType {
  key: string;
  value: IdRefSDKType;
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
}
export interface EvalRequestAminoMsg {
  type: "/misc.EvalRequest";
  value: EvalRequestAmino;
}
export interface EvalRequestSDKType {
  bindings: {
    [key: string]: ExprValueSDKType;
  };
  refs: {
    [key: string]: IdRefSDKType;
  };
}
function createBaseEvalRequest_BindingsEntry(): EvalRequest_BindingsEntry {
  return {
    key: "",
    value: ExprValue.fromPartial({})
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
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ExprValue.fromJSON(object.value) : undefined
    };
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
    message.value = object.value !== undefined && object.value !== null ? ExprValue.fromPartial(object.value) : ExprValue.fromPartial({});
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
  fromAminoMsg(object: EvalRequest_BindingsEntryAminoMsg): EvalRequest_BindingsEntry {
    return EvalRequest_BindingsEntry.fromAmino(object.value);
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
    value: IdRef.fromPartial({})
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
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? IdRef.fromJSON(object.value) : undefined
    };
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
    message.value = object.value !== undefined && object.value !== null ? IdRef.fromPartial(object.value) : IdRef.fromPartial({});
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
  fromAminoMsg(object: EvalRequest_RefsEntryAminoMsg): EvalRequest_RefsEntry {
    return EvalRequest_RefsEntry.fromAmino(object.value);
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
    refs: {}
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EvalRequest {
    return {
      bindings: isObject(object.bindings) ? Object.entries(object.bindings).reduce<{
        [key: string]: ExprValue;
      }>((acc, [key, value]) => {
        acc[key] = ExprValue.fromJSON(value);
        return acc;
      }, {}) : {},
      refs: isObject(object.refs) ? Object.entries(object.refs).reduce<{
        [key: string]: IdRef;
      }>((acc, [key, value]) => {
        acc[key] = IdRef.fromJSON(value);
        return acc;
      }, {}) : {}
    };
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
      }, {}) : {}
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
      }, {}) : {}
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
      }, {}) : {}
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
    return obj;
  },
  fromAminoMsg(object: EvalRequestAminoMsg): EvalRequest {
    return EvalRequest.fromAmino(object.value);
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