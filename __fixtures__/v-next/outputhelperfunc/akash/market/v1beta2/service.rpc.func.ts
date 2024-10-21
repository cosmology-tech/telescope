import { OrderID, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BidID, BidIDSDKType, MsgCreateBid, MsgCreateBidSDKType, MsgCreateBidResponse, MsgCreateBidResponseSDKType, MsgCloseBid, MsgCloseBidSDKType, MsgCloseBidResponse, MsgCloseBidResponseSDKType } from "./bid";
import { LeaseID, LeaseIDSDKType, MsgWithdrawLease, MsgWithdrawLeaseSDKType, MsgWithdrawLeaseResponse, MsgWithdrawLeaseResponseSDKType, MsgCreateLease, MsgCreateLeaseSDKType, MsgCreateLeaseResponse, MsgCreateLeaseResponseSDKType, MsgCloseLease, MsgCloseLeaseSDKType, MsgCloseLeaseResponse, MsgCloseLeaseResponseSDKType } from "./lease";
import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
export const createCreateBid = (getSigningClient: SigningClientResolver) => buildTx<CreateBid>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCreateBid.typeUrl,
  encoders: toEncoders(CreateBid),
  converters: toConverters(CreateBid)
});
export const useCreateBid = buildUseMutation<CreateBid, Error>({
  builderMutationFn: createCreateBid
});
export const createCloseBid = (getSigningClient: SigningClientResolver) => buildTx<CloseBid>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCloseBid.typeUrl,
  encoders: toEncoders(CloseBid),
  converters: toConverters(CloseBid)
});
export const useCloseBid = buildUseMutation<CloseBid, Error>({
  builderMutationFn: createCloseBid
});
export const createWithdrawLease = (getSigningClient: SigningClientResolver) => buildTx<WithdrawLease>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgWithdrawLease.typeUrl,
  encoders: toEncoders(WithdrawLease),
  converters: toConverters(WithdrawLease)
});
export const useWithdrawLease = buildUseMutation<WithdrawLease, Error>({
  builderMutationFn: createWithdrawLease
});
export const createCreateLease = (getSigningClient: SigningClientResolver) => buildTx<CreateLease>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCreateLease.typeUrl,
  encoders: toEncoders(CreateLease),
  converters: toConverters(CreateLease)
});
export const useCreateLease = buildUseMutation<CreateLease, Error>({
  builderMutationFn: createCreateLease
});
export const createCloseLease = (getSigningClient: SigningClientResolver) => buildTx<CloseLease>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCloseLease.typeUrl,
  encoders: toEncoders(CloseLease),
  converters: toConverters(CloseLease)
});
export const useCloseLease = buildUseMutation<CloseLease, Error>({
  builderMutationFn: createCloseLease
});