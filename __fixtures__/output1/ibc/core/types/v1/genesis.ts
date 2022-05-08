import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial, KeysOfUnion, Builtin } from "@osmonauts/helpers";
import { GenesisState } from "../../client/v1/genesis";
import { GenesisState } from "../../connection/v1/genesis";
import { GenesisState } from "../../channel/v1/genesis";
export interface GenesisState {
  clientGenesis: GenesisState;
  connectionGenesis: GenesisState;
  channelGenesis: GenesisState;
}

function createBaseGenesisState(): GenesisState {
  return {
    clientGenesis: undefined,
    connectionGenesis: undefined,
    channelGenesis: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientGenesis !== undefined) {
      GenesisState.encode(message.clientGenesis, writer.uint32(10).fork()).ldelim();
    }

    if (message.connectionGenesis !== undefined) {
      GenesisState.encode(message.connectionGenesis, writer.uint32(18).fork()).ldelim();
    }

    if (message.channelGenesis !== undefined) {
      GenesisState.encode(message.channelGenesis, writer.uint32(26).fork()).ldelim();
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
          message.clientGenesis = GenesisState.decode(reader, reader.uint32());
          break;

        case 2:
          message.connectionGenesis = GenesisState.decode(reader, reader.uint32());
          break;

        case 3:
          message.channelGenesis = GenesisState.decode(reader, reader.uint32());
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
      clientGenesis: isSet(object.clientGenesis) ? GenesisState.fromJSON(object.clientGenesis) : undefined,
      connectionGenesis: isSet(object.connectionGenesis) ? GenesisState.fromJSON(object.connectionGenesis) : undefined,
      channelGenesis: isSet(object.channelGenesis) ? GenesisState.fromJSON(object.channelGenesis) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.clientGenesis !== undefined && (obj.clientGenesis = message.clientGenesis ? GenesisState.toJSON(message.clientGenesis) : undefined);
    message.connectionGenesis !== undefined && (obj.connectionGenesis = message.connectionGenesis ? GenesisState.toJSON(message.connectionGenesis) : undefined);
    message.channelGenesis !== undefined && (obj.channelGenesis = message.channelGenesis ? GenesisState.toJSON(message.channelGenesis) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.clientGenesis = object.clientGenesis !== undefined && object.clientGenesis !== null ? GenesisState.fromPartial(object.clientGenesis) : undefined;
    message.connectionGenesis = object.connectionGenesis !== undefined && object.connectionGenesis !== null ? GenesisState.fromPartial(object.connectionGenesis) : undefined;
    message.channelGenesis = object.channelGenesis !== undefined && object.channelGenesis !== null ? GenesisState.fromPartial(object.channelGenesis) : undefined;
    return message;
  }

};