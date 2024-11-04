import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./audit";
export const createSignProviderAttributes = (clientResolver: SigningClientResolver) => buildTx<MsgSignProviderAttributes>({
  clientResolver,
  typeUrl: MsgSignProviderAttributes.typeUrl,
  encoders: toEncoders(MsgSignProviderAttributes),
  converters: toConverters(MsgSignProviderAttributes)
});
export const useSignProviderAttributes = buildUseMutation<MsgSignProviderAttributes, Error>({
  builderMutationFn: createSignProviderAttributes
});
export const createDeleteProviderAttributes = (clientResolver: SigningClientResolver) => buildTx<MsgDeleteProviderAttributes>({
  clientResolver,
  typeUrl: MsgDeleteProviderAttributes.typeUrl,
  encoders: toEncoders(MsgDeleteProviderAttributes),
  converters: toConverters(MsgDeleteProviderAttributes)
});
export const useDeleteProviderAttributes = buildUseMutation<MsgDeleteProviderAttributes, Error>({
  builderMutationFn: createDeleteProviderAttributes
});