import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement } from "./tx";
export declare const messages: {
    channelOpenInit(value: MsgChannelOpenInit): {
        typeUrl: string;
        value: MsgChannelOpenInit;
    };
    channelOpenTry(value: MsgChannelOpenTry): {
        typeUrl: string;
        value: MsgChannelOpenTry;
    };
    channelOpenAck(value: MsgChannelOpenAck): {
        typeUrl: string;
        value: MsgChannelOpenAck;
    };
    channelOpenConfirm(value: MsgChannelOpenConfirm): {
        typeUrl: string;
        value: MsgChannelOpenConfirm;
    };
    channelCloseInit(value: MsgChannelCloseInit): {
        typeUrl: string;
        value: MsgChannelCloseInit;
    };
    channelCloseConfirm(value: MsgChannelCloseConfirm): {
        typeUrl: string;
        value: MsgChannelCloseConfirm;
    };
    recvPacket(value: MsgRecvPacket): {
        typeUrl: string;
        value: MsgRecvPacket;
    };
    timeout(value: MsgTimeout): {
        typeUrl: string;
        value: MsgTimeout;
    };
    timeoutOnClose(value: MsgTimeoutOnClose): {
        typeUrl: string;
        value: MsgTimeoutOnClose;
    };
    acknowledgement(value: MsgAcknowledgement): {
        typeUrl: string;
        value: MsgAcknowledgement;
    };
};
