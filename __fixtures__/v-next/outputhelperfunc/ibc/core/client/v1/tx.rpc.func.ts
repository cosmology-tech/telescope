import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { buildTx, ISigningClient } from "../../../../helper-func-types";
import { buildUseMutation } from "../../../../react-query";
import { SigningClientResolver } from "../../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateClient, MsgCreateClientSDKType, MsgCreateClientResponse, MsgCreateClientResponseSDKType, MsgUpdateClient, MsgUpdateClientSDKType, MsgUpdateClientResponse, MsgUpdateClientResponseSDKType, MsgUpgradeClient, MsgUpgradeClientSDKType, MsgUpgradeClientResponse, MsgUpgradeClientResponseSDKType, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourSDKType, MsgSubmitMisbehaviourResponse, MsgSubmitMisbehaviourResponseSDKType } from "./tx";
export const createCreateClient = (getSigningClient: SigningClientResolver) => buildTx<CreateClient>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCreateClient.typeUrl,
  encoders: toEncoders(CreateClient),
  converters: toConverters(CreateClient)
});
export const useCreateClient = buildUseMutation<CreateClient, Error>({
  builderMutationFn: createCreateClient
});
export const createUpdateClient = (getSigningClient: SigningClientResolver) => buildTx<UpdateClient>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgUpdateClient.typeUrl,
  encoders: toEncoders(UpdateClient),
  converters: toConverters(UpdateClient)
});
export const useUpdateClient = buildUseMutation<UpdateClient, Error>({
  builderMutationFn: createUpdateClient
});
export const createUpgradeClient = (getSigningClient: SigningClientResolver) => buildTx<UpgradeClient>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgUpgradeClient.typeUrl,
  encoders: toEncoders(UpgradeClient),
  converters: toConverters(UpgradeClient)
});
export const useUpgradeClient = buildUseMutation<UpgradeClient, Error>({
  builderMutationFn: createUpgradeClient
});
export const createSubmitMisbehaviour = (getSigningClient: SigningClientResolver) => buildTx<SubmitMisbehaviour>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgSubmitMisbehaviour.typeUrl,
  encoders: toEncoders(SubmitMisbehaviour),
  converters: toConverters(SubmitMisbehaviour)
});
export const useSubmitMisbehaviour = buildUseMutation<SubmitMisbehaviour, Error>({
  builderMutationFn: createSubmitMisbehaviour
});