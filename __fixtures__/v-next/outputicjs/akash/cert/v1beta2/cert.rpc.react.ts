import { buildUseMutation } from "../../../react-query";
import { MsgCreateCertificate, MsgRevokeCertificate } from "./cert";
import { createCreateCertificate, createRevokeCertificate } from "./cert.rpc.func.ts";
export const useCreateCertificate = buildUseMutation<MsgCreateCertificate, Error>({
  builderMutationFn: createCreateCertificate
});
export const useRevokeCertificate = buildUseMutation<MsgRevokeCertificate, Error>({
  builderMutationFn: createRevokeCertificate
});