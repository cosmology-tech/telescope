/* eslint-disable */
import { Attribute, AttributeSDKType } from "../../base/v1beta1/attribute";
import { MsgSignProviderAttributes, MsgSignProviderAttributesSDKType, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesSDKType } from "./audit";
export const AminoConverter = {
  "/akash.audit.v1beta1.MsgSignProviderAttributes": {
    aminoType: "akash/audit/testonly-sign-provider-attributes",
    toAmino: MsgSignProviderAttributes.toAmino,
    fromAmino: MsgSignProviderAttributes.fromAmino
  },
  "/akash.audit.v1beta1.MsgDeleteProviderAttributes": {
    aminoType: "akash/audit/testonly-delete-provider-attributes",
    toAmino: MsgDeleteProviderAttributes.toAmino,
    fromAmino: MsgDeleteProviderAttributes.fromAmino
  }
};