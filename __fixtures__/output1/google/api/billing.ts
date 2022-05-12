import * as _m0 from "protobufjs/minimal";
import { Exact, DeepPartial, isSet } from "@osmonauts/helpers";
export interface Billing {
  consumerDestinations: Billing_BillingDestination[];
}

function createBaseBilling(): Billing {
  return {
    consumerDestinations: []
  };
}

export const Billing = {
  encode(message: Billing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.consumerDestinations) {
      Billing_BillingDestination.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Billing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBilling();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 8:
          message.consumerDestinations.push(Billing_BillingDestination.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Billing {
    return {
      consumerDestinations: Array.isArray(object?.consumerDestinations) ? object.consumerDestinations.map((e: any) => Billing_BillingDestination.fromJSON(e)) : []
    };
  },

  toJSON(message: Billing): unknown {
    const obj: any = {};

    if (message.consumerDestinations) {
      obj.consumerDestinations = message.consumerDestinations.map(e => e ? Billing_BillingDestination.toJSON(e) : undefined);
    } else {
      obj.consumerDestinations = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Billing>, I>>(object: I): Billing {
    const message = createBaseBilling();
    message.consumerDestinations = object.consumerDestinations?.map(e => Billing_BillingDestination.fromPartial(e)) || [];
    return message;
  }

};
export interface Billing_BillingDestination {
  monitoredResource: string;
  metrics: string[];
}

function createBaseBilling_BillingDestination(): Billing_BillingDestination {
  return {
    monitoredResource: "",
    metrics: []
  };
}

export const Billing_BillingDestination = {
  encode(message: Billing_BillingDestination, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.monitoredResource !== "") {
      writer.uint32(10).string(message.monitoredResource);
    }

    for (const v of message.metrics) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Billing_BillingDestination {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBilling_BillingDestination();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.monitoredResource = reader.string();
          break;

        case 2:
          message.metrics.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Billing_BillingDestination {
    return {
      monitoredResource: isSet(object.monitoredResource) ? String(object.monitoredResource) : "",
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: Billing_BillingDestination): unknown {
    const obj: any = {};
    message.monitoredResource !== undefined && (obj.monitoredResource = message.monitoredResource);

    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e);
    } else {
      obj.metrics = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Billing_BillingDestination>, I>>(object: I): Billing_BillingDestination {
    const message = createBaseBilling_BillingDestination();
    message.monitoredResource = object.monitoredResource ?? "";
    message.metrics = object.metrics?.map(e => e) || [];
    return message;
  }

};