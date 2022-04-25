import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking } from "./tx";
export declare const fromJSON: {
    lockTokens(value: any): {
        typeUrl: string;
        value: MsgLockTokens;
    };
    beginUnlockingAll(value: any): {
        typeUrl: string;
        value: MsgBeginUnlockingAll;
    };
    beginUnlocking(value: any): {
        typeUrl: string;
        value: MsgBeginUnlocking;
    };
};
