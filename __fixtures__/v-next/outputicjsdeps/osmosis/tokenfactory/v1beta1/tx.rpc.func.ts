import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata } from "./tx";
export const createCreateDenom = (getSigningClient: SigningClientResolver) => buildTx<MsgCreateDenom>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCreateDenom.typeUrl,
  encoders: toEncoders(MsgCreateDenom),
  converters: toConverters(MsgCreateDenom)
});
export const useCreateDenom = buildUseMutation<MsgCreateDenom, Error>({
  builderMutationFn: createCreateDenom
});
export const createMint = (getSigningClient: SigningClientResolver) => buildTx<MsgMint>({
  getSigningClient: getSigningClient,
  typeUrl: MsgMint.typeUrl,
  encoders: toEncoders(MsgMint),
  converters: toConverters(MsgMint)
});
export const useMint = buildUseMutation<MsgMint, Error>({
  builderMutationFn: createMint
});
export const createBurn = (getSigningClient: SigningClientResolver) => buildTx<MsgBurn>({
  getSigningClient: getSigningClient,
  typeUrl: MsgBurn.typeUrl,
  encoders: toEncoders(MsgBurn),
  converters: toConverters(MsgBurn)
});
export const useBurn = buildUseMutation<MsgBurn, Error>({
  builderMutationFn: createBurn
});
export const createChangeAdmin = (getSigningClient: SigningClientResolver) => buildTx<MsgChangeAdmin>({
  getSigningClient: getSigningClient,
  typeUrl: MsgChangeAdmin.typeUrl,
  encoders: toEncoders(MsgChangeAdmin),
  converters: toConverters(MsgChangeAdmin)
});
export const useChangeAdmin = buildUseMutation<MsgChangeAdmin, Error>({
  builderMutationFn: createChangeAdmin
});
export const createSetDenomMetadata = (getSigningClient: SigningClientResolver) => buildTx<MsgSetDenomMetadata>({
  getSigningClient: getSigningClient,
  typeUrl: MsgSetDenomMetadata.typeUrl,
  encoders: toEncoders(MsgSetDenomMetadata),
  converters: toConverters(MsgSetDenomMetadata)
});
export const useSetDenomMetadata = buildUseMutation<MsgSetDenomMetadata, Error>({
  builderMutationFn: createSetDenomMetadata
});