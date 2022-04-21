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
export const registry = {
  "/cosmos.staking.v1beta1.MsgCreateValidator": MsgCreateValidator,
  "/cosmos.staking.v1beta1.MsgEditValidator": MsgEditValidator,
  "/cosmos.staking.v1beta1.MsgDelegate": MsgDelegate,
  "/cosmos.staking.v1beta1.MsgBeginRedelegate": MsgBeginRedelegate,
  "/cosmos.staking.v1beta1.MsgUndelegate": MsgUndelegate
};