import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool } from "./tx";
export declare const json: {
    setWithdrawAddress(value: MsgSetWithdrawAddress): {
        typeUrl: string;
        value: MsgSetWithdrawAddress;
    };
    withdrawDelegatorReward(value: MsgWithdrawDelegatorReward): {
        typeUrl: string;
        value: MsgWithdrawDelegatorReward;
    };
    withdrawValidatorCommission(value: MsgWithdrawValidatorCommission): {
        typeUrl: string;
        value: MsgWithdrawValidatorCommission;
    };
    fundCommunityPool(value: MsgFundCommunityPool): {
        typeUrl: string;
        value: MsgFundCommunityPool;
    };
};
