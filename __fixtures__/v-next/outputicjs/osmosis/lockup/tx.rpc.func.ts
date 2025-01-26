import { buildTx, SigningClientResolver } from "../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking, MsgExtendLockup, MsgForceUnlock } from "./tx";
export const createLockTokens = (clientResolver?: SigningClientResolver) => buildTx<MsgLockTokens>({
  clientResolver,
  typeUrl: MsgLockTokens.typeUrl,
  encoders: toEncoders(MsgLockTokens),
  converters: toConverters(MsgLockTokens)
});
export const createBeginUnlockingAll = (clientResolver?: SigningClientResolver) => buildTx<MsgBeginUnlockingAll>({
  clientResolver,
  typeUrl: MsgBeginUnlockingAll.typeUrl,
  encoders: toEncoders(MsgBeginUnlockingAll),
  converters: toConverters(MsgBeginUnlockingAll)
});
export const createBeginUnlocking = (clientResolver?: SigningClientResolver) => buildTx<MsgBeginUnlocking>({
  clientResolver,
  typeUrl: MsgBeginUnlocking.typeUrl,
  encoders: toEncoders(MsgBeginUnlocking),
  converters: toConverters(MsgBeginUnlocking)
});
export const createExtendLockup = (clientResolver?: SigningClientResolver) => buildTx<MsgExtendLockup>({
  clientResolver,
  typeUrl: MsgExtendLockup.typeUrl,
  encoders: toEncoders(MsgExtendLockup),
  converters: toConverters(MsgExtendLockup)
});
export const createForceUnlock = (clientResolver?: SigningClientResolver) => buildTx<MsgForceUnlock>({
  clientResolver,
  typeUrl: MsgForceUnlock.typeUrl,
  encoders: toEncoders(MsgForceUnlock),
  converters: toConverters(MsgForceUnlock)
});