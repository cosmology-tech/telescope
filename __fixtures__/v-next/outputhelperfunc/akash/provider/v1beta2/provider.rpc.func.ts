import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute";
import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateProvider, MsgCreateProviderSDKType, MsgCreateProviderResponse, MsgCreateProviderResponseSDKType, MsgUpdateProvider, MsgUpdateProviderSDKType, MsgUpdateProviderResponse, MsgUpdateProviderResponseSDKType, MsgDeleteProvider, MsgDeleteProviderSDKType, MsgDeleteProviderResponse, MsgDeleteProviderResponseSDKType } from "./provider";
export const createCreateProvider = (getSigningClient: SigningClientResolver) => buildTx<CreateProvider>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCreateProvider.typeUrl,
  encoders: toEncoders(CreateProvider),
  converters: toConverters(CreateProvider)
});
export const useCreateProvider = buildUseMutation<CreateProvider, Error>({
  builderMutationFn: createCreateProvider
});
export const createUpdateProvider = (getSigningClient: SigningClientResolver) => buildTx<UpdateProvider>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgUpdateProvider.typeUrl,
  encoders: toEncoders(UpdateProvider),
  converters: toConverters(UpdateProvider)
});
export const useUpdateProvider = buildUseMutation<UpdateProvider, Error>({
  builderMutationFn: createUpdateProvider
});
export const createDeleteProvider = (getSigningClient: SigningClientResolver) => buildTx<DeleteProvider>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgDeleteProvider.typeUrl,
  encoders: toEncoders(DeleteProvider),
  converters: toConverters(DeleteProvider)
});
export const useDeleteProvider = buildUseMutation<DeleteProvider, Error>({
  builderMutationFn: createDeleteProvider
});