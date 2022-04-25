import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgBeginRedelegateResponse, MsgUndelegate, MsgUndelegateResponse, MsgCreateValidatorResponse, MsgEditValidatorResponse, MsgDelegateResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Description, CommissionRates } from "../../../cosmos/staking/v1beta1/staking";
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
export const encoded = {
  createValidator(value: MsgCreateValidator) {
    return {
      type_url: "/cosmos.staking.v1beta1.MsgCreateValidator",
      value: MsgCreateValidator.encode(value).finish()
    };
  },

  editValidator(value: MsgEditValidator) {
    return {
      type_url: "/cosmos.staking.v1beta1.MsgEditValidator",
      value: MsgEditValidator.encode(value).finish()
    };
  },

  delegate(value: MsgDelegate) {
    return {
      type_url: "/cosmos.staking.v1beta1.MsgDelegate",
      value: MsgDelegate.encode(value).finish()
    };
  },

  beginRedelegate(value: MsgBeginRedelegate) {
    return {
      type_url: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
      value: MsgBeginRedelegate.encode(value).finish()
    };
  },

  undelegate(value: MsgUndelegate) {
    return {
      type_url: "/cosmos.staking.v1beta1.MsgUndelegate",
      value: MsgUndelegate.encode(value).finish()
    };
  }

};