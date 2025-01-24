import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate } from "./tx";
import { createCreateValidator, createEditValidator, createDelegate, createBeginRedelegate, createUndelegate } from "./tx.rpc.func.ts";
export const useCreateValidator = buildUseVueMutation<MsgCreateValidator, Error>({
  builderMutationFn: createCreateValidator
});
export const useEditValidator = buildUseVueMutation<MsgEditValidator, Error>({
  builderMutationFn: createEditValidator
});
export const useDelegate = buildUseVueMutation<MsgDelegate, Error>({
  builderMutationFn: createDelegate
});
export const useBeginRedelegate = buildUseVueMutation<MsgBeginRedelegate, Error>({
  builderMutationFn: createBeginRedelegate
});
export const useUndelegate = buildUseVueMutation<MsgUndelegate, Error>({
  builderMutationFn: createUndelegate
});