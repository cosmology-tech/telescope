import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
export const createCreateProvider = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateProvider>({
  clientResolver,
  typeUrl: MsgCreateProvider.typeUrl,
  encoders: toEncoders(MsgCreateProvider),
  converters: toConverters(MsgCreateProvider)
});
export const createUpdateProvider = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateProvider>({
  clientResolver,
  typeUrl: MsgUpdateProvider.typeUrl,
  encoders: toEncoders(MsgUpdateProvider),
  converters: toConverters(MsgUpdateProvider)
});
export const createDeleteProvider = (clientResolver?: SigningClientResolver) => buildTx<MsgDeleteProvider>({
  clientResolver,
  typeUrl: MsgDeleteProvider.typeUrl,
  encoders: toEncoders(MsgDeleteProvider),
  converters: toConverters(MsgDeleteProvider)
});