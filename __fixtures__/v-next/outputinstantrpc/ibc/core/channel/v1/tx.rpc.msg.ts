import { Channel, ChannelSDKType, Packet, PacketSDKType } from "./channel";
import { Height, HeightSDKType } from "../../client/v1/client";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { MsgChannelOpenInit, MsgChannelOpenInitSDKType, MsgChannelOpenInitResponse, MsgChannelOpenInitResponseSDKType, MsgChannelOpenTry, MsgChannelOpenTrySDKType, MsgChannelOpenTryResponse, MsgChannelOpenTryResponseSDKType, MsgChannelOpenAck, MsgChannelOpenAckSDKType, MsgChannelOpenAckResponse, MsgChannelOpenAckResponseSDKType, MsgChannelOpenConfirm, MsgChannelOpenConfirmSDKType, MsgChannelOpenConfirmResponse, MsgChannelOpenConfirmResponseSDKType, MsgChannelCloseInit, MsgChannelCloseInitSDKType, MsgChannelCloseInitResponse, MsgChannelCloseInitResponseSDKType, MsgChannelCloseConfirm, MsgChannelCloseConfirmSDKType, MsgChannelCloseConfirmResponse, MsgChannelCloseConfirmResponseSDKType, MsgRecvPacket, MsgRecvPacketSDKType, MsgRecvPacketResponse, MsgRecvPacketResponseSDKType, MsgTimeout, MsgTimeoutSDKType, MsgTimeoutResponse, MsgTimeoutResponseSDKType, MsgTimeoutOnClose, MsgTimeoutOnCloseSDKType, MsgTimeoutOnCloseResponse, MsgTimeoutOnCloseResponseSDKType, MsgAcknowledgement, MsgAcknowledgementSDKType, MsgAcknowledgementResponse, MsgAcknowledgementResponseSDKType } from "./tx";
/** Msg defines the ibc/channel Msg service. */
export interface Msg {
  /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
  channelOpenInit(request: BroadcastTxReq<MsgChannelOpenInit>): Promise<DeliverTxResponse>;
  /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
  channelOpenTry(request: BroadcastTxReq<MsgChannelOpenTry>): Promise<DeliverTxResponse>;
  /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
  channelOpenAck(request: BroadcastTxReq<MsgChannelOpenAck>): Promise<DeliverTxResponse>;
  /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
  channelOpenConfirm(request: BroadcastTxReq<MsgChannelOpenConfirm>): Promise<DeliverTxResponse>;
  /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
  channelCloseInit(request: BroadcastTxReq<MsgChannelCloseInit>): Promise<DeliverTxResponse>;
  /**
   * ChannelCloseConfirm defines a rpc handler method for
   * MsgChannelCloseConfirm.
   */
  channelCloseConfirm(request: BroadcastTxReq<MsgChannelCloseConfirm>): Promise<DeliverTxResponse>;
  /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
  recvPacket(request: BroadcastTxReq<MsgRecvPacket>): Promise<DeliverTxResponse>;
  /** Timeout defines a rpc handler method for MsgTimeout. */
  timeout(request: BroadcastTxReq<MsgTimeout>): Promise<DeliverTxResponse>;
  /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
  timeoutOnClose(request: BroadcastTxReq<MsgTimeoutOnClose>): Promise<DeliverTxResponse>;
  /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
  acknowledgement(request: BroadcastTxReq<MsgAcknowledgement>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
  channelOpenInit = async (request: BroadcastTxReq<MsgChannelOpenInit>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelOpenInit.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
  channelOpenTry = async (request: BroadcastTxReq<MsgChannelOpenTry>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelOpenTry.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
  channelOpenAck = async (request: BroadcastTxReq<MsgChannelOpenAck>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelOpenAck.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
  channelOpenConfirm = async (request: BroadcastTxReq<MsgChannelOpenConfirm>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelOpenConfirm.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
  channelCloseInit = async (request: BroadcastTxReq<MsgChannelCloseInit>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelCloseInit.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* ChannelCloseConfirm defines a rpc handler method for
   MsgChannelCloseConfirm. */
  channelCloseConfirm = async (request: BroadcastTxReq<MsgChannelCloseConfirm>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelCloseConfirm.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* RecvPacket defines a rpc handler method for MsgRecvPacket. */
  recvPacket = async (request: BroadcastTxReq<MsgRecvPacket>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRecvPacket.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* Timeout defines a rpc handler method for MsgTimeout. */
  timeout = async (request: BroadcastTxReq<MsgTimeout>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgTimeout.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
  timeoutOnClose = async (request: BroadcastTxReq<MsgTimeoutOnClose>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgTimeoutOnClose.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
  acknowledgement = async (request: BroadcastTxReq<MsgAcknowledgement>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgAcknowledgement.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};