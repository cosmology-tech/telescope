/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "google.api";

/**
 * A descriptor for defining project properties for a service. One service may
 * have many consumer projects, and the service may want to behave differently
 * depending on some properties on the project. For example, a project may be
 * associated with a school, or a business, or a government agency, a business
 * type property on the project may affect how a service responds to the client.
 * This descriptor defines which properties are allowed to be set on a project.
 *
 * Example:
 *
 *    project_properties:
 *      properties:
 *      - name: NO_WATERMARK
 *        type: BOOL
 *        description: Allows usage of the API without watermarks.
 *      - name: EXTENDED_TILE_CACHE_PERIOD
 *        type: INT64
 */
export interface ProjectProperties {
  /** List of per consumer project-specific properties. */
  properties: Property[];
}

/**
 * Defines project properties.
 *
 * API services can define properties that can be assigned to consumer projects
 * so that backends can perform response customization without having to make
 * additional calls or maintain additional storage. For example, Maps API
 * defines properties that controls map tile cache period, or whether to embed a
 * watermark in a result.
 *
 * These values can be set via API producer console. Only API providers can
 * define and set these properties.
 */
export interface Property {
  /** The name of the property (a.k.a key). */
  name: string;
  /** The type of this property. */
  type: Property_PropertyType;
  /** The description of the property */
  description: string;
}

/** Supported data type of the property values */
export enum Property_PropertyType {
  /** UNSPECIFIED - The type is unspecified, and will result in an error. */
  UNSPECIFIED = 0,
  /** INT64 - The type is `int64`. */
  INT64 = 1,
  /** BOOL - The type is `bool`. */
  BOOL = 2,
  /** STRING - The type is `string`. */
  STRING = 3,
  /** DOUBLE - The type is 'double'. */
  DOUBLE = 4,
  UNRECOGNIZED = -1,
}

export function property_PropertyTypeFromJSON(
  object: any
): Property_PropertyType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return Property_PropertyType.UNSPECIFIED;
    case 1:
    case "INT64":
      return Property_PropertyType.INT64;
    case 2:
    case "BOOL":
      return Property_PropertyType.BOOL;
    case 3:
    case "STRING":
      return Property_PropertyType.STRING;
    case 4:
    case "DOUBLE":
      return Property_PropertyType.DOUBLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Property_PropertyType.UNRECOGNIZED;
  }
}

export function property_PropertyTypeToJSON(
  object: Property_PropertyType
): string {
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

function createBaseProjectProperties(): ProjectProperties {
  return { properties: [] };
}

export const ProjectProperties = {
  encode(
    message: ProjectProperties,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      properties: Array.isArray(object?.properties)
        ? object.properties.map((e: any) => Property.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProjectProperties): unknown {
    const obj: any = {};
    if (message.properties) {
      obj.properties = message.properties.map((e) =>
        e ? Property.toJSON(e) : undefined
      );
    } else {
      obj.properties = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProjectProperties>, I>>(
    object: I
  ): ProjectProperties {
    const message = createBaseProjectProperties();
    message.properties =
      object.properties?.map((e) => Property.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProperty(): Property {
  return { name: "", type: 0, description: "" };
}

export const Property = {
  encode(
    message: Property,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
          message.type = reader.int32() as any;
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
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: Property): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined &&
      (obj.type = property_PropertyTypeToJSON(message.type));
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Property>, I>>(object: I): Property {
    const message = createBaseProperty();
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    message.description = object.description ?? "";
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
