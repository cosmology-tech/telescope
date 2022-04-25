import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../amino.helpers";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateResponse, MsgSuperfluidDelegateResponse, MsgSuperfluidUndelegateResponse, MsgSuperfluidUnbondLockResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
export const encoded = {
  superfluidDelegate(value: MsgSuperfluidDelegate) {
    return {
      type_url: "/osmosis.superfluid.MsgSuperfluidDelegate",
      value: MsgSuperfluidDelegate.encode(value).finish()
    };
  },

  superfluidUndelegate(value: MsgSuperfluidUndelegate) {
    return {
      type_url: "/osmosis.superfluid.MsgSuperfluidUndelegate",
      value: MsgSuperfluidUndelegate.encode(value).finish()
    };
  },

  superfluidUnbondLock(value: MsgSuperfluidUnbondLock) {
    return {
      type_url: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
      value: MsgSuperfluidUnbondLock.encode(value).finish()
    };
  },

  lockAndSuperfluidDelegate(value: MsgLockAndSuperfluidDelegate) {
    return {
      type_url: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
      value: MsgLockAndSuperfluidDelegate.encode(value).finish()
    };
  }

};