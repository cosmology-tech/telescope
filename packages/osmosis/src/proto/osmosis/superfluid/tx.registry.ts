import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../amino.helpers";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateResponse, MsgSuperfluidDelegateResponse, MsgSuperfluidUndelegateResponse, MsgSuperfluidUnbondLockResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
export const registry = {
  "/osmosis.superfluid.MsgSuperfluidDelegate": MsgSuperfluidDelegate,
  "/osmosis.superfluid.MsgSuperfluidUndelegate": MsgSuperfluidUndelegate,
  "/osmosis.superfluid.MsgSuperfluidUnbondLock": MsgSuperfluidUnbondLock,
  "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": MsgLockAndSuperfluidDelegate
};