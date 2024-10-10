//@ts-nocheck
import { QueryCondition, QueryConditionSDKType, lockQueryTypeFromJSON } from "../lockup/lock";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../helpers";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { MsgCreateGauge, MsgCreateGaugeSDKType, MsgAddToGauge, MsgAddToGaugeSDKType } from "./tx";
export interface MsgCreateGaugeAminoType extends AminoMsg {
  type: "osmosis/incentives/create-gauge";
  value: {
    is_perpetual: boolean;
    owner: string;
    distribute_to: {
      lock_query_type: number;
      denom: string;
      duration: {
        seconds: string;
        nanos: number;
      };
      timestamp: string;
    };
    coins: {
      denom: string;
      amount: string;
    }[];
    start_time: string;
    num_epochs_paid_over: string;
  };
}
export interface MsgAddToGaugeAminoType extends AminoMsg {
  type: "osmosis/incentives/add-to-gauge";
  value: {
    owner: string;
    gauge_id: string;
    rewards: {
      denom: string;
      amount: string;
    }[];
  };
}
export const AminoConverter = {
  "/osmosis.incentives.MsgCreateGauge": {
    aminoType: "osmosis/incentives/create-gauge",
    toAmino: ({
      isPerpetual,
      owner,
      distributeTo,
      coins,
      startTime,
      numEpochsPaidOver
    }: MsgCreateGauge): MsgCreateGaugeAminoType["value"] => {
      return {
        is_perpetual: omitDefault(isPerpetual),
        owner,
        distribute_to: {
          lock_query_type: distributeTo.lockQueryType,
          denom: distributeTo.denom,
          duration: (distributeTo.duration * 1_000_000_000).toString(),
          timestamp: distributeTo.timestamp
        },
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        start_time: startTime,
        num_epochs_paid_over: omitDefault(numEpochsPaidOver)?.toString?.()
      };
    },
    fromAmino: ({
      is_perpetual,
      owner,
      distribute_to,
      coins,
      start_time,
      num_epochs_paid_over
    }: MsgCreateGaugeAminoType["value"]): MsgCreateGauge => {
      return {
        isPerpetual: is_perpetual,
        owner,
        distributeTo: distribute_to == null ? distribute_to : {
          lockQueryType: distribute_to.lock_query_type == null ? distribute_to.lock_query_type : lockQueryTypeFromJSON(distribute_to.lock_query_type),
          denom: distribute_to.denom,
          duration: distribute_to.duration == null ? distribute_to.duration : {
            seconds: BigInt(Math.floor(parseInt(distribute_to.duration) / 1_000_000_000)),
            nanos: parseInt(distribute_to.duration) % 1_000_000_000
          },
          timestamp: distribute_to.timestamp
        },
        coins: coins.map?.(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        startTime: start_time,
        numEpochsPaidOver: num_epochs_paid_over == null ? num_epochs_paid_over : BigInt(num_epochs_paid_over)
      };
    }
  },
  "/osmosis.incentives.MsgAddToGauge": {
    aminoType: "osmosis/incentives/add-to-gauge",
    toAmino: ({
      owner,
      gaugeId,
      rewards
    }: MsgAddToGauge): MsgAddToGaugeAminoType["value"] => {
      return {
        owner,
        gauge_id: omitDefault(gaugeId)?.toString?.(),
        rewards: rewards.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      owner,
      gauge_id,
      rewards
    }: MsgAddToGaugeAminoType["value"]): MsgAddToGauge => {
      return {
        owner,
        gaugeId: gauge_id == null ? gauge_id : BigInt(gauge_id),
        rewards: rewards.map?.(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};