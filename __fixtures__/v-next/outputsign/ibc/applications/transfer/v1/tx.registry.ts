import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Height, HeightSDKType } from "../../../core/client/v1/client";
import { TelescopeGeneratedType } from "../../../../types";
import { MsgTransfer, MsgTransferSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType]> = [["/ibc.applications.transfer.v1.MsgTransfer", MsgTransfer]];