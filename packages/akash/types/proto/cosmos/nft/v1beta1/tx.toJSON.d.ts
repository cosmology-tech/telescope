import { MsgSend } from "./tx";
export declare const toJSON: {
    send(value: MsgSend): {
        typeUrl: string;
        value: unknown;
    };
};
