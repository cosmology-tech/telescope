import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial } from "@osmonauts/helpers";
export interface InterfaceDescriptor {
  name: string;
  description: string;
}

function createBaseInterfaceDescriptor(): InterfaceDescriptor {
  return {
    name: "",
    description: ""
  };
}

export const InterfaceDescriptor = {
  encode(message: InterfaceDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InterfaceDescriptor {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },

  toJSON(message: InterfaceDescriptor): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InterfaceDescriptor>, I>>(object: I): InterfaceDescriptor {
    const message = createBaseInterfaceDescriptor();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  }

};
export interface ScalarDescriptor {
  name: string;
  description: string;
  fieldType: ScalarType[];
}

function createBaseScalarDescriptor(): ScalarDescriptor {
  return {
    name: "",
    description: "",
    fieldType: []
  };
}

export const ScalarDescriptor = {
  encode(message: ScalarDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    writer.uint32(24).fork();

    for (const v of message.fieldType) {
      writer.int32(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScalarDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScalarDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.fieldType.push((reader.int32() as any));
            }
          } else {
            message.fieldType.push((reader.int32() as any));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ScalarDescriptor {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      fieldType: Array.isArray(object?.fieldType) ? object.fieldType.map((e: any) => scalarTypeFromJSON(e)) : []
    };
  },

  toJSON(message: ScalarDescriptor): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);

    if (message.fieldType) {
      obj.fieldType = message.fieldType.map(e => scalarTypeToJSON(e));
    } else {
      obj.fieldType = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScalarDescriptor>, I>>(object: I): ScalarDescriptor {
    const message = createBaseScalarDescriptor();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.fieldType = object.fieldType?.map(e => e) || [];
    return message;
  }

};
export enum ScalarType {
  SCALAR_TYPE_UNSPECIFIED = 0,
  SCALAR_TYPE_STRING = 1,
  SCALAR_TYPE_BYTES = 2,
  UNRECOGNIZED = -1,
}
export function scalarTypeFromJSON(object: any): ScalarType {
  switch (object) {
    case "SCALAR_TYPE_UNSPECIFIED":
      return ScalarType.SCALAR_TYPE_UNSPECIFIED;

    case "SCALAR_TYPE_STRING":
      return ScalarType.SCALAR_TYPE_STRING;

    case "SCALAR_TYPE_BYTES":
      return ScalarType.SCALAR_TYPE_BYTES;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ScalarType.UNRECOGNIZED;
  }
}
export function scalarTypeToJSON(object: ScalarType): string {
  switch (object) {
    case ScalarType.SCALAR_TYPE_UNSPECIFIED:
      return "SCALAR_TYPE_UNSPECIFIED";

    case ScalarType.SCALAR_TYPE_STRING:
      return "SCALAR_TYPE_STRING";

    case ScalarType.SCALAR_TYPE_BYTES:
      return "SCALAR_TYPE_BYTES";

    default:
      return "UNKNOWN";
  }
}