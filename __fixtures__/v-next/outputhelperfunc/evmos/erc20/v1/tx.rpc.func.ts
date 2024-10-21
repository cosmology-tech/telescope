import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgConvertCoin, MsgConvertCoinSDKType, MsgConvertCoinResponse, MsgConvertCoinResponseSDKType, MsgConvertERC20, MsgConvertERC20SDKType, MsgConvertERC20Response, MsgConvertERC20ResponseSDKType } from "./tx";
export const createConvertCoin = (getSigningClient: SigningClientResolver) => buildTx<ConvertCoin>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgConvertCoin.typeUrl,
  encoders: toEncoders(ConvertCoin),
  converters: toConverters(ConvertCoin)
});
export const useConvertCoin = buildUseMutation<ConvertCoin, Error>({
  builderMutationFn: createConvertCoin
});
export const createConvertERC20 = (getSigningClient: SigningClientResolver) => buildTx<ConvertERC20>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgConvertERC20.typeUrl,
  encoders: toEncoders(ConvertERC20),
  converters: toConverters(ConvertERC20)
});
export const useConvertERC20 = buildUseMutation<ConvertERC20, Error>({
  builderMutationFn: createConvertERC20
});