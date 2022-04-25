import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateBid, MsgCloseBid } from "../../../akash/market/v1beta2/bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "../../../akash/market/v1beta2/lease";
export interface AminoMsgCreateBid extends AminoMsg {
    type: "/akash.market.v1beta2.MsgCreateBid";
    value: {
        order: {
            owner: string;
            dseq: string;
            gseq: number;
            oseq: number;
        };
        provider: string;
        price: {
            denom: string;
            amount: string;
        };
        deposit: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgCloseBid extends AminoMsg {
    type: "/akash.market.v1beta2.MsgCloseBid";
    value: {
        bid_id: {
            owner: string;
            dseq: string;
            gseq: number;
            oseq: number;
            provider: string;
        };
    };
}
export interface AminoMsgWithdrawLease extends AminoMsg {
    type: "/akash.market.v1beta2.MsgWithdrawLease";
    value: {
        bid_id: {
            owner: string;
            dseq: string;
            gseq: number;
            oseq: number;
            provider: string;
        };
    };
}
export interface AminoMsgCreateLease extends AminoMsg {
    type: "/akash.market.v1beta2.MsgCreateLease";
    value: {
        bid_id: {
            owner: string;
            dseq: string;
            gseq: number;
            oseq: number;
            provider: string;
        };
    };
}
export interface AminoMsgCloseLease extends AminoMsg {
    type: "/akash.market.v1beta2.MsgCloseLease";
    value: {
        lease_id: {
            owner: string;
            dseq: string;
            gseq: number;
            oseq: number;
            provider: string;
        };
    };
}
export declare const AminoConverter: {
    "/akash.market.v1beta2.MsgCreateBid": {
        aminoType: string;
        toAmino: ({ order, provider, price, deposit }: MsgCreateBid) => AminoMsgCreateBid["value"];
        fromAmino: ({ order, provider, price, deposit }: AminoMsgCreateBid["value"]) => MsgCreateBid;
    };
    "/akash.market.v1beta2.MsgCloseBid": {
        aminoType: string;
        toAmino: ({ bidId }: MsgCloseBid) => AminoMsgCloseBid["value"];
        fromAmino: ({ bid_id }: AminoMsgCloseBid["value"]) => MsgCloseBid;
    };
    "/akash.market.v1beta2.MsgWithdrawLease": {
        aminoType: string;
        toAmino: ({ bidId }: MsgWithdrawLease) => AminoMsgWithdrawLease["value"];
        fromAmino: ({ bid_id }: AminoMsgWithdrawLease["value"]) => MsgWithdrawLease;
    };
    "/akash.market.v1beta2.MsgCreateLease": {
        aminoType: string;
        toAmino: ({ bidId }: MsgCreateLease) => AminoMsgCreateLease["value"];
        fromAmino: ({ bid_id }: AminoMsgCreateLease["value"]) => MsgCreateLease;
    };
    "/akash.market.v1beta2.MsgCloseLease": {
        aminoType: string;
        toAmino: ({ leaseId }: MsgCloseLease) => AminoMsgCloseLease["value"];
        fromAmino: ({ lease_id }: AminoMsgCloseLease["value"]) => MsgCloseLease;
    };
};
