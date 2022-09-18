import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Gauge, GaugeSDKType } from "./gauge";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long, isSet } from "@osmonauts/helpers";
export const protobufPackage = "osmosis.incentives";
export interface ModuleToDistributeCoinsRequest {}
export interface ModuleToDistributeCoinsRequestSDKType {}
export interface ModuleToDistributeCoinsResponse {
  coins: Coin[];
}
export interface ModuleToDistributeCoinsResponseSDKType {
  coins: CoinSDKType[];
}
export interface ModuleDistributedCoinsRequest {}
export interface ModuleDistributedCoinsRequestSDKType {}
export interface ModuleDistributedCoinsResponse {
  coins: Coin[];
}
export interface ModuleDistributedCoinsResponseSDKType {
  coins: CoinSDKType[];
}
export interface GaugeByIDRequest {
  id: Long;
}
export interface GaugeByIDRequestSDKType {
  id: Long;
}
export interface GaugeByIDResponse {
  gauge: Gauge;
}
export interface GaugeByIDResponseSDKType {
  gauge: GaugeSDKType;
}
export interface GaugesRequest {
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}
export interface GaugesRequestSDKType {
  /** pagination defines an pagination for the request. */
  pagination?: PageRequestSDKType;
}
export interface GaugesResponse {
  data: Gauge[];

  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}
export interface GaugesResponseSDKType {
  data: GaugeSDKType[];

  /** pagination defines an pagination for the response. */
  pagination?: PageResponseSDKType;
}
export interface ActiveGaugesRequest {
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}
export interface ActiveGaugesRequestSDKType {
  /** pagination defines an pagination for the request. */
  pagination?: PageRequestSDKType;
}
export interface ActiveGaugesResponse {
  data: Gauge[];

  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}
export interface ActiveGaugesResponseSDKType {
  data: GaugeSDKType[];

  /** pagination defines an pagination for the response. */
  pagination?: PageResponseSDKType;
}
export interface ActiveGaugesPerDenomRequest {
  denom?: string;

  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}
export interface ActiveGaugesPerDenomRequestSDKType {
  denom?: string;

  /** pagination defines an pagination for the request. */
  pagination?: PageRequestSDKType;
}
export interface ActiveGaugesPerDenomResponse {
  data: Gauge[];

  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}
export interface ActiveGaugesPerDenomResponseSDKType {
  data: GaugeSDKType[];

  /** pagination defines an pagination for the response. */
  pagination?: PageResponseSDKType;
}
export interface UpcomingGaugesRequest {
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}
export interface UpcomingGaugesRequestSDKType {
  /** pagination defines an pagination for the request. */
  pagination?: PageRequestSDKType;
}
export interface UpcomingGaugesResponse {
  data: Gauge[];

  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}
export interface UpcomingGaugesResponseSDKType {
  data: GaugeSDKType[];

  /** pagination defines an pagination for the response. */
  pagination?: PageResponseSDKType;
}
export interface UpcomingGaugesPerDenomRequest {
  denom?: string;
  pagination?: PageRequest;
}
export interface UpcomingGaugesPerDenomRequestSDKType {
  denom?: string;
  pagination?: PageRequestSDKType;
}
export interface UpcomingGaugesPerDenomResponse {
  upcomingGauges: Gauge[];
  pagination?: PageResponse;
}
export interface UpcomingGaugesPerDenomResponseSDKType {
  upcoming_gauges: GaugeSDKType[];
  pagination?: PageResponseSDKType;
}
export interface RewardsEstRequest {
  owner: string;
  lockIds?: Long[];
  endEpoch?: Long;
}
export interface RewardsEstRequestSDKType {
  owner: string;
  lock_ids?: Long[];
  end_epoch?: Long;
}
export interface RewardsEstResponse {
  coins: Coin[];
}
export interface RewardsEstResponseSDKType {
  coins: CoinSDKType[];
}
export interface QueryLockableDurationsRequest {}
export interface QueryLockableDurationsRequestSDKType {}
export interface QueryLockableDurationsResponse {
  lockableDurations: Duration[];
}
export interface QueryLockableDurationsResponseSDKType {
  lockable_durations: DurationSDKType[];
}

function createBaseModuleToDistributeCoinsRequest(): ModuleToDistributeCoinsRequest {
  return {};
}

export const ModuleToDistributeCoinsRequest = {
  encode(_: ModuleToDistributeCoinsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleToDistributeCoinsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleToDistributeCoinsRequest();

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

  fromJSON(_: any): ModuleToDistributeCoinsRequest {
    return {};
  },

  toJSON(_: ModuleToDistributeCoinsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ModuleToDistributeCoinsRequest>): ModuleToDistributeCoinsRequest {
    const message = createBaseModuleToDistributeCoinsRequest();
    return message;
  },

  fromSDK(_: ModuleToDistributeCoinsRequestSDKType): ModuleToDistributeCoinsRequest {
    return {};
  },

  toSDK(_: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseModuleToDistributeCoinsResponse(): ModuleToDistributeCoinsResponse {
  return {
    coins: []
  };
}

export const ModuleToDistributeCoinsResponse = {
  encode(message: ModuleToDistributeCoinsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleToDistributeCoinsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleToDistributeCoinsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ModuleToDistributeCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: ModuleToDistributeCoinsResponse): unknown {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ModuleToDistributeCoinsResponse>): ModuleToDistributeCoinsResponse {
    const message = createBaseModuleToDistributeCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: ModuleToDistributeCoinsResponseSDKType): ModuleToDistributeCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },

  toSDK(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseSDKType {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  }

};

function createBaseModuleDistributedCoinsRequest(): ModuleDistributedCoinsRequest {
  return {};
}

export const ModuleDistributedCoinsRequest = {
  encode(_: ModuleDistributedCoinsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleDistributedCoinsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleDistributedCoinsRequest();

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

  fromJSON(_: any): ModuleDistributedCoinsRequest {
    return {};
  },

  toJSON(_: ModuleDistributedCoinsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ModuleDistributedCoinsRequest>): ModuleDistributedCoinsRequest {
    const message = createBaseModuleDistributedCoinsRequest();
    return message;
  },

  fromSDK(_: ModuleDistributedCoinsRequestSDKType): ModuleDistributedCoinsRequest {
    return {};
  },

  toSDK(_: ModuleDistributedCoinsRequest): ModuleDistributedCoinsRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseModuleDistributedCoinsResponse(): ModuleDistributedCoinsResponse {
  return {
    coins: []
  };
}

export const ModuleDistributedCoinsResponse = {
  encode(message: ModuleDistributedCoinsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleDistributedCoinsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleDistributedCoinsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ModuleDistributedCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: ModuleDistributedCoinsResponse): unknown {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ModuleDistributedCoinsResponse>): ModuleDistributedCoinsResponse {
    const message = createBaseModuleDistributedCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: ModuleDistributedCoinsResponseSDKType): ModuleDistributedCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },

  toSDK(message: ModuleDistributedCoinsResponse): ModuleDistributedCoinsResponseSDKType {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  }

};

function createBaseGaugeByIDRequest(): GaugeByIDRequest {
  return {
    id: Long.UZERO
  };
}

export const GaugeByIDRequest = {
  encode(message: GaugeByIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GaugeByIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugeByIDRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GaugeByIDRequest {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO
    };
  },

  toJSON(message: GaugeByIDRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<GaugeByIDRequest>): GaugeByIDRequest {
    const message = createBaseGaugeByIDRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },

  fromSDK(object: GaugeByIDRequestSDKType): GaugeByIDRequest {
    return {
      id: isSet(object.id) ? object.id : Long.UZERO
    };
  },

  toSDK(message: GaugeByIDRequest): GaugeByIDRequestSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  }

};

function createBaseGaugeByIDResponse(): GaugeByIDResponse {
  return {
    gauge: undefined
  };
}

export const GaugeByIDResponse = {
  encode(message: GaugeByIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gauge !== undefined) {
      Gauge.encode(message.gauge, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GaugeByIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugeByIDResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.gauge = Gauge.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GaugeByIDResponse {
    return {
      gauge: isSet(object.gauge) ? Gauge.fromJSON(object.gauge) : undefined
    };
  },

  toJSON(message: GaugeByIDResponse): unknown {
    const obj: any = {};
    message.gauge !== undefined && (obj.gauge = message.gauge ? Gauge.toJSON(message.gauge) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GaugeByIDResponse>): GaugeByIDResponse {
    const message = createBaseGaugeByIDResponse();
    message.gauge = object.gauge !== undefined && object.gauge !== null ? Gauge.fromPartial(object.gauge) : undefined;
    return message;
  },

  fromSDK(object: GaugeByIDResponseSDKType): GaugeByIDResponse {
    return {
      gauge: isSet(object.gauge) ? Gauge.fromSDK(object.gauge) : undefined
    };
  },

  toSDK(message: GaugeByIDResponse): GaugeByIDResponseSDKType {
    const obj: any = {};
    message.gauge !== undefined && (obj.gauge = message.gauge ? Gauge.toSDK(message.gauge) : undefined);
    return obj;
  }

};

function createBaseGaugesRequest(): GaugesRequest {
  return {
    pagination: undefined
  };
}

export const GaugesRequest = {
  encode(message: GaugesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GaugesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GaugesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: GaugesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GaugesRequest>): GaugesRequest {
    const message = createBaseGaugesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: GaugesRequestSDKType): GaugesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: GaugesRequest): GaugesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseGaugesResponse(): GaugesResponse {
  return {
    data: [],
    pagination: undefined
  };
}

export const GaugesResponse = {
  encode(message: GaugesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GaugesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GaugesResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: GaugesResponse): unknown {
    const obj: any = {};

    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GaugesResponse>): GaugesResponse {
    const message = createBaseGaugesResponse();
    message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: GaugesResponseSDKType): GaugesResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromSDK(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: GaugesResponse): GaugesResponseSDKType {
    const obj: any = {};

    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toSDK(e) : undefined);
    } else {
      obj.data = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseActiveGaugesRequest(): ActiveGaugesRequest {
  return {
    pagination: undefined
  };
}

export const ActiveGaugesRequest = {
  encode(message: ActiveGaugesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGaugesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ActiveGaugesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: ActiveGaugesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ActiveGaugesRequest>): ActiveGaugesRequest {
    const message = createBaseActiveGaugesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: ActiveGaugesRequestSDKType): ActiveGaugesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: ActiveGaugesRequest): ActiveGaugesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseActiveGaugesResponse(): ActiveGaugesResponse {
  return {
    data: [],
    pagination: undefined
  };
}

export const ActiveGaugesResponse = {
  encode(message: ActiveGaugesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGaugesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ActiveGaugesResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: ActiveGaugesResponse): unknown {
    const obj: any = {};

    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ActiveGaugesResponse>): ActiveGaugesResponse {
    const message = createBaseActiveGaugesResponse();
    message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: ActiveGaugesResponseSDKType): ActiveGaugesResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromSDK(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: ActiveGaugesResponse): ActiveGaugesResponseSDKType {
    const obj: any = {};

    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toSDK(e) : undefined);
    } else {
      obj.data = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseActiveGaugesPerDenomRequest(): ActiveGaugesPerDenomRequest {
  return {
    denom: "",
    pagination: undefined
  };
}

export const ActiveGaugesPerDenomRequest = {
  encode(message: ActiveGaugesPerDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesPerDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGaugesPerDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ActiveGaugesPerDenomRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: ActiveGaugesPerDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ActiveGaugesPerDenomRequest>): ActiveGaugesPerDenomRequest {
    const message = createBaseActiveGaugesPerDenomRequest();
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: ActiveGaugesPerDenomRequestSDKType): ActiveGaugesPerDenomRequest {
    return {
      denom: isSet(object.denom) ? object.denom : "",
      pagination: isSet(object.pagination) ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: ActiveGaugesPerDenomRequest): ActiveGaugesPerDenomRequestSDKType {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseActiveGaugesPerDenomResponse(): ActiveGaugesPerDenomResponse {
  return {
    data: [],
    pagination: undefined
  };
}

export const ActiveGaugesPerDenomResponse = {
  encode(message: ActiveGaugesPerDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesPerDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGaugesPerDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ActiveGaugesPerDenomResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: ActiveGaugesPerDenomResponse): unknown {
    const obj: any = {};

    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ActiveGaugesPerDenomResponse>): ActiveGaugesPerDenomResponse {
    const message = createBaseActiveGaugesPerDenomResponse();
    message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: ActiveGaugesPerDenomResponseSDKType): ActiveGaugesPerDenomResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromSDK(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: ActiveGaugesPerDenomResponse): ActiveGaugesPerDenomResponseSDKType {
    const obj: any = {};

    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toSDK(e) : undefined);
    } else {
      obj.data = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseUpcomingGaugesRequest(): UpcomingGaugesRequest {
  return {
    pagination: undefined
  };
}

export const UpcomingGaugesRequest = {
  encode(message: UpcomingGaugesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpcomingGaugesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UpcomingGaugesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: UpcomingGaugesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UpcomingGaugesRequest>): UpcomingGaugesRequest {
    const message = createBaseUpcomingGaugesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: UpcomingGaugesRequestSDKType): UpcomingGaugesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: UpcomingGaugesRequest): UpcomingGaugesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseUpcomingGaugesResponse(): UpcomingGaugesResponse {
  return {
    data: [],
    pagination: undefined
  };
}

export const UpcomingGaugesResponse = {
  encode(message: UpcomingGaugesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpcomingGaugesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UpcomingGaugesResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: UpcomingGaugesResponse): unknown {
    const obj: any = {};

    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UpcomingGaugesResponse>): UpcomingGaugesResponse {
    const message = createBaseUpcomingGaugesResponse();
    message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: UpcomingGaugesResponseSDKType): UpcomingGaugesResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromSDK(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: UpcomingGaugesResponse): UpcomingGaugesResponseSDKType {
    const obj: any = {};

    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toSDK(e) : undefined);
    } else {
      obj.data = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseUpcomingGaugesPerDenomRequest(): UpcomingGaugesPerDenomRequest {
  return {
    denom: "",
    pagination: undefined
  };
}

export const UpcomingGaugesPerDenomRequest = {
  encode(message: UpcomingGaugesPerDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesPerDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpcomingGaugesPerDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UpcomingGaugesPerDenomRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: UpcomingGaugesPerDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UpcomingGaugesPerDenomRequest>): UpcomingGaugesPerDenomRequest {
    const message = createBaseUpcomingGaugesPerDenomRequest();
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: UpcomingGaugesPerDenomRequestSDKType): UpcomingGaugesPerDenomRequest {
    return {
      denom: isSet(object.denom) ? object.denom : "",
      pagination: isSet(object.pagination) ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: UpcomingGaugesPerDenomRequest): UpcomingGaugesPerDenomRequestSDKType {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseUpcomingGaugesPerDenomResponse(): UpcomingGaugesPerDenomResponse {
  return {
    upcomingGauges: [],
    pagination: undefined
  };
}

export const UpcomingGaugesPerDenomResponse = {
  encode(message: UpcomingGaugesPerDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.upcomingGauges) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesPerDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpcomingGaugesPerDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.upcomingGauges.push(Gauge.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UpcomingGaugesPerDenomResponse {
    return {
      upcomingGauges: Array.isArray(object?.upcomingGauges) ? object.upcomingGauges.map((e: any) => Gauge.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: UpcomingGaugesPerDenomResponse): unknown {
    const obj: any = {};

    if (message.upcomingGauges) {
      obj.upcomingGauges = message.upcomingGauges.map(e => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.upcomingGauges = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UpcomingGaugesPerDenomResponse>): UpcomingGaugesPerDenomResponse {
    const message = createBaseUpcomingGaugesPerDenomResponse();
    message.upcomingGauges = object.upcomingGauges?.map(e => Gauge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: UpcomingGaugesPerDenomResponseSDKType): UpcomingGaugesPerDenomResponse {
    return {
      upcomingGauges: Array.isArray(object?.upcoming_gauges) ? object.upcoming_gauges.map((e: any) => Gauge.fromSDK(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: UpcomingGaugesPerDenomResponse): UpcomingGaugesPerDenomResponseSDKType {
    const obj: any = {};

    if (message.upcomingGauges) {
      obj.upcoming_gauges = message.upcomingGauges.map(e => e ? Gauge.toSDK(e) : undefined);
    } else {
      obj.upcoming_gauges = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseRewardsEstRequest(): RewardsEstRequest {
  return {
    owner: "",
    lockIds: [],
    endEpoch: Long.ZERO
  };
}

export const RewardsEstRequest = {
  encode(message: RewardsEstRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    writer.uint32(18).fork();

    for (const v of message.lockIds) {
      writer.uint64(v);
    }

    writer.ldelim();

    if (!message.endEpoch.isZero()) {
      writer.uint32(24).int64(message.endEpoch);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardsEstRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsEstRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.lockIds.push((reader.uint64() as Long));
            }
          } else {
            message.lockIds.push((reader.uint64() as Long));
          }

          break;

        case 3:
          message.endEpoch = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RewardsEstRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      lockIds: Array.isArray(object?.lockIds) ? object.lockIds.map((e: any) => Long.fromString(e)) : [],
      endEpoch: isSet(object.endEpoch) ? Long.fromString(object.endEpoch) : Long.ZERO
    };
  },

  toJSON(message: RewardsEstRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);

    if (message.lockIds) {
      obj.lockIds = message.lockIds.map(e => (e || Long.UZERO).toString());
    } else {
      obj.lockIds = [];
    }

    message.endEpoch !== undefined && (obj.endEpoch = (message.endEpoch || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<RewardsEstRequest>): RewardsEstRequest {
    const message = createBaseRewardsEstRequest();
    message.owner = object.owner ?? "";
    message.lockIds = object.lockIds?.map(e => Long.fromValue(e)) || [];
    message.endEpoch = object.endEpoch !== undefined && object.endEpoch !== null ? Long.fromValue(object.endEpoch) : Long.ZERO;
    return message;
  },

  fromSDK(object: RewardsEstRequestSDKType): RewardsEstRequest {
    return {
      owner: isSet(object.owner) ? object.owner : "",
      lockIds: Array.isArray(object?.lock_ids) ? object.lock_ids.map((e: any) => e) : [],
      endEpoch: isSet(object.end_epoch) ? object.end_epoch : Long.ZERO
    };
  },

  toSDK(message: RewardsEstRequest): RewardsEstRequestSDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);

    if (message.lockIds) {
      obj.lock_ids = message.lockIds.map(e => e);
    } else {
      obj.lock_ids = [];
    }

    message.endEpoch !== undefined && (obj.end_epoch = message.endEpoch);
    return obj;
  }

};

function createBaseRewardsEstResponse(): RewardsEstResponse {
  return {
    coins: []
  };
}

export const RewardsEstResponse = {
  encode(message: RewardsEstResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardsEstResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsEstResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RewardsEstResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: RewardsEstResponse): unknown {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<RewardsEstResponse>): RewardsEstResponse {
    const message = createBaseRewardsEstResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: RewardsEstResponseSDKType): RewardsEstResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },

  toSDK(message: RewardsEstResponse): RewardsEstResponseSDKType {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  }

};

function createBaseQueryLockableDurationsRequest(): QueryLockableDurationsRequest {
  return {};
}

export const QueryLockableDurationsRequest = {
  encode(_: QueryLockableDurationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockableDurationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockableDurationsRequest();

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

  fromJSON(_: any): QueryLockableDurationsRequest {
    return {};
  },

  toJSON(_: QueryLockableDurationsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryLockableDurationsRequest>): QueryLockableDurationsRequest {
    const message = createBaseQueryLockableDurationsRequest();
    return message;
  },

  fromSDK(_: QueryLockableDurationsRequestSDKType): QueryLockableDurationsRequest {
    return {};
  },

  toSDK(_: QueryLockableDurationsRequest): QueryLockableDurationsRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryLockableDurationsResponse(): QueryLockableDurationsResponse {
  return {
    lockableDurations: []
  };
}

export const QueryLockableDurationsResponse = {
  encode(message: QueryLockableDurationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockableDurationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockableDurationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryLockableDurationsResponse {
    return {
      lockableDurations: Array.isArray(object?.lockableDurations) ? object.lockableDurations.map((e: any) => Duration.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryLockableDurationsResponse): unknown {
    const obj: any = {};

    if (message.lockableDurations) {
      obj.lockableDurations = message.lockableDurations.map(e => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.lockableDurations = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryLockableDurationsResponse>): QueryLockableDurationsResponse {
    const message = createBaseQueryLockableDurationsResponse();
    message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: QueryLockableDurationsResponseSDKType): QueryLockableDurationsResponse {
    return {
      lockableDurations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromSDK(e)) : []
    };
  },

  toSDK(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseSDKType {
    const obj: any = {};

    if (message.lockableDurations) {
      obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toSDK(e) : undefined);
    } else {
      obj.lockable_durations = [];
    }

    return obj;
  }

};