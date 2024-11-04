import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./group";
import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deployment";
export const createCreateDeployment = (clientResolver: SigningClientResolver) => buildTx<MsgCreateDeployment>({
  clientResolver,
  typeUrl: MsgCreateDeployment.typeUrl,
  encoders: toEncoders(MsgCreateDeployment),
  converters: toConverters(MsgCreateDeployment)
});
export const useCreateDeployment = buildUseMutation<MsgCreateDeployment, Error>({
  builderMutationFn: createCreateDeployment
});
export const createDepositDeployment = (clientResolver: SigningClientResolver) => buildTx<MsgDepositDeployment>({
  clientResolver,
  typeUrl: MsgDepositDeployment.typeUrl,
  encoders: toEncoders(MsgDepositDeployment),
  converters: toConverters(MsgDepositDeployment)
});
export const useDepositDeployment = buildUseMutation<MsgDepositDeployment, Error>({
  builderMutationFn: createDepositDeployment
});
export const createUpdateDeployment = (clientResolver: SigningClientResolver) => buildTx<MsgUpdateDeployment>({
  clientResolver,
  typeUrl: MsgUpdateDeployment.typeUrl,
  encoders: toEncoders(MsgUpdateDeployment),
  converters: toConverters(MsgUpdateDeployment)
});
export const useUpdateDeployment = buildUseMutation<MsgUpdateDeployment, Error>({
  builderMutationFn: createUpdateDeployment
});
export const createCloseDeployment = (clientResolver: SigningClientResolver) => buildTx<MsgCloseDeployment>({
  clientResolver,
  typeUrl: MsgCloseDeployment.typeUrl,
  encoders: toEncoders(MsgCloseDeployment),
  converters: toConverters(MsgCloseDeployment)
});
export const useCloseDeployment = buildUseMutation<MsgCloseDeployment, Error>({
  builderMutationFn: createCloseDeployment
});
export const createCloseGroup = (clientResolver: SigningClientResolver) => buildTx<MsgCloseGroup>({
  clientResolver,
  typeUrl: MsgCloseGroup.typeUrl,
  encoders: toEncoders(MsgCloseGroup),
  converters: toConverters(MsgCloseGroup)
});
export const useCloseGroup = buildUseMutation<MsgCloseGroup, Error>({
  builderMutationFn: createCloseGroup
});
export const createPauseGroup = (clientResolver: SigningClientResolver) => buildTx<MsgPauseGroup>({
  clientResolver,
  typeUrl: MsgPauseGroup.typeUrl,
  encoders: toEncoders(MsgPauseGroup),
  converters: toConverters(MsgPauseGroup)
});
export const usePauseGroup = buildUseMutation<MsgPauseGroup, Error>({
  builderMutationFn: createPauseGroup
});
export const createStartGroup = (clientResolver: SigningClientResolver) => buildTx<MsgStartGroup>({
  clientResolver,
  typeUrl: MsgStartGroup.typeUrl,
  encoders: toEncoders(MsgStartGroup),
  converters: toConverters(MsgStartGroup)
});
export const useStartGroup = buildUseMutation<MsgStartGroup, Error>({
  builderMutationFn: createStartGroup
});