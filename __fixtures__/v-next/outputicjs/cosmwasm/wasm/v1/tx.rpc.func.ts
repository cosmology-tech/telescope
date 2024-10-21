import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin } from "./tx";
export const createStoreCode = (getSigningClient: SigningClientResolver) => buildTx<MsgStoreCode>({
  getSigningClient: getSigningClient,
  typeUrl: MsgStoreCode.typeUrl,
  encoders: toEncoders(MsgStoreCode),
  converters: toConverters(MsgStoreCode)
});
export const useStoreCode = buildUseMutation<MsgStoreCode, Error>({
  builderMutationFn: createStoreCode
});
export const createInstantiateContract = (getSigningClient: SigningClientResolver) => buildTx<MsgInstantiateContract>({
  getSigningClient: getSigningClient,
  typeUrl: MsgInstantiateContract.typeUrl,
  encoders: toEncoders(MsgInstantiateContract),
  converters: toConverters(MsgInstantiateContract)
});
export const useInstantiateContract = buildUseMutation<MsgInstantiateContract, Error>({
  builderMutationFn: createInstantiateContract
});
export const createExecuteContract = (getSigningClient: SigningClientResolver) => buildTx<MsgExecuteContract>({
  getSigningClient: getSigningClient,
  typeUrl: MsgExecuteContract.typeUrl,
  encoders: toEncoders(MsgExecuteContract),
  converters: toConverters(MsgExecuteContract)
});
export const useExecuteContract = buildUseMutation<MsgExecuteContract, Error>({
  builderMutationFn: createExecuteContract
});
export const createMigrateContract = (getSigningClient: SigningClientResolver) => buildTx<MsgMigrateContract>({
  getSigningClient: getSigningClient,
  typeUrl: MsgMigrateContract.typeUrl,
  encoders: toEncoders(MsgMigrateContract),
  converters: toConverters(MsgMigrateContract)
});
export const useMigrateContract = buildUseMutation<MsgMigrateContract, Error>({
  builderMutationFn: createMigrateContract
});
export const createUpdateAdmin = (getSigningClient: SigningClientResolver) => buildTx<MsgUpdateAdmin>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUpdateAdmin.typeUrl,
  encoders: toEncoders(MsgUpdateAdmin),
  converters: toConverters(MsgUpdateAdmin)
});
export const useUpdateAdmin = buildUseMutation<MsgUpdateAdmin, Error>({
  builderMutationFn: createUpdateAdmin
});
export const createClearAdmin = (getSigningClient: SigningClientResolver) => buildTx<MsgClearAdmin>({
  getSigningClient: getSigningClient,
  typeUrl: MsgClearAdmin.typeUrl,
  encoders: toEncoders(MsgClearAdmin),
  converters: toConverters(MsgClearAdmin)
});
export const useClearAdmin = buildUseMutation<MsgClearAdmin, Error>({
  builderMutationFn: createClearAdmin
});