import { buildUseVueMutation } from "../../../vue-query";
import { MsgConvertCoin, MsgConvertERC20 } from "./tx";
import { createConvertCoin, createConvertERC20 } from "./tx.rpc.func.ts";
export const useConvertCoin = buildUseVueMutation<MsgConvertCoin, Error>({
  builderMutationFn: createConvertCoin
});
export const useConvertERC20 = buildUseVueMutation<MsgConvertERC20, Error>({
  builderMutationFn: createConvertERC20
});