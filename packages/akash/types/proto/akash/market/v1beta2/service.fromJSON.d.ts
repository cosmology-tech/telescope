import { MsgCreateBid, MsgCloseBid } from "../../../akash/market/v1beta2/bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "../../../akash/market/v1beta2/lease";
export declare const fromJSON: {
    createBid(value: any): {
        typeUrl: string;
        value: MsgCreateBid;
    };
    closeBid(value: any): {
        typeUrl: string;
        value: MsgCloseBid;
    };
    withdrawLease(value: any): {
        typeUrl: string;
        value: MsgWithdrawLease;
    };
    createLease(value: any): {
        typeUrl: string;
        value: MsgCreateLease;
    };
    closeLease(value: any): {
        typeUrl: string;
        value: MsgCloseLease;
    };
};
