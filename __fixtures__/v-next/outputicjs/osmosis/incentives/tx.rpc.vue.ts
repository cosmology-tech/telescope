import { buildUseVueMutation } from "../../vue-query";
import { MsgCreateGauge, MsgAddToGauge } from "./tx";
import { createCreateGauge, createAddToGauge } from "./tx.rpc.func.ts";
export const useCreateGauge = buildUseVueMutation<MsgCreateGauge, Error>({
  builderMutationFn: createCreateGauge
});
export const useAddToGauge = buildUseVueMutation<MsgAddToGauge, Error>({
  builderMutationFn: createAddToGauge
});