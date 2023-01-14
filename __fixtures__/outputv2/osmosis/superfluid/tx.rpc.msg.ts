import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { fetchReq } from "../../grpc-gateway";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateSDKType, MsgSuperfluidDelegateResponse, MsgSuperfluidDelegateResponseSDKType, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateSDKType, MsgSuperfluidUndelegateResponse, MsgSuperfluidUndelegateResponseSDKType, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockSDKType, MsgSuperfluidUnbondLockResponse, MsgSuperfluidUnbondLockResponseSDKType, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateSDKType, MsgLockAndSuperfluidDelegateResponse, MsgLockAndSuperfluidDelegateResponseSDKType, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolSDKType, MsgUnPoolWhitelistedPoolResponse, MsgUnPoolWhitelistedPoolResponseSDKType } from "./tx";
export class Msg {
  static SuperfluidDelegate(): Promise<MsgSuperfluidDelegateResponse> {}

  static SuperfluidUndelegate(): Promise<MsgSuperfluidUndelegateResponse> {}

  static SuperfluidUnbondLock(): Promise<MsgSuperfluidUnbondLockResponse> {}

  static LockAndSuperfluidDelegate(): Promise<MsgLockAndSuperfluidDelegateResponse> {}

  static UnPoolWhitelistedPool(): Promise<MsgUnPoolWhitelistedPoolResponse> {}

}