//@ts-nocheck
/* eslint-disable */
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Long, isSet, DeepPartial } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "osmosis.gamm.poolmodels.stableswap.v1beta1";
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParams {
  swapFee: string;
  exitFee: string;
}
/** Pool is the stableswap Pool struct */
export interface Pool {
  address: string;
  id: Long;
  poolParams: PoolParams;
  /**
   * This string specifies who will govern the pool in the future.
   * Valid forms of this are:
   * {token name},{duration}
   * {duration}
   * where {token name} if specified is the token which determines the
   * governor, and if not specified is the LP token for this pool.duration is
   * a time specified as 0w,1w,2w, etc. which specifies how long the token
   * would need to be locked up to count in governance. 0w means no lockup.
   */
  futurePoolGovernor: string;
  /** sum of all LP shares */
  totalShares: Coin;
  /** assets in the pool */
  poolLiquidity: Coin[];
  /** for calculation amognst assets with different precisions */
  scalingFactors: Long[];
  /** scaling_factor_controller is the address can adjust pool scaling factors */
  scalingFactorController: string;
}
function createBasePoolParams(): PoolParams {
  return {
    swapFee: "",
    exitFee: ""
  };
}
export const PoolParams = {
  encode(message: PoolParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapFee !== "") {
      writer.uint32(10).string(message.swapFee);
    }
    if (message.exitFee !== "") {
      writer.uint32(18).string(message.exitFee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PoolParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapFee = reader.string();
          break;
        case 2:
          message.exitFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolParams {
    const obj = createBasePoolParams();
    if (isSet(object.swapFee)) obj.swapFee = String(object.swapFee);
    if (isSet(object.exitFee)) obj.exitFee = String(object.exitFee);
    return obj;
  },
  toJSON(message: PoolParams): unknown {
    const obj: any = {};
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.exitFee !== undefined && (obj.exitFee = message.exitFee);
    return obj;
  },
  fromPartial(object: DeepPartial<PoolParams>): PoolParams {
    const message = createBasePoolParams();
    message.swapFee = object.swapFee ?? "";
    message.exitFee = object.exitFee ?? "";
    return message;
  }
};
function createBasePool(): Pool {
  return {
    address: "",
    id: Long.UZERO,
    poolParams: PoolParams.fromPartial({}),
    futurePoolGovernor: "",
    totalShares: Coin.fromPartial({}),
    poolLiquidity: [],
    scalingFactors: [],
    scalingFactorController: ""
  };
}
export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(26).fork()).ldelim();
    }
    if (message.futurePoolGovernor !== "") {
      writer.uint32(34).string(message.futurePoolGovernor);
    }
    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.poolLiquidity) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).fork();
    for (const v of message.scalingFactors) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.scalingFactorController !== "") {
      writer.uint32(66).string(message.scalingFactorController);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.id = (reader.uint64() as Long);
          break;
        case 3:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.futurePoolGovernor = reader.string();
          break;
        case 5:
          message.totalShares = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.poolLiquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.scalingFactors.push((reader.uint64() as Long));
            }
          } else {
            message.scalingFactors.push((reader.uint64() as Long));
          }
          break;
        case 8:
          message.scalingFactorController = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pool {
    const obj = createBasePool();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.id)) obj.id = Long.fromValue(object.id);
    if (isSet(object.poolParams)) obj.poolParams = PoolParams.fromJSON(object.poolParams);
    if (isSet(object.futurePoolGovernor)) obj.futurePoolGovernor = String(object.futurePoolGovernor);
    if (isSet(object.totalShares)) obj.totalShares = Coin.fromJSON(object.totalShares);
    if (Array.isArray(object?.poolLiquidity)) object.poolLiquidity.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.scalingFactors)) object.scalingFactors.map((e: any) => Long.fromValue(e));
    if (isSet(object.scalingFactorController)) obj.scalingFactorController = String(object.scalingFactorController);
    return obj;
  },
  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.poolParams !== undefined && (obj.poolParams = message.poolParams ? PoolParams.toJSON(message.poolParams) : undefined);
    message.futurePoolGovernor !== undefined && (obj.futurePoolGovernor = message.futurePoolGovernor);
    message.totalShares !== undefined && (obj.totalShares = message.totalShares ? Coin.toJSON(message.totalShares) : undefined);
    if (message.poolLiquidity) {
      obj.poolLiquidity = message.poolLiquidity.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.poolLiquidity = [];
    }
    if (message.scalingFactors) {
      obj.scalingFactors = message.scalingFactors.map(e => (e || Long.UZERO).toString());
    } else {
      obj.scalingFactors = [];
    }
    message.scalingFactorController !== undefined && (obj.scalingFactorController = message.scalingFactorController);
    return obj;
  },
  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = createBasePool();
    message.address = object.address ?? "";
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromValue(object.id);
    }
    if (object.poolParams !== undefined && object.poolParams !== null) {
      message.poolParams = PoolParams.fromPartial(object.poolParams);
    }
    message.futurePoolGovernor = object.futurePoolGovernor ?? "";
    if (object.totalShares !== undefined && object.totalShares !== null) {
      message.totalShares = Coin.fromPartial(object.totalShares);
    }
    message.poolLiquidity = object.poolLiquidity?.map(e => Coin.fromPartial(e)) || [];
    message.scalingFactors = object.scalingFactors?.map(e => Long.fromValue(e)) || [];
    message.scalingFactorController = object.scalingFactorController ?? "";
    return message;
  }
};