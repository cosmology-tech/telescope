import { Counterparty, CounterpartySDKType, Version, VersionSDKType } from "./connection";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType } from "../../client/v1/client";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { MsgConnectionOpenInit, MsgConnectionOpenInitSDKType, MsgConnectionOpenInitResponse, MsgConnectionOpenInitResponseSDKType, MsgConnectionOpenTry, MsgConnectionOpenTrySDKType, MsgConnectionOpenTryResponse, MsgConnectionOpenTryResponseSDKType, MsgConnectionOpenAck, MsgConnectionOpenAckSDKType, MsgConnectionOpenAckResponse, MsgConnectionOpenAckResponseSDKType, MsgConnectionOpenConfirm, MsgConnectionOpenConfirmSDKType, MsgConnectionOpenConfirmResponse, MsgConnectionOpenConfirmResponseSDKType } from "./tx";
/** Msg defines the ibc/connection Msg service. */
export interface Msg {
  /** ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
  connectionOpenInit(request: BroadcastTxReq<MsgConnectionOpenInit>): Promise<BroadcastTxRes<MsgConnectionOpenInitResponse>>;
  /** ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
  connectionOpenTry(request: BroadcastTxReq<MsgConnectionOpenTry>): Promise<BroadcastTxRes<MsgConnectionOpenTryResponse>>;
  /** ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
  connectionOpenAck(request: BroadcastTxReq<MsgConnectionOpenAck>): Promise<BroadcastTxRes<MsgConnectionOpenAckResponse>>;
  /**
   * ConnectionOpenConfirm defines a rpc handler method for
   * MsgConnectionOpenConfirm.
   */
  connectionOpenConfirm(request: BroadcastTxReq<MsgConnectionOpenConfirm>): Promise<BroadcastTxRes<MsgConnectionOpenConfirmResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
  connectionOpenInit = async (request: BroadcastTxReq<MsgConnectionOpenInit>): Promise<BroadcastTxRes<MsgConnectionOpenInitResponse>> => {
    const data = [{
      typeUrl: MsgConnectionOpenInit.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgConnectionOpenInitResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
  connectionOpenTry = async (request: BroadcastTxReq<MsgConnectionOpenTry>): Promise<BroadcastTxRes<MsgConnectionOpenTryResponse>> => {
    const data = [{
      typeUrl: MsgConnectionOpenTry.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgConnectionOpenTryResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
  connectionOpenAck = async (request: BroadcastTxReq<MsgConnectionOpenAck>): Promise<BroadcastTxRes<MsgConnectionOpenAckResponse>> => {
    const data = [{
      typeUrl: MsgConnectionOpenAck.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgConnectionOpenAckResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* ConnectionOpenConfirm defines a rpc handler method for
   MsgConnectionOpenConfirm. */
  connectionOpenConfirm = async (request: BroadcastTxReq<MsgConnectionOpenConfirm>): Promise<BroadcastTxRes<MsgConnectionOpenConfirmResponse>> => {
    const data = [{
      typeUrl: MsgConnectionOpenConfirm.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgConnectionOpenConfirmResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}
export const createMsgClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};