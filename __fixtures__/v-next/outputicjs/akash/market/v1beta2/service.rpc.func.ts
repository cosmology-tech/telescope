import { MsgCreateBid, MsgCloseBid } from "./bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./lease";
import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
export const createCreateBid = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateBid>({
  clientResolver,
  typeUrl: MsgCreateBid.typeUrl,
  encoders: toEncoders(MsgCreateBid),
  converters: toConverters(MsgCreateBid)
});
export const createCloseBid = (clientResolver?: SigningClientResolver) => buildTx<MsgCloseBid>({
  clientResolver,
  typeUrl: MsgCloseBid.typeUrl,
  encoders: toEncoders(MsgCloseBid),
  converters: toConverters(MsgCloseBid)
});
export const createWithdrawLease = (clientResolver?: SigningClientResolver) => buildTx<MsgWithdrawLease>({
  clientResolver,
  typeUrl: MsgWithdrawLease.typeUrl,
  encoders: toEncoders(MsgWithdrawLease),
  converters: toConverters(MsgWithdrawLease)
});
export const createCreateLease = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateLease>({
  clientResolver,
  typeUrl: MsgCreateLease.typeUrl,
  encoders: toEncoders(MsgCreateLease),
  converters: toConverters(MsgCreateLease)
});
export const createCloseLease = (clientResolver?: SigningClientResolver) => buildTx<MsgCloseLease>({
  clientResolver,
  typeUrl: MsgCloseLease.typeUrl,
  encoders: toEncoders(MsgCloseLease),
  converters: toConverters(MsgCloseLease)
});