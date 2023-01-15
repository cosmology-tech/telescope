import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { fetchReq } from "../../../grpc-gateway";
import { MsgSubmitEvidence, MsgSubmitEvidenceSDKType, MsgSubmitEvidenceResponse, MsgSubmitEvidenceResponseSDKType } from "./tx";
export class Msg {
  static SubmitEvidence(request: MsgSubmitEvidence, initRequest?: fm.initReq): Promise<MsgSubmitEvidenceResponse> {
    return fm.fetchReq(`/cosmos.evidence.v1beta1.Msg/SubmitEvidence`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}