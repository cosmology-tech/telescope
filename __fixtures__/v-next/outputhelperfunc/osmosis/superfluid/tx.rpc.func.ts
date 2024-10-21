import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { buildTx, ISigningClient } from "../../helper-func-types";
import { buildUseMutation } from "../../react-query";
import { SigningClientResolver } from "../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateSDKType, MsgSuperfluidDelegateResponse, MsgSuperfluidDelegateResponseSDKType, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateSDKType, MsgSuperfluidUndelegateResponse, MsgSuperfluidUndelegateResponseSDKType, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockSDKType, MsgSuperfluidUnbondLockResponse, MsgSuperfluidUnbondLockResponseSDKType, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateSDKType, MsgLockAndSuperfluidDelegateResponse, MsgLockAndSuperfluidDelegateResponseSDKType, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolSDKType, MsgUnPoolWhitelistedPoolResponse, MsgUnPoolWhitelistedPoolResponseSDKType } from "./tx";
export const createSuperfluidDelegate = (getSigningClient: SigningClientResolver) => buildTx<SuperfluidDelegate>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgSuperfluidDelegate.typeUrl,
  encoders: toEncoders(SuperfluidDelegate),
  converters: toConverters(SuperfluidDelegate)
});
export const useSuperfluidDelegate = buildUseMutation<SuperfluidDelegate, Error>({
  builderMutationFn: createSuperfluidDelegate
});
export const createSuperfluidUndelegate = (getSigningClient: SigningClientResolver) => buildTx<SuperfluidUndelegate>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgSuperfluidUndelegate.typeUrl,
  encoders: toEncoders(SuperfluidUndelegate),
  converters: toConverters(SuperfluidUndelegate)
});
export const useSuperfluidUndelegate = buildUseMutation<SuperfluidUndelegate, Error>({
  builderMutationFn: createSuperfluidUndelegate
});
export const createSuperfluidUnbondLock = (getSigningClient: SigningClientResolver) => buildTx<SuperfluidUnbondLock>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgSuperfluidUnbondLock.typeUrl,
  encoders: toEncoders(SuperfluidUnbondLock),
  converters: toConverters(SuperfluidUnbondLock)
});
export const useSuperfluidUnbondLock = buildUseMutation<SuperfluidUnbondLock, Error>({
  builderMutationFn: createSuperfluidUnbondLock
});
export const createLockAndSuperfluidDelegate = (getSigningClient: SigningClientResolver) => buildTx<LockAndSuperfluidDelegate>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgLockAndSuperfluidDelegate.typeUrl,
  encoders: toEncoders(LockAndSuperfluidDelegate),
  converters: toConverters(LockAndSuperfluidDelegate)
});
export const useLockAndSuperfluidDelegate = buildUseMutation<LockAndSuperfluidDelegate, Error>({
  builderMutationFn: createLockAndSuperfluidDelegate
});
export const createUnPoolWhitelistedPool = (getSigningClient: SigningClientResolver) => buildTx<UnPoolWhitelistedPool>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgUnPoolWhitelistedPool.typeUrl,
  encoders: toEncoders(UnPoolWhitelistedPool),
  converters: toConverters(UnPoolWhitelistedPool)
});
export const useUnPoolWhitelistedPool = buildUseMutation<UnPoolWhitelistedPool, Error>({
  builderMutationFn: createUnPoolWhitelistedPool
});