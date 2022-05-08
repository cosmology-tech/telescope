import * as _m0 from "protobuf/minimal";
import { isSet } from "@osmonauts/helpers";
export interface RoutingRule {
  routingParameters: RoutingParameter[];
}

function createBaseRoutingRule(): RoutingRule {
  return {
    routingParameters: []
  };
}

export const RoutingRule = {
  encode(message: RoutingRule, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.routingParameters) {
      RoutingParameter.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): RoutingRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoutingRule();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.routingParameters.push(RoutingParameter.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RoutingRule {
    return {
      routingParameters: Array.isArray(object?.routingParameters) ? object.routingParameters.map((e: any) => RoutingParameter.fromJSON(e)) : []
    };
  },

  toJSON(message: RoutingRule): unknown {
    const obj: any = {};

    if (message.routingParameters) {
      obj.routingParameters = message.routingParameters.map(e => e ? RoutingParameter.toJSON(e) : undefined);
    } else {
      obj.routingParameters = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RoutingRule>, I>>(object: I): RoutingRule {
    const message = createBaseRoutingRule();
    message.routingParameters = object.routingParameters?.map(e => RoutingParameter.fromPartial(e)) || [];
    return message;
  }

};
export interface RoutingParameter {
  field: string;
  pathTemplate: string;
}

function createBaseRoutingParameter(): RoutingParameter {
  return {
    field: "",
    pathTemplate: ""
  };
}

export const RoutingParameter = {
  encode(message: RoutingParameter, writer = _m0.Writer.create()): _m0.Writer {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }

    if (message.pathTemplate !== "") {
      writer.uint32(18).string(message.pathTemplate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): RoutingParameter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoutingParameter();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.field = reader.string();
          break;

        case 2:
          message.pathTemplate = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RoutingParameter {
    return {
      field: isSet(object.field) ? String(object.field) : "",
      pathTemplate: isSet(object.pathTemplate) ? String(object.pathTemplate) : ""
    };
  },

  toJSON(message: RoutingParameter): unknown {
    const obj: any = {};
    message.field !== undefined && (obj.field = message.field);
    message.pathTemplate !== undefined && (obj.pathTemplate = message.pathTemplate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RoutingParameter>, I>>(object: I): RoutingParameter {
    const message = createBaseRoutingParameter();
    message.field = object.field ?? "";
    message.pathTemplate = object.pathTemplate ?? "";
    return message;
  }

};