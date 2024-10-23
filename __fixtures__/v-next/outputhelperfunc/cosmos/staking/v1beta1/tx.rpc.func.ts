import { Description, DescriptionSDKType, CommissionRates, CommissionRatesSDKType } from "./staking";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateValidator, MsgCreateValidatorSDKType, MsgCreateValidatorResponse, MsgCreateValidatorResponseSDKType, MsgEditValidator, MsgEditValidatorSDKType, MsgEditValidatorResponse, MsgEditValidatorResponseSDKType, MsgDelegate, MsgDelegateSDKType, MsgDelegateResponse, MsgDelegateResponseSDKType, MsgBeginRedelegate, MsgBeginRedelegateSDKType, MsgBeginRedelegateResponse, MsgBeginRedelegateResponseSDKType, MsgUndelegate, MsgUndelegateSDKType, MsgUndelegateResponse, MsgUndelegateResponseSDKType } from "./tx";
export const createCreateValidator = (getSigningClient: SigningClientResolver) => buildTx<MsgCreateValidator>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCreateValidator.typeUrl,
  encoders: toEncoders(MsgCreateValidator),
  converters: toConverters(MsgCreateValidator)
});
export const useCreateValidator = buildUseMutation<MsgCreateValidator, Error>({
  builderMutationFn: createCreateValidator
});
export const createEditValidator = (getSigningClient: SigningClientResolver) => buildTx<MsgEditValidator>({
  getSigningClient: getSigningClient,
  typeUrl: MsgEditValidator.typeUrl,
  encoders: toEncoders(MsgEditValidator),
  converters: toConverters(MsgEditValidator)
});
export const useEditValidator = buildUseMutation<MsgEditValidator, Error>({
  builderMutationFn: createEditValidator
});
export const createDelegate = (getSigningClient: SigningClientResolver) => buildTx<MsgDelegate>({
  getSigningClient: getSigningClient,
  typeUrl: MsgDelegate.typeUrl,
  encoders: toEncoders(MsgDelegate),
  converters: toConverters(MsgDelegate)
});
export const useDelegate = buildUseMutation<MsgDelegate, Error>({
  builderMutationFn: createDelegate
});
export const createBeginRedelegate = (getSigningClient: SigningClientResolver) => buildTx<MsgBeginRedelegate>({
  getSigningClient: getSigningClient,
  typeUrl: MsgBeginRedelegate.typeUrl,
  encoders: toEncoders(MsgBeginRedelegate),
  converters: toConverters(MsgBeginRedelegate)
});
export const useBeginRedelegate = buildUseMutation<MsgBeginRedelegate, Error>({
  builderMutationFn: createBeginRedelegate
});
export const createUndelegate = (getSigningClient: SigningClientResolver) => buildTx<MsgUndelegate>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUndelegate.typeUrl,
  encoders: toEncoders(MsgUndelegate),
  converters: toConverters(MsgUndelegate)
});
export const useUndelegate = buildUseMutation<MsgUndelegate, Error>({
  builderMutationFn: createUndelegate
});