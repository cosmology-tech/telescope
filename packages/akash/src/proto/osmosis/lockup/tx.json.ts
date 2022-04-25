import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../amino.helpers";
import { MsgLockTokens, MsgLockTokensResponse, MsgBeginUnlockingAll, MsgBeginUnlockingAllResponse, MsgBeginUnlocking, MsgBeginUnlockingResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock } from "../../osmosis/lockup/lock";
export const json = {
  lockTokens(value: MsgLockTokens) {
    return {
      typeUrl: "/osmosis.lockup.MsgLockTokens",
      value
    };
  },

  beginUnlockingAll(value: MsgBeginUnlockingAll) {
    return {
      typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
      value
    };
  },

  beginUnlocking(value: MsgBeginUnlocking) {
    return {
      typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
      value
    };
  }

};