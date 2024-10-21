import { Description, DescriptionSDKType, CommissionRates, CommissionRatesSDKType } from "./staking";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateValidator, MsgCreateValidatorSDKType, MsgCreateValidatorResponse, MsgCreateValidatorResponseSDKType, MsgEditValidator, MsgEditValidatorSDKType, MsgEditValidatorResponse, MsgEditValidatorResponseSDKType, MsgDelegate, MsgDelegateSDKType, MsgDelegateResponse, MsgDelegateResponseSDKType, MsgBeginRedelegate, MsgBeginRedelegateSDKType, MsgBeginRedelegateResponse, MsgBeginRedelegateResponseSDKType, MsgUndelegate, MsgUndelegateSDKType, MsgUndelegateResponse, MsgUndelegateResponseSDKType } from "./tx";
export const createCreateValidator = (getSigningClient: SigningClientResolver) => buildTx<CreateValidator>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCreateValidator.typeUrl,
  encoders: toEncoders(CreateValidator),
  converters: toConverters(CreateValidator)
});
export const useCreateValidator = buildUseMutation<CreateValidator, Error>({
  builderMutationFn: createCreateValidator
});
export const createEditValidator = (getSigningClient: SigningClientResolver) => buildTx<EditValidator>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgEditValidator.typeUrl,
  encoders: toEncoders(EditValidator),
  converters: toConverters(EditValidator)
});
export const useEditValidator = buildUseMutation<EditValidator, Error>({
  builderMutationFn: createEditValidator
});
export const createDelegate = (getSigningClient: SigningClientResolver) => buildTx<Delegate>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgDelegate.typeUrl,
  encoders: toEncoders(Delegate),
  converters: toConverters(Delegate)
});
export const useDelegate = buildUseMutation<Delegate, Error>({
  builderMutationFn: createDelegate
});
export const createBeginRedelegate = (getSigningClient: SigningClientResolver) => buildTx<BeginRedelegate>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgBeginRedelegate.typeUrl,
  encoders: toEncoders(BeginRedelegate),
  converters: toConverters(BeginRedelegate)
});
export const useBeginRedelegate = buildUseMutation<BeginRedelegate, Error>({
  builderMutationFn: createBeginRedelegate
});
export const createUndelegate = (getSigningClient: SigningClientResolver) => buildTx<Undelegate>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgUndelegate.typeUrl,
  encoders: toEncoders(Undelegate),
  converters: toConverters(Undelegate)
});
export const useUndelegate = buildUseMutation<Undelegate, Error>({
  builderMutationFn: createUndelegate
});