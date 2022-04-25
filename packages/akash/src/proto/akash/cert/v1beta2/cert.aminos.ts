import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { CertificateID, Certificate, CertificateFilter, MsgCreateCertificate, MsgRevokeCertificate, MsgCreateCertificateResponse, MsgRevokeCertificateResponse, Msg, Rpc } from "./cert";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
export interface AminoMsgCreateCertificate extends AminoMsg {
  type: "/akash.cert.v1beta2.MsgCreateCertificate";
  value: {
    owner: string;
    cert: Uint8Array;
    pubkey: Uint8Array;
  };
}
export interface AminoMsgRevokeCertificate extends AminoMsg {
  type: "/akash.cert.v1beta2.MsgRevokeCertificate";
  value: {
    id: {
      owner: string;
      serial: string;
    };
  };
}
export const AminoConverter = {
  "/akash.cert.v1beta2.MsgCreateCertificate": {
    aminoType: "/akash.cert.v1beta2.MsgCreateCertificate",
    toAmino: ({
      owner,
      cert,
      pubkey
    }: MsgCreateCertificate): AminoMsgCreateCertificate["value"] => {
      return {
        owner,
        cert,
        pubkey
      };
    },
    fromAmino: ({
      owner,
      cert,
      pubkey
    }: AminoMsgCreateCertificate["value"]): MsgCreateCertificate => {
      return {
        owner,
        cert,
        pubkey
      };
    }
  },
  "/akash.cert.v1beta2.MsgRevokeCertificate": {
    aminoType: "/akash.cert.v1beta2.MsgRevokeCertificate",
    toAmino: ({
      id
    }: MsgRevokeCertificate): AminoMsgRevokeCertificate["value"] => {
      return {
        id: {
          owner: id.owner,
          serial: id.serial
        }
      };
    },
    fromAmino: ({
      id
    }: AminoMsgRevokeCertificate["value"]): MsgRevokeCertificate => {
      return {
        id: {
          owner: id.owner,
          serial: id.serial
        }
      };
    }
  }
};