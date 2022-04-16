import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../../amino.helpers";
import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm, MsgConnectionOpenInitResponse, MsgConnectionOpenTryResponse, MsgConnectionOpenAckResponse, MsgConnectionOpenConfirmResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Counterparty, Version } from "../../../../ibc/core/connection/v1/connection";
import { Any } from "../../../../google/protobuf/any";
import { Height } from "../../../../ibc/core/client/v1/client";
export const encoded = {
  connectionOpenInit(value: MsgConnectionOpenInit) {
    return {
      type_url: "/ibc.core.connection.v1.MsgConnectionOpenInit",
      value: MsgConnectionOpenInit.encode(value).finish()
    };
  },

  connectionOpenTry(value: MsgConnectionOpenTry) {
    return {
      type_url: "/ibc.core.connection.v1.MsgConnectionOpenTry",
      value: MsgConnectionOpenTry.encode(value).finish()
    };
  },

  connectionOpenAck(value: MsgConnectionOpenAck) {
    return {
      type_url: "/ibc.core.connection.v1.MsgConnectionOpenAck",
      value: MsgConnectionOpenAck.encode(value).finish()
    };
  },

  connectionOpenConfirm(value: MsgConnectionOpenConfirm) {
    return {
      type_url: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
      value: MsgConnectionOpenConfirm.encode(value).finish()
    };
  }

};