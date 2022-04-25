import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { CertificateID, Certificate, CertificateFilter, MsgCreateCertificate, MsgRevokeCertificate, MsgCreateCertificateResponse, MsgRevokeCertificateResponse, Msg, Rpc } from "./cert";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
export const toJSON = {
  createCertificate(value: MsgCreateCertificate) {
    return {
      typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
      value: MsgCreateCertificate.toJSON(value)
    };
  },

  revokeCertificate(value: MsgRevokeCertificate) {
    return {
      typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
      value: MsgRevokeCertificate.toJSON(value)
    };
  }

};