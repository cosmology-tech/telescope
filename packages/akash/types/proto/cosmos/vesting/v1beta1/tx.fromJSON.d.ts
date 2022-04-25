import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx";
export declare const fromJSON: {
    createVestingAccount(value: any): {
        typeUrl: string;
        value: MsgCreateVestingAccount;
    };
    createPermanentLockedAccount(value: any): {
        typeUrl: string;
        value: MsgCreatePermanentLockedAccount;
    };
    createPeriodicVestingAccount(value: any): {
        typeUrl: string;
        value: MsgCreatePeriodicVestingAccount;
    };
};
