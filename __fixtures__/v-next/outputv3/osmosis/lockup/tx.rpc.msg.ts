import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType } from "./lock";
import * as fm from "../../grpc-gateway";
import { MsgLockTokens, MsgLockTokensSDKType, MsgLockTokensResponse, MsgLockTokensResponseSDKType, MsgBeginUnlockingAll, MsgBeginUnlockingAllSDKType, MsgBeginUnlockingAllResponse, MsgBeginUnlockingAllResponseSDKType, MsgBeginUnlocking, MsgBeginUnlockingSDKType, MsgBeginUnlockingResponse, MsgBeginUnlockingResponseSDKType, MsgExtendLockup, MsgExtendLockupSDKType, MsgExtendLockupResponse, MsgExtendLockupResponseSDKType, MsgForceUnlock, MsgForceUnlockSDKType, MsgForceUnlockResponse, MsgForceUnlockResponseSDKType } from "./tx";
export class Msg {
  /** LockTokens lock tokens */
  static LockTokens(request: MsgLockTokens, initRequest?: fm.InitReq): Promise<MsgLockTokensResponse> {
    return fm.fetchReq(`/osmosis.lockup/LockTokens`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** BeginUnlockingAll begin unlocking all tokens */
  static BeginUnlockingAll(request: MsgBeginUnlockingAll, initRequest?: fm.InitReq): Promise<MsgBeginUnlockingAllResponse> {
    return fm.fetchReq(`/osmosis.lockup/BeginUnlockingAll`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** MsgBeginUnlocking begins unlocking tokens by lock ID */
  static BeginUnlocking(request: MsgBeginUnlocking, initRequest?: fm.InitReq): Promise<MsgBeginUnlockingResponse> {
    return fm.fetchReq(`/osmosis.lockup/BeginUnlocking`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** MsgEditLockup edits the existing lockups by lock ID */
  static ExtendLockup(request: MsgExtendLockup, initRequest?: fm.InitReq): Promise<MsgExtendLockupResponse> {
    return fm.fetchReq(`/osmosis.lockup/ExtendLockup`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static ForceUnlock(request: MsgForceUnlock, initRequest?: fm.InitReq): Promise<MsgForceUnlockResponse> {
    return fm.fetchReq(`/osmosis.lockup/ForceUnlock`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}