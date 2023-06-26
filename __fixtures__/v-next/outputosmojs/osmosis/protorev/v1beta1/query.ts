import { Params, ParamsSDKType } from "./params";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { RouteStatistics, RouteStatisticsSDKType, TokenPairArbRoutes, TokenPairArbRoutesSDKType, PoolWeights, PoolWeightsSDKType, BaseDenom, BaseDenomSDKType } from "./protorev";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet } from "../../../helpers";
export const protobufPackage = "osmosis.protorev.v1beta1";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesRequest {}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesRequestSDKType {}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesResponse {
  /** number_of_trades is the number of trades the module has executed */
  numberOfTrades: string;
}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesResponseSDKType {
  number_of_trades: string;
}
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomRequest {
  /** denom is the denom to query profits by */
  denom: string;
}
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomRequestSDKType {
  denom: string;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomResponse {
  /** profit is the profits of the module by the selected denom */
  profit: Coin;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomResponseSDKType {
  profit: CoinSDKType;
}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsRequest {}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsRequestSDKType {}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsResponse {
  /** profits is a list of all of the profits from the module */
  profits: Coin[];
}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsResponseSDKType {
  profits: CoinSDKType[];
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteRequest {
  /** route is the set of pool ids to query statistics by i.e. 1,2,3 */
  route: bigint[];
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteRequestSDKType {
  route: bigint[];
}
/**
 * QueryGetProtoRevStatisticsByRouteResponse is response type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteResponse {
  /**
   * statistics contains the number of trades the module has executed after a
   * swap on a given pool and the profits from the trades
   */
  statistics: RouteStatistics;
}
/**
 * QueryGetProtoRevStatisticsByRouteResponse is response type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteResponseSDKType {
  statistics: RouteStatisticsSDKType;
}
/**
 * QueryGetProtoRevAllRouteStatisticsRequest is request type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsRequest {}
/**
 * QueryGetProtoRevAllRouteStatisticsRequest is request type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsRequestSDKType {}
/**
 * QueryGetProtoRevAllRouteStatisticsResponse is response type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsResponse {
  /**
   * statistics contains the number of trades/profits the module has executed on
   * all routes it has successfully executed a trade on
   */
  statistics: RouteStatistics[];
}
/**
 * QueryGetProtoRevAllRouteStatisticsResponse is response type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsResponseSDKType {
  statistics: RouteStatisticsSDKType[];
}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesRequest {}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesRequestSDKType {}
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesResponse {
  /**
   * routes is a list of all of the hot routes that the module is currently
   * arbitraging
   */
  routes: TokenPairArbRoutes[];
}
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesResponseSDKType {
  routes: TokenPairArbRoutesSDKType[];
}
/**
 * QueryGetProtoRevAdminAccountRequest is request type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountRequest {}
/**
 * QueryGetProtoRevAdminAccountRequest is request type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountRequestSDKType {}
/**
 * QueryGetProtoRevAdminAccountResponse is response type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountResponse {
  /** admin_account is the admin account of the module */
  adminAccount: string;
}
/**
 * QueryGetProtoRevAdminAccountResponse is response type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountResponseSDKType {
  admin_account: string;
}
/**
 * QueryGetProtoRevDeveloperAccountRequest is request type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountRequest {}
/**
 * QueryGetProtoRevDeveloperAccountRequest is request type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountRequestSDKType {}
/**
 * QueryGetProtoRevDeveloperAccountResponse is response type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountResponse {
  /** developer_account is the developer account of the module */
  developerAccount: string;
}
/**
 * QueryGetProtoRevDeveloperAccountResponse is response type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountResponseSDKType {
  developer_account: string;
}
/**
 * QueryGetProtoRevPoolWeightsRequest is request type for the
 * Query/GetProtoRevPoolWeights RPC method.
 */
export interface QueryGetProtoRevPoolWeightsRequest {}
/**
 * QueryGetProtoRevPoolWeightsRequest is request type for the
 * Query/GetProtoRevPoolWeights RPC method.
 */
export interface QueryGetProtoRevPoolWeightsRequestSDKType {}
/**
 * QueryGetProtoRevPoolWeightsResponse is response type for the
 * Query/GetProtoRevPoolWeights RPC method.
 */
export interface QueryGetProtoRevPoolWeightsResponse {
  /** pool_weights is a list of all of the pool weights */
  poolWeights: PoolWeights;
}
/**
 * QueryGetProtoRevPoolWeightsResponse is response type for the
 * Query/GetProtoRevPoolWeights RPC method.
 */
export interface QueryGetProtoRevPoolWeightsResponseSDKType {
  pool_weights: PoolWeightsSDKType;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockRequest {}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockRequestSDKType {}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockResponse {
  /**
   * max_pool_points_per_block is the maximum number of pool points that can be
   * consumed per block
   */
  maxPoolPointsPerBlock: bigint;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockResponseSDKType {
  max_pool_points_per_block: bigint;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxRequest {}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxRequestSDKType {}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxResponse {
  /**
   * max_pool_points_per_tx is the maximum number of pool points that can be
   * consumed per transaction
   */
  maxPoolPointsPerTx: bigint;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxResponseSDKType {
  max_pool_points_per_tx: bigint;
}
/**
 * QueryGetProtoRevBaseDenomsRequest is request type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsRequest {}
/**
 * QueryGetProtoRevBaseDenomsRequest is request type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsRequestSDKType {}
/**
 * QueryGetProtoRevBaseDenomsResponse is response type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsResponse {
  /** base_denoms is a list of all of the base denoms and step sizes */
  baseDenoms: BaseDenom[];
}
/**
 * QueryGetProtoRevBaseDenomsResponse is response type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsResponseSDKType {
  base_denoms: BaseDenomSDKType[];
}
/**
 * QueryGetProtoRevEnabledRequest is request type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledRequest {}
/**
 * QueryGetProtoRevEnabledRequest is request type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledRequestSDKType {}
/**
 * QueryGetProtoRevEnabledResponse is response type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledResponse {
  /** enabled is whether the module is enabled */
  enabled: boolean;
}
/**
 * QueryGetProtoRevEnabledResponse is response type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledResponseSDKType {
  enabled: boolean;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryParamsRequestSDKType {
    return {};
  },
  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  fromSDKJSON(object: any): QueryParamsResponseSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  }
};
function createBaseQueryGetProtoRevNumberOfTradesRequest(): QueryGetProtoRevNumberOfTradesRequest {
  return {};
}
export const QueryGetProtoRevNumberOfTradesRequest = {
  encode(_: QueryGetProtoRevNumberOfTradesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevNumberOfTradesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevNumberOfTradesRequest();
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
  fromJSON(_: any): QueryGetProtoRevNumberOfTradesRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevNumberOfTradesRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevNumberOfTradesRequest>): QueryGetProtoRevNumberOfTradesRequest {
    const message = createBaseQueryGetProtoRevNumberOfTradesRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevNumberOfTradesRequestSDKType): QueryGetProtoRevNumberOfTradesRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevNumberOfTradesRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevNumberOfTradesRequest): QueryGetProtoRevNumberOfTradesRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryGetProtoRevNumberOfTradesResponse(): QueryGetProtoRevNumberOfTradesResponse {
  return {
    numberOfTrades: ""
  };
}
export const QueryGetProtoRevNumberOfTradesResponse = {
  encode(message: QueryGetProtoRevNumberOfTradesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numberOfTrades !== "") {
      writer.uint32(10).string(message.numberOfTrades);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevNumberOfTradesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevNumberOfTradesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numberOfTrades = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevNumberOfTradesResponse {
    return {
      numberOfTrades: isSet(object.numberOfTrades) ? String(object.numberOfTrades) : ""
    };
  },
  toJSON(message: QueryGetProtoRevNumberOfTradesResponse): unknown {
    const obj: any = {};
    message.numberOfTrades !== undefined && (obj.numberOfTrades = message.numberOfTrades);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevNumberOfTradesResponse>): QueryGetProtoRevNumberOfTradesResponse {
    const message = createBaseQueryGetProtoRevNumberOfTradesResponse();
    message.numberOfTrades = object.numberOfTrades ?? "";
    return message;
  },
  fromSDK(object: QueryGetProtoRevNumberOfTradesResponseSDKType): QueryGetProtoRevNumberOfTradesResponse {
    return {
      numberOfTrades: object?.number_of_trades
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevNumberOfTradesResponseSDKType {
    return {
      number_of_trades: isSet(object.number_of_trades) ? String(object.number_of_trades) : ""
    };
  },
  toSDK(message: QueryGetProtoRevNumberOfTradesResponse): QueryGetProtoRevNumberOfTradesResponseSDKType {
    const obj: any = {};
    obj.number_of_trades = message.numberOfTrades;
    return obj;
  }
};
function createBaseQueryGetProtoRevProfitsByDenomRequest(): QueryGetProtoRevProfitsByDenomRequest {
  return {
    denom: ""
  };
}
export const QueryGetProtoRevProfitsByDenomRequest = {
  encode(message: QueryGetProtoRevProfitsByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevProfitsByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevProfitsByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevProfitsByDenomRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryGetProtoRevProfitsByDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevProfitsByDenomRequest>): QueryGetProtoRevProfitsByDenomRequest {
    const message = createBaseQueryGetProtoRevProfitsByDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromSDK(object: QueryGetProtoRevProfitsByDenomRequestSDKType): QueryGetProtoRevProfitsByDenomRequest {
    return {
      denom: object?.denom
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevProfitsByDenomRequestSDKType {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toSDK(message: QueryGetProtoRevProfitsByDenomRequest): QueryGetProtoRevProfitsByDenomRequestSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  }
};
function createBaseQueryGetProtoRevProfitsByDenomResponse(): QueryGetProtoRevProfitsByDenomResponse {
  return {
    profit: undefined
  };
}
export const QueryGetProtoRevProfitsByDenomResponse = {
  encode(message: QueryGetProtoRevProfitsByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.profit !== undefined) {
      Coin.encode(message.profit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevProfitsByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevProfitsByDenomResponse {
    return {
      profit: isSet(object.profit) ? Coin.fromJSON(object.profit) : undefined
    };
  },
  toJSON(message: QueryGetProtoRevProfitsByDenomResponse): unknown {
    const obj: any = {};
    message.profit !== undefined && (obj.profit = message.profit ? Coin.toJSON(message.profit) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevProfitsByDenomResponse>): QueryGetProtoRevProfitsByDenomResponse {
    const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
    message.profit = object.profit !== undefined && object.profit !== null ? Coin.fromPartial(object.profit) : undefined;
    return message;
  },
  fromSDK(object: QueryGetProtoRevProfitsByDenomResponseSDKType): QueryGetProtoRevProfitsByDenomResponse {
    return {
      profit: object.profit ? Coin.fromSDK(object.profit) : undefined
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevProfitsByDenomResponseSDKType {
    return {
      profit: isSet(object.profit) ? Coin.fromSDKJSON(object.profit) : undefined
    };
  },
  toSDK(message: QueryGetProtoRevProfitsByDenomResponse): QueryGetProtoRevProfitsByDenomResponseSDKType {
    const obj: any = {};
    message.profit !== undefined && (obj.profit = message.profit ? Coin.toSDK(message.profit) : undefined);
    return obj;
  }
};
function createBaseQueryGetProtoRevAllProfitsRequest(): QueryGetProtoRevAllProfitsRequest {
  return {};
}
export const QueryGetProtoRevAllProfitsRequest = {
  encode(_: QueryGetProtoRevAllProfitsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllProfitsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAllProfitsRequest();
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
  fromJSON(_: any): QueryGetProtoRevAllProfitsRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevAllProfitsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevAllProfitsRequest>): QueryGetProtoRevAllProfitsRequest {
    const message = createBaseQueryGetProtoRevAllProfitsRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevAllProfitsRequestSDKType): QueryGetProtoRevAllProfitsRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevAllProfitsRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevAllProfitsRequest): QueryGetProtoRevAllProfitsRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryGetProtoRevAllProfitsResponse(): QueryGetProtoRevAllProfitsResponse {
  return {
    profits: []
  };
}
export const QueryGetProtoRevAllProfitsResponse = {
  encode(message: QueryGetProtoRevAllProfitsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.profits) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllProfitsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAllProfitsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profits.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevAllProfitsResponse {
    return {
      profits: Array.isArray(object?.profits) ? object.profits.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryGetProtoRevAllProfitsResponse): unknown {
    const obj: any = {};
    if (message.profits) {
      obj.profits = message.profits.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.profits = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevAllProfitsResponse>): QueryGetProtoRevAllProfitsResponse {
    const message = createBaseQueryGetProtoRevAllProfitsResponse();
    message.profits = object.profits?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryGetProtoRevAllProfitsResponseSDKType): QueryGetProtoRevAllProfitsResponse {
    return {
      profits: Array.isArray(object?.profits) ? object.profits.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevAllProfitsResponseSDKType {
    return {
      profits: Array.isArray(object?.profits) ? object.profits.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryGetProtoRevAllProfitsResponse): QueryGetProtoRevAllProfitsResponseSDKType {
    const obj: any = {};
    if (message.profits) {
      obj.profits = message.profits.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.profits = [];
    }
    return obj;
  }
};
function createBaseQueryGetProtoRevStatisticsByRouteRequest(): QueryGetProtoRevStatisticsByRouteRequest {
  return {
    route: []
  };
}
export const QueryGetProtoRevStatisticsByRouteRequest = {
  encode(message: QueryGetProtoRevStatisticsByRouteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.route) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevStatisticsByRouteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevStatisticsByRouteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.route.push(reader.uint64());
            }
          } else {
            message.route.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevStatisticsByRouteRequest {
    return {
      route: Array.isArray(object?.route) ? object.route.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: QueryGetProtoRevStatisticsByRouteRequest): unknown {
    const obj: any = {};
    if (message.route) {
      obj.route = message.route.map(e => (e || BigInt(0)).toString());
    } else {
      obj.route = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevStatisticsByRouteRequest>): QueryGetProtoRevStatisticsByRouteRequest {
    const message = createBaseQueryGetProtoRevStatisticsByRouteRequest();
    message.route = object.route?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromSDK(object: QueryGetProtoRevStatisticsByRouteRequestSDKType): QueryGetProtoRevStatisticsByRouteRequest {
    return {
      route: Array.isArray(object?.route) ? object.route.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevStatisticsByRouteRequestSDKType {
    return {
      route: Array.isArray(object?.route) ? object.route.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toSDK(message: QueryGetProtoRevStatisticsByRouteRequest): QueryGetProtoRevStatisticsByRouteRequestSDKType {
    const obj: any = {};
    if (message.route) {
      obj.route = message.route.map(e => e);
    } else {
      obj.route = [];
    }
    return obj;
  }
};
function createBaseQueryGetProtoRevStatisticsByRouteResponse(): QueryGetProtoRevStatisticsByRouteResponse {
  return {
    statistics: RouteStatistics.fromPartial({})
  };
}
export const QueryGetProtoRevStatisticsByRouteResponse = {
  encode(message: QueryGetProtoRevStatisticsByRouteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.statistics !== undefined) {
      RouteStatistics.encode(message.statistics, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevStatisticsByRouteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevStatisticsByRouteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statistics = RouteStatistics.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevStatisticsByRouteResponse {
    return {
      statistics: isSet(object.statistics) ? RouteStatistics.fromJSON(object.statistics) : undefined
    };
  },
  toJSON(message: QueryGetProtoRevStatisticsByRouteResponse): unknown {
    const obj: any = {};
    message.statistics !== undefined && (obj.statistics = message.statistics ? RouteStatistics.toJSON(message.statistics) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevStatisticsByRouteResponse>): QueryGetProtoRevStatisticsByRouteResponse {
    const message = createBaseQueryGetProtoRevStatisticsByRouteResponse();
    message.statistics = object.statistics !== undefined && object.statistics !== null ? RouteStatistics.fromPartial(object.statistics) : undefined;
    return message;
  },
  fromSDK(object: QueryGetProtoRevStatisticsByRouteResponseSDKType): QueryGetProtoRevStatisticsByRouteResponse {
    return {
      statistics: object.statistics ? RouteStatistics.fromSDK(object.statistics) : undefined
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevStatisticsByRouteResponseSDKType {
    return {
      statistics: isSet(object.statistics) ? RouteStatistics.fromSDKJSON(object.statistics) : undefined
    };
  },
  toSDK(message: QueryGetProtoRevStatisticsByRouteResponse): QueryGetProtoRevStatisticsByRouteResponseSDKType {
    const obj: any = {};
    message.statistics !== undefined && (obj.statistics = message.statistics ? RouteStatistics.toSDK(message.statistics) : undefined);
    return obj;
  }
};
function createBaseQueryGetProtoRevAllRouteStatisticsRequest(): QueryGetProtoRevAllRouteStatisticsRequest {
  return {};
}
export const QueryGetProtoRevAllRouteStatisticsRequest = {
  encode(_: QueryGetProtoRevAllRouteStatisticsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllRouteStatisticsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAllRouteStatisticsRequest();
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
  fromJSON(_: any): QueryGetProtoRevAllRouteStatisticsRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevAllRouteStatisticsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevAllRouteStatisticsRequest>): QueryGetProtoRevAllRouteStatisticsRequest {
    const message = createBaseQueryGetProtoRevAllRouteStatisticsRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevAllRouteStatisticsRequestSDKType): QueryGetProtoRevAllRouteStatisticsRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevAllRouteStatisticsRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevAllRouteStatisticsRequest): QueryGetProtoRevAllRouteStatisticsRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryGetProtoRevAllRouteStatisticsResponse(): QueryGetProtoRevAllRouteStatisticsResponse {
  return {
    statistics: []
  };
}
export const QueryGetProtoRevAllRouteStatisticsResponse = {
  encode(message: QueryGetProtoRevAllRouteStatisticsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.statistics) {
      RouteStatistics.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllRouteStatisticsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAllRouteStatisticsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statistics.push(RouteStatistics.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevAllRouteStatisticsResponse {
    return {
      statistics: Array.isArray(object?.statistics) ? object.statistics.map((e: any) => RouteStatistics.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryGetProtoRevAllRouteStatisticsResponse): unknown {
    const obj: any = {};
    if (message.statistics) {
      obj.statistics = message.statistics.map(e => e ? RouteStatistics.toJSON(e) : undefined);
    } else {
      obj.statistics = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevAllRouteStatisticsResponse>): QueryGetProtoRevAllRouteStatisticsResponse {
    const message = createBaseQueryGetProtoRevAllRouteStatisticsResponse();
    message.statistics = object.statistics?.map(e => RouteStatistics.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryGetProtoRevAllRouteStatisticsResponseSDKType): QueryGetProtoRevAllRouteStatisticsResponse {
    return {
      statistics: Array.isArray(object?.statistics) ? object.statistics.map((e: any) => RouteStatistics.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevAllRouteStatisticsResponseSDKType {
    return {
      statistics: Array.isArray(object?.statistics) ? object.statistics.map((e: any) => RouteStatistics.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryGetProtoRevAllRouteStatisticsResponse): QueryGetProtoRevAllRouteStatisticsResponseSDKType {
    const obj: any = {};
    if (message.statistics) {
      obj.statistics = message.statistics.map(e => e ? RouteStatistics.toSDK(e) : undefined);
    } else {
      obj.statistics = [];
    }
    return obj;
  }
};
function createBaseQueryGetProtoRevTokenPairArbRoutesRequest(): QueryGetProtoRevTokenPairArbRoutesRequest {
  return {};
}
export const QueryGetProtoRevTokenPairArbRoutesRequest = {
  encode(_: QueryGetProtoRevTokenPairArbRoutesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevTokenPairArbRoutesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
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
  fromJSON(_: any): QueryGetProtoRevTokenPairArbRoutesRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevTokenPairArbRoutesRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevTokenPairArbRoutesRequest>): QueryGetProtoRevTokenPairArbRoutesRequest {
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevTokenPairArbRoutesRequestSDKType): QueryGetProtoRevTokenPairArbRoutesRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevTokenPairArbRoutesRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevTokenPairArbRoutesRequest): QueryGetProtoRevTokenPairArbRoutesRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryGetProtoRevTokenPairArbRoutesResponse(): QueryGetProtoRevTokenPairArbRoutesResponse {
  return {
    routes: []
  };
}
export const QueryGetProtoRevTokenPairArbRoutesResponse = {
  encode(message: QueryGetProtoRevTokenPairArbRoutesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.routes) {
      TokenPairArbRoutes.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevTokenPairArbRoutesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.routes.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevTokenPairArbRoutesResponse {
    return {
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => TokenPairArbRoutes.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryGetProtoRevTokenPairArbRoutesResponse): unknown {
    const obj: any = {};
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? TokenPairArbRoutes.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevTokenPairArbRoutesResponse>): QueryGetProtoRevTokenPairArbRoutesResponse {
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
    message.routes = object.routes?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryGetProtoRevTokenPairArbRoutesResponseSDKType): QueryGetProtoRevTokenPairArbRoutesResponse {
    return {
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => TokenPairArbRoutes.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevTokenPairArbRoutesResponseSDKType {
    return {
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => TokenPairArbRoutes.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryGetProtoRevTokenPairArbRoutesResponse): QueryGetProtoRevTokenPairArbRoutesResponseSDKType {
    const obj: any = {};
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? TokenPairArbRoutes.toSDK(e) : undefined);
    } else {
      obj.routes = [];
    }
    return obj;
  }
};
function createBaseQueryGetProtoRevAdminAccountRequest(): QueryGetProtoRevAdminAccountRequest {
  return {};
}
export const QueryGetProtoRevAdminAccountRequest = {
  encode(_: QueryGetProtoRevAdminAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAdminAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAdminAccountRequest();
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
  fromJSON(_: any): QueryGetProtoRevAdminAccountRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevAdminAccountRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevAdminAccountRequest>): QueryGetProtoRevAdminAccountRequest {
    const message = createBaseQueryGetProtoRevAdminAccountRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevAdminAccountRequestSDKType): QueryGetProtoRevAdminAccountRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevAdminAccountRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevAdminAccountRequest): QueryGetProtoRevAdminAccountRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryGetProtoRevAdminAccountResponse(): QueryGetProtoRevAdminAccountResponse {
  return {
    adminAccount: ""
  };
}
export const QueryGetProtoRevAdminAccountResponse = {
  encode(message: QueryGetProtoRevAdminAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.adminAccount !== "") {
      writer.uint32(10).string(message.adminAccount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAdminAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAdminAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.adminAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevAdminAccountResponse {
    return {
      adminAccount: isSet(object.adminAccount) ? String(object.adminAccount) : ""
    };
  },
  toJSON(message: QueryGetProtoRevAdminAccountResponse): unknown {
    const obj: any = {};
    message.adminAccount !== undefined && (obj.adminAccount = message.adminAccount);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevAdminAccountResponse>): QueryGetProtoRevAdminAccountResponse {
    const message = createBaseQueryGetProtoRevAdminAccountResponse();
    message.adminAccount = object.adminAccount ?? "";
    return message;
  },
  fromSDK(object: QueryGetProtoRevAdminAccountResponseSDKType): QueryGetProtoRevAdminAccountResponse {
    return {
      adminAccount: object?.admin_account
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevAdminAccountResponseSDKType {
    return {
      admin_account: isSet(object.admin_account) ? String(object.admin_account) : ""
    };
  },
  toSDK(message: QueryGetProtoRevAdminAccountResponse): QueryGetProtoRevAdminAccountResponseSDKType {
    const obj: any = {};
    obj.admin_account = message.adminAccount;
    return obj;
  }
};
function createBaseQueryGetProtoRevDeveloperAccountRequest(): QueryGetProtoRevDeveloperAccountRequest {
  return {};
}
export const QueryGetProtoRevDeveloperAccountRequest = {
  encode(_: QueryGetProtoRevDeveloperAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevDeveloperAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevDeveloperAccountRequest();
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
  fromJSON(_: any): QueryGetProtoRevDeveloperAccountRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevDeveloperAccountRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevDeveloperAccountRequest>): QueryGetProtoRevDeveloperAccountRequest {
    const message = createBaseQueryGetProtoRevDeveloperAccountRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevDeveloperAccountRequestSDKType): QueryGetProtoRevDeveloperAccountRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevDeveloperAccountRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevDeveloperAccountRequest): QueryGetProtoRevDeveloperAccountRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryGetProtoRevDeveloperAccountResponse(): QueryGetProtoRevDeveloperAccountResponse {
  return {
    developerAccount: ""
  };
}
export const QueryGetProtoRevDeveloperAccountResponse = {
  encode(message: QueryGetProtoRevDeveloperAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.developerAccount !== "") {
      writer.uint32(10).string(message.developerAccount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevDeveloperAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevDeveloperAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.developerAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevDeveloperAccountResponse {
    return {
      developerAccount: isSet(object.developerAccount) ? String(object.developerAccount) : ""
    };
  },
  toJSON(message: QueryGetProtoRevDeveloperAccountResponse): unknown {
    const obj: any = {};
    message.developerAccount !== undefined && (obj.developerAccount = message.developerAccount);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevDeveloperAccountResponse>): QueryGetProtoRevDeveloperAccountResponse {
    const message = createBaseQueryGetProtoRevDeveloperAccountResponse();
    message.developerAccount = object.developerAccount ?? "";
    return message;
  },
  fromSDK(object: QueryGetProtoRevDeveloperAccountResponseSDKType): QueryGetProtoRevDeveloperAccountResponse {
    return {
      developerAccount: object?.developer_account
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevDeveloperAccountResponseSDKType {
    return {
      developer_account: isSet(object.developer_account) ? String(object.developer_account) : ""
    };
  },
  toSDK(message: QueryGetProtoRevDeveloperAccountResponse): QueryGetProtoRevDeveloperAccountResponseSDKType {
    const obj: any = {};
    obj.developer_account = message.developerAccount;
    return obj;
  }
};
function createBaseQueryGetProtoRevPoolWeightsRequest(): QueryGetProtoRevPoolWeightsRequest {
  return {};
}
export const QueryGetProtoRevPoolWeightsRequest = {
  encode(_: QueryGetProtoRevPoolWeightsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevPoolWeightsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevPoolWeightsRequest();
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
  fromJSON(_: any): QueryGetProtoRevPoolWeightsRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevPoolWeightsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevPoolWeightsRequest>): QueryGetProtoRevPoolWeightsRequest {
    const message = createBaseQueryGetProtoRevPoolWeightsRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevPoolWeightsRequestSDKType): QueryGetProtoRevPoolWeightsRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevPoolWeightsRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevPoolWeightsRequest): QueryGetProtoRevPoolWeightsRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryGetProtoRevPoolWeightsResponse(): QueryGetProtoRevPoolWeightsResponse {
  return {
    poolWeights: PoolWeights.fromPartial({})
  };
}
export const QueryGetProtoRevPoolWeightsResponse = {
  encode(message: QueryGetProtoRevPoolWeightsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolWeights !== undefined) {
      PoolWeights.encode(message.poolWeights, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevPoolWeightsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevPoolWeightsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolWeights = PoolWeights.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevPoolWeightsResponse {
    return {
      poolWeights: isSet(object.poolWeights) ? PoolWeights.fromJSON(object.poolWeights) : undefined
    };
  },
  toJSON(message: QueryGetProtoRevPoolWeightsResponse): unknown {
    const obj: any = {};
    message.poolWeights !== undefined && (obj.poolWeights = message.poolWeights ? PoolWeights.toJSON(message.poolWeights) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevPoolWeightsResponse>): QueryGetProtoRevPoolWeightsResponse {
    const message = createBaseQueryGetProtoRevPoolWeightsResponse();
    message.poolWeights = object.poolWeights !== undefined && object.poolWeights !== null ? PoolWeights.fromPartial(object.poolWeights) : undefined;
    return message;
  },
  fromSDK(object: QueryGetProtoRevPoolWeightsResponseSDKType): QueryGetProtoRevPoolWeightsResponse {
    return {
      poolWeights: object.pool_weights ? PoolWeights.fromSDK(object.pool_weights) : undefined
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevPoolWeightsResponseSDKType {
    return {
      pool_weights: isSet(object.pool_weights) ? PoolWeights.fromSDKJSON(object.pool_weights) : undefined
    };
  },
  toSDK(message: QueryGetProtoRevPoolWeightsResponse): QueryGetProtoRevPoolWeightsResponseSDKType {
    const obj: any = {};
    message.poolWeights !== undefined && (obj.pool_weights = message.poolWeights ? PoolWeights.toSDK(message.poolWeights) : undefined);
    return obj;
  }
};
function createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest(): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
  return {};
}
export const QueryGetProtoRevMaxPoolPointsPerBlockRequest = {
  encode(_: QueryGetProtoRevMaxPoolPointsPerBlockRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest();
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
  fromJSON(_: any): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevMaxPoolPointsPerBlockRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevMaxPoolPointsPerBlockRequest>): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevMaxPoolPointsPerBlockRequestSDKType): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevMaxPoolPointsPerBlockRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevMaxPoolPointsPerBlockRequest): QueryGetProtoRevMaxPoolPointsPerBlockRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse(): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
  return {
    maxPoolPointsPerBlock: BigInt(0)
  };
}
export const QueryGetProtoRevMaxPoolPointsPerBlockResponse = {
  encode(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxPoolPointsPerBlock !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxPoolPointsPerBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxPoolPointsPerBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    return {
      maxPoolPointsPerBlock: isSet(object.maxPoolPointsPerBlock) ? BigInt(object.maxPoolPointsPerBlock.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse): unknown {
    const obj: any = {};
    message.maxPoolPointsPerBlock !== undefined && (obj.maxPoolPointsPerBlock = (message.maxPoolPointsPerBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevMaxPoolPointsPerBlockResponse>): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse();
    message.maxPoolPointsPerBlock = object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null ? BigInt(object.maxPoolPointsPerBlock.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryGetProtoRevMaxPoolPointsPerBlockResponseSDKType): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    return {
      maxPoolPointsPerBlock: object?.max_pool_points_per_block
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevMaxPoolPointsPerBlockResponseSDKType {
    return {
      max_pool_points_per_block: isSet(object.max_pool_points_per_block) ? BigInt(object.max_pool_points_per_block.toString()) : BigInt(0)
    };
  },
  toSDK(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse): QueryGetProtoRevMaxPoolPointsPerBlockResponseSDKType {
    const obj: any = {};
    obj.max_pool_points_per_block = message.maxPoolPointsPerBlock;
    return obj;
  }
};
function createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest(): QueryGetProtoRevMaxPoolPointsPerTxRequest {
  return {};
}
export const QueryGetProtoRevMaxPoolPointsPerTxRequest = {
  encode(_: QueryGetProtoRevMaxPoolPointsPerTxRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevMaxPoolPointsPerTxRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest();
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
  fromJSON(_: any): QueryGetProtoRevMaxPoolPointsPerTxRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevMaxPoolPointsPerTxRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevMaxPoolPointsPerTxRequest>): QueryGetProtoRevMaxPoolPointsPerTxRequest {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevMaxPoolPointsPerTxRequestSDKType): QueryGetProtoRevMaxPoolPointsPerTxRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevMaxPoolPointsPerTxRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevMaxPoolPointsPerTxRequest): QueryGetProtoRevMaxPoolPointsPerTxRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse(): QueryGetProtoRevMaxPoolPointsPerTxResponse {
  return {
    maxPoolPointsPerTx: BigInt(0)
  };
}
export const QueryGetProtoRevMaxPoolPointsPerTxResponse = {
  encode(message: QueryGetProtoRevMaxPoolPointsPerTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxPoolPointsPerTx !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxPoolPointsPerTx);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevMaxPoolPointsPerTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxPoolPointsPerTx = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevMaxPoolPointsPerTxResponse {
    return {
      maxPoolPointsPerTx: isSet(object.maxPoolPointsPerTx) ? BigInt(object.maxPoolPointsPerTx.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetProtoRevMaxPoolPointsPerTxResponse): unknown {
    const obj: any = {};
    message.maxPoolPointsPerTx !== undefined && (obj.maxPoolPointsPerTx = (message.maxPoolPointsPerTx || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevMaxPoolPointsPerTxResponse>): QueryGetProtoRevMaxPoolPointsPerTxResponse {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse();
    message.maxPoolPointsPerTx = object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null ? BigInt(object.maxPoolPointsPerTx.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryGetProtoRevMaxPoolPointsPerTxResponseSDKType): QueryGetProtoRevMaxPoolPointsPerTxResponse {
    return {
      maxPoolPointsPerTx: object?.max_pool_points_per_tx
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevMaxPoolPointsPerTxResponseSDKType {
    return {
      max_pool_points_per_tx: isSet(object.max_pool_points_per_tx) ? BigInt(object.max_pool_points_per_tx.toString()) : BigInt(0)
    };
  },
  toSDK(message: QueryGetProtoRevMaxPoolPointsPerTxResponse): QueryGetProtoRevMaxPoolPointsPerTxResponseSDKType {
    const obj: any = {};
    obj.max_pool_points_per_tx = message.maxPoolPointsPerTx;
    return obj;
  }
};
function createBaseQueryGetProtoRevBaseDenomsRequest(): QueryGetProtoRevBaseDenomsRequest {
  return {};
}
export const QueryGetProtoRevBaseDenomsRequest = {
  encode(_: QueryGetProtoRevBaseDenomsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevBaseDenomsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevBaseDenomsRequest();
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
  fromJSON(_: any): QueryGetProtoRevBaseDenomsRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevBaseDenomsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevBaseDenomsRequest>): QueryGetProtoRevBaseDenomsRequest {
    const message = createBaseQueryGetProtoRevBaseDenomsRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevBaseDenomsRequestSDKType): QueryGetProtoRevBaseDenomsRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevBaseDenomsRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevBaseDenomsRequest): QueryGetProtoRevBaseDenomsRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryGetProtoRevBaseDenomsResponse(): QueryGetProtoRevBaseDenomsResponse {
  return {
    baseDenoms: []
  };
}
export const QueryGetProtoRevBaseDenomsResponse = {
  encode(message: QueryGetProtoRevBaseDenomsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.baseDenoms) {
      BaseDenom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevBaseDenomsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevBaseDenomsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenoms.push(BaseDenom.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevBaseDenomsResponse {
    return {
      baseDenoms: Array.isArray(object?.baseDenoms) ? object.baseDenoms.map((e: any) => BaseDenom.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryGetProtoRevBaseDenomsResponse): unknown {
    const obj: any = {};
    if (message.baseDenoms) {
      obj.baseDenoms = message.baseDenoms.map(e => e ? BaseDenom.toJSON(e) : undefined);
    } else {
      obj.baseDenoms = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevBaseDenomsResponse>): QueryGetProtoRevBaseDenomsResponse {
    const message = createBaseQueryGetProtoRevBaseDenomsResponse();
    message.baseDenoms = object.baseDenoms?.map(e => BaseDenom.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryGetProtoRevBaseDenomsResponseSDKType): QueryGetProtoRevBaseDenomsResponse {
    return {
      baseDenoms: Array.isArray(object?.base_denoms) ? object.base_denoms.map((e: any) => BaseDenom.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevBaseDenomsResponseSDKType {
    return {
      base_denoms: Array.isArray(object?.base_denoms) ? object.base_denoms.map((e: any) => BaseDenom.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryGetProtoRevBaseDenomsResponse): QueryGetProtoRevBaseDenomsResponseSDKType {
    const obj: any = {};
    if (message.baseDenoms) {
      obj.base_denoms = message.baseDenoms.map(e => e ? BaseDenom.toSDK(e) : undefined);
    } else {
      obj.base_denoms = [];
    }
    return obj;
  }
};
function createBaseQueryGetProtoRevEnabledRequest(): QueryGetProtoRevEnabledRequest {
  return {};
}
export const QueryGetProtoRevEnabledRequest = {
  encode(_: QueryGetProtoRevEnabledRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevEnabledRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevEnabledRequest();
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
  fromJSON(_: any): QueryGetProtoRevEnabledRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevEnabledRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryGetProtoRevEnabledRequest>): QueryGetProtoRevEnabledRequest {
    const message = createBaseQueryGetProtoRevEnabledRequest();
    return message;
  },
  fromSDK(_: QueryGetProtoRevEnabledRequestSDKType): QueryGetProtoRevEnabledRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryGetProtoRevEnabledRequestSDKType {
    return {};
  },
  toSDK(_: QueryGetProtoRevEnabledRequest): QueryGetProtoRevEnabledRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryGetProtoRevEnabledResponse(): QueryGetProtoRevEnabledResponse {
  return {
    enabled: false
  };
}
export const QueryGetProtoRevEnabledResponse = {
  encode(message: QueryGetProtoRevEnabledResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevEnabledResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevEnabledResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevEnabledResponse {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },
  toJSON(message: QueryGetProtoRevEnabledResponse): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetProtoRevEnabledResponse>): QueryGetProtoRevEnabledResponse {
    const message = createBaseQueryGetProtoRevEnabledResponse();
    message.enabled = object.enabled ?? false;
    return message;
  },
  fromSDK(object: QueryGetProtoRevEnabledResponseSDKType): QueryGetProtoRevEnabledResponse {
    return {
      enabled: object?.enabled
    };
  },
  fromSDKJSON(object: any): QueryGetProtoRevEnabledResponseSDKType {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },
  toSDK(message: QueryGetProtoRevEnabledResponse): QueryGetProtoRevEnabledResponseSDKType {
    const obj: any = {};
    obj.enabled = message.enabled;
    return obj;
  }
};