import { FileDescriptorProto } from "../descriptor";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial } from "@osmonauts/helpers";
export interface Version {
  major: number;
  minor: number;
  patch: number;
  suffix: string;
}

function createBaseVersion(): Version {
  return {
    major: 0,
    minor: 0,
    patch: 0,
    suffix: ""
  };
}

export const Version = {
  encode(message: Version, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.major !== 0) {
      writer.uint32(8).int32(message.major);
    }

    if (message.minor !== 0) {
      writer.uint32(16).int32(message.minor);
    }

    if (message.patch !== 0) {
      writer.uint32(24).int32(message.patch);
    }

    if (message.suffix !== "") {
      writer.uint32(34).string(message.suffix);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Version {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.major = reader.int32();
          break;

        case 2:
          message.minor = reader.int32();
          break;

        case 3:
          message.patch = reader.int32();
          break;

        case 4:
          message.suffix = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Version {
    return {
      major: isSet(object.major) ? Number(object.major) : 0,
      minor: isSet(object.minor) ? Number(object.minor) : 0,
      patch: isSet(object.patch) ? Number(object.patch) : 0,
      suffix: isSet(object.suffix) ? String(object.suffix) : ""
    };
  },

  toJSON(message: Version): unknown {
    const obj: any = {};
    message.major !== undefined && (obj.major = Math.round(message.major));
    message.minor !== undefined && (obj.minor = Math.round(message.minor));
    message.patch !== undefined && (obj.patch = Math.round(message.patch));
    message.suffix !== undefined && (obj.suffix = message.suffix);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Version>, I>>(object: I): Version {
    const message = createBaseVersion();
    message.major = object.major ?? 0;
    message.minor = object.minor ?? 0;
    message.patch = object.patch ?? 0;
    message.suffix = object.suffix ?? "";
    return message;
  }

};
export interface CodeGeneratorRequest {
  fileToGenerate: string[];
  parameter: string;
  protoFile: FileDescriptorProto[];
  compilerVersion: Version;
}

function createBaseCodeGeneratorRequest(): CodeGeneratorRequest {
  return {
    fileToGenerate: [],
    parameter: "",
    protoFile: [],
    compilerVersion: undefined
  };
}

export const CodeGeneratorRequest = {
  encode(message: CodeGeneratorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fileToGenerate) {
      writer.uint32(10).string(v!);
    }

    if (message.parameter !== "") {
      writer.uint32(18).string(message.parameter);
    }

    for (const v of message.protoFile) {
      FileDescriptorProto.encode(v!, writer.uint32(122).fork()).ldelim();
    }

    if (message.compilerVersion !== undefined) {
      Version.encode(message.compilerVersion, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodeGeneratorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeGeneratorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fileToGenerate.push(reader.string());
          break;

        case 2:
          message.parameter = reader.string();
          break;

        case 15:
          message.protoFile.push(FileDescriptorProto.decode(reader, reader.uint32()));
          break;

        case 3:
          message.compilerVersion = Version.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CodeGeneratorRequest {
    return {
      fileToGenerate: Array.isArray(object?.fileToGenerate) ? object.fileToGenerate.map((e: any) => String(e)) : [],
      parameter: isSet(object.parameter) ? String(object.parameter) : "",
      protoFile: Array.isArray(object?.protoFile) ? object.protoFile.map((e: any) => FileDescriptorProto.fromJSON(e)) : [],
      compilerVersion: isSet(object.compilerVersion) ? Version.fromJSON(object.compilerVersion) : undefined
    };
  },

  toJSON(message: CodeGeneratorRequest): unknown {
    const obj: any = {};

    if (message.fileToGenerate) {
      obj.fileToGenerate = message.fileToGenerate.map(e => e);
    } else {
      obj.fileToGenerate = [];
    }

    message.parameter !== undefined && (obj.parameter = message.parameter);

    if (message.protoFile) {
      obj.protoFile = message.protoFile.map(e => e ? FileDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.protoFile = [];
    }

    message.compilerVersion !== undefined && (obj.compilerVersion = message.compilerVersion ? Version.toJSON(message.compilerVersion) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CodeGeneratorRequest>, I>>(object: I): CodeGeneratorRequest {
    const message = createBaseCodeGeneratorRequest();
    message.fileToGenerate = object.fileToGenerate?.map(e => e) || [];
    message.parameter = object.parameter ?? "";
    message.protoFile = object.protoFile?.map(e => FileDescriptorProto.fromPartial(e)) || [];
    message.compilerVersion = object.compilerVersion !== undefined && object.compilerVersion !== null ? Version.fromPartial(object.compilerVersion) : undefined;
    return message;
  }

};
export interface CodeGeneratorResponse {
  error: string;
  file: CodeGeneratorResponse_File[];
}

function createBaseCodeGeneratorResponse(): CodeGeneratorResponse {
  return {
    error: "",
    file: []
  };
}

export const CodeGeneratorResponse = {
  encode(message: CodeGeneratorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }

    for (const v of message.file) {
      CodeGeneratorResponse_File.encode(v!, writer.uint32(122).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodeGeneratorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeGeneratorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.error = reader.string();
          break;

        case 15:
          message.file.push(CodeGeneratorResponse_File.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CodeGeneratorResponse {
    return {
      error: isSet(object.error) ? String(object.error) : "",
      file: Array.isArray(object?.file) ? object.file.map((e: any) => CodeGeneratorResponse_File.fromJSON(e)) : []
    };
  },

  toJSON(message: CodeGeneratorResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = message.error);

    if (message.file) {
      obj.file = message.file.map(e => e ? CodeGeneratorResponse_File.toJSON(e) : undefined);
    } else {
      obj.file = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CodeGeneratorResponse>, I>>(object: I): CodeGeneratorResponse {
    const message = createBaseCodeGeneratorResponse();
    message.error = object.error ?? "";
    message.file = object.file?.map(e => CodeGeneratorResponse_File.fromPartial(e)) || [];
    return message;
  }

};
export interface CodeGeneratorResponse_File {
  name: string;
  insertionPoint: string;
  content: string;
}

function createBaseCodeGeneratorResponse_File(): CodeGeneratorResponse_File {
  return {
    name: "",
    insertionPoint: "",
    content: ""
  };
}

export const CodeGeneratorResponse_File = {
  encode(message: CodeGeneratorResponse_File, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.insertionPoint !== "") {
      writer.uint32(18).string(message.insertionPoint);
    }

    if (message.content !== "") {
      writer.uint32(122).string(message.content);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodeGeneratorResponse_File {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeGeneratorResponse_File();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.insertionPoint = reader.string();
          break;

        case 15:
          message.content = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CodeGeneratorResponse_File {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      insertionPoint: isSet(object.insertionPoint) ? String(object.insertionPoint) : "",
      content: isSet(object.content) ? String(object.content) : ""
    };
  },

  toJSON(message: CodeGeneratorResponse_File): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.insertionPoint !== undefined && (obj.insertionPoint = message.insertionPoint);
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CodeGeneratorResponse_File>, I>>(object: I): CodeGeneratorResponse_File {
    const message = createBaseCodeGeneratorResponse_File();
    message.name = object.name ?? "";
    message.insertionPoint = object.insertionPoint ?? "";
    message.content = object.content ?? "";
    return message;
  }

};