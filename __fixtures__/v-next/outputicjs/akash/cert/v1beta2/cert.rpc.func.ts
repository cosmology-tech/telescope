import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateCertificate, MsgRevokeCertificate } from "./cert";
export const createCreateCertificate = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateCertificate>({
  clientResolver,
  typeUrl: MsgCreateCertificate.typeUrl,
  encoders: toEncoders(MsgCreateCertificate),
  converters: toConverters(MsgCreateCertificate)
});
export const createRevokeCertificate = (clientResolver?: SigningClientResolver) => buildTx<MsgRevokeCertificate>({
  clientResolver,
  typeUrl: MsgRevokeCertificate.typeUrl,
  encoders: toEncoders(MsgRevokeCertificate),
  converters: toConverters(MsgRevokeCertificate)
});