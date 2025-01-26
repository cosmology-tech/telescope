import { buildUseMutation } from "../../../react-query";
import { MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgJoinSwapExternAmountIn, MsgJoinSwapShareAmountOut, MsgExitSwapExternAmountOut, MsgExitSwapShareAmountIn } from "./tx";
import { createJoinPool, createExitPool, createSwapExactAmountIn, createSwapExactAmountOut, createJoinSwapExternAmountIn, createJoinSwapShareAmountOut, createExitSwapExternAmountOut, createExitSwapShareAmountIn } from "./tx.rpc.func.ts";
export const useJoinPool = buildUseMutation<MsgJoinPool, Error>({
  builderMutationFn: createJoinPool
});
export const useExitPool = buildUseMutation<MsgExitPool, Error>({
  builderMutationFn: createExitPool
});
export const useSwapExactAmountIn = buildUseMutation<MsgSwapExactAmountIn, Error>({
  builderMutationFn: createSwapExactAmountIn
});
export const useSwapExactAmountOut = buildUseMutation<MsgSwapExactAmountOut, Error>({
  builderMutationFn: createSwapExactAmountOut
});
export const useJoinSwapExternAmountIn = buildUseMutation<MsgJoinSwapExternAmountIn, Error>({
  builderMutationFn: createJoinSwapExternAmountIn
});
export const useJoinSwapShareAmountOut = buildUseMutation<MsgJoinSwapShareAmountOut, Error>({
  builderMutationFn: createJoinSwapShareAmountOut
});
export const useExitSwapExternAmountOut = buildUseMutation<MsgExitSwapExternAmountOut, Error>({
  builderMutationFn: createExitSwapExternAmountOut
});
export const useExitSwapShareAmountIn = buildUseMutation<MsgExitSwapShareAmountIn, Error>({
  builderMutationFn: createExitSwapShareAmountIn
});