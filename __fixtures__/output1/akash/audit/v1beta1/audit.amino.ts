import { Attribute, AttributeSDKType } from "../../base/v1beta1/attribute";
import { AminoMsg } from "@cosmjs/amino";
import { MsgSignProviderAttributes, MsgSignProviderAttributesSDKType, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesSDKType } from "./audit";
export interface AminoMsgSignProviderAttributes extends AminoMsg {
  type: "akash/audit/testonly-sign-provider-attributes";
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
  type: "akash/audit/testonly-delete-provider-attributes";
  value: {
    owner: string;
    auditor: string;
    keys: string[];
  };
}
export const AminoConverter = {
  "/akash.audit.v1beta1.MsgSignProviderAttributes": {
    aminoType: "akash/audit/testonly-sign-provider-attributes",
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
    aminoType: "akash/audit/testonly-delete-provider-attributes",
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