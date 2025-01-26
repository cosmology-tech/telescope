import { buildTx, SigningClientResolver } from "../../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour } from "./tx";
export const createCreateClient = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateClient>({
  clientResolver,
  typeUrl: MsgCreateClient.typeUrl,
  encoders: toEncoders(MsgCreateClient),
  converters: toConverters(MsgCreateClient)
});
export const createUpdateClient = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateClient>({
  clientResolver,
  typeUrl: MsgUpdateClient.typeUrl,
  encoders: toEncoders(MsgUpdateClient),
  converters: toConverters(MsgUpdateClient)
});
export const createUpgradeClient = (clientResolver?: SigningClientResolver) => buildTx<MsgUpgradeClient>({
  clientResolver,
  typeUrl: MsgUpgradeClient.typeUrl,
  encoders: toEncoders(MsgUpgradeClient),
  converters: toConverters(MsgUpgradeClient)
});
export const createSubmitMisbehaviour = (clientResolver?: SigningClientResolver) => buildTx<MsgSubmitMisbehaviour>({
  clientResolver,
  typeUrl: MsgSubmitMisbehaviour.typeUrl,
  encoders: toEncoders(MsgSubmitMisbehaviour),
  converters: toConverters(MsgSubmitMisbehaviour)
});