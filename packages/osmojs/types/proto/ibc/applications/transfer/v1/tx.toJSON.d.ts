import { MsgTransfer } from "./tx";
export declare const toJSON: {
    transfer(value: MsgTransfer): {
        typeUrl: string;
        value: unknown;
    };
};
