import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../../amino.helpers";
import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm, MsgConnectionOpenInitResponse, MsgConnectionOpenTryResponse, MsgConnectionOpenAckResponse, MsgConnectionOpenConfirmResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Counterparty, Version } from "../../../../ibc/core/connection/v1/connection";
import { Any } from "../../../../google/protobuf/any";
import { Height } from "../../../../ibc/core/client/v1/client";
export const registry = {
  "/ibc.core.connection.v1.MsgConnectionOpenInit": MsgConnectionOpenInit,
  "/ibc.core.connection.v1.MsgConnectionOpenTry": MsgConnectionOpenTry,
  "/ibc.core.connection.v1.MsgConnectionOpenAck": MsgConnectionOpenAck,
  "/ibc.core.connection.v1.MsgConnectionOpenConfirm": MsgConnectionOpenConfirm
};