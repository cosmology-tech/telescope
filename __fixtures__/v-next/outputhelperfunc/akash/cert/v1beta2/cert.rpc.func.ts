import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateCertificate, MsgCreateCertificateSDKType, MsgCreateCertificateResponse, MsgCreateCertificateResponseSDKType, MsgRevokeCertificate, MsgRevokeCertificateSDKType, MsgRevokeCertificateResponse, MsgRevokeCertificateResponseSDKType } from "./cert";
export const createCreateCertificate = (getSigningClient: SigningClientResolver) => buildTx<CreateCertificate>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCreateCertificate.typeUrl,
  encoders: toEncoders(CreateCertificate),
  converters: toConverters(CreateCertificate)
});
export const useCreateCertificate = buildUseMutation<CreateCertificate, Error>({
  builderMutationFn: createCreateCertificate
});
export const createRevokeCertificate = (getSigningClient: SigningClientResolver) => buildTx<RevokeCertificate>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgRevokeCertificate.typeUrl,
  encoders: toEncoders(RevokeCertificate),
  converters: toConverters(RevokeCertificate)
});
export const useRevokeCertificate = buildUseMutation<RevokeCertificate, Error>({
  builderMutationFn: createRevokeCertificate
});