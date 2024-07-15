import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.gamm.v1beta1";
/** Params holds parameters for the incentives module */
export interface Params {
  poolCreationFee: Coin[];
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the incentives module */
export interface ParamsAmino {
  pool_creation_fee?: CoinAmino[];
}
export interface ParamsAminoMsg {
  type: "osmosis/gamm/params";
  value: ParamsAmino;
}
/** Params holds parameters for the incentives module */
export interface ParamsSDKType {
  pool_creation_fee: CoinSDKType[];
}
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisState {
  pools: Any[];
  /** will be renamed to next_pool_id in an upcoming version */
  nextPoolNumber: bigint;
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisStateAmino {
  pools?: AnyAmino[];
  /** will be renamed to next_pool_id in an upcoming version */
  next_pool_number?: string;
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/gamm/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisStateSDKType {
  pools: AnySDKType[];
  next_pool_number: bigint;
  params: ParamsSDKType;
}
function createBaseParams(): Params {
  return {
    poolCreationFee: []
  };
}
export const Params = {
  typeUrl: "/osmosis.gamm.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.poolCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.poolCreationFee = object.poolCreationFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.poolCreationFee = object.pool_creation_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.poolCreationFee) {
      obj.pool_creation_fee = message.poolCreationFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.pool_creation_fee = message.poolCreationFee;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/gamm/params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    pools: [],
    nextPoolNumber: BigInt(0),
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.gamm.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPoolNumber !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextPoolNumber);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
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
          message.pools.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPoolNumber = reader.uint64();
          break;
        case 3:
          message.params = Params.decode(reader, reader.uint32());
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
    message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
    if (object.nextPoolNumber !== undefined && object.nextPoolNumber !== null) {
      message.nextPoolNumber = BigInt(object.nextPoolNumber.toString());
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.pools = object.pools?.map(e => Any.fromAmino(e)) || [];
    if (object.next_pool_number !== undefined && object.next_pool_number !== null) {
      message.nextPoolNumber = BigInt(object.next_pool_number);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    obj.next_pool_number = message.nextPoolNumber !== BigInt(0) ? (message.nextPoolNumber?.toString)() : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/gamm/genesis-state",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};