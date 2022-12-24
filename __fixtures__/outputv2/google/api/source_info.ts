import { Any, AnyAmino, AnySDKType } from "../protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export const protobufPackage = "google.api";

/** Source information used to create a Service Config */
export interface SourceInfo {
  /** All files used during config generation. */
  sourceFiles: Any[];
}

/** Source information used to create a Service Config */
export interface SourceInfoAmino {
  /** All files used during config generation. */
  source_files: AnyAmino[];
}
export interface SourceInfoAminoType {
  type: "/google.api.SourceInfo";
  value: SourceInfoAmino;
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
  encode(message: SourceInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sourceFiles) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sourceFiles.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SourceInfo {
    return {
      sourceFiles: Array.isArray(object?.sourceFiles) ? object.sourceFiles.map((e: any) => Any.fromJSON(e)) : []
    };
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

  toAmino(message: SourceInfo): SourceInfoAmino {
    const obj: any = {};

    if (message.sourceFiles) {
      obj.source_files = message.sourceFiles.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.source_files = [];
    }

    return obj;
  }

};