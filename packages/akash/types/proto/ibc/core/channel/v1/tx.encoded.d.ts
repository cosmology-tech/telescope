import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement } from "./tx";
export declare const encoded: {
    channelOpenInit(value: MsgChannelOpenInit): {
        type_url: string;
        value: Uint8Array;
    };
    channelOpenTry(value: MsgChannelOpenTry): {
        type_url: string;
        value: Uint8Array;
    };
    channelOpenAck(value: MsgChannelOpenAck): {
        type_url: string;
        value: Uint8Array;
    };
    channelOpenConfirm(value: MsgChannelOpenConfirm): {
        type_url: string;
        value: Uint8Array;
    };
    channelCloseInit(value: MsgChannelCloseInit): {
        type_url: string;
        value: Uint8Array;
    };
    channelCloseConfirm(value: MsgChannelCloseConfirm): {
        type_url: string;
        value: Uint8Array;
    };
    recvPacket(value: MsgRecvPacket): {
        type_url: string;
        value: Uint8Array;
    };
    timeout(value: MsgTimeout): {
        type_url: string;
        value: Uint8Array;
    };
    timeoutOnClose(value: MsgTimeoutOnClose): {
        type_url: string;
        value: Uint8Array;
    };
    acknowledgement(value: MsgAcknowledgement): {
        type_url: string;
        value: Uint8Array;
    };
};
