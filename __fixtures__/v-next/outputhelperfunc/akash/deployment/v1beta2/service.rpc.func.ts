import { DeploymentID, DeploymentIDSDKType } from "./deployment";
import { GroupSpec, GroupSpecSDKType } from "./groupspec";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GroupID, GroupIDSDKType } from "./groupid";
import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateDeployment, MsgCreateDeploymentSDKType, MsgCreateDeploymentResponse, MsgCreateDeploymentResponseSDKType, MsgDepositDeployment, MsgDepositDeploymentSDKType, MsgDepositDeploymentResponse, MsgDepositDeploymentResponseSDKType, MsgUpdateDeployment, MsgUpdateDeploymentSDKType, MsgUpdateDeploymentResponse, MsgUpdateDeploymentResponseSDKType, MsgCloseDeployment, MsgCloseDeploymentSDKType, MsgCloseDeploymentResponse, MsgCloseDeploymentResponseSDKType } from "./deploymentmsg";
import { MsgCloseGroup, MsgCloseGroupSDKType, MsgCloseGroupResponse, MsgCloseGroupResponseSDKType, MsgPauseGroup, MsgPauseGroupSDKType, MsgPauseGroupResponse, MsgPauseGroupResponseSDKType, MsgStartGroup, MsgStartGroupSDKType, MsgStartGroupResponse, MsgStartGroupResponseSDKType } from "./groupmsg";
export const createCreateDeployment = (getSigningClient: SigningClientResolver) => buildTx<CreateDeployment>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCreateDeployment.typeUrl,
  encoders: toEncoders(CreateDeployment),
  converters: toConverters(CreateDeployment)
});
export const useCreateDeployment = buildUseMutation<CreateDeployment, Error>({
  builderMutationFn: createCreateDeployment
});
export const createDepositDeployment = (getSigningClient: SigningClientResolver) => buildTx<DepositDeployment>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgDepositDeployment.typeUrl,
  encoders: toEncoders(DepositDeployment),
  converters: toConverters(DepositDeployment)
});
export const useDepositDeployment = buildUseMutation<DepositDeployment, Error>({
  builderMutationFn: createDepositDeployment
});
export const createUpdateDeployment = (getSigningClient: SigningClientResolver) => buildTx<UpdateDeployment>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgUpdateDeployment.typeUrl,
  encoders: toEncoders(UpdateDeployment),
  converters: toConverters(UpdateDeployment)
});
export const useUpdateDeployment = buildUseMutation<UpdateDeployment, Error>({
  builderMutationFn: createUpdateDeployment
});
export const createCloseDeployment = (getSigningClient: SigningClientResolver) => buildTx<CloseDeployment>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCloseDeployment.typeUrl,
  encoders: toEncoders(CloseDeployment),
  converters: toConverters(CloseDeployment)
});
export const useCloseDeployment = buildUseMutation<CloseDeployment, Error>({
  builderMutationFn: createCloseDeployment
});
export const createCloseGroup = (getSigningClient: SigningClientResolver) => buildTx<CloseGroup>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCloseGroup.typeUrl,
  encoders: toEncoders(CloseGroup),
  converters: toConverters(CloseGroup)
});
export const useCloseGroup = buildUseMutation<CloseGroup, Error>({
  builderMutationFn: createCloseGroup
});
export const createPauseGroup = (getSigningClient: SigningClientResolver) => buildTx<PauseGroup>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgPauseGroup.typeUrl,
  encoders: toEncoders(PauseGroup),
  converters: toConverters(PauseGroup)
});
export const usePauseGroup = buildUseMutation<PauseGroup, Error>({
  builderMutationFn: createPauseGroup
});
export const createStartGroup = (getSigningClient: SigningClientResolver) => buildTx<StartGroup>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgStartGroup.typeUrl,
  encoders: toEncoders(StartGroup),
  converters: toConverters(StartGroup)
});
export const useStartGroup = buildUseMutation<StartGroup, Error>({
  builderMutationFn: createStartGroup
});