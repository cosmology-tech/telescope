import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx";
export declare const encoded: {
    createVestingAccount(value: MsgCreateVestingAccount): {
        type_url: string;
        value: Uint8Array;
    };
    createPermanentLockedAccount(value: MsgCreatePermanentLockedAccount): {
        type_url: string;
        value: Uint8Array;
    };
    createPeriodicVestingAccount(value: MsgCreatePeriodicVestingAccount): {
        type_url: string;
        value: Uint8Array;
    };
};
