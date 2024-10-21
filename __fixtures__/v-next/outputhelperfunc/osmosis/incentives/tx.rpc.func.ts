import { QueryCondition, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { buildTx, ISigningClient, SigningClientResolver } from "../../helper-func-types";
import { buildUseMutation } from "../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateGauge, MsgCreateGaugeSDKType, MsgCreateGaugeResponse, MsgCreateGaugeResponseSDKType, MsgAddToGauge, MsgAddToGaugeSDKType, MsgAddToGaugeResponse, MsgAddToGaugeResponseSDKType } from "./tx";
export const createCreateGauge = (getSigningClient: SigningClientResolver) => buildTx<MsgCreateGauge>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCreateGauge.typeUrl,
  encoders: toEncoders(MsgCreateGauge),
  converters: toConverters(MsgCreateGauge)
});
export const useCreateGauge = buildUseMutation<MsgCreateGauge, Error>({
  builderMutationFn: createCreateGauge
});
export const createAddToGauge = (getSigningClient: SigningClientResolver) => buildTx<MsgAddToGauge>({
  getSigningClient: getSigningClient,
  typeUrl: MsgAddToGauge.typeUrl,
  encoders: toEncoders(MsgAddToGauge),
  converters: toConverters(MsgAddToGauge)
});
export const useAddToGauge = buildUseMutation<MsgAddToGauge, Error>({
  builderMutationFn: createAddToGauge
});