import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../amino.helpers";
import { MsgCreateGauge, MsgAddToGauge, MsgCreateGaugeResponse, MsgAddToGaugeResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { QueryCondition } from "../../osmosis/lockup/lock";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Registry } from "@cosmjs/proto-signing";
export const registry = {
  "/osmosis.incentives.MsgCreateGauge": MsgCreateGauge,
  "/osmosis.incentives.MsgAddToGauge": MsgAddToGauge
};
export const load = (protoRegistry: Registry) => {
  Object.keys(registry).forEach(typeUrl => {
    protoRegistry.register(typeUrl, registry[typeUrl]);
  });
};