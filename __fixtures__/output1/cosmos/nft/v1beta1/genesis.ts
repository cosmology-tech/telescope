import { Class, ClassSDKType, NFT, NFTSDKType } from "./nft";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "@osmonauts/helpers";
export const protobufPackage = "cosmos.nft.v1beta1";

/** GenesisState defines the nft module's genesis state. */
export interface GenesisState {
  /** class defines the class of the nft type. */
  classes: Class[];
  entries: Entry[];
}

/** GenesisState defines the nft module's genesis state. */
export interface GenesisStateSDKType {
  /** class defines the class of the nft type. */
  classes: ClassSDKType[];
  entries: EntrySDKType[];
}

/** Entry Defines all nft owned by a person */
export interface Entry {
  /** owner is the owner address of the following nft */
  owner: string;

  /** nfts is a group of nfts of the same owner */
  nfts: NFT[];
}

/** Entry Defines all nft owned by a person */
export interface EntrySDKType {
  /** owner is the owner address of the following nft */
  owner: string;

  /** nfts is a group of nfts of the same owner */
  nfts: NFTSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    classes: [],
    entries: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.entries) {
      Entry.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.classes.push(Class.decode(reader, reader.uint32()));
          break;

        case 2:
          message.entries.push(Entry.decode(reader, reader.uint32()));
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
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => Class.fromJSON(e)) : [],
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => Entry.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toJSON(e) : undefined);
    } else {
      obj.classes = [];
    }

    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Entry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.classes = object.classes?.map(e => Class.fromPartial(e)) || [];
    message.entries = object.entries?.map(e => Entry.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => Class.fromSDK(e)) : [],
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => Entry.fromSDK(e)) : []
    };
  },

  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};

    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toSDK(e) : undefined);
    } else {
      obj.classes = [];
    }

    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Entry.toSDK(e) : undefined);
    } else {
      obj.entries = [];
    }

    return obj;
  }

};

function createBaseEntry(): Entry {
  return {
    owner: "",
    nfts: []
  };
}

export const Entry = {
  encode(message: Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Entry {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => NFT.fromJSON(e)) : []
    };
  },

  toJSON(message: Entry): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);

    if (message.nfts) {
      obj.nfts = message.nfts.map(e => e ? NFT.toJSON(e) : undefined);
    } else {
      obj.nfts = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Entry>): Entry {
    const message = createBaseEntry();
    message.owner = object.owner ?? "";
    message.nfts = object.nfts?.map(e => NFT.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: EntrySDKType): Entry {
    return {
      owner: isSet(object.owner) ? object.owner : "",
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => NFT.fromSDK(e)) : []
    };
  },

  toSDK(message: Entry): EntrySDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);

    if (message.nfts) {
      obj.nfts = message.nfts.map(e => e ? NFT.toSDK(e) : undefined);
    } else {
      obj.nfts = [];
    }

    return obj;
  }

};