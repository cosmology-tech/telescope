import { MsgTransfer } from "./tx";
export declare const encoded: {
    transfer(value: MsgTransfer): {
        type_url: string;
        value: Uint8Array;
    };
};
