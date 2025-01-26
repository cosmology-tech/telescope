import { buildUseMutation } from "../../../react-query";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate } from "./tx";
import { createCreateValidator, createEditValidator, createDelegate, createBeginRedelegate, createUndelegate } from "./tx.rpc.func.ts";
export const useCreateValidator = buildUseMutation<MsgCreateValidator, Error>({
  builderMutationFn: createCreateValidator
});
export const useEditValidator = buildUseMutation<MsgEditValidator, Error>({
  builderMutationFn: createEditValidator
});
export const useDelegate = buildUseMutation<MsgDelegate, Error>({
  builderMutationFn: createDelegate
});
export const useBeginRedelegate = buildUseMutation<MsgBeginRedelegate, Error>({
  builderMutationFn: createBeginRedelegate
});
export const useUndelegate = buildUseMutation<MsgUndelegate, Error>({
  builderMutationFn: createUndelegate
});