import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool } from "./tx";
export declare const toJSON: {
    setWithdrawAddress(value: MsgSetWithdrawAddress): {
        typeUrl: string;
        value: unknown;
    };
    withdrawDelegatorReward(value: MsgWithdrawDelegatorReward): {
        typeUrl: string;
        value: unknown;
    };
    withdrawValidatorCommission(value: MsgWithdrawValidatorCommission): {
        typeUrl: string;
        value: unknown;
    };
    fundCommunityPool(value: MsgFundCommunityPool): {
        typeUrl: string;
        value: unknown;
    };
};
