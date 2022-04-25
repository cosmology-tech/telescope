import { MsgCreateBid, MsgCloseBid } from "../../../akash/market/v1beta2/bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "../../../akash/market/v1beta2/lease";
export declare const encoded: {
    createBid(value: MsgCreateBid): {
        type_url: string;
        value: Uint8Array;
    };
    closeBid(value: MsgCloseBid): {
        type_url: string;
        value: Uint8Array;
    };
    withdrawLease(value: MsgWithdrawLease): {
        type_url: string;
        value: Uint8Array;
    };
    createLease(value: MsgCreateLease): {
        type_url: string;
        value: Uint8Array;
    };
    closeLease(value: MsgCloseLease): {
        type_url: string;
        value: Uint8Array;
    };
};
