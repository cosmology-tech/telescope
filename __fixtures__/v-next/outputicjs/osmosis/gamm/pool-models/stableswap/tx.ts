import { PoolParams } from "./stableswap_pool";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPool {
  sender: string;
  poolParams?: PoolParams;
  initialPoolLiquidity: Coin[];
  scalingFactors: bigint[];
  futurePoolGovernor: string;
  scalingFactorController: string;
}
/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponse {
  poolId: bigint;
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
export interface MsgStableSwapAdjustScalingFactorsResponse {}
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateStableswapPool {
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
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.initialPoolLiquidity.push(Coin.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<MsgCreateStableswapPool>): MsgCreateStableswapPool {
    const message = createBaseMsgCreateStableswapPool();
    message.sender = object.sender ?? "";
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    message.initialPoolLiquidity = object.initialPoolLiquidity?.map(e => Coin.fromPartial(e)) || [];
    message.scalingFactors = object.scalingFactors?.map(e => BigInt(e.toString())) || [];
    message.futurePoolGovernor = object.futurePoolGovernor ?? "";
    message.scalingFactorController = object.scalingFactorController ?? "";
    return message;
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateStableswapPoolResponse {
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
  fromPartial(object: DeepPartial<MsgCreateStableswapPoolResponse>): MsgCreateStableswapPoolResponse {
    const message = createBaseMsgCreateStableswapPoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStableSwapAdjustScalingFactors {
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
  fromPartial(object: DeepPartial<MsgStableSwapAdjustScalingFactors>): MsgStableSwapAdjustScalingFactors {
    const message = createBaseMsgStableSwapAdjustScalingFactors();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.scalingFactors = object.scalingFactors?.map(e => BigInt(e.toString())) || [];
    return message;
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStableSwapAdjustScalingFactorsResponse {
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
  fromPartial(_: DeepPartial<MsgStableSwapAdjustScalingFactorsResponse>): MsgStableSwapAdjustScalingFactorsResponse {
    const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
    return message;
  }
};