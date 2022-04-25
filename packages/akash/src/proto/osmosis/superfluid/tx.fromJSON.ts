import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../amino.helpers";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateResponse, MsgSuperfluidDelegateResponse, MsgSuperfluidUndelegateResponse, MsgSuperfluidUnbondLockResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
export const fromJSON = {
  superfluidDelegate(value: any) {
    return {
      typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
      value: MsgSuperfluidDelegate.fromJSON(value)
    };
  },

  superfluidUndelegate(value: any) {
    return {
      typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
      value: MsgSuperfluidUndelegate.fromJSON(value)
    };
  },

  superfluidUnbondLock(value: any) {
    return {
      typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
      value: MsgSuperfluidUnbondLock.fromJSON(value)
    };
  },

  lockAndSuperfluidDelegate(value: any) {
    return {
      typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
      value: MsgLockAndSuperfluidDelegate.fromJSON(value)
    };
  }

};