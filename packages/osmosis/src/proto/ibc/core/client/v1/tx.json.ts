import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../../amino.helpers";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgCreateClientResponse, MsgUpdateClientResponse, MsgUpgradeClientResponse, MsgSubmitMisbehaviourResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
export const json = {
  createClient(value: MsgCreateClient) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgCreateClient",
      value
    };
  },

  updateClient(value: MsgUpdateClient) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
      value
    };
  },

  upgradeClient(value: MsgUpgradeClient) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
      value
    };
  },

  submitMisbehaviour(value: MsgSubmitMisbehaviour) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
      value
    };
  }

};