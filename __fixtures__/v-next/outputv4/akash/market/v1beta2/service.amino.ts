/* eslint-disable */
import { OrderID, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BidID, BidIDSDKType, MsgCreateBid, MsgCreateBidSDKType, MsgCloseBid, MsgCloseBidSDKType } from "./bid";
import { LeaseID, LeaseIDSDKType, MsgWithdrawLease, MsgWithdrawLeaseSDKType, MsgCreateLease, MsgCreateLeaseSDKType, MsgCloseLease, MsgCloseLeaseSDKType } from "./lease";
export const AminoConverter = {
  "/akash.market.v1beta2.MsgCreateBid": {
    aminoType: "akash/market/v1beta2/testonly-create-bid",
    toAmino: MsgCreateBid.toAmino,
    fromAmino: MsgCreateBid.fromAmino
  },
  "/akash.market.v1beta2.MsgCloseBid": {
    aminoType: "akash/market/v1beta2/testonly-close-bid",
    toAmino: MsgCloseBid.toAmino,
    fromAmino: MsgCloseBid.fromAmino
  },
  "/akash.market.v1beta2.MsgWithdrawLease": {
    aminoType: "akash/market/v1beta2/testonly-withdraw-lease",
    toAmino: MsgWithdrawLease.toAmino,
    fromAmino: MsgWithdrawLease.fromAmino
  },
  "/akash.market.v1beta2.MsgCreateLease": {
    aminoType: "akash/market/v1beta2/testonly-create-lease",
    toAmino: MsgCreateLease.toAmino,
    fromAmino: MsgCreateLease.fromAmino
  },
  "/akash.market.v1beta2.MsgCloseLease": {
    aminoType: "akash/market/v1beta2/testonly-close-lease",
    toAmino: MsgCloseLease.toAmino,
    fromAmino: MsgCloseLease.fromAmino
  }
};