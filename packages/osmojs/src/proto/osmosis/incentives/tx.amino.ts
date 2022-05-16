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
          duration: (distributeTo.duration * 1_000_000_000).toString(),
          timestamp: distributeTo.timestamp
        },
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        startTime,
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
            seconds: Long.fromNumber(Math.floor(parseInt(distributeTo.duration) / 1_000_000_000)),
            nanos: parseInt(distributeTo.duration) % 1_000_000_000
          },
          timestamp: distributeTo.timestamp
        },
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        startTime,
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