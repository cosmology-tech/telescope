import { Duration, DurationAmino } from "../../google/protobuf/duration";
import { Coin, CoinAmino } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockAmino } from "./lock";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface MsgLockTokens {
  owner: string;
  duration: Duration;
  coins: Coin[];
}
export interface MsgLockTokensProtoMsg {
  typeUrl: "/osmosis.lockup.MsgLockTokens";
  value: Uint8Array;
}
export interface MsgLockTokensAmino {
  owner: string;
  duration: DurationAmino;
  coins: CoinAmino[];
}
export interface MsgLockTokensAminoMsg {
  type: "osmosis/lockup/lock-tokens";
  value: MsgLockTokensAmino;
}
export interface MsgLockTokensResponse {
  iD: bigint;
}
export interface MsgLockTokensResponseProtoMsg {
  typeUrl: "/osmosis.lockup.MsgLockTokensResponse";
  value: Uint8Array;
}
export interface MsgLockTokensResponseAmino {
  ID: string;
}
export interface MsgLockTokensResponseAminoMsg {
  type: "osmosis/lockup/lock-tokens-response";
  value: MsgLockTokensResponseAmino;
}
export interface MsgBeginUnlockingAll {
  owner: string;
}
export interface MsgBeginUnlockingAllProtoMsg {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll";
  value: Uint8Array;
}
export interface MsgBeginUnlockingAllAmino {
  owner: string;
}
export interface MsgBeginUnlockingAllAminoMsg {
  type: "osmosis/lockup/begin-unlock-tokens";
  value: MsgBeginUnlockingAllAmino;
}
export interface MsgBeginUnlockingAllResponse {
  unlocks: PeriodLock[];
}
export interface MsgBeginUnlockingAllResponseProtoMsg {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse";
  value: Uint8Array;
}
export interface MsgBeginUnlockingAllResponseAmino {
  unlocks: PeriodLockAmino[];
}
export interface MsgBeginUnlockingAllResponseAminoMsg {
  type: "osmosis/lockup/begin-unlocking-all-response";
  value: MsgBeginUnlockingAllResponseAmino;
}
export interface MsgBeginUnlocking {
  owner: string;
  iD: bigint;
  /** Amount of unlocking coins. Unlock all if not set. */
  coins: Coin[];
}
export interface MsgBeginUnlockingProtoMsg {
  typeUrl: "/osmosis.lockup.MsgBeginUnlocking";
  value: Uint8Array;
}
export interface MsgBeginUnlockingAmino {
  owner: string;
  ID: string;
  /** Amount of unlocking coins. Unlock all if not set. */
  coins: CoinAmino[];
}
export interface MsgBeginUnlockingAminoMsg {
  type: "osmosis/lockup/begin-unlock-period-lock";
  value: MsgBeginUnlockingAmino;
}
export interface MsgBeginUnlockingResponse {
  success: boolean;
}
export interface MsgBeginUnlockingResponseProtoMsg {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse";
  value: Uint8Array;
}
export interface MsgBeginUnlockingResponseAmino {
  success: boolean;
}
export interface MsgBeginUnlockingResponseAminoMsg {
  type: "osmosis/lockup/begin-unlocking-response";
  value: MsgBeginUnlockingResponseAmino;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockup {
  owner: string;
  iD: bigint;
  /**
   * duration to be set. fails if lower than the current duration, or is
   * unlocking
   */
  duration: Duration;
}
export interface MsgExtendLockupProtoMsg {
  typeUrl: "/osmosis.lockup.MsgExtendLockup";
  value: Uint8Array;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockupAmino {
  owner: string;
  ID: string;
  /**
   * duration to be set. fails if lower than the current duration, or is
   * unlocking
   */
  duration: DurationAmino;
}
export interface MsgExtendLockupAminoMsg {
  type: "osmosis/lockup/extend-lockup";
  value: MsgExtendLockupAmino;
}
export interface MsgExtendLockupResponse {
  success: boolean;
}
export interface MsgExtendLockupResponseProtoMsg {
  typeUrl: "/osmosis.lockup.MsgExtendLockupResponse";
  value: Uint8Array;
}
export interface MsgExtendLockupResponseAmino {
  success: boolean;
}
export interface MsgExtendLockupResponseAminoMsg {
  type: "osmosis/lockup/extend-lockup-response";
  value: MsgExtendLockupResponseAmino;
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlock {
  owner: string;
  iD: bigint;
  /** Amount of unlocking coins. Unlock all if not set. */
  coins: Coin[];
}
export interface MsgForceUnlockProtoMsg {
  typeUrl: "/osmosis.lockup.MsgForceUnlock";
  value: Uint8Array;
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlockAmino {
  owner: string;
  ID: string;
  /** Amount of unlocking coins. Unlock all if not set. */
  coins: CoinAmino[];
}
export interface MsgForceUnlockAminoMsg {
  type: "osmosis/lockup/force-unlock";
  value: MsgForceUnlockAmino;
}
export interface MsgForceUnlockResponse {
  success: boolean;
}
export interface MsgForceUnlockResponseProtoMsg {
  typeUrl: "/osmosis.lockup.MsgForceUnlockResponse";
  value: Uint8Array;
}
export interface MsgForceUnlockResponseAmino {
  success: boolean;
}
export interface MsgForceUnlockResponseAminoMsg {
  type: "osmosis/lockup/force-unlock-response";
  value: MsgForceUnlockResponseAmino;
}
function createBaseMsgLockTokens(): MsgLockTokens {
  return {
    owner: "",
    duration: Duration.fromPartial({}),
    coins: []
  };
}
export const MsgLockTokens = {
  typeUrl: "/osmosis.lockup.MsgLockTokens",
  aminoType: "osmosis/lockup/lock-tokens",
  encode(message: MsgLockTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLockTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgLockTokens>): MsgLockTokens {
    const message = createBaseMsgLockTokens();
    message.owner = object.owner ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgLockTokensAmino): MsgLockTokens {
    const message = createBaseMsgLockTokens();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgLockTokens): MsgLockTokensAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: MsgLockTokensAminoMsg): MsgLockTokens {
    return MsgLockTokens.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLockTokens): MsgLockTokensAminoMsg {
    return {
      type: "osmosis/lockup/lock-tokens",
      value: MsgLockTokens.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLockTokensProtoMsg): MsgLockTokens {
    return MsgLockTokens.decode(message.value);
  },
  toProto(message: MsgLockTokens): Uint8Array {
    return MsgLockTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgLockTokens): MsgLockTokensProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgLockTokens",
      value: MsgLockTokens.encode(message).finish()
    };
  }
};
function createBaseMsgLockTokensResponse(): MsgLockTokensResponse {
  return {
    iD: BigInt(0)
  };
}
export const MsgLockTokensResponse = {
  typeUrl: "/osmosis.lockup.MsgLockTokensResponse",
  aminoType: "osmosis/lockup/lock-tokens-response",
  encode(message: MsgLockTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iD !== BigInt(0)) {
      writer.uint32(8).uint64(message.iD);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLockTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iD = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgLockTokensResponse>): MsgLockTokensResponse {
    const message = createBaseMsgLockTokensResponse();
    message.iD = object.iD !== undefined && object.iD !== null ? BigInt(object.iD.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgLockTokensResponseAmino): MsgLockTokensResponse {
    const message = createBaseMsgLockTokensResponse();
    if (object.ID !== undefined && object.ID !== null) {
      message.iD = BigInt(object.ID);
    }
    return message;
  },
  toAmino(message: MsgLockTokensResponse): MsgLockTokensResponseAmino {
    const obj: any = {};
    obj.ID = message.iD !== BigInt(0) ? message.iD?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgLockTokensResponseAminoMsg): MsgLockTokensResponse {
    return MsgLockTokensResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLockTokensResponse): MsgLockTokensResponseAminoMsg {
    return {
      type: "osmosis/lockup/lock-tokens-response",
      value: MsgLockTokensResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLockTokensResponseProtoMsg): MsgLockTokensResponse {
    return MsgLockTokensResponse.decode(message.value);
  },
  toProto(message: MsgLockTokensResponse): Uint8Array {
    return MsgLockTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLockTokensResponse): MsgLockTokensResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgLockTokensResponse",
      value: MsgLockTokensResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBeginUnlockingAll(): MsgBeginUnlockingAll {
  return {
    owner: ""
  };
}
export const MsgBeginUnlockingAll = {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
  aminoType: "osmosis/lockup/begin-unlock-tokens",
  encode(message: MsgBeginUnlockingAll, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlockingAll {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlockingAll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBeginUnlockingAll>): MsgBeginUnlockingAll {
    const message = createBaseMsgBeginUnlockingAll();
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgBeginUnlockingAllAmino): MsgBeginUnlockingAll {
    const message = createBaseMsgBeginUnlockingAll();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgBeginUnlockingAllAminoMsg): MsgBeginUnlockingAll {
    return MsgBeginUnlockingAll.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllAminoMsg {
    return {
      type: "osmosis/lockup/begin-unlock-tokens",
      value: MsgBeginUnlockingAll.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBeginUnlockingAllProtoMsg): MsgBeginUnlockingAll {
    return MsgBeginUnlockingAll.decode(message.value);
  },
  toProto(message: MsgBeginUnlockingAll): Uint8Array {
    return MsgBeginUnlockingAll.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
      value: MsgBeginUnlockingAll.encode(message).finish()
    };
  }
};
function createBaseMsgBeginUnlockingAllResponse(): MsgBeginUnlockingAllResponse {
  return {
    unlocks: []
  };
}
export const MsgBeginUnlockingAllResponse = {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse",
  aminoType: "osmosis/lockup/begin-unlocking-all-response",
  encode(message: MsgBeginUnlockingAllResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unlocks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlockingAllResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlockingAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unlocks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBeginUnlockingAllResponse>): MsgBeginUnlockingAllResponse {
    const message = createBaseMsgBeginUnlockingAllResponse();
    message.unlocks = object.unlocks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgBeginUnlockingAllResponseAmino): MsgBeginUnlockingAllResponse {
    const message = createBaseMsgBeginUnlockingAllResponse();
    message.unlocks = object.unlocks?.map(e => PeriodLock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseAmino {
    const obj: any = {};
    if (message.unlocks) {
      obj.unlocks = message.unlocks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.unlocks = message.unlocks;
    }
    return obj;
  },
  fromAminoMsg(object: MsgBeginUnlockingAllResponseAminoMsg): MsgBeginUnlockingAllResponse {
    return MsgBeginUnlockingAllResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseAminoMsg {
    return {
      type: "osmosis/lockup/begin-unlocking-all-response",
      value: MsgBeginUnlockingAllResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBeginUnlockingAllResponseProtoMsg): MsgBeginUnlockingAllResponse {
    return MsgBeginUnlockingAllResponse.decode(message.value);
  },
  toProto(message: MsgBeginUnlockingAllResponse): Uint8Array {
    return MsgBeginUnlockingAllResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse",
      value: MsgBeginUnlockingAllResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBeginUnlocking(): MsgBeginUnlocking {
  return {
    owner: "",
    iD: BigInt(0),
    coins: []
  };
}
export const MsgBeginUnlocking = {
  typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
  aminoType: "osmosis/lockup/begin-unlock-period-lock",
  encode(message: MsgBeginUnlocking, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.iD !== BigInt(0)) {
      writer.uint32(16).uint64(message.iD);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlocking {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlocking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.iD = reader.uint64();
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBeginUnlocking>): MsgBeginUnlocking {
    const message = createBaseMsgBeginUnlocking();
    message.owner = object.owner ?? "";
    message.iD = object.iD !== undefined && object.iD !== null ? BigInt(object.iD.toString()) : BigInt(0);
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgBeginUnlockingAmino): MsgBeginUnlocking {
    const message = createBaseMsgBeginUnlocking();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.ID !== undefined && object.ID !== null) {
      message.iD = BigInt(object.ID);
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgBeginUnlocking): MsgBeginUnlockingAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.ID = message.iD !== BigInt(0) ? message.iD?.toString() : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: MsgBeginUnlockingAminoMsg): MsgBeginUnlocking {
    return MsgBeginUnlocking.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBeginUnlocking): MsgBeginUnlockingAminoMsg {
    return {
      type: "osmosis/lockup/begin-unlock-period-lock",
      value: MsgBeginUnlocking.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBeginUnlockingProtoMsg): MsgBeginUnlocking {
    return MsgBeginUnlocking.decode(message.value);
  },
  toProto(message: MsgBeginUnlocking): Uint8Array {
    return MsgBeginUnlocking.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginUnlocking): MsgBeginUnlockingProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
      value: MsgBeginUnlocking.encode(message).finish()
    };
  }
};
function createBaseMsgBeginUnlockingResponse(): MsgBeginUnlockingResponse {
  return {
    success: false
  };
}
export const MsgBeginUnlockingResponse = {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse",
  aminoType: "osmosis/lockup/begin-unlocking-response",
  encode(message: MsgBeginUnlockingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlockingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlockingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBeginUnlockingResponse>): MsgBeginUnlockingResponse {
    const message = createBaseMsgBeginUnlockingResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromAmino(object: MsgBeginUnlockingResponseAmino): MsgBeginUnlockingResponse {
    const message = createBaseMsgBeginUnlockingResponse();
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseAmino {
    const obj: any = {};
    obj.success = message.success === false ? undefined : message.success;
    return obj;
  },
  fromAminoMsg(object: MsgBeginUnlockingResponseAminoMsg): MsgBeginUnlockingResponse {
    return MsgBeginUnlockingResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseAminoMsg {
    return {
      type: "osmosis/lockup/begin-unlocking-response",
      value: MsgBeginUnlockingResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBeginUnlockingResponseProtoMsg): MsgBeginUnlockingResponse {
    return MsgBeginUnlockingResponse.decode(message.value);
  },
  toProto(message: MsgBeginUnlockingResponse): Uint8Array {
    return MsgBeginUnlockingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse",
      value: MsgBeginUnlockingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExtendLockup(): MsgExtendLockup {
  return {
    owner: "",
    iD: BigInt(0),
    duration: Duration.fromPartial({})
  };
}
export const MsgExtendLockup = {
  typeUrl: "/osmosis.lockup.MsgExtendLockup",
  aminoType: "osmosis/lockup/extend-lockup",
  encode(message: MsgExtendLockup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.iD !== BigInt(0)) {
      writer.uint32(16).uint64(message.iD);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExtendLockup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtendLockup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.iD = reader.uint64();
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgExtendLockup>): MsgExtendLockup {
    const message = createBaseMsgExtendLockup();
    message.owner = object.owner ?? "";
    message.iD = object.iD !== undefined && object.iD !== null ? BigInt(object.iD.toString()) : BigInt(0);
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },
  fromAmino(object: MsgExtendLockupAmino): MsgExtendLockup {
    const message = createBaseMsgExtendLockup();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.ID !== undefined && object.ID !== null) {
      message.iD = BigInt(object.ID);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    return message;
  },
  toAmino(message: MsgExtendLockup): MsgExtendLockupAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.ID = message.iD !== BigInt(0) ? message.iD?.toString() : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgExtendLockupAminoMsg): MsgExtendLockup {
    return MsgExtendLockup.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExtendLockup): MsgExtendLockupAminoMsg {
    return {
      type: "osmosis/lockup/extend-lockup",
      value: MsgExtendLockup.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExtendLockupProtoMsg): MsgExtendLockup {
    return MsgExtendLockup.decode(message.value);
  },
  toProto(message: MsgExtendLockup): Uint8Array {
    return MsgExtendLockup.encode(message).finish();
  },
  toProtoMsg(message: MsgExtendLockup): MsgExtendLockupProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgExtendLockup",
      value: MsgExtendLockup.encode(message).finish()
    };
  }
};
function createBaseMsgExtendLockupResponse(): MsgExtendLockupResponse {
  return {
    success: false
  };
}
export const MsgExtendLockupResponse = {
  typeUrl: "/osmosis.lockup.MsgExtendLockupResponse",
  aminoType: "osmosis/lockup/extend-lockup-response",
  encode(message: MsgExtendLockupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExtendLockupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtendLockupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgExtendLockupResponse>): MsgExtendLockupResponse {
    const message = createBaseMsgExtendLockupResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromAmino(object: MsgExtendLockupResponseAmino): MsgExtendLockupResponse {
    const message = createBaseMsgExtendLockupResponse();
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message: MsgExtendLockupResponse): MsgExtendLockupResponseAmino {
    const obj: any = {};
    obj.success = message.success === false ? undefined : message.success;
    return obj;
  },
  fromAminoMsg(object: MsgExtendLockupResponseAminoMsg): MsgExtendLockupResponse {
    return MsgExtendLockupResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExtendLockupResponse): MsgExtendLockupResponseAminoMsg {
    return {
      type: "osmosis/lockup/extend-lockup-response",
      value: MsgExtendLockupResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExtendLockupResponseProtoMsg): MsgExtendLockupResponse {
    return MsgExtendLockupResponse.decode(message.value);
  },
  toProto(message: MsgExtendLockupResponse): Uint8Array {
    return MsgExtendLockupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExtendLockupResponse): MsgExtendLockupResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgExtendLockupResponse",
      value: MsgExtendLockupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgForceUnlock(): MsgForceUnlock {
  return {
    owner: "",
    iD: BigInt(0),
    coins: []
  };
}
export const MsgForceUnlock = {
  typeUrl: "/osmosis.lockup.MsgForceUnlock",
  aminoType: "osmosis/lockup/force-unlock",
  encode(message: MsgForceUnlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.iD !== BigInt(0)) {
      writer.uint32(16).uint64(message.iD);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgForceUnlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceUnlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.iD = reader.uint64();
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgForceUnlock>): MsgForceUnlock {
    const message = createBaseMsgForceUnlock();
    message.owner = object.owner ?? "";
    message.iD = object.iD !== undefined && object.iD !== null ? BigInt(object.iD.toString()) : BigInt(0);
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgForceUnlockAmino): MsgForceUnlock {
    const message = createBaseMsgForceUnlock();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.ID !== undefined && object.ID !== null) {
      message.iD = BigInt(object.ID);
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgForceUnlock): MsgForceUnlockAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.ID = message.iD !== BigInt(0) ? message.iD?.toString() : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: MsgForceUnlockAminoMsg): MsgForceUnlock {
    return MsgForceUnlock.fromAmino(object.value);
  },
  toAminoMsg(message: MsgForceUnlock): MsgForceUnlockAminoMsg {
    return {
      type: "osmosis/lockup/force-unlock",
      value: MsgForceUnlock.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgForceUnlockProtoMsg): MsgForceUnlock {
    return MsgForceUnlock.decode(message.value);
  },
  toProto(message: MsgForceUnlock): Uint8Array {
    return MsgForceUnlock.encode(message).finish();
  },
  toProtoMsg(message: MsgForceUnlock): MsgForceUnlockProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgForceUnlock",
      value: MsgForceUnlock.encode(message).finish()
    };
  }
};
function createBaseMsgForceUnlockResponse(): MsgForceUnlockResponse {
  return {
    success: false
  };
}
export const MsgForceUnlockResponse = {
  typeUrl: "/osmosis.lockup.MsgForceUnlockResponse",
  aminoType: "osmosis/lockup/force-unlock-response",
  encode(message: MsgForceUnlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgForceUnlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceUnlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgForceUnlockResponse>): MsgForceUnlockResponse {
    const message = createBaseMsgForceUnlockResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromAmino(object: MsgForceUnlockResponseAmino): MsgForceUnlockResponse {
    const message = createBaseMsgForceUnlockResponse();
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message: MsgForceUnlockResponse): MsgForceUnlockResponseAmino {
    const obj: any = {};
    obj.success = message.success === false ? undefined : message.success;
    return obj;
  },
  fromAminoMsg(object: MsgForceUnlockResponseAminoMsg): MsgForceUnlockResponse {
    return MsgForceUnlockResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgForceUnlockResponse): MsgForceUnlockResponseAminoMsg {
    return {
      type: "osmosis/lockup/force-unlock-response",
      value: MsgForceUnlockResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgForceUnlockResponseProtoMsg): MsgForceUnlockResponse {
    return MsgForceUnlockResponse.decode(message.value);
  },
  toProto(message: MsgForceUnlockResponse): Uint8Array {
    return MsgForceUnlockResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgForceUnlockResponse): MsgForceUnlockResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgForceUnlockResponse",
      value: MsgForceUnlockResponse.encode(message).finish()
    };
  }
};