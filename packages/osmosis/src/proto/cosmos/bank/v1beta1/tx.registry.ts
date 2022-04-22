import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgSend, MsgMultiSend, MsgSendResponse, MsgMultiSendResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Input, Output } from "../../../cosmos/bank/v1beta1/bank";
import { Registry, GeneratedType } from "@cosmjs/proto-signing";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.bank.v1beta1.MsgSend", MsgSend], ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};