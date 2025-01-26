import { buildUseMutation } from "../../../react-query";
import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
import { createCreateProvider, createUpdateProvider, createDeleteProvider } from "./provider.rpc.func.ts";
export const useCreateProvider = buildUseMutation<MsgCreateProvider, Error>({
  builderMutationFn: createCreateProvider
});
export const useUpdateProvider = buildUseMutation<MsgUpdateProvider, Error>({
  builderMutationFn: createUpdateProvider
});
export const useDeleteProvider = buildUseMutation<MsgDeleteProvider, Error>({
  builderMutationFn: createDeleteProvider
});