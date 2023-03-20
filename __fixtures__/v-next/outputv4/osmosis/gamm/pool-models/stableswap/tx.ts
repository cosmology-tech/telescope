import { PoolParams, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "../../../../helpers";
export const protobufPackage = "osmosis.gamm.poolmodels.stableswap.v1beta1";

/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPool {
  sender: string;
  poolParams?: PoolParams;
  initialPoolLiquidity: Coin[];
  scalingFactors: Long[];
  futurePoolGovernor: string;
  scalingFactorController: string;
}

/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPoolSDKType {
  sender: string;
  pool_params?: PoolParamsSDKType;
  initial_pool_liquidity: CoinSDKType[];
  scaling_factors: Long[];
  future_pool_governor: string;
  scaling_factor_controller: string;
}

/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponse {
  poolId: Long;
}

/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponseSDKType {
  pool_id: Long;
}

/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactors {
  sender: string;
  poolId: Long;
  scalingFactors: Long[];
}

/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactorsSDKType {
  sender: string;
  pool_id: Long;
  scaling_factors: Long[];
}
export interface MsgStableSwapAdjustScalingFactorsResponse {}
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
  encode(message: MsgCreateStableswapPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStableswapPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStableswapPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;

        case 3:
          message.initialPoolLiquidity.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.scalingFactors.push((reader.uint64() as Long));
            }
          } else {
            message.scalingFactors.push((reader.uint64() as Long));
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
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolParams: isSet(object.poolParams) ? PoolParams.fromJSON(object.poolParams) : undefined,
      initialPoolLiquidity: Array.isArray(object?.initialPoolLiquidity) ? object.initialPoolLiquidity.map((e: any) => Coin.fromJSON(e)) : [],
      scalingFactors: Array.isArray(object?.scalingFactors) ? object.scalingFactors.map((e: any) => Long.fromValue(e)) : [],
      futurePoolGovernor: isSet(object.futurePoolGovernor) ? String(object.futurePoolGovernor) : "",
      scalingFactorController: isSet(object.scalingFactorController) ? String(object.scalingFactorController) : ""
    };
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
      obj.scalingFactors = message.scalingFactors.map(e => (e || Long.UZERO).toString());
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
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    message.initialPoolLiquidity = object.initialPoolLiquidity?.map(e => Coin.fromPartial(e)) || [];
    message.scalingFactors = object.scalingFactors?.map(e => Long.fromValue(e)) || [];
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

  fromSDKJSON(object: any): MsgCreateStableswapPoolSDKType {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_params: isSet(object.pool_params) ? PoolParams.fromSDKJSON(object.pool_params) : undefined,
      initial_pool_liquidity: Array.isArray(object?.initial_pool_liquidity) ? object.initial_pool_liquidity.map((e: any) => Coin.fromSDKJSON(e)) : [],
      scaling_factors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e: any) => Long.fromValue(e)) : [],
      future_pool_governor: isSet(object.future_pool_governor) ? String(object.future_pool_governor) : "",
      scaling_factor_controller: isSet(object.scaling_factor_controller) ? String(object.scaling_factor_controller) : ""
    };
  }

};

function createBaseMsgCreateStableswapPoolResponse(): MsgCreateStableswapPoolResponse {
  return {
    poolId: Long.UZERO
  };
}

export const MsgCreateStableswapPoolResponse = {
  encode(message: MsgCreateStableswapPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStableswapPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStableswapPoolResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateStableswapPoolResponse {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },

  toJSON(message: MsgCreateStableswapPoolResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateStableswapPoolResponse>): MsgCreateStableswapPoolResponse {
    const message = createBaseMsgCreateStableswapPoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
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

  fromSDKJSON(object: any): MsgCreateStableswapPoolResponseSDKType {
    return {
      pool_id: isSet(object.pool_id) ? Long.fromValue(object.pool_id) : Long.UZERO
    };
  }

};

function createBaseMsgStableSwapAdjustScalingFactors(): MsgStableSwapAdjustScalingFactors {
  return {
    sender: "",
    poolId: Long.UZERO,
    scalingFactors: []
  };
}

export const MsgStableSwapAdjustScalingFactors = {
  encode(message: MsgStableSwapAdjustScalingFactors, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }

    writer.uint32(26).fork();

    for (const v of message.scalingFactors) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStableSwapAdjustScalingFactors {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStableSwapAdjustScalingFactors();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.poolId = (reader.uint64() as Long);
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.scalingFactors.push((reader.uint64() as Long));
            }
          } else {
            message.scalingFactors.push((reader.uint64() as Long));
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
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      scalingFactors: Array.isArray(object?.scalingFactors) ? object.scalingFactors.map((e: any) => Long.fromValue(e)) : []
    };
  },

  toJSON(message: MsgStableSwapAdjustScalingFactors): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());

    if (message.scalingFactors) {
      obj.scalingFactors = message.scalingFactors.map(e => (e || Long.UZERO).toString());
    } else {
      obj.scalingFactors = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgStableSwapAdjustScalingFactors>): MsgStableSwapAdjustScalingFactors {
    const message = createBaseMsgStableSwapAdjustScalingFactors();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.scalingFactors = object.scalingFactors?.map(e => Long.fromValue(e)) || [];
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

  fromSDKJSON(object: any): MsgStableSwapAdjustScalingFactorsSDKType {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_id: isSet(object.pool_id) ? Long.fromValue(object.pool_id) : Long.UZERO,
      scaling_factors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e: any) => Long.fromValue(e)) : []
    };
  }

};

function createBaseMsgStableSwapAdjustScalingFactorsResponse(): MsgStableSwapAdjustScalingFactorsResponse {
  return {};
}

export const MsgStableSwapAdjustScalingFactorsResponse = {
  encode(_: MsgStableSwapAdjustScalingFactorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStableSwapAdjustScalingFactorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {};
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

  fromSDKJSON(_: any): MsgStableSwapAdjustScalingFactorsResponseSDKType {
    return {};
  }

};