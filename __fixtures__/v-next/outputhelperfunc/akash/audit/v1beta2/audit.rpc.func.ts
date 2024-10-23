import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSignProviderAttributes, MsgSignProviderAttributesSDKType, MsgSignProviderAttributesResponse, MsgSignProviderAttributesResponseSDKType, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesSDKType, MsgDeleteProviderAttributesResponse, MsgDeleteProviderAttributesResponseSDKType } from "./audit";
export const createSignProviderAttributes = (getSigningClient: SigningClientResolver) => buildTx<MsgSignProviderAttributes>({
  getSigningClient: getSigningClient,
  typeUrl: MsgSignProviderAttributes.typeUrl,
  encoders: toEncoders(MsgSignProviderAttributes),
  converters: toConverters(MsgSignProviderAttributes)
});
export const useSignProviderAttributes = buildUseMutation<MsgSignProviderAttributes, Error>({
  builderMutationFn: createSignProviderAttributes
});
export const createDeleteProviderAttributes = (getSigningClient: SigningClientResolver) => buildTx<MsgDeleteProviderAttributes>({
  getSigningClient: getSigningClient,
  typeUrl: MsgDeleteProviderAttributes.typeUrl,
  encoders: toEncoders(MsgDeleteProviderAttributes),
  converters: toConverters(MsgDeleteProviderAttributes)
});
export const useDeleteProviderAttributes = buildUseMutation<MsgDeleteProviderAttributes, Error>({
  builderMutationFn: createDeleteProviderAttributes
});