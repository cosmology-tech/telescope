import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgStoreCode, MsgStoreCodeSDKType, MsgStoreCodeResponse, MsgStoreCodeResponseSDKType, MsgInstantiateContract, MsgInstantiateContractSDKType, MsgInstantiateContractResponse, MsgInstantiateContractResponseSDKType, MsgExecuteContract, MsgExecuteContractSDKType, MsgExecuteContractResponse, MsgExecuteContractResponseSDKType, MsgMigrateContract, MsgMigrateContractSDKType, MsgMigrateContractResponse, MsgMigrateContractResponseSDKType, MsgUpdateAdmin, MsgUpdateAdminSDKType, MsgUpdateAdminResponse, MsgUpdateAdminResponseSDKType, MsgClearAdmin, MsgClearAdminSDKType, MsgClearAdminResponse, MsgClearAdminResponseSDKType } from "./tx";
export const createStoreCode = (getSigningClient: SigningClientResolver) => buildTx<StoreCode>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgStoreCode.typeUrl,
  encoders: toEncoders(StoreCode),
  converters: toConverters(StoreCode)
});
export const useStoreCode = buildUseMutation<StoreCode, Error>({
  builderMutationFn: createStoreCode
});
export const createInstantiateContract = (getSigningClient: SigningClientResolver) => buildTx<InstantiateContract>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgInstantiateContract.typeUrl,
  encoders: toEncoders(InstantiateContract),
  converters: toConverters(InstantiateContract)
});
export const useInstantiateContract = buildUseMutation<InstantiateContract, Error>({
  builderMutationFn: createInstantiateContract
});
export const createExecuteContract = (getSigningClient: SigningClientResolver) => buildTx<ExecuteContract>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgExecuteContract.typeUrl,
  encoders: toEncoders(ExecuteContract),
  converters: toConverters(ExecuteContract)
});
export const useExecuteContract = buildUseMutation<ExecuteContract, Error>({
  builderMutationFn: createExecuteContract
});
export const createMigrateContract = (getSigningClient: SigningClientResolver) => buildTx<MigrateContract>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgMigrateContract.typeUrl,
  encoders: toEncoders(MigrateContract),
  converters: toConverters(MigrateContract)
});
export const useMigrateContract = buildUseMutation<MigrateContract, Error>({
  builderMutationFn: createMigrateContract
});
export const createUpdateAdmin = (getSigningClient: SigningClientResolver) => buildTx<UpdateAdmin>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgUpdateAdmin.typeUrl,
  encoders: toEncoders(UpdateAdmin),
  converters: toConverters(UpdateAdmin)
});
export const useUpdateAdmin = buildUseMutation<UpdateAdmin, Error>({
  builderMutationFn: createUpdateAdmin
});
export const createClearAdmin = (getSigningClient: SigningClientResolver) => buildTx<ClearAdmin>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgClearAdmin.typeUrl,
  encoders: toEncoders(ClearAdmin),
  converters: toConverters(ClearAdmin)
});
export const useClearAdmin = buildUseMutation<ClearAdmin, Error>({
  builderMutationFn: createClearAdmin
});