import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../../helpers";
export const protobufPackage = "ibc.applications.transfer.v1";
/** Allocation defines the spend limit for a particular port and channel */
export interface Allocation {
  /** the port on which the packet will be sent */
  sourcePort: string;
  /** the channel by which the packet will be sent */
  sourceChannel: string;
  /** spend limitation on the channel */
  spendLimit: Coin[];
  /** allow list of receivers, an empty allow list permits any receiver address */
  allowList: string[];
}
/** Allocation defines the spend limit for a particular port and channel */
export interface AllocationSDKType {
  source_port: string;
  source_channel: string;
  spend_limit: CoinSDKType[];
  allow_list: string[];
}
/**
 * TransferAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account for ibc transfer on a specific channel
 */
export interface TransferAuthorization {
  /** port and channel amounts */
  allocations: Allocation[];
}
/**
 * TransferAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account for ibc transfer on a specific channel
 */
export interface TransferAuthorizationSDKType {
  allocations: AllocationSDKType[];
}
function createBaseAllocation(): Allocation {
  return {
    sourcePort: "",
    sourceChannel: "",
    spendLimit: [],
    allowList: []
  };
}
export const Allocation = {
  encode(message: Allocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourcePort !== "") {
      writer.uint32(10).string(message.sourcePort);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(18).string(message.sourceChannel);
    }
    for (const v of message.spendLimit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.allowList) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Allocation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourcePort = reader.string();
          break;
        case 2:
          message.sourceChannel = reader.string();
          break;
        case 3:
          message.spendLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.allowList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Allocation {
    return {
      sourcePort: isSet(object.sourcePort) ? String(object.sourcePort) : "",
      sourceChannel: isSet(object.sourceChannel) ? String(object.sourceChannel) : "",
      spendLimit: Array.isArray(object?.spendLimit) ? object.spendLimit.map((e: any) => Coin.fromJSON(e)) : [],
      allowList: Array.isArray(object?.allowList) ? object.allowList.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Allocation): unknown {
    const obj: any = {};
    message.sourcePort !== undefined && (obj.sourcePort = message.sourcePort);
    message.sourceChannel !== undefined && (obj.sourceChannel = message.sourceChannel);
    if (message.spendLimit) {
      obj.spendLimit = message.spendLimit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.spendLimit = [];
    }
    if (message.allowList) {
      obj.allowList = message.allowList.map(e => e);
    } else {
      obj.allowList = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Allocation>): Allocation {
    const message = createBaseAllocation();
    message.sourcePort = object.sourcePort ?? "";
    message.sourceChannel = object.sourceChannel ?? "";
    message.spendLimit = object.spendLimit?.map(e => Coin.fromPartial(e)) || [];
    message.allowList = object.allowList?.map(e => e) || [];
    return message;
  },
  fromSDK(object: AllocationSDKType): Allocation {
    return {
      sourcePort: object?.source_port,
      sourceChannel: object?.source_channel,
      spendLimit: Array.isArray(object?.spend_limit) ? object.spend_limit.map((e: any) => Coin.fromSDK(e)) : [],
      allowList: Array.isArray(object?.allow_list) ? object.allow_list.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): AllocationSDKType {
    return {
      source_port: isSet(object.source_port) ? String(object.source_port) : "",
      source_channel: isSet(object.source_channel) ? String(object.source_channel) : "",
      spend_limit: Array.isArray(object?.spend_limit) ? object.spend_limit.map((e: any) => Coin.fromSDKJSON(e)) : [],
      allow_list: Array.isArray(object?.allow_list) ? object.allow_list.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: Allocation): AllocationSDKType {
    const obj: any = {};
    obj.source_port = message.sourcePort;
    obj.source_channel = message.sourceChannel;
    if (message.spendLimit) {
      obj.spend_limit = message.spendLimit.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.spend_limit = [];
    }
    if (message.allowList) {
      obj.allow_list = message.allowList.map(e => e);
    } else {
      obj.allow_list = [];
    }
    return obj;
  }
};
function createBaseTransferAuthorization(): TransferAuthorization {
  return {
    allocations: []
  };
}
export const TransferAuthorization = {
  encode(message: TransferAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allocations) {
      Allocation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TransferAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allocations.push(Allocation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TransferAuthorization {
    return {
      allocations: Array.isArray(object?.allocations) ? object.allocations.map((e: any) => Allocation.fromJSON(e)) : []
    };
  },
  toJSON(message: TransferAuthorization): unknown {
    const obj: any = {};
    if (message.allocations) {
      obj.allocations = message.allocations.map(e => e ? Allocation.toJSON(e) : undefined);
    } else {
      obj.allocations = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<TransferAuthorization>): TransferAuthorization {
    const message = createBaseTransferAuthorization();
    message.allocations = object.allocations?.map(e => Allocation.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: TransferAuthorizationSDKType): TransferAuthorization {
    return {
      allocations: Array.isArray(object?.allocations) ? object.allocations.map((e: any) => Allocation.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): TransferAuthorizationSDKType {
    return {
      allocations: Array.isArray(object?.allocations) ? object.allocations.map((e: any) => Allocation.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: TransferAuthorization): TransferAuthorizationSDKType {
    const obj: any = {};
    if (message.allocations) {
      obj.allocations = message.allocations.map(e => e ? Allocation.toSDK(e) : undefined);
    } else {
      obj.allocations = [];
    }
    return obj;
  }
};