import { buildUseMutation } from "../../../../react-query";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour } from "./tx";
import { createCreateClient, createUpdateClient, createUpgradeClient, createSubmitMisbehaviour } from "./tx.rpc.func.ts";
export const useCreateClient = buildUseMutation<MsgCreateClient, Error>({
  builderMutationFn: createCreateClient
});
export const useUpdateClient = buildUseMutation<MsgUpdateClient, Error>({
  builderMutationFn: createUpdateClient
});
export const useUpgradeClient = buildUseMutation<MsgUpgradeClient, Error>({
  builderMutationFn: createUpgradeClient
});
export const useSubmitMisbehaviour = buildUseMutation<MsgSubmitMisbehaviour, Error>({
  builderMutationFn: createSubmitMisbehaviour
});