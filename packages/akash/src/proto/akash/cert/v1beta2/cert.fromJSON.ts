import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { CertificateID, Certificate, CertificateFilter, MsgCreateCertificate, MsgRevokeCertificate, MsgCreateCertificateResponse, MsgRevokeCertificateResponse, Msg, Rpc } from "./cert";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
export const fromJSON = {
  createCertificate(value: any) {
    return {
      typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
      value: MsgCreateCertificate.fromJSON(value)
    };
  },

  revokeCertificate(value: any) {
    return {
      typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
      value: MsgRevokeCertificate.fromJSON(value)
    };
  }

};