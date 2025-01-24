import { MsgCreateBid, MsgCloseBid } from "./bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./lease";
import { buildUseVueMutation } from "../../../vue-query";
import { createCreateBid, createCloseBid, createWithdrawLease, createCreateLease, createCloseLease } from "./service.rpc.func.ts";
export const useCreateBid = buildUseVueMutation<MsgCreateBid, Error>({
  builderMutationFn: createCreateBid
});
export const useCloseBid = buildUseVueMutation<MsgCloseBid, Error>({
  builderMutationFn: createCloseBid
});
export const useWithdrawLease = buildUseVueMutation<MsgWithdrawLease, Error>({
  builderMutationFn: createWithdrawLease
});
export const useCreateLease = buildUseVueMutation<MsgCreateLease, Error>({
  builderMutationFn: createCreateLease
});
export const useCloseLease = buildUseVueMutation<MsgCloseLease, Error>({
  builderMutationFn: createCloseLease
});