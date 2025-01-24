import { buildTx, SigningClientResolver } from "../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate, MsgUnPoolWhitelistedPool } from "./tx";
export const createSuperfluidDelegate = (clientResolver?: SigningClientResolver) => buildTx<MsgSuperfluidDelegate>({
  clientResolver,
  typeUrl: MsgSuperfluidDelegate.typeUrl,
  encoders: toEncoders(MsgSuperfluidDelegate),
  converters: toConverters(MsgSuperfluidDelegate)
});
export const createSuperfluidUndelegate = (clientResolver?: SigningClientResolver) => buildTx<MsgSuperfluidUndelegate>({
  clientResolver,
  typeUrl: MsgSuperfluidUndelegate.typeUrl,
  encoders: toEncoders(MsgSuperfluidUndelegate),
  converters: toConverters(MsgSuperfluidUndelegate)
});
export const createSuperfluidUnbondLock = (clientResolver?: SigningClientResolver) => buildTx<MsgSuperfluidUnbondLock>({
  clientResolver,
  typeUrl: MsgSuperfluidUnbondLock.typeUrl,
  encoders: toEncoders(MsgSuperfluidUnbondLock),
  converters: toConverters(MsgSuperfluidUnbondLock)
});
export const createLockAndSuperfluidDelegate = (clientResolver?: SigningClientResolver) => buildTx<MsgLockAndSuperfluidDelegate>({
  clientResolver,
  typeUrl: MsgLockAndSuperfluidDelegate.typeUrl,
  encoders: toEncoders(MsgLockAndSuperfluidDelegate),
  converters: toConverters(MsgLockAndSuperfluidDelegate)
});
export const createUnPoolWhitelistedPool = (clientResolver?: SigningClientResolver) => buildTx<MsgUnPoolWhitelistedPool>({
  clientResolver,
  typeUrl: MsgUnPoolWhitelistedPool.typeUrl,
  encoders: toEncoders(MsgUnPoolWhitelistedPool),
  converters: toConverters(MsgUnPoolWhitelistedPool)
});