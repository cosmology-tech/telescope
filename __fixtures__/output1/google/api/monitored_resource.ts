import { LabelDescriptor } from "./label";
import { LaunchStage, launchStageFromJSON, launchStageToJSON } from "./launch_stage";
import { Struct } from "../protobuf/struct";
import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial } from "@osmonauts/helpers";
export interface MonitoredResourceDescriptor {
  name: string;
  type: string;
  displayName: string;
  description: string;
  labels: LabelDescriptor[];
  launchStage: LaunchStage;
}

function createBaseMonitoredResourceDescriptor(): MonitoredResourceDescriptor {
  return {
    name: "",
    type: "",
    displayName: "",
    description: "",
    labels: [],
    launchStage: undefined
  };
}

export const MonitoredResourceDescriptor = {
  encode(message: MonitoredResourceDescriptor, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }

    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }

    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }

    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }

    for (const v of message.labels) {
      LabelDescriptor.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.launchStage !== 0) {
      writer.uint32(56).int32(message.launchStage);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MonitoredResourceDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoredResourceDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 5:
          message.name = reader.string();
          break;

        case 1:
          message.type = reader.string();
          break;

        case 2:
          message.displayName = reader.string();
          break;

        case 3:
          message.description = reader.string();
          break;

        case 4:
          message.labels.push(LabelDescriptor.decode(reader, reader.uint32()));
          break;

        case 7:
          message.launchStage = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MonitoredResourceDescriptor {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? String(object.type) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      description: isSet(object.description) ? String(object.description) : "",
      labels: Array.isArray(object?.labels) ? object.labels.map((e: any) => LabelDescriptor.fromJSON(e)) : [],
      launchStage: isSet(object.launchStage) ? launchStageFromJSON(object.launchStage) : 0
    };
  },

  toJSON(message: MonitoredResourceDescriptor): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = message.type);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.description !== undefined && (obj.description = message.description);

    if (message.labels) {
      obj.labels = message.labels.map(e => e ? LabelDescriptor.toJSON(e) : undefined);
    } else {
      obj.labels = [];
    }

    message.launchStage !== undefined && (obj.launchStage = launchStageToJSON(message.launchStage));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MonitoredResourceDescriptor>, I>>(object: I): MonitoredResourceDescriptor {
    const message = createBaseMonitoredResourceDescriptor();
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.displayName = object.displayName ?? "";
    message.description = object.description ?? "";
    message.labels = object.labels?.map(e => LabelDescriptor.fromPartial(e)) || [];
    message.launchStage = object.launchStage ?? 0;
    return message;
  }

};
export interface MonitoredResource_StringMapEntry {
  key: string;
  value: string;
}

function createBaseMonitoredResource_StringMapEntry(): MonitoredResource_StringMapEntry {
  return {
    key: "",
    value: ""
  };
}

export const MonitoredResource_StringMapEntry = {
  encode(message: MonitoredResource_StringMapEntry, writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MonitoredResource_StringMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoredResource_StringMapEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MonitoredResource_StringMapEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: MonitoredResource_StringMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MonitoredResource_StringMapEntry>, I>>(object: I): MonitoredResource_StringMapEntry {
    const message = createBaseMonitoredResource_StringMapEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};
export interface MonitoredResource {
  type: string;
  labels: {
    [key: string]: string;
  };
}

function createBaseMonitoredResource(): MonitoredResource {
  return {
    type: "",
    labels: ""
  };
}

export const MonitoredResource = {
  encode(message: MonitoredResource, writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }

    Object.entries(message.labels).forEach(([key, value]) => {
      MonitoredResource_LabelsMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MonitoredResource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoredResource();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;

        case 2:
          const entry2 = MonitoredResource_LabelsMapEntry.decode(reader, reader.uint32());

          if (entry2.value !== undefined) {
            message.labels[entry2.key] = entry2.value;
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MonitoredResource {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },

  toJSON(message: MonitoredResource): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    obj.labels = {};

    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MonitoredResource>, I>>(object: I): MonitoredResource {
    const message = createBaseMonitoredResource();
    message.type = object.type ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    return message;
  }

};
export interface MonitoredResourceMetadata_StringMapEntry {
  key: string;
  value: string;
}

function createBaseMonitoredResourceMetadata_StringMapEntry(): MonitoredResourceMetadata_StringMapEntry {
  return {
    key: "",
    value: ""
  };
}

export const MonitoredResourceMetadata_StringMapEntry = {
  encode(message: MonitoredResourceMetadata_StringMapEntry, writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MonitoredResourceMetadata_StringMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoredResourceMetadata_StringMapEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MonitoredResourceMetadata_StringMapEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: MonitoredResourceMetadata_StringMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MonitoredResourceMetadata_StringMapEntry>, I>>(object: I): MonitoredResourceMetadata_StringMapEntry {
    const message = createBaseMonitoredResourceMetadata_StringMapEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};
export interface MonitoredResourceMetadata {
  systemLabels: Struct;
  userLabels: {
    [key: string]: string;
  };
}

function createBaseMonitoredResourceMetadata(): MonitoredResourceMetadata {
  return {
    systemLabels: undefined,
    userLabels: ""
  };
}

export const MonitoredResourceMetadata = {
  encode(message: MonitoredResourceMetadata, writer = _m0.Writer.create()): _m0.Writer {
    if (message.systemLabels !== undefined) {
      Struct.encode(message.systemLabels, writer.uint32(10).fork()).ldelim();
    }

    Object.entries(message.userLabels).forEach(([key, value]) => {
      MonitoredResourceMetadata_UserLabelsMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MonitoredResourceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoredResourceMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.systemLabels = Struct.decode(reader, reader.uint32());
          break;

        case 2:
          const entry2 = MonitoredResourceMetadata_UserLabelsMapEntry.decode(reader, reader.uint32());

          if (entry2.value !== undefined) {
            message.userLabels[entry2.key] = entry2.value;
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MonitoredResourceMetadata {
    return {
      systemLabels: isSet(object.systemLabels) ? Struct.fromJSON(object.systemLabels) : undefined,
      userLabels: isObject(object.userLabels) ? Object.entries(object.userLabels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },

  toJSON(message: MonitoredResourceMetadata): unknown {
    const obj: any = {};
    message.systemLabels !== undefined && (obj.systemLabels = message.systemLabels ? Struct.toJSON(message.systemLabels) : undefined);
    obj.userLabels = {};

    if (message.userLabels) {
      Object.entries(message.userLabels).forEach(([k, v]) => {
        obj.userLabels[k] = v;
      });
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MonitoredResourceMetadata>, I>>(object: I): MonitoredResourceMetadata {
    const message = createBaseMonitoredResourceMetadata();
    message.systemLabels = object.systemLabels !== undefined && object.systemLabels !== null ? Struct.fromPartial(object.systemLabels) : undefined;
    message.userLabels = Object.entries(object.userLabels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    return message;
  }

};