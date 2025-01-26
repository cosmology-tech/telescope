import { buildUseVueMutation } from "../../../vue-query";
import { MsgGrantAllowance, MsgRevokeAllowance } from "./tx";
import { createGrantAllowance, createRevokeAllowance } from "./tx.rpc.func.ts";
export const useGrantAllowance = buildUseVueMutation<MsgGrantAllowance, Error>({
  builderMutationFn: createGrantAllowance
});
export const useRevokeAllowance = buildUseVueMutation<MsgRevokeAllowance, Error>({
  builderMutationFn: createRevokeAllowance
});