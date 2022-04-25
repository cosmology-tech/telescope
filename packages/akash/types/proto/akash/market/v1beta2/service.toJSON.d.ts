import { MsgCreateBid, MsgCloseBid } from "../../../akash/market/v1beta2/bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "../../../akash/market/v1beta2/lease";
export declare const toJSON: {
    createBid(value: MsgCreateBid): {
        typeUrl: string;
        value: unknown;
    };
    closeBid(value: MsgCloseBid): {
        typeUrl: string;
        value: unknown;
    };
    withdrawLease(value: MsgWithdrawLease): {
        typeUrl: string;
        value: unknown;
    };
    createLease(value: MsgCreateLease): {
        typeUrl: string;
        value: unknown;
    };
    closeLease(value: MsgCloseLease): {
        typeUrl: string;
        value: unknown;
    };
};
