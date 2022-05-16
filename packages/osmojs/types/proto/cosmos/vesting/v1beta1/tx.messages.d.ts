import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx";
export declare const messages: {
    createVestingAccount(value: MsgCreateVestingAccount): {
        typeUrl: string;
        value: MsgCreateVestingAccount;
    };
    createPermanentLockedAccount(value: MsgCreatePermanentLockedAccount): {
        typeUrl: string;
        value: MsgCreatePermanentLockedAccount;
    };
    createPeriodicVestingAccount(value: MsgCreatePeriodicVestingAccount): {
        typeUrl: string;
        value: MsgCreatePeriodicVestingAccount;
    };
};
