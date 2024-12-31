import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { buildUseMutation } from "../../../react-query";
import { MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
export const createCreateClawbackVestingAccount = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateClawbackVestingAccount>({
  clientResolver,
  typeUrl: MsgCreateClawbackVestingAccount.typeUrl,
  encoders: toEncoders(MsgCreateClawbackVestingAccount),
  converters: toConverters(MsgCreateClawbackVestingAccount)
});
export const useCreateClawbackVestingAccount = buildUseMutation<MsgCreateClawbackVestingAccount, Error>({
  builderMutationFn: createCreateClawbackVestingAccount
});
export const createClawback = (clientResolver?: SigningClientResolver) => buildTx<MsgClawback>({
  clientResolver,
  typeUrl: MsgClawback.typeUrl,
  encoders: toEncoders(MsgClawback),
  converters: toConverters(MsgClawback)
});
export const useClawback = buildUseMutation<MsgClawback, Error>({
  builderMutationFn: createClawback
});