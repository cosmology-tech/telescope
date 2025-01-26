import { buildUseMutation } from "../../../react-query";
import { MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
import { createCreateClawbackVestingAccount, createClawback } from "./tx.rpc.func";
export const useCreateClawbackVestingAccount = buildUseMutation<MsgCreateClawbackVestingAccount, Error>({
  builderMutationFn: createCreateClawbackVestingAccount
});
export const useClawback = buildUseMutation<MsgClawback, Error>({
  builderMutationFn: createClawback
});