import { QueryCondition } from "../lockup/lock";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { Duration } from "../../google/protobuf/duration";
import { lockQueryTypeFromJSON, MsgCreateGauge, MsgAddToGauge } from "./tx";
export interface AminoMsgCreateGauge extends AminoMsg {
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
      timestamp: {
        seconds: string;
        nanos: number;
      };
    };
    coins: {
      denom: string;
      amount: string;
    }[];
    start_time: {
      seconds: string;
      nanos: number;
    };
    num_epochs_paid_over: string;
  };
}
export interface AminoMsgAddToGauge extends AminoMsg {
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
    }: MsgCreateGauge): AminoMsgCreateGauge["value"] => {
      return {
        is_perpetual: isPerpetual,
        owner,
        distribute_to: {
          lock_query_type: distributeTo.lockQueryType,
          denom: distributeTo.denom,
          duration: {
            seconds: distributeTo.duration.seconds.toString(),
            nanos: distributeTo.duration.nanos
          },
          timestamp: {
            seconds: distributeTo.timestamp.seconds.toString(),
            nanos: distributeTo.timestamp.nanos
          }
        },
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        start_time: {
          seconds: startTime.seconds.toString(),
          nanos: startTime.nanos
        },
        num_epochs_paid_over: numEpochsPaidOver.toString()
      };
    },
    fromAmino: ({
      is_perpetual,
      owner,
      distribute_to,
      coins,
      start_time,
      num_epochs_paid_over
    }: AminoMsgCreateGauge["value"]): MsgCreateGauge => {
      return {
        isPerpetual: is_perpetual,
        owner,
        distributeTo: {
          lockQueryType: lockQueryTypeFromJSON(distribute_to.lock_query_type),
          denom: distribute_to.denom,
          duration: {
            seconds: Long.fromString(distribute_to.duration.seconds),
            nanos: distribute_to.duration.nanos
          },
          timestamp: {
            seconds: Long.fromString(distribute_to.timestamp.seconds),
            nanos: distribute_to.timestamp.nanos
          }
        },
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        startTime: {
          seconds: Long.fromString(start_time.seconds),
          nanos: start_time.nanos
        },
        numEpochsPaidOver: Long.fromString(num_epochs_paid_over)
      };
    }
  },
  "/osmosis.incentives.MsgAddToGauge": {
    aminoType: "osmosis/incentives/add-to-gauge",
    toAmino: ({
      owner,
      gaugeId,
      rewards
    }: MsgAddToGauge): AminoMsgAddToGauge["value"] => {
      return {
        owner,
        gauge_id: gaugeId.toString(),
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
    }: AminoMsgAddToGauge["value"]): MsgAddToGauge => {
      return {
        owner,
        gaugeId: Long.fromString(gauge_id),
        rewards: rewards.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};