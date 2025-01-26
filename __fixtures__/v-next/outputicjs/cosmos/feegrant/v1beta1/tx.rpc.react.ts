import { buildUseMutation } from "../../../react-query";
import { MsgGrantAllowance, MsgRevokeAllowance } from "./tx";
import { createGrantAllowance, createRevokeAllowance } from "./tx.rpc.func";
export const useGrantAllowance = buildUseMutation<MsgGrantAllowance, Error>({
  builderMutationFn: createGrantAllowance
});
export const useRevokeAllowance = buildUseMutation<MsgRevokeAllowance, Error>({
  builderMutationFn: createRevokeAllowance
});