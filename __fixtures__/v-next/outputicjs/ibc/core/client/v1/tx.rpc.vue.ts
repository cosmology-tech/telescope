import { buildUseVueMutation } from "../../../../vue-query";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour } from "./tx";
import { createCreateClient, createUpdateClient, createUpgradeClient, createSubmitMisbehaviour } from "./tx.rpc.func.ts";
export const useCreateClient = buildUseVueMutation<MsgCreateClient, Error>({
  builderMutationFn: createCreateClient
});
export const useUpdateClient = buildUseVueMutation<MsgUpdateClient, Error>({
  builderMutationFn: createUpdateClient
});
export const useUpgradeClient = buildUseVueMutation<MsgUpgradeClient, Error>({
  builderMutationFn: createUpgradeClient
});
export const useSubmitMisbehaviour = buildUseVueMutation<MsgSubmitMisbehaviour, Error>({
  builderMutationFn: createSubmitMisbehaviour
});