import { buildUseMutation } from "../../../react-query";
import { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./audit";
import { createSignProviderAttributes, createDeleteProviderAttributes } from "./audit.rpc.func";
export const useSignProviderAttributes = buildUseMutation<MsgSignProviderAttributes, Error>({
  builderMutationFn: createSignProviderAttributes
});
export const useDeleteProviderAttributes = buildUseMutation<MsgDeleteProviderAttributes, Error>({
  builderMutationFn: createDeleteProviderAttributes
});