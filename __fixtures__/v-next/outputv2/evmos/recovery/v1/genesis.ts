import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "evmos.recovery.v1";
/** GenesisState defines the recovery module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/evmos.recovery.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the recovery module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the paramaters of the module. */
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/evmos.recovery.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the recovery module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
}
/** Params holds parameters for the recovery module */
export interface Params {
  /** enable recovery IBC middleware */
  enableRecovery: boolean;
  /** duration added to timeout timestamp for balances recovered via IBC packets */
  packetTimeoutDuration: Duration;
}
export interface ParamsProtoMsg {
  typeUrl: "/evmos.recovery.v1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the recovery module */
export interface ParamsAmino {
  /** enable recovery IBC middleware */
  enable_recovery?: boolean;
  /** duration added to timeout timestamp for balances recovered via IBC packets */
  packet_timeout_duration?: DurationAmino;
}
export interface ParamsAminoMsg {
  type: "/evmos.recovery.v1.Params";
  value: ParamsAmino;
}
/** Params holds parameters for the recovery module */
export interface ParamsSDKType {
  enable_recovery: boolean;
  packet_timeout_duration: DurationSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/evmos.recovery.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/evmos.recovery.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    enableRecovery: false,
    packetTimeoutDuration: Duration.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/evmos.recovery.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enableRecovery === true) {
      writer.uint32(8).bool(message.enableRecovery);
    }
    if (message.packetTimeoutDuration !== undefined) {
      Duration.encode(message.packetTimeoutDuration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseParams();
    if (isSet(object.enableRecovery)) obj.enableRecovery = Boolean(object.enableRecovery);
    if (isSet(object.packetTimeoutDuration)) obj.packetTimeoutDuration = Duration.fromJSON(object.packetTimeoutDuration);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.enableRecovery !== undefined && (obj.enableRecovery = message.enableRecovery);
    message.packetTimeoutDuration !== undefined && (obj.packetTimeoutDuration = message.packetTimeoutDuration ? Duration.toJSON(message.packetTimeoutDuration) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.enableRecovery = object.enableRecovery ?? false;
    if (object.packetTimeoutDuration !== undefined && object.packetTimeoutDuration !== null) {
      message.packetTimeoutDuration = Duration.fromPartial(object.packetTimeoutDuration);
    }
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      enableRecovery: object?.enable_recovery,
      packetTimeoutDuration: object.packet_timeout_duration ? Duration.fromSDK(object.packet_timeout_duration) : undefined
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.enable_recovery = message.enableRecovery;
    message.packetTimeoutDuration !== undefined && (obj.packet_timeout_duration = message.packetTimeoutDuration ? Duration.toSDK(message.packetTimeoutDuration) : undefined);
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.enable_recovery !== undefined && object.enable_recovery !== null) {
      message.enableRecovery = object.enable_recovery;
    }
    if (object.packet_timeout_duration !== undefined && object.packet_timeout_duration !== null) {
      message.packetTimeoutDuration = Duration.fromAmino(object.packet_timeout_duration);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.enable_recovery = message.enableRecovery === false ? undefined : message.enableRecovery;
    obj.packet_timeout_duration = message.packetTimeoutDuration ? Duration.toAmino(message.packetTimeoutDuration) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/evmos.recovery.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};