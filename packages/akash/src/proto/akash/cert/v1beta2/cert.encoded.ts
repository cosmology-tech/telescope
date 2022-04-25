import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { CertificateID, Certificate, CertificateFilter, MsgCreateCertificate, MsgRevokeCertificate, MsgCreateCertificateResponse, MsgRevokeCertificateResponse, Msg, Rpc } from "./cert";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
export const encoded = {
  createCertificate(value: MsgCreateCertificate) {
    return {
      type_url: "/akash.cert.v1beta2.MsgCreateCertificate",
      value: MsgCreateCertificate.encode(value).finish()
    };
  },

  revokeCertificate(value: MsgRevokeCertificate) {
    return {
      type_url: "/akash.cert.v1beta2.MsgRevokeCertificate",
      value: MsgRevokeCertificate.encode(value).finish()
    };
  }

};