import * as _m0 from "protobufjs/minimal";
import { Exact, DeepPartial, isSet } from "@osmonauts/helpers";
export interface Monitoring {
  producerDestinations: Monitoring_MonitoringDestination[];
  consumerDestinations: Monitoring_MonitoringDestination[];
}

function createBaseMonitoring(): Monitoring {
  return {
    producerDestinations: [],
    consumerDestinations: []
  };
}

export const Monitoring = {
  encode(message: Monitoring, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.producerDestinations) {
      Monitoring_MonitoringDestination.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.consumerDestinations) {
      Monitoring_MonitoringDestination.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Monitoring {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoring();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.producerDestinations.push(Monitoring_MonitoringDestination.decode(reader, reader.uint32()));
          break;

        case 2:
          message.consumerDestinations.push(Monitoring_MonitoringDestination.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Monitoring {
    return {
      producerDestinations: Array.isArray(object?.producerDestinations) ? object.producerDestinations.map((e: any) => Monitoring_MonitoringDestination.fromJSON(e)) : [],
      consumerDestinations: Array.isArray(object?.consumerDestinations) ? object.consumerDestinations.map((e: any) => Monitoring_MonitoringDestination.fromJSON(e)) : []
    };
  },

  toJSON(message: Monitoring): unknown {
    const obj: any = {};

    if (message.producerDestinations) {
      obj.producerDestinations = message.producerDestinations.map(e => e ? Monitoring_MonitoringDestination.toJSON(e) : undefined);
    } else {
      obj.producerDestinations = [];
    }

    if (message.consumerDestinations) {
      obj.consumerDestinations = message.consumerDestinations.map(e => e ? Monitoring_MonitoringDestination.toJSON(e) : undefined);
    } else {
      obj.consumerDestinations = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Monitoring>, I>>(object: I): Monitoring {
    const message = createBaseMonitoring();
    message.producerDestinations = object.producerDestinations?.map(e => Monitoring_MonitoringDestination.fromPartial(e)) || [];
    message.consumerDestinations = object.consumerDestinations?.map(e => Monitoring_MonitoringDestination.fromPartial(e)) || [];
    return message;
  }

};
export interface Monitoring_MonitoringDestination {
  monitoredResource: string;
  metrics: string[];
}

function createBaseMonitoring_MonitoringDestination(): Monitoring_MonitoringDestination {
  return {
    monitoredResource: "",
    metrics: []
  };
}

export const Monitoring_MonitoringDestination = {
  encode(message: Monitoring_MonitoringDestination, writer = _m0.Writer.create()): _m0.Writer {
    if (message.monitoredResource !== "") {
      writer.uint32(10).string(message.monitoredResource);
    }

    for (const v of message.metrics) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Monitoring_MonitoringDestination {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoring_MonitoringDestination();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.monitoredResource = reader.string();
          break;

        case 2:
          message.metrics.push(reader.string());

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Monitoring_MonitoringDestination {
    return {
      monitoredResource: isSet(object.monitoredResource) ? String(object.monitoredResource) : "",
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: Monitoring_MonitoringDestination): unknown {
    const obj: any = {};
    message.monitoredResource !== undefined && (obj.monitoredResource = message.monitoredResource);

    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e);
    } else {
      obj.metrics = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Monitoring_MonitoringDestination>, I>>(object: I): Monitoring_MonitoringDestination {
    const message = createBaseMonitoring_MonitoringDestination();
    message.monitoredResource = object.monitoredResource ?? "";
    message.metrics = object.metrics?.map(e => e) || [];
    return message;
  }

};