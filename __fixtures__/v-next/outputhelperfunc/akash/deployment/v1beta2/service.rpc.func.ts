import { DeploymentID, DeploymentIDSDKType } from "./deployment";
import { GroupSpec, GroupSpecSDKType } from "./groupspec";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GroupID, GroupIDSDKType } from "./groupid";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateDeployment, MsgCreateDeploymentSDKType, MsgCreateDeploymentResponse, MsgCreateDeploymentResponseSDKType, MsgDepositDeployment, MsgDepositDeploymentSDKType, MsgDepositDeploymentResponse, MsgDepositDeploymentResponseSDKType, MsgUpdateDeployment, MsgUpdateDeploymentSDKType, MsgUpdateDeploymentResponse, MsgUpdateDeploymentResponseSDKType, MsgCloseDeployment, MsgCloseDeploymentSDKType, MsgCloseDeploymentResponse, MsgCloseDeploymentResponseSDKType } from "./deploymentmsg";
import { MsgCloseGroup, MsgCloseGroupSDKType, MsgCloseGroupResponse, MsgCloseGroupResponseSDKType, MsgPauseGroup, MsgPauseGroupSDKType, MsgPauseGroupResponse, MsgPauseGroupResponseSDKType, MsgStartGroup, MsgStartGroupSDKType, MsgStartGroupResponse, MsgStartGroupResponseSDKType } from "./groupmsg";
export const createCreateDeployment = (getSigningClient: SigningClientResolver) => buildTx<MsgCreateDeployment>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCreateDeployment.typeUrl,
  encoders: toEncoders(MsgCreateDeployment),
  converters: toConverters(MsgCreateDeployment)
});
export const useCreateDeployment = buildUseMutation<MsgCreateDeployment, Error>({
  builderMutationFn: createCreateDeployment
});
export const createDepositDeployment = (getSigningClient: SigningClientResolver) => buildTx<MsgDepositDeployment>({
  getSigningClient: getSigningClient,
  typeUrl: MsgDepositDeployment.typeUrl,
  encoders: toEncoders(MsgDepositDeployment),
  converters: toConverters(MsgDepositDeployment)
});
export const useDepositDeployment = buildUseMutation<MsgDepositDeployment, Error>({
  builderMutationFn: createDepositDeployment
});
export const createUpdateDeployment = (getSigningClient: SigningClientResolver) => buildTx<MsgUpdateDeployment>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUpdateDeployment.typeUrl,
  encoders: toEncoders(MsgUpdateDeployment),
  converters: toConverters(MsgUpdateDeployment)
});
export const useUpdateDeployment = buildUseMutation<MsgUpdateDeployment, Error>({
  builderMutationFn: createUpdateDeployment
});
export const createCloseDeployment = (getSigningClient: SigningClientResolver) => buildTx<MsgCloseDeployment>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCloseDeployment.typeUrl,
  encoders: toEncoders(MsgCloseDeployment),
  converters: toConverters(MsgCloseDeployment)
});
export const useCloseDeployment = buildUseMutation<MsgCloseDeployment, Error>({
  builderMutationFn: createCloseDeployment
});
export const createCloseGroup = (getSigningClient: SigningClientResolver) => buildTx<MsgCloseGroup>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCloseGroup.typeUrl,
  encoders: toEncoders(MsgCloseGroup),
  converters: toConverters(MsgCloseGroup)
});
export const useCloseGroup = buildUseMutation<MsgCloseGroup, Error>({
  builderMutationFn: createCloseGroup
});
export const createPauseGroup = (getSigningClient: SigningClientResolver) => buildTx<MsgPauseGroup>({
  getSigningClient: getSigningClient,
  typeUrl: MsgPauseGroup.typeUrl,
  encoders: toEncoders(MsgPauseGroup),
  converters: toConverters(MsgPauseGroup)
});
export const usePauseGroup = buildUseMutation<MsgPauseGroup, Error>({
  builderMutationFn: createPauseGroup
});
export const createStartGroup = (getSigningClient: SigningClientResolver) => buildTx<MsgStartGroup>({
  getSigningClient: getSigningClient,
  typeUrl: MsgStartGroup.typeUrl,
  encoders: toEncoders(MsgStartGroup),
  converters: toConverters(MsgStartGroup)
});
export const useStartGroup = buildUseMutation<MsgStartGroup, Error>({
  builderMutationFn: createStartGroup
});