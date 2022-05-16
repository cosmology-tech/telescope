import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/osmosis.incentives.MsgCreateGauge": {
        aminoType: string;
        toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: MsgCreateGauge) => AminoMsgCreateGauge["value"];
        fromAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: AminoMsgCreateGauge["value"]) => MsgCreateGauge;
    };
    "/osmosis.incentives.MsgAddToGauge": {
        aminoType: string;
        toAmino: ({ owner, gaugeId, rewards }: MsgAddToGauge) => AminoMsgAddToGauge["value"];
        fromAmino: ({ owner, gaugeId, rewards }: AminoMsgAddToGauge["value"]) => MsgAddToGauge;
    };
};
