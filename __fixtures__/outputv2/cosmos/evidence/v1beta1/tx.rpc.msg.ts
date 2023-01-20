import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as fm from "../../../grpc-gateway";
import { MsgSubmitEvidence, MsgSubmitEvidenceSDKType, MsgSubmitEvidenceResponse, MsgSubmitEvidenceResponseSDKType } from "./tx";
export class Msg {
  static SubmitEvidence(request: MsgSubmitEvidence, initRequest?: fm.InitReq): Promise<MsgSubmitEvidenceResponse> {
    return fm.fetchReq(`/cosmos.evidence.v1beta1/SubmitEvidence`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}