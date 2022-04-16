import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgGrantAllowance, MsgRevokeAllowance, MsgGrantAllowanceResponse, MsgRevokeAllowanceResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export interface AminoMsgGrantAllowance extends AminoMsg {
  type: "cosmos-sdk/MsgGrantAllowance";
  value: {
    granter: string;
    grantee: string;
    allowance: {
      type_url: string;
      value: Uint8Array;
    };
  };
}
export interface AminoMsgRevokeAllowance extends AminoMsg {
  type: "cosmos-sdk/MsgRevokeAllowance";
  value: {
    granter: string;
    grantee: string;
  };
}
export const AminoConverter = {
  "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
    aminoType: "cosmos-sdk/MsgGrantAllowance",
    toAmino: ({
      granter,
      grantee,
      allowance
    }: MsgGrantAllowance): AminoMsgGrantAllowance["value"] => {
      return {
        granter,
        grantee,
        allowance: {
          type_url: allowance.typeUrl,
          value: allowance.value
        }
      };
    },
    fromAmino: ({
      granter,
      grantee,
      allowance
    }: AminoMsgGrantAllowance["value"]): MsgGrantAllowance => {
      return {
        granter,
        grantee,
        allowance: {
          typeUrl: allowance.type_url,
          value: allowance.value
        }
      };
    }
  },
  "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
    aminoType: "cosmos-sdk/MsgRevokeAllowance",
    toAmino: ({
      granter,
      grantee
    }: MsgRevokeAllowance): AminoMsgRevokeAllowance["value"] => {
      return {
        granter,
        grantee
      };
    },
    fromAmino: ({
      granter,
      grantee
    }: AminoMsgRevokeAllowance["value"]): MsgRevokeAllowance => {
      return {
        granter,
        grantee
      };
    }
  }
};