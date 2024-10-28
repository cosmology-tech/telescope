import { buildTx, SigningClientResolver } from "../../helper-func-types";
import { buildUseMutation } from "../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking, MsgExtendLockup, MsgForceUnlock } from "./tx";
export const createLockTokens = (getSigningClient: SigningClientResolver) => buildTx<MsgLockTokens>({
  getSigningClient: getSigningClient,
  typeUrl: MsgLockTokens.typeUrl,
  encoders: toEncoders(MsgLockTokens),
  converters: toConverters(MsgLockTokens)
});
export const useLockTokens = buildUseMutation<MsgLockTokens, Error>({
  builderMutationFn: createLockTokens
});
export const createBeginUnlockingAll = (getSigningClient: SigningClientResolver) => buildTx<MsgBeginUnlockingAll>({
  getSigningClient: getSigningClient,
  typeUrl: MsgBeginUnlockingAll.typeUrl,
  encoders: toEncoders(MsgBeginUnlockingAll),
  converters: toConverters(MsgBeginUnlockingAll)
});
export const useBeginUnlockingAll = buildUseMutation<MsgBeginUnlockingAll, Error>({
  builderMutationFn: createBeginUnlockingAll
});
export const createBeginUnlocking = (getSigningClient: SigningClientResolver) => buildTx<MsgBeginUnlocking>({
  getSigningClient: getSigningClient,
  typeUrl: MsgBeginUnlocking.typeUrl,
  encoders: toEncoders(MsgBeginUnlocking),
  converters: toConverters(MsgBeginUnlocking)
});
export const useBeginUnlocking = buildUseMutation<MsgBeginUnlocking, Error>({
  builderMutationFn: createBeginUnlocking
});
export const createExtendLockup = (getSigningClient: SigningClientResolver) => buildTx<MsgExtendLockup>({
  getSigningClient: getSigningClient,
  typeUrl: MsgExtendLockup.typeUrl,
  encoders: toEncoders(MsgExtendLockup),
  converters: toConverters(MsgExtendLockup)
});
export const useExtendLockup = buildUseMutation<MsgExtendLockup, Error>({
  builderMutationFn: createExtendLockup
});
export const createForceUnlock = (getSigningClient: SigningClientResolver) => buildTx<MsgForceUnlock>({
  getSigningClient: getSigningClient,
  typeUrl: MsgForceUnlock.typeUrl,
  encoders: toEncoders(MsgForceUnlock),
  converters: toConverters(MsgForceUnlock)
});
export const useForceUnlock = buildUseMutation<MsgForceUnlock, Error>({
  builderMutationFn: createForceUnlock
});