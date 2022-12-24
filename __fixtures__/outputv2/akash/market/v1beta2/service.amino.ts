/* eslint-disable */
import { OrderID, OrderIDAmino, OrderIDAminoType, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinAmino, DecCoinAminoType, DecCoinSDKType, Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BidID, BidIDAmino, BidIDAminoType, BidIDSDKType, MsgCreateBid, MsgCreateBidAmino, MsgCreateBidAminoType, MsgCreateBidSDKType, MsgCloseBid, MsgCloseBidAmino, MsgCloseBidAminoType, MsgCloseBidSDKType } from "./bid";
import { LeaseID, LeaseIDAmino, LeaseIDAminoType, LeaseIDSDKType, MsgWithdrawLease, MsgWithdrawLeaseAmino, MsgWithdrawLeaseAminoType, MsgWithdrawLeaseSDKType, MsgCreateLease, MsgCreateLeaseAmino, MsgCreateLeaseAminoType, MsgCreateLeaseSDKType, MsgCloseLease, MsgCloseLeaseAmino, MsgCloseLeaseAminoType, MsgCloseLeaseSDKType } from "./lease";
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