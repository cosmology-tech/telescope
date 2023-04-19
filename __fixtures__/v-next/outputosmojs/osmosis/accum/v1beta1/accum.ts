import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.accum.v1beta1";
export interface AccumulatorContent {
  accumValue: DecCoin[];
  totalShares: string;
}
export interface AccumulatorContentSDKType {
  accum_value: DecCoinSDKType[];
  total_shares: string;
}
export interface Options {}
export interface OptionsSDKType {}
export interface Record {
  numShares: string;
  initAccumValue: DecCoin[];
  unclaimedRewards: DecCoin[];
  options?: Options;
}
export interface RecordSDKType {
  num_shares: string;
  init_accum_value: DecCoinSDKType[];
  unclaimed_rewards: DecCoinSDKType[];
  options?: OptionsSDKType;
}
function createBaseAccumulatorContent(): AccumulatorContent {
  return {
    accumValue: [],
    totalShares: ""
  };
}
export const AccumulatorContent = {
  encode(message: AccumulatorContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accumValue) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalShares !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.totalShares, 18).atomics);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AccumulatorContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccumulatorContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accumValue.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalShares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccumulatorContent {
    return {
      accumValue: Array.isArray(object?.accumValue) ? object.accumValue.map((e: any) => DecCoin.fromJSON(e)) : [],
      totalShares: isSet(object.totalShares) ? String(object.totalShares) : ""
    };
  },
  toJSON(message: AccumulatorContent): unknown {
    const obj: any = {};
    if (message.accumValue) {
      obj.accumValue = message.accumValue.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.accumValue = [];
    }
    message.totalShares !== undefined && (obj.totalShares = message.totalShares);
    return obj;
  },
  fromPartial(object: DeepPartial<AccumulatorContent>): AccumulatorContent {
    const message = createBaseAccumulatorContent();
    message.accumValue = object.accumValue?.map(e => DecCoin.fromPartial(e)) || [];
    message.totalShares = object.totalShares ?? "";
    return message;
  },
  fromSDK(object: AccumulatorContentSDKType): AccumulatorContent {
    return {
      accumValue: Array.isArray(object?.accum_value) ? object.accum_value.map((e: any) => DecCoin.fromSDK(e)) : [],
      totalShares: object?.total_shares
    };
  },
  fromSDKJSON(object: any): AccumulatorContentSDKType {
    return {
      accum_value: Array.isArray(object?.accum_value) ? object.accum_value.map((e: any) => DecCoin.fromSDKJSON(e)) : [],
      total_shares: isSet(object.total_shares) ? String(object.total_shares) : ""
    };
  },
  toSDK(message: AccumulatorContent): AccumulatorContentSDKType {
    const obj: any = {};
    if (message.accumValue) {
      obj.accum_value = message.accumValue.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.accum_value = [];
    }
    obj.total_shares = message.totalShares;
    return obj;
  }
};
function createBaseOptions(): Options {
  return {};
}
export const Options = {
  encode(_: Options, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Options {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptions();
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
  fromJSON(_: any): Options {
    return {};
  },
  toJSON(_: Options): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<Options>): Options {
    const message = createBaseOptions();
    return message;
  },
  fromSDK(_: OptionsSDKType): Options {
    return {};
  },
  fromSDKJSON(_: any): OptionsSDKType {
    return {};
  },
  toSDK(_: Options): OptionsSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseRecord(): Record {
  return {
    numShares: "",
    initAccumValue: [],
    unclaimedRewards: [],
    options: undefined
  };
}
export const Record = {
  encode(message: Record, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numShares !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.numShares, 18).atomics);
    }
    for (const v of message.initAccumValue) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.unclaimedRewards) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.options !== undefined) {
      Options.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Record {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numShares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.initAccumValue.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.unclaimedRewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.options = Options.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Record {
    return {
      numShares: isSet(object.numShares) ? String(object.numShares) : "",
      initAccumValue: Array.isArray(object?.initAccumValue) ? object.initAccumValue.map((e: any) => DecCoin.fromJSON(e)) : [],
      unclaimedRewards: Array.isArray(object?.unclaimedRewards) ? object.unclaimedRewards.map((e: any) => DecCoin.fromJSON(e)) : [],
      options: isSet(object.options) ? Options.fromJSON(object.options) : undefined
    };
  },
  toJSON(message: Record): unknown {
    const obj: any = {};
    message.numShares !== undefined && (obj.numShares = message.numShares);
    if (message.initAccumValue) {
      obj.initAccumValue = message.initAccumValue.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.initAccumValue = [];
    }
    if (message.unclaimedRewards) {
      obj.unclaimedRewards = message.unclaimedRewards.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.unclaimedRewards = [];
    }
    message.options !== undefined && (obj.options = message.options ? Options.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Record>): Record {
    const message = createBaseRecord();
    message.numShares = object.numShares ?? "";
    message.initAccumValue = object.initAccumValue?.map(e => DecCoin.fromPartial(e)) || [];
    message.unclaimedRewards = object.unclaimedRewards?.map(e => DecCoin.fromPartial(e)) || [];
    message.options = object.options !== undefined && object.options !== null ? Options.fromPartial(object.options) : undefined;
    return message;
  },
  fromSDK(object: RecordSDKType): Record {
    return {
      numShares: object?.num_shares,
      initAccumValue: Array.isArray(object?.init_accum_value) ? object.init_accum_value.map((e: any) => DecCoin.fromSDK(e)) : [],
      unclaimedRewards: Array.isArray(object?.unclaimed_rewards) ? object.unclaimed_rewards.map((e: any) => DecCoin.fromSDK(e)) : [],
      options: object.options ? Options.fromSDK(object.options) : undefined
    };
  },
  fromSDKJSON(object: any): RecordSDKType {
    return {
      num_shares: isSet(object.num_shares) ? String(object.num_shares) : "",
      init_accum_value: Array.isArray(object?.init_accum_value) ? object.init_accum_value.map((e: any) => DecCoin.fromSDKJSON(e)) : [],
      unclaimed_rewards: Array.isArray(object?.unclaimed_rewards) ? object.unclaimed_rewards.map((e: any) => DecCoin.fromSDKJSON(e)) : [],
      options: isSet(object.options) ? Options.fromSDKJSON(object.options) : undefined
    };
  },
  toSDK(message: Record): RecordSDKType {
    const obj: any = {};
    obj.num_shares = message.numShares;
    if (message.initAccumValue) {
      obj.init_accum_value = message.initAccumValue.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.init_accum_value = [];
    }
    if (message.unclaimedRewards) {
      obj.unclaimed_rewards = message.unclaimedRewards.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.unclaimed_rewards = [];
    }
    message.options !== undefined && (obj.options = message.options ? Options.toSDK(message.options) : undefined);
    return obj;
  }
};