import { MsgSend, MsgMultiSend } from "./tx";
export declare const json: {
    send(value: MsgSend): {
        typeUrl: string;
        value: MsgSend;
    };
    multiSend(value: MsgMultiSend): {
        typeUrl: string;
        value: MsgMultiSend;
    };
};
