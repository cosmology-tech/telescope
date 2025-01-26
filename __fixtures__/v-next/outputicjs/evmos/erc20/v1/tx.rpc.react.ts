import { buildUseMutation } from "../../../react-query";
import { MsgConvertCoin, MsgConvertERC20 } from "./tx";
import { createConvertCoin, createConvertERC20 } from "./tx.rpc.func";
export const useConvertCoin = buildUseMutation<MsgConvertCoin, Error>({
  builderMutationFn: createConvertCoin
});
export const useConvertERC20 = buildUseMutation<MsgConvertERC20, Error>({
  builderMutationFn: createConvertERC20
});