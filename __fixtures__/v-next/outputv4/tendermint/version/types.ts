import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "../../helpers";
export const protobufPackage = "tendermint.version";

/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */
export interface App {
  protocol: bigint;
  software: string;
}

/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */
export interface AppSDKType {
  protocol: bigint;
  software: string;
}

/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface Consensus {
  block: bigint;
  app: bigint;
}

/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface ConsensusSDKType {
  block: bigint;
  app: bigint;
}

function createBaseApp(): App {
  return {
    protocol: BigInt("0"),
    software: ""
  };
}

export const App = {
  encode(message: App, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocol !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.protocol.toString()));
    }

    if (message.software !== "") {
      writer.uint32(18).string(message.software);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): App {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApp();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.protocol = BigInt(reader.uint64().toString());
          break;

        case 2:
          message.software = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): App {
    return {
      protocol: isSet(object.protocol) ? BigInt(object.protocol.toString()) : BigInt("0"),
      software: isSet(object.software) ? String(object.software) : ""
    };
  },

  toJSON(message: App): unknown {
    const obj: any = {};
    message.protocol !== undefined && (obj.protocol = (message.protocol || BigInt("0")).toString());
    message.software !== undefined && (obj.software = message.software);
    return obj;
  },

  fromPartial(object: DeepPartial<App>): App {
    const message = createBaseApp();
    message.protocol = object.protocol !== undefined && object.protocol !== null ? BigInt(object.protocol.toString()) : BigInt("0");
    message.software = object.software ?? "";
    return message;
  },

  fromSDK(object: AppSDKType): App {
    return {
      protocol: object?.protocol,
      software: object?.software
    };
  },

  fromSDKJSON(object: any): AppSDKType {
    return {
      protocol: isSet(object.protocol) ? BigInt(object.protocol.toString()) : BigInt("0"),
      software: isSet(object.software) ? String(object.software) : ""
    };
  },

  toSDK(message: App): AppSDKType {
    const obj: any = {};
    obj.protocol = message.protocol;
    obj.software = message.software;
    return obj;
  }

};

function createBaseConsensus(): Consensus {
  return {
    block: BigInt("0"),
    app: BigInt("0")
  };
}

export const Consensus = {
  encode(message: Consensus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.block !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.block.toString()));
    }

    if (message.app !== BigInt(0)) {
      writer.uint32(16).uint64(Long.fromString(message.app.toString()));
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Consensus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensus();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.block = BigInt(reader.uint64().toString());
          break;

        case 2:
          message.app = BigInt(reader.uint64().toString());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Consensus {
    return {
      block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt("0"),
      app: isSet(object.app) ? BigInt(object.app.toString()) : BigInt("0")
    };
  },

  toJSON(message: Consensus): unknown {
    const obj: any = {};
    message.block !== undefined && (obj.block = (message.block || BigInt("0")).toString());
    message.app !== undefined && (obj.app = (message.app || BigInt("0")).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Consensus>): Consensus {
    const message = createBaseConsensus();
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt("0");
    message.app = object.app !== undefined && object.app !== null ? BigInt(object.app.toString()) : BigInt("0");
    return message;
  },

  fromSDK(object: ConsensusSDKType): Consensus {
    return {
      block: object?.block,
      app: object?.app
    };
  },

  fromSDKJSON(object: any): ConsensusSDKType {
    return {
      block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt("0"),
      app: isSet(object.app) ? BigInt(object.app.toString()) : BigInt("0")
    };
  },

  toSDK(message: Consensus): ConsensusSDKType {
    const obj: any = {};
    obj.block = message.block;
    obj.app = message.app;
    return obj;
  }

};