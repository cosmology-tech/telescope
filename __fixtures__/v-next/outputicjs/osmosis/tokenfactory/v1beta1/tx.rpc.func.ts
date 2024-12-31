import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { buildUseMutation } from "../../../react-query";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata } from "./tx";
export const createCreateDenom = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateDenom>({
  clientResolver,
  typeUrl: MsgCreateDenom.typeUrl,
  encoders: toEncoders(MsgCreateDenom),
  converters: toConverters(MsgCreateDenom)
});
export const useCreateDenom = buildUseMutation<MsgCreateDenom, Error>({
  builderMutationFn: createCreateDenom
});
export const createMint = (clientResolver?: SigningClientResolver) => buildTx<MsgMint>({
  clientResolver,
  typeUrl: MsgMint.typeUrl,
  encoders: toEncoders(MsgMint),
  converters: toConverters(MsgMint)
});
export const useMint = buildUseMutation<MsgMint, Error>({
  builderMutationFn: createMint
});
export const createBurn = (clientResolver?: SigningClientResolver) => buildTx<MsgBurn>({
  clientResolver,
  typeUrl: MsgBurn.typeUrl,
  encoders: toEncoders(MsgBurn),
  converters: toConverters(MsgBurn)
});
export const useBurn = buildUseMutation<MsgBurn, Error>({
  builderMutationFn: createBurn
});
export const createChangeAdmin = (clientResolver?: SigningClientResolver) => buildTx<MsgChangeAdmin>({
  clientResolver,
  typeUrl: MsgChangeAdmin.typeUrl,
  encoders: toEncoders(MsgChangeAdmin),
  converters: toConverters(MsgChangeAdmin)
});
export const useChangeAdmin = buildUseMutation<MsgChangeAdmin, Error>({
  builderMutationFn: createChangeAdmin
});
export const createSetDenomMetadata = (clientResolver?: SigningClientResolver) => buildTx<MsgSetDenomMetadata>({
  clientResolver,
  typeUrl: MsgSetDenomMetadata.typeUrl,
  encoders: toEncoders(MsgSetDenomMetadata),
  converters: toConverters(MsgSetDenomMetadata)
});
export const useSetDenomMetadata = buildUseMutation<MsgSetDenomMetadata, Error>({
  builderMutationFn: createSetDenomMetadata
});