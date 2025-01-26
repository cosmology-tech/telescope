import { buildUseVueMutation } from "../../vue-query";
import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking, MsgExtendLockup, MsgForceUnlock } from "./tx";
import { createLockTokens, createBeginUnlockingAll, createBeginUnlocking, createExtendLockup, createForceUnlock } from "./tx.rpc.func.ts";
export const useLockTokens = buildUseVueMutation<MsgLockTokens, Error>({
  builderMutationFn: createLockTokens
});
export const useBeginUnlockingAll = buildUseVueMutation<MsgBeginUnlockingAll, Error>({
  builderMutationFn: createBeginUnlockingAll
});
export const useBeginUnlocking = buildUseVueMutation<MsgBeginUnlocking, Error>({
  builderMutationFn: createBeginUnlocking
});
export const useExtendLockup = buildUseVueMutation<MsgExtendLockup, Error>({
  builderMutationFn: createExtendLockup
});
export const useForceUnlock = buildUseVueMutation<MsgForceUnlock, Error>({
  builderMutationFn: createForceUnlock
});