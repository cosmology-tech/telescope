import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../../amino.helpers";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgCreateClientResponse, MsgUpdateClientResponse, MsgUpgradeClientResponse, MsgSubmitMisbehaviourResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
export const encoded = {
  createClient(value: MsgCreateClient) {
    return {
      type_url: "/ibc.core.client.v1.MsgCreateClient",
      value: MsgCreateClient.encode(value).finish()
    };
  },

  updateClient(value: MsgUpdateClient) {
    return {
      type_url: "/ibc.core.client.v1.MsgUpdateClient",
      value: MsgUpdateClient.encode(value).finish()
    };
  },

  upgradeClient(value: MsgUpgradeClient) {
    return {
      type_url: "/ibc.core.client.v1.MsgUpgradeClient",
      value: MsgUpgradeClient.encode(value).finish()
    };
  },

  submitMisbehaviour(value: MsgSubmitMisbehaviour) {
    return {
      type_url: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
      value: MsgSubmitMisbehaviour.encode(value).finish()
    };
  }

};