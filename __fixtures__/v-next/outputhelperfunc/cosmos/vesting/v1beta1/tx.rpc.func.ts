import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodSDKType } from "./vesting";
import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateVestingAccount, MsgCreateVestingAccountSDKType, MsgCreateVestingAccountResponse, MsgCreateVestingAccountResponseSDKType, MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountSDKType, MsgCreatePermanentLockedAccountResponse, MsgCreatePermanentLockedAccountResponseSDKType, MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountSDKType, MsgCreatePeriodicVestingAccountResponse, MsgCreatePeriodicVestingAccountResponseSDKType } from "./tx";
export const createCreateVestingAccount = (getSigningClient: SigningClientResolver) => buildTx<CreateVestingAccount>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCreateVestingAccount.typeUrl,
  encoders: toEncoders(CreateVestingAccount),
  converters: toConverters(CreateVestingAccount)
});
export const useCreateVestingAccount = buildUseMutation<CreateVestingAccount, Error>({
  builderMutationFn: createCreateVestingAccount
});
export const createCreatePermanentLockedAccount = (getSigningClient: SigningClientResolver) => buildTx<CreatePermanentLockedAccount>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCreatePermanentLockedAccount.typeUrl,
  encoders: toEncoders(CreatePermanentLockedAccount),
  converters: toConverters(CreatePermanentLockedAccount)
});
export const useCreatePermanentLockedAccount = buildUseMutation<CreatePermanentLockedAccount, Error>({
  builderMutationFn: createCreatePermanentLockedAccount
});
export const createCreatePeriodicVestingAccount = (getSigningClient: SigningClientResolver) => buildTx<CreatePeriodicVestingAccount>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCreatePeriodicVestingAccount.typeUrl,
  encoders: toEncoders(CreatePeriodicVestingAccount),
  converters: toConverters(CreatePeriodicVestingAccount)
});
export const useCreatePeriodicVestingAccount = buildUseMutation<CreatePeriodicVestingAccount, Error>({
  builderMutationFn: createCreatePeriodicVestingAccount
});