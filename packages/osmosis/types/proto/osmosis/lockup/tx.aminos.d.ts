import { AminoMsg } from "@cosmjs/amino";
import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking } from "./tx";
export interface AminoMsgLockTokens extends AminoMsg {
    type: "osmosis/lockup/lock-tokens";
    value: {
        owner: string;
        duration: {
            seconds: string;
            nanos: number;
        };
        coins: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface AminoMsgBeginUnlockingAll extends AminoMsg {
    type: "osmosis/lockup/begin-unlocking-all";
    value: {
        owner: string;
    };
}
export interface AminoMsgBeginUnlocking extends AminoMsg {
    type: "osmosis/lockup/begin-unlocking";
    value: {
        owner: string;
        id: string;
        coins: {
            denom: string;
            amount: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/osmosis.lockup.MsgLockTokens": {
        aminoType: string;
        toAmino: ({ owner, duration, coins }: MsgLockTokens) => AminoMsgLockTokens["value"];
        fromAmino: ({ owner, duration, coins }: AminoMsgLockTokens["value"]) => MsgLockTokens;
    };
    "/osmosis.lockup.MsgBeginUnlockingAll": {
        aminoType: string;
        toAmino: ({ owner }: MsgBeginUnlockingAll) => AminoMsgBeginUnlockingAll["value"];
        fromAmino: ({ owner }: AminoMsgBeginUnlockingAll["value"]) => MsgBeginUnlockingAll;
    };
    "/osmosis.lockup.MsgBeginUnlocking": {
        aminoType: string;
        toAmino: ({ owner, ID, coins }: MsgBeginUnlocking) => AminoMsgBeginUnlocking["value"];
        fromAmino: ({ owner, id, coins }: AminoMsgBeginUnlocking["value"]) => MsgBeginUnlocking;
    };
};
