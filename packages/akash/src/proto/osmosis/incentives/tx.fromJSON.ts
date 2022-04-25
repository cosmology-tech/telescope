import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../amino.helpers";
import { MsgCreateGauge, MsgAddToGauge, MsgCreateGaugeResponse, MsgAddToGaugeResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { QueryCondition } from "../../osmosis/lockup/lock";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Coin } from "../../cosmos/base/v1beta1/coin";
export const fromJSON = {
  createGauge(value: any) {
    return {
      typeUrl: "/osmosis.incentives.MsgCreateGauge",
      value: MsgCreateGauge.fromJSON(value)
    };
  },

  addToGauge(value: any) {
    return {
      typeUrl: "/osmosis.incentives.MsgAddToGauge",
      value: MsgAddToGauge.fromJSON(value)
    };
  }

};