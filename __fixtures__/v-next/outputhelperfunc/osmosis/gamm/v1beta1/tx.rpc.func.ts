import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgJoinPool, MsgJoinPoolSDKType, MsgJoinPoolResponse, MsgJoinPoolResponseSDKType, MsgExitPool, MsgExitPoolSDKType, MsgExitPoolResponse, MsgExitPoolResponseSDKType, MsgSwapExactAmountIn, MsgSwapExactAmountInSDKType, MsgSwapExactAmountInResponse, MsgSwapExactAmountInResponseSDKType, MsgSwapExactAmountOut, MsgSwapExactAmountOutSDKType, MsgSwapExactAmountOutResponse, MsgSwapExactAmountOutResponseSDKType, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInSDKType, MsgJoinSwapExternAmountInResponse, MsgJoinSwapExternAmountInResponseSDKType, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutSDKType, MsgJoinSwapShareAmountOutResponse, MsgJoinSwapShareAmountOutResponseSDKType, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutSDKType, MsgExitSwapExternAmountOutResponse, MsgExitSwapExternAmountOutResponseSDKType, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInSDKType, MsgExitSwapShareAmountInResponse, MsgExitSwapShareAmountInResponseSDKType } from "./tx";
export const createJoinPool = (getSigningClient: SigningClientResolver) => buildTx<JoinPool>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgJoinPool.typeUrl,
  encoders: toEncoders(JoinPool),
  converters: toConverters(JoinPool)
});
export const useJoinPool = buildUseMutation<JoinPool, Error>({
  builderMutationFn: createJoinPool
});
export const createExitPool = (getSigningClient: SigningClientResolver) => buildTx<ExitPool>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgExitPool.typeUrl,
  encoders: toEncoders(ExitPool),
  converters: toConverters(ExitPool)
});
export const useExitPool = buildUseMutation<ExitPool, Error>({
  builderMutationFn: createExitPool
});
export const createSwapExactAmountIn = (getSigningClient: SigningClientResolver) => buildTx<SwapExactAmountIn>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgSwapExactAmountIn.typeUrl,
  encoders: toEncoders(SwapExactAmountIn),
  converters: toConverters(SwapExactAmountIn)
});
export const useSwapExactAmountIn = buildUseMutation<SwapExactAmountIn, Error>({
  builderMutationFn: createSwapExactAmountIn
});
export const createSwapExactAmountOut = (getSigningClient: SigningClientResolver) => buildTx<SwapExactAmountOut>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgSwapExactAmountOut.typeUrl,
  encoders: toEncoders(SwapExactAmountOut),
  converters: toConverters(SwapExactAmountOut)
});
export const useSwapExactAmountOut = buildUseMutation<SwapExactAmountOut, Error>({
  builderMutationFn: createSwapExactAmountOut
});
export const createJoinSwapExternAmountIn = (getSigningClient: SigningClientResolver) => buildTx<JoinSwapExternAmountIn>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgJoinSwapExternAmountIn.typeUrl,
  encoders: toEncoders(JoinSwapExternAmountIn),
  converters: toConverters(JoinSwapExternAmountIn)
});
export const useJoinSwapExternAmountIn = buildUseMutation<JoinSwapExternAmountIn, Error>({
  builderMutationFn: createJoinSwapExternAmountIn
});
export const createJoinSwapShareAmountOut = (getSigningClient: SigningClientResolver) => buildTx<JoinSwapShareAmountOut>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgJoinSwapShareAmountOut.typeUrl,
  encoders: toEncoders(JoinSwapShareAmountOut),
  converters: toConverters(JoinSwapShareAmountOut)
});
export const useJoinSwapShareAmountOut = buildUseMutation<JoinSwapShareAmountOut, Error>({
  builderMutationFn: createJoinSwapShareAmountOut
});
export const createExitSwapExternAmountOut = (getSigningClient: SigningClientResolver) => buildTx<ExitSwapExternAmountOut>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgExitSwapExternAmountOut.typeUrl,
  encoders: toEncoders(ExitSwapExternAmountOut),
  converters: toConverters(ExitSwapExternAmountOut)
});
export const useExitSwapExternAmountOut = buildUseMutation<ExitSwapExternAmountOut, Error>({
  builderMutationFn: createExitSwapExternAmountOut
});
export const createExitSwapShareAmountIn = (getSigningClient: SigningClientResolver) => buildTx<ExitSwapShareAmountIn>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgExitSwapShareAmountIn.typeUrl,
  encoders: toEncoders(ExitSwapShareAmountIn),
  converters: toConverters(ExitSwapShareAmountIn)
});
export const useExitSwapShareAmountIn = buildUseMutation<ExitSwapShareAmountIn, Error>({
  builderMutationFn: createExitSwapShareAmountIn
});