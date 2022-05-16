import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial } from "@osmonauts/helpers";

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

function createBaseSourceContext(): SourceContext {
  return {
    fileName: ""
  };
}

export const SourceContext = {
  encode(message: SourceContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fileName !== "") {
      writer.uint32(10).string(message.fileName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceContext {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      fileName: isSet(object.fileName) ? String(object.fileName) : ""
    };
  },

  toJSON(message: SourceContext): unknown {
    const obj: any = {};
    message.fileName !== undefined && (obj.fileName = message.fileName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SourceContext>, I>>(object: I): SourceContext {
    const message = createBaseSourceContext();
    message.fileName = object.fileName ?? "";
    return message;
  }

};