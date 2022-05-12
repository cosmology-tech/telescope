import * as _m0 from "protobufjs/minimal";
import { Exact, DeepPartial, isSet } from "@osmonauts/helpers";
export interface ProjectProperties {
  properties: Property[];
}

function createBaseProjectProperties(): ProjectProperties {
  return {
    properties: []
  };
}

export const ProjectProperties = {
  encode(message: ProjectProperties, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.properties) {
      Property.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectProperties();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.properties.push(Property.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProjectProperties {
    return {
      properties: Array.isArray(object?.properties) ? object.properties.map((e: any) => Property.fromJSON(e)) : []
    };
  },

  toJSON(message: ProjectProperties): unknown {
    const obj: any = {};

    if (message.properties) {
      obj.properties = message.properties.map(e => e ? Property.toJSON(e) : undefined);
    } else {
      obj.properties = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProjectProperties>, I>>(object: I): ProjectProperties {
    const message = createBaseProjectProperties();
    message.properties = object.properties?.map(e => Property.fromPartial(e)) || [];
    return message;
  }

};
export interface Property {
  name: string;
  type: Property_PropertyType;
  description: string;
}

function createBaseProperty(): Property {
  return {
    name: "",
    type: undefined,
    description: ""
  };
}

export const Property = {
  encode(message: Property, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }

    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Property {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProperty();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.type = (reader.int32() as any);
          break;

        case 3:
          message.description = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Property {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? property_PropertyTypeFromJSON(object.type) : 0,
      description: isSet(object.description) ? String(object.description) : ""
    };
  },

  toJSON(message: Property): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = property_PropertyTypeToJSON(message.type));
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Property>, I>>(object: I): Property {
    const message = createBaseProperty();
    message.name = object.name ?? "";
    message.type = object.type ?? undefined;
    message.description = object.description ?? "";
    return message;
  }

};
export enum Property_PropertyType {
  /*The type is unspecified, and will result in an error.*/
  UNSPECIFIED = 0,

  /*The type is `int64`.*/
  INT64 = 1,

  /*The type is `bool`.*/
  BOOL = 2,

  /*The type is `string`.*/
  STRING = 3,

  /*The type is 'double'.*/
  DOUBLE = 4,
  UNRECOGNIZED = -1,
}
export function property_PropertyTypeFromJSON(object: any): Property_PropertyType {
  switch (object) {
    case "UNSPECIFIED":
      return Property_PropertyType.UNSPECIFIED;

    case "INT64":
      return Property_PropertyType.INT64;

    case "BOOL":
      return Property_PropertyType.BOOL;

    case "STRING":
      return Property_PropertyType.STRING;

    case "DOUBLE":
      return Property_PropertyType.DOUBLE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Property_PropertyType.UNRECOGNIZED;
  }
}
export function property_PropertyTypeToJSON(object: Property_PropertyType): string {
  switch (object) {
    case Property_PropertyType.UNSPECIFIED:
      return "UNSPECIFIED";

    case Property_PropertyType.INT64:
      return "INT64";

    case Property_PropertyType.BOOL:
      return "BOOL";

    case Property_PropertyType.STRING:
      return "STRING";

    case Property_PropertyType.DOUBLE:
      return "DOUBLE";

    default:
      return "UNKNOWN";
  }
}