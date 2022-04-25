import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { CertificateID, Certificate, CertificateFilter, MsgCreateCertificate, MsgRevokeCertificate, MsgCreateCertificateResponse, MsgRevokeCertificateResponse, Msg, Rpc } from "./cert";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Registry, GeneratedType } from "@cosmjs/proto-signing";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/akash.cert.v1beta2.MsgCreateCertificate", MsgCreateCertificate], ["/akash.cert.v1beta2.MsgRevokeCertificate", MsgRevokeCertificate]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};