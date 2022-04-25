import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { CertificateID, Certificate, CertificateFilter, MsgCreateCertificate, MsgRevokeCertificate, MsgCreateCertificateResponse, MsgRevokeCertificateResponse, Msg, Rpc } from "./cert";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
export const messages = {
  createCertificate(value: MsgCreateCertificate) {
    return {
      typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
      value: MsgCreateCertificate.fromPartial(value)
    };
  },

  revokeCertificate(value: MsgRevokeCertificate) {
    return {
      typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
      value: MsgRevokeCertificate.fromPartial(value)
    };
  }

};