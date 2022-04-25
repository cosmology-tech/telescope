import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm } from "./tx";
export declare const encoded: {
    connectionOpenInit(value: MsgConnectionOpenInit): {
        type_url: string;
        value: Uint8Array;
    };
    connectionOpenTry(value: MsgConnectionOpenTry): {
        type_url: string;
        value: Uint8Array;
    };
    connectionOpenAck(value: MsgConnectionOpenAck): {
        type_url: string;
        value: Uint8Array;
    };
    connectionOpenConfirm(value: MsgConnectionOpenConfirm): {
        type_url: string;
        value: Uint8Array;
    };
};
