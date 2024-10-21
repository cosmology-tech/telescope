import { Attribute, AttributeSDKType } from "../../base/v1beta1/attribute";
import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSignProviderAttributes, MsgSignProviderAttributesSDKType, MsgSignProviderAttributesResponse, MsgSignProviderAttributesResponseSDKType, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesSDKType, MsgDeleteProviderAttributesResponse, MsgDeleteProviderAttributesResponseSDKType } from "./audit";
export const createSignProviderAttributes = (getSigningClient: SigningClientResolver) => buildTx<SignProviderAttributes>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgSignProviderAttributes.typeUrl,
  encoders: toEncoders(SignProviderAttributes),
  converters: toConverters(SignProviderAttributes)
});
export const useSignProviderAttributes = buildUseMutation<SignProviderAttributes, Error>({
  builderMutationFn: createSignProviderAttributes
});
export const createDeleteProviderAttributes = (getSigningClient: SigningClientResolver) => buildTx<DeleteProviderAttributes>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgDeleteProviderAttributes.typeUrl,
  encoders: toEncoders(DeleteProviderAttributes),
  converters: toConverters(DeleteProviderAttributes)
});
export const useDeleteProviderAttributes = buildUseMutation<DeleteProviderAttributes, Error>({
  builderMutationFn: createDeleteProviderAttributes
});