import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { TelescopeGeneratedType } from "../../types";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateSDKType, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateSDKType, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockSDKType, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateSDKType, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType]> = [["/osmosis.superfluid.MsgSuperfluidDelegate", MsgSuperfluidDelegate], ["/osmosis.superfluid.MsgSuperfluidUndelegate", MsgSuperfluidUndelegate], ["/osmosis.superfluid.MsgSuperfluidUnbondLock", MsgSuperfluidUnbondLock], ["/osmosis.superfluid.MsgLockAndSuperfluidDelegate", MsgLockAndSuperfluidDelegate], ["/osmosis.superfluid.MsgUnPoolWhitelistedPool", MsgUnPoolWhitelistedPool]];