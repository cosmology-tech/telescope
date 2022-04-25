import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking } from "./tx";
export declare const encoded: {
    lockTokens(value: MsgLockTokens): {
        type_url: string;
        value: Uint8Array;
    };
    beginUnlockingAll(value: MsgBeginUnlockingAll): {
        type_url: string;
        value: Uint8Array;
    };
    beginUnlocking(value: MsgBeginUnlocking): {
        type_url: string;
        value: Uint8Array;
    };
};
