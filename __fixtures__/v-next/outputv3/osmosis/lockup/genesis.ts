import { PeriodLock, PeriodLockAmino, PeriodLockSDKType, SyntheticLock, SyntheticLockAmino, SyntheticLockSDKType } from "./lock";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
export const protobufPackage = "osmosis.lockup";
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisState {
  lastLockId: bigint;
  locks: PeriodLock[];
  syntheticLocks: SyntheticLock[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.lockup.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisStateAmino {
  last_lock_id?: string;
  locks?: PeriodLockAmino[];
  synthetic_locks?: SyntheticLockAmino[];
}
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisStateSDKType {
  last_lock_id: bigint;
  locks: PeriodLockSDKType[];
  synthetic_locks: SyntheticLockSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    lastLockId: BigInt(0),
    locks: [],
    syntheticLocks: []
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.lockup.GenesisState",
  aminoType: "osmosis/lockup/genesis-state",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lastLockId !== BigInt(0)) {
      writer.uint32(8).uint64(message.lastLockId);
    }
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.syntheticLocks) {
      SyntheticLock.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastLockId = reader.uint64();
          break;
        case 2:
          message.locks.push(PeriodLock.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.syntheticLocks.push(SyntheticLock.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.lastLockId)) obj.lastLockId = BigInt(object.lastLockId.toString());
    if (Array.isArray(object?.locks)) obj.locks = object.locks.map((e: any) => PeriodLock.fromJSON(e));
    if (Array.isArray(object?.syntheticLocks)) obj.syntheticLocks = object.syntheticLocks.map((e: any) => SyntheticLock.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.lastLockId !== undefined && (obj.lastLockId = (message.lastLockId || BigInt(0)).toString());
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }
    if (message.syntheticLocks) {
      obj.syntheticLocks = message.syntheticLocks.map(e => e ? SyntheticLock.toJSON(e) : undefined);
    } else {
      obj.syntheticLocks = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.lastLockId !== undefined && object.lastLockId !== null) {
      message.lastLockId = BigInt(object.lastLockId.toString());
    }
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    message.syntheticLocks = object.syntheticLocks?.map(e => SyntheticLock.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      lastLockId: object?.last_lock_id,
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromSDK(e)) : [],
      syntheticLocks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e: any) => SyntheticLock.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    obj.last_lock_id = message.lastLockId;
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toSDK(e) : undefined);
    } else {
      obj.locks = [];
    }
    if (message.syntheticLocks) {
      obj.synthetic_locks = message.syntheticLocks.map(e => e ? SyntheticLock.toSDK(e) : undefined);
    } else {
      obj.synthetic_locks = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.last_lock_id !== undefined && object.last_lock_id !== null) {
      message.lastLockId = BigInt(object.last_lock_id);
    }
    message.locks = object.locks?.map(e => PeriodLock.fromAmino(e)) || [];
    message.syntheticLocks = object.synthetic_locks?.map(e => SyntheticLock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState, useInterfaces: boolean = true): GenesisStateAmino {
    const obj: any = {};
    obj.last_lock_id = message.lastLockId ? message.lastLockId.toString() : undefined;
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.locks = message.locks;
    }
    if (message.syntheticLocks) {
      obj.synthetic_locks = message.syntheticLocks.map(e => e ? SyntheticLock.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.synthetic_locks = message.syntheticLocks;
    }
    return obj;
  },
  fromProtoMsg(message: GenesisStateProtoMsg, useInterfaces: boolean = true): GenesisState {
    return GenesisState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};