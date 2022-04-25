import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../amino.helpers";
import { MsgLockTokens, MsgLockTokensResponse, MsgBeginUnlockingAll, MsgBeginUnlockingAllResponse, MsgBeginUnlocking, MsgBeginUnlockingResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock } from "../../osmosis/lockup/lock";
export const encoded = {
  lockTokens(value: MsgLockTokens) {
    return {
      type_url: "/osmosis.lockup.MsgLockTokens",
      value: MsgLockTokens.encode(value).finish()
    };
  },

  beginUnlockingAll(value: MsgBeginUnlockingAll) {
    return {
      type_url: "/osmosis.lockup.MsgBeginUnlockingAll",
      value: MsgBeginUnlockingAll.encode(value).finish()
    };
  },

  beginUnlocking(value: MsgBeginUnlocking) {
    return {
      type_url: "/osmosis.lockup.MsgBeginUnlocking",
      value: MsgBeginUnlocking.encode(value).finish()
    };
  }

};