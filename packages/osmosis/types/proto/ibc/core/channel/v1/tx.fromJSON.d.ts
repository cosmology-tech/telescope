import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement } from "./tx";
export declare const fromJSON: {
    channelOpenInit(value: any): {
        typeUrl: string;
        value: MsgChannelOpenInit;
    };
    channelOpenTry(value: any): {
        typeUrl: string;
        value: MsgChannelOpenTry;
    };
    channelOpenAck(value: any): {
        typeUrl: string;
        value: MsgChannelOpenAck;
    };
    channelOpenConfirm(value: any): {
        typeUrl: string;
        value: MsgChannelOpenConfirm;
    };
    channelCloseInit(value: any): {
        typeUrl: string;
        value: MsgChannelCloseInit;
    };
    channelCloseConfirm(value: any): {
        typeUrl: string;
        value: MsgChannelCloseConfirm;
    };
    recvPacket(value: any): {
        typeUrl: string;
        value: MsgRecvPacket;
    };
    timeout(value: any): {
        typeUrl: string;
        value: MsgTimeout;
    };
    timeoutOnClose(value: any): {
        typeUrl: string;
        value: MsgTimeoutOnClose;
    };
    acknowledgement(value: any): {
        typeUrl: string;
        value: MsgAcknowledgement;
    };
};
