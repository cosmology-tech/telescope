import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType } from "./lock";
import { fetchReq } from "../../grpc-gateway";
import { MsgLockTokens, MsgLockTokensSDKType, MsgLockTokensResponse, MsgLockTokensResponseSDKType, MsgBeginUnlockingAll, MsgBeginUnlockingAllSDKType, MsgBeginUnlockingAllResponse, MsgBeginUnlockingAllResponseSDKType, MsgBeginUnlocking, MsgBeginUnlockingSDKType, MsgBeginUnlockingResponse, MsgBeginUnlockingResponseSDKType, MsgExtendLockup, MsgExtendLockupSDKType, MsgExtendLockupResponse, MsgExtendLockupResponseSDKType, MsgForceUnlock, MsgForceUnlockSDKType, MsgForceUnlockResponse, MsgForceUnlockResponseSDKType } from "./tx";
export class Msg {
  static LockTokens(request: MsgLockTokens, initRequest?: fm.initReq): Promise<MsgLockTokensResponse> {
    return fm.fetchReq(`/osmosis.lockup.Msg/LockTokens`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static BeginUnlockingAll(request: MsgBeginUnlockingAll, initRequest?: fm.initReq): Promise<MsgBeginUnlockingAllResponse> {
    return fm.fetchReq(`/osmosis.lockup.Msg/BeginUnlockingAll`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static BeginUnlocking(request: MsgBeginUnlocking, initRequest?: fm.initReq): Promise<MsgBeginUnlockingResponse> {
    return fm.fetchReq(`/osmosis.lockup.Msg/BeginUnlocking`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static ExtendLockup(request: MsgExtendLockup, initRequest?: fm.initReq): Promise<MsgExtendLockupResponse> {
    return fm.fetchReq(`/osmosis.lockup.Msg/ExtendLockup`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static ForceUnlock(request: MsgForceUnlock, initRequest?: fm.initReq): Promise<MsgForceUnlockResponse> {
    return fm.fetchReq(`/osmosis.lockup.Msg/ForceUnlock`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}