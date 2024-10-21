import { LabelDescriptor } from "./label";
import { LaunchStage } from "./launch_stage";
import { Struct } from "../protobuf/struct";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/**
 * An object that describes the schema of a [MonitoredResource][google.api.MonitoredResource] object using a
 * type name and a set of labels.  For example, the monitored resource
 * descriptor for Google Compute Engine VM instances has a type of
 * `"gce_instance"` and specifies the use of the labels `"instance_id"` and
 * `"zone"` to identify particular VM instances.
 * 
 * Different APIs can support different monitored resource types. APIs generally
 * provide a `list` method that returns the monitored resource descriptors used
 * by the API.
 */
export interface MonitoredResourceDescriptor {
  /**
   * Optional. The resource name of the monitored resource descriptor:
   * `"projects/{project_id}/monitoredResourceDescriptors/{type}"` where
   * {type} is the value of the `type` field in this object and
   * {project_id} is a project ID that provides API-specific context for
   * accessing the type.  APIs that do not use project information can use the
   * resource name format `"monitoredResourceDescriptors/{type}"`.
   */
  name: string;
  /**
   * Required. The monitored resource type. For example, the type
   * `"cloudsql_database"` represents databases in Google Cloud SQL.
   */
  type: string;
  /**
   * Optional. A concise name for the monitored resource type that might be
   * displayed in user interfaces. It should be a Title Cased Noun Phrase,
   * without any article or other determiners. For example,
   * `"Google Cloud SQL Database"`.
   */
  displayName: string;
  /**
   * Optional. A detailed description of the monitored resource type that might
   * be used in documentation.
   */
  description: string;
  /**
   * Required. A set of labels used to describe instances of this monitored
   * resource type. For example, an individual Google Cloud SQL database is
   * identified by values for the labels `"database_id"` and `"zone"`.
   */
  labels: LabelDescriptor[];
  /** Optional. The launch stage of the monitored resource definition. */
  launchStage: LaunchStage;
}
export interface MonitoredResource_LabelsEntry {
  key: string;
  value: string;
}
/**
 * An object representing a resource that can be used for monitoring, logging,
 * billing, or other purposes. Examples include virtual machine instances,
 * databases, and storage devices such as disks. The `type` field identifies a
 * [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] object that describes the resource's
 * schema. Information in the `labels` field identifies the actual resource and
 * its attributes according to the schema. For example, a particular Compute
 * Engine VM instance could be represented by the following object, because the
 * [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] for `"gce_instance"` has labels
 * `"instance_id"` and `"zone"`:
 * 
 *     { "type": "gce_instance",
 *       "labels": { "instance_id": "12345678901234",
 *                   "zone": "us-central1-a" }}
 */
export interface MonitoredResource {
  /**
   * Required. The monitored resource type. This field must match
   * the `type` field of a [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] object. For
   * example, the type of a Compute Engine VM instance is `gce_instance`.
   */
  type: string;
  /**
   * Required. Values for all of the labels listed in the associated monitored
   * resource descriptor. For example, Compute Engine VM instances use the
   * labels `"project_id"`, `"instance_id"`, and `"zone"`.
   */
  labels: {
    [key: string]: string;
  };
}
export interface MonitoredResourceMetadata_UserLabelsEntry {
  key: string;
  value: string;
}
/**
 * Auxiliary metadata for a [MonitoredResource][google.api.MonitoredResource] object.
 * [MonitoredResource][google.api.MonitoredResource] objects contain the minimum set of information to
 * uniquely identify a monitored resource instance. There is some other useful
 * auxiliary metadata. Monitoring and Logging use an ingestion
 * pipeline to extract metadata for cloud resources of all types, and store
 * the metadata in this message.
 */
export interface MonitoredResourceMetadata {
  /**
   * Output only. Values for predefined system metadata labels.
   * System labels are a kind of metadata extracted by Google, including
   * "machine_image", "vpc", "subnet_id",
   * "security_group", "name", etc.
   * System label values can be only strings, Boolean values, or a list of
   * strings. For example:
   * 
   *     { "name": "my-test-instance",
   *       "security_group": ["a", "b", "c"],
   *       "spot_instance": false }
   */
  systemLabels?: Struct;
  /** Output only. A map of user-defined metadata labels. */
  userLabels: {
    [key: string]: string;
  };
}
function createBaseMonitoredResourceDescriptor(): MonitoredResourceDescriptor {
  return {
    name: "",
    type: "",
    displayName: "",
    description: "",
    labels: [],
    launchStage: 0
  };
}
export const MonitoredResourceDescriptor = {
  typeUrl: "/google.api.MonitoredResourceDescriptor",
  encode(message: MonitoredResourceDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MonitoredResourceDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: DeepPartial<MonitoredResourceDescriptor>): MonitoredResourceDescriptor {
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
function createBaseMonitoredResource_LabelsEntry(): MonitoredResource_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}
export const MonitoredResource_LabelsEntry = {
  encode(message: MonitoredResource_LabelsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MonitoredResource_LabelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoredResource_LabelsEntry();
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
  fromPartial(object: DeepPartial<MonitoredResource_LabelsEntry>): MonitoredResource_LabelsEntry {
    const message = createBaseMonitoredResource_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseMonitoredResource(): MonitoredResource {
  return {
    type: "",
    labels: {}
  };
}
export const MonitoredResource = {
  typeUrl: "/google.api.MonitoredResource",
  encode(message: MonitoredResource, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      MonitoredResource_LabelsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MonitoredResource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoredResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          const entry2 = MonitoredResource_LabelsEntry.decode(reader, reader.uint32());
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
  fromPartial(object: DeepPartial<MonitoredResource>): MonitoredResource {
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
function createBaseMonitoredResourceMetadata_UserLabelsEntry(): MonitoredResourceMetadata_UserLabelsEntry {
  return {
    key: "",
    value: ""
  };
}
export const MonitoredResourceMetadata_UserLabelsEntry = {
  encode(message: MonitoredResourceMetadata_UserLabelsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MonitoredResourceMetadata_UserLabelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoredResourceMetadata_UserLabelsEntry();
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
  fromPartial(object: DeepPartial<MonitoredResourceMetadata_UserLabelsEntry>): MonitoredResourceMetadata_UserLabelsEntry {
    const message = createBaseMonitoredResourceMetadata_UserLabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseMonitoredResourceMetadata(): MonitoredResourceMetadata {
  return {
    systemLabels: undefined,
    userLabels: {}
  };
}
export const MonitoredResourceMetadata = {
  typeUrl: "/google.api.MonitoredResourceMetadata",
  encode(message: MonitoredResourceMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.systemLabels !== undefined) {
      Struct.encode(message.systemLabels, writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.userLabels).forEach(([key, value]) => {
      MonitoredResourceMetadata_UserLabelsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MonitoredResourceMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoredResourceMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.systemLabels = Struct.decode(reader, reader.uint32());
          break;
        case 2:
          const entry2 = MonitoredResourceMetadata_UserLabelsEntry.decode(reader, reader.uint32());
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
  fromPartial(object: DeepPartial<MonitoredResourceMetadata>): MonitoredResourceMetadata {
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