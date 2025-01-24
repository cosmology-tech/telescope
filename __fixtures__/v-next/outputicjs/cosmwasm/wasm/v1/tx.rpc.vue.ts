import { buildUseVueMutation } from "../../../vue-query";
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin } from "./tx";
import { createStoreCode, createInstantiateContract, createExecuteContract, createMigrateContract, createUpdateAdmin, createClearAdmin } from "./tx.rpc.func.ts";
export const useStoreCode = buildUseVueMutation<MsgStoreCode, Error>({
  builderMutationFn: createStoreCode
});
export const useInstantiateContract = buildUseVueMutation<MsgInstantiateContract, Error>({
  builderMutationFn: createInstantiateContract
});
export const useExecuteContract = buildUseVueMutation<MsgExecuteContract, Error>({
  builderMutationFn: createExecuteContract
});
export const useMigrateContract = buildUseVueMutation<MsgMigrateContract, Error>({
  builderMutationFn: createMigrateContract
});
export const useUpdateAdmin = buildUseVueMutation<MsgUpdateAdmin, Error>({
  builderMutationFn: createUpdateAdmin
});
export const useClearAdmin = buildUseVueMutation<MsgClearAdmin, Error>({
  builderMutationFn: createClearAdmin
});