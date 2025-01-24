import { buildUseMutation } from "../../react-query";
import { MsgCreateGauge, MsgAddToGauge } from "./tx";
import { createCreateGauge, createAddToGauge } from "./tx.rpc.func.ts";
export const useCreateGauge = buildUseMutation<MsgCreateGauge, Error>({
  builderMutationFn: createCreateGauge
});
export const useAddToGauge = buildUseMutation<MsgAddToGauge, Error>({
  builderMutationFn: createAddToGauge
});