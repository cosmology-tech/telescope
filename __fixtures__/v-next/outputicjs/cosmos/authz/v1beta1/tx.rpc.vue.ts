import { buildUseVueMutation } from "../../../vue-query";
import { MsgGrant, MsgExec, MsgRevoke } from "./tx";
import { createGrant, createExec, createRevoke } from "./tx.rpc.func.ts";
export const useGrant = buildUseVueMutation<MsgGrant, Error>({
  builderMutationFn: createGrant
});
export const useExec = buildUseVueMutation<MsgExec, Error>({
  builderMutationFn: createExec
});
export const useRevoke = buildUseVueMutation<MsgRevoke, Error>({
  builderMutationFn: createRevoke
});