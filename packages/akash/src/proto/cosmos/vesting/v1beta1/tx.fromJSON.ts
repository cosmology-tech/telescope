import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount, MsgCreateVestingAccountResponse, MsgCreatePermanentLockedAccountResponse, MsgCreatePeriodicVestingAccountResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Period } from "../../../cosmos/vesting/v1beta1/vesting";
export const fromJSON = {
  createVestingAccount(value: any) {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
      value: MsgCreateVestingAccount.fromJSON(value)
    };
  },

  createPermanentLockedAccount(value: any) {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
      value: MsgCreatePermanentLockedAccount.fromJSON(value)
    };
  },

  createPeriodicVestingAccount(value: any) {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
      value: MsgCreatePeriodicVestingAccount.fromJSON(value)
    };
  }

};