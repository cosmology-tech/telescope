import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { Msg, Rpc } from "./service";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateBidResponse, MsgCloseBidResponse, MsgCreateBid, MsgCloseBid } from "../../../akash/market/v1beta2/bid";
import { MsgWithdrawLeaseResponse, MsgCreateLeaseResponse, MsgCloseLeaseResponse, MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "../../../akash/market/v1beta2/lease";
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
export const AminoConverter = {
  "/akash.market.v1beta2.MsgCreateBid": {
    aminoType: "/akash.market.v1beta2.MsgCreateBid",
    toAmino: ({
      order,
      provider,
      price,
      deposit
    }: MsgCreateBid): AminoMsgCreateBid["value"] => {
      return {
        order: {
          owner: order.owner,
          dseq: order.dseq.toString(),
          gseq: order.gseq,
          oseq: order.oseq
        },
        provider,
        price: {
          denom: price.denom,
          amount: price.amount
        },
        deposit: {
          denom: deposit.denom,
          amount: Long.fromNumber(deposit.amount).toString()
        }
      };
    },
    fromAmino: ({
      order,
      provider,
      price,
      deposit
    }: AminoMsgCreateBid["value"]): MsgCreateBid => {
      return {
        order: {
          owner: order.owner,
          dseq: Long.fromString(order.dseq),
          gseq: order.gseq,
          oseq: order.oseq
        },
        provider,
        price: {
          denom: price.denom,
          amount: price.amount
        },
        deposit: {
          denom: deposit.denom,
          amount: deposit.amount
        }
      };
    }
  },
  "/akash.market.v1beta2.MsgCloseBid": {
    aminoType: "/akash.market.v1beta2.MsgCloseBid",
    toAmino: ({
      bidId
    }: MsgCloseBid): AminoMsgCloseBid["value"] => {
      return {
        bid_id: {
          owner: bidId.owner,
          dseq: bidId.dseq.toString(),
          gseq: bidId.gseq,
          oseq: bidId.oseq,
          provider: bidId.provider
        }
      };
    },
    fromAmino: ({
      bid_id
    }: AminoMsgCloseBid["value"]): MsgCloseBid => {
      return {
        bidId: {
          owner: bid_id.owner,
          dseq: Long.fromString(bid_id.dseq),
          gseq: bid_id.gseq,
          oseq: bid_id.oseq,
          provider: bid_id.provider
        }
      };
    }
  },
  "/akash.market.v1beta2.MsgWithdrawLease": {
    aminoType: "/akash.market.v1beta2.MsgWithdrawLease",
    toAmino: ({
      bidId
    }: MsgWithdrawLease): AminoMsgWithdrawLease["value"] => {
      return {
        bid_id: {
          owner: bidId.owner,
          dseq: bidId.dseq.toString(),
          gseq: bidId.gseq,
          oseq: bidId.oseq,
          provider: bidId.provider
        }
      };
    },
    fromAmino: ({
      bid_id
    }: AminoMsgWithdrawLease["value"]): MsgWithdrawLease => {
      return {
        bidId: {
          owner: bid_id.owner,
          dseq: Long.fromString(bid_id.dseq),
          gseq: bid_id.gseq,
          oseq: bid_id.oseq,
          provider: bid_id.provider
        }
      };
    }
  },
  "/akash.market.v1beta2.MsgCreateLease": {
    aminoType: "/akash.market.v1beta2.MsgCreateLease",
    toAmino: ({
      bidId
    }: MsgCreateLease): AminoMsgCreateLease["value"] => {
      return {
        bid_id: {
          owner: bidId.owner,
          dseq: bidId.dseq.toString(),
          gseq: bidId.gseq,
          oseq: bidId.oseq,
          provider: bidId.provider
        }
      };
    },
    fromAmino: ({
      bid_id
    }: AminoMsgCreateLease["value"]): MsgCreateLease => {
      return {
        bidId: {
          owner: bid_id.owner,
          dseq: Long.fromString(bid_id.dseq),
          gseq: bid_id.gseq,
          oseq: bid_id.oseq,
          provider: bid_id.provider
        }
      };
    }
  },
  "/akash.market.v1beta2.MsgCloseLease": {
    aminoType: "/akash.market.v1beta2.MsgCloseLease",
    toAmino: ({
      leaseId
    }: MsgCloseLease): AminoMsgCloseLease["value"] => {
      return {
        lease_id: {
          owner: leaseId.owner,
          dseq: leaseId.dseq.toString(),
          gseq: leaseId.gseq,
          oseq: leaseId.oseq,
          provider: leaseId.provider
        }
      };
    },
    fromAmino: ({
      lease_id
    }: AminoMsgCloseLease["value"]): MsgCloseLease => {
      return {
        leaseId: {
          owner: lease_id.owner,
          dseq: Long.fromString(lease_id.dseq),
          gseq: lease_id.gseq,
          oseq: lease_id.oseq,
          provider: lease_id.provider
        }
      };
    }
  }
};