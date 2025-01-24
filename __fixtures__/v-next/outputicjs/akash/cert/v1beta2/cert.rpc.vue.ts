import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateCertificate, MsgRevokeCertificate } from "./cert";
import { createCreateCertificate, createRevokeCertificate } from "./cert.rpc.func.ts";
export const useCreateCertificate = buildUseVueMutation<MsgCreateCertificate, Error>({
  builderMutationFn: createCreateCertificate
});
export const useRevokeCertificate = buildUseVueMutation<MsgRevokeCertificate, Error>({
  builderMutationFn: createRevokeCertificate
});