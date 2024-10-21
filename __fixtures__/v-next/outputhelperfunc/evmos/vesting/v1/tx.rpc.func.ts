import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Period, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountSDKType, MsgCreateClawbackVestingAccountResponse, MsgCreateClawbackVestingAccountResponseSDKType, MsgClawback, MsgClawbackSDKType, MsgClawbackResponse, MsgClawbackResponseSDKType } from "./tx";
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