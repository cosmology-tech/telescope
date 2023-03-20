//@ts-nocheck
/* eslint-disable */
import { BaseVestingAccount, Period } from "../../../cosmos/vesting/v1beta1/vesting";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromTimestamp, fromJsonTimestamp, DeepPartial } from "../../../helpers";
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
  startTime?: Timestamp;

  /** lockup_periods defines the unlocking schedule relative to the start_time */
  lockupPeriods: Period[];

  /** vesting_periods defines the vesting schedule relative to the start_time */
  vestingPeriods: Period[];
}

function createBaseClawbackVestingAccount(): ClawbackVestingAccount {
  return {
    baseVestingAccount: undefined,
    funderAddress: "",
    startTime: undefined,
    lockupPeriods: [],
    vestingPeriods: []
  };
}

export const ClawbackVestingAccount = {
  encode(message: ClawbackVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }

    if (message.funderAddress !== "") {
      writer.uint32(18).string(message.funderAddress);
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.lockupPeriods) {
      Period.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.vestingPeriods) {
      Period.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClawbackVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClawbackVestingAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;

        case 2:
          message.funderAddress = reader.string();
          break;

        case 3:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;

        case 4:
          message.lockupPeriods.push(Period.decode(reader, reader.uint32()));
          break;

        case 5:
          message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClawbackVestingAccount {
    return {
      baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined,
      funderAddress: isSet(object.funderAddress) ? String(object.funderAddress) : "",
      startTime: isSet(object.startTime) ? fromTimestamp(fromJsonTimestamp(object.startTime)) : undefined,
      lockupPeriods: Array.isArray(object?.lockupPeriods) ? object.lockupPeriods.map((e: any) => Period.fromJSON(e)) : [],
      vestingPeriods: Array.isArray(object?.vestingPeriods) ? object.vestingPeriods.map((e: any) => Period.fromJSON(e)) : []
    };
  },

  toJSON(message: ClawbackVestingAccount): unknown {
    const obj: any = {};
    message.baseVestingAccount !== undefined && (obj.baseVestingAccount = message.baseVestingAccount ? BaseVestingAccount.toJSON(message.baseVestingAccount) : undefined);
    message.funderAddress !== undefined && (obj.funderAddress = message.funderAddress);
    message.startTime !== undefined && (obj.startTime = fromTimestamp(message.startTime).toISOString());

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
    message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
    message.funderAddress = object.funderAddress ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.lockupPeriods = object.lockupPeriods?.map(e => Period.fromPartial(e)) || [];
    message.vestingPeriods = object.vestingPeriods?.map(e => Period.fromPartial(e)) || [];
    return message;
  }

};