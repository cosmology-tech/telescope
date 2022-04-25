import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking } from "./tx";
export declare const messages: {
    lockTokens(value: MsgLockTokens): {
        typeUrl: string;
        value: MsgLockTokens;
    };
    beginUnlockingAll(value: MsgBeginUnlockingAll): {
        typeUrl: string;
        value: MsgBeginUnlockingAll;
    };
    beginUnlocking(value: MsgBeginUnlocking): {
        typeUrl: string;
        value: MsgBeginUnlocking;
    };
};
