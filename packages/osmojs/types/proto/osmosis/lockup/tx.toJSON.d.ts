import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking } from "./tx";
export declare const toJSON: {
    lockTokens(value: MsgLockTokens): {
        typeUrl: string;
        value: unknown;
    };
    beginUnlockingAll(value: MsgBeginUnlockingAll): {
        typeUrl: string;
        value: unknown;
    };
    beginUnlocking(value: MsgBeginUnlocking): {
        typeUrl: string;
        value: unknown;
    };
};
