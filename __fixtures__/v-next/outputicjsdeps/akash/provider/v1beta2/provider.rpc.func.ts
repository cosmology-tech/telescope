import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
export const createCreateProvider = (getSigningClient: SigningClientResolver) => buildTx<MsgCreateProvider>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCreateProvider.typeUrl,
  encoders: toEncoders(MsgCreateProvider),
  converters: toConverters(MsgCreateProvider)
});
export const useCreateProvider = buildUseMutation<MsgCreateProvider, Error>({
  builderMutationFn: createCreateProvider
});
export const createUpdateProvider = (getSigningClient: SigningClientResolver) => buildTx<MsgUpdateProvider>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUpdateProvider.typeUrl,
  encoders: toEncoders(MsgUpdateProvider),
  converters: toConverters(MsgUpdateProvider)
});
export const useUpdateProvider = buildUseMutation<MsgUpdateProvider, Error>({
  builderMutationFn: createUpdateProvider
});
export const createDeleteProvider = (getSigningClient: SigningClientResolver) => buildTx<MsgDeleteProvider>({
  getSigningClient: getSigningClient,
  typeUrl: MsgDeleteProvider.typeUrl,
  encoders: toEncoders(MsgDeleteProvider),
  converters: toConverters(MsgDeleteProvider)
});
export const useDeleteProvider = buildUseMutation<MsgDeleteProvider, Error>({
  builderMutationFn: createDeleteProvider
});