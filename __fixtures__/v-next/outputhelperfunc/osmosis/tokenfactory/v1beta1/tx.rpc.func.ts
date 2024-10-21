import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateDenom, MsgCreateDenomSDKType, MsgCreateDenomResponse, MsgCreateDenomResponseSDKType, MsgMint, MsgMintSDKType, MsgMintResponse, MsgMintResponseSDKType, MsgBurn, MsgBurnSDKType, MsgBurnResponse, MsgBurnResponseSDKType, MsgChangeAdmin, MsgChangeAdminSDKType, MsgChangeAdminResponse, MsgChangeAdminResponseSDKType, MsgSetDenomMetadata, MsgSetDenomMetadataSDKType, MsgSetDenomMetadataResponse, MsgSetDenomMetadataResponseSDKType } from "./tx";
export const createCreateDenom = (getSigningClient: SigningClientResolver) => buildTx<CreateDenom>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCreateDenom.typeUrl,
  encoders: toEncoders(CreateDenom),
  converters: toConverters(CreateDenom)
});
export const useCreateDenom = buildUseMutation<CreateDenom, Error>({
  builderMutationFn: createCreateDenom
});
export const createMint = (getSigningClient: SigningClientResolver) => buildTx<Mint>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgMint.typeUrl,
  encoders: toEncoders(Mint),
  converters: toConverters(Mint)
});
export const useMint = buildUseMutation<Mint, Error>({
  builderMutationFn: createMint
});
export const createBurn = (getSigningClient: SigningClientResolver) => buildTx<Burn>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgBurn.typeUrl,
  encoders: toEncoders(Burn),
  converters: toConverters(Burn)
});
export const useBurn = buildUseMutation<Burn, Error>({
  builderMutationFn: createBurn
});
export const createChangeAdmin = (getSigningClient: SigningClientResolver) => buildTx<ChangeAdmin>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgChangeAdmin.typeUrl,
  encoders: toEncoders(ChangeAdmin),
  converters: toConverters(ChangeAdmin)
});
export const useChangeAdmin = buildUseMutation<ChangeAdmin, Error>({
  builderMutationFn: createChangeAdmin
});
export const createSetDenomMetadata = (getSigningClient: SigningClientResolver) => buildTx<SetDenomMetadata>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgSetDenomMetadata.typeUrl,
  encoders: toEncoders(SetDenomMetadata),
  converters: toConverters(SetDenomMetadata)
});
export const useSetDenomMetadata = buildUseMutation<SetDenomMetadata, Error>({
  builderMutationFn: createSetDenomMetadata
});