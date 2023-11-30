import { Channel, ChannelSDKType, Packet, PacketSDKType } from "./channel";
import { Height, HeightSDKType } from "../../client/v1/client";
import { BroadcastTxRequest, BroadcastTxResponse, TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { MsgChannelOpenInit, MsgChannelOpenInitSDKType, MsgChannelOpenInitResponse, MsgChannelOpenInitResponseSDKType, MsgChannelOpenTry, MsgChannelOpenTrySDKType, MsgChannelOpenTryResponse, MsgChannelOpenTryResponseSDKType, MsgChannelOpenAck, MsgChannelOpenAckSDKType, MsgChannelOpenAckResponse, MsgChannelOpenAckResponseSDKType, MsgChannelOpenConfirm, MsgChannelOpenConfirmSDKType, MsgChannelOpenConfirmResponse, MsgChannelOpenConfirmResponseSDKType, MsgChannelCloseInit, MsgChannelCloseInitSDKType, MsgChannelCloseInitResponse, MsgChannelCloseInitResponseSDKType, MsgChannelCloseConfirm, MsgChannelCloseConfirmSDKType, MsgChannelCloseConfirmResponse, MsgChannelCloseConfirmResponseSDKType, MsgRecvPacket, MsgRecvPacketSDKType, MsgRecvPacketResponse, MsgRecvPacketResponseSDKType, MsgTimeout, MsgTimeoutSDKType, MsgTimeoutResponse, MsgTimeoutResponseSDKType, MsgTimeoutOnClose, MsgTimeoutOnCloseSDKType, MsgTimeoutOnCloseResponse, MsgTimeoutOnCloseResponseSDKType, MsgAcknowledgement, MsgAcknowledgementSDKType, MsgAcknowledgementResponse, MsgAcknowledgementResponseSDKType } from "./tx";
/** Msg defines the ibc/channel Msg service. */
export interface Msg {
  /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
  channelOpenInit(request: BroadcastTxRequest<MsgChannelOpenInit>): Promise<BroadcastTxResponse<MsgChannelOpenInitResponse>>;
  /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
  channelOpenTry(request: BroadcastTxRequest<MsgChannelOpenTry>): Promise<BroadcastTxResponse<MsgChannelOpenTryResponse>>;
  /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
  channelOpenAck(request: BroadcastTxRequest<MsgChannelOpenAck>): Promise<BroadcastTxResponse<MsgChannelOpenAckResponse>>;
  /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
  channelOpenConfirm(request: BroadcastTxRequest<MsgChannelOpenConfirm>): Promise<BroadcastTxResponse<MsgChannelOpenConfirmResponse>>;
  /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
  channelCloseInit(request: BroadcastTxRequest<MsgChannelCloseInit>): Promise<BroadcastTxResponse<MsgChannelCloseInitResponse>>;
  /**
   * ChannelCloseConfirm defines a rpc handler method for
   * MsgChannelCloseConfirm.
   */
  channelCloseConfirm(request: BroadcastTxRequest<MsgChannelCloseConfirm>): Promise<BroadcastTxResponse<MsgChannelCloseConfirmResponse>>;
  /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
  recvPacket(request: BroadcastTxRequest<MsgRecvPacket>): Promise<BroadcastTxResponse<MsgRecvPacketResponse>>;
  /** Timeout defines a rpc handler method for MsgTimeout. */
  timeout(request: BroadcastTxRequest<MsgTimeout>): Promise<BroadcastTxResponse<MsgTimeoutResponse>>;
  /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
  timeoutOnClose(request: BroadcastTxRequest<MsgTimeoutOnClose>): Promise<BroadcastTxResponse<MsgTimeoutOnCloseResponse>>;
  /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
  acknowledgement(request: BroadcastTxRequest<MsgAcknowledgement>): Promise<BroadcastTxResponse<MsgAcknowledgementResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
  channelOpenInit = async (request: BroadcastTxRequest<MsgChannelOpenInit>): Promise<BroadcastTxResponse<MsgChannelOpenInitResponse>> => {
    const data = [{
      typeUrl: MsgChannelOpenInit.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgChannelOpenInitResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
  channelOpenTry = async (request: BroadcastTxRequest<MsgChannelOpenTry>): Promise<BroadcastTxResponse<MsgChannelOpenTryResponse>> => {
    const data = [{
      typeUrl: MsgChannelOpenTry.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgChannelOpenTryResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
  channelOpenAck = async (request: BroadcastTxRequest<MsgChannelOpenAck>): Promise<BroadcastTxResponse<MsgChannelOpenAckResponse>> => {
    const data = [{
      typeUrl: MsgChannelOpenAck.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgChannelOpenAckResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
  channelOpenConfirm = async (request: BroadcastTxRequest<MsgChannelOpenConfirm>): Promise<BroadcastTxResponse<MsgChannelOpenConfirmResponse>> => {
    const data = [{
      typeUrl: MsgChannelOpenConfirm.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgChannelOpenConfirmResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
  channelCloseInit = async (request: BroadcastTxRequest<MsgChannelCloseInit>): Promise<BroadcastTxResponse<MsgChannelCloseInitResponse>> => {
    const data = [{
      typeUrl: MsgChannelCloseInit.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgChannelCloseInitResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* ChannelCloseConfirm defines a rpc handler method for
   MsgChannelCloseConfirm. */
  channelCloseConfirm = async (request: BroadcastTxRequest<MsgChannelCloseConfirm>): Promise<BroadcastTxResponse<MsgChannelCloseConfirmResponse>> => {
    const data = [{
      typeUrl: MsgChannelCloseConfirm.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgChannelCloseConfirmResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* RecvPacket defines a rpc handler method for MsgRecvPacket. */
  recvPacket = async (request: BroadcastTxRequest<MsgRecvPacket>): Promise<BroadcastTxResponse<MsgRecvPacketResponse>> => {
    const data = [{
      typeUrl: MsgRecvPacket.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgRecvPacketResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* Timeout defines a rpc handler method for MsgTimeout. */
  timeout = async (request: BroadcastTxRequest<MsgTimeout>): Promise<BroadcastTxResponse<MsgTimeoutResponse>> => {
    const data = [{
      typeUrl: MsgTimeout.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgTimeoutResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
  timeoutOnClose = async (request: BroadcastTxRequest<MsgTimeoutOnClose>): Promise<BroadcastTxResponse<MsgTimeoutOnCloseResponse>> => {
    const data = [{
      typeUrl: MsgTimeoutOnClose.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgTimeoutOnCloseResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
  acknowledgement = async (request: BroadcastTxRequest<MsgAcknowledgement>): Promise<BroadcastTxResponse<MsgAcknowledgementResponse>> => {
    const data = [{
      typeUrl: MsgAcknowledgement.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgAcknowledgementResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}