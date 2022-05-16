import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm } from "./tx";
export declare const messages: {
    connectionOpenInit(value: MsgConnectionOpenInit): {
        typeUrl: string;
        value: MsgConnectionOpenInit;
    };
    connectionOpenTry(value: MsgConnectionOpenTry): {
        typeUrl: string;
        value: MsgConnectionOpenTry;
    };
    connectionOpenAck(value: MsgConnectionOpenAck): {
        typeUrl: string;
        value: MsgConnectionOpenAck;
    };
    connectionOpenConfirm(value: MsgConnectionOpenConfirm): {
        typeUrl: string;
        value: MsgConnectionOpenConfirm;
    };
};
