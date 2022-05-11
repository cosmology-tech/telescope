import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobuf/minimal";
import { Exact, DeepPartial, isSet } from "@osmonauts/helpers";
export interface Config {
  modules: ModuleConfig[];
}

function createBaseConfig(): Config {
  return {
    modules: []
  };
}

export const Config = {
  encode(message: Config, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.modules) {
      ModuleConfig.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Config {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.modules.push(ModuleConfig.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Config {
    return {
      modules: Array.isArray(object?.modules) ? object.modules.map((e: any) => ModuleConfig.fromJSON(e)) : []
    };
  },

  toJSON(message: Config): unknown {
    const obj: any = {};

    if (message.modules) {
      obj.modules = message.modules.map(e => e ? ModuleConfig.toJSON(e) : undefined);
    } else {
      obj.modules = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Config>, I>>(object: I): Config {
    const message = createBaseConfig();
    message.modules = object.modules?.map(e => ModuleConfig.fromPartial(e)) || [];
    return message;
  }

};
export interface ModuleConfig {
  name: string;
  config: Any;
}

function createBaseModuleConfig(): ModuleConfig {
  return {
    name: "",
    config: undefined
  };
}

export const ModuleConfig = {
  encode(message: ModuleConfig, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.config !== undefined) {
      Any.encode(message.config, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.config = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ModuleConfig {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      config: isSet(object.config) ? Any.fromJSON(object.config) : undefined
    };
  },

  toJSON(message: ModuleConfig): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.config !== undefined && (obj.config = message.config ? Any.toJSON(message.config) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleConfig>, I>>(object: I): ModuleConfig {
    const message = createBaseModuleConfig();
    message.name = object.name ?? "";
    message.config = object.config !== undefined && object.config !== null ? Any.fromPartial(object.config) : undefined;
    return message;
  }

};