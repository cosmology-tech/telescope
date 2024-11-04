import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgConvertCoin, MsgConvertERC20 } from "./tx";
export const createConvertCoin = (clientResolver: SigningClientResolver) => buildTx<MsgConvertCoin>({
  clientResolver,
  typeUrl: MsgConvertCoin.typeUrl,
  encoders: toEncoders(MsgConvertCoin),
  converters: toConverters(MsgConvertCoin)
});
export const useConvertCoin = buildUseMutation<MsgConvertCoin, Error>({
  builderMutationFn: createConvertCoin
});
export const createConvertERC20 = (clientResolver: SigningClientResolver) => buildTx<MsgConvertERC20>({
  clientResolver,
  typeUrl: MsgConvertERC20.typeUrl,
  encoders: toEncoders(MsgConvertERC20),
  converters: toConverters(MsgConvertERC20)
});
export const useConvertERC20 = buildUseMutation<MsgConvertERC20, Error>({
  builderMutationFn: createConvertERC20
});