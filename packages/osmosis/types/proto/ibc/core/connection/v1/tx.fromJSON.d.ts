import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm } from "./tx";
export declare const fromJSON: {
    connectionOpenInit(value: any): {
        typeUrl: string;
        value: MsgConnectionOpenInit;
    };
    connectionOpenTry(value: any): {
        typeUrl: string;
        value: MsgConnectionOpenTry;
    };
    connectionOpenAck(value: any): {
        typeUrl: string;
        value: MsgConnectionOpenAck;
    };
    connectionOpenConfirm(value: any): {
        typeUrl: string;
        value: MsgConnectionOpenConfirm;
    };
};
