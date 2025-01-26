import { Description, DescriptionSDKType, CommissionRates, CommissionRatesSDKType } from "./staking";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { buildUseMutation } from "../../../react-query";
import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateValidator, MsgCreateValidatorSDKType, MsgCreateValidatorResponse, MsgCreateValidatorResponseSDKType, MsgEditValidator, MsgEditValidatorSDKType, MsgEditValidatorResponse, MsgEditValidatorResponseSDKType, MsgDelegate, MsgDelegateSDKType, MsgDelegateResponse, MsgDelegateResponseSDKType, MsgBeginRedelegate, MsgBeginRedelegateSDKType, MsgBeginRedelegateResponse, MsgBeginRedelegateResponseSDKType, MsgUndelegate, MsgUndelegateSDKType, MsgUndelegateResponse, MsgUndelegateResponseSDKType } from "./tx";
export const createCreateValidator = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateValidator>({
  clientResolver,
  typeUrl: MsgCreateValidator.typeUrl,
  encoders: toEncoders(MsgCreateValidator),
  converters: toConverters(MsgCreateValidator),
  deps: [MsgCreateValidator]
});
export const createEditValidator = (clientResolver?: SigningClientResolver) => buildTx<MsgEditValidator>({
  clientResolver,
  typeUrl: MsgEditValidator.typeUrl,
  encoders: toEncoders(MsgEditValidator),
  converters: toConverters(MsgEditValidator),
  deps: [MsgEditValidator]
});
export const createDelegate = (clientResolver?: SigningClientResolver) => buildTx<MsgDelegate>({
  clientResolver,
  typeUrl: MsgDelegate.typeUrl,
  encoders: toEncoders(MsgDelegate),
  converters: toConverters(MsgDelegate),
  deps: [MsgDelegate]
});
export const createBeginRedelegate = (clientResolver?: SigningClientResolver) => buildTx<MsgBeginRedelegate>({
  clientResolver,
  typeUrl: MsgBeginRedelegate.typeUrl,
  encoders: toEncoders(MsgBeginRedelegate),
  converters: toConverters(MsgBeginRedelegate),
  deps: [MsgBeginRedelegate]
});
export const createUndelegate = (clientResolver?: SigningClientResolver) => buildTx<MsgUndelegate>({
  clientResolver,
  typeUrl: MsgUndelegate.typeUrl,
  encoders: toEncoders(MsgUndelegate),
  converters: toConverters(MsgUndelegate),
  deps: [MsgUndelegate]
});