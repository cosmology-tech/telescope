import { BroadcastTxRequest, BroadcastTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgVerifyInvariant, MsgVerifyInvariantSDKType, MsgVerifyInvariantResponse, MsgVerifyInvariantResponseSDKType } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
  /** VerifyInvariant defines a method to verify a particular invariance. */
  verifyInvariant(request: BroadcastTxRequest<MsgVerifyInvariant>): Promise<BroadcastTxResponse<MsgVerifyInvariantResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* VerifyInvariant defines a method to verify a particular invariance. */
  verifyInvariant = async (request: BroadcastTxRequest<MsgVerifyInvariant>): Promise<BroadcastTxResponse<MsgVerifyInvariantResponse>> => {
    const data = [{
      typeUrl: MsgVerifyInvariant.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgVerifyInvariantResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}