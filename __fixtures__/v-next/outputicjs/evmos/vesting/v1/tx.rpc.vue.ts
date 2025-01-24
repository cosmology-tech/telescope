import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
import { createCreateClawbackVestingAccount, createClawback } from "./tx.rpc.func.ts";
export const useCreateClawbackVestingAccount = buildUseVueMutation<MsgCreateClawbackVestingAccount, Error>({
  builderMutationFn: createCreateClawbackVestingAccount
});
export const useClawback = buildUseVueMutation<MsgClawback, Error>({
  builderMutationFn: createClawback
});