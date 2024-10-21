import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../../helper-func-types";
import { buildUseMutation } from "../../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateClient, MsgCreateClientSDKType, MsgCreateClientResponse, MsgCreateClientResponseSDKType, MsgUpdateClient, MsgUpdateClientSDKType, MsgUpdateClientResponse, MsgUpdateClientResponseSDKType, MsgUpgradeClient, MsgUpgradeClientSDKType, MsgUpgradeClientResponse, MsgUpgradeClientResponseSDKType, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourSDKType, MsgSubmitMisbehaviourResponse, MsgSubmitMisbehaviourResponseSDKType } from "./tx";
export const createCreateClient = (getSigningClient: SigningClientResolver) => buildTx<MsgCreateClient>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCreateClient.typeUrl,
  encoders: toEncoders(MsgCreateClient),
  converters: toConverters(MsgCreateClient)
});
export const useCreateClient = buildUseMutation<MsgCreateClient, Error>({
  builderMutationFn: createCreateClient
});
export const createUpdateClient = (getSigningClient: SigningClientResolver) => buildTx<MsgUpdateClient>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUpdateClient.typeUrl,
  encoders: toEncoders(MsgUpdateClient),
  converters: toConverters(MsgUpdateClient)
});
export const useUpdateClient = buildUseMutation<MsgUpdateClient, Error>({
  builderMutationFn: createUpdateClient
});
export const createUpgradeClient = (getSigningClient: SigningClientResolver) => buildTx<MsgUpgradeClient>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUpgradeClient.typeUrl,
  encoders: toEncoders(MsgUpgradeClient),
  converters: toConverters(MsgUpgradeClient)
});
export const useUpgradeClient = buildUseMutation<MsgUpgradeClient, Error>({
  builderMutationFn: createUpgradeClient
});
export const createSubmitMisbehaviour = (getSigningClient: SigningClientResolver) => buildTx<MsgSubmitMisbehaviour>({
  getSigningClient: getSigningClient,
  typeUrl: MsgSubmitMisbehaviour.typeUrl,
  encoders: toEncoders(MsgSubmitMisbehaviour),
  converters: toConverters(MsgSubmitMisbehaviour)
});
export const useSubmitMisbehaviour = buildUseMutation<MsgSubmitMisbehaviour, Error>({
  builderMutationFn: createSubmitMisbehaviour
});