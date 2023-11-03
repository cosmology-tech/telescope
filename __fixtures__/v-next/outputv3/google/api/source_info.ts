import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../protobuf/any";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export const protobufPackage = "google.api";
/** Source information used to create a Service Config */
export interface SourceInfo {
  /** All files used during config generation. */
  sourceFiles: Any[];
}
export interface SourceInfoProtoMsg {
  typeUrl: "/google.api.SourceInfo";
  value: Uint8Array;
}
/** Source information used to create a Service Config */
export interface SourceInfoAmino {
  /** All files used during config generation. */
  source_files: AnyAmino[];
}
/** Source information used to create a Service Config */
export interface SourceInfoSDKType {
  source_files: AnySDKType[];
}
function createBaseSourceInfo(): SourceInfo {
  return {
    sourceFiles: []
  };
}
export const SourceInfo = {
  typeUrl: "/google.api.SourceInfo",
  encode(message: SourceInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sourceFiles) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): SourceInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceFiles.push(Any.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SourceInfo {
    const obj = createBaseSourceInfo();
    if (Array.isArray(object?.sourceFiles)) obj.sourceFiles = object.sourceFiles.map((e: any) => Any.fromJSON(e));
    return obj;
  },
  toJSON(message: SourceInfo): unknown {
    const obj: any = {};
    if (message.sourceFiles) {
      obj.sourceFiles = message.sourceFiles.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.sourceFiles = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<SourceInfo>): SourceInfo {
    const message = createBaseSourceInfo();
    message.sourceFiles = object.sourceFiles?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: SourceInfoSDKType): SourceInfo {
    return {
      sourceFiles: Array.isArray(object?.source_files) ? object.source_files.map((e: any) => Any.fromSDK(e)) : []
    };
  },
  toSDK(message: SourceInfo): SourceInfoSDKType {
    const obj: any = {};
    if (message.sourceFiles) {
      obj.source_files = message.sourceFiles.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.source_files = [];
    }
    return obj;
  },
  fromAmino(object: SourceInfoAmino): SourceInfo {
    return {
      sourceFiles: Array.isArray(object?.source_files) ? object.source_files.map((e: any) => Any.fromAmino(e)) : []
    };
  },
  toAmino(message: SourceInfo, useInterfaces: boolean = false): SourceInfoAmino {
    const obj: any = {};
    if (message.sourceFiles) {
      obj.source_files = message.sourceFiles.map(e => e ? Any.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.source_files = [];
    }
    return obj;
  },
  fromProtoMsg(message: SourceInfoProtoMsg, useInterfaces: boolean = false): SourceInfo {
    return SourceInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SourceInfo): Uint8Array {
    return SourceInfo.encode(message).finish();
  },
  toProtoMsg(message: SourceInfo): SourceInfoProtoMsg {
    return {
      typeUrl: "/google.api.SourceInfo",
      value: SourceInfo.encode(message).finish()
    };
  }
};