import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./group";
import { buildUseMutation } from "../../../react-query";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deployment";
import { createCreateDeployment, createDepositDeployment, createUpdateDeployment, createCloseDeployment, createCloseGroup, createPauseGroup, createStartGroup } from "./deployment.rpc.func.ts";
export const useCreateDeployment = buildUseMutation<MsgCreateDeployment, Error>({
  builderMutationFn: createCreateDeployment
});
export const useDepositDeployment = buildUseMutation<MsgDepositDeployment, Error>({
  builderMutationFn: createDepositDeployment
});
export const useUpdateDeployment = buildUseMutation<MsgUpdateDeployment, Error>({
  builderMutationFn: createUpdateDeployment
});
export const useCloseDeployment = buildUseMutation<MsgCloseDeployment, Error>({
  builderMutationFn: createCloseDeployment
});
export const useCloseGroup = buildUseMutation<MsgCloseGroup, Error>({
  builderMutationFn: createCloseGroup
});
export const usePauseGroup = buildUseMutation<MsgPauseGroup, Error>({
  builderMutationFn: createPauseGroup
});
export const useStartGroup = buildUseMutation<MsgStartGroup, Error>({
  builderMutationFn: createStartGroup
});