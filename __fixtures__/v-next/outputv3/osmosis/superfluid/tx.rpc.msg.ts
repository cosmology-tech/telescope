import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as fm from "../../grpc-gateway";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateSDKType, MsgSuperfluidDelegateResponse, MsgSuperfluidDelegateResponseSDKType, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateSDKType, MsgSuperfluidUndelegateResponse, MsgSuperfluidUndelegateResponseSDKType, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockSDKType, MsgSuperfluidUnbondLockResponse, MsgSuperfluidUnbondLockResponseSDKType, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateSDKType, MsgLockAndSuperfluidDelegateResponse, MsgLockAndSuperfluidDelegateResponseSDKType, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolSDKType, MsgUnPoolWhitelistedPoolResponse, MsgUnPoolWhitelistedPoolResponseSDKType } from "./tx";
export class Msg {
  /** Execute superfluid delegation for a lockup */
  static SuperfluidDelegate(request: MsgSuperfluidDelegate, initRequest?: fm.InitReq): Promise<MsgSuperfluidDelegateResponse> {
    return fm.fetchReq(`/osmosis.superfluid/SuperfluidDelegate`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Execute superfluid undelegation for a lockup */
  static SuperfluidUndelegate(request: MsgSuperfluidUndelegate, initRequest?: fm.InitReq): Promise<MsgSuperfluidUndelegateResponse> {
    return fm.fetchReq(`/osmosis.superfluid/SuperfluidUndelegate`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * For a given lock that is being superfluidly undelegated,
   * also unbond the underlying lock.
   */
  static SuperfluidUnbondLock(request: MsgSuperfluidUnbondLock, initRequest?: fm.InitReq): Promise<MsgSuperfluidUnbondLockResponse> {
    return fm.fetchReq(`/osmosis.superfluid/SuperfluidUnbondLock`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Execute lockup lock and superfluid delegation in a single msg */
  static LockAndSuperfluidDelegate(request: MsgLockAndSuperfluidDelegate, initRequest?: fm.InitReq): Promise<MsgLockAndSuperfluidDelegateResponse> {
    return fm.fetchReq(`/osmosis.superfluid/LockAndSuperfluidDelegate`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static UnPoolWhitelistedPool(request: MsgUnPoolWhitelistedPool, initRequest?: fm.InitReq): Promise<MsgUnPoolWhitelistedPoolResponse> {
    return fm.fetchReq(`/osmosis.superfluid/UnPoolWhitelistedPool`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}