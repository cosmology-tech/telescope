import { PoolParams, PoolParamsAmino, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
export const protobufPackage = "osmosis.gamm.poolmodels.stableswap.v1beta1";
/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPool {
  sender: string;
  poolParams?: PoolParams;
  initialPoolLiquidity: Coin[];
  scalingFactors: bigint[];
  futurePoolGovernor: string;
  scalingFactorController: string;
}
export interface MsgCreateStableswapPoolProtoMsg {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool";
  value: Uint8Array;
}
/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPoolAmino {
  sender: string;
  pool_params?: PoolParamsAmino;
  initial_pool_liquidity: CoinAmino[];
  scaling_factors: string[];
  future_pool_governor: string;
  scaling_factor_controller: string;
}
export interface MsgCreateStableswapPoolAminoMsg {
  type: "osmosis/gamm/create-stableswap-pool";
  value: MsgCreateStableswapPoolAmino;
}
/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPoolSDKType {
  sender: string;
  pool_params?: PoolParamsSDKType;
  initial_pool_liquidity: CoinSDKType[];
  scaling_factors: bigint[];
  future_pool_governor: string;
  scaling_factor_controller: string;
}
/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponse {
  poolId: bigint;
}
export interface MsgCreateStableswapPoolResponseProtoMsg {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse";
  value: Uint8Array;
}
/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponseAmino {
  pool_id: string;
}
export interface MsgCreateStableswapPoolResponseAminoMsg {
  type: "osmosis/gamm/create-stableswap-pool-response";
  value: MsgCreateStableswapPoolResponseAmino;
}
/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponseSDKType {
  pool_id: bigint;
}
/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactors {
  sender: string;
  poolId: bigint;
  scalingFactors: bigint[];
}
export interface MsgStableSwapAdjustScalingFactorsProtoMsg {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors";
  value: Uint8Array;
}
/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactorsAmino {
  sender: string;
  pool_id: string;
  scaling_factors: string[];
}
export interface MsgStableSwapAdjustScalingFactorsAminoMsg {
  type: "osmosis/gamm/stable-swap-adjust-scaling-factors";
  value: MsgStableSwapAdjustScalingFactorsAmino;
}
/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactorsSDKType {
  sender: string;
  pool_id: bigint;
  scaling_factors: bigint[];
}
export interface MsgStableSwapAdjustScalingFactorsResponse {}
export interface MsgStableSwapAdjustScalingFactorsResponseProtoMsg {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse";
  value: Uint8Array;
}
export interface MsgStableSwapAdjustScalingFactorsResponseAmino {}
export interface MsgStableSwapAdjustScalingFactorsResponseAminoMsg {
  type: "osmosis/gamm/stable-swap-adjust-scaling-factors-response";
  value: MsgStableSwapAdjustScalingFactorsResponseAmino;
}
export interface MsgStableSwapAdjustScalingFactorsResponseSDKType {}
function createBaseMsgCreateStableswapPool(): MsgCreateStableswapPool {
  return {
    sender: "",
    poolParams: undefined,
    initialPoolLiquidity: [],
    scalingFactors: [],
    futurePoolGovernor: "",
    scalingFactorController: ""
  };
}
export const MsgCreateStableswapPool = {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
  aminoType: "osmosis/gamm/create-stableswap-pool",
  encode(message: MsgCreateStableswapPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.initialPoolLiquidity) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.scalingFactors) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.futurePoolGovernor !== "") {
      writer.uint32(42).string(message.futurePoolGovernor);
    }
    if (message.scalingFactorController !== "") {
      writer.uint32(50).string(message.scalingFactorController);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateStableswapPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStableswapPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolParams = PoolParams.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.initialPoolLiquidity.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.scalingFactors.push(reader.uint64());
            }
          } else {
            message.scalingFactors.push(reader.uint64());
          }
          break;
        case 5:
          message.futurePoolGovernor = reader.string();
          break;
        case 6:
          message.scalingFactorController = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateStableswapPool {
    const obj = createBaseMsgCreateStableswapPool();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.poolParams)) obj.poolParams = PoolParams.fromJSON(object.poolParams);
    if (Array.isArray(object?.initialPoolLiquidity)) obj.initialPoolLiquidity = object.initialPoolLiquidity.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.scalingFactors)) obj.scalingFactors = object.scalingFactors.map((e: any) => BigInt(e.toString()));
    if (isSet(object.futurePoolGovernor)) obj.futurePoolGovernor = String(object.futurePoolGovernor);
    if (isSet(object.scalingFactorController)) obj.scalingFactorController = String(object.scalingFactorController);
    return obj;
  },
  toJSON(message: MsgCreateStableswapPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolParams !== undefined && (obj.poolParams = message.poolParams ? PoolParams.toJSON(message.poolParams) : undefined);
    if (message.initialPoolLiquidity) {
      obj.initialPoolLiquidity = message.initialPoolLiquidity.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.initialPoolLiquidity = [];
    }
    if (message.scalingFactors) {
      obj.scalingFactors = message.scalingFactors.map(e => (e || BigInt(0)).toString());
    } else {
      obj.scalingFactors = [];
    }
    message.futurePoolGovernor !== undefined && (obj.futurePoolGovernor = message.futurePoolGovernor);
    message.scalingFactorController !== undefined && (obj.scalingFactorController = message.scalingFactorController);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateStableswapPool>): MsgCreateStableswapPool {
    const message = createBaseMsgCreateStableswapPool();
    message.sender = object.sender ?? "";
    if (object.poolParams !== undefined && object.poolParams !== null) {
      message.poolParams = PoolParams.fromPartial(object.poolParams);
    }
    message.initialPoolLiquidity = object.initialPoolLiquidity?.map(e => Coin.fromPartial(e)) || [];
    message.scalingFactors = object.scalingFactors?.map(e => BigInt(e.toString())) || [];
    message.futurePoolGovernor = object.futurePoolGovernor ?? "";
    message.scalingFactorController = object.scalingFactorController ?? "";
    return message;
  },
  fromSDK(object: MsgCreateStableswapPoolSDKType): MsgCreateStableswapPool {
    return {
      sender: object?.sender,
      poolParams: object.pool_params ? PoolParams.fromSDK(object.pool_params) : undefined,
      initialPoolLiquidity: Array.isArray(object?.initial_pool_liquidity) ? object.initial_pool_liquidity.map((e: any) => Coin.fromSDK(e)) : [],
      scalingFactors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e: any) => e) : [],
      futurePoolGovernor: object?.future_pool_governor,
      scalingFactorController: object?.scaling_factor_controller
    };
  },
  toSDK(message: MsgCreateStableswapPool): MsgCreateStableswapPoolSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    message.poolParams !== undefined && (obj.pool_params = message.poolParams ? PoolParams.toSDK(message.poolParams) : undefined);
    if (message.initialPoolLiquidity) {
      obj.initial_pool_liquidity = message.initialPoolLiquidity.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.initial_pool_liquidity = [];
    }
    if (message.scalingFactors) {
      obj.scaling_factors = message.scalingFactors.map(e => e);
    } else {
      obj.scaling_factors = [];
    }
    obj.future_pool_governor = message.futurePoolGovernor;
    obj.scaling_factor_controller = message.scalingFactorController;
    return obj;
  },
  fromAmino(object: MsgCreateStableswapPoolAmino): MsgCreateStableswapPool {
    return {
      sender: object.sender,
      poolParams: object?.pool_params ? PoolParams.fromAmino(object.pool_params) : undefined,
      initialPoolLiquidity: Array.isArray(object?.initial_pool_liquidity) ? object.initial_pool_liquidity.map((e: any) => Coin.fromAmino(e)) : [],
      scalingFactors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e: any) => BigInt(e)) : [],
      futurePoolGovernor: object.future_pool_governor,
      scalingFactorController: object.scaling_factor_controller
    };
  },
  toAmino(message: MsgCreateStableswapPool, useInterfaces: boolean = true): MsgCreateStableswapPoolAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_params = message.poolParams ? PoolParams.toAmino(message.poolParams, useInterfaces) : undefined;
    if (message.initialPoolLiquidity) {
      obj.initial_pool_liquidity = message.initialPoolLiquidity.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.initial_pool_liquidity = [];
    }
    if (message.scalingFactors) {
      obj.scaling_factors = message.scalingFactors.map(e => e.toString());
    } else {
      obj.scaling_factors = [];
    }
    obj.future_pool_governor = message.futurePoolGovernor;
    obj.scaling_factor_controller = message.scalingFactorController;
    return obj;
  },
  fromAminoMsg(object: MsgCreateStableswapPoolAminoMsg): MsgCreateStableswapPool {
    return MsgCreateStableswapPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateStableswapPool, useInterfaces: boolean = true): MsgCreateStableswapPoolAminoMsg {
    return {
      type: "osmosis/gamm/create-stableswap-pool",
      value: MsgCreateStableswapPool.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgCreateStableswapPoolProtoMsg, useInterfaces: boolean = true): MsgCreateStableswapPool {
    return MsgCreateStableswapPool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateStableswapPool): Uint8Array {
    return MsgCreateStableswapPool.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateStableswapPool): MsgCreateStableswapPoolProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
      value: MsgCreateStableswapPool.encode(message).finish()
    };
  }
};
function createBaseMsgCreateStableswapPoolResponse(): MsgCreateStableswapPoolResponse {
  return {
    poolId: BigInt(0)
  };
}
export const MsgCreateStableswapPoolResponse = {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse",
  aminoType: "osmosis/gamm/create-stableswap-pool-response",
  encode(message: MsgCreateStableswapPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateStableswapPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStableswapPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateStableswapPoolResponse {
    const obj = createBaseMsgCreateStableswapPoolResponse();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  toJSON(message: MsgCreateStableswapPoolResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateStableswapPoolResponse>): MsgCreateStableswapPoolResponse {
    const message = createBaseMsgCreateStableswapPoolResponse();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    return message;
  },
  fromSDK(object: MsgCreateStableswapPoolResponseSDKType): MsgCreateStableswapPoolResponse {
    return {
      poolId: object?.pool_id
    };
  },
  toSDK(message: MsgCreateStableswapPoolResponse): MsgCreateStableswapPoolResponseSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    return obj;
  },
  fromAmino(object: MsgCreateStableswapPoolResponseAmino): MsgCreateStableswapPoolResponse {
    return {
      poolId: BigInt(object.pool_id)
    };
  },
  toAmino(message: MsgCreateStableswapPoolResponse, useInterfaces: boolean = true): MsgCreateStableswapPoolResponseAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateStableswapPoolResponseAminoMsg): MsgCreateStableswapPoolResponse {
    return MsgCreateStableswapPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateStableswapPoolResponse, useInterfaces: boolean = true): MsgCreateStableswapPoolResponseAminoMsg {
    return {
      type: "osmosis/gamm/create-stableswap-pool-response",
      value: MsgCreateStableswapPoolResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgCreateStableswapPoolResponseProtoMsg, useInterfaces: boolean = true): MsgCreateStableswapPoolResponse {
    return MsgCreateStableswapPoolResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateStableswapPoolResponse): Uint8Array {
    return MsgCreateStableswapPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateStableswapPoolResponse): MsgCreateStableswapPoolResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse",
      value: MsgCreateStableswapPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgStableSwapAdjustScalingFactors(): MsgStableSwapAdjustScalingFactors {
  return {
    sender: "",
    poolId: BigInt(0),
    scalingFactors: []
  };
}
export const MsgStableSwapAdjustScalingFactors = {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
  aminoType: "osmosis/gamm/stable-swap-adjust-scaling-factors",
  encode(message: MsgStableSwapAdjustScalingFactors, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    writer.uint32(26).fork();
    for (const v of message.scalingFactors) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgStableSwapAdjustScalingFactors {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStableSwapAdjustScalingFactors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.scalingFactors.push(reader.uint64());
            }
          } else {
            message.scalingFactors.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStableSwapAdjustScalingFactors {
    const obj = createBaseMsgStableSwapAdjustScalingFactors();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (Array.isArray(object?.scalingFactors)) obj.scalingFactors = object.scalingFactors.map((e: any) => BigInt(e.toString()));
    return obj;
  },
  toJSON(message: MsgStableSwapAdjustScalingFactors): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.scalingFactors) {
      obj.scalingFactors = message.scalingFactors.map(e => (e || BigInt(0)).toString());
    } else {
      obj.scalingFactors = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgStableSwapAdjustScalingFactors>): MsgStableSwapAdjustScalingFactors {
    const message = createBaseMsgStableSwapAdjustScalingFactors();
    message.sender = object.sender ?? "";
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.scalingFactors = object.scalingFactors?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromSDK(object: MsgStableSwapAdjustScalingFactorsSDKType): MsgStableSwapAdjustScalingFactors {
    return {
      sender: object?.sender,
      poolId: object?.pool_id,
      scalingFactors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e: any) => e) : []
    };
  },
  toSDK(message: MsgStableSwapAdjustScalingFactors): MsgStableSwapAdjustScalingFactorsSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.poolId;
    if (message.scalingFactors) {
      obj.scaling_factors = message.scalingFactors.map(e => e);
    } else {
      obj.scaling_factors = [];
    }
    return obj;
  },
  fromAmino(object: MsgStableSwapAdjustScalingFactorsAmino): MsgStableSwapAdjustScalingFactors {
    return {
      sender: object.sender,
      poolId: BigInt(object.pool_id),
      scalingFactors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e: any) => BigInt(e)) : []
    };
  },
  toAmino(message: MsgStableSwapAdjustScalingFactors, useInterfaces: boolean = true): MsgStableSwapAdjustScalingFactorsAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.scalingFactors) {
      obj.scaling_factors = message.scalingFactors.map(e => e.toString());
    } else {
      obj.scaling_factors = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgStableSwapAdjustScalingFactorsAminoMsg): MsgStableSwapAdjustScalingFactors {
    return MsgStableSwapAdjustScalingFactors.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStableSwapAdjustScalingFactors, useInterfaces: boolean = true): MsgStableSwapAdjustScalingFactorsAminoMsg {
    return {
      type: "osmosis/gamm/stable-swap-adjust-scaling-factors",
      value: MsgStableSwapAdjustScalingFactors.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgStableSwapAdjustScalingFactorsProtoMsg, useInterfaces: boolean = true): MsgStableSwapAdjustScalingFactors {
    return MsgStableSwapAdjustScalingFactors.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgStableSwapAdjustScalingFactors): Uint8Array {
    return MsgStableSwapAdjustScalingFactors.encode(message).finish();
  },
  toProtoMsg(message: MsgStableSwapAdjustScalingFactors): MsgStableSwapAdjustScalingFactorsProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
      value: MsgStableSwapAdjustScalingFactors.encode(message).finish()
    };
  }
};
function createBaseMsgStableSwapAdjustScalingFactorsResponse(): MsgStableSwapAdjustScalingFactorsResponse {
  return {};
}
export const MsgStableSwapAdjustScalingFactorsResponse = {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse",
  aminoType: "osmosis/gamm/stable-swap-adjust-scaling-factors-response",
  encode(_: MsgStableSwapAdjustScalingFactorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgStableSwapAdjustScalingFactorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgStableSwapAdjustScalingFactorsResponse {
    const obj = createBaseMsgStableSwapAdjustScalingFactorsResponse();
    return obj;
  },
  toJSON(_: MsgStableSwapAdjustScalingFactorsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgStableSwapAdjustScalingFactorsResponse>): MsgStableSwapAdjustScalingFactorsResponse {
    const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
    return message;
  },
  fromSDK(_: MsgStableSwapAdjustScalingFactorsResponseSDKType): MsgStableSwapAdjustScalingFactorsResponse {
    return {};
  },
  toSDK(_: MsgStableSwapAdjustScalingFactorsResponse): MsgStableSwapAdjustScalingFactorsResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgStableSwapAdjustScalingFactorsResponseAmino): MsgStableSwapAdjustScalingFactorsResponse {
    return {};
  },
  toAmino(_: MsgStableSwapAdjustScalingFactorsResponse, useInterfaces: boolean = true): MsgStableSwapAdjustScalingFactorsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgStableSwapAdjustScalingFactorsResponseAminoMsg): MsgStableSwapAdjustScalingFactorsResponse {
    return MsgStableSwapAdjustScalingFactorsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStableSwapAdjustScalingFactorsResponse, useInterfaces: boolean = true): MsgStableSwapAdjustScalingFactorsResponseAminoMsg {
    return {
      type: "osmosis/gamm/stable-swap-adjust-scaling-factors-response",
      value: MsgStableSwapAdjustScalingFactorsResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgStableSwapAdjustScalingFactorsResponseProtoMsg, useInterfaces: boolean = true): MsgStableSwapAdjustScalingFactorsResponse {
    return MsgStableSwapAdjustScalingFactorsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgStableSwapAdjustScalingFactorsResponse): Uint8Array {
    return MsgStableSwapAdjustScalingFactorsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStableSwapAdjustScalingFactorsResponse): MsgStableSwapAdjustScalingFactorsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse",
      value: MsgStableSwapAdjustScalingFactorsResponse.encode(message).finish()
    };
  }
};