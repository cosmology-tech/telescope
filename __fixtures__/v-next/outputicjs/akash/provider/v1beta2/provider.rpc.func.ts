import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { buildUseMutation } from "../../../react-query";
import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
export const createCreateProvider = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateProvider>({
  clientResolver,
  typeUrl: MsgCreateProvider.typeUrl,
  encoders: toEncoders(MsgCreateProvider),
  converters: toConverters(MsgCreateProvider)
});
export const useCreateProvider = buildUseMutation<MsgCreateProvider, Error>({
  builderMutationFn: createCreateProvider
});
export const createUpdateProvider = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateProvider>({
  clientResolver,
  typeUrl: MsgUpdateProvider.typeUrl,
  encoders: toEncoders(MsgUpdateProvider),
  converters: toConverters(MsgUpdateProvider)
});
export const useUpdateProvider = buildUseMutation<MsgUpdateProvider, Error>({
  builderMutationFn: createUpdateProvider
});
export const createDeleteProvider = (clientResolver?: SigningClientResolver) => buildTx<MsgDeleteProvider>({
  clientResolver,
  typeUrl: MsgDeleteProvider.typeUrl,
  encoders: toEncoders(MsgDeleteProvider),
  converters: toConverters(MsgDeleteProvider)
});
export const useDeleteProvider = buildUseMutation<MsgDeleteProvider, Error>({
  builderMutationFn: createDeleteProvider
});