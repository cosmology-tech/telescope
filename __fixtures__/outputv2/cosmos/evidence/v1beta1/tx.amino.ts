import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { MsgSubmitEvidence, MsgSubmitEvidenceAmino, MsgSubmitEvidenceSDKType } from "./tx";
export const AminoConverter = {
  "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
    aminoType: "cosmos-sdk/MsgSubmitEvidence",
    toAmino: MsgSubmitEvidence.toAmino,
    fromAmino: MsgSubmitEvidence.fromAmino
  }
};