import { MsgSend, MsgMultiSend } from "./tx";
export declare const fromJSON: {
    send(value: any): {
        typeUrl: string;
        value: MsgSend;
    };
    multiSend(value: any): {
        typeUrl: string;
        value: MsgMultiSend;
    };
};
