import { MsgTransfer } from "./tx";
export declare const messages: {
    transfer(value: MsgTransfer): {
        typeUrl: string;
        value: MsgTransfer;
    };
};
