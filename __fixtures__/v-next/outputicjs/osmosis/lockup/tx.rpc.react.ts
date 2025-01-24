import { buildUseMutation } from "../../react-query";
import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking, MsgExtendLockup, MsgForceUnlock } from "./tx";
import { createLockTokens, createBeginUnlockingAll, createBeginUnlocking, createExtendLockup, createForceUnlock } from "./tx.rpc.func.ts";
export const useLockTokens = buildUseMutation<MsgLockTokens, Error>({
  builderMutationFn: createLockTokens
});
export const useBeginUnlockingAll = buildUseMutation<MsgBeginUnlockingAll, Error>({
  builderMutationFn: createBeginUnlockingAll
});
export const useBeginUnlocking = buildUseMutation<MsgBeginUnlocking, Error>({
  builderMutationFn: createBeginUnlocking
});
export const useExtendLockup = buildUseMutation<MsgExtendLockup, Error>({
  builderMutationFn: createExtendLockup
});
export const useForceUnlock = buildUseMutation<MsgForceUnlock, Error>({
  builderMutationFn: createForceUnlock
});