import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin } from "./tx";
export const createStoreCode = (clientResolver?: SigningClientResolver) => buildTx<MsgStoreCode>({
  clientResolver,
  typeUrl: MsgStoreCode.typeUrl,
  encoders: toEncoders(MsgStoreCode),
  converters: toConverters(MsgStoreCode)
});
export const useStoreCode = buildUseMutation<MsgStoreCode, Error>({
  builderMutationFn: createStoreCode
});
export const createInstantiateContract = (clientResolver?: SigningClientResolver) => buildTx<MsgInstantiateContract>({
  clientResolver,
  typeUrl: MsgInstantiateContract.typeUrl,
  encoders: toEncoders(MsgInstantiateContract),
  converters: toConverters(MsgInstantiateContract)
});
export const useInstantiateContract = buildUseMutation<MsgInstantiateContract, Error>({
  builderMutationFn: createInstantiateContract
});
export const createExecuteContract = (clientResolver?: SigningClientResolver) => buildTx<MsgExecuteContract>({
  clientResolver,
  typeUrl: MsgExecuteContract.typeUrl,
  encoders: toEncoders(MsgExecuteContract),
  converters: toConverters(MsgExecuteContract)
});
export const useExecuteContract = buildUseMutation<MsgExecuteContract, Error>({
  builderMutationFn: createExecuteContract
});
export const createMigrateContract = (clientResolver?: SigningClientResolver) => buildTx<MsgMigrateContract>({
  clientResolver,
  typeUrl: MsgMigrateContract.typeUrl,
  encoders: toEncoders(MsgMigrateContract),
  converters: toConverters(MsgMigrateContract)
});
export const useMigrateContract = buildUseMutation<MsgMigrateContract, Error>({
  builderMutationFn: createMigrateContract
});
export const createUpdateAdmin = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateAdmin>({
  clientResolver,
  typeUrl: MsgUpdateAdmin.typeUrl,
  encoders: toEncoders(MsgUpdateAdmin),
  converters: toConverters(MsgUpdateAdmin)
});
export const useUpdateAdmin = buildUseMutation<MsgUpdateAdmin, Error>({
  builderMutationFn: createUpdateAdmin
});
export const createClearAdmin = (clientResolver?: SigningClientResolver) => buildTx<MsgClearAdmin>({
  clientResolver,
  typeUrl: MsgClearAdmin.typeUrl,
  encoders: toEncoders(MsgClearAdmin),
  converters: toConverters(MsgClearAdmin)
});
export const useClearAdmin = buildUseMutation<MsgClearAdmin, Error>({
  builderMutationFn: createClearAdmin
});