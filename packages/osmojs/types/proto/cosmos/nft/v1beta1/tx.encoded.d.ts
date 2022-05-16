import { MsgSend } from "./tx";
export declare const encoded: {
    send(value: MsgSend): {
        type_url: string;
        value: Uint8Array;
    };
};
