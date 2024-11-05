import { MsgCreateBid, MsgCloseBid } from "./bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./lease";
import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
export const createCreateBid = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateBid>({
  clientResolver,
  typeUrl: MsgCreateBid.typeUrl,
  encoders: toEncoders(MsgCreateBid),
  converters: toConverters(MsgCreateBid)
});
export const useCreateBid = buildUseMutation<MsgCreateBid, Error>({
  builderMutationFn: createCreateBid
});
export const createCloseBid = (clientResolver?: SigningClientResolver) => buildTx<MsgCloseBid>({
  clientResolver,
  typeUrl: MsgCloseBid.typeUrl,
  encoders: toEncoders(MsgCloseBid),
  converters: toConverters(MsgCloseBid)
});
export const useCloseBid = buildUseMutation<MsgCloseBid, Error>({
  builderMutationFn: createCloseBid
});
export const createWithdrawLease = (clientResolver?: SigningClientResolver) => buildTx<MsgWithdrawLease>({
  clientResolver,
  typeUrl: MsgWithdrawLease.typeUrl,
  encoders: toEncoders(MsgWithdrawLease),
  converters: toConverters(MsgWithdrawLease)
});
export const useWithdrawLease = buildUseMutation<MsgWithdrawLease, Error>({
  builderMutationFn: createWithdrawLease
});
export const createCreateLease = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateLease>({
  clientResolver,
  typeUrl: MsgCreateLease.typeUrl,
  encoders: toEncoders(MsgCreateLease),
  converters: toConverters(MsgCreateLease)
});
export const useCreateLease = buildUseMutation<MsgCreateLease, Error>({
  builderMutationFn: createCreateLease
});
export const createCloseLease = (clientResolver?: SigningClientResolver) => buildTx<MsgCloseLease>({
  clientResolver,
  typeUrl: MsgCloseLease.typeUrl,
  encoders: toEncoders(MsgCloseLease),
  converters: toConverters(MsgCloseLease)
});
export const useCloseLease = buildUseMutation<MsgCloseLease, Error>({
  builderMutationFn: createCloseLease
});