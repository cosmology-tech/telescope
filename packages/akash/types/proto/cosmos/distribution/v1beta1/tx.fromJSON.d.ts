import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool } from "./tx";
export declare const fromJSON: {
    setWithdrawAddress(value: any): {
        typeUrl: string;
        value: MsgSetWithdrawAddress;
    };
    withdrawDelegatorReward(value: any): {
        typeUrl: string;
        value: MsgWithdrawDelegatorReward;
    };
    withdrawValidatorCommission(value: any): {
        typeUrl: string;
        value: MsgWithdrawValidatorCommission;
    };
    fundCommunityPool(value: any): {
        typeUrl: string;
        value: MsgFundCommunityPool;
    };
};
