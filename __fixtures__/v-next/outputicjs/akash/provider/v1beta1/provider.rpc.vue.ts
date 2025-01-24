import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
import { createCreateProvider, createUpdateProvider, createDeleteProvider } from "./provider.rpc.func.ts";
export const useCreateProvider = buildUseVueMutation<MsgCreateProvider, Error>({
  builderMutationFn: createCreateProvider
});
export const useUpdateProvider = buildUseVueMutation<MsgUpdateProvider, Error>({
  builderMutationFn: createUpdateProvider
});
export const useDeleteProvider = buildUseVueMutation<MsgDeleteProvider, Error>({
  builderMutationFn: createDeleteProvider
});