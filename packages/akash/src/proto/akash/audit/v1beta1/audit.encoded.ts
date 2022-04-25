import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { Provider, AuditedAttributes, AttributesResponse, AttributesFilters, MsgSignProviderAttributes, MsgDeleteProviderAttributes, MsgSignProviderAttributesResponse, MsgDeleteProviderAttributesResponse, Msg, Rpc } from "./audit";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Attribute } from "../../../akash/base/v1beta1/attribute";
export const encoded = {
  signProviderAttributes(value: MsgSignProviderAttributes) {
    return {
      type_url: "/akash.audit.v1beta1.MsgSignProviderAttributes",
      value: MsgSignProviderAttributes.encode(value).finish()
    };
  },

  deleteProviderAttributes(value: MsgDeleteProviderAttributes) {
    return {
      type_url: "/akash.audit.v1beta1.MsgDeleteProviderAttributes",
      value: MsgDeleteProviderAttributes.encode(value).finish()
    };
  }

};