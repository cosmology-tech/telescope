import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx";
export declare const toJSON: {
    createVestingAccount(value: MsgCreateVestingAccount): {
        typeUrl: string;
        value: unknown;
    };
    createPermanentLockedAccount(value: MsgCreatePermanentLockedAccount): {
        typeUrl: string;
        value: unknown;
    };
    createPeriodicVestingAccount(value: MsgCreatePeriodicVestingAccount): {
        typeUrl: string;
        value: unknown;
    };
};
