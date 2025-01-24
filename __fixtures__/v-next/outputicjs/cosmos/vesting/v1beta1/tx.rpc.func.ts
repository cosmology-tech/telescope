import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx";
export const createCreateVestingAccount = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateVestingAccount>({
  clientResolver,
  typeUrl: MsgCreateVestingAccount.typeUrl,
  encoders: toEncoders(MsgCreateVestingAccount),
  converters: toConverters(MsgCreateVestingAccount)
});
export const createCreatePermanentLockedAccount = (clientResolver?: SigningClientResolver) => buildTx<MsgCreatePermanentLockedAccount>({
  clientResolver,
  typeUrl: MsgCreatePermanentLockedAccount.typeUrl,
  encoders: toEncoders(MsgCreatePermanentLockedAccount),
  converters: toConverters(MsgCreatePermanentLockedAccount)
});
export const createCreatePeriodicVestingAccount = (clientResolver?: SigningClientResolver) => buildTx<MsgCreatePeriodicVestingAccount>({
  clientResolver,
  typeUrl: MsgCreatePeriodicVestingAccount.typeUrl,
  encoders: toEncoders(MsgCreatePeriodicVestingAccount),
  converters: toConverters(MsgCreatePeriodicVestingAccount)
});