import { TokenPairArbRoutes, TokenPairArbRoutesSDKType, PoolWeights, PoolWeightsSDKType, BaseDenom, BaseDenomSDKType } from "./protorev";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.protorev.v1beta1";
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutes {
  /** admin is the account that is authorized to set the hot routes. */
  admin: string;
  /** hot_routes is the list of hot routes to set. */
  hotRoutes: TokenPairArbRoutes[];
}
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutesSDKType {
  admin: string;
  hot_routes: TokenPairArbRoutesSDKType[];
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponse {}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponseSDKType {}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccount {
  /** admin is the account that is authorized to set the developer account. */
  admin: string;
  /**
   * developer_account is the account that will receive a portion of the profits
   * from the protorev module.
   */
  developerAccount: string;
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccountSDKType {
  admin: string;
  developer_account: string;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponse {}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponseSDKType {}
/** MsgSetPoolWeights defines the Msg/SetPoolWeights request type. */
export interface MsgSetPoolWeights {
  /** admin is the account that is authorized to set the pool weights. */
  admin: string;
  /** pool_weights is the list of pool weights to set. */
  poolWeights: PoolWeights;
}
/** MsgSetPoolWeights defines the Msg/SetPoolWeights request type. */
export interface MsgSetPoolWeightsSDKType {
  admin: string;
  pool_weights: PoolWeightsSDKType;
}
/** MsgSetPoolWeightsResponse defines the Msg/SetPoolWeights response type. */
export interface MsgSetPoolWeightsResponse {}
/** MsgSetPoolWeightsResponse defines the Msg/SetPoolWeights response type. */
export interface MsgSetPoolWeightsResponseSDKType {}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */
export interface MsgSetMaxPoolPointsPerTx {
  /** admin is the account that is authorized to set the max pool points per tx. */
  admin: string;
  /**
   * max_pool_points_per_tx is the maximum number of pool points that can be
   * consumed per transaction.
   */
  maxPoolPointsPerTx: bigint;
}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */
export interface MsgSetMaxPoolPointsPerTxSDKType {
  admin: string;
  max_pool_points_per_tx: bigint;
}
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */
export interface MsgSetMaxPoolPointsPerTxResponse {}
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */
export interface MsgSetMaxPoolPointsPerTxResponseSDKType {}
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */
export interface MsgSetMaxPoolPointsPerBlock {
  /**
   * admin is the account that is authorized to set the max pool points per
   * block.
   */
  admin: string;
  /**
   * max_pool_points_per_block is the maximum number of pool points that can be
   * consumed per block.
   */
  maxPoolPointsPerBlock: bigint;
}
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */
export interface MsgSetMaxPoolPointsPerBlockSDKType {
  admin: string;
  max_pool_points_per_block: bigint;
}
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */
export interface MsgSetMaxPoolPointsPerBlockResponse {}
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */
export interface MsgSetMaxPoolPointsPerBlockResponseSDKType {}
/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */
export interface MsgSetBaseDenoms {
  /** admin is the account that is authorized to set the base denoms. */
  admin: string;
  /** base_denoms is the list of base denoms to set. */
  baseDenoms: BaseDenom[];
}
/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */
export interface MsgSetBaseDenomsSDKType {
  admin: string;
  base_denoms: BaseDenomSDKType[];
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponse {}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponseSDKType {}
function createBaseMsgSetHotRoutes(): MsgSetHotRoutes {
  return {
    admin: "",
    hotRoutes: []
  };
}
export const MsgSetHotRoutes = {
  encode(message: MsgSetHotRoutes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.hotRoutes) {
      TokenPairArbRoutes.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetHotRoutes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetHotRoutes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.hotRoutes.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetHotRoutes {
    const obj = createBaseMsgSetHotRoutes();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (Array.isArray(object?.hotRoutes)) object.hotRoutes.map((e: any) => TokenPairArbRoutes.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgSetHotRoutes): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.hotRoutes) {
      obj.hotRoutes = message.hotRoutes.map(e => e ? TokenPairArbRoutes.toJSON(e) : undefined);
    } else {
      obj.hotRoutes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSetHotRoutes>): MsgSetHotRoutes {
    const message = createBaseMsgSetHotRoutes();
    message.admin = object.admin ?? "";
    message.hotRoutes = object.hotRoutes?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgSetHotRoutesSDKType): MsgSetHotRoutes {
    return {
      admin: object?.admin,
      hotRoutes: Array.isArray(object?.hot_routes) ? object.hot_routes.map((e: any) => TokenPairArbRoutes.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MsgSetHotRoutesSDKType {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      hot_routes: Array.isArray(object?.hot_routes) ? object.hot_routes.map((e: any) => TokenPairArbRoutes.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: MsgSetHotRoutes): MsgSetHotRoutesSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    if (message.hotRoutes) {
      obj.hot_routes = message.hotRoutes.map(e => e ? TokenPairArbRoutes.toSDK(e) : undefined);
    } else {
      obj.hot_routes = [];
    }
    return obj;
  }
};
function createBaseMsgSetHotRoutesResponse(): MsgSetHotRoutesResponse {
  return {};
}
export const MsgSetHotRoutesResponse = {
  encode(_: MsgSetHotRoutesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetHotRoutesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetHotRoutesResponse();
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
  fromJSON(_: any): MsgSetHotRoutesResponse {
    const obj = createBaseMsgSetHotRoutesResponse();
    return obj;
  },
  toJSON(_: MsgSetHotRoutesResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSetHotRoutesResponse>): MsgSetHotRoutesResponse {
    const message = createBaseMsgSetHotRoutesResponse();
    return message;
  },
  fromSDK(_: MsgSetHotRoutesResponseSDKType): MsgSetHotRoutesResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgSetHotRoutesResponseSDKType {
    return {};
  },
  toSDK(_: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgSetDeveloperAccount(): MsgSetDeveloperAccount {
  return {
    admin: "",
    developerAccount: ""
  };
}
export const MsgSetDeveloperAccount = {
  encode(message: MsgSetDeveloperAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.developerAccount !== "") {
      writer.uint32(18).string(message.developerAccount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDeveloperAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDeveloperAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.developerAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetDeveloperAccount {
    const obj = createBaseMsgSetDeveloperAccount();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.developerAccount)) obj.developerAccount = String(object.developerAccount);
    return obj;
  },
  toJSON(message: MsgSetDeveloperAccount): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.developerAccount !== undefined && (obj.developerAccount = message.developerAccount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSetDeveloperAccount>): MsgSetDeveloperAccount {
    const message = createBaseMsgSetDeveloperAccount();
    message.admin = object.admin ?? "";
    message.developerAccount = object.developerAccount ?? "";
    return message;
  },
  fromSDK(object: MsgSetDeveloperAccountSDKType): MsgSetDeveloperAccount {
    return {
      admin: object?.admin,
      developerAccount: object?.developer_account
    };
  },
  fromSDKJSON(object: any): MsgSetDeveloperAccountSDKType {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      developer_account: isSet(object.developer_account) ? String(object.developer_account) : ""
    };
  },
  toSDK(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    obj.developer_account = message.developerAccount;
    return obj;
  }
};
function createBaseMsgSetDeveloperAccountResponse(): MsgSetDeveloperAccountResponse {
  return {};
}
export const MsgSetDeveloperAccountResponse = {
  encode(_: MsgSetDeveloperAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDeveloperAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDeveloperAccountResponse();
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
  fromJSON(_: any): MsgSetDeveloperAccountResponse {
    const obj = createBaseMsgSetDeveloperAccountResponse();
    return obj;
  },
  toJSON(_: MsgSetDeveloperAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSetDeveloperAccountResponse>): MsgSetDeveloperAccountResponse {
    const message = createBaseMsgSetDeveloperAccountResponse();
    return message;
  },
  fromSDK(_: MsgSetDeveloperAccountResponseSDKType): MsgSetDeveloperAccountResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgSetDeveloperAccountResponseSDKType {
    return {};
  },
  toSDK(_: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgSetPoolWeights(): MsgSetPoolWeights {
  return {
    admin: "",
    poolWeights: PoolWeights.fromPartial({})
  };
}
export const MsgSetPoolWeights = {
  encode(message: MsgSetPoolWeights, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.poolWeights !== undefined) {
      PoolWeights.encode(message.poolWeights, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPoolWeights {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPoolWeights();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.poolWeights = PoolWeights.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetPoolWeights {
    const obj = createBaseMsgSetPoolWeights();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.poolWeights)) obj.poolWeights = PoolWeights.fromJSON(object.poolWeights);
    return obj;
  },
  toJSON(message: MsgSetPoolWeights): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.poolWeights !== undefined && (obj.poolWeights = message.poolWeights ? PoolWeights.toJSON(message.poolWeights) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSetPoolWeights>): MsgSetPoolWeights {
    const message = createBaseMsgSetPoolWeights();
    message.admin = object.admin ?? "";
    message.poolWeights = object.poolWeights !== undefined && object.poolWeights !== null ? PoolWeights.fromPartial(object.poolWeights) : PoolWeights.fromPartial({});
    return message;
  },
  fromSDK(object: MsgSetPoolWeightsSDKType): MsgSetPoolWeights {
    return {
      admin: object?.admin,
      poolWeights: object.pool_weights ? PoolWeights.fromSDK(object.pool_weights) : undefined
    };
  },
  fromSDKJSON(object: any): MsgSetPoolWeightsSDKType {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      pool_weights: isSet(object.pool_weights) ? PoolWeights.fromSDKJSON(object.pool_weights) : undefined
    };
  },
  toSDK(message: MsgSetPoolWeights): MsgSetPoolWeightsSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    message.poolWeights !== undefined && (obj.pool_weights = message.poolWeights ? PoolWeights.toSDK(message.poolWeights) : undefined);
    return obj;
  }
};
function createBaseMsgSetPoolWeightsResponse(): MsgSetPoolWeightsResponse {
  return {};
}
export const MsgSetPoolWeightsResponse = {
  encode(_: MsgSetPoolWeightsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPoolWeightsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPoolWeightsResponse();
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
  fromJSON(_: any): MsgSetPoolWeightsResponse {
    const obj = createBaseMsgSetPoolWeightsResponse();
    return obj;
  },
  toJSON(_: MsgSetPoolWeightsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSetPoolWeightsResponse>): MsgSetPoolWeightsResponse {
    const message = createBaseMsgSetPoolWeightsResponse();
    return message;
  },
  fromSDK(_: MsgSetPoolWeightsResponseSDKType): MsgSetPoolWeightsResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgSetPoolWeightsResponseSDKType {
    return {};
  },
  toSDK(_: MsgSetPoolWeightsResponse): MsgSetPoolWeightsResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgSetMaxPoolPointsPerTx(): MsgSetMaxPoolPointsPerTx {
  return {
    admin: "",
    maxPoolPointsPerTx: BigInt(0)
  };
}
export const MsgSetMaxPoolPointsPerTx = {
  encode(message: MsgSetMaxPoolPointsPerTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.maxPoolPointsPerTx !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxPoolPointsPerTx);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.maxPoolPointsPerTx = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetMaxPoolPointsPerTx {
    const obj = createBaseMsgSetMaxPoolPointsPerTx();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.maxPoolPointsPerTx)) obj.maxPoolPointsPerTx = BigInt(object.maxPoolPointsPerTx.toString());
    return obj;
  },
  toJSON(message: MsgSetMaxPoolPointsPerTx): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.maxPoolPointsPerTx !== undefined && (obj.maxPoolPointsPerTx = (message.maxPoolPointsPerTx || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSetMaxPoolPointsPerTx>): MsgSetMaxPoolPointsPerTx {
    const message = createBaseMsgSetMaxPoolPointsPerTx();
    message.admin = object.admin ?? "";
    message.maxPoolPointsPerTx = object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null ? BigInt(object.maxPoolPointsPerTx.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgSetMaxPoolPointsPerTxSDKType): MsgSetMaxPoolPointsPerTx {
    return {
      admin: object?.admin,
      maxPoolPointsPerTx: object?.max_pool_points_per_tx
    };
  },
  fromSDKJSON(object: any): MsgSetMaxPoolPointsPerTxSDKType {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      max_pool_points_per_tx: isSet(object.max_pool_points_per_tx) ? BigInt(object.max_pool_points_per_tx.toString()) : BigInt(0)
    };
  },
  toSDK(message: MsgSetMaxPoolPointsPerTx): MsgSetMaxPoolPointsPerTxSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    obj.max_pool_points_per_tx = message.maxPoolPointsPerTx;
    return obj;
  }
};
function createBaseMsgSetMaxPoolPointsPerTxResponse(): MsgSetMaxPoolPointsPerTxResponse {
  return {};
}
export const MsgSetMaxPoolPointsPerTxResponse = {
  encode(_: MsgSetMaxPoolPointsPerTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerTxResponse();
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
  fromJSON(_: any): MsgSetMaxPoolPointsPerTxResponse {
    const obj = createBaseMsgSetMaxPoolPointsPerTxResponse();
    return obj;
  },
  toJSON(_: MsgSetMaxPoolPointsPerTxResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSetMaxPoolPointsPerTxResponse>): MsgSetMaxPoolPointsPerTxResponse {
    const message = createBaseMsgSetMaxPoolPointsPerTxResponse();
    return message;
  },
  fromSDK(_: MsgSetMaxPoolPointsPerTxResponseSDKType): MsgSetMaxPoolPointsPerTxResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgSetMaxPoolPointsPerTxResponseSDKType {
    return {};
  },
  toSDK(_: MsgSetMaxPoolPointsPerTxResponse): MsgSetMaxPoolPointsPerTxResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgSetMaxPoolPointsPerBlock(): MsgSetMaxPoolPointsPerBlock {
  return {
    admin: "",
    maxPoolPointsPerBlock: BigInt(0)
  };
}
export const MsgSetMaxPoolPointsPerBlock = {
  encode(message: MsgSetMaxPoolPointsPerBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.maxPoolPointsPerBlock !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxPoolPointsPerBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.maxPoolPointsPerBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetMaxPoolPointsPerBlock {
    const obj = createBaseMsgSetMaxPoolPointsPerBlock();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.maxPoolPointsPerBlock)) obj.maxPoolPointsPerBlock = BigInt(object.maxPoolPointsPerBlock.toString());
    return obj;
  },
  toJSON(message: MsgSetMaxPoolPointsPerBlock): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.maxPoolPointsPerBlock !== undefined && (obj.maxPoolPointsPerBlock = (message.maxPoolPointsPerBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSetMaxPoolPointsPerBlock>): MsgSetMaxPoolPointsPerBlock {
    const message = createBaseMsgSetMaxPoolPointsPerBlock();
    message.admin = object.admin ?? "";
    message.maxPoolPointsPerBlock = object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null ? BigInt(object.maxPoolPointsPerBlock.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgSetMaxPoolPointsPerBlockSDKType): MsgSetMaxPoolPointsPerBlock {
    return {
      admin: object?.admin,
      maxPoolPointsPerBlock: object?.max_pool_points_per_block
    };
  },
  fromSDKJSON(object: any): MsgSetMaxPoolPointsPerBlockSDKType {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      max_pool_points_per_block: isSet(object.max_pool_points_per_block) ? BigInt(object.max_pool_points_per_block.toString()) : BigInt(0)
    };
  },
  toSDK(message: MsgSetMaxPoolPointsPerBlock): MsgSetMaxPoolPointsPerBlockSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    obj.max_pool_points_per_block = message.maxPoolPointsPerBlock;
    return obj;
  }
};
function createBaseMsgSetMaxPoolPointsPerBlockResponse(): MsgSetMaxPoolPointsPerBlockResponse {
  return {};
}
export const MsgSetMaxPoolPointsPerBlockResponse = {
  encode(_: MsgSetMaxPoolPointsPerBlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerBlockResponse();
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
  fromJSON(_: any): MsgSetMaxPoolPointsPerBlockResponse {
    const obj = createBaseMsgSetMaxPoolPointsPerBlockResponse();
    return obj;
  },
  toJSON(_: MsgSetMaxPoolPointsPerBlockResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSetMaxPoolPointsPerBlockResponse>): MsgSetMaxPoolPointsPerBlockResponse {
    const message = createBaseMsgSetMaxPoolPointsPerBlockResponse();
    return message;
  },
  fromSDK(_: MsgSetMaxPoolPointsPerBlockResponseSDKType): MsgSetMaxPoolPointsPerBlockResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgSetMaxPoolPointsPerBlockResponseSDKType {
    return {};
  },
  toSDK(_: MsgSetMaxPoolPointsPerBlockResponse): MsgSetMaxPoolPointsPerBlockResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgSetBaseDenoms(): MsgSetBaseDenoms {
  return {
    admin: "",
    baseDenoms: []
  };
}
export const MsgSetBaseDenoms = {
  encode(message: MsgSetBaseDenoms, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.baseDenoms) {
      BaseDenom.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetBaseDenoms {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetBaseDenoms();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.baseDenoms.push(BaseDenom.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetBaseDenoms {
    const obj = createBaseMsgSetBaseDenoms();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (Array.isArray(object?.baseDenoms)) object.baseDenoms.map((e: any) => BaseDenom.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgSetBaseDenoms): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.baseDenoms) {
      obj.baseDenoms = message.baseDenoms.map(e => e ? BaseDenom.toJSON(e) : undefined);
    } else {
      obj.baseDenoms = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSetBaseDenoms>): MsgSetBaseDenoms {
    const message = createBaseMsgSetBaseDenoms();
    message.admin = object.admin ?? "";
    message.baseDenoms = object.baseDenoms?.map(e => BaseDenom.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgSetBaseDenomsSDKType): MsgSetBaseDenoms {
    return {
      admin: object?.admin,
      baseDenoms: Array.isArray(object?.base_denoms) ? object.base_denoms.map((e: any) => BaseDenom.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MsgSetBaseDenomsSDKType {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      base_denoms: Array.isArray(object?.base_denoms) ? object.base_denoms.map((e: any) => BaseDenom.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: MsgSetBaseDenoms): MsgSetBaseDenomsSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    if (message.baseDenoms) {
      obj.base_denoms = message.baseDenoms.map(e => e ? BaseDenom.toSDK(e) : undefined);
    } else {
      obj.base_denoms = [];
    }
    return obj;
  }
};
function createBaseMsgSetBaseDenomsResponse(): MsgSetBaseDenomsResponse {
  return {};
}
export const MsgSetBaseDenomsResponse = {
  encode(_: MsgSetBaseDenomsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetBaseDenomsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetBaseDenomsResponse();
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
  fromJSON(_: any): MsgSetBaseDenomsResponse {
    const obj = createBaseMsgSetBaseDenomsResponse();
    return obj;
  },
  toJSON(_: MsgSetBaseDenomsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSetBaseDenomsResponse>): MsgSetBaseDenomsResponse {
    const message = createBaseMsgSetBaseDenomsResponse();
    return message;
  },
  fromSDK(_: MsgSetBaseDenomsResponseSDKType): MsgSetBaseDenomsResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgSetBaseDenomsResponseSDKType {
    return {};
  },
  toSDK(_: MsgSetBaseDenomsResponse): MsgSetBaseDenomsResponseSDKType {
    const obj: any = {};
    return obj;
  }
};