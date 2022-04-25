import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { ProviderInfo, MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider, Provider, MsgCreateProviderResponse, MsgUpdateProviderResponse, MsgDeleteProviderResponse, Msg, Rpc } from "./provider";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Attribute } from "../../../akash/base/v1beta2/attribute";
export const encoded = {
  createProvider(value: MsgCreateProvider) {
    return {
      type_url: "/akash.provider.v1beta2.MsgCreateProvider",
      value: MsgCreateProvider.encode(value).finish()
    };
  },

  updateProvider(value: MsgUpdateProvider) {
    return {
      type_url: "/akash.provider.v1beta2.MsgUpdateProvider",
      value: MsgUpdateProvider.encode(value).finish()
    };
  },

  deleteProvider(value: MsgDeleteProvider) {
    return {
      type_url: "/akash.provider.v1beta2.MsgDeleteProvider",
      value: MsgDeleteProvider.encode(value).finish()
    };
  }

};