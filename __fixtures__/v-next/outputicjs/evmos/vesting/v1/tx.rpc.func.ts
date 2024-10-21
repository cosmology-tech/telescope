import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
export const createCreateClawbackVestingAccount = (getSigningClient: SigningClientResolver) => buildTx<MsgCreateClawbackVestingAccount>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCreateClawbackVestingAccount.typeUrl,
  encoders: toEncoders(MsgCreateClawbackVestingAccount),
  converters: toConverters(MsgCreateClawbackVestingAccount)
});
export const useCreateClawbackVestingAccount = buildUseMutation<MsgCreateClawbackVestingAccount, Error>({
  builderMutationFn: createCreateClawbackVestingAccount
});
export const createClawback = (getSigningClient: SigningClientResolver) => buildTx<MsgClawback>({
  getSigningClient: getSigningClient,
  typeUrl: MsgClawback.typeUrl,
  encoders: toEncoders(MsgClawback),
  converters: toConverters(MsgClawback)
});
export const useClawback = buildUseMutation<MsgClawback, Error>({
  builderMutationFn: createClawback
});