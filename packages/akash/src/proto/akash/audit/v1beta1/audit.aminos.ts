import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { Provider, AuditedAttributes, AttributesResponse, AttributesFilters, MsgSignProviderAttributes, MsgDeleteProviderAttributes, MsgSignProviderAttributesResponse, MsgDeleteProviderAttributesResponse, Msg, Rpc } from "./audit";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Attribute } from "../../../akash/base/v1beta1/attribute";
export interface AminoMsgSignProviderAttributes extends AminoMsg {
  type: "/akash.audit.v1beta1.MsgSignProviderAttributes";
  value: {
    owner: string;
    auditor: string;
    attributes: {
      key: string;
      value: string;
    }[];
  };
}
export interface AminoMsgDeleteProviderAttributes extends AminoMsg {
  type: "/akash.audit.v1beta1.MsgDeleteProviderAttributes";
  value: {
    owner: string;
    auditor: string;
    keys: string[];
  };
}
export const AminoConverter = {
  "/akash.audit.v1beta1.MsgSignProviderAttributes": {
    aminoType: "/akash.audit.v1beta1.MsgSignProviderAttributes",
    toAmino: ({
      owner,
      auditor,
      attributes
    }: MsgSignProviderAttributes): AminoMsgSignProviderAttributes["value"] => {
      return {
        owner,
        auditor,
        attributes: attributes.map(el0 => ({
          key: el0.key,
          value: el0.value
        }))
      };
    },
    fromAmino: ({
      owner,
      auditor,
      attributes
    }: AminoMsgSignProviderAttributes["value"]): MsgSignProviderAttributes => {
      return {
        owner,
        auditor,
        attributes: attributes.map(el0 => ({
          key: el0.key,
          value: el0.value
        }))
      };
    }
  },
  "/akash.audit.v1beta1.MsgDeleteProviderAttributes": {
    aminoType: "/akash.audit.v1beta1.MsgDeleteProviderAttributes",
    toAmino: ({
      owner,
      auditor,
      keys
    }: MsgDeleteProviderAttributes): AminoMsgDeleteProviderAttributes["value"] => {
      return {
        owner,
        auditor,
        keys
      };
    },
    fromAmino: ({
      owner,
      auditor,
      keys
    }: AminoMsgDeleteProviderAttributes["value"]): MsgDeleteProviderAttributes => {
      return {
        owner,
        auditor,
        keys
      };
    }
  }
};