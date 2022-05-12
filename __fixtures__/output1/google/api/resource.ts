import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial } from "@osmonauts/helpers";
export interface ResourceDescriptor {
  type: string;
  pattern: string[];
  nameField: string;
  history: ResourceDescriptor_History;
  plural: string;
  singular: string;
  style: ResourceDescriptor_Style[];
}

function createBaseResourceDescriptor(): ResourceDescriptor {
  return {
    type: "",
    pattern: [],
    nameField: "",
    history: undefined,
    plural: "",
    singular: "",
    style: []
  };
}

export const ResourceDescriptor = {
  encode(message: ResourceDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }

    for (const v of message.pattern) {
      writer.uint32(18).string(v!);
    }

    if (message.nameField !== "") {
      writer.uint32(26).string(message.nameField);
    }

    if (message.history !== 0) {
      writer.uint32(32).int32(message.history);
    }

    if (message.plural !== "") {
      writer.uint32(42).string(message.plural);
    }

    if (message.singular !== "") {
      writer.uint32(50).string(message.singular);
    }

    writer.uint32(80).fork();

    for (const v of message.style) {
      writer.int32(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;

        case 2:
          message.pattern.push(reader.string());
          break;

        case 3:
          message.nameField = reader.string();
          break;

        case 4:
          message.history = (reader.int32() as any);
          break;

        case 5:
          message.plural = reader.string();
          break;

        case 6:
          message.singular = reader.string();
          break;

        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.style.push((reader.int32() as any));
            }
          } else {
            message.style.push((reader.int32() as any));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResourceDescriptor {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      pattern: Array.isArray(object?.pattern) ? object.pattern.map((e: any) => String(e)) : [],
      nameField: isSet(object.nameField) ? String(object.nameField) : "",
      history: isSet(object.history) ? resourceDescriptor_HistoryFromJSON(object.history) : 0,
      plural: isSet(object.plural) ? String(object.plural) : "",
      singular: isSet(object.singular) ? String(object.singular) : "",
      style: Array.isArray(object?.style) ? object.style.map((e: any) => resourceDescriptor_StyleFromJSON(e)) : []
    };
  },

  toJSON(message: ResourceDescriptor): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);

    if (message.pattern) {
      obj.pattern = message.pattern.map(e => e);
    } else {
      obj.pattern = [];
    }

    message.nameField !== undefined && (obj.nameField = message.nameField);
    message.history !== undefined && (obj.history = resourceDescriptor_HistoryToJSON(message.history));
    message.plural !== undefined && (obj.plural = message.plural);
    message.singular !== undefined && (obj.singular = message.singular);

    if (message.style) {
      obj.style = message.style.map(e => resourceDescriptor_StyleToJSON(e));
    } else {
      obj.style = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResourceDescriptor>, I>>(object: I): ResourceDescriptor {
    const message = createBaseResourceDescriptor();
    message.type = object.type ?? "";
    message.pattern = object.pattern?.map(e => e) || [];
    message.nameField = object.nameField ?? "";
    message.history = object.history ?? undefined;
    message.plural = object.plural ?? "";
    message.singular = object.singular ?? "";
    message.style = object.style?.map(e => e) || [];
    return message;
  }

};
export enum ResourceDescriptor_History {
  /*The "unset" value.*/
  HISTORY_UNSPECIFIED = 0,

  /*The resource originally had one pattern and launched as such, and
  additional patterns were added later.*/
  ORIGINALLY_SINGLE_PATTERN = 1,

  /*The resource has one pattern, but the API owner expects to add more
  later. (This is the inverse of ORIGINALLY_SINGLE_PATTERN, and prevents
  that from being necessary once there are multiple patterns.)*/
  FUTURE_MULTI_PATTERN = 2,
  UNRECOGNIZED = -1,
}
export function resourceDescriptor_HistoryFromJSON(object: any): ResourceDescriptor_History {
  switch (object) {
    case "HISTORY_UNSPECIFIED":
      return ResourceDescriptor_History.HISTORY_UNSPECIFIED;

    case "ORIGINALLY_SINGLE_PATTERN":
      return ResourceDescriptor_History.ORIGINALLY_SINGLE_PATTERN;

    case "FUTURE_MULTI_PATTERN":
      return ResourceDescriptor_History.FUTURE_MULTI_PATTERN;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ResourceDescriptor_History.UNRECOGNIZED;
  }
}
export function resourceDescriptor_HistoryToJSON(object: ResourceDescriptor_History): string {
  switch (object) {
    case ResourceDescriptor_History.HISTORY_UNSPECIFIED:
      return "HISTORY_UNSPECIFIED";

    case ResourceDescriptor_History.ORIGINALLY_SINGLE_PATTERN:
      return "ORIGINALLY_SINGLE_PATTERN";

    case ResourceDescriptor_History.FUTURE_MULTI_PATTERN:
      return "FUTURE_MULTI_PATTERN";

    default:
      return "UNKNOWN";
  }
}
export enum ResourceDescriptor_Style {
  /*The unspecified value. Do not use.*/
  STYLE_UNSPECIFIED = 0,

  /*This resource is intended to be "declarative-friendly".
  
  Declarative-friendly resources must be more strictly consistent, and
  setting this to true communicates to tools that this resource should
  adhere to declarative-friendly expectations.
  
  Note: This is used by the API linter (linter.aip.dev) to enable
  additional checks.*/
  DECLARATIVE_FRIENDLY = 1,
  UNRECOGNIZED = -1,
}
export function resourceDescriptor_StyleFromJSON(object: any): ResourceDescriptor_Style {
  switch (object) {
    case "STYLE_UNSPECIFIED":
      return ResourceDescriptor_Style.STYLE_UNSPECIFIED;

    case "DECLARATIVE_FRIENDLY":
      return ResourceDescriptor_Style.DECLARATIVE_FRIENDLY;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ResourceDescriptor_Style.UNRECOGNIZED;
  }
}
export function resourceDescriptor_StyleToJSON(object: ResourceDescriptor_Style): string {
  switch (object) {
    case ResourceDescriptor_Style.STYLE_UNSPECIFIED:
      return "STYLE_UNSPECIFIED";

    case ResourceDescriptor_Style.DECLARATIVE_FRIENDLY:
      return "DECLARATIVE_FRIENDLY";

    default:
      return "UNKNOWN";
  }
}
export interface ResourceReference {
  type: string;
  childType: string;
}

function createBaseResourceReference(): ResourceReference {
  return {
    type: "",
    childType: ""
  };
}

export const ResourceReference = {
  encode(message: ResourceReference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }

    if (message.childType !== "") {
      writer.uint32(18).string(message.childType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceReference {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceReference();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;

        case 2:
          message.childType = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResourceReference {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      childType: isSet(object.childType) ? String(object.childType) : ""
    };
  },

  toJSON(message: ResourceReference): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.childType !== undefined && (obj.childType = message.childType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResourceReference>, I>>(object: I): ResourceReference {
    const message = createBaseResourceReference();
    message.type = object.type ?? "";
    message.childType = object.childType ?? "";
    return message;
  }

};