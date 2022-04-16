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
export const json = {
  createValidator(value: MsgCreateValidator) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
      value
    };
  },

  editValidator(value: MsgEditValidator) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
      value
    };
  },

  delegate(value: MsgDelegate) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
      value
    };
  },

  beginRedelegate(value: MsgBeginRedelegate) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
      value
    };
  },

  undelegate(value: MsgUndelegate) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
      value
    };
  }

};