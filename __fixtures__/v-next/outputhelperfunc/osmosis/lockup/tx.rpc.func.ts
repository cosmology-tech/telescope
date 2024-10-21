import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType } from "./lock";
import { buildTx, ISigningClient } from "../../helper-func-types";
import { buildUseMutation } from "../../react-query";
import { SigningClientResolver } from "../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgLockTokens, MsgLockTokensSDKType, MsgLockTokensResponse, MsgLockTokensResponseSDKType, MsgBeginUnlockingAll, MsgBeginUnlockingAllSDKType, MsgBeginUnlockingAllResponse, MsgBeginUnlockingAllResponseSDKType, MsgBeginUnlocking, MsgBeginUnlockingSDKType, MsgBeginUnlockingResponse, MsgBeginUnlockingResponseSDKType, MsgExtendLockup, MsgExtendLockupSDKType, MsgExtendLockupResponse, MsgExtendLockupResponseSDKType, MsgForceUnlock, MsgForceUnlockSDKType, MsgForceUnlockResponse, MsgForceUnlockResponseSDKType } from "./tx";
export const createLockTokens = (getSigningClient: SigningClientResolver) => buildTx<LockTokens>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgLockTokens.typeUrl,
  encoders: toEncoders(LockTokens),
  converters: toConverters(LockTokens)
});
export const useLockTokens = buildUseMutation<LockTokens, Error>({
  builderMutationFn: createLockTokens
});
export const createBeginUnlockingAll = (getSigningClient: SigningClientResolver) => buildTx<BeginUnlockingAll>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgBeginUnlockingAll.typeUrl,
  encoders: toEncoders(BeginUnlockingAll),
  converters: toConverters(BeginUnlockingAll)
});
export const useBeginUnlockingAll = buildUseMutation<BeginUnlockingAll, Error>({
  builderMutationFn: createBeginUnlockingAll
});
export const createBeginUnlocking = (getSigningClient: SigningClientResolver) => buildTx<BeginUnlocking>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgBeginUnlocking.typeUrl,
  encoders: toEncoders(BeginUnlocking),
  converters: toConverters(BeginUnlocking)
});
export const useBeginUnlocking = buildUseMutation<BeginUnlocking, Error>({
  builderMutationFn: createBeginUnlocking
});
export const createExtendLockup = (getSigningClient: SigningClientResolver) => buildTx<ExtendLockup>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgExtendLockup.typeUrl,
  encoders: toEncoders(ExtendLockup),
  converters: toConverters(ExtendLockup)
});
export const useExtendLockup = buildUseMutation<ExtendLockup, Error>({
  builderMutationFn: createExtendLockup
});
export const createForceUnlock = (getSigningClient: SigningClientResolver) => buildTx<ForceUnlock>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgForceUnlock.typeUrl,
  encoders: toEncoders(ForceUnlock),
  converters: toConverters(ForceUnlock)
});
export const useForceUnlock = buildUseMutation<ForceUnlock, Error>({
  builderMutationFn: createForceUnlock
});