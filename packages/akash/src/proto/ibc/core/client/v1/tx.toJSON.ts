import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../../amino.helpers";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgCreateClientResponse, MsgUpdateClientResponse, MsgUpgradeClientResponse, MsgSubmitMisbehaviourResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
export const toJSON = {
  createClient(value: MsgCreateClient) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgCreateClient",
      value: MsgCreateClient.toJSON(value)
    };
  },

  updateClient(value: MsgUpdateClient) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
      value: MsgUpdateClient.toJSON(value)
    };
  },

  upgradeClient(value: MsgUpgradeClient) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
      value: MsgUpgradeClient.toJSON(value)
    };
  },

  submitMisbehaviour(value: MsgSubmitMisbehaviour) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
      value: MsgSubmitMisbehaviour.toJSON(value)
    };
  }

};