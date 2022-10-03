/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { CertificateID, CertificateIDSDKType, MsgCreateCertificate, MsgCreateCertificateSDKType, MsgRevokeCertificate, MsgRevokeCertificateSDKType } from "./cert";
export interface AminoMsgCreateCertificate extends AminoMsg {
  type: "akash/cert/v1beta2/testonly-create-certificate";
  value: {
    owner: string;
    cert: Uint8Array;
    pubkey: Uint8Array;
  };
}
export interface AminoMsgRevokeCertificate extends AminoMsg {
  type: "akash/cert/v1beta2/testonly-revoke-certificate";
  value: {
    id: {
      owner: string;
      serial: string;
    };
  };
}
export const AminoConverter = {
  "/akash.cert.v1beta2.MsgCreateCertificate": {
    aminoType: "akash/cert/v1beta2/testonly-create-certificate",
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
    aminoType: "akash/cert/v1beta2/testonly-revoke-certificate",
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