import { buildUseMutation } from "../../../react-query";
import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx";
import { createCreateVestingAccount, createCreatePermanentLockedAccount, createCreatePeriodicVestingAccount } from "./tx.rpc.func.ts";
export const useCreateVestingAccount = buildUseMutation<MsgCreateVestingAccount, Error>({
  builderMutationFn: createCreateVestingAccount
});
export const useCreatePermanentLockedAccount = buildUseMutation<MsgCreatePermanentLockedAccount, Error>({
  builderMutationFn: createCreatePermanentLockedAccount
});
export const useCreatePeriodicVestingAccount = buildUseMutation<MsgCreatePeriodicVestingAccount, Error>({
  builderMutationFn: createCreatePeriodicVestingAccount
});