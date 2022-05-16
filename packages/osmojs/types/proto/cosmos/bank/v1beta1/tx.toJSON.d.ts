import { MsgSend, MsgMultiSend } from "./tx";
export declare const toJSON: {
    send(value: MsgSend): {
        typeUrl: string;
        value: unknown;
    };
    multiSend(value: MsgMultiSend): {
        typeUrl: string;
        value: unknown;
    };
};
