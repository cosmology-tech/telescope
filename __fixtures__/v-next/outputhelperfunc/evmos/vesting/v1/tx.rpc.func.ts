import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Period, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountSDKType, MsgCreateClawbackVestingAccountResponse, MsgCreateClawbackVestingAccountResponseSDKType, MsgClawback, MsgClawbackSDKType, MsgClawbackResponse, MsgClawbackResponseSDKType } from "./tx";
export const createCreateClawbackVestingAccount = (getSigningClient: SigningClientResolver) => buildTx<CreateClawbackVestingAccount>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCreateClawbackVestingAccount.typeUrl,
  encoders: toEncoders(CreateClawbackVestingAccount),
  converters: toConverters(CreateClawbackVestingAccount)
});
export const useCreateClawbackVestingAccount = buildUseMutation<CreateClawbackVestingAccount, Error>({
  builderMutationFn: createCreateClawbackVestingAccount
});
export const createClawback = (getSigningClient: SigningClientResolver) => buildTx<Clawback>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgClawback.typeUrl,
  encoders: toEncoders(Clawback),
  converters: toConverters(Clawback)
});
export const useClawback = buildUseMutation<Clawback, Error>({
  builderMutationFn: createClawback
});