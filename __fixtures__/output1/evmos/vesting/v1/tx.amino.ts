import { Timestamp } from "../../../google/protobuf/timestamp";
import { Period } from "../../../cosmos/vesting/v1beta1/vesting";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
export interface AminoMsgCreateClawbackVestingAccount extends AminoMsg {
  type: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount";
  value: {
    from_address: string;
    to_address: string;
    start_time: {
      seconds: string;
      nanos: number;
    };
    lockup_periods: {
      length: string;
      amount: {
        denom: string;
        amount: string;
      }[];
    }[];
    vesting_periods: {
      length: string;
      amount: {
        denom: string;
        amount: string;
      }[];
    }[];
    merge: boolean;
  };
}
export interface AminoMsgClawback extends AminoMsg {
  type: "/evmos.vesting.v1.MsgClawback";
  value: {
    funder_address: string;
    account_address: string;
    dest_address: string;
  };
}
export const AminoConverter = {
  "/evmos.vesting.v1.MsgCreateClawbackVestingAccount": {
    aminoType: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount",
    toAmino: ({
      fromAddress,
      toAddress,
      startTime,
      lockupPeriods,
      vestingPeriods,
      merge
    }: MsgCreateClawbackVestingAccount): AminoMsgCreateClawbackVestingAccount["value"] => {
      return {
        from_address: fromAddress,
        to_address: toAddress,
        start_time: startTime,
        lockup_periods: lockupPeriods.map(el0 => ({
          length: el0.length.toString(),
          amount: el0.amount.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        vesting_periods: vestingPeriods.map(el0 => ({
          length: el0.length.toString(),
          amount: el0.amount.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        merge
      };
    },
    fromAmino: ({
      from_address,
      to_address,
      start_time,
      lockup_periods,
      vesting_periods,
      merge
    }: AminoMsgCreateClawbackVestingAccount["value"]): MsgCreateClawbackVestingAccount => {
      return {
        fromAddress: from_address,
        toAddress: to_address,
        startTime: start_time,
        lockupPeriods: lockup_periods.map(el0 => ({
          length: Long.fromString(el0.length),
          amount: el0.amount.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        vestingPeriods: vesting_periods.map(el0 => ({
          length: Long.fromString(el0.length),
          amount: el0.amount.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        merge
      };
    }
  },
  "/evmos.vesting.v1.MsgClawback": {
    aminoType: "/evmos.vesting.v1.MsgClawback",
    toAmino: ({
      funderAddress,
      accountAddress,
      destAddress
    }: MsgClawback): AminoMsgClawback["value"] => {
      return {
        funder_address: funderAddress,
        account_address: accountAddress,
        dest_address: destAddress
      };
    },
    fromAmino: ({
      funder_address,
      account_address,
      dest_address
    }: AminoMsgClawback["value"]): MsgClawback => {
      return {
        funderAddress: funder_address,
        accountAddress: account_address,
        destAddress: dest_address
      };
    }
  }
};