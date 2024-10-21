import { buildTx, SigningClientResolver } from "../../helper-func-types";
import { buildUseMutation } from "../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate, MsgUnPoolWhitelistedPool } from "./tx";
export const createSuperfluidDelegate = (getSigningClient: SigningClientResolver) => buildTx<MsgSuperfluidDelegate>({
  getSigningClient: getSigningClient,
  typeUrl: MsgSuperfluidDelegate.typeUrl,
  encoders: toEncoders(MsgSuperfluidDelegate),
  converters: toConverters(MsgSuperfluidDelegate)
});
export const useSuperfluidDelegate = buildUseMutation<MsgSuperfluidDelegate, Error>({
  builderMutationFn: createSuperfluidDelegate
});
export const createSuperfluidUndelegate = (getSigningClient: SigningClientResolver) => buildTx<MsgSuperfluidUndelegate>({
  getSigningClient: getSigningClient,
  typeUrl: MsgSuperfluidUndelegate.typeUrl,
  encoders: toEncoders(MsgSuperfluidUndelegate),
  converters: toConverters(MsgSuperfluidUndelegate)
});
export const useSuperfluidUndelegate = buildUseMutation<MsgSuperfluidUndelegate, Error>({
  builderMutationFn: createSuperfluidUndelegate
});
export const createSuperfluidUnbondLock = (getSigningClient: SigningClientResolver) => buildTx<MsgSuperfluidUnbondLock>({
  getSigningClient: getSigningClient,
  typeUrl: MsgSuperfluidUnbondLock.typeUrl,
  encoders: toEncoders(MsgSuperfluidUnbondLock),
  converters: toConverters(MsgSuperfluidUnbondLock)
});
export const useSuperfluidUnbondLock = buildUseMutation<MsgSuperfluidUnbondLock, Error>({
  builderMutationFn: createSuperfluidUnbondLock
});
export const createLockAndSuperfluidDelegate = (getSigningClient: SigningClientResolver) => buildTx<MsgLockAndSuperfluidDelegate>({
  getSigningClient: getSigningClient,
  typeUrl: MsgLockAndSuperfluidDelegate.typeUrl,
  encoders: toEncoders(MsgLockAndSuperfluidDelegate),
  converters: toConverters(MsgLockAndSuperfluidDelegate)
});
export const useLockAndSuperfluidDelegate = buildUseMutation<MsgLockAndSuperfluidDelegate, Error>({
  builderMutationFn: createLockAndSuperfluidDelegate
});
export const createUnPoolWhitelistedPool = (getSigningClient: SigningClientResolver) => buildTx<MsgUnPoolWhitelistedPool>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUnPoolWhitelistedPool.typeUrl,
  encoders: toEncoders(MsgUnPoolWhitelistedPool),
  converters: toConverters(MsgUnPoolWhitelistedPool)
});
export const useUnPoolWhitelistedPool = buildUseMutation<MsgUnPoolWhitelistedPool, Error>({
  builderMutationFn: createUnPoolWhitelistedPool
});