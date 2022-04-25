import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../../amino.helpers";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgCreateClientResponse, MsgUpdateClientResponse, MsgUpgradeClientResponse, MsgSubmitMisbehaviourResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
export const fromJSON = {
  createClient(value: any) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgCreateClient",
      value: MsgCreateClient.fromJSON(value)
    };
  },

  updateClient(value: any) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
      value: MsgUpdateClient.fromJSON(value)
    };
  },

  upgradeClient(value: any) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
      value: MsgUpgradeClient.fromJSON(value)
    };
  },

  submitMisbehaviour(value: any) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
      value: MsgSubmitMisbehaviour.fromJSON(value)
    };
  }

};