import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement } from "./tx";
export declare const toJSON: {
    channelOpenInit(value: MsgChannelOpenInit): {
        typeUrl: string;
        value: unknown;
    };
    channelOpenTry(value: MsgChannelOpenTry): {
        typeUrl: string;
        value: unknown;
    };
    channelOpenAck(value: MsgChannelOpenAck): {
        typeUrl: string;
        value: unknown;
    };
    channelOpenConfirm(value: MsgChannelOpenConfirm): {
        typeUrl: string;
        value: unknown;
    };
    channelCloseInit(value: MsgChannelCloseInit): {
        typeUrl: string;
        value: unknown;
    };
    channelCloseConfirm(value: MsgChannelCloseConfirm): {
        typeUrl: string;
        value: unknown;
    };
    recvPacket(value: MsgRecvPacket): {
        typeUrl: string;
        value: unknown;
    };
    timeout(value: MsgTimeout): {
        typeUrl: string;
        value: unknown;
    };
    timeoutOnClose(value: MsgTimeoutOnClose): {
        typeUrl: string;
        value: unknown;
    };
    acknowledgement(value: MsgAcknowledgement): {
        typeUrl: string;
        value: unknown;
    };
};
