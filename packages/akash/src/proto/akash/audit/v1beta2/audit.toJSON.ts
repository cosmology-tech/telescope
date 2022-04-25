import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { Provider, AuditedAttributes, AttributesResponse, AttributesFilters, MsgSignProviderAttributes, MsgDeleteProviderAttributes, MsgSignProviderAttributesResponse, MsgDeleteProviderAttributesResponse, Msg, Rpc } from "./audit";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Attribute } from "../../../akash/base/v1beta2/attribute";
export const toJSON = {
  signProviderAttributes(value: MsgSignProviderAttributes) {
    return {
      typeUrl: "/akash.audit.v1beta2.MsgSignProviderAttributes",
      value: MsgSignProviderAttributes.toJSON(value)
    };
  },

  deleteProviderAttributes(value: MsgDeleteProviderAttributes) {
    return {
      typeUrl: "/akash.audit.v1beta2.MsgDeleteProviderAttributes",
      value: MsgDeleteProviderAttributes.toJSON(value)
    };
  }

};