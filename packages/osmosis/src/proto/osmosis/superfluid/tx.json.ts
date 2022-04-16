import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../amino.helpers";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateResponse, MsgSuperfluidDelegateResponse, MsgSuperfluidUndelegateResponse, MsgSuperfluidUnbondLockResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
export const json = {
  superfluidDelegate(value: MsgSuperfluidDelegate) {
    return {
      typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
      value
    };
  },

  superfluidUndelegate(value: MsgSuperfluidUndelegate) {
    return {
      typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
      value
    };
  },

  superfluidUnbondLock(value: MsgSuperfluidUnbondLock) {
    return {
      typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
      value
    };
  },

  lockAndSuperfluidDelegate(value: MsgLockAndSuperfluidDelegate) {
    return {
      typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
      value
    };
  }

};