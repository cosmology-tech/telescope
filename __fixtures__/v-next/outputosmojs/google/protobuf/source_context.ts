import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
export const protobufPackage = "google.protobuf";
/**
 * `SourceContext` represents information about the source of a
 * protobuf element, like the file in which it is defined.
 */
export interface SourceContext {
  /**
   * The path-qualified name of the .proto file that contained the associated
   * protobuf element.  For example: `"google/protobuf/source_context.proto"`.
   */
  fileName: string;
}
/**
 * `SourceContext` represents information about the source of a
 * protobuf element, like the file in which it is defined.
 */
export interface SourceContextSDKType {
  file_name: string;
}
function createBaseSourceContext(): SourceContext {
  return {
    fileName: ""
  };
}
export const SourceContext = {
  encode(message: SourceContext, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fileName !== "") {
      writer.uint32(10).string(message.fileName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SourceContext {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SourceContext {
    const obj = createBaseSourceContext();
    if (isSet(object.fileName)) obj.fileName = String(object.fileName);
    return obj;
  },
  toJSON(message: SourceContext): unknown {
    const obj: any = {};
    message.fileName !== undefined && (obj.fileName = message.fileName);
    return obj;
  },
  fromPartial(object: DeepPartial<SourceContext>): SourceContext {
    const message = createBaseSourceContext();
    message.fileName = object.fileName ?? "";
    return message;
  },
  fromSDK(object: SourceContextSDKType): SourceContext {
    return {
      fileName: object?.file_name
    };
  },
  fromSDKJSON(object: any): SourceContextSDKType {
    return {
      file_name: isSet(object.file_name) ? String(object.file_name) : ""
    };
  },
  toSDK(message: SourceContext): SourceContextSDKType {
    const obj: any = {};
    obj.file_name = message.fileName;
    return obj;
  }
};