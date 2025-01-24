import { buildUseVueMutation } from "../../vue-query";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate, MsgUnPoolWhitelistedPool } from "./tx";
import { createSuperfluidDelegate, createSuperfluidUndelegate, createSuperfluidUnbondLock, createLockAndSuperfluidDelegate, createUnPoolWhitelistedPool } from "./tx.rpc.func.ts";
export const useSuperfluidDelegate = buildUseVueMutation<MsgSuperfluidDelegate, Error>({
  builderMutationFn: createSuperfluidDelegate
});
export const useSuperfluidUndelegate = buildUseVueMutation<MsgSuperfluidUndelegate, Error>({
  builderMutationFn: createSuperfluidUndelegate
});
export const useSuperfluidUnbondLock = buildUseVueMutation<MsgSuperfluidUnbondLock, Error>({
  builderMutationFn: createSuperfluidUnbondLock
});
export const useLockAndSuperfluidDelegate = buildUseVueMutation<MsgLockAndSuperfluidDelegate, Error>({
  builderMutationFn: createLockAndSuperfluidDelegate
});
export const useUnPoolWhitelistedPool = buildUseVueMutation<MsgUnPoolWhitelistedPool, Error>({
  builderMutationFn: createUnPoolWhitelistedPool
});