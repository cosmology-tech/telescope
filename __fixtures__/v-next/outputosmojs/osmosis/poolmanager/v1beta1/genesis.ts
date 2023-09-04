import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ModuleRoute, ModuleRouteSDKType } from "./module_route";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet } from "../../../helpers";
export const protobufPackage = "osmosis.poolmanager.v1beta1";
/** Params holds parameters for the poolmanager module */
export interface Params {
  poolCreationFee: Coin[];
}
/** Params holds parameters for the poolmanager module */
export interface ParamsSDKType {
  pool_creation_fee: CoinSDKType[];
}
/** GenesisState defines the poolmanager module's genesis state. */
export interface GenesisState {
  /** the next_pool_id */
  nextPoolId: bigint;
  /** params is the container of poolmanager parameters. */
  params: Params;
  /** pool_routes is the container of the mappings from pool id to pool type. */
  poolRoutes: ModuleRoute[];
}
/** GenesisState defines the poolmanager module's genesis state. */
export interface GenesisStateSDKType {
  next_pool_id: bigint;
  params: ParamsSDKType;
  pool_routes: ModuleRouteSDKType[];
}
function createBaseParams(): Params {
  return {
    poolCreationFee: []
  };
}
export const Params = {
  typeUrl: "/osmosis.poolmanager.v1beta1.Params",
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
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (Array.isArray(object?.poolCreationFee)) object.poolCreationFee.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.poolCreationFee) {
      obj.poolCreationFee = message.poolCreationFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.poolCreationFee = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.poolCreationFee = object.poolCreationFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      poolCreationFee: Array.isArray(object?.pool_creation_fee) ? object.pool_creation_fee.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): ParamsSDKType {
    return {
      pool_creation_fee: Array.isArray(object?.pool_creation_fee) ? object.pool_creation_fee.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    if (message.poolCreationFee) {
      obj.pool_creation_fee = message.poolCreationFee.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.pool_creation_fee = [];
    }
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      poolCreationFee: Array.isArray(object?.pool_creation_fee) ? object.pool_creation_fee.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.poolCreationFee) {
      obj.pool_creation_fee = message.poolCreationFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.pool_creation_fee = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/poolmanager/params",
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
      typeUrl: "/osmosis.poolmanager.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    nextPoolId: BigInt(0),
    params: Params.fromPartial({}),
    poolRoutes: []
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.poolmanager.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.nextPoolId);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.poolRoutes) {
      ModuleRoute.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.nextPoolId = reader.uint64();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 3:
          message.poolRoutes.push(ModuleRoute.decode(reader, reader.uint32()));
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
    if (isSet(object.nextPoolId)) obj.nextPoolId = BigInt(object.nextPoolId.toString());
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.poolRoutes)) object.poolRoutes.map((e: any) => ModuleRoute.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.nextPoolId !== undefined && (obj.nextPoolId = (message.nextPoolId || BigInt(0)).toString());
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.poolRoutes) {
      obj.poolRoutes = message.poolRoutes.map(e => e ? ModuleRoute.toJSON(e) : undefined);
    } else {
      obj.poolRoutes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.nextPoolId = object.nextPoolId !== undefined && object.nextPoolId !== null ? BigInt(object.nextPoolId.toString()) : BigInt(0);
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : Params.fromPartial({});
    message.poolRoutes = object.poolRoutes?.map(e => ModuleRoute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      nextPoolId: object?.next_pool_id,
      params: object.params ? Params.fromSDK(object.params) : undefined,
      poolRoutes: Array.isArray(object?.pool_routes) ? object.pool_routes.map((e: any) => ModuleRoute.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      next_pool_id: isSet(object.next_pool_id) ? BigInt(object.next_pool_id.toString()) : BigInt(0),
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined,
      pool_routes: Array.isArray(object?.pool_routes) ? object.pool_routes.map((e: any) => ModuleRoute.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    obj.next_pool_id = message.nextPoolId;
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.poolRoutes) {
      obj.pool_routes = message.poolRoutes.map(e => e ? ModuleRoute.toSDK(e) : undefined);
    } else {
      obj.pool_routes = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      nextPoolId: BigInt(object.next_pool_id),
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      poolRoutes: Array.isArray(object?.pool_routes) ? object.pool_routes.map((e: any) => ModuleRoute.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.next_pool_id = message.nextPoolId ? message.nextPoolId.toString() : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.poolRoutes) {
      obj.pool_routes = message.poolRoutes.map(e => e ? ModuleRoute.toAmino(e) : undefined);
    } else {
      obj.pool_routes = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/poolmanager/genesis-state",
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
      typeUrl: "/osmosis.poolmanager.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};