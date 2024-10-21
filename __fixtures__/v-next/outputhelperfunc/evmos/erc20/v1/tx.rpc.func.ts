import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgConvertCoin, MsgConvertCoinSDKType, MsgConvertCoinResponse, MsgConvertCoinResponseSDKType, MsgConvertERC20, MsgConvertERC20SDKType, MsgConvertERC20Response, MsgConvertERC20ResponseSDKType } from "./tx";
export const createConvertCoin = (getSigningClient: SigningClientResolver) => buildTx<MsgConvertCoin>({
  getSigningClient: getSigningClient,
  typeUrl: MsgConvertCoin.typeUrl,
  encoders: toEncoders(MsgConvertCoin),
  converters: toConverters(MsgConvertCoin)
});
export const useConvertCoin = buildUseMutation<MsgConvertCoin, Error>({
  builderMutationFn: createConvertCoin
});
export const createConvertERC20 = (getSigningClient: SigningClientResolver) => buildTx<MsgConvertERC20>({
  getSigningClient: getSigningClient,
  typeUrl: MsgConvertERC20.typeUrl,
  encoders: toEncoders(MsgConvertERC20),
  converters: toConverters(MsgConvertERC20)
});
export const useConvertERC20 = buildUseMutation<MsgConvertERC20, Error>({
  builderMutationFn: createConvertERC20
});