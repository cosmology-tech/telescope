import { Duration } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export const protobufPackage = "evmos.recovery.v1";

/** GenesisState defines the recovery module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
}

/** Params holds parameters for the recovery module */
export interface Params {
  /** enable recovery IBC middleware */
  enableRecovery: boolean;

  /** duration added to timeout timestamp for balances recovered via IBC packets */
  packetTimeoutDuration: string;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseParams(): Params {
  return {
    enableRecovery: false,
    packetTimeoutDuration: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableRecovery === true) {
      writer.uint32(8).bool(message.enableRecovery);
    }

    if (message.packetTimeoutDuration !== undefined) {
      Duration.encode(message.packetTimeoutDuration, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.enableRecovery = reader.bool();
          break;

        case 2:
          message.packetTimeoutDuration = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      enableRecovery: isSet(object.enableRecovery) ? Boolean(object.enableRecovery) : false,
      packetTimeoutDuration: isSet(object.packetTimeoutDuration) ? String(object.packetTimeoutDuration) : undefined
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.enableRecovery !== undefined && (obj.enableRecovery = message.enableRecovery);
    message.packetTimeoutDuration !== undefined && (obj.packetTimeoutDuration = message.packetTimeoutDuration);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.enableRecovery = object.enableRecovery ?? false;
    message.packetTimeoutDuration = object.packetTimeoutDuration ?? undefined;
    return message;
  }

};