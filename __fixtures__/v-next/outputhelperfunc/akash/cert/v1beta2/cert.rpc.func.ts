import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateCertificate, MsgCreateCertificateSDKType, MsgCreateCertificateResponse, MsgCreateCertificateResponseSDKType, MsgRevokeCertificate, MsgRevokeCertificateSDKType, MsgRevokeCertificateResponse, MsgRevokeCertificateResponseSDKType } from "./cert";
export const createCreateCertificate = (getSigningClient: SigningClientResolver) => buildTx<MsgCreateCertificate>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCreateCertificate.typeUrl,
  encoders: toEncoders(MsgCreateCertificate),
  converters: toConverters(MsgCreateCertificate)
});
export const useCreateCertificate = buildUseMutation<MsgCreateCertificate, Error>({
  builderMutationFn: createCreateCertificate
});
export const createRevokeCertificate = (getSigningClient: SigningClientResolver) => buildTx<MsgRevokeCertificate>({
  getSigningClient: getSigningClient,
  typeUrl: MsgRevokeCertificate.typeUrl,
  encoders: toEncoders(MsgRevokeCertificate),
  converters: toConverters(MsgRevokeCertificate)
});
export const useRevokeCertificate = buildUseMutation<MsgRevokeCertificate, Error>({
  builderMutationFn: createRevokeCertificate
});