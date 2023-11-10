import { BaseVestingAccount, BaseVestingAccountAmino, BaseVestingAccountSDKType, Period, PeriodAmino, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "evmos.vesting.v1";
/**
 * ClawbackVestingAccount implements the VestingAccount interface. It provides
 * an account that can hold contributions subject to "lockup" (like a
 * PeriodicVestingAccount), or vesting which is subject to clawback
 * of unvested tokens, or a combination (tokens vest, but are still locked).
 */
export interface ClawbackVestingAccount {
  /**
   * base_vesting_account implements the VestingAccount interface. It contains
   * all the necessary fields needed for any vesting account implementation
   */
  baseVestingAccount?: BaseVestingAccount;
  /** funder_address specifies the account which can perform clawback */
  funderAddress: string;
  /** start_time defines the time at which the vesting period begins */
  startTime: Date;
  /** lockup_periods defines the unlocking schedule relative to the start_time */
  lockupPeriods: Period[];
  /** vesting_periods defines the vesting schedule relative to the start_time */
  vestingPeriods: Period[];
}
export interface ClawbackVestingAccountProtoMsg {
  typeUrl: "/evmos.vesting.v1.ClawbackVestingAccount";
  value: Uint8Array;
}
/**
 * ClawbackVestingAccount implements the VestingAccount interface. It provides
 * an account that can hold contributions subject to "lockup" (like a
 * PeriodicVestingAccount), or vesting which is subject to clawback
 * of unvested tokens, or a combination (tokens vest, but are still locked).
 */
export interface ClawbackVestingAccountAmino {
  /**
   * base_vesting_account implements the VestingAccount interface. It contains
   * all the necessary fields needed for any vesting account implementation
   */
  base_vesting_account?: BaseVestingAccountAmino;
  /** funder_address specifies the account which can perform clawback */
  funder_address: string;
  /** start_time defines the time at which the vesting period begins */
  start_time?: string;
  /** lockup_periods defines the unlocking schedule relative to the start_time */
  lockup_periods: PeriodAmino[];
  /** vesting_periods defines the vesting schedule relative to the start_time */
  vesting_periods: PeriodAmino[];
}
/**
 * ClawbackVestingAccount implements the VestingAccount interface. It provides
 * an account that can hold contributions subject to "lockup" (like a
 * PeriodicVestingAccount), or vesting which is subject to clawback
 * of unvested tokens, or a combination (tokens vest, but are still locked).
 */
export interface ClawbackVestingAccountSDKType {
  base_vesting_account?: BaseVestingAccountSDKType;
  funder_address: string;
  start_time: Date;
  lockup_periods: PeriodSDKType[];
  vesting_periods: PeriodSDKType[];
}
function createBaseClawbackVestingAccount(): ClawbackVestingAccount {
  return {
    baseVestingAccount: undefined,
    funderAddress: "",
    startTime: new Date(),
    lockupPeriods: [],
    vestingPeriods: []
  };
}
export const ClawbackVestingAccount = {
  typeUrl: "/evmos.vesting.v1.ClawbackVestingAccount",
  encode(message: ClawbackVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.funderAddress !== "") {
      writer.uint32(18).string(message.funderAddress);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.lockupPeriods) {
      Period.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ClawbackVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClawbackVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.funderAddress = reader.string();
          break;
        case 3:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lockupPeriods.push(Period.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 5:
          message.vestingPeriods.push(Period.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClawbackVestingAccount {
    const obj = createBaseClawbackVestingAccount();
    if (isSet(object.baseVestingAccount)) obj.baseVestingAccount = BaseVestingAccount.fromJSON(object.baseVestingAccount);
    if (isSet(object.funderAddress)) obj.funderAddress = String(object.funderAddress);
    if (isSet(object.startTime)) obj.startTime = new Date(object.startTime);
    if (Array.isArray(object?.lockupPeriods)) obj.lockupPeriods = object.lockupPeriods.map((e: any) => Period.fromJSON(e));
    if (Array.isArray(object?.vestingPeriods)) obj.vestingPeriods = object.vestingPeriods.map((e: any) => Period.fromJSON(e));
    return obj;
  },
  toJSON(message: ClawbackVestingAccount): unknown {
    const obj: any = {};
    message.baseVestingAccount !== undefined && (obj.baseVestingAccount = message.baseVestingAccount ? BaseVestingAccount.toJSON(message.baseVestingAccount) : undefined);
    message.funderAddress !== undefined && (obj.funderAddress = message.funderAddress);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    if (message.lockupPeriods) {
      obj.lockupPeriods = message.lockupPeriods.map(e => e ? Period.toJSON(e) : undefined);
    } else {
      obj.lockupPeriods = [];
    }
    if (message.vestingPeriods) {
      obj.vestingPeriods = message.vestingPeriods.map(e => e ? Period.toJSON(e) : undefined);
    } else {
      obj.vestingPeriods = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ClawbackVestingAccount>): ClawbackVestingAccount {
    const message = createBaseClawbackVestingAccount();
    if (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromPartial(object.baseVestingAccount);
    }
    message.funderAddress = object.funderAddress ?? "";
    message.startTime = object.startTime ?? undefined;
    message.lockupPeriods = object.lockupPeriods?.map(e => Period.fromPartial(e)) || [];
    message.vestingPeriods = object.vestingPeriods?.map(e => Period.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ClawbackVestingAccountSDKType): ClawbackVestingAccount {
    return {
      baseVestingAccount: object.base_vesting_account ? BaseVestingAccount.fromSDK(object.base_vesting_account) : undefined,
      funderAddress: object?.funder_address,
      startTime: object.start_time ?? undefined,
      lockupPeriods: Array.isArray(object?.lockup_periods) ? object.lockup_periods.map((e: any) => Period.fromSDK(e)) : [],
      vestingPeriods: Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e: any) => Period.fromSDK(e)) : []
    };
  },
  toSDK(message: ClawbackVestingAccount): ClawbackVestingAccountSDKType {
    const obj: any = {};
    message.baseVestingAccount !== undefined && (obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toSDK(message.baseVestingAccount) : undefined);
    obj.funder_address = message.funderAddress;
    message.startTime !== undefined && (obj.start_time = message.startTime ?? undefined);
    if (message.lockupPeriods) {
      obj.lockup_periods = message.lockupPeriods.map(e => e ? Period.toSDK(e) : undefined);
    } else {
      obj.lockup_periods = [];
    }
    if (message.vestingPeriods) {
      obj.vesting_periods = message.vestingPeriods.map(e => e ? Period.toSDK(e) : undefined);
    } else {
      obj.vesting_periods = [];
    }
    return obj;
  },
  fromAmino(object: ClawbackVestingAccountAmino): ClawbackVestingAccount {
    return {
      baseVestingAccount: object?.base_vesting_account ? BaseVestingAccount.fromAmino(object.base_vesting_account) : undefined,
      funderAddress: object.funder_address,
      startTime: object?.start_time ? fromTimestamp(Timestamp.fromAmino(object.start_time)) : undefined,
      lockupPeriods: Array.isArray(object?.lockup_periods) ? object.lockup_periods.map((e: any) => Period.fromAmino(e)) : [],
      vestingPeriods: Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e: any) => Period.fromAmino(e)) : []
    };
  },
  toAmino(message: ClawbackVestingAccount, useInterfaces: boolean = true): ClawbackVestingAccountAmino {
    const obj: any = {};
    obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount, useInterfaces) : undefined;
    obj.funder_address = message.funderAddress;
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    if (message.lockupPeriods) {
      obj.lockup_periods = message.lockupPeriods.map(e => e ? Period.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.lockup_periods = [];
    }
    if (message.vestingPeriods) {
      obj.vesting_periods = message.vestingPeriods.map(e => e ? Period.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.vesting_periods = [];
    }
    return obj;
  },
  fromProtoMsg(message: ClawbackVestingAccountProtoMsg, useInterfaces: boolean = true): ClawbackVestingAccount {
    return ClawbackVestingAccount.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ClawbackVestingAccount): Uint8Array {
    return ClawbackVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: ClawbackVestingAccount): ClawbackVestingAccountProtoMsg {
    return {
      typeUrl: "/evmos.vesting.v1.ClawbackVestingAccount",
      value: ClawbackVestingAccount.encode(message).finish()
    };
  }
};