import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgJoinSwapExternAmountIn, MsgJoinSwapShareAmountOut, MsgExitSwapExternAmountOut, MsgExitSwapShareAmountIn } from "./tx";
export const createJoinPool = (clientResolver?: SigningClientResolver) => buildTx<MsgJoinPool>({
  clientResolver,
  typeUrl: MsgJoinPool.typeUrl,
  encoders: toEncoders(MsgJoinPool),
  converters: toConverters(MsgJoinPool)
});
export const createExitPool = (clientResolver?: SigningClientResolver) => buildTx<MsgExitPool>({
  clientResolver,
  typeUrl: MsgExitPool.typeUrl,
  encoders: toEncoders(MsgExitPool),
  converters: toConverters(MsgExitPool)
});
export const createSwapExactAmountIn = (clientResolver?: SigningClientResolver) => buildTx<MsgSwapExactAmountIn>({
  clientResolver,
  typeUrl: MsgSwapExactAmountIn.typeUrl,
  encoders: toEncoders(MsgSwapExactAmountIn),
  converters: toConverters(MsgSwapExactAmountIn)
});
export const createSwapExactAmountOut = (clientResolver?: SigningClientResolver) => buildTx<MsgSwapExactAmountOut>({
  clientResolver,
  typeUrl: MsgSwapExactAmountOut.typeUrl,
  encoders: toEncoders(MsgSwapExactAmountOut),
  converters: toConverters(MsgSwapExactAmountOut)
});
export const createJoinSwapExternAmountIn = (clientResolver?: SigningClientResolver) => buildTx<MsgJoinSwapExternAmountIn>({
  clientResolver,
  typeUrl: MsgJoinSwapExternAmountIn.typeUrl,
  encoders: toEncoders(MsgJoinSwapExternAmountIn),
  converters: toConverters(MsgJoinSwapExternAmountIn)
});
export const createJoinSwapShareAmountOut = (clientResolver?: SigningClientResolver) => buildTx<MsgJoinSwapShareAmountOut>({
  clientResolver,
  typeUrl: MsgJoinSwapShareAmountOut.typeUrl,
  encoders: toEncoders(MsgJoinSwapShareAmountOut),
  converters: toConverters(MsgJoinSwapShareAmountOut)
});
export const createExitSwapExternAmountOut = (clientResolver?: SigningClientResolver) => buildTx<MsgExitSwapExternAmountOut>({
  clientResolver,
  typeUrl: MsgExitSwapExternAmountOut.typeUrl,
  encoders: toEncoders(MsgExitSwapExternAmountOut),
  converters: toConverters(MsgExitSwapExternAmountOut)
});
export const createExitSwapShareAmountIn = (clientResolver?: SigningClientResolver) => buildTx<MsgExitSwapShareAmountIn>({
  clientResolver,
  typeUrl: MsgExitSwapShareAmountIn.typeUrl,
  encoders: toEncoders(MsgExitSwapShareAmountIn),
  converters: toConverters(MsgExitSwapShareAmountIn)
});