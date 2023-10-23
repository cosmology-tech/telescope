import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { TelescopeGeneratedType } from "../../../types";
import { MsgConvertCoin, MsgConvertCoinSDKType, MsgConvertERC20, MsgConvertERC20SDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType]> = [["/evmos.erc20.v1.MsgConvertCoin", MsgConvertCoin], ["/evmos.erc20.v1.MsgConvertERC20", MsgConvertERC20]];