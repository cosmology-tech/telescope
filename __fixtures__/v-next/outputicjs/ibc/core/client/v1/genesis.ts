import { IdentifiedClientState, ClientConsensusStates, Params } from "./client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisState {
  /** client states with their corresponding identifiers */
  clients: IdentifiedClientState[];
  /** consensus states from each client */
  clientsConsensus: ClientConsensusStates[];
  /** metadata from each client */
  clientsMetadata: IdentifiedGenesisMetadata[];
  params: Params;
  /** create localhost on initialization */
  createLocalhost: boolean;
  /** the sequence for the next generated client identifier */
  nextClientSequence: bigint;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadata {
  /** store key of metadata without clientID-prefix */
  key: Uint8Array;
  /** metadata value */
  value: Uint8Array;
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadata {
  clientId: string;
  clientMetadata: GenesisMetadata[];
}
function createBaseGenesisState(): GenesisState {
  return {
    clients: [],
    clientsConsensus: [],
    clientsMetadata: [],
    params: Params.fromPartial({}),
    createLocalhost: false,
    nextClientSequence: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/ibc.core.client.v1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.clients) {
      IdentifiedClientState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.clientsConsensus) {
      ClientConsensusStates.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.clientsMetadata) {
      IdentifiedGenesisMetadata.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    if (message.createLocalhost === true) {
      writer.uint32(40).bool(message.createLocalhost);
    }
    if (message.nextClientSequence !== BigInt(0)) {
      writer.uint32(48).uint64(message.nextClientSequence);
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
          message.clients.push(IdentifiedClientState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.clientsConsensus.push(ClientConsensusStates.decode(reader, reader.uint32()));
          break;
        case 3:
          message.clientsMetadata.push(IdentifiedGenesisMetadata.decode(reader, reader.uint32()));
          break;
        case 4:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 5:
          message.createLocalhost = reader.bool();
          break;
        case 6:
          message.nextClientSequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.clients = object.clients?.map(e => IdentifiedClientState.fromPartial(e)) || [];
    message.clientsConsensus = object.clientsConsensus?.map(e => ClientConsensusStates.fromPartial(e)) || [];
    message.clientsMetadata = object.clientsMetadata?.map(e => IdentifiedGenesisMetadata.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.createLocalhost = object.createLocalhost ?? false;
    message.nextClientSequence = object.nextClientSequence !== undefined && object.nextClientSequence !== null ? BigInt(object.nextClientSequence.toString()) : BigInt(0);
    return message;
  }
};
function createBaseGenesisMetadata(): GenesisMetadata {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const GenesisMetadata = {
  typeUrl: "/ibc.core.client.v1.GenesisMetadata",
  aminoType: "cosmos-sdk/GenesisMetadata",
  encode(message: GenesisMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisMetadata>): GenesisMetadata {
    const message = createBaseGenesisMetadata();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  }
};
function createBaseIdentifiedGenesisMetadata(): IdentifiedGenesisMetadata {
  return {
    clientId: "",
    clientMetadata: []
  };
}
export const IdentifiedGenesisMetadata = {
  typeUrl: "/ibc.core.client.v1.IdentifiedGenesisMetadata",
  aminoType: "cosmos-sdk/IdentifiedGenesisMetadata",
  encode(message: IdentifiedGenesisMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.clientMetadata) {
      GenesisMetadata.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IdentifiedGenesisMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedGenesisMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientMetadata.push(GenesisMetadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<IdentifiedGenesisMetadata>): IdentifiedGenesisMetadata {
    const message = createBaseIdentifiedGenesisMetadata();
    message.clientId = object.clientId ?? "";
    message.clientMetadata = object.clientMetadata?.map(e => GenesisMetadata.fromPartial(e)) || [];
    return message;
  }
};