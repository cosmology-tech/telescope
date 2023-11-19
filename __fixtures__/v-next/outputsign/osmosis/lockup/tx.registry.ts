import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType } from "./lock";
import { TelescopeGeneratedType } from "../../types";
import { MsgLockTokens, MsgLockTokensSDKType, MsgBeginUnlockingAll, MsgBeginUnlockingAllSDKType, MsgBeginUnlocking, MsgBeginUnlockingSDKType, MsgExtendLockup, MsgExtendLockupSDKType, MsgForceUnlock, MsgForceUnlockSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/osmosis.lockup.MsgLockTokens", MsgLockTokens], ["/osmosis.lockup.MsgBeginUnlockingAll", MsgBeginUnlockingAll], ["/osmosis.lockup.MsgBeginUnlocking", MsgBeginUnlocking], ["/osmosis.lockup.MsgExtendLockup", MsgExtendLockup], ["/osmosis.lockup.MsgForceUnlock", MsgForceUnlock]];