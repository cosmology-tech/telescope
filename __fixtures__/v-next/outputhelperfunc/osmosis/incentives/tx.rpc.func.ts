import { QueryCondition, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { buildTx, ISigningClient } from "../../helper-func-types";
import { buildUseMutation } from "../../react-query";
import { SigningClientResolver } from "../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateGauge, MsgCreateGaugeSDKType, MsgCreateGaugeResponse, MsgCreateGaugeResponseSDKType, MsgAddToGauge, MsgAddToGaugeSDKType, MsgAddToGaugeResponse, MsgAddToGaugeResponseSDKType } from "./tx";
export const createCreateGauge = (getSigningClient: SigningClientResolver) => buildTx<CreateGauge>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCreateGauge.typeUrl,
  encoders: toEncoders(CreateGauge),
  converters: toConverters(CreateGauge)
});
export const useCreateGauge = buildUseMutation<CreateGauge, Error>({
  builderMutationFn: createCreateGauge
});
export const createAddToGauge = (getSigningClient: SigningClientResolver) => buildTx<AddToGauge>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgAddToGauge.typeUrl,
  encoders: toEncoders(AddToGauge),
  converters: toConverters(AddToGauge)
});
export const useAddToGauge = buildUseMutation<AddToGauge, Error>({
  builderMutationFn: createAddToGauge
});