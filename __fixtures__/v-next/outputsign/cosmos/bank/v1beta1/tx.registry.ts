import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType } from "./bank";
import { TelescopeGeneratedType } from "../../../types";
import { MsgSend, MsgSendSDKType, MsgMultiSend, MsgMultiSendSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType]> = [["/cosmos.bank.v1beta1.MsgSend", MsgSend], ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend]];