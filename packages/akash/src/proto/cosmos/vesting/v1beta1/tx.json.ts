import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount, MsgCreateVestingAccountResponse, MsgCreatePermanentLockedAccountResponse, MsgCreatePeriodicVestingAccountResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Period } from "../../../cosmos/vesting/v1beta1/vesting";
export const json = {
  createVestingAccount(value: MsgCreateVestingAccount) {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
      value
    };
  },

  createPermanentLockedAccount(value: MsgCreatePermanentLockedAccount) {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
      value
    };
  },

  createPeriodicVestingAccount(value: MsgCreatePeriodicVestingAccount) {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
      value
    };
  }

};