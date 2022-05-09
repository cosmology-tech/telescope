import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial } from "@osmonauts/helpers";
export interface ConfigChange {
  element: string;
  oldValue: string;
  newValue: string;
  changeType: ChangeType;
  advices: Advice[];
}

function createBaseConfigChange(): ConfigChange {
  return {
    element: "",
    oldValue: "",
    newValue: "",
    changeType: undefined,
    advices: []
  };
}

export const ConfigChange = {
  encode(message: ConfigChange, writer = _m0.Writer.create()): _m0.Writer {
    if (message.element !== "") {
      writer.uint32(10).string(message.element);
    }

    if (message.oldValue !== "") {
      writer.uint32(18).string(message.oldValue);
    }

    if (message.newValue !== "") {
      writer.uint32(26).string(message.newValue);
    }

    if (message.changeType !== 0) {
      writer.uint32(32).int32(message.changeType);
    }

    for (const v of message.advices) {
      Advice.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigChange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigChange();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.element = reader.string();
          break;

        case 2:
          message.oldValue = reader.string();
          break;

        case 3:
          message.newValue = reader.string();
          break;

        case 4:
          message.changeType = (reader.int32() as any);
          break;

        case 5:
          message.advices.push(Advice.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ConfigChange {
    return {
      element: isSet(object.element) ? String(object.element) : "",
      oldValue: isSet(object.oldValue) ? String(object.oldValue) : "",
      newValue: isSet(object.newValue) ? String(object.newValue) : "",
      changeType: isSet(object.changeType) ? changeTypeFromJSON(object.changeType) : 0,
      advices: Array.isArray(object?.advices) ? object.advices.map((e: any) => Advice.fromJSON(e)) : []
    };
  },

  toJSON(message: ConfigChange): unknown {
    const obj: any = {};
    message.element !== undefined && (obj.element = message.element);
    message.oldValue !== undefined && (obj.oldValue = message.oldValue);
    message.newValue !== undefined && (obj.newValue = message.newValue);
    message.changeType !== undefined && (obj.changeType = changeTypeToJSON(message.changeType));

    if (message.advices) {
      obj.advices = message.advices.map(e => e ? Advice.toJSON(e) : undefined);
    } else {
      obj.advices = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigChange>, I>>(object: I): ConfigChange {
    const message = createBaseConfigChange();
    message.element = object.element ?? "";
    message.oldValue = object.oldValue ?? "";
    message.newValue = object.newValue ?? "";
    message.changeType = object.changeType ?? 0;
    message.advices = object.advices?.map(e => Advice.fromPartial(e)) || [];
    return message;
  }

};
export interface Advice {
  description: string;
}

function createBaseAdvice(): Advice {
  return {
    description: ""
  };
}

export const Advice = {
  encode(message: Advice, writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Advice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdvice();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
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

  fromJSON(object: any): Advice {
    return {
      description: isSet(object.description) ? String(object.description) : ""
    };
  },

  toJSON(message: Advice): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Advice>, I>>(object: I): Advice {
    const message = createBaseAdvice();
    message.description = object.description ?? "";
    return message;
  }

};
export enum ChangeType {
  /*No value was provided.*/
  CHANGE_TYPE_UNSPECIFIED = 0,

  /*The changed object exists in the 'new' service configuration, but not
  in the 'old' service configuration.*/
  ADDED = 1,

  /*The changed object exists in the 'old' service configuration, but not
  in the 'new' service configuration.*/
  REMOVED = 2,

  /*The changed object exists in both service configurations, but its value
  is different.*/
  MODIFIED = 3,
  UNRECOGNIZED = -1,
}
export function changeTypeFromJSON(object: any): ChangeType {
  switch (object) {
    case "CHANGE_TYPE_UNSPECIFIED":
      return ChangeType.CHANGE_TYPE_UNSPECIFIED;

    case "ADDED":
      return ChangeType.ADDED;

    case "REMOVED":
      return ChangeType.REMOVED;

    case "MODIFIED":
      return ChangeType.MODIFIED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ChangeType.UNRECOGNIZED;
  }
}
export function changeTypeToJSON(object: ChangeType): string {
  switch (object) {
    case ChangeType.CHANGE_TYPE_UNSPECIFIED:
      return "CHANGE_TYPE_UNSPECIFIED";

    case ChangeType.ADDED:
      return "ADDED";

    case ChangeType.REMOVED:
      return "REMOVED";

    case ChangeType.MODIFIED:
      return "MODIFIED";

    default:
      return "UNKNOWN";
  }
}