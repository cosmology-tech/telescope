import { PoolParams, PoolParamsSDKType, PoolAsset, PoolAssetSDKType } from "../balancerPool";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "../../../../../helpers";
export const protobufPackage = "osmosis.gamm.poolmodels.balancer.v1beta1";

/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPool {
  sender: string;
  poolParams?: PoolParams;
  poolAssets: PoolAsset[];
  futurePoolGovernor: string;
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
  poolId: Long;
}

/** Returns the poolID */
export interface MsgCreateBalancerPoolResponseSDKType {
  pool_id: Long;
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
  encode(message: MsgCreateBalancerPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBalancerPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBalancerPool();

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
          message.poolAssets.push(PoolAsset.decode(reader, reader.uint32()));
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
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolParams: isSet(object.poolParams) ? PoolParams.fromJSON(object.poolParams) : undefined,
      poolAssets: Array.isArray(object?.poolAssets) ? object.poolAssets.map((e: any) => PoolAsset.fromJSON(e)) : [],
      futurePoolGovernor: isSet(object.futurePoolGovernor) ? String(object.futurePoolGovernor) : ""
    };
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
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
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

  fromSDKJSON(object: any): MsgCreateBalancerPoolSDKType {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_params: isSet(object.pool_params) ? PoolParams.fromSDKJSON(object.pool_params) : undefined,
      pool_assets: Array.isArray(object?.pool_assets) ? object.pool_assets.map((e: any) => PoolAsset.fromSDKJSON(e)) : [],
      future_pool_governor: isSet(object.future_pool_governor) ? String(object.future_pool_governor) : ""
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
  }

};

function createBaseMsgCreateBalancerPoolResponse(): MsgCreateBalancerPoolResponse {
  return {
    poolId: Long.UZERO
  };
}

export const MsgCreateBalancerPoolResponse = {
  encode(message: MsgCreateBalancerPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBalancerPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBalancerPoolResponse();

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

  fromJSON(object: any): MsgCreateBalancerPoolResponse {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },

  toJSON(message: MsgCreateBalancerPoolResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateBalancerPoolResponse>): MsgCreateBalancerPoolResponse {
    const message = createBaseMsgCreateBalancerPoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  },

  fromSDK(object: MsgCreateBalancerPoolResponseSDKType): MsgCreateBalancerPoolResponse {
    return {
      poolId: object?.pool_id
    };
  },

  fromSDKJSON(object: any): MsgCreateBalancerPoolResponseSDKType {
    return {
      pool_id: isSet(object.pool_id) ? Long.fromValue(object.pool_id) : Long.UZERO
    };
  },

  toSDK(message: MsgCreateBalancerPoolResponse): MsgCreateBalancerPoolResponseSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    return obj;
  }

};