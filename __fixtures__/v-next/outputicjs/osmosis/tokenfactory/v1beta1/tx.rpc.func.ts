import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata } from "./tx";
export const createCreateDenom = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateDenom>({
  clientResolver,
  typeUrl: MsgCreateDenom.typeUrl,
  encoders: toEncoders(MsgCreateDenom),
  converters: toConverters(MsgCreateDenom)
});
export const createMint = (clientResolver?: SigningClientResolver) => buildTx<MsgMint>({
  clientResolver,
  typeUrl: MsgMint.typeUrl,
  encoders: toEncoders(MsgMint),
  converters: toConverters(MsgMint)
});
export const createBurn = (clientResolver?: SigningClientResolver) => buildTx<MsgBurn>({
  clientResolver,
  typeUrl: MsgBurn.typeUrl,
  encoders: toEncoders(MsgBurn),
  converters: toConverters(MsgBurn)
});
export const createChangeAdmin = (clientResolver?: SigningClientResolver) => buildTx<MsgChangeAdmin>({
  clientResolver,
  typeUrl: MsgChangeAdmin.typeUrl,
  encoders: toEncoders(MsgChangeAdmin),
  converters: toConverters(MsgChangeAdmin)
});
export const createSetDenomMetadata = (clientResolver?: SigningClientResolver) => buildTx<MsgSetDenomMetadata>({
  clientResolver,
  typeUrl: MsgSetDenomMetadata.typeUrl,
  encoders: toEncoders(MsgSetDenomMetadata),
  converters: toConverters(MsgSetDenomMetadata)
});