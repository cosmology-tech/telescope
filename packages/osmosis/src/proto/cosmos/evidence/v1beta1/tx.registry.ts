import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgSubmitEvidence, MsgSubmitEvidenceResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Registry, GeneratedType } from "@cosmjs/proto-signing";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.evidence.v1beta1.MsgSubmitEvidence", MsgSubmitEvidence]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};