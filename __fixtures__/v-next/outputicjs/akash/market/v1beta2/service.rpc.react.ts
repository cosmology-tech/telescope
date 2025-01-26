import { MsgCreateBid, MsgCloseBid } from "./bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./lease";
import { buildUseMutation } from "../../../react-query";
import { createCreateBid, createCloseBid, createWithdrawLease, createCreateLease, createCloseLease } from "./service.rpc.func.ts";
export const useCreateBid = buildUseMutation<MsgCreateBid, Error>({
  builderMutationFn: createCreateBid
});
export const useCloseBid = buildUseMutation<MsgCloseBid, Error>({
  builderMutationFn: createCloseBid
});
export const useWithdrawLease = buildUseMutation<MsgWithdrawLease, Error>({
  builderMutationFn: createWithdrawLease
});
export const useCreateLease = buildUseMutation<MsgCreateLease, Error>({
  builderMutationFn: createCreateLease
});
export const useCloseLease = buildUseMutation<MsgCloseLease, Error>({
  builderMutationFn: createCloseLease
});