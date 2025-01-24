import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deploymentmsg";
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./groupmsg";
export const createCreateDeployment = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateDeployment>({
  clientResolver,
  typeUrl: MsgCreateDeployment.typeUrl,
  encoders: toEncoders(MsgCreateDeployment),
  converters: toConverters(MsgCreateDeployment)
});
export const createDepositDeployment = (clientResolver?: SigningClientResolver) => buildTx<MsgDepositDeployment>({
  clientResolver,
  typeUrl: MsgDepositDeployment.typeUrl,
  encoders: toEncoders(MsgDepositDeployment),
  converters: toConverters(MsgDepositDeployment)
});
export const createUpdateDeployment = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateDeployment>({
  clientResolver,
  typeUrl: MsgUpdateDeployment.typeUrl,
  encoders: toEncoders(MsgUpdateDeployment),
  converters: toConverters(MsgUpdateDeployment)
});
export const createCloseDeployment = (clientResolver?: SigningClientResolver) => buildTx<MsgCloseDeployment>({
  clientResolver,
  typeUrl: MsgCloseDeployment.typeUrl,
  encoders: toEncoders(MsgCloseDeployment),
  converters: toConverters(MsgCloseDeployment)
});
export const createCloseGroup = (clientResolver?: SigningClientResolver) => buildTx<MsgCloseGroup>({
  clientResolver,
  typeUrl: MsgCloseGroup.typeUrl,
  encoders: toEncoders(MsgCloseGroup),
  converters: toConverters(MsgCloseGroup)
});
export const createPauseGroup = (clientResolver?: SigningClientResolver) => buildTx<MsgPauseGroup>({
  clientResolver,
  typeUrl: MsgPauseGroup.typeUrl,
  encoders: toEncoders(MsgPauseGroup),
  converters: toConverters(MsgPauseGroup)
});
export const createStartGroup = (clientResolver?: SigningClientResolver) => buildTx<MsgStartGroup>({
  clientResolver,
  typeUrl: MsgStartGroup.typeUrl,
  encoders: toEncoders(MsgStartGroup),
  converters: toConverters(MsgStartGroup)
});