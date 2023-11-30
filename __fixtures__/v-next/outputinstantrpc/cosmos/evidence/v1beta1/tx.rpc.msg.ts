import { Any, AnySDKType } from "../../../google/protobuf/any";
import { BroadcastTxRequest, BroadcastTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSubmitEvidence, MsgSubmitEvidenceSDKType, MsgSubmitEvidenceResponse, MsgSubmitEvidenceResponseSDKType } from "./tx";
/** Msg defines the evidence Msg service. */
export interface Msg {
  /**
   * SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
   * counterfactual signing.
   */
  submitEvidence(request: BroadcastTxRequest<MsgSubmitEvidence>): Promise<BroadcastTxResponse<MsgSubmitEvidenceResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
   counterfactual signing. */
  submitEvidence = async (request: BroadcastTxRequest<MsgSubmitEvidence>): Promise<BroadcastTxResponse<MsgSubmitEvidenceResponse>> => {
    const data = [{
      typeUrl: MsgSubmitEvidence.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgSubmitEvidenceResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}