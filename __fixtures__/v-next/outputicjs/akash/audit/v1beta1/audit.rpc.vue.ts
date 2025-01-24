import { buildUseVueMutation } from "../../../vue-query";
import { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./audit";
import { createSignProviderAttributes, createDeleteProviderAttributes } from "./audit.rpc.func.ts";
export const useSignProviderAttributes = buildUseVueMutation<MsgSignProviderAttributes, Error>({
  builderMutationFn: createSignProviderAttributes
});
export const useDeleteProviderAttributes = buildUseVueMutation<MsgDeleteProviderAttributes, Error>({
  builderMutationFn: createDeleteProviderAttributes
});