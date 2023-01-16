import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { fetchReq } from "../../grpc-gateway";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateSDKType, MsgSuperfluidDelegateResponse, MsgSuperfluidDelegateResponseSDKType, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateSDKType, MsgSuperfluidUndelegateResponse, MsgSuperfluidUndelegateResponseSDKType, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockSDKType, MsgSuperfluidUnbondLockResponse, MsgSuperfluidUnbondLockResponseSDKType, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateSDKType, MsgLockAndSuperfluidDelegateResponse, MsgLockAndSuperfluidDelegateResponseSDKType, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolSDKType, MsgUnPoolWhitelistedPoolResponse, MsgUnPoolWhitelistedPoolResponseSDKType } from "./tx";
export class Msg {
  static SuperfluidDelegate(request: MsgSuperfluidDelegate, initRequest?: fm.initReq): Promise<MsgSuperfluidDelegateResponse> {
    return fm.fetchReq(`/SuperfluidDelegate/SuperfluidDelegate`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static SuperfluidUndelegate(request: MsgSuperfluidUndelegate, initRequest?: fm.initReq): Promise<MsgSuperfluidUndelegateResponse> {
    return fm.fetchReq(`/SuperfluidUndelegate/SuperfluidUndelegate`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static SuperfluidUnbondLock(request: MsgSuperfluidUnbondLock, initRequest?: fm.initReq): Promise<MsgSuperfluidUnbondLockResponse> {
    return fm.fetchReq(`/SuperfluidUnbondLock/SuperfluidUnbondLock`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static LockAndSuperfluidDelegate(request: MsgLockAndSuperfluidDelegate, initRequest?: fm.initReq): Promise<MsgLockAndSuperfluidDelegateResponse> {
    return fm.fetchReq(`/LockAndSuperfluidDelegate/LockAndSuperfluidDelegate`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static UnPoolWhitelistedPool(request: MsgUnPoolWhitelistedPool, initRequest?: fm.initReq): Promise<MsgUnPoolWhitelistedPoolResponse> {
    return fm.fetchReq(`/UnPoolWhitelistedPool/UnPoolWhitelistedPool`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}