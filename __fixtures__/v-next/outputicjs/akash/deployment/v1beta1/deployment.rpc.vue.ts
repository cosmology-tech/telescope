import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./group";
import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deployment";
import { createCreateDeployment, createDepositDeployment, createUpdateDeployment, createCloseDeployment, createCloseGroup, createPauseGroup, createStartGroup } from "./deployment.rpc.func.ts";
export const useCreateDeployment = buildUseVueMutation<MsgCreateDeployment, Error>({
  builderMutationFn: createCreateDeployment
});
export const useDepositDeployment = buildUseVueMutation<MsgDepositDeployment, Error>({
  builderMutationFn: createDepositDeployment
});
export const useUpdateDeployment = buildUseVueMutation<MsgUpdateDeployment, Error>({
  builderMutationFn: createUpdateDeployment
});
export const useCloseDeployment = buildUseVueMutation<MsgCloseDeployment, Error>({
  builderMutationFn: createCloseDeployment
});
export const useCloseGroup = buildUseVueMutation<MsgCloseGroup, Error>({
  builderMutationFn: createCloseGroup
});
export const usePauseGroup = buildUseVueMutation<MsgPauseGroup, Error>({
  builderMutationFn: createPauseGroup
});
export const useStartGroup = buildUseVueMutation<MsgStartGroup, Error>({
  builderMutationFn: createStartGroup
});