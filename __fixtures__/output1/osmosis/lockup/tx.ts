import { Duration } from "../../google/protobuf/duration";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock } from "./lock";
import { AminoMsg } from "@cosmjs/amino";
import { Long, toDuration, fromDuration, isSet, Exact, DeepPartial } from "@osmonauts/helpers";
import * as _m0 from "protobuf/minimal";
export interface MsgLockTokens {
  owner: string;
  duration: string;
  coins: Coin[];
}

function createBaseMsgLockTokens(): MsgLockTokens {
  return {
    owner: "",
    duration: undefined,
    coins: []
  };
}

export const MsgLockTokens = {
  encode(message: MsgLockTokens, writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.duration !== undefined) Duration.encode(toDuration(message.duration), writer.uint32(18).fork()).ldelim();

    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockTokens();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.duration = fromDuration(Duration.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MsgLockTokens {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? String(object.duration) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgLockTokens): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration);

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLockTokens>, I>>(object: I): MsgLockTokens {
    const message = createBaseMsgLockTokens();
    message.owner = object.owner ?? "";
    message.duration = object.duration ?? undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};
export interface MsgLockTokensResponse {
  ID: Long;
}

function createBaseMsgLockTokensResponse(): MsgLockTokensResponse {
  return {
    ID: Long.UZERO
  };
}

export const MsgLockTokensResponse = {
  encode(message: MsgLockTokensResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockTokensResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ID = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgLockTokensResponse {
    return {
      ID: isSet(object.ID) ? Long.fromString(object.ID) : Long.UZERO
    };
  },

  toJSON(message: MsgLockTokensResponse): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = (message.ID || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLockTokensResponse>, I>>(object: I): MsgLockTokensResponse {
    const message = createBaseMsgLockTokensResponse();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    return message;
  }

};
export interface MsgBeginUnlockingAll {
  owner: string;
}

function createBaseMsgBeginUnlockingAll(): MsgBeginUnlockingAll {
  return {
    owner: ""
  };
}

export const MsgBeginUnlockingAll = {
  encode(message: MsgBeginUnlockingAll, writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginUnlockingAll {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): MsgBeginUnlockingAll {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: MsgBeginUnlockingAll): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBeginUnlockingAll>, I>>(object: I): MsgBeginUnlockingAll {
    const message = createBaseMsgBeginUnlockingAll();
    message.owner = object.owner ?? "";
    return message;
  }

};
export interface MsgBeginUnlockingAllResponse {
  unlocks: PeriodLock[];
}

function createBaseMsgBeginUnlockingAllResponse(): MsgBeginUnlockingAllResponse {
  return {
    unlocks: []
  };
}

export const MsgBeginUnlockingAllResponse = {
  encode(message: MsgBeginUnlockingAllResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unlocks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginUnlockingAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): MsgBeginUnlockingAllResponse {
    return {
      unlocks: Array.isArray(object?.unlocks) ? object.unlocks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgBeginUnlockingAllResponse): unknown {
    const obj: any = {};

    if (message.unlocks) {
      obj.unlocks = message.unlocks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.unlocks = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBeginUnlockingAllResponse>, I>>(object: I): MsgBeginUnlockingAllResponse {
    const message = createBaseMsgBeginUnlockingAllResponse();
    message.unlocks = object.unlocks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  }

};
export interface MsgBeginUnlocking {
  owner: string;
  ID: Long;
  coins: Coin[];
}

function createBaseMsgBeginUnlocking(): MsgBeginUnlocking {
  return {
    owner: "",
    ID: Long.UZERO,
    coins: []
  };
}

export const MsgBeginUnlocking = {
  encode(message: MsgBeginUnlocking, writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.ID.isZero()) {
      writer.uint32(16).uint64(message.ID);
    }

    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginUnlocking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlocking();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.ID = (reader.uint64() as Long);
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

  fromJSON(object: any): MsgBeginUnlocking {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      ID: isSet(object.ID) ? Long.fromString(object.ID) : Long.UZERO,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgBeginUnlocking): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.ID !== undefined && (obj.ID = (message.ID || Long.UZERO).toString());

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBeginUnlocking>, I>>(object: I): MsgBeginUnlocking {
    const message = createBaseMsgBeginUnlocking();
    message.owner = object.owner ?? "";
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};
export interface MsgBeginUnlockingResponse {
  success: boolean;
}

function createBaseMsgBeginUnlockingResponse(): MsgBeginUnlockingResponse {
  return {
    success: false
  };
}

export const MsgBeginUnlockingResponse = {
  encode(message: MsgBeginUnlockingResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginUnlockingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): MsgBeginUnlockingResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false
    };
  },

  toJSON(message: MsgBeginUnlockingResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBeginUnlockingResponse>, I>>(object: I): MsgBeginUnlockingResponse {
    const message = createBaseMsgBeginUnlockingResponse();
    message.success = object.success ?? false;
    return message;
  }

};
export interface AminoMsgLockTokens extends AminoMsg {
  type: "osmosis/lockup/lock-tokens";
  value: {
    owner: string;
    duration: {
      seconds: string;
      nanos: number;
    };
    coins: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgBeginUnlockingAll extends AminoMsg {
  type: "osmosis/lockup/begin-unlocking-all";
  value: {
    owner: string;
  };
}
export interface AminoMsgBeginUnlocking extends AminoMsg {
  type: "osmosis/lockup/begin-unlocking";
  value: {
    owner: string;
    id: string;
    coins: {
      denom: string;
      amount: string;
    }[];
  };
}
export const AminoConverter = {
  "/osmosis.lockup.MsgLockTokens": {
    aminoType: "osmosis/lockup/lock-tokens",
    toAmino: ({
      owner,
      duration,
      coins
    }: MsgLockTokens): AminoMsgLockTokens["value"] => {
      return {
        owner,
        duration: {
          seconds: duration.seconds.toString(),
          nanos: duration.nanos
        },
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      owner,
      duration,
      coins
    }: AminoMsgLockTokens["value"]): MsgLockTokens => {
      return {
        owner,
        duration: {
          seconds: Long.fromString(duration.seconds),
          nanos: duration.nanos
        },
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/osmosis.lockup.MsgBeginUnlockingAll": {
    aminoType: "osmosis/lockup/begin-unlocking-all",
    toAmino: ({
      owner
    }: MsgBeginUnlockingAll): AminoMsgBeginUnlockingAll["value"] => {
      return {
        owner
      };
    },
    fromAmino: ({
      owner
    }: AminoMsgBeginUnlockingAll["value"]): MsgBeginUnlockingAll => {
      return {
        owner
      };
    }
  },
  "/osmosis.lockup.MsgBeginUnlocking": {
    aminoType: "osmosis/lockup/begin-unlocking",
    toAmino: ({
      owner,
      ID,
      coins
    }: MsgBeginUnlocking): AminoMsgBeginUnlocking["value"] => {
      return {
        owner,
        id: ID.toString(),
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      owner,
      id,
      coins
    }: AminoMsgBeginUnlocking["value"]): MsgBeginUnlocking => {
      return {
        owner,
        ID: Long.fromString(id),
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/osmosis.lockup.MsgLockTokens", MsgLockTokens], ["/osmosis.lockup.MsgBeginUnlockingAll", MsgBeginUnlockingAll], ["/osmosis.lockup.MsgBeginUnlocking", MsgBeginUnlocking]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    lockTokens(value: MsgLockTokens) {
      return {
        type_url: "/osmosis.lockup.MsgLockTokens",
        value: MsgLockTokens.encode(value).finish()
      };
    },

    beginUnlockingAll(value: MsgBeginUnlockingAll) {
      return {
        type_url: "/osmosis.lockup.MsgBeginUnlockingAll",
        value: MsgBeginUnlockingAll.encode(value).finish()
      };
    },

    beginUnlocking(value: MsgBeginUnlocking) {
      return {
        type_url: "/osmosis.lockup.MsgBeginUnlocking",
        value: MsgBeginUnlocking.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    lockTokens(value: MsgLockTokens) {
      return {
        typeUrl: "/osmosis.lockup.MsgLockTokens",
        value
      };
    },

    beginUnlockingAll(value: MsgBeginUnlockingAll) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
        value
      };
    },

    beginUnlocking(value: MsgBeginUnlocking) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
        value
      };
    }

  },
  toJSON: {
    lockTokens(value: MsgLockTokens) {
      return {
        typeUrl: "/osmosis.lockup.MsgLockTokens",
        value: MsgLockTokens.toJSON(value)
      };
    },

    beginUnlockingAll(value: MsgBeginUnlockingAll) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
        value: MsgBeginUnlockingAll.toJSON(value)
      };
    },

    beginUnlocking(value: MsgBeginUnlocking) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
        value: MsgBeginUnlocking.toJSON(value)
      };
    }

  },
  fromJSON: {
    lockTokens(value: any) {
      return {
        typeUrl: "/osmosis.lockup.MsgLockTokens",
        value: MsgLockTokens.fromJSON(value)
      };
    },

    beginUnlockingAll(value: any) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
        value: MsgBeginUnlockingAll.fromJSON(value)
      };
    },

    beginUnlocking(value: any) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
        value: MsgBeginUnlocking.fromJSON(value)
      };
    }

  },
  fromPartial: {
    lockTokens(value: MsgLockTokens) {
      return {
        typeUrl: "/osmosis.lockup.MsgLockTokens",
        value: MsgLockTokens.fromPartial(value)
      };
    },

    beginUnlockingAll(value: MsgBeginUnlockingAll) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
        value: MsgBeginUnlockingAll.fromPartial(value)
      };
    },

    beginUnlocking(value: MsgBeginUnlocking) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
        value: MsgBeginUnlocking.fromPartial(value)
      };
    }

  }
};