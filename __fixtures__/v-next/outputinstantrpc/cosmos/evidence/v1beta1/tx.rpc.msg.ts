import { Any, AnySDKType } from "../../../google/protobuf/any";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSubmitEvidence, MsgSubmitEvidenceSDKType, MsgSubmitEvidenceResponse, MsgSubmitEvidenceResponseSDKType } from "./tx";
/** Msg defines the evidence Msg service. */
export interface Msg {
  /**
   * SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
   * counterfactual signing.
   */
  submitEvidence(request: BroadcastTxReq<MsgSubmitEvidence>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
   counterfactual signing. */
  submitEvidence = async (request: BroadcastTxReq<MsgSubmitEvidence>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSubmitEvidence.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};