import { _m0 } from "protobuf/minimal";
import { isSet } from "@osmonauts/helpers";
export interface Logging {
  producerDestinations: LoggingDestination[];
  consumerDestinations: LoggingDestination[];
}

function createBaseLogging(): Logging {
  return {
    producerDestinations: [],
    consumerDestinations: []
  };
}

export const Logging = {
  encode(message: Logging, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.producerDestinations) {
      Logging_LoggingDestination.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.consumerDestinations) {
      Logging_LoggingDestination.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): Logging {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogging();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.producerDestinations.push(Logging_LoggingDestination.decode(reader, reader.uint32()));
          break;

        case 2:
          message.consumerDestinations.push(Logging_LoggingDestination.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Logging {
    return {
      producerDestinations: Array.isArray(object?.producerDestinations) ? object.producerDestinations.map((e: any) => Logging_LoggingDestination.fromJSON(e)) : [],
      consumerDestinations: Array.isArray(object?.consumerDestinations) ? object.consumerDestinations.map((e: any) => Logging_LoggingDestination.fromJSON(e)) : []
    };
  },

  toJSON(message: Logging): unknown {
    const obj: any = {};

    if (message.producerDestinations) {
      obj.producerDestinations = message.producerDestinations.map(e => e ? Logging_LoggingDestination.toJSON(e) : undefined);
    } else {
      obj.producerDestinations = [];
    }

    if (message.consumerDestinations) {
      obj.consumerDestinations = message.consumerDestinations.map(e => e ? Logging_LoggingDestination.toJSON(e) : undefined);
    } else {
      obj.consumerDestinations = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Logging>, I>>(object: I): Logging {
    const message = createBaseLogging();
    message.producerDestinations = object.producerDestinations?.map(e => LoggingDestination.fromPartial(e)) || [];
    message.consumerDestinations = object.consumerDestinations?.map(e => LoggingDestination.fromPartial(e)) || [];
    return message;
  }

};
export interface Logging_LoggingDestination {
  monitoredResource: string;
  logs: string[];
}

function createBaseLogging_LoggingDestination(): Logging_LoggingDestination {
  return {
    monitoredResource: "",
    logs: []
  };
}

export const Logging_LoggingDestination = {
  encode(message: Logging_LoggingDestination, writer = _m0.Writer.create()): _m0.Writer {
    if (message.monitoredResource !== "") {
      writer.uint32(26).string(message.monitoredResource);
    }

    for (const v of message.logs) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): Logging_LoggingDestination {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogging_LoggingDestination();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 3:
          message.monitoredResource = reader.string();
          break;

        case 1:
          message.logs.push(reader.string());

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Logging_LoggingDestination {
    return {
      monitoredResource: isSet(object.monitoredResource) ? String(object.monitoredResource) : "",
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: Logging_LoggingDestination): unknown {
    const obj: any = {};
    message.monitoredResource !== undefined && (obj.monitoredResource = message.monitoredResource);

    if (message.logs) {
      obj.logs = message.logs.map(e => e);
    } else {
      obj.logs = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Logging_LoggingDestination>, I>>(object: I): Logging_LoggingDestination {
    const message = createBaseLogging_LoggingDestination();
    message.monitoredResource = object.monitoredResource ?? "";
    message.logs = object.logs?.map(e => e) || [];
    return message;
  }

};