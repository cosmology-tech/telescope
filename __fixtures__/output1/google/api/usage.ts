import { _m0 } from "protobuf/minimal";
import { isSet } from "@osmonauts/helpers";
export interface Usage {
  requirements: string[];
  rules: UsageRule[];
  producerNotificationChannel: string;
}

function createBaseUsage(): Usage {
  return {
    requirements: [],
    rules: [],
    producerNotificationChannel: ""
  };
}

export const Usage = {
  encode(message: Usage, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.requirements) {
      writer.uint32(10).string(v!);
    }

    for (const v of message.rules) {
      UsageRule.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (message.producerNotificationChannel !== "") {
      writer.uint32(58).string(message.producerNotificationChannel);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): Usage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.requirements.push(reader.string());

        case 6:
          message.rules.push(UsageRule.decode(reader, reader.uint32()));
          break;

        case 7:
          message.producerNotificationChannel = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Usage {
    return {
      requirements: Array.isArray(object?.requirements) ? object.requirements.map((e: any) => String(e)) : [],
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => UsageRule.fromJSON(e)) : [],
      producerNotificationChannel: isSet(object.producerNotificationChannel) ? String(object.producerNotificationChannel) : ""
    };
  },

  toJSON(message: Usage): unknown {
    const obj: any = {};

    if (message.requirements) {
      obj.requirements = message.requirements.map(e => e);
    } else {
      obj.requirements = [];
    }

    if (message.rules) {
      obj.rules = message.rules.map(e => e ? UsageRule.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }

    message.producerNotificationChannel !== undefined && (obj.producerNotificationChannel = message.producerNotificationChannel);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Usage>, I>>(object: I): Usage {
    const message = createBaseUsage();
    message.requirements = object.requirements?.map(e => e) || [];
    message.rules = object.rules?.map(e => UsageRule.fromPartial(e)) || [];
    message.producerNotificationChannel = object.producerNotificationChannel ?? "";
    return message;
  }

};
export interface UsageRule {
  selector: string;
  allowUnregisteredCalls: boolean;
  skipServiceControl: boolean;
}

function createBaseUsageRule(): UsageRule {
  return {
    selector: "",
    allowUnregisteredCalls: false,
    skipServiceControl: false
  };
}

export const UsageRule = {
  encode(message: UsageRule, writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }

    if (message.allowUnregisteredCalls === true) {
      writer.uint32(16).bool(message.allowUnregisteredCalls);
    }

    if (message.skipServiceControl === true) {
      writer.uint32(24).bool(message.skipServiceControl);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): UsageRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsageRule();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;

        case 2:
          message.allowUnregisteredCalls = reader.bool();
          break;

        case 3:
          message.skipServiceControl = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UsageRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      allowUnregisteredCalls: isSet(object.allowUnregisteredCalls) ? Boolean(object.allowUnregisteredCalls) : false,
      skipServiceControl: isSet(object.skipServiceControl) ? Boolean(object.skipServiceControl) : false
    };
  },

  toJSON(message: UsageRule): unknown {
    const obj: any = {};
    message.selector !== undefined && (obj.selector = message.selector);
    message.allowUnregisteredCalls !== undefined && (obj.allowUnregisteredCalls = message.allowUnregisteredCalls);
    message.skipServiceControl !== undefined && (obj.skipServiceControl = message.skipServiceControl);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UsageRule>, I>>(object: I): UsageRule {
    const message = createBaseUsageRule();
    message.selector = object.selector ?? "";
    message.allowUnregisteredCalls = object.allowUnregisteredCalls ?? false;
    message.skipServiceControl = object.skipServiceControl ?? false;
    return message;
  }

};