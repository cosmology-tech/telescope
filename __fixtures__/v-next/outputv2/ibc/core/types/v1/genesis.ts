import { GenesisState as GenesisState1 } from "../../client/v1/genesis";
import { GenesisStateAmino as GenesisState1Amino } from "../../client/v1/genesis";
import { GenesisStateSDKType as GenesisState1SDKType } from "../../client/v1/genesis";
import { GenesisState as GenesisState2 } from "../../connection/v1/genesis";
import { GenesisStateAmino as GenesisState2Amino } from "../../connection/v1/genesis";
import { GenesisStateSDKType as GenesisState2SDKType } from "../../connection/v1/genesis";
import { GenesisState as GenesisState3 } from "../../channel/v1/genesis";
import { GenesisStateAmino as GenesisState3Amino } from "../../channel/v1/genesis";
import { GenesisStateSDKType as GenesisState3SDKType } from "../../channel/v1/genesis";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
export const protobufPackage = "ibc.core.types.v1";
/** GenesisState defines the ibc module's genesis state. */
export interface GenesisState {
  /** ICS002 - Clients genesis state */
  clientGenesis: GenesisState1;
  /** ICS003 - Connections genesis state */
  connectionGenesis: GenesisState2;
  /** ICS004 - Channel genesis state */
  channelGenesis: GenesisState3;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/ibc.core.types.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the ibc module's genesis state. */
export interface GenesisStateAmino {
  /** ICS002 - Clients genesis state */
  client_genesis?: GenesisState1Amino;
  /** ICS003 - Connections genesis state */
  connection_genesis?: GenesisState2Amino;
  /** ICS004 - Channel genesis state */
  channel_genesis?: GenesisState3Amino;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the ibc module's genesis state. */
export interface GenesisStateSDKType {
  client_genesis: GenesisState1SDKType;
  connection_genesis: GenesisState2SDKType;
  channel_genesis: GenesisState3SDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    clientGenesis: GenesisState1.fromPartial({}),
    connectionGenesis: GenesisState2.fromPartial({}),
    channelGenesis: GenesisState3.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/ibc.core.types.v1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientGenesis !== undefined) {
      GenesisState1.encode(message.clientGenesis, writer.uint32(10).fork()).ldelim();
    }
    if (message.connectionGenesis !== undefined) {
      GenesisState2.encode(message.connectionGenesis, writer.uint32(18).fork()).ldelim();
    }
    if (message.channelGenesis !== undefined) {
      GenesisState3.encode(message.channelGenesis, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientGenesis = GenesisState1.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.connectionGenesis = GenesisState2.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.channelGenesis = GenesisState3.decode(reader, reader.uint32(), useInterfaces);
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
    if (isSet(object.clientGenesis)) obj.clientGenesis = GenesisState1.fromJSON(object.clientGenesis);
    if (isSet(object.connectionGenesis)) obj.connectionGenesis = GenesisState2.fromJSON(object.connectionGenesis);
    if (isSet(object.channelGenesis)) obj.channelGenesis = GenesisState3.fromJSON(object.channelGenesis);
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.clientGenesis !== undefined && (obj.clientGenesis = message.clientGenesis ? GenesisState1.toJSON(message.clientGenesis) : undefined);
    message.connectionGenesis !== undefined && (obj.connectionGenesis = message.connectionGenesis ? GenesisState2.toJSON(message.connectionGenesis) : undefined);
    message.channelGenesis !== undefined && (obj.channelGenesis = message.channelGenesis ? GenesisState3.toJSON(message.channelGenesis) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.clientGenesis !== undefined && object.clientGenesis !== null) {
      message.clientGenesis = GenesisState1.fromPartial(object.clientGenesis);
    }
    if (object.connectionGenesis !== undefined && object.connectionGenesis !== null) {
      message.connectionGenesis = GenesisState2.fromPartial(object.connectionGenesis);
    }
    if (object.channelGenesis !== undefined && object.channelGenesis !== null) {
      message.channelGenesis = GenesisState3.fromPartial(object.channelGenesis);
    }
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      clientGenesis: object.client_genesis ? GenesisState1.fromSDK(object.client_genesis) : undefined,
      connectionGenesis: object.connection_genesis ? GenesisState2.fromSDK(object.connection_genesis) : undefined,
      channelGenesis: object.channel_genesis ? GenesisState3.fromSDK(object.channel_genesis) : undefined
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.clientGenesis !== undefined && (obj.client_genesis = message.clientGenesis ? GenesisState1.toSDK(message.clientGenesis) : undefined);
    message.connectionGenesis !== undefined && (obj.connection_genesis = message.connectionGenesis ? GenesisState2.toSDK(message.connectionGenesis) : undefined);
    message.channelGenesis !== undefined && (obj.channel_genesis = message.channelGenesis ? GenesisState3.toSDK(message.channelGenesis) : undefined);
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      clientGenesis: object?.client_genesis ? GenesisState1.fromAmino(object.client_genesis) : undefined,
      connectionGenesis: object?.connection_genesis ? GenesisState2.fromAmino(object.connection_genesis) : undefined,
      channelGenesis: object?.channel_genesis ? GenesisState3.fromAmino(object.channel_genesis) : undefined
    };
  },
  toAmino(message: GenesisState, useInterfaces: boolean = true): GenesisStateAmino {
    const obj: any = {};
    obj.client_genesis = message.clientGenesis ? GenesisState1.toAmino(message.clientGenesis, useInterfaces) : undefined;
    obj.connection_genesis = message.connectionGenesis ? GenesisState2.toAmino(message.connectionGenesis, useInterfaces) : undefined;
    obj.channel_genesis = message.channelGenesis ? GenesisState3.toAmino(message.channelGenesis, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState, useInterfaces: boolean = true): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg, useInterfaces: boolean = true): GenesisState {
    return GenesisState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/ibc.core.types.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};