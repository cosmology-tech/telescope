import { buildTx, SigningClientResolver } from "../../helper-func-types";
import { buildUseMutation } from "../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking, MsgExtendLockup, MsgForceUnlock } from "./tx";
export const createLockTokens = (clientResolver: SigningClientResolver) => buildTx<MsgLockTokens>({
  clientResolver,
  typeUrl: MsgLockTokens.typeUrl,
  encoders: toEncoders(MsgLockTokens),
  converters: toConverters(MsgLockTokens)
});
export const useLockTokens = buildUseMutation<MsgLockTokens, Error>({
  builderMutationFn: createLockTokens
});
export const createBeginUnlockingAll = (clientResolver: SigningClientResolver) => buildTx<MsgBeginUnlockingAll>({
  clientResolver,
  typeUrl: MsgBeginUnlockingAll.typeUrl,
  encoders: toEncoders(MsgBeginUnlockingAll),
  converters: toConverters(MsgBeginUnlockingAll)
});
export const useBeginUnlockingAll = buildUseMutation<MsgBeginUnlockingAll, Error>({
  builderMutationFn: createBeginUnlockingAll
});
export const createBeginUnlocking = (clientResolver: SigningClientResolver) => buildTx<MsgBeginUnlocking>({
  clientResolver,
  typeUrl: MsgBeginUnlocking.typeUrl,
  encoders: toEncoders(MsgBeginUnlocking),
  converters: toConverters(MsgBeginUnlocking)
});
export const useBeginUnlocking = buildUseMutation<MsgBeginUnlocking, Error>({
  builderMutationFn: createBeginUnlocking
});
export const createExtendLockup = (clientResolver: SigningClientResolver) => buildTx<MsgExtendLockup>({
  clientResolver,
  typeUrl: MsgExtendLockup.typeUrl,
  encoders: toEncoders(MsgExtendLockup),
  converters: toConverters(MsgExtendLockup)
});
export const useExtendLockup = buildUseMutation<MsgExtendLockup, Error>({
  builderMutationFn: createExtendLockup
});
export const createForceUnlock = (clientResolver: SigningClientResolver) => buildTx<MsgForceUnlock>({
  clientResolver,
  typeUrl: MsgForceUnlock.typeUrl,
  encoders: toEncoders(MsgForceUnlock),
  converters: toConverters(MsgForceUnlock)
});
export const useForceUnlock = buildUseMutation<MsgForceUnlock, Error>({
  builderMutationFn: createForceUnlock
});