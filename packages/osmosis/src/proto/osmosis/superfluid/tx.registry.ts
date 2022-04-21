import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../amino.helpers";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateResponse, MsgSuperfluidDelegateResponse, MsgSuperfluidUndelegateResponse, MsgSuperfluidUnbondLockResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Registry } from "@cosmjs/proto-signing";
export const registry = {
  "/osmosis.superfluid.MsgSuperfluidDelegate": MsgSuperfluidDelegate,
  "/osmosis.superfluid.MsgSuperfluidUndelegate": MsgSuperfluidUndelegate,
  "/osmosis.superfluid.MsgSuperfluidUnbondLock": MsgSuperfluidUnbondLock,
  "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": MsgLockAndSuperfluidDelegate
};
export const load = (protoRegistry: Registry) => {
  Object.keys(registry).forEach(typeUrl => {
    protoRegistry.register(typeUrl, registry[typeUrl]);
  });
};