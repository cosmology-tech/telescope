import { MsgCreateBid, MsgCloseBid } from "../../../akash/market/v1beta2/bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "../../../akash/market/v1beta2/lease";
export declare const json: {
    createBid(value: MsgCreateBid): {
        typeUrl: string;
        value: MsgCreateBid;
    };
    closeBid(value: MsgCloseBid): {
        typeUrl: string;
        value: MsgCloseBid;
    };
    withdrawLease(value: MsgWithdrawLease): {
        typeUrl: string;
        value: MsgWithdrawLease;
    };
    createLease(value: MsgCreateLease): {
        typeUrl: string;
        value: MsgCreateLease;
    };
    closeLease(value: MsgCloseLease): {
        typeUrl: string;
        value: MsgCloseLease;
    };
};
