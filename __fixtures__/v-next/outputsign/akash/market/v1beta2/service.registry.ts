import { OrderID, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BidID, BidIDSDKType, MsgCreateBid, MsgCreateBidSDKType, MsgCloseBid, MsgCloseBidSDKType } from "./bid";
import { LeaseID, LeaseIDSDKType, MsgWithdrawLease, MsgWithdrawLeaseSDKType, MsgCreateLease, MsgCreateLeaseSDKType, MsgCloseLease, MsgCloseLeaseSDKType } from "./lease";
import { TelescopeGeneratedType } from "../../../types";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType]> = [["/akash.market.v1beta2.MsgCreateBid", MsgCreateBid], ["/akash.market.v1beta2.MsgCloseBid", MsgCloseBid], ["/akash.market.v1beta2.MsgWithdrawLease", MsgWithdrawLease], ["/akash.market.v1beta2.MsgCreateLease", MsgCreateLease], ["/akash.market.v1beta2.MsgCloseLease", MsgCloseLease]];