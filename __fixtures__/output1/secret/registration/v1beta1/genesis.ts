import { RegistrationNodeInfo } from "./types";
import { MasterCertificate } from "./msg";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial } from "@osmonauts/helpers";
export interface GenesisState {
  registration: RegistrationNodeInfo[];
  nodeExchMasterCertificate: MasterCertificate;
  ioMasterCertificate: MasterCertificate;
}

function createBaseGenesisState(): GenesisState {
  return {
    registration: [],
    nodeExchMasterCertificate: undefined,
    ioMasterCertificate: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.registration) {
      RegistrationNodeInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.nodeExchMasterCertificate !== undefined) {
      MasterCertificate.encode(message.nodeExchMasterCertificate, writer.uint32(18).fork()).ldelim();
    }

    if (message.ioMasterCertificate !== undefined) {
      MasterCertificate.encode(message.ioMasterCertificate, writer.uint32(26).fork()).ldelim();
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
          message.registration.push(RegistrationNodeInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.nodeExchMasterCertificate = MasterCertificate.decode(reader, reader.uint32());
          break;

        case 3:
          message.ioMasterCertificate = MasterCertificate.decode(reader, reader.uint32());
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
      registration: Array.isArray(object?.registration) ? object.registration.map((e: any) => RegistrationNodeInfo.fromJSON(e)) : [],
      nodeExchMasterCertificate: isSet(object.nodeExchMasterCertificate) ? MasterCertificate.fromJSON(object.nodeExchMasterCertificate) : undefined,
      ioMasterCertificate: isSet(object.ioMasterCertificate) ? MasterCertificate.fromJSON(object.ioMasterCertificate) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.registration) {
      obj.registration = message.registration.map(e => e ? RegistrationNodeInfo.toJSON(e) : undefined);
    } else {
      obj.registration = [];
    }

    message.nodeExchMasterCertificate !== undefined && (obj.nodeExchMasterCertificate = message.nodeExchMasterCertificate ? MasterCertificate.toJSON(message.nodeExchMasterCertificate) : undefined);
    message.ioMasterCertificate !== undefined && (obj.ioMasterCertificate = message.ioMasterCertificate ? MasterCertificate.toJSON(message.ioMasterCertificate) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.registration = object.registration?.map(e => RegistrationNodeInfo.fromPartial(e)) || [];
    message.nodeExchMasterCertificate = object.nodeExchMasterCertificate !== undefined && object.nodeExchMasterCertificate !== null ? MasterCertificate.fromPartial(object.nodeExchMasterCertificate) : undefined;
    message.ioMasterCertificate = object.ioMasterCertificate !== undefined && object.ioMasterCertificate !== null ? MasterCertificate.fromPartial(object.ioMasterCertificate) : undefined;
    return message;
  }

};