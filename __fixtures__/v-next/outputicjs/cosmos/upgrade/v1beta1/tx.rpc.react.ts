import { buildUseMutation } from "../../../react-query";
import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
import { createSoftwareUpgrade, createCancelUpgrade } from "./tx.rpc.func";
export const useSoftwareUpgrade = buildUseMutation<MsgSoftwareUpgrade, Error>({
  builderMutationFn: createSoftwareUpgrade
});
export const useCancelUpgrade = buildUseMutation<MsgCancelUpgrade, Error>({
  builderMutationFn: createCancelUpgrade
});