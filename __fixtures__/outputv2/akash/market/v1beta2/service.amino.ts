/* eslint-disable */
import { OrderID, OrderIDAmino, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BidID, BidIDAmino, BidIDSDKType, MsgCreateBid, MsgCreateBidAmino, MsgCreateBidSDKType, MsgCloseBid, MsgCloseBidAmino, MsgCloseBidSDKType } from "./bid";
import { LeaseID, LeaseIDAmino, LeaseIDSDKType, MsgWithdrawLease, MsgWithdrawLeaseAmino, MsgWithdrawLeaseSDKType, MsgCreateLease, MsgCreateLeaseAmino, MsgCreateLeaseSDKType, MsgCloseLease, MsgCloseLeaseAmino, MsgCloseLeaseSDKType } from "./lease";
export const AminoConverter = {
  "/akash.market.v1beta2.MsgCreateBid": {
    aminoType: "/akash.market.v1beta2.MsgCreateBid",
    toAmino: MsgCreateBid.toAmino,
    fromAmino: MsgCreateBid.fromAmino
  },
  "/akash.market.v1beta2.MsgCloseBid": {
    aminoType: "/akash.market.v1beta2.MsgCloseBid",
    toAmino: MsgCloseBid.toAmino,
    fromAmino: MsgCloseBid.fromAmino
  },
  "/akash.market.v1beta2.MsgWithdrawLease": {
    aminoType: "/akash.market.v1beta2.MsgWithdrawLease",
    toAmino: MsgWithdrawLease.toAmino,
    fromAmino: MsgWithdrawLease.fromAmino
  },
  "/akash.market.v1beta2.MsgCreateLease": {
    aminoType: "/akash.market.v1beta2.MsgCreateLease",
    toAmino: MsgCreateLease.toAmino,
    fromAmino: MsgCreateLease.fromAmino
  },
  "/akash.market.v1beta2.MsgCloseLease": {
    aminoType: "/akash.market.v1beta2.MsgCloseLease",
    toAmino: MsgCloseLease.toAmino,
    fromAmino: MsgCloseLease.fromAmino
  }
};