/* eslint-disable */
import { Attribute, AttributeSDKType } from "../../base/v1beta1/attribute";
import { AminoMsg } from "@cosmjs/amino";
import { ProviderInfo, ProviderInfoSDKType, MsgCreateProvider, MsgCreateProviderSDKType, MsgUpdateProvider, MsgUpdateProviderSDKType, MsgDeleteProvider, MsgDeleteProviderSDKType } from "./provider";
export interface AminoMsgCreateProvider extends AminoMsg {
  type: "/akash.provider.v1beta1.MsgCreateProvider";
  value: {
    owner: string;
    host_uri: string;
    attributes: {
      key: string;
      value: string;
    }[];
    info: {
      email: string;
      website: string;
    };
  };
}
export interface AminoMsgUpdateProvider extends AminoMsg {
  type: "/akash.provider.v1beta1.MsgUpdateProvider";
  value: {
    owner: string;
    host_uri: string;
    attributes: {
      key: string;
      value: string;
    }[];
    info: {
      email: string;
      website: string;
    };
  };
}
export interface AminoMsgDeleteProvider extends AminoMsg {
  type: "/akash.provider.v1beta1.MsgDeleteProvider";
  value: {
    owner: string;
  };
}
export const AminoConverter = {
  "/akash.provider.v1beta1.MsgCreateProvider": {
    aminoType: "/akash.provider.v1beta1.MsgCreateProvider",
    toAmino: ({
      owner,
      hostUri,
      attributes,
      info
    }: MsgCreateProvider): AminoMsgCreateProvider["value"] => {
      return {
        owner,
        host_uri: hostUri,
        attributes: attributes.map(el0 => ({
          key: el0.key,
          value: el0.value
        })),
        info: {
          email: info.email,
          website: info.website
        }
      };
    },
    fromAmino: ({
      owner,
      host_uri,
      attributes,
      info
    }: AminoMsgCreateProvider["value"]): MsgCreateProvider => {
      return {
        owner,
        hostUri: host_uri,
        attributes: attributes.map(el0 => ({
          key: el0.key,
          value: el0.value
        })),
        info: {
          email: info.email,
          website: info.website
        }
      };
    }
  },
  "/akash.provider.v1beta1.MsgUpdateProvider": {
    aminoType: "/akash.provider.v1beta1.MsgUpdateProvider",
    toAmino: ({
      owner,
      hostUri,
      attributes,
      info
    }: MsgUpdateProvider): AminoMsgUpdateProvider["value"] => {
      return {
        owner,
        host_uri: hostUri,
        attributes: attributes.map(el0 => ({
          key: el0.key,
          value: el0.value
        })),
        info: {
          email: info.email,
          website: info.website
        }
      };
    },
    fromAmino: ({
      owner,
      host_uri,
      attributes,
      info
    }: AminoMsgUpdateProvider["value"]): MsgUpdateProvider => {
      return {
        owner,
        hostUri: host_uri,
        attributes: attributes.map(el0 => ({
          key: el0.key,
          value: el0.value
        })),
        info: {
          email: info.email,
          website: info.website
        }
      };
    }
  },
  "/akash.provider.v1beta1.MsgDeleteProvider": {
    aminoType: "/akash.provider.v1beta1.MsgDeleteProvider",
    toAmino: ({
      owner
    }: MsgDeleteProvider): AminoMsgDeleteProvider["value"] => {
      return {
        owner
      };
    },
    fromAmino: ({
      owner
    }: AminoMsgDeleteProvider["value"]): MsgDeleteProvider => {
      return {
        owner
      };
    }
  }
};