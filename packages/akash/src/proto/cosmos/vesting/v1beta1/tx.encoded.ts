import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount, MsgCreateVestingAccountResponse, MsgCreatePermanentLockedAccountResponse, MsgCreatePeriodicVestingAccountResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Period } from "../../../cosmos/vesting/v1beta1/vesting";
export const encoded = {
  createVestingAccount(value: MsgCreateVestingAccount) {
    return {
      type_url: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
      value: MsgCreateVestingAccount.encode(value).finish()
    };
  },

  createPermanentLockedAccount(value: MsgCreatePermanentLockedAccount) {
    return {
      type_url: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
      value: MsgCreatePermanentLockedAccount.encode(value).finish()
    };
  },

  createPeriodicVestingAccount(value: MsgCreatePeriodicVestingAccount) {
    return {
      type_url: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
      value: MsgCreatePeriodicVestingAccount.encode(value).finish()
    };
  }

};