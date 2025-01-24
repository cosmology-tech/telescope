import { buildUseVueMutation } from "../../../vue-query";
import { MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgJoinSwapExternAmountIn, MsgJoinSwapShareAmountOut, MsgExitSwapExternAmountOut, MsgExitSwapShareAmountIn } from "./tx";
import { createJoinPool, createExitPool, createSwapExactAmountIn, createSwapExactAmountOut, createJoinSwapExternAmountIn, createJoinSwapShareAmountOut, createExitSwapExternAmountOut, createExitSwapShareAmountIn } from "./tx.rpc.func.ts";
export const useJoinPool = buildUseVueMutation<MsgJoinPool, Error>({
  builderMutationFn: createJoinPool
});
export const useExitPool = buildUseVueMutation<MsgExitPool, Error>({
  builderMutationFn: createExitPool
});
export const useSwapExactAmountIn = buildUseVueMutation<MsgSwapExactAmountIn, Error>({
  builderMutationFn: createSwapExactAmountIn
});
export const useSwapExactAmountOut = buildUseVueMutation<MsgSwapExactAmountOut, Error>({
  builderMutationFn: createSwapExactAmountOut
});
export const useJoinSwapExternAmountIn = buildUseVueMutation<MsgJoinSwapExternAmountIn, Error>({
  builderMutationFn: createJoinSwapExternAmountIn
});
export const useJoinSwapShareAmountOut = buildUseVueMutation<MsgJoinSwapShareAmountOut, Error>({
  builderMutationFn: createJoinSwapShareAmountOut
});
export const useExitSwapExternAmountOut = buildUseVueMutation<MsgExitSwapExternAmountOut, Error>({
  builderMutationFn: createExitSwapExternAmountOut
});
export const useExitSwapShareAmountIn = buildUseVueMutation<MsgExitSwapShareAmountIn, Error>({
  builderMutationFn: createExitSwapShareAmountIn
});