import { Description, DescriptionSDKType, CommissionRates, CommissionRatesSDKType } from "./staking";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { buildUseMutation } from "../../../react-query";
import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateValidator, MsgCreateValidatorSDKType, MsgCreateValidatorResponse, MsgCreateValidatorResponseSDKType, MsgEditValidator, MsgEditValidatorSDKType, MsgEditValidatorResponse, MsgEditValidatorResponseSDKType, MsgDelegate, MsgDelegateSDKType, MsgDelegateResponse, MsgDelegateResponseSDKType, MsgBeginRedelegate, MsgBeginRedelegateSDKType, MsgBeginRedelegateResponse, MsgBeginRedelegateResponseSDKType, MsgUndelegate, MsgUndelegateSDKType, MsgUndelegateResponse, MsgUndelegateResponseSDKType } from "./tx";
import { createCreateValidator, createEditValidator, createDelegate, createBeginRedelegate, createUndelegate } from "./tx.rpc.func.ts";
export const useCreateValidator = buildUseVueMutation<MsgCreateValidator, Error>({
  builderMutationFn: createCreateValidator
});
export const useEditValidator = buildUseVueMutation<MsgEditValidator, Error>({
  builderMutationFn: createEditValidator
});
export const useDelegate = buildUseVueMutation<MsgDelegate, Error>({
  builderMutationFn: createDelegate
});
export const useBeginRedelegate = buildUseVueMutation<MsgBeginRedelegate, Error>({
  builderMutationFn: createBeginRedelegate
});
export const useUndelegate = buildUseVueMutation<MsgUndelegate, Error>({
  builderMutationFn: createUndelegate
});