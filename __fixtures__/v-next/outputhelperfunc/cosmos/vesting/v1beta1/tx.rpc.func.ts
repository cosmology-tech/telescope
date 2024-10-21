import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodSDKType } from "./vesting";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateVestingAccount, MsgCreateVestingAccountSDKType, MsgCreateVestingAccountResponse, MsgCreateVestingAccountResponseSDKType, MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountSDKType, MsgCreatePermanentLockedAccountResponse, MsgCreatePermanentLockedAccountResponseSDKType, MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountSDKType, MsgCreatePeriodicVestingAccountResponse, MsgCreatePeriodicVestingAccountResponseSDKType } from "./tx";
export const createCreateVestingAccount = (getSigningClient: SigningClientResolver) => buildTx<MsgCreateVestingAccount>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCreateVestingAccount.typeUrl,
  encoders: toEncoders(MsgCreateVestingAccount),
  converters: toConverters(MsgCreateVestingAccount)
});
export const useCreateVestingAccount = buildUseMutation<MsgCreateVestingAccount, Error>({
  builderMutationFn: createCreateVestingAccount
});
export const createCreatePermanentLockedAccount = (getSigningClient: SigningClientResolver) => buildTx<MsgCreatePermanentLockedAccount>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCreatePermanentLockedAccount.typeUrl,
  encoders: toEncoders(MsgCreatePermanentLockedAccount),
  converters: toConverters(MsgCreatePermanentLockedAccount)
});
export const useCreatePermanentLockedAccount = buildUseMutation<MsgCreatePermanentLockedAccount, Error>({
  builderMutationFn: createCreatePermanentLockedAccount
});
export const createCreatePeriodicVestingAccount = (getSigningClient: SigningClientResolver) => buildTx<MsgCreatePeriodicVestingAccount>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCreatePeriodicVestingAccount.typeUrl,
  encoders: toEncoders(MsgCreatePeriodicVestingAccount),
  converters: toConverters(MsgCreatePeriodicVestingAccount)
});
export const useCreatePeriodicVestingAccount = buildUseMutation<MsgCreatePeriodicVestingAccount, Error>({
  builderMutationFn: createCreatePeriodicVestingAccount
});