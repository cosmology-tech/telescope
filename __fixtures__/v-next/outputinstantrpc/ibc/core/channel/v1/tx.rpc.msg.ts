import { Channel, ChannelSDKType, Packet, PacketSDKType } from "./channel";
import { Height, HeightSDKType } from "../../client/v1/client";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { MsgChannelOpenInit, MsgChannelOpenInitSDKType, MsgChannelOpenInitResponse, MsgChannelOpenInitResponseSDKType, MsgChannelOpenTry, MsgChannelOpenTrySDKType, MsgChannelOpenTryResponse, MsgChannelOpenTryResponseSDKType, MsgChannelOpenAck, MsgChannelOpenAckSDKType, MsgChannelOpenAckResponse, MsgChannelOpenAckResponseSDKType, MsgChannelOpenConfirm, MsgChannelOpenConfirmSDKType, MsgChannelOpenConfirmResponse, MsgChannelOpenConfirmResponseSDKType, MsgChannelCloseInit, MsgChannelCloseInitSDKType, MsgChannelCloseInitResponse, MsgChannelCloseInitResponseSDKType, MsgChannelCloseConfirm, MsgChannelCloseConfirmSDKType, MsgChannelCloseConfirmResponse, MsgChannelCloseConfirmResponseSDKType, MsgRecvPacket, MsgRecvPacketSDKType, MsgRecvPacketResponse, MsgRecvPacketResponseSDKType, MsgTimeout, MsgTimeoutSDKType, MsgTimeoutResponse, MsgTimeoutResponseSDKType, MsgTimeoutOnClose, MsgTimeoutOnCloseSDKType, MsgTimeoutOnCloseResponse, MsgTimeoutOnCloseResponseSDKType, MsgAcknowledgement, MsgAcknowledgementSDKType, MsgAcknowledgementResponse, MsgAcknowledgementResponseSDKType } from "./tx";
/** Msg defines the ibc/channel Msg service. */
export interface Msg {
  /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
  channelOpenInit(request: BroadcastTxReq<MsgChannelOpenInit>): Promise<BroadcastTxRes<MsgChannelOpenInitResponse>>;
  /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
  channelOpenTry(request: BroadcastTxReq<MsgChannelOpenTry>): Promise<BroadcastTxRes<MsgChannelOpenTryResponse>>;
  /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
  channelOpenAck(request: BroadcastTxReq<MsgChannelOpenAck>): Promise<BroadcastTxRes<MsgChannelOpenAckResponse>>;
  /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
  channelOpenConfirm(request: BroadcastTxReq<MsgChannelOpenConfirm>): Promise<BroadcastTxRes<MsgChannelOpenConfirmResponse>>;
  /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
  channelCloseInit(request: BroadcastTxReq<MsgChannelCloseInit>): Promise<BroadcastTxRes<MsgChannelCloseInitResponse>>;
  /**
   * ChannelCloseConfirm defines a rpc handler method for
   * MsgChannelCloseConfirm.
   */
  channelCloseConfirm(request: BroadcastTxReq<MsgChannelCloseConfirm>): Promise<BroadcastTxRes<MsgChannelCloseConfirmResponse>>;
  /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
  recvPacket(request: BroadcastTxReq<MsgRecvPacket>): Promise<BroadcastTxRes<MsgRecvPacketResponse>>;
  /** Timeout defines a rpc handler method for MsgTimeout. */
  timeout(request: BroadcastTxReq<MsgTimeout>): Promise<BroadcastTxRes<MsgTimeoutResponse>>;
  /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
  timeoutOnClose(request: BroadcastTxReq<MsgTimeoutOnClose>): Promise<BroadcastTxRes<MsgTimeoutOnCloseResponse>>;
  /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
  acknowledgement(request: BroadcastTxReq<MsgAcknowledgement>): Promise<BroadcastTxRes<MsgAcknowledgementResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
  channelOpenInit = async (request: BroadcastTxReq<MsgChannelOpenInit>): Promise<BroadcastTxRes<MsgChannelOpenInitResponse>> => {
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
  channelOpenTry = async (request: BroadcastTxReq<MsgChannelOpenTry>): Promise<BroadcastTxRes<MsgChannelOpenTryResponse>> => {
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
  channelOpenAck = async (request: BroadcastTxReq<MsgChannelOpenAck>): Promise<BroadcastTxRes<MsgChannelOpenAckResponse>> => {
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
  channelOpenConfirm = async (request: BroadcastTxReq<MsgChannelOpenConfirm>): Promise<BroadcastTxRes<MsgChannelOpenConfirmResponse>> => {
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
  channelCloseInit = async (request: BroadcastTxReq<MsgChannelCloseInit>): Promise<BroadcastTxRes<MsgChannelCloseInitResponse>> => {
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
  channelCloseConfirm = async (request: BroadcastTxReq<MsgChannelCloseConfirm>): Promise<BroadcastTxRes<MsgChannelCloseConfirmResponse>> => {
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
  recvPacket = async (request: BroadcastTxReq<MsgRecvPacket>): Promise<BroadcastTxRes<MsgRecvPacketResponse>> => {
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
  timeout = async (request: BroadcastTxReq<MsgTimeout>): Promise<BroadcastTxRes<MsgTimeoutResponse>> => {
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
  timeoutOnClose = async (request: BroadcastTxReq<MsgTimeoutOnClose>): Promise<BroadcastTxRes<MsgTimeoutOnCloseResponse>> => {
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
  acknowledgement = async (request: BroadcastTxReq<MsgAcknowledgement>): Promise<BroadcastTxRes<MsgAcknowledgementResponse>> => {
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