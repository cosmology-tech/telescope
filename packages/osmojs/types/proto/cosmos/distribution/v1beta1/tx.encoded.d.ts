import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool } from "./tx";
export declare const encoded: {
    setWithdrawAddress(value: MsgSetWithdrawAddress): {
        type_url: string;
        value: Uint8Array;
    };
    withdrawDelegatorReward(value: MsgWithdrawDelegatorReward): {
        type_url: string;
        value: Uint8Array;
    };
    withdrawValidatorCommission(value: MsgWithdrawValidatorCommission): {
        type_url: string;
        value: Uint8Array;
    };
    fundCommunityPool(value: MsgFundCommunityPool): {
        type_url: string;
        value: Uint8Array;
    };
};
