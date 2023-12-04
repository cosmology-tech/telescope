import { Counterparty, CounterpartySDKType, Version, VersionSDKType } from "./connection";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType } from "../../client/v1/client";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { MsgConnectionOpenInit, MsgConnectionOpenInitSDKType, MsgConnectionOpenInitResponse, MsgConnectionOpenInitResponseSDKType, MsgConnectionOpenTry, MsgConnectionOpenTrySDKType, MsgConnectionOpenTryResponse, MsgConnectionOpenTryResponseSDKType, MsgConnectionOpenAck, MsgConnectionOpenAckSDKType, MsgConnectionOpenAckResponse, MsgConnectionOpenAckResponseSDKType, MsgConnectionOpenConfirm, MsgConnectionOpenConfirmSDKType, MsgConnectionOpenConfirmResponse, MsgConnectionOpenConfirmResponseSDKType } from "./tx";
/** Msg defines the ibc/connection Msg service. */
export interface Msg {
  /** ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
  connectionOpenInit(request: BroadcastTxReq<MsgConnectionOpenInit>): Promise<DeliverTxResponse>;
  /** ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
  connectionOpenTry(request: BroadcastTxReq<MsgConnectionOpenTry>): Promise<DeliverTxResponse>;
  /** ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
  connectionOpenAck(request: BroadcastTxReq<MsgConnectionOpenAck>): Promise<DeliverTxResponse>;
  /**
   * ConnectionOpenConfirm defines a rpc handler method for
   * MsgConnectionOpenConfirm.
   */
  connectionOpenConfirm(request: BroadcastTxReq<MsgConnectionOpenConfirm>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
  connectionOpenInit = async (request: BroadcastTxReq<MsgConnectionOpenInit>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgConnectionOpenInit.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
  connectionOpenTry = async (request: BroadcastTxReq<MsgConnectionOpenTry>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgConnectionOpenTry.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
  connectionOpenAck = async (request: BroadcastTxReq<MsgConnectionOpenAck>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgConnectionOpenAck.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* ConnectionOpenConfirm defines a rpc handler method for
   MsgConnectionOpenConfirm. */
  connectionOpenConfirm = async (request: BroadcastTxReq<MsgConnectionOpenConfirm>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgConnectionOpenConfirm.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};