import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgJoinSwapExternAmountIn, MsgJoinSwapShareAmountOut, MsgExitSwapExternAmountOut, MsgExitSwapShareAmountIn } from "./tx";
export const createJoinPool = (getSigningClient: SigningClientResolver) => buildTx<MsgJoinPool>({
  getSigningClient: getSigningClient,
  typeUrl: MsgJoinPool.typeUrl,
  encoders: toEncoders(MsgJoinPool),
  converters: toConverters(MsgJoinPool)
});
export const useJoinPool = buildUseMutation<MsgJoinPool, Error>({
  builderMutationFn: createJoinPool
});
export const createExitPool = (getSigningClient: SigningClientResolver) => buildTx<MsgExitPool>({
  getSigningClient: getSigningClient,
  typeUrl: MsgExitPool.typeUrl,
  encoders: toEncoders(MsgExitPool),
  converters: toConverters(MsgExitPool)
});
export const useExitPool = buildUseMutation<MsgExitPool, Error>({
  builderMutationFn: createExitPool
});
export const createSwapExactAmountIn = (getSigningClient: SigningClientResolver) => buildTx<MsgSwapExactAmountIn>({
  getSigningClient: getSigningClient,
  typeUrl: MsgSwapExactAmountIn.typeUrl,
  encoders: toEncoders(MsgSwapExactAmountIn),
  converters: toConverters(MsgSwapExactAmountIn)
});
export const useSwapExactAmountIn = buildUseMutation<MsgSwapExactAmountIn, Error>({
  builderMutationFn: createSwapExactAmountIn
});
export const createSwapExactAmountOut = (getSigningClient: SigningClientResolver) => buildTx<MsgSwapExactAmountOut>({
  getSigningClient: getSigningClient,
  typeUrl: MsgSwapExactAmountOut.typeUrl,
  encoders: toEncoders(MsgSwapExactAmountOut),
  converters: toConverters(MsgSwapExactAmountOut)
});
export const useSwapExactAmountOut = buildUseMutation<MsgSwapExactAmountOut, Error>({
  builderMutationFn: createSwapExactAmountOut
});
export const createJoinSwapExternAmountIn = (getSigningClient: SigningClientResolver) => buildTx<MsgJoinSwapExternAmountIn>({
  getSigningClient: getSigningClient,
  typeUrl: MsgJoinSwapExternAmountIn.typeUrl,
  encoders: toEncoders(MsgJoinSwapExternAmountIn),
  converters: toConverters(MsgJoinSwapExternAmountIn)
});
export const useJoinSwapExternAmountIn = buildUseMutation<MsgJoinSwapExternAmountIn, Error>({
  builderMutationFn: createJoinSwapExternAmountIn
});
export const createJoinSwapShareAmountOut = (getSigningClient: SigningClientResolver) => buildTx<MsgJoinSwapShareAmountOut>({
  getSigningClient: getSigningClient,
  typeUrl: MsgJoinSwapShareAmountOut.typeUrl,
  encoders: toEncoders(MsgJoinSwapShareAmountOut),
  converters: toConverters(MsgJoinSwapShareAmountOut)
});
export const useJoinSwapShareAmountOut = buildUseMutation<MsgJoinSwapShareAmountOut, Error>({
  builderMutationFn: createJoinSwapShareAmountOut
});
export const createExitSwapExternAmountOut = (getSigningClient: SigningClientResolver) => buildTx<MsgExitSwapExternAmountOut>({
  getSigningClient: getSigningClient,
  typeUrl: MsgExitSwapExternAmountOut.typeUrl,
  encoders: toEncoders(MsgExitSwapExternAmountOut),
  converters: toConverters(MsgExitSwapExternAmountOut)
});
export const useExitSwapExternAmountOut = buildUseMutation<MsgExitSwapExternAmountOut, Error>({
  builderMutationFn: createExitSwapExternAmountOut
});
export const createExitSwapShareAmountIn = (getSigningClient: SigningClientResolver) => buildTx<MsgExitSwapShareAmountIn>({
  getSigningClient: getSigningClient,
  typeUrl: MsgExitSwapShareAmountIn.typeUrl,
  encoders: toEncoders(MsgExitSwapShareAmountIn),
  converters: toConverters(MsgExitSwapShareAmountIn)
});
export const useExitSwapShareAmountIn = buildUseMutation<MsgExitSwapShareAmountIn, Error>({
  builderMutationFn: createExitSwapShareAmountIn
});