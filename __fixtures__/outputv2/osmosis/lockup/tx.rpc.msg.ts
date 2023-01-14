import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType } from "./lock";
import { fetchReq } from "../../grpc-gateway";
import { MsgLockTokens, MsgLockTokensSDKType, MsgLockTokensResponse, MsgLockTokensResponseSDKType, MsgBeginUnlockingAll, MsgBeginUnlockingAllSDKType, MsgBeginUnlockingAllResponse, MsgBeginUnlockingAllResponseSDKType, MsgBeginUnlocking, MsgBeginUnlockingSDKType, MsgBeginUnlockingResponse, MsgBeginUnlockingResponseSDKType, MsgExtendLockup, MsgExtendLockupSDKType, MsgExtendLockupResponse, MsgExtendLockupResponseSDKType, MsgForceUnlock, MsgForceUnlockSDKType, MsgForceUnlockResponse, MsgForceUnlockResponseSDKType } from "./tx";
export class Msg {
  static LockTokens(): Promise<MsgLockTokensResponse> {}

  static BeginUnlockingAll(): Promise<MsgBeginUnlockingAllResponse> {}

  static BeginUnlocking(): Promise<MsgBeginUnlockingResponse> {}

  static ExtendLockup(): Promise<MsgExtendLockupResponse> {}

  static ForceUnlock(): Promise<MsgForceUnlockResponse> {}

}