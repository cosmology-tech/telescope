import { Timestamp } from "../../../protobuf/timestamp";
import { ConfigChange } from "../../config_change";
import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp, bytesFromBase64, base64FromBytes, isObject } from "@osmonauts/helpers";
export interface ManagedService {
  serviceName: string;
  producerProjectId: string;
}

function createBaseManagedService(): ManagedService {
  return {
    serviceName: "",
    producerProjectId: ""
  };
}

export const ManagedService = {
  encode(message: ManagedService, writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(18).string(message.serviceName);
    }

    if (message.producerProjectId !== "") {
      writer.uint32(26).string(message.producerProjectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ManagedService {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseManagedService();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.serviceName = reader.string();
          break;

        case 3:
          message.producerProjectId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ManagedService {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      producerProjectId: isSet(object.producerProjectId) ? String(object.producerProjectId) : ""
    };
  },

  toJSON(message: ManagedService): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.producerProjectId !== undefined && (obj.producerProjectId = message.producerProjectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ManagedService>, I>>(object: I): ManagedService {
    const message = createBaseManagedService();
    message.serviceName = object.serviceName ?? "";
    message.producerProjectId = object.producerProjectId ?? "";
    return message;
  }

};
export interface OperationMetadata {
  resourceNames: string[];
  steps: OperationMetadata_Step[];
  progressPercentage: number;
  startTime: Date;
}

function createBaseOperationMetadata(): OperationMetadata {
  return {
    resourceNames: [],
    steps: [],
    progressPercentage: 0,
    startTime: undefined
  };
}

export const OperationMetadata = {
  encode(message: OperationMetadata, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resourceNames) {
      writer.uint32(10).string(v!);
    }

    for (const v of message.steps) {
      OperationMetadata_Step.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.progressPercentage !== 0) {
      writer.uint32(24).int32(message.progressPercentage);
    }

    if (message.startTime !== undefined) Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.resourceNames.push(reader.string());

        case 2:
          message.steps.push(OperationMetadata_Step.decode(reader, reader.uint32()));
          break;

        case 3:
          message.progressPercentage = reader.int32();
          break;

        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OperationMetadata {
    return {
      resourceNames: Array.isArray(object?.resourceNames) ? object.resourceNames.map((e: any) => String(e)) : [],
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => OperationMetadata_Step.fromJSON(e)) : [],
      progressPercentage: isSet(object.progressPercentage) ? Number(object.progressPercentage) : 0,
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined
    };
  },

  toJSON(message: OperationMetadata): unknown {
    const obj: any = {};

    if (message.resourceNames) {
      obj.resourceNames = message.resourceNames.map(e => e);
    } else {
      obj.resourceNames = [];
    }

    if (message.steps) {
      obj.steps = message.steps.map(e => e ? OperationMetadata_Step.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }

    message.progressPercentage !== undefined && (obj.progressPercentage = Math.round(message.progressPercentage));
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OperationMetadata>, I>>(object: I): OperationMetadata {
    const message = createBaseOperationMetadata();
    message.resourceNames = object.resourceNames?.map(e => e) || [];
    message.steps = object.steps?.map(e => OperationMetadata_Step.fromPartial(e)) || [];
    message.progressPercentage = object.progressPercentage ?? 0;
    message.startTime = object.startTime ?? undefined;
    return message;
  }

};
export interface OperationMetadata_Step {
  description: string;
  status: OperationMetadata_Status;
}

function createBaseOperationMetadata_Step(): OperationMetadata_Step {
  return {
    description: "",
    status: undefined
  };
}

export const OperationMetadata_Step = {
  encode(message: OperationMetadata_Step, writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationMetadata_Step {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationMetadata_Step();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.description = reader.string();
          break;

        case 4:
          message.status = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OperationMetadata_Step {
    return {
      description: isSet(object.description) ? String(object.description) : "",
      status: isSet(object.status) ? operationMetadata_StatusFromJSON(object.status) : 0
    };
  },

  toJSON(message: OperationMetadata_Step): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description);
    message.status !== undefined && (obj.status = operationMetadata_StatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OperationMetadata_Step>, I>>(object: I): OperationMetadata_Step {
    const message = createBaseOperationMetadata_Step();
    message.description = object.description ?? "";
    message.status = object.status ?? 0;
    return message;
  }

};
export enum OperationMetadata_Status {
  /*Unspecifed code.*/
  STATUS_UNSPECIFIED = 0,

  /*The operation or step has completed without errors.*/
  DONE = 1,

  /*The operation or step has not started yet.*/
  NOT_STARTED = 2,

  /*The operation or step is in progress.*/
  IN_PROGRESS = 3,

  /*The operation or step has completed with errors. If the operation is
  rollbackable, the rollback completed with errors too.*/
  FAILED = 4,

  /*The operation or step has completed with cancellation.*/
  CANCELLED = 5,
  UNRECOGNIZED = -1,
}
export function operationMetadataStatusFromJSON(object: any): OperationMetadata_Status {
  switch (object) {
    case "STATUS_UNSPECIFIED":
      return OperationMetadata_Status.STATUS_UNSPECIFIED;

    case "DONE":
      return OperationMetadata_Status.DONE;

    case "NOT_STARTED":
      return OperationMetadata_Status.NOT_STARTED;

    case "IN_PROGRESS":
      return OperationMetadata_Status.IN_PROGRESS;

    case "FAILED":
      return OperationMetadata_Status.FAILED;

    case "CANCELLED":
      return OperationMetadata_Status.CANCELLED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return OperationMetadata_Status.UNRECOGNIZED;
  }
}
export function operationMetadataStatusToJSON(object: OperationMetadata_Status): string {
  switch (object) {
    case OperationMetadata_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";

    case OperationMetadata_Status.DONE:
      return "DONE";

    case OperationMetadata_Status.NOT_STARTED:
      return "NOT_STARTED";

    case OperationMetadata_Status.IN_PROGRESS:
      return "IN_PROGRESS";

    case OperationMetadata_Status.FAILED:
      return "FAILED";

    case OperationMetadata_Status.CANCELLED:
      return "CANCELLED";

    default:
      return "UNKNOWN";
  }
}
export interface Diagnostic {
  location: string;
  kind: Diagnostic_Kind;
  message: string;
}

function createBaseDiagnostic(): Diagnostic {
  return {
    location: "",
    kind: undefined,
    message: ""
  };
}

export const Diagnostic = {
  encode(message: Diagnostic, writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== "") {
      writer.uint32(10).string(message.location);
    }

    if (message.kind !== 0) {
      writer.uint32(16).int32(message.kind);
    }

    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Diagnostic {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiagnostic();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.location = reader.string();
          break;

        case 2:
          message.kind = (reader.int32() as any);
          break;

        case 3:
          message.message = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Diagnostic {
    return {
      location: isSet(object.location) ? String(object.location) : "",
      kind: isSet(object.kind) ? diagnostic_KindFromJSON(object.kind) : 0,
      message: isSet(object.message) ? String(object.message) : ""
    };
  },

  toJSON(message: Diagnostic): unknown {
    const obj: any = {};
    message.location !== undefined && (obj.location = message.location);
    message.kind !== undefined && (obj.kind = diagnostic_KindToJSON(message.kind));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Diagnostic>, I>>(object: I): Diagnostic {
    const message = createBaseDiagnostic();
    message.location = object.location ?? "";
    message.kind = object.kind ?? 0;
    message.message = object.message ?? "";
    return message;
  }

};
export enum Diagnostic_Kind {
  /*Warnings and errors*/
  WARNING = 0,

  /*Only errors*/
  ERROR = 1,
  UNRECOGNIZED = -1,
}
export function diagnosticKindFromJSON(object: any): Diagnostic_Kind {
  switch (object) {
    case "WARNING":
      return Diagnostic_Kind.WARNING;

    case "ERROR":
      return Diagnostic_Kind.ERROR;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Diagnostic_Kind.UNRECOGNIZED;
  }
}
export function diagnosticKindToJSON(object: Diagnostic_Kind): string {
  switch (object) {
    case Diagnostic_Kind.WARNING:
      return "WARNING";

    case Diagnostic_Kind.ERROR:
      return "ERROR";

    default:
      return "UNKNOWN";
  }
}
export interface ConfigSource {
  id: string;
  files: ConfigFile[];
}

function createBaseConfigSource(): ConfigSource {
  return {
    id: "",
    files: []
  };
}

export const ConfigSource = {
  encode(message: ConfigSource, writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(42).string(message.id);
    }

    for (const v of message.files) {
      ConfigFile.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigSource();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 5:
          message.id = reader.string();
          break;

        case 2:
          message.files.push(ConfigFile.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ConfigSource {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      files: Array.isArray(object?.files) ? object.files.map((e: any) => ConfigFile.fromJSON(e)) : []
    };
  },

  toJSON(message: ConfigSource): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);

    if (message.files) {
      obj.files = message.files.map(e => e ? ConfigFile.toJSON(e) : undefined);
    } else {
      obj.files = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigSource>, I>>(object: I): ConfigSource {
    const message = createBaseConfigSource();
    message.id = object.id ?? "";
    message.files = object.files?.map(e => ConfigFile.fromPartial(e)) || [];
    return message;
  }

};
export interface ConfigFile {
  filePath: string;
  fileContents: Uint8Array;
  fileType: ConfigFile_FileType;
}

function createBaseConfigFile(): ConfigFile {
  return {
    filePath: "",
    fileContents: new Uint8Array(),
    fileType: undefined
  };
}

export const ConfigFile = {
  encode(message: ConfigFile, writer = _m0.Writer.create()): _m0.Writer {
    if (message.filePath !== "") {
      writer.uint32(10).string(message.filePath);
    }

    if (message.fileContents.length !== 0) {
      writer.uint32(26).bytes(message.fileContents);
    }

    if (message.fileType !== 0) {
      writer.uint32(32).int32(message.fileType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigFile();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.filePath = reader.string();
          break;

        case 3:
          message.fileContents = reader.bytes();
          break;

        case 4:
          message.fileType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ConfigFile {
    return {
      filePath: isSet(object.filePath) ? String(object.filePath) : "",
      fileContents: isSet(object.fileContents) ? bytesFromBase64(object.fileContents) : new Uint8Array(),
      fileType: isSet(object.fileType) ? configFile_FileTypeFromJSON(object.fileType) : 0
    };
  },

  toJSON(message: ConfigFile): unknown {
    const obj: any = {};
    message.filePath !== undefined && (obj.filePath = message.filePath);
    message.fileContents !== undefined && (obj.fileContents = base64FromBytes(message.fileContents !== undefined ? message.fileContents : new Uint8Array()));
    message.fileType !== undefined && (obj.fileType = configFile_FileTypeToJSON(message.fileType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigFile>, I>>(object: I): ConfigFile {
    const message = createBaseConfigFile();
    message.filePath = object.filePath ?? "";
    message.fileContents = object.fileContents ?? new Uint8Array();
    message.fileType = object.fileType ?? 0;
    return message;
  }

};
export enum ConfigFile_FileType {
  /*Unknown file type.*/
  FILE_TYPE_UNSPECIFIED = 0,

  /*YAML-specification of service.*/
  SERVICE_CONFIG_YAML = 1,

  /*OpenAPI specification, serialized in JSON.*/
  OPEN_API_JSON = 2,

  /*OpenAPI specification, serialized in YAML.*/
  OPEN_API_YAML = 3,

  /*FileDescriptorSet, generated by protoc.
  
  To generate, use protoc with imports and source info included.
  For an example test.proto file, the following command would put the value
  in a new file named out.pb.
  
  $protoc --include_imports --include_source_info test.proto -o out.pb*/
  FILE_DESCRIPTOR_SET_PROTO = 4,

  /*Uncompiled Proto file. Used for storage and display purposes only,
  currently server-side compilation is not supported. Should match the
  inputs to 'protoc' command used to generated FILE_DESCRIPTOR_SET_PROTO. A
  file of this type can only be included if at least one file of type
  FILE_DESCRIPTOR_SET_PROTO is included.*/
  PROTO_FILE = 6,
  UNRECOGNIZED = -1,
}
export function configFileFileTypeFromJSON(object: any): ConfigFile_FileType {
  switch (object) {
    case "FILE_TYPE_UNSPECIFIED":
      return ConfigFile_FileType.FILE_TYPE_UNSPECIFIED;

    case "SERVICE_CONFIG_YAML":
      return ConfigFile_FileType.SERVICE_CONFIG_YAML;

    case "OPEN_API_JSON":
      return ConfigFile_FileType.OPEN_API_JSON;

    case "OPEN_API_YAML":
      return ConfigFile_FileType.OPEN_API_YAML;

    case "FILE_DESCRIPTOR_SET_PROTO":
      return ConfigFile_FileType.FILE_DESCRIPTOR_SET_PROTO;

    case "PROTO_FILE":
      return ConfigFile_FileType.PROTO_FILE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ConfigFile_FileType.UNRECOGNIZED;
  }
}
export function configFileFileTypeToJSON(object: ConfigFile_FileType): string {
  switch (object) {
    case ConfigFile_FileType.FILE_TYPE_UNSPECIFIED:
      return "FILE_TYPE_UNSPECIFIED";

    case ConfigFile_FileType.SERVICE_CONFIG_YAML:
      return "SERVICE_CONFIG_YAML";

    case ConfigFile_FileType.OPEN_API_JSON:
      return "OPEN_API_JSON";

    case ConfigFile_FileType.OPEN_API_YAML:
      return "OPEN_API_YAML";

    case ConfigFile_FileType.FILE_DESCRIPTOR_SET_PROTO:
      return "FILE_DESCRIPTOR_SET_PROTO";

    case ConfigFile_FileType.PROTO_FILE:
      return "PROTO_FILE";

    default:
      return "UNKNOWN";
  }
}
export interface ConfigRef {
  name: string;
}

function createBaseConfigRef(): ConfigRef {
  return {
    name: ""
  };
}

export const ConfigRef = {
  encode(message: ConfigRef, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigRef {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRef();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ConfigRef {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: ConfigRef): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigRef>, I>>(object: I): ConfigRef {
    const message = createBaseConfigRef();
    message.name = object.name ?? "";
    return message;
  }

};
export interface ChangeReport {
  configChanges: ConfigChange[];
}

function createBaseChangeReport(): ChangeReport {
  return {
    configChanges: []
  };
}

export const ChangeReport = {
  encode(message: ChangeReport, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.configChanges) {
      ConfigChange.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeReport();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.configChanges.push(ConfigChange.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChangeReport {
    return {
      configChanges: Array.isArray(object?.configChanges) ? object.configChanges.map((e: any) => ConfigChange.fromJSON(e)) : []
    };
  },

  toJSON(message: ChangeReport): unknown {
    const obj: any = {};

    if (message.configChanges) {
      obj.configChanges = message.configChanges.map(e => e ? ConfigChange.toJSON(e) : undefined);
    } else {
      obj.configChanges = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChangeReport>, I>>(object: I): ChangeReport {
    const message = createBaseChangeReport();
    message.configChanges = object.configChanges?.map(e => ConfigChange.fromPartial(e)) || [];
    return message;
  }

};
export interface Rollout {
  rolloutId: string;
  createTime: Date;
  createdBy: string;
  status: Rollout_RolloutStatus;
  trafficPercentStrategy?: Rollout_TrafficPercentStrategy;
  deleteServiceStrategy?: Rollout_DeleteServiceStrategy;
  serviceName: string;
}

function createBaseRollout(): Rollout {
  return {
    rolloutId: "",
    createTime: undefined,
    createdBy: "",
    status: undefined,
    trafficPercentStrategy: undefined,
    deleteServiceStrategy: undefined,
    serviceName: ""
  };
}

export const Rollout = {
  encode(message: Rollout, writer = _m0.Writer.create()): _m0.Writer {
    if (message.rolloutId !== "") {
      writer.uint32(10).string(message.rolloutId);
    }

    if (message.createTime !== undefined) Timestamp.encode(toTimestamp(message.createTime), writer.uint32(18).fork()).ldelim();

    if (message.createdBy !== "") {
      writer.uint32(26).string(message.createdBy);
    }

    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }

    if (message.trafficPercentStrategy !== undefined) {
      Rollout_TrafficPercentStrategy.encode(message.trafficPercentStrategy, writer.uint32(42).fork()).ldelim();
    }

    if (message.deleteServiceStrategy !== undefined) {
      Rollout_DeleteServiceStrategy.encode(message.deleteServiceStrategy, writer.uint32(1602).fork()).ldelim();
    }

    if (message.serviceName !== "") {
      writer.uint32(66).string(message.serviceName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rollout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRollout();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rolloutId = reader.string();
          break;

        case 2:
          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.createdBy = reader.string();
          break;

        case 4:
          message.status = (reader.int32() as any);
          break;

        case 5:
          message.trafficPercentStrategy = Rollout_TrafficPercentStrategy.decode(reader, reader.uint32());
          break;

        case 200:
          message.deleteServiceStrategy = Rollout_DeleteServiceStrategy.decode(reader, reader.uint32());
          break;

        case 8:
          message.serviceName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Rollout {
    return {
      rolloutId: isSet(object.rolloutId) ? String(object.rolloutId) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      createdBy: isSet(object.createdBy) ? String(object.createdBy) : "",
      status: isSet(object.status) ? rollout_RolloutStatusFromJSON(object.status) : 0,
      trafficPercentStrategy: isSet(object.trafficPercentStrategy) ? Rollout_TrafficPercentStrategy.fromJSON(object.trafficPercentStrategy) : undefined,
      deleteServiceStrategy: isSet(object.deleteServiceStrategy) ? Rollout_DeleteServiceStrategy.fromJSON(object.deleteServiceStrategy) : undefined,
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : ""
    };
  },

  toJSON(message: Rollout): unknown {
    const obj: any = {};
    message.rolloutId !== undefined && (obj.rolloutId = message.rolloutId);
    message.createTime !== undefined && (obj.createTime = message.createTime.toISOString());
    message.createdBy !== undefined && (obj.createdBy = message.createdBy);
    message.status !== undefined && (obj.status = rollout_RolloutStatusToJSON(message.status));
    message.trafficPercentStrategy !== undefined && (obj.trafficPercentStrategy = message.trafficPercentStrategy ? Rollout_TrafficPercentStrategy.toJSON(message.trafficPercentStrategy) : undefined);
    message.deleteServiceStrategy !== undefined && (obj.deleteServiceStrategy = message.deleteServiceStrategy ? Rollout_DeleteServiceStrategy.toJSON(message.deleteServiceStrategy) : undefined);
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Rollout>, I>>(object: I): Rollout {
    const message = createBaseRollout();
    message.rolloutId = object.rolloutId ?? "";
    message.createTime = object.createTime ?? undefined;
    message.createdBy = object.createdBy ?? "";
    message.status = object.status ?? 0;
    message.trafficPercentStrategy = object.trafficPercentStrategy !== undefined && object.trafficPercentStrategy !== null ? Rollout_TrafficPercentStrategy.fromPartial(object.trafficPercentStrategy) : undefined;
    message.deleteServiceStrategy = object.deleteServiceStrategy !== undefined && object.deleteServiceStrategy !== null ? Rollout_DeleteServiceStrategy.fromPartial(object.deleteServiceStrategy) : undefined;
    message.serviceName = object.serviceName ?? "";
    return message;
  }

};
export interface TrafficPercentStrategy_PercentagesMapEntry {
  key: string;
  value: number;
}

function createBaseTrafficPercentStrategy_PercentagesMapEntry(): TrafficPercentStrategy_PercentagesMapEntry {
  return {
    key: "",
    value: 0
  };
}

export const TrafficPercentStrategy_PercentagesMapEntry = {
  encode(message: TrafficPercentStrategy_PercentagesMapEntry, writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== 0) {
      writer.uint32(17).double(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TrafficPercentStrategy_PercentagesMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrafficPercentStrategy_PercentagesMapEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.double();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TrafficPercentStrategy_PercentagesMapEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },

  toJSON(message: TrafficPercentStrategy_PercentagesMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TrafficPercentStrategy_PercentagesMapEntry>, I>>(object: I): TrafficPercentStrategy_PercentagesMapEntry {
    const message = createBaseTrafficPercentStrategy_PercentagesMapEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  }

};
export interface TrafficPercentStrategy {
  percentages: {
    [key: string]: number;
  };
}

function createBaseTrafficPercentStrategy(): TrafficPercentStrategy {
  return {
    percentages: 0
  };
}

export const TrafficPercentStrategy = {
  encode(message: TrafficPercentStrategy, writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.percentages).forEach(([key, value]) => {
      TrafficPercentStrategy_PercentagesMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(9).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TrafficPercentStrategy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrafficPercentStrategy();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          const entry1 = TrafficPercentStrategy_PercentagesMapEntry.decode(reader, reader.uint32());

          if (entry1.value !== undefined) {
            message.percentages[entry1.key] = entry1.value;
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TrafficPercentStrategy {
    return {
      percentages: isObject(object.percentages) ? Object.entries(object.percentages).reduce<{
        [key: string]: double;
      }>((acc, [key, value]) => {
        acc[key] = double.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },

  toJSON(message: TrafficPercentStrategy): unknown {
    const obj: any = {};
    obj.percentages = {};

    if (message.percentages) {
      Object.entries(message.percentages).forEach(([k, v]) => {
        obj.percentages[k] = double.toJSON(v);
      });
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TrafficPercentStrategy>, I>>(object: I): TrafficPercentStrategy {
    const message = createBaseTrafficPercentStrategy();
    message.percentages = Object.entries(object.percentages ?? {}).reduce<{
      [key: string]: double;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = double.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  }

};
export interface Rollout_DeleteServiceStrategy {}

function createBaseRollout_DeleteServiceStrategy(): Rollout_DeleteServiceStrategy {
  return {};
}

export const Rollout_DeleteServiceStrategy = {
  encode(message: Rollout_DeleteServiceStrategy, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rollout_DeleteServiceStrategy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRollout_DeleteServiceStrategy();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Rollout_DeleteServiceStrategy {
    return {};
  },

  toJSON(message: Rollout_DeleteServiceStrategy): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Rollout_DeleteServiceStrategy>, I>>(object: I): Rollout_DeleteServiceStrategy {
    const message = createBaseRollout_DeleteServiceStrategy();
    return message;
  }

};
export enum Rollout_RolloutStatus {
  /*No status specified.*/
  ROLLOUT_STATUS_UNSPECIFIED = 0,

  /*The Rollout is in progress.*/
  IN_PROGRESS = 1,

  /*The Rollout has completed successfully.*/
  SUCCESS = 2,

  /*The Rollout has been cancelled. This can happen if you have overlapping
  Rollout pushes, and the previous ones will be cancelled.*/
  CANCELLED = 3,

  /*The Rollout has failed and the rollback attempt has failed too.*/
  FAILED = 4,

  /*The Rollout has not started yet and is pending for execution.*/
  PENDING = 5,

  /*The Rollout has failed and rolled back to the previous successful
  Rollout.*/
  FAILED_ROLLED_BACK = 6,
  UNRECOGNIZED = -1,
}
export function rolloutRolloutStatusFromJSON(object: any): Rollout_RolloutStatus {
  switch (object) {
    case "ROLLOUT_STATUS_UNSPECIFIED":
      return Rollout_RolloutStatus.ROLLOUT_STATUS_UNSPECIFIED;

    case "IN_PROGRESS":
      return Rollout_RolloutStatus.IN_PROGRESS;

    case "SUCCESS":
      return Rollout_RolloutStatus.SUCCESS;

    case "CANCELLED":
      return Rollout_RolloutStatus.CANCELLED;

    case "FAILED":
      return Rollout_RolloutStatus.FAILED;

    case "PENDING":
      return Rollout_RolloutStatus.PENDING;

    case "FAILED_ROLLED_BACK":
      return Rollout_RolloutStatus.FAILED_ROLLED_BACK;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Rollout_RolloutStatus.UNRECOGNIZED;
  }
}
export function rolloutRolloutStatusToJSON(object: Rollout_RolloutStatus): string {
  switch (object) {
    case Rollout_RolloutStatus.ROLLOUT_STATUS_UNSPECIFIED:
      return "ROLLOUT_STATUS_UNSPECIFIED";

    case Rollout_RolloutStatus.IN_PROGRESS:
      return "IN_PROGRESS";

    case Rollout_RolloutStatus.SUCCESS:
      return "SUCCESS";

    case Rollout_RolloutStatus.CANCELLED:
      return "CANCELLED";

    case Rollout_RolloutStatus.FAILED:
      return "FAILED";

    case Rollout_RolloutStatus.PENDING:
      return "PENDING";

    case Rollout_RolloutStatus.FAILED_ROLLED_BACK:
      return "FAILED_ROLLED_BACK";

    default:
      return "UNKNOWN";
  }
}