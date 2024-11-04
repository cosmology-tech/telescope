import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgJoinSwapExternAmountIn, MsgJoinSwapShareAmountOut, MsgExitSwapExternAmountOut, MsgExitSwapShareAmountIn } from "./tx";
export const createJoinPool = (clientResolver: SigningClientResolver) => buildTx<MsgJoinPool>({
  clientResolver,
  typeUrl: MsgJoinPool.typeUrl,
  encoders: toEncoders(MsgJoinPool),
  converters: toConverters(MsgJoinPool)
});
export const useJoinPool = buildUseMutation<MsgJoinPool, Error>({
  builderMutationFn: createJoinPool
});
export const createExitPool = (clientResolver: SigningClientResolver) => buildTx<MsgExitPool>({
  clientResolver,
  typeUrl: MsgExitPool.typeUrl,
  encoders: toEncoders(MsgExitPool),
  converters: toConverters(MsgExitPool)
});
export const useExitPool = buildUseMutation<MsgExitPool, Error>({
  builderMutationFn: createExitPool
});
export const createSwapExactAmountIn = (clientResolver: SigningClientResolver) => buildTx<MsgSwapExactAmountIn>({
  clientResolver,
  typeUrl: MsgSwapExactAmountIn.typeUrl,
  encoders: toEncoders(MsgSwapExactAmountIn),
  converters: toConverters(MsgSwapExactAmountIn)
});
export const useSwapExactAmountIn = buildUseMutation<MsgSwapExactAmountIn, Error>({
  builderMutationFn: createSwapExactAmountIn
});
export const createSwapExactAmountOut = (clientResolver: SigningClientResolver) => buildTx<MsgSwapExactAmountOut>({
  clientResolver,
  typeUrl: MsgSwapExactAmountOut.typeUrl,
  encoders: toEncoders(MsgSwapExactAmountOut),
  converters: toConverters(MsgSwapExactAmountOut)
});
export const useSwapExactAmountOut = buildUseMutation<MsgSwapExactAmountOut, Error>({
  builderMutationFn: createSwapExactAmountOut
});
export const createJoinSwapExternAmountIn = (clientResolver: SigningClientResolver) => buildTx<MsgJoinSwapExternAmountIn>({
  clientResolver,
  typeUrl: MsgJoinSwapExternAmountIn.typeUrl,
  encoders: toEncoders(MsgJoinSwapExternAmountIn),
  converters: toConverters(MsgJoinSwapExternAmountIn)
});
export const useJoinSwapExternAmountIn = buildUseMutation<MsgJoinSwapExternAmountIn, Error>({
  builderMutationFn: createJoinSwapExternAmountIn
});
export const createJoinSwapShareAmountOut = (clientResolver: SigningClientResolver) => buildTx<MsgJoinSwapShareAmountOut>({
  clientResolver,
  typeUrl: MsgJoinSwapShareAmountOut.typeUrl,
  encoders: toEncoders(MsgJoinSwapShareAmountOut),
  converters: toConverters(MsgJoinSwapShareAmountOut)
});
export const useJoinSwapShareAmountOut = buildUseMutation<MsgJoinSwapShareAmountOut, Error>({
  builderMutationFn: createJoinSwapShareAmountOut
});
export const createExitSwapExternAmountOut = (clientResolver: SigningClientResolver) => buildTx<MsgExitSwapExternAmountOut>({
  clientResolver,
  typeUrl: MsgExitSwapExternAmountOut.typeUrl,
  encoders: toEncoders(MsgExitSwapExternAmountOut),
  converters: toConverters(MsgExitSwapExternAmountOut)
});
export const useExitSwapExternAmountOut = buildUseMutation<MsgExitSwapExternAmountOut, Error>({
  builderMutationFn: createExitSwapExternAmountOut
});
export const createExitSwapShareAmountIn = (clientResolver: SigningClientResolver) => buildTx<MsgExitSwapShareAmountIn>({
  clientResolver,
  typeUrl: MsgExitSwapShareAmountIn.typeUrl,
  encoders: toEncoders(MsgExitSwapShareAmountIn),
  converters: toConverters(MsgExitSwapShareAmountIn)
});
export const useExitSwapShareAmountIn = buildUseMutation<MsgExitSwapShareAmountIn, Error>({
  builderMutationFn: createExitSwapShareAmountIn
});