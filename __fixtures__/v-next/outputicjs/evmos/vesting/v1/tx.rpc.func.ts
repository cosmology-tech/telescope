import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
export const createCreateClawbackVestingAccount = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateClawbackVestingAccount>({
  clientResolver,
  typeUrl: MsgCreateClawbackVestingAccount.typeUrl,
  encoders: toEncoders(MsgCreateClawbackVestingAccount),
  converters: toConverters(MsgCreateClawbackVestingAccount)
});
export const createClawback = (clientResolver?: SigningClientResolver) => buildTx<MsgClawback>({
  clientResolver,
  typeUrl: MsgClawback.typeUrl,
  encoders: toEncoders(MsgClawback),
  converters: toConverters(MsgClawback)
});