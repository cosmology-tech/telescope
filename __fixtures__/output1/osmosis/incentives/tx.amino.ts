import { QueryCondition, lockQueryTypeFromJSON } from "../lockup/lock";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { Duration } from "../../google/protobuf/duration";
import { MsgCreateGauge, MsgAddToGauge } from "./tx";
export interface AminoMsgCreateGauge extends AminoMsg {
  type: "osmosis/incentives/create-gauge";
  value: {
    isPerpetual: boolean;
    owner: string;
    distributeTo: {
      lockQueryType: number;
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
    startTime: {
      seconds: string;
      nanos: number;
    };
    numEpochsPaidOver: string;
  };
}
export interface AminoMsgAddToGauge extends AminoMsg {
  type: "osmosis/incentives/add-to-gauge";
  value: {
    owner: string;
    gaugeId: string;
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
        isPerpetual,
        owner,
        distributeTo: {
          lockQueryType: distributeTo.lockQueryType,
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
        startTime: {
          seconds: startTime.seconds.toString(),
          nanos: startTime.nanos
        },
        numEpochsPaidOver: numEpochsPaidOver.toString()
      };
    },
    fromAmino: ({
      isPerpetual,
      owner,
      distributeTo,
      coins,
      startTime,
      numEpochsPaidOver
    }: AminoMsgCreateGauge["value"]): MsgCreateGauge => {
      return {
        isPerpetual,
        owner,
        distributeTo: {
          lockQueryType: lockQueryTypeFromJSON(distributeTo.lockQueryType),
          denom: distributeTo.denom,
          duration: {
            seconds: Long.fromString(distributeTo.duration.seconds),
            nanos: distributeTo.duration.nanos
          },
          timestamp: {
            seconds: Long.fromString(distributeTo.timestamp.seconds),
            nanos: distributeTo.timestamp.nanos
          }
        },
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        startTime: {
          seconds: Long.fromString(startTime.seconds),
          nanos: startTime.nanos
        },
        numEpochsPaidOver: Long.fromString(numEpochsPaidOver)
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
        gaugeId: gaugeId.toString(),
        rewards: rewards.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      owner,
      gaugeId,
      rewards
    }: AminoMsgAddToGauge["value"]): MsgAddToGauge => {
      return {
        owner,
        gaugeId: Long.fromString(gaugeId),
        rewards: rewards.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};