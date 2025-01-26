import { buildUseMutation } from "../../../react-query";
import { MsgGrant, MsgExec, MsgRevoke } from "./tx";
import { createGrant, createExec, createRevoke } from "./tx.rpc.func";
export const useGrant = buildUseMutation<MsgGrant, Error>({
  builderMutationFn: createGrant
});
export const useExec = buildUseMutation<MsgExec, Error>({
  builderMutationFn: createExec
});
export const useRevoke = buildUseMutation<MsgRevoke, Error>({
  builderMutationFn: createRevoke
});