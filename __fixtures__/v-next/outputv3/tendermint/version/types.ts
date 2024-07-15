import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
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
export interface AppProtoMsg {
  typeUrl: "/tendermint.version.App";
  value: Uint8Array;
}
/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */
export interface AppAmino {
  protocol?: string;
  software?: string;
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
export interface ConsensusProtoMsg {
  typeUrl: "/tendermint.version.Consensus";
  value: Uint8Array;
}
/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface ConsensusAmino {
  block?: string;
  app?: string;
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
    protocol: BigInt(0),
    software: ""
  };
}
export const App = {
  typeUrl: "/tendermint.version.App",
  encode(message: App, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.protocol !== BigInt(0)) {
      writer.uint32(8).uint64(message.protocol);
    }
    if (message.software !== "") {
      writer.uint32(18).string(message.software);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): App {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocol = reader.uint64();
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
    const obj = createBaseApp();
    if (isSet(object.protocol)) obj.protocol = BigInt(object.protocol.toString());
    if (isSet(object.software)) obj.software = String(object.software);
    return obj;
  },
  fromPartial(object: DeepPartial<App>): App {
    const message = createBaseApp();
    if (object.protocol !== undefined && object.protocol !== null) {
      message.protocol = BigInt(object.protocol.toString());
    }
    message.software = object.software ?? "";
    return message;
  },
  fromSDK(object: AppSDKType): App {
    return {
      protocol: object?.protocol,
      software: object?.software
    };
  },
  toSDK(message: App): AppSDKType {
    const obj: any = {};
    obj.protocol = message.protocol;
    obj.software = message.software;
    return obj;
  },
  fromAmino(object: AppAmino): App {
    const message = createBaseApp();
    if (object.protocol !== undefined && object.protocol !== null) {
      message.protocol = BigInt(object.protocol);
    }
    if (object.software !== undefined && object.software !== null) {
      message.software = object.software;
    }
    return message;
  },
  toAmino(message: App, useInterfaces: boolean = true): AppAmino {
    const obj: any = {};
    obj.protocol = message.protocol !== BigInt(0) ? (message.protocol?.toString)() : undefined;
    obj.software = message.software === "" ? undefined : message.software;
    return obj;
  },
  fromProtoMsg(message: AppProtoMsg, useInterfaces: boolean = true): App {
    return App.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: App): Uint8Array {
    return App.encode(message).finish();
  },
  toProtoMsg(message: App): AppProtoMsg {
    return {
      typeUrl: "/tendermint.version.App",
      value: App.encode(message).finish()
    };
  }
};
function createBaseConsensus(): Consensus {
  return {
    block: BigInt(0),
    app: BigInt(0)
  };
}
export const Consensus = {
  typeUrl: "/tendermint.version.Consensus",
  encode(message: Consensus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.block !== BigInt(0)) {
      writer.uint32(8).uint64(message.block);
    }
    if (message.app !== BigInt(0)) {
      writer.uint32(16).uint64(message.app);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Consensus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = reader.uint64();
          break;
        case 2:
          message.app = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Consensus {
    const obj = createBaseConsensus();
    if (isSet(object.block)) obj.block = BigInt(object.block.toString());
    if (isSet(object.app)) obj.app = BigInt(object.app.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Consensus>): Consensus {
    const message = createBaseConsensus();
    if (object.block !== undefined && object.block !== null) {
      message.block = BigInt(object.block.toString());
    }
    if (object.app !== undefined && object.app !== null) {
      message.app = BigInt(object.app.toString());
    }
    return message;
  },
  fromSDK(object: ConsensusSDKType): Consensus {
    return {
      block: object?.block,
      app: object?.app
    };
  },
  toSDK(message: Consensus): ConsensusSDKType {
    const obj: any = {};
    obj.block = message.block;
    obj.app = message.app;
    return obj;
  },
  fromAmino(object: ConsensusAmino): Consensus {
    const message = createBaseConsensus();
    if (object.block !== undefined && object.block !== null) {
      message.block = BigInt(object.block);
    }
    if (object.app !== undefined && object.app !== null) {
      message.app = BigInt(object.app);
    }
    return message;
  },
  toAmino(message: Consensus, useInterfaces: boolean = true): ConsensusAmino {
    const obj: any = {};
    obj.block = message.block !== BigInt(0) ? (message.block?.toString)() : undefined;
    obj.app = message.app !== BigInt(0) ? (message.app?.toString)() : undefined;
    return obj;
  },
  fromProtoMsg(message: ConsensusProtoMsg, useInterfaces: boolean = true): Consensus {
    return Consensus.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Consensus): Uint8Array {
    return Consensus.encode(message).finish();
  },
  toProtoMsg(message: Consensus): ConsensusProtoMsg {
    return {
      typeUrl: "/tendermint.version.Consensus",
      value: Consensus.encode(message).finish()
    };
  }
};