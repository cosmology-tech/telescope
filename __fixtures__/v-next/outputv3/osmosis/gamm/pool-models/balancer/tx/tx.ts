import { PoolParams, PoolParamsAmino, PoolParamsSDKType, PoolAsset, PoolAssetAmino, PoolAssetSDKType } from "../balancerPool";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { isSet, DeepPartial } from "../../../../../helpers";
export const protobufPackage = "osmosis.gamm.poolmodels.balancer.v1beta1";
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPool {
  sender: string;
  poolParams?: PoolParams;
  poolAssets: PoolAsset[];
  futurePoolGovernor: string;
}
export interface MsgCreateBalancerPoolProtoMsg {
  typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool";
  value: Uint8Array;
}
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPoolAmino {
  sender: string;
  pool_params?: PoolParamsAmino;
  pool_assets: PoolAssetAmino[];
  future_pool_governor: string;
}
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPoolSDKType {
  sender: string;
  pool_params?: PoolParamsSDKType;
  pool_assets: PoolAssetSDKType[];
  future_pool_governor: string;
}
/** Returns the poolID */
export interface MsgCreateBalancerPoolResponse {
  poolId: bigint;
}
export interface MsgCreateBalancerPoolResponseProtoMsg {
  typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPoolResponse";
  value: Uint8Array;
}
/** Returns the poolID */
export interface MsgCreateBalancerPoolResponseAmino {
  pool_id: string;
}
/** Returns the poolID */
export interface MsgCreateBalancerPoolResponseSDKType {
  pool_id: bigint;
}
function createBaseMsgCreateBalancerPool(): MsgCreateBalancerPool {
  return {
    sender: "",
    poolParams: undefined,
    poolAssets: [],
    futurePoolGovernor: ""
  };
}
export const MsgCreateBalancerPool = {
  typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
  aminoType: "osmosis/gamm/poolmodels/balancer/create-balancer-pool",
  encode(message: MsgCreateBalancerPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.poolAssets) {
      PoolAsset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.futurePoolGovernor !== "") {
      writer.uint32(34).string(message.futurePoolGovernor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateBalancerPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBalancerPool();
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
          message.poolAssets.push(PoolAsset.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.futurePoolGovernor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateBalancerPool {
    const obj = createBaseMsgCreateBalancerPool();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.poolParams)) obj.poolParams = PoolParams.fromJSON(object.poolParams);
    if (Array.isArray(object?.poolAssets)) obj.poolAssets = object.poolAssets.map((e: any) => PoolAsset.fromJSON(e));
    if (isSet(object.futurePoolGovernor)) obj.futurePoolGovernor = String(object.futurePoolGovernor);
    return obj;
  },
  toJSON(message: MsgCreateBalancerPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolParams !== undefined && (obj.poolParams = message.poolParams ? PoolParams.toJSON(message.poolParams) : undefined);
    if (message.poolAssets) {
      obj.poolAssets = message.poolAssets.map(e => e ? PoolAsset.toJSON(e) : undefined);
    } else {
      obj.poolAssets = [];
    }
    message.futurePoolGovernor !== undefined && (obj.futurePoolGovernor = message.futurePoolGovernor);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateBalancerPool>): MsgCreateBalancerPool {
    const message = createBaseMsgCreateBalancerPool();
    message.sender = object.sender ?? "";
    if (object.poolParams !== undefined && object.poolParams !== null) {
      message.poolParams = PoolParams.fromPartial(object.poolParams);
    }
    message.poolAssets = object.poolAssets?.map(e => PoolAsset.fromPartial(e)) || [];
    message.futurePoolGovernor = object.futurePoolGovernor ?? "";
    return message;
  },
  fromSDK(object: MsgCreateBalancerPoolSDKType): MsgCreateBalancerPool {
    return {
      sender: object?.sender,
      poolParams: object.pool_params ? PoolParams.fromSDK(object.pool_params) : undefined,
      poolAssets: Array.isArray(object?.pool_assets) ? object.pool_assets.map((e: any) => PoolAsset.fromSDK(e)) : [],
      futurePoolGovernor: object?.future_pool_governor
    };
  },
  toSDK(message: MsgCreateBalancerPool): MsgCreateBalancerPoolSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    message.poolParams !== undefined && (obj.pool_params = message.poolParams ? PoolParams.toSDK(message.poolParams) : undefined);
    if (message.poolAssets) {
      obj.pool_assets = message.poolAssets.map(e => e ? PoolAsset.toSDK(e) : undefined);
    } else {
      obj.pool_assets = [];
    }
    obj.future_pool_governor = message.futurePoolGovernor;
    return obj;
  },
  fromAmino(object: MsgCreateBalancerPoolAmino): MsgCreateBalancerPool {
    return {
      sender: object.sender,
      poolParams: object?.pool_params ? PoolParams.fromAmino(object.pool_params) : undefined,
      poolAssets: Array.isArray(object?.pool_assets) ? object.pool_assets.map((e: any) => PoolAsset.fromAmino(e)) : [],
      futurePoolGovernor: object.future_pool_governor
    };
  },
  toAmino(message: MsgCreateBalancerPool, useInterfaces: boolean = true): MsgCreateBalancerPoolAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_params = message.poolParams ? PoolParams.toAmino(message.poolParams, useInterfaces) : undefined;
    if (message.poolAssets) {
      obj.pool_assets = message.poolAssets.map(e => e ? PoolAsset.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pool_assets = [];
    }
    obj.future_pool_governor = message.futurePoolGovernor;
    return obj;
  },
  fromProtoMsg(message: MsgCreateBalancerPoolProtoMsg, useInterfaces: boolean = true): MsgCreateBalancerPool {
    return MsgCreateBalancerPool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateBalancerPool): Uint8Array {
    return MsgCreateBalancerPool.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBalancerPool): MsgCreateBalancerPoolProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
      value: MsgCreateBalancerPool.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBalancerPoolResponse(): MsgCreateBalancerPoolResponse {
  return {
    poolId: BigInt(0)
  };
}
export const MsgCreateBalancerPoolResponse = {
  typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPoolResponse",
  aminoType: "osmosis/gamm/poolmodels/balancer/create-balancer-pool-response",
  encode(message: MsgCreateBalancerPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateBalancerPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBalancerPoolResponse();
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
  fromJSON(object: any): MsgCreateBalancerPoolResponse {
    const obj = createBaseMsgCreateBalancerPoolResponse();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  toJSON(message: MsgCreateBalancerPoolResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateBalancerPoolResponse>): MsgCreateBalancerPoolResponse {
    const message = createBaseMsgCreateBalancerPoolResponse();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    return message;
  },
  fromSDK(object: MsgCreateBalancerPoolResponseSDKType): MsgCreateBalancerPoolResponse {
    return {
      poolId: object?.pool_id
    };
  },
  toSDK(message: MsgCreateBalancerPoolResponse): MsgCreateBalancerPoolResponseSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    return obj;
  },
  fromAmino(object: MsgCreateBalancerPoolResponseAmino): MsgCreateBalancerPoolResponse {
    return {
      poolId: BigInt(object.pool_id)
    };
  },
  toAmino(message: MsgCreateBalancerPoolResponse, useInterfaces: boolean = true): MsgCreateBalancerPoolResponseAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: MsgCreateBalancerPoolResponseProtoMsg, useInterfaces: boolean = true): MsgCreateBalancerPoolResponse {
    return MsgCreateBalancerPoolResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateBalancerPoolResponse): Uint8Array {
    return MsgCreateBalancerPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBalancerPoolResponse): MsgCreateBalancerPoolResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPoolResponse",
      value: MsgCreateBalancerPoolResponse.encode(message).finish()
    };
  }
};