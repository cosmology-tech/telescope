import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../amino.helpers";
import { MsgCreateGauge, MsgAddToGauge, MsgCreateGaugeResponse, MsgAddToGaugeResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { QueryCondition } from "../../osmosis/lockup/lock";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Coin } from "../../cosmos/base/v1beta1/coin";
export interface AminoMsgCreateGauge extends AminoMsg {
  type: "osmosis/incentives/create-gauge";
  value: {
    isPerpetual: boolean;
    owner: string;
    distributeTo: {
      lockQueryType: number;
      denom: string;
      duration: string;
      timestamp: Date;
    };
    coins: {
      denom: string;
      amount: string;
    }[];
    startTime: Date;
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
          duration: distributeTo.duration,
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
          duration: distributeTo.duration,
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