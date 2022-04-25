import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgSubmitEvidence, MsgSubmitEvidenceResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export const toJSON = {
  submitEvidence(value: MsgSubmitEvidence) {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
      value: MsgSubmitEvidence.toJSON(value)
    };
  }

};