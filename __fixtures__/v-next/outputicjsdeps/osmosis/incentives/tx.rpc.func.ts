import { buildTx, SigningClientResolver } from "../../helper-func-types";
import { buildUseMutation } from "../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateGauge, MsgAddToGauge } from "./tx";
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